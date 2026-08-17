import type { Metadata } from 'next';
import Link from 'next/link';
import { appCatalog } from '@/data/appsCatalog';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Explore Melken TechWork applications. Nulldent is the first available app, with support and privacy resources available.',
  alternates: { canonical: '/apps' },
  openGraph: {
    title: 'Apps | Melken TechWork',
    description:
      'Explore Melken TechWork applications, starting with Nulldent for macOS.',
    url: '/apps',
    type: 'website',
  },
};

export default function AppsPage() {
  const appsListLdJson = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Melken TechWork Apps',
    url: '/apps',
    hasPart: appCatalog.map((app) => ({
      '@type': 'SoftwareApplication',
      name: app.name,
      url: app.href,
      operatingSystem: 'macOS',
      applicationCategory: 'DeveloperApplication',
      description: app.summary,
    })),
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsListLdJson) }}
      />

      <section className="relative overflow-hidden border-b border-gray-200/80 bg-gradient-to-br from-primary/10 via-white to-accent/10 dark:border-gray-700/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(22,163,74,0.15),transparent_36%),radial-gradient(circle_at_15%_8%,rgba(15,23,42,0.07),transparent_30%)] dark:bg-[radial-gradient(circle_at_78%_22%,rgba(34,197,94,0.18),transparent_38%),radial-gradient(circle_at_15%_8%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="relative container mx-auto px-6 py-20 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary dark:text-accent">Melken TechWork Apps</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Product experiences built with the same founder-led discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            Explore current applications from Melken TechWork. New products may be added over time as they are ready for release.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-14 sm:py-20" aria-labelledby="available-apps-heading">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 id="available-apps-heading" className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Available App
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{appCatalog.length} currently listed</p>
        </div>

        {appCatalog.map((app) => (
          <article
            key={app.id}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary dark:text-accent">Now Available</p>
                <h3 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{app.name}</h3>
                <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">{app.summary}</p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[240px]">
                <Link
                  href={app.href}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                >
                  View {app.name}
                </Link>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                  {app.supportHref && (
                    <Link
                      href={app.supportHref}
                      className="underline decoration-gray-400 underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-white"
                    >
                      Support
                    </Link>
                  )}
                  {app.privacyHref && (
                    <Link
                      href={app.privacyHref}
                      className="underline decoration-gray-400 underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-white"
                    >
                      Privacy
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
