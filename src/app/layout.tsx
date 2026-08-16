import { GeistSans } from 'geist/font/sans';
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper';
import ClientProviders from '@/components/ClientProviders';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://melkentech.com';

export const metadata: Metadata = {
  title: {
    default: "Melken TechWork",
    template: "%s | Melken TechWork",
  },
  description: "Melken TechWork is a founder-led consulting company delivering modernization strategy and hands-on execution across technical documentation, software, systems integration, and training.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Melken TechWork',
    description: 'Founder-led consulting for strategy-through-execution modernization in government and commercial operations.',
    url: siteUrl,
    siteName: 'Melken TechWork',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Melken TechWork brand preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melken TechWork',
    description: 'Founder-led consulting for modernization strategy, program execution, and hands-on delivery.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  verification: {
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? '',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationLdJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Melken TechWork',
    legalName: 'Melken Solutions, LLC',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    founder: {
      '@type': 'Person',
      name: 'Kendall D. Felder',
      jobTitle: 'President, CEO & Founder',
      sameAs: ['https://www.linkedin.com/in/kendallfelder'],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-407-977-5673',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '689 Lagoon Drive',
      addressLocality: 'Oviedo',
      addressRegion: 'FL',
      postalCode: '32765',
      addressCountry: 'US',
    },
  };

  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLdJson) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ClientProviders>
          <Navigation />
          <main id="main-content" className="min-h-screen pt-16 md:pt-16 lg:pt-16">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ClientProviders>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
