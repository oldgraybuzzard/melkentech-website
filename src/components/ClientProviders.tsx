'use client';

import dynamic from 'next/dynamic';

const AuthProvider = dynamic(() => import('@/lib/auth-context').then(mod => mod.AuthProvider), {
  ssr: false,
  loading: () => null
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuthProvider />
    </>
  );
} 