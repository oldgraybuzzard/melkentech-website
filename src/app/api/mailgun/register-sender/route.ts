import { NextResponse } from 'next/server';

export async function POST() {
  const mailgunApiKey = process.env.MAILGUN_API_KEY;
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunFromEmail = process.env.MAILGUN_FROM_EMAIL;

  if (!mailgunApiKey || !mailgunDomain || !mailgunFromEmail) {
    return NextResponse.json(
      {
        error: 'Mailgun API key, domain, and from email are required',
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Mailgun does not require sender registration via API for domain-based sending. Ensure your domain and DNS records are verified in the Mailgun dashboard.',
    domain: mailgunDomain,
    fromEmail: mailgunFromEmail,
  });
}
