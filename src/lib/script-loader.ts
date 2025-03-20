type ScriptLoadOptions = {
  async?: boolean;
  defer?: boolean;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'worker';
  attributes?: Record<string, string>;
};

export const loadScript = (src: string, options: ScriptLoadOptions = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = options.async ?? true;
    script.defer = options.defer ?? true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    if (options.strategy === 'worker') {
      if ('Worker' in window) {
        try {
          new Worker(src, { type: 'module' });
          resolve();
          return;
        } catch (error) {
          console.warn('Worker loading failed, falling back to regular script:', error);
        }
      }
    }
    
    document.body.appendChild(script);
  });
};
