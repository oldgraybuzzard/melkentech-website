'use client';

import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

const GoogleAnalytics = dynamic(() => 
  import('@next/third-parties/google').then(mod => mod.GoogleAnalytics)
);

const HotjarScript = dynamic(() => 
  import('@hotjar/browser').then(mod => {
    mod.default.init(
      parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID!),
      1
    );
    return () => null;
  }),
  { ssr: false }
);

export function ClientAnalytics() {
  return (
    <>
      <Analytics />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <HotjarScript />
    </>
  );
}