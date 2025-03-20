import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const recaptchaUrl = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    
    const response = await fetch(recaptchaUrl, {
      headers: {
        'Accept': 'application/javascript',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'no-cors'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch reCAPTCHA script');
    }

    const script = await response.text();

    return new NextResponse(script, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': 'true',
        'Permissions-Policy': 'browsing-topics=(), interest-cohort=()',
        'Cross-Origin-Resource-Policy': 'cross-origin',
        'Cross-Origin-Embedder-Policy': 'credentialless',
        'Accept-CH': 'Sec-CH-Partitioned-Cookies',
        'Critical-CH': 'Sec-CH-Partitioned-Cookies',
        'Partitioned': ''
      }
    });
  } catch (error) {
    console.error('reCAPTCHA proxy error:', error);
    return new NextResponse('Error loading reCAPTCHA', { status: 500 });
  }
}