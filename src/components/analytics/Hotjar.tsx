'use client';

import { useEffect, useState } from 'react';
import { loadScript } from '@/lib/script-loader';

declare global {
  interface Window {
    hj?: {
      q?: any[];
      (...args: any[]): void;
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
      // Check for window and HTTPS
      if (
        typeof window === 'undefined' || 
        isLoaded
      ) {
        return;
      }

      const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
      const hjsv = process.env.NEXT_PUBLIC_HOTJAR_VERSION;

      if (!hjid || !hjsv) {
        console.error('Hotjar configuration missing');
        return;
      }

      try {
        // Initialize Hotjar settings
        window._hjSettings = {
          hjid: hjid,
          hjsv: hjsv
        };

        // Initialize command queue
        const hj: { q: any[]; (...args: any[]): void } = function(...args: any[]) {
          (hj.q = hj.q || []).push(args);
        };
        hj.q = hj.q || [];
        window.hj = hj;

        // Only load script if we're on HTTPS or localhost
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

    // Load Hotjar after a short delay to prioritize core content
    const timeoutId = setTimeout(initHotjar, 2000);

    return () => clearTimeout(timeoutId);
  }, [isLoaded]);

  return null;
}
