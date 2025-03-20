'use client';

import { useEffect } from 'react';
import { loadScript } from '@/lib/script-loader';

export function RecaptchaHandler() {
  useEffect(() => {
    const loadRecaptcha = async () => {
      const observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            try {
              // Configure reCAPTCHA to use partitioned cookies
              window.grecaptchaOptions = {
                usePartitionedCookies: true,
                cookieOptions: {
                  sameSite: 'None',
                  secure: true,
                  partitioned: true
                }
              };
              
              await loadScript('/api/recaptcha', {
                strategy: 'lazyOnload',
                attributes: {
                  crossOrigin: 'anonymous',
                  importance: 'low',
                  'data-cookiestore': 'partitioned'
                }
              });
              
              window.grecaptcha?.enterprise.ready(() => {
                const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
                if (!siteKey) return;
                
                window.grecaptcha.enterprise.execute(siteKey, {
                  action: 'homepage',
                  ...window.grecaptchaOptions
                });
              });
            } catch (error) {
              console.error('reCAPTCHA loading error:', error);
            } finally {
              observer.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(document.body);
    };

    loadRecaptcha();
  }, []);

  return null;
}
