import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Melken TechWork',
  description: 'Our commitment to protecting your privacy and personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <div id="privacy-statement">
            <h1 className="text-4xl font-bold mb-8">Privacy Statement</h1>
            <p className="lead">
              At Melken Solutions, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Statement explains how we collect, use, disclose, and protect your information when you visit our website or use our services. By accessing or using our website and services, you consent to the practices described in this Privacy Statement.
            </p>
            {/* Replace any single quotes with &apos; */}
            <p>
              We&apos;re committed to maintaining the trust and confidence of our visitors to our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              When you interact with our website or use our services, we may collect certain information from you, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Personal information such as your name, email address, phone number, and any other information you voluntarily provide to us.</li>
              <li>Usage information such as your IP address, browser type, operating system, and other technical details.</li>
              <li>Cookies and similar technologies to track your interactions with our website and personalize your experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Providing and improving our services to meet your needs.</li>
              <li>Communicating with you about updates, offers, and promotions.</li>
              <li>Analyzing website usage and trends to enhance the performance of the websit and user experience.</li>
              <li>Protecting our rights, property, and safety, as well as the rights, property, and safety of our users and others.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Disclosure</h2>
            <p>
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>With your consent or at your direction.</li>
              <li>With service providers, business partners, or contractors who assist us in operating our website and providing our services.</li>
              <li>In response to a legal request, such as a court order or government inquiry.</li>
              <li>To protect our rights, property, or safety, or the rights, property, or safety of others.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement security measures to protect your information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choices and Rights</h2>
            <p>
              You have certain choices and rights regarding your personal information, including the right to access, correct, or delete your information. You can contact us using the information provided below to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates to this Privacy Statement</h2>
            <p>
              We may update this Privacy Statement from time to time to reflect changes in our practices or applicable laws. The updated version will be posted on our website, and your continued use of our services after the changes signifies your acceptance of the updated Privacy Statement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Statement or our privacy practices, please contact us at:
            </p>
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
