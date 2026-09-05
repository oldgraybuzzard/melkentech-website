import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AutoMacIt Support',
  description: 'Get help with AutoMacIt for Mac, find answers, and contact Melken TechWork.',
  alternates: { canonical: '/automacit/support' },
};

const topics = [
  ['Where do I begin?', 'Open AutoMacIt Help for the Quick Start guide, popular guides, setup checks, and shortcuts to the app’s main tools.'],
  ['How do I use a snippet in another app?', 'Copy it from AutoMacIt or assign one of the available macOS Services shortcuts. The in-app Set Up Direct Paste guide walks through the process.'],
  ['Where is my information stored?', 'Snippets and automations are stored locally on your Mac. Personal information used by smart fields is protected by macOS Keychain.'],
  ['What is included in a backup?', 'Backups include snippets and automations. Keychain-protected personal information is deliberately excluded.'],
  ['Does AutoMacIt require a subscription?', 'No. Optional one-time support purchases do not unlock features or create a subscription.'],
  ['How do I report an issue?', 'Include your macOS version, AutoMacIt version, what you expected, what happened, and steps that reproduce the problem. Do not include private information.'],
];

export default function AutoMacItSupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_42%)]">
        <div className="container mx-auto px-6 py-24 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-blue-300">AutoMacIt for Mac</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Support</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Find a quick answer, report a problem, or tell us what would make AutoMacIt better.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">Contact support</Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Common questions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topics.map(([question, answer]) => (
            <article key={question} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-semibold">{question}</h3>
              <p className="mt-3 leading-7 text-slate-400">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Contact Melken TechWork</h2>
            <p className="mt-4 text-slate-300">Oviedo, Florida, United States</p>
            <a href="tel:4079775673" className="mt-2 inline-block text-blue-300 hover:underline">(407) 977-5673</a>
            <p className="mt-4 text-slate-400">Use our contact form for app issues, feedback, accessibility concerns, or feature requests.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Helpful links</h2>
            <ul className="mt-4 space-y-3 text-blue-300">
              <li><Link href="/automacit" className="hover:underline">AutoMacIt overview</Link></li>
              <li><Link href="/automacit/privacy" className="hover:underline">AutoMacIt privacy policy</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact form</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
