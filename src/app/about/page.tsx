'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { timelineItems } from '@/data/timeline';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const TimelineItem = ({ year, title, description, position }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex ${position === 'left' ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}
    >
      <div className={`w-5/12 ${position === 'right' && 'order-1'}`}>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="text-primary dark:text-accent font-bold text-xl mb-1">{year}</div>
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="w-4 h-4 bg-primary dark:bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2" />
    </motion.div>
  );
};

export default function About() {
  return (
    <main className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary dark:bg-gray-900">
        {/* Background Image */}
        <Image
          src="/images/about-hero.jpg"
          alt="About Us"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-primary-dark/40 to-black/50" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Building the future of technical documentation and software solutions
            </p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Years in Business */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">15+</h3>
                  <p className="text-white/90 font-medium">Years in Business</p>
                </div>
              </div>

              {/* Successful Projects */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">50+</h3>
                  <p className="text-white/90 font-medium">Successful Projects</p>
                </div>
              </div>

              {/* Satisfied Clients */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
                <div className="relative p-6">
                  <h3 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">100+</h3>
                  <p className="text-white/90 font-medium">Satisfied Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Melken TechWork is a leading provider of technical documentation, software solutions, 
                and training systems integration. With over 15 years of experience, we've built a 
                reputation for delivering high-quality solutions that meet the complex needs of 
                government and commercial clients.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our ISO 9001:2015 certification demonstrates our commitment to quality and continuous 
                improvement, ensuring that every project meets the highest standards of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To deliver innovative technical solutions that empower organizations to achieve their 
                objectives efficiently and effectively. We combine expertise in documentation, 
                software development, and training systems to create comprehensive solutions that 
                drive success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/KendallFelder.jpg"
                    alt="Kendall Felder"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Leadership</h2>
                <h3 className="text-2xl font-semibold text-primary dark:text-accent mb-2">Kendall Felder, MBA, PMP</h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">President, CEO & Founder</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With extensive experience in technical leadership and software development, 
                  Kendall leads Melken TechWork with a focus on innovation and excellence. 
                  His unique background combining military service, technical expertise, and 
                  business acumen provides the foundation for our company's success in delivering 
                  high-quality solutions.
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>• U.S. Navy Veteran - Electronics Technician</p>
                  <p>• MBA in Business Management</p>
                  <p>• MBA in Marketing Management</p>
                  <p>• Certified Project Management Professional (PMP)</p>
                  <p>• XML Content Management Expert</p>
                  <p>• S1000D Expert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute w-1 bg-primary/20 dark:bg-accent/20 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <TimelineItem 
                    key={`${item.year}-${index}`}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    position={index % 2 === 0 ? 'left' : 'right'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Excellence",
                    description: "We maintain the highest standards in every aspect of our work, from documentation to software development."
                  },
                  {
                    title: "Innovation",
                    description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions."
                  },
                  {
                    title: "Integrity",
                    description: "We build trust through honest communication and ethical business practices."
                  },
                  {
                    title: "Partnership",
                    description: "We work closely with our clients to understand their needs and deliver tailored solutions."
                  }
                ].map((value, index) => (
                  <div key={value.title} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
