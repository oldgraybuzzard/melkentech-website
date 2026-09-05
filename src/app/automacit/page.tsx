import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AutoMacIt — Make repetitive work effortless',
  description:
    'Save reusable text snippets, add smart fields, and run everyday automations from a private, native macOS app.',
  alternates: { canonical: '/automacit' },
  openGraph: {
    title: 'AutoMacIt — Make repetitive work effortless',
    description: 'Reusable snippets and practical automations for your Mac.',
    url: '/automacit',
    type: 'website',
  },
};

const features = [
  ['Create once', 'Save text you type repeatedly, organize it into categories, and update it whenever your needs change.'],
  ['Use it anywhere', 'Copy snippets from AutoMacIt or paste them through macOS Services while working in another app.'],
  ['Make it personal', 'Add smart fields for details you use often without storing those details inside every snippet.'],
  ['Automate routine work', 'Build reusable actions for common tasks and launch them without reconstructing the same steps.'],
  ['Keep a backup', 'Export and import your snippets and automations while keeping Keychain-protected information separate.'],
  ['Stay on your Mac', 'Your library is stored locally, with personal information protected by macOS Keychain.'],
];

export default function AutoMacItPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(59,130,246,0.34),transparent_38%),radial-gradient(circle_at_15%_10%,rgba(34,197,94,0.18),transparent_30%)]" />
        <div className="relative container mx-auto grid min-h-[72vh] items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-blue-300">Native productivity for macOS</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">Make repetitive work effortless.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              AutoMacIt keeps reusable text, smart fields, and practical automations close at hand so you can spend less time repeating yourself.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white">Coming to the Mac App Store</span>
              <Link href="/automacit/support" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-blue-300 hover:bg-white/5">
                Support &amp; help
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 shadow-2xl shadow-blue-950/60">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Text snippets', 'Smart fields', 'Menu bar access', 'macOS Services'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <span className="text-sm font-semibold text-blue-200">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-7 text-slate-300">A focused toolbox for the small tasks that add up across your day.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-blue-300">Built for everyday work</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Your routines, ready when you are.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Private by design</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">AutoMacIt does not include advertising, analytics, tracking, or telemetry. Your saved library stays on your Mac.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Protected where it matters</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">Personal information used by smart fields is stored in macOS Keychain and excluded from exported backups.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to reclaim the repeated minutes?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">AutoMacIt is fully functional without a subscription. Optional one-time support purchases help fund continued independent development.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-blue-300">
          <Link href="/automacit/support" className="hover:underline">Get support</Link>
          <Link href="/automacit/privacy" className="hover:underline">Read the privacy policy</Link>
        </div>
      </section>
    </main>
  );
}
