import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Melken TechWork Logo"
                width={150}
                height={50}
                className="w-auto h-10 dark:hidden"
              />
              <Image
                src="/logo-white.svg"
                alt="Melken TechWork Logo"
                width={150}
                height={50}
                className="w-auto h-10 hidden dark:block"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 font-bold mb-6">
              Transforming complex technical challenges into elegant, efficient solutions 
              for forward-thinking businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-primary-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-primary-dark mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Oviedo, Florida</p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">United States</p>
                </div>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:4079775673" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                  (407) 977-5673
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="col-span-1 md:col-span-4 mt-8">
            <div className="flex flex-wrap justify-center gap-8 items-center border-t border-gray-200 dark:border-gray-700/10 pt-8">
              <Image
                src="/images/ISO 9001.png"
                alt="ISO 9001:2015 Certification"
                width={100}
                height={100}
                className="object-contain w-auto h-auto"
              />
              <Image
                src="/images/sdvosb.jpg"
                alt="SDVOSB Certification"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700/20 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 font-medium">
            © {new Date().getFullYear()} Melken TechWork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
