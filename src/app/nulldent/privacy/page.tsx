import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nulldent Privacy Policy',
  description: 'How Nulldent for Mac handles documents, settings, remote connections, purchases, and support requests.',
  alternates: { canonical: '/nulldent/privacy' },
};

const LAST_UPDATED = 'August 16, 2026';

export default function NulldentPrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.25),transparent_42%)]">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">Nulldent for Mac</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Nulldent is built around a simple principle: your text belongs to you.
          </p>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-6 py-16 leading-7 text-slate-300">
        <p className="text-lg">
          This policy explains how Nulldent, developed by Melken Solutions, LLC, handles information when you use the app. Nulldent does not include advertising, analytics, tracking, or telemetry, and Melken Solutions does not collect documents, source code, usage activity, or device identifiers through the app.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Documents and local app data</h2>
        <p className="mt-4">
          Documents remain in locations you choose on your Mac. Nulldent may store preferences, recent-item references, workspace state, custom themes, custom snippets, and crash-recovery snapshots locally on your device so that requested features work. This information is not sent to Melken Solutions. You can remove documents using Finder and clear or remove app data by using available app controls or uninstalling the app.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Git and remote connections</h2>
        <p className="mt-4">
          When you choose Git, HTTPS, SSH, or SFTP features, Nulldent communicates with the repository host or remote server you specify. Files, repository information, commands, and credentials involved in those connections are exchanged directly with that service as needed to perform your request. Those services are governed by their own privacy policies. Nulldent does not send this information to Melken Solutions, and it does not store SFTP passwords.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Optional support purchases</h2>
        <p className="mt-4">
          Optional one-time support purchases are processed by Apple through the App Store. Melken Solutions does not receive your complete payment-card information. Apple may provide transaction information needed to complete and restore purchases, subject to Apple&apos;s privacy policy.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Support and external websites</h2>
        <p className="mt-4">
          If you contact us, report an issue, or visit an external website, the information you voluntarily provide is handled by the service you use and, when sent to Melken Solutions, is used to respond to your request. Support correspondence is retained only as reasonably necessary to resolve the request, maintain appropriate business records, or satisfy legal obligations. You may ask us to delete personal information you submitted, subject to any information we must retain by law.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Sharing and disclosure</h2>
        <p className="mt-4">
          Nulldent does not sell personal information and does not share app usage data for advertising or tracking. Information voluntarily submitted to Melken Solutions may be disclosed to service providers that help us respond, when you direct us to do so, or when required to comply with law or protect rights and safety. Any provider acting for us is expected to protect information consistently with this policy.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Children</h2>
        <p className="mt-4">
          Nulldent is a general-purpose text editor and is not directed to children. We do not knowingly collect personal information from children through the app.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Changes to this policy</h2>
        <p className="mt-4">
          We may update this policy when Nulldent&apos;s features or privacy practices change. The current version and its effective date will remain available at this URL.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-white">Contact and privacy requests</h2>
        <p className="mt-4">
          For privacy questions or requests, use the <Link href="/contact" className="text-violet-300 hover:underline">Melken TechWork contact form</Link> or visit <Link href="/nulldent/support" className="text-violet-300 hover:underline">Nulldent Support</Link>. Melken Solutions, LLC is located in Oviedo, Florida, United States.
        </p>

        <hr className="my-10 border-white/10" />
        <p className="text-sm text-slate-500">Effective and last updated: {LAST_UPDATED}</p>
      </article>
    </main>
  );
}
