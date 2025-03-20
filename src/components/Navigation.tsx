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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDarkMode = useDarkMode();
  const pathname = usePathname();

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
    <nav className={`fixed w-full backdrop-blur-md z-50 shadow-md ${
      isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
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
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive(link.href)} transition-colors duration-200 ${
                  isDarkMode ? '' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed inset-0 ${
            isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
          } z-50 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl ${isActive(link.href)} transition-colors duration-200 ${
                    isDarkMode ? '' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-50 transition-colors ${
              isDarkMode ? 'text-gray-100 hover:text-accent' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
