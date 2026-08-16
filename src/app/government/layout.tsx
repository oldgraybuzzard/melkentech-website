import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government',
  description: 'Government contracting profile, capability resources, and service areas for Melken TechWork.',
  alternates: { canonical: '/government' },
  openGraph: {
    title: 'Government | Melken TechWork',
    description: 'View contracting information, capabilities, and resources for government engagements.',
    url: '/government',
    type: 'website',
  },
};

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
