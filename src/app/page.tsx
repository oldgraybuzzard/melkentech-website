'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Add blur data URLs for commonly used images
const blurDataUrls = {
  hero: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Iys+Pj5BQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR',
  iso: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nGNgYGBgYGBgZGRkYGBgYGZmZmBgYGFhYWBg+P//PwMDw////xkYGP7//w+m////z8AAAH6CDv2ByDq0AAAAAElFTkSuQmCC',
  sdvosb: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Iys+Pj5BQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR'
};

// Preload critical content
const preloadText = {
  hero: {
    title: "From Vision to Execution",
    subtitle: "We specialize in transforming complex technical challenges into elegant, efficient solutions for forward-thinking businesses."
  }
};

// Optimize motion animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="relative bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] max-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-80"
          priority
          placeholder="blur"
          blurDataURL={blurDataUrls.hero}
          sizes="100vw"
          loading="eager"
        />
        {/* Overlay - darker gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        <div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
          style={{ willChange: 'opacity' }}
        />
        
        {/* Optimize main content rendering */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Pre-render critical text content */}
          <h1 
            className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: preloadText.hero.title.replace(
              'Execution',
              '<span class="text-accent">Execution</span>'
            )}}
          />
          
          {/* Optimize LCP paragraph */}
          <p 
            className="text-lg sm:text-xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto"
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '0 60px'
            }}
          >
            {preloadText.hero.subtitle}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-primary-dark px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        {...fadeInUp}
        className="py-20 bg-white dark:bg-gray-900"
        style={{ containIntrinsicSize: '0 400px' }}
      >
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-gray-200/10 flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-gray-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 bg-white dark:bg-gray-900"
        style={{ containIntrinsicSize: '0 400px' }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-white/90">
            Let&apos;s discuss how we can help you achieve your technology goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-primary-dark dark:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 bg-white dark:bg-gray-900"
        style={{ containIntrinsicSize: '0 400px' }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ISO Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/ISO 9001.png"
                  alt="ISO 9001:2015 Certification"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto"
                  placeholder="blur"
                  blurDataURL={blurDataUrls.iso}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                ISO 9001:2015 Certified
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive quality management system ensuring consistent excellence in service delivery
              </p>
            </motion.div>

            {/* SDVOSB Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/sdvosb.jpg"
                  alt="SDVOSB Certification"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto"
                  placeholder="blur"
                  blurDataURL={blurDataUrls.sdvosb}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Service-Disabled Veteran-Owned
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re here to help you with your technical documentation and software development needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const services = [
  {
    title: "Technical Documentation & IETMs",
    description: "Industry-leading documentation solutions leveraging S1000D, XML, and IETM standards. We specialize in:",
    features: [
      "S1000D-compliant technical publications",
      "Interactive Electronic Technical Manuals (IETMs)",
      "XML-based documentation systems",
      "Military specification compliance",
      "Configuration management"
    ],
    icon: (
      <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    highlight: false  // Changed from true to false
  },
  {
    title: "Custom Software Development",
    description: "Enterprise-grade software solutions tailored to your specific needs:",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "Legacy system modernization",
      "API development and integration",
      "Database design and optimization"
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Training Systems Integration",
    description: "Advanced training solutions for complex technical environments:",
    features: [
      "Interactive training simulations",
      "VR/AR training experiences",
      "Learning Management Systems (LMS)",
      "Performance tracking and analytics",
      "Competency-based assessments"
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Project Management",
    description: "Comprehensive project oversight with industry best practices:",
    features: [
      "Agile and traditional methodologies",
      "Risk management",
      "Resource allocation",
      "Quality assurance",
      "Stakeholder communication"
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Cloud Solutions",
    description: "Modern cloud infrastructure and services:",
    features: [
      "Cloud migration strategies",
      "Serverless architecture",
      "Multi-cloud solutions",
      "Cloud security",
      "Performance optimization"
    ],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  }
];
