import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnalyticsProviders } from "@/lib/analytics";
import { AuthProvider } from '@/lib/auth-context'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  weights: [400, 500, 600, 700],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  weights: [400, 600],
});

export const metadata: Metadata = {
  title: "Melken TechWork - From Vision to Execution",
  description: "We specialize in transforming complex technical challenges into elegant, efficient solutions for forward-thinking businesses.",
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.melkentech.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          defer
          data-domain="melkentech.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="antialiased">
        <AuthProvider>
          <AnalyticsProviders />
          <Navigation />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
