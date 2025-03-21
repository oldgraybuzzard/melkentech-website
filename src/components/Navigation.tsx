'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Custom hook for dark mode
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDarkMode;
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = useDarkMode();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    const active = pathname === path;
    if (active) {
      return isDarkMode 
        ? 'text-white font-bold' 
        : 'text-gray-900 font-bold';
    }
    return isDarkMode
      ? 'text-gray-300 hover:text-gray-100'
      : 'text-gray-600 hover:text-gray-900';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/government', label: 'Government' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 shadow-md ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDarkMode ? "/logo-white.svg" : "/logo.svg"}
              alt="Melken TechWork Logo"
              width={120}
              height={40}
              priority
              className="w-auto h-8"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive(link.href)} transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="opacity-50 hover:opacity-100 transition-opacity text-sm"
              aria-label="Admin Login"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${isActive(link.href)} block px-3 py-2 text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/admin/login"
                  className="block px-3 py-2 text-base opacity-50 hover:opacity-100 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
