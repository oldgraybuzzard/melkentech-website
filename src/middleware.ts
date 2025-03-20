import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set(
    'Permissions-Policy',
    'browsing-topics=(), join-ad-interest-group=(), run-ad-auction=(), interest-cohort=(), third-party-cookies=()'
  );

  // Add partitioned cookies support
  response.headers.set('Accept-CH', 'Sec-CH-Partitioned-Cookies');
  response.headers.set('Critical-CH', 'Sec-CH-Partitioned-Cookies');

  // Handle Turnstile requests
  if (request.nextUrl.pathname.includes('turnstile')) {
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
    response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
    
    // Configure cookies for Turnstile
    const cookieHeader = [
      'Secure',
      'Path=/',
      'SameSite=None',
      'Partitioned',
      `Domain=${process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname : 'localhost'}`
    ].join('; ');
    
    response.headers.set('Set-Cookie', cookieHeader);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 
