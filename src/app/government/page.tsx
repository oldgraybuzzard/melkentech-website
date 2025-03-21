'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import non-critical components
const CertificationsSection = dynamic(() => import('../../components/government/CertificationsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>,
  ssr: false
});

const CoreCapabilitiesSection = dynamic(() => import('../../components/government/CoreCapabilitiesSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>,
  ssr: false
});

const ResourcesSection = dynamic(() => import('../../components/government/ResourcesSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>,
  ssr: false
});

export default function Government() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] max-h-[80vh] flex items-start justify-center overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0">
          <Image
            src="/images/government-hero.jpg"
            alt="Government Contracting"
            fill
            priority
            quality={90}
            className="object-cover opacity-80"
            sizes="100vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Government{' '}
              <span className="text-accent">Contracting</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Trusted partner delivering technical excellence to government agencies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Classifications Section */}
      <CertificationsSection />

      {/* Core Capabilities Section */}
      <CoreCapabilitiesSection />

      {/* Capability Statement & GSA Contract Downloads */}
      <ResourcesSection />

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary dark:text-white">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-white/90">
            Contact us to discuss your requirements and how we can support your agency&apos;s mission.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-primary-dark dark:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
