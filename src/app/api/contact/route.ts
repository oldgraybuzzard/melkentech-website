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
    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    const mailgunFromEmail = process.env.MAILGUN_FROM_EMAIL;
    const mailgunFromName = process.env.MAILGUN_FROM_NAME || 'Melken TechWork';
    const contactRecipient = process.env.CONTACT_FORM_RECIPIENT;
    const mailgunApiBaseUrl = process.env.MAILGUN_API_BASE_URL || 'https://api.mailgun.net';

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

    if (!mailgunApiKey || !mailgunDomain || !mailgunFromEmail || !contactRecipient) {
      return NextResponse.json(
        { error: 'Mailgun configuration is missing' },
        { status: 500 }
      );
    }

    // Send email using Mailgun
    const response = await fetch(`${mailgunApiBaseUrl}/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        from: `${mailgunFromName} <${mailgunFromEmail}>`,
        to: contactRecipient,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        'h:Reply-To': `${name} <${email}>`,
      }).toString(),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to send email: ${errorBody}`);
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
