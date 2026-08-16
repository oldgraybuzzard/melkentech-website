import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nulldent Support',
  description: 'Get help with Nulldent for Mac, find answers, and contact Melken TechWork.',
  alternates: { canonical: '/nulldent/support' },
};

const topics = [
  ['Where do I begin?', 'Open Help in Nulldent for Getting Started, the feature tour, a guided tutorial, contextual tips, and the complete keyboard-shortcut reference.'],
  ['Does Nulldent require a subscription?', 'No. Nulldent is completely free and fully functional. Optional one-time support purchases do not unlock features or create a subscription.'],
  ['Where are my files stored?', 'Local files remain where you save them. Nulldent does not upload your documents for tracking or advertising. Remote files are transferred only when you use a configured remote connection.'],
  ['How do I recover unsaved work?', 'After an unexpected shutdown, reopen Nulldent and use the recovery prompt to restore or discard available crash-recovery snapshots.'],
  ['How do I report an issue?', 'Include your macOS version, Nulldent version, what you expected, what happened, and steps that reliably reproduce the problem. Never include passwords or private SSH keys.'],
  ['Which Mac versions are supported?', 'Check the Nulldent listing in the Mac App Store for the current minimum macOS version and compatibility information.'],
];

export default function NulldentSupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.25),transparent_42%)]">
        <div className="container mx-auto px-6 py-24 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">Nulldent for Mac</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Support</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Find a quick answer, report a problem, or tell us what would make Nulldent better.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400">Contact support</Link>
            <a href="https://github.com/oldgraybuzzard/nulldent/issues" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-violet-300 hover:bg-white/5">Report on GitHub</a>
          </div>
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
            <a href="tel:4079775673" className="mt-2 inline-block text-violet-300 hover:underline">(407) 977-5673</a>
            <p className="mt-4 text-slate-400">Use our contact form for app issues, general feedback, accessibility concerns, or feature requests.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Helpful links</h2>
            <ul className="mt-4 space-y-3 text-violet-300">
              <li><Link href="/nulldent" className="hover:underline">Nulldent overview</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy policy</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact form</Link></li>
              <li><a href="https://github.com/oldgraybuzzard/nulldent" className="hover:underline">Nulldent on GitHub</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
