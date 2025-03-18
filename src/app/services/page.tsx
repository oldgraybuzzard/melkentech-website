'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary dark:bg-gray-900">
        {/* Background Image */}
        <Image
          src="/images/services-hero.jpg"
          alt="Our Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        {/* Darker Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-primary-dark/40 to-black/50" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
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
              className="text-xl sm:text-2xl text-white/90 mb-8 font-semibold"
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
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">24/7</h3>
                  <p className="text-white/90 font-medium">Support Available</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">ISO</h3>
                  <p className="text-white/90 font-medium">9001:2015 Certified</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">100%</h3>
                  <p className="text-white/90 font-medium">Client Satisfaction</p>
                </div>
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreServices.map((service, index) => (
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
                <h3 className="text-xl font-semibold text-primary dark:text-gray-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="space-y-6">
                  {service.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
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
              Let's discuss how our comprehensive solutions can help you achieve your goals.
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

const coreServices = [
  {
    title: "Technical Documentation",
    description: "Industry-leading documentation solutions leveraging modern standards and ISO-certified quality processes.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    sections: [
      {
        title: "Documentation Standards",
        items: [
          "ISO 9001:2015 compliant processes",
          "S1000D compliance",
          "Military specifications",
          "Quality-controlled frameworks"
        ]
      },
      {
        title: "Deliverables",
        items: [
          "Interactive Electronic Technical Manuals",
          "Quality-verified documentation",
          "Validated training materials",
          "Process documentation"
        ]
      }
    ]
  },
  {
    title: "Software Development",
    description: "Custom software solutions designed and delivered through ISO-certified development processes.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    sections: [
      {
        title: "Development Services",
        items: [
          "Quality-assured web applications",
          "Training system integration",
          "Enterprise software solutions",
          "Validated API development"
        ]
      },
      {
        title: "Quality Processes",
        items: [
          "ISO-compliant development",
          "Rigorous testing protocols",
          "Security compliance",
          "Performance validation"
        ]
      }
    ]
  },
  {
    title: "Project Management",
    description: "Expert oversight and execution of complex technical initiatives through ISO-certified management processes.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    sections: [
      {
        title: "Quality Management",
        items: [
          "ISO 9001:2015 processes",
          "Risk management & mitigation",
          "Quality metrics tracking",
          "Continuous improvement"
        ]
      },
      {
        title: "Project Excellence",
        items: [
          "Quality assurance oversight",
          "Process compliance",
          "Performance monitoring",
          "Stakeholder satisfaction"
        ]
      }
    ]
  }
];

const features = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Comprehensive quality management system ensuring consistent excellence",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Training Integration",
    description: "Advanced training systems with quality-assured delivery",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Process Excellence",
    description: "Standardized, monitored, and continuously improved processes",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Quality Support",
    description: "ISO-certified maintenance and support services",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];