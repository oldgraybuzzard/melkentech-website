'use client';

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export function AnalyticsWrapper() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setShowAnalytics(consent === 'true');
  }, []);

  if (!showAnalytics) return null;

  return <Analytics />;
}