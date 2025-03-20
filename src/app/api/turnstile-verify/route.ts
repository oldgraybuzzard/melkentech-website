import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

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

    // Set partitioned cookie header
    const headers = new Headers();
    headers.append('Set-Cookie', [
      '__Host-turnstile=1',
      'Secure',
      'Path=/',
      'SameSite=None',
      'Partitioned',
      'HttpOnly'
    ].join('; '));

    return NextResponse.json(data, {
      status: data.success ? 200 : 400,
      headers
    });
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Verification failed' },
      { status: 500 }
    );
  }
}