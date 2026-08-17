export type AppCatalogItem = {
  id: string;
  name: string;
  href: string;
  summary: string;
  supportHref?: string;
  privacyHref?: string;
};

export const appCatalog: AppCatalogItem[] = [
  {
    id: 'nulldent',
    name: 'Nulldent',
    href: '/nulldent',
    summary: 'A fast, focused, keyboard-first text and code editor for macOS.',
    supportHref: '/nulldent/support',
    privacyHref: '/nulldent/privacy',
  },
];
