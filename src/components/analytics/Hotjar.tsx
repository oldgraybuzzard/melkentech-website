'use client';

import { useEffect, useState } from 'react';
import { loadScript } from '@/lib/script-loader';

type HotjarCommand = (...args: unknown[]) => void;

// Extend Window interface directly
declare global {
  interface Window {
    hj?: HotjarCommand & {
      q?: unknown[];
    };
    _hjSettings?: {
      hjid: string;
      hjsv: string;
    };
  }
}

export function Hotjar() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initHotjar = async () => {
      if (typeof window === 'undefined' || isLoaded) {
        return;
      }

      const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
      const hjsv = process.env.NEXT_PUBLIC_HOTJAR_VERSION;

      if (!hjid || !hjsv) {
        console.error('Hotjar configuration missing');
        return;
      }

      try {
        window._hjSettings = {
          hjid: hjid,
          hjsv: hjsv
        };

        const hj: HotjarCommand & { q?: unknown[] } = function(...args: unknown[]) {
          (hj.q = hj.q || []).push(args);
        };
        hj.q = hj.q || [];
        window.hj = hj;

        const isSecure = window.location.protocol === 'https:' || 
                        window.location.hostname === 'localhost' ||
                        window.location.hostname === '127.0.0.1';

        if (!isSecure) {
          console.warn('Hotjar requires HTTPS. Skipping initialization.');
          return;
        }

        await loadScript('/api/hotjar', {
          strategy: 'lazyOnload',
          defer: true,
        });
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load Hotjar:', error);
      }
    };

    const timeoutId = setTimeout(initHotjar, 2000);

    return () => clearTimeout(timeoutId);
  }, [isLoaded]);

  return null;
}
