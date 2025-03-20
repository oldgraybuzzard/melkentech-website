'use client';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  state: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    state: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setStatus({
        state: 'error',
        message: 'Please complete the security check'
      });
      return;
    }

    setStatus({
      state: 'submitting',
      message: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setStatus({
        state: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-100
            shadow-sm focus:border-primary dark:focus:border-accent 
            focus:ring-primary dark:focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-100
            shadow-sm focus:border-primary dark:focus:border-accent 
            focus:ring-primary dark:focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          autoComplete="off"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-100
            shadow-sm focus:border-primary dark:focus:border-accent 
            focus:ring-primary dark:focus:ring-accent"
        />
      </div>

      <div className="turnstile-container" role="group" aria-label="Security Check">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={setTurnstileToken}
          onError={() => {
            setStatus({
              state: 'error',
              message: 'Failed to load security check. Please refresh the page.'
            });
          }}
          options={{
            theme: 'light',
            size: 'normal',
            appearance: 'always',
            retry: 'auto',
            tabIndex: 0
          }}
          id="cf-turnstile"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status.state === 'submitting'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md 
            shadow-sm text-sm font-medium text-gray dark:text-white bg-primary 
            hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.state === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

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
  );
} 
