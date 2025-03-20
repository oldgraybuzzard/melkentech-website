import { GeistSans } from 'geist/font/sans';
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper';
import ClientProviders from '@/components/ClientProviders';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melken TechWork - From Vision to Execution",
  description: "We specialize in transforming complex technical challenges into elegant, efficient solutions for forward-thinking businesses.",
  metadataBase: new URL('https://melkentech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Melken TechWork',
    description: 'From Vision to Execution',
    url: 'https://melkentech.com',
    siteName: 'Melken TechWork',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melken TechWork',
    description: 'From Vision to Execution',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        <ClientProviders>
          <Navigation />
          <main className="min-h-screen">
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
