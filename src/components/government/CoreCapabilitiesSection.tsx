'use client';
import { motion } from 'framer-motion';

export default function CoreCapabilitiesSection() {
  return (
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
  );
} 