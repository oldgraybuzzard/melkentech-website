'use client';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Pre-load critical text content
const criticalContent = {
  title: "Contact Us",
  subtitle: "We are here to help you with your technical documentation and software development needs."
};

// Dynamically import the form component with lower priority
const ContactForm = dynamic(() => import('../../components/ContactForm'), {
  loading: () => (
    <div className="animate-pulse space-y-6">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  ),
  ssr: false
});

export default function ContactPage() {
  return (
    <main className="py-16 bg-white dark:bg-gray-900">
      <section 
        className="relative bg-primary/5 dark:bg-gray-800/50 py-24"
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '0 500px'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Optimize critical content rendering */}
            <h1 
              className="text-4xl font-bold text-center mb-8 dark:text-gray-100"
              style={{ textRendering: 'optimizeLegibility' }}
            >
              {criticalContent.title}
            </h1>
            
            {/* Optimize LCP paragraph */}
            <p 
              className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '0 50px'
              }}
            >
              {criticalContent.subtitle}
            </p>
            
            {/* Defer non-critical animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                easings: ['easeOut']
              }}
              style={{ willChange: 'opacity, transform' }}
            >
              <Suspense fallback={
                <div className="animate-pulse space-y-6">
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
