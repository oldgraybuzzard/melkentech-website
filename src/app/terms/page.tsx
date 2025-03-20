import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Melken TechWork',
  description: 'Terms and conditions for using Melken TechWork services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <div id="terms-of-service">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="lead">
              Agreement between user and melkentech.com:
            </p>
            <p>
              Welcome to melkentech.com. The melkentech.com website (the &ldquo;Site&rdquo;) is comprised of various web pages operated by Melken Solutions, LLC (&ldquo;Melken&rdquo;). melkentech.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the &ldquo;Terms&rdquo;).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Site</h2>
            <p>
              Your use of melkentech.com constitutes your agreement to all terms, conditions, and notices contained or referenced herein. These Terms of Service may be modified by Melken at any time without notice. You should visit this page periodically to review the current Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
            <p>
              Melken TechWork provides technical documentation, software solutions, and training systems integration services. Our services include but are not limited to:
            </p>
            <ul>
              <li>S1000D-compliant technical publications</li>
              <li>Interactive Electronic Technical Manuals (IETMs)</li>
              <li>Custom software development</li>
              <li>Training systems integration</li>
              <li>Project management</li>
              <li>Cloud solutions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              All content included on the Site, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Melken or its content suppliers and protected by United States and international copyright laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>
              You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party&apos;s use and enjoyment of the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy</h2>
            <p>
              Your use of melkentech.com is subject to our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer</h2>
            <p>
              The materials on the Site are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. Melken does not warrant that the functions contained in the materials will be uninterrupted or error-free.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <div className="mt-4 mb-8">
              <p className="mb-2">Melken TechWork</p>
              <p className="mb-2">689 Lagoon Drive, Oviedo, FL 32765</p>
              <p className="mb-2">Phone: 407.977.5673</p>
              <p>Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link> to get in touch with us.</p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
