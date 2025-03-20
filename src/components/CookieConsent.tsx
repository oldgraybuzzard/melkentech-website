'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
