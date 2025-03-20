'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Classifications</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Small Business | Service-Disabled Veteran-Owned Small Business (SDVOSB)
            </p>
            <div className="flex justify-center items-center gap-8">
              <Image
                src="/images/sdvosb.jpg"
                alt="SDVOSB Certification"
                width={150}
                height={150}
                className="object-contain"
                loading="lazy"
              />
              <Image
                src="/images/ISO 9001.png"
                alt="ISO 9001:2015 Certification"
                width={150}
                height={150}
                className="object-contain w-auto h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contract Details */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contract Information</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block text-gray-900 dark:text-white">CAGE Code:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">8D4K9</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900 dark:text-white">UEI:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">SU9DCC122AB6</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900 dark:text-white">GSA MAS Contract:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">GS-03F-027GA</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900 dark:text-white">Primary NAICS:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">541990</span>
                </li>
              </ul>
            </div>

            {/* Additional NAICS */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Additional NAICS Codes</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-mono text-gray-700 dark:text-gray-300">518210</span>
                  <span className="block text-gray-600 dark:text-gray-400">Data Processing & Hosting</span>
                </li>
                <li>
                  <span className="font-mono text-gray-700 dark:text-gray-300">532120</span>
                  <span className="block text-gray-600 dark:text-gray-400">Equipment Rental & Leasing</span>
                </li>
                <li>
                  <span className="font-mono text-gray-700 dark:text-gray-300">541511</span>
                  <span className="block text-gray-600 dark:text-gray-400">Custom Computer Programming</span>
                </li>
                <li>
                  <span className="font-mono text-gray-700 dark:text-gray-300">541611</span>
                  <span className="block text-gray-600 dark:text-gray-400">Management Consulting</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 