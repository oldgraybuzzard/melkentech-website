'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the analyzer component with no SSR
const Analyzer = dynamic(() => import('@/components/Analyzer'), {
  ssr: false,
  loading: () => <div>Loading analyzer...</div>
});

export default function AnalyzePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <Analyzer />;
} 