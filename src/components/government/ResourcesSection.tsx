'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResourcesSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Download Resources</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Access our capability statement and GSA MAS contract information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Capability Statement Button */}
              <Link
                href="/pdf/MelkenSolutionsCapabilityStatement.pdf"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                target="_blank"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Capability Statement
              </Link>

              {/* GSA Contract Button */}
              <Link
                href="/pdf/MelkenSolutionsGSAContract.pdf"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                target="_blank"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                GSA MAS Contract
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 