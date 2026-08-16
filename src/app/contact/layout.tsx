import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Melken TechWork to discuss founder-led consulting, modernization strategy, and execution support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Melken TechWork',
    description: 'Start a consulting conversation on strategy, modernization, and delivery execution.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
