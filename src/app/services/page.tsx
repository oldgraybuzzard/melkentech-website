'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import type { CoreService, ServiceSection } from '@/data/coreServices';

// Dynamically import components with loading states
const StatsCard = dynamic(() => import('@/components/StatsCard'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>,
  ssr: false
});

// Separate component for core services grid
function CoreServicesGrid() {
  const [services, setServices] = useState<CoreService[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('@/data/coreServices').then((module) => {
      setServices(module.default);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>;
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {services.map((service: CoreService, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-gray-200/10 flex items-center justify-center mr-4">
            {service.icon}
          </div>
          <h2 className="text-xl font-semibold text-primary dark:text-gray-300">
            {service.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {service.description}
          </p>
          <div className="space-y-6">
            {service.sections.map((section: ServiceSection, idx: number) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] max-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background Image */}
        <Image
          src="/images/services-hero.jpg"
          alt="Our Services"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
          loading="eager"
        />
        
        {/* Darker Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        
        {/* Animated Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
          style={{ willChange: 'opacity' }}
        />
        
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
              Comprehensive{' '}
              <span className="text-accent">Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '0 60px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Industry-leading documentation, software solutions, and training systems 
              that drive innovation and efficiency
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Stats Cards */}
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="24/7" label="Support Available" />
              </Suspense>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="ISO" label="9001:2015 Certified" />
              </Suspense>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="100%" label="Client Satisfaction" />
              </Suspense>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg 
            className="w-6 h-6 text-white drop-shadow-lg"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-6">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              Comprehensive technical solutions tailored to modern business needs,
              with special expertise in S1000D documentation and training systems.
            </p>
          </motion.div>

          <CoreServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-white/90">
              Let&apos;s discuss how our comprehensive solutions can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-primary-dark dark:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
