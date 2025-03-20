'use client';
import Image from 'next/image';
import { timelineItems } from '@/data/timeline';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading states
const TimelineItem = dynamic(() => import('@/components/TimelineItem'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg"></div>
});

const StatsCard = dynamic(() => import('@/components/StatsCard'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>
});

const ValueCard = dynamic(() => import('@/components/ValueCard'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg"></div>
});

// Memoize the values array to prevent recreation on each render
const VALUES = [
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
] as const;

export default function About() {
  // Calculate positions for timeline items
  const timelineItemsWithPositions = timelineItems.map((item, index) => ({
    ...item,
    position: (index % 2 === 0 ? 'left' : 'right') as 'left' | 'right'
  }));

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/90 to-accent/90 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl font-bold text-white max-w-2xl mx-auto mb-12">
              Building the future of technical documentation and software solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="15+" label="Years in Business" />
              </Suspense>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="50+" label="Successful Projects" />
              </Suspense>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg"></div>}>
                <StatsCard value="100+" label="Satisfied Clients" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Melken TechWork is a leading provider of technical documentation, software solutions, 
                and training systems integration. With over 15 years of experience, we&apos;ve built a 
                reputation for delivering high-quality solutions that meet the complex needs of 
                government and commercial clients.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our ISO 9001:2015 certification demonstrates our commitment to quality and continuous 
                improvement, ensuring that every project meets the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              A timeline of our growth and achievements in delivering excellence
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute w-1 bg-gradient-to-b from-primary/80 via-accent/80 to-primary/80 dark:from-accent/80 dark:via-primary/80 dark:to-accent/80 h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-1 bg-primary/30 dark:bg-accent/30 h-full left-1/2 transform -translate-x-1/2 blur-sm"></div>
                <div className="space-y-4">
                  {timelineItemsWithPositions.map((item) => (
                    <Suspense key={item.id} fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg"></div>}>
                      <TimelineItem {...item} />
                    </Suspense>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {VALUES.map((value) => (
                  <Suspense key={value.title} fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg"></div>}>
                    <ValueCard {...value} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
