import { NextResponse } from 'next/server';
import { Client } from 'node-mailjet';

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_API_SECRET!
});

async function assessRecaptchaToken(token: string): Promise<boolean> {
  try {
    const projectId = process.env.RECAPTCHA_PROJECT_ID; // You'll need to add this to your .env
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RECAPTCHA_SECRET_KEY}`,
        },
        body: JSON.stringify({
          event: {
            token,
            siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            expectedAction: 'CONTACT_FORM_SUBMIT',
          },
        }),
      }
    );

    const data = await response.json();
    
    // Log the complete response for debugging
    console.log('reCAPTCHA Enterprise assessment response:', data);

    // Check if the token is valid and the score is acceptable
    return data.tokenProperties?.valid && data.riskAnalysis?.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA Enterprise assessment error:', error);
    return false;
  }
}

async function registerAndValidateSender(email: string, name: string) {
  try {
    const response = await mailjet
      .post('sender')
      .request({
        Email: email,
        Name: name,
        EmailType: 'transactional'
      });

    const body = response.body as { Data: Array<{ ID: number }> };
    if (body.Data?.[0]?.ID) {
      const senderId = body.Data[0].ID;
      await mailjet
        .post(`sender/${senderId}/validate`)
        .request();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to register sender:', error);
    return false;
  }
}

async function validateSender(email: string): Promise<boolean> {
  try {
    const response = await mailjet
      .get('sender')
      .request();

    const body = response.body as { Data: Array<{ Email: string, Status: string }> };
    const sender = body.Data.find(s => s.Email === email);
    
    if (!sender) {
      // If sender doesn't exist, try to register it
      return await registerAndValidateSender(
        email,
        process.env.MAILJET_SENDER_NAME || 'Website Contact Form'
      );
    }
    
    return sender.Status === 'Active';
  } catch (error) {
    console.error('Failed to check sender status:', error);
    return false;
  }
}

async function ensureSenderIsRegistered() {
  const response = await registerSender(new Request('http://localhost/api/mailjet/register-sender', {
    method: 'POST'
  }));
  
  if (!response.ok) {
    throw new Error('Failed to register sender');
  }
  
  return response.json();
}

export async function POST(request: Request) {
  try {
    const { name, email, company, message, recaptchaToken } = await request.json();

    // Verify reCAPTCHA Enterprise token
    const isValidRecaptcha = await assessRecaptchaToken(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA verification' },
        { status: 400 }
      );
    }

    const senderEmail = process.env.MAILJET_SENDER_EMAIL;
    
    if (!senderEmail) {
      console.error('Missing MAILJET_SENDER_EMAIL environment variable');
      return NextResponse.json(
        { error: 'Sender email not configured' },
        { status: 500 }
      );
    }

    // Log the attempt with full configuration
    console.log('Email Configuration:', {
      from: {
        email: senderEmail,
        name: process.env.MAILJET_SENDER_NAME
      },
      to: {
        email: process.env.MAILJET_RECIPIENT_EMAIL,
        name: process.env.MAILJET_RECIPIENT_NAME
      },
      apiVersion: 'v3.1'
    });

    try {
      const response = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: senderEmail,
                Name: process.env.MAILJET_SENDER_NAME || "Website Contact Form"
              },
              To: [
                {
                  Email: process.env.MAILJET_RECIPIENT_EMAIL!,
                  Name: process.env.MAILJET_RECIPIENT_NAME || "Recipient"
                }
              ],
              Subject: `New Contact Form Submission from ${name}`,
              TextPart: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
              `,
              HTMLPart: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
              `
            }
          ]
        });

      // Log the complete response
      console.log('Mailjet API Complete Response:', {
        status: response.response.status,
        headers: response.response.headers,
        data: JSON.stringify(response.body, null, 2)
      });

      if (response.response.status === 200) {
        // Extract message ID and status
        const body = response.body as { Messages: Array<{ To: Array<{ MessageID: string, MessageHref: string }>, Status: string }> };
        const messageInfo = body.Messages?.[0];
        console.log('Message Details:', {
          messageId: messageInfo?.To?.[0]?.MessageID,
          messageHref: messageInfo?.To?.[0]?.MessageHref,
          status: messageInfo?.Status
        });
        
        return NextResponse.json({ 
          success: true,
          messageId: messageInfo?.To?.[0]?.MessageID
        });
      } else {
        throw new Error(`Unexpected response status: ${response.response.status}`);
      }

    } catch (error) {
      console.error('Mailjet API Error:', {
        error: error instanceof Error ? {
          message: error.message,
          stack: error.stack,
          name: error.name
        } : error,
        config: {
          senderEmail,
          recipientEmail: process.env.MAILJET_RECIPIENT_EMAIL,
          apiKeyExists: !!process.env.MAILJET_API_KEY,
          apiSecretExists: !!process.env.MAILJET_API_SECRET
        }
      });

      throw error;
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
async function registerSender(request: Request): Promise<Response> {
  try {
    const { email, name } = await request.json();
    const isRegistered = await registerAndValidateSender(email, name);
    
    if (isRegistered) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to register sender' }), { status: 500 });
    }
  } catch (error) {
    console.error('Error in registerSender:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
