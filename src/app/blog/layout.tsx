import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, updates, and technical perspectives from Melken TechWork.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Melken TechWork',
    description: 'Technical insights and company updates from Melken TechWork.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
