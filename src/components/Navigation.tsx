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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    const active = pathname === path || (path !== '/' && pathname.startsWith(`${path}/`));
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
    { href: '/services', label: 'Consulting' },
    { href: '/government', label: 'Government' },
    { href: '/apps', label: 'Apps' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isCurrentPage = (path: string) =>
    pathname === path || (path !== '/' && pathname.startsWith(`${path}/`));

  return (
    <header
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
          <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive(link.href)} transition-colors duration-200`}
                aria-current={isCurrentPage(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
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
            <>
              <button
                type="button"
                aria-label="Close mobile menu"
                className="fixed inset-0 top-16 bg-black/30 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <nav
                id="mobile-navigation"
                aria-label="Mobile"
                className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${isActive(link.href)} block px-3 py-3 text-base`}
                      onClick={() => setIsOpen(false)}
                      aria-current={isCurrentPage(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
