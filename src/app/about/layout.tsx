import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how founder-led Melken TechWork delivers consulting, modernization strategy, and direct execution support.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Melken TechWork',
    description: 'Founder leadership and strategy-through-execution consulting at Melken TechWork.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
