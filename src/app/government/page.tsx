'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Government() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Using your added government-hero.jpg */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <Image
          src="/images/government-hero.jpg"
          alt="Government Contracting"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-primary-dark/40 to-black/50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Government Contracting
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trusted partner delivering technical excellence to government agencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Classifications Section */}
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
                />
                <Image
                  src="/images/ISO 9001.png"
                  alt="ISO 9001:2015 Certification"
                  width={150}
                  height={150}
                  className="object-contain w-auto h-auto"
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

      {/* Core Capabilities Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Documentation</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• S1000D-compliant documentation</li>
                    <li>• Interactive Electronic Technical Manuals (IETMs)</li>
                    <li>• Military specification compliance</li>
                    <li>• Technical data packages</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Software Solutions</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Custom software development</li>
                    <li>• System integration</li>
                    <li>• Database management</li>
                    <li>• Cloud solutions (FedRAMP)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capability Statement & GSA Contract Downloads */}
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

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary dark:text-white">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-white/90">
            Contact us to discuss your requirements and how we can support your agency's mission.
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
