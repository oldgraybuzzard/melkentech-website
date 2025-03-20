import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Check if the request is using HTTPS
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const isSecure = protocol === 'https' || 
                     request.headers.get('host')?.includes('localhost') ||
                     request.headers.get('host')?.includes('127.0.0.1');

    if (!isSecure) {
      return new NextResponse('Hotjar requires HTTPS', { status: 403 });
    }

    const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;
    const hotjarVersion = process.env.NEXT_PUBLIC_HOTJAR_VERSION;

    if (!hotjarId || !hotjarVersion) {
      return new NextResponse('Hotjar configuration missing', { status: 500 });
    }

    // Validate hotjarId is a number
    if (isNaN(Number(hotjarId))) {
      return new NextResponse('Invalid Hotjar ID', { status: 400 });
    }

    const response = await fetch(
      `https://static.hotjar.com/c/hotjar-${hotjarId}.js?sv=${hotjarVersion}`,
      {
        headers: {
          'Accept': 'application/javascript',
          'Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        },
        next: {
          revalidate: 3600 // Cache for 1 hour
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Hotjar script');
    }

    const script = await response.text();
    
    // Wrap the Hotjar script in initialization code
    const wrappedScript = `
      if (typeof window !== 'undefined' && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        // Ensure _hjSettings exists
        window._hjSettings = window._hjSettings || {
          hjid: '${hotjarId}',
          hjsv: '${hotjarVersion}'
        };

        // Initialize hj queue
        window.hj = window.hj || function() {
          (window.hj.q = window.hj.q || []).push(arguments);
        };

        // Execute the original Hotjar script
        ${script}
      }
    `;
    
    return new NextResponse(wrappedScript, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': 'true',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Cross-Origin-Resource-Policy': 'cross-origin',
        'Cross-Origin-Embedder-Policy': 'credentialless',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      },
    });
  } catch (error) {
    console.error('Hotjar proxy error:', error);
    return new NextResponse('Error loading Hotjar script', { status: 500 });
  }
} 
