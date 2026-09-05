import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AutoMacIt Privacy Policy',
  description: 'How AutoMacIt for Mac handles snippets, personal information, backups, purchases, and support requests.',
  alternates: { canonical: '/automacit/privacy' },
};

const LAST_UPDATED = 'September 5, 2026';

export default function AutoMacItPrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_42%)]">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-blue-300">AutoMacIt for Mac</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Your routines and personal information stay under your control.</p>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-6 py-16 leading-7 text-slate-300">
        <p className="text-lg">This policy explains how AutoMacIt, developed by Melken Solutions, LLC, handles information when you use the app. AutoMacIt does not include advertising, analytics, tracking, or telemetry, and Melken Solutions does not collect your snippets, automations, personal information, usage activity, or device identifiers through the app.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Local app data</h2>
        <p className="mt-4">AutoMacIt stores snippets, automations, categories, preferences, and related app state locally on your Mac so that requested features work. This information is not sent to Melken Solutions. You can remove individual items in the app or remove local app data by uninstalling the app and clearing its associated data.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Personal information and Keychain</h2>
        <p className="mt-4">Information you save for smart fields is protected by macOS Keychain, remains on your Mac, and is used only when you choose to copy or insert it. AutoMacIt does not transmit this information to Melken Solutions. You can remove it using the app&apos;s controls.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Backups</h2>
        <p className="mt-4">When you export a backup, AutoMacIt writes your snippets and automations to the location you choose. Keychain-protected personal information is not included. You control where exported backups are stored and with whom they are shared.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Optional support purchases</h2>
        <p className="mt-4">Optional one-time support purchases are processed by Apple through the App Store. Melken Solutions does not receive your complete payment-card information. Apple may provide transaction information needed to complete and restore purchases, subject to Apple&apos;s privacy policy.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Support and external websites</h2>
        <p className="mt-4">If you contact us or visit an external website, the information you voluntarily provide is handled by the service you use and, when sent to Melken Solutions, is used to respond to your request. Support correspondence is retained only as reasonably necessary to resolve the request, maintain appropriate business records, or satisfy legal obligations.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Sharing and disclosure</h2>
        <p className="mt-4">AutoMacIt does not sell personal information and does not share app usage data for advertising or tracking. Information voluntarily submitted to Melken Solutions may be disclosed to service providers that help us respond, when you direct us to do so, or when required by law or necessary to protect rights and safety.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Children</h2>
        <p className="mt-4">AutoMacIt is a general-purpose productivity app and is not directed to children. We do not knowingly collect personal information from children through the app.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Changes to this policy</h2>
        <p className="mt-4">We may update this policy when AutoMacIt&apos;s features or privacy practices change. The current version and its effective date will remain available at this URL.</p>

        <h2 className="mt-12 text-2xl font-bold text-white">Contact and privacy requests</h2>
        <p className="mt-4">For privacy questions or requests, use the <Link href="/contact" className="text-blue-300 hover:underline">Melken TechWork contact form</Link> or visit <Link href="/automacit/support" className="text-blue-300 hover:underline">AutoMacIt Support</Link>. Melken Solutions, LLC is located in Oviedo, Florida, United States.</p>

        <hr className="my-10 border-white/10" />
        <p className="text-sm text-slate-500">Effective and last updated: {LAST_UPDATED}</p>
      </article>
    </main>
  );
}
