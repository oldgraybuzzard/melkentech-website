import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore founder-led consulting capabilities across modernization strategy, program execution, and technical delivery.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Melken TechWork',
    description: 'Consulting and execution support across documentation, software modernization, systems integration, and training.',
    url: '/services',
    type: 'website',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
