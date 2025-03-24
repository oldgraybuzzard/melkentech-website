'use client';
import { motion } from 'framer-motion';
import CapabilityStatement from './CapabilityStatement';

export default function ResourcesSection() {
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
            <CapabilityStatement />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
