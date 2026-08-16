import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nulldent — A focused code editor for Mac',
  description:
    'A fast, keyboard-first Mac editor with Git, SFTP, snippets, code folding, project search, an integrated terminal, crash recovery, and custom themes.',
  alternates: { canonical: '/nulldent' },
  openGraph: {
    title: 'Nulldent — Nothing between you and the text',
    description: 'A fast, focused, keyboard-first text and code editor for macOS.',
    url: '/nulldent',
    type: 'website',
  },
};

const features = [
  ['Edit with focus', 'Syntax highlighting, smart indentation, code folding, multiple cursors, split editors, bookmarks, and a document outline.'],
  ['Find what matters', 'Fast Quick Open, project search, regular expressions, workspace symbols, and reviewed project-wide replacements.'],
  ['Work with Git', 'Clone, diff, stage, commit, pull, push, fetch, browse branches, and inspect history without leaving the editor.'],
  ['Reach remote files', 'Open, edit, save, and upload remote files over SFTP using your SSH keys or SSH agent.'],
  ['Stay in flow', 'Expand custom snippets, run commands in the integrated terminal, and jump directly from diagnostics to source.'],
  ['Protect your work', 'Autosave, session restoration, external-change detection, and crash-recovery snapshots keep work safe.'],
];

const languages = ['Swift', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'JSON', 'Markdown', 'C', 'C++', 'C#', 'Go', 'Rust', 'Shell', 'SQL', 'YAML'];

export default function NulldentPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(124,58,237,0.32),transparent_38%),radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.2),transparent_30%)]" />
        <div className="relative container mx-auto grid min-h-[76vh] items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-violet-300">A native editor for macOS</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">Nothing between you and the text.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Nulldent is a fast, focused, keyboard-first text and code editor with the tools developers need—and none of the noise they do not.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span className="rounded-full bg-violet-500 px-6 py-3 font-semibold text-white">Coming to the Mac App Store</span>
              <Link href="/nulldent/support" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-violet-300 hover:bg-white/5">
                Support &amp; help
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">Completely free. No subscriptions. No locked features.</p>
          </div>

          <div aria-label="Nulldent editor preview" className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/90 shadow-2xl shadow-violet-950/60">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">Welcome.swift — Nulldent</span>
            </div>
            <div className="grid min-h-[390px] grid-cols-[120px_1fr] font-mono text-sm">
              <div className="border-r border-white/10 bg-slate-950/60 p-4 text-xs text-slate-500">
                <p className="mb-4 text-slate-300">EXPLORER</p><p>Sources</p><p className="pl-3 text-slate-400">Welcome.swift</p><p className="pl-3">Theme.swift</p><p className="mt-4">README.md</p>
              </div>
              <pre className="overflow-hidden p-6 leading-7 text-slate-300"><code><span className="text-slate-600">1  </span><span className="text-violet-300">struct</span> Welcome {'{'}{`\n`}<span className="text-slate-600">2  </span>    <span className="text-violet-300">let</span> message = <span className="text-emerald-300">&quot;Nothing between you and the text.&quot;</span>{`\n`}<span className="text-slate-600">3  </span>    <span className="text-violet-300">let</span> distractions = <span className="text-orange-300">0</span>{`\n`}<span className="text-slate-600">4  </span>{'}'}{`\n\n`}<span className="text-slate-600">6  </span><span className="text-slate-500">{'// Fast. Native. Yours.'}</span></code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">Built for real work</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Power when you need it. Quiet when you do not.</h2>
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
            <h2 className="text-3xl font-bold">Accessible by design</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">Navigate with VoiceOver, Voice Control, or the keyboard. Use increased editor text sizes, reduced motion, high-contrast presentation, and interfaces that never depend on color alone.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Private by design</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">No advertising and no tracking. Nulldent works with your files and repositories without turning your work into someone else&apos;s data.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Languages welcome.</h2>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {languages.map((language) => <span key={language} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-slate-300">{language}</span>)}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-slate-400">Nulldent is free and fully functional. Optional one-time support purchases help fund continued independent development without unlocking features or creating a subscription.</p>
      </section>
    </main>
  );
}
