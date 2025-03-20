import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://melkentech.com'),
  title: {
    default: 'Melken TechWork - From Vision to Execution',
    template: '%s | Melken TechWork'
  },
  description: 'We specialize in transforming complex technical challenges into elegant, efficient solutions for forward-thinking businesses.',
  keywords: ['technical documentation', 'S1000D', 'software development', 'SDVOSB', 'government contracting', 'IETM'],
  authors: [{ name: 'Melken TechWork' }],
  creator: 'Melken TechWork',
  publisher: 'Melken TechWork',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://melkentech.com',
    siteName: 'Melken TechWork',
    title: 'Melken TechWork - Technical Excellence',
    description: 'Technical documentation, software solutions, and training systems integration experts.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Melken TechWork'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melken TechWork',
    description: 'Technical documentation, software solutions, and training systems integration experts.',
    images: ['/images/og-image.jpg'],
    creator: '@melkentech'
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
  alternates: {
    canonical: 'https://melkentech.com',
    languages: {
      'en-US': 'https://melkentech.com',
    }
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },
  verification: {
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? ''
    },
  }
};

export default defaultMetadata;
