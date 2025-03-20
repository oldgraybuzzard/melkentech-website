import { NextResponse } from 'next/server';

async function validateTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !email || !message || !turnstileToken) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate Turnstile token
    const isValidToken = await validateTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Invalid security token' },
        { status: 400 }
      );
    }

    // Send email using Mailjet
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.MAILJET_API_KEY}:${process.env.MAILJET_API_SECRET}`).toString('base64')}`
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: process.env.MAILJET_SENDER_NAME
            },
            To: [
              {
                Email: process.env.CONTACT_FORM_RECIPIENT,
                Name: 'Melken TechWork'
              }
            ],
            Subject: `New Contact Form Submission from ${name}`,
            TextPart: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            HTMLPart: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
