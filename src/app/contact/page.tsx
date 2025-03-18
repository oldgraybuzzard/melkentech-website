'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  state: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: 'submitting' });

    try {
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha.enterprise.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
              { action: 'CONTACT_FORM_SUBMIT' }
            );
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => {
        setStatus({ state: 'idle' });
      }, 5000);
    } catch (error) {
      setStatus({
        state: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
      console.error('Contact form error:', error);
    }
  };

  return (
    <main className="py-16 bg-white dark:bg-gray-900">
      <section className="relative bg-primary/5 dark:bg-gray-800/50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-8 dark:text-gray-100">Contact Us</h1>
            <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
              Have a question or ready to start a project? We're here to help.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-gray-700 
                    text-gray-900 dark:text-gray-100
                    shadow-sm focus:border-primary dark:focus:border-accent 
                    focus:ring-primary dark:focus:ring-accent
                    placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-gray-700 
                    text-gray-900 dark:text-gray-100
                    shadow-sm focus:border-primary dark:focus:border-accent 
                    focus:ring-primary dark:focus:ring-accent
                    placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-gray-700 
                    text-gray-900 dark:text-gray-100
                    shadow-sm focus:border-primary dark:focus:border-accent 
                    focus:ring-primary dark:focus:ring-accent
                    placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-gray-700 
                    text-gray-900 dark:text-gray-100
                    shadow-sm focus:border-primary dark:focus:border-accent 
                    focus:ring-primary dark:focus:ring-accent
                    placeholder-gray-400 dark:placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={status.state === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark dark:bg-accent dark:hover:bg-accent/90 
                  text-white dark:text-primary-dark font-bold py-2 px-4 rounded transition duration-300 
                  disabled:opacity-50"
              >
                {status.state === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <div className={`text-center p-4 rounded ${
                  status.state === 'success' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100' 
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
