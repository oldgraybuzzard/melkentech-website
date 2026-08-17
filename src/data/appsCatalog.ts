export type AppLink = {
  href: string;
  external: boolean;
};

export type AppOwnershipType = 'melken-product' | 'client-work';

export type AppCatalogItem = {
  id: string;
  name: string;
  summary: string;
  ownershipType: AppOwnershipType;
  deployment: 'internal' | 'external';
  primaryActionLabel: string;
  product: AppLink;
  downloads?: {
    label: string;
    link: AppLink;
  }[];
  support?: AppLink;
  privacy?: AppLink;
  operatingSystems: string[];
  applicationCategory: string;
  attribution?: {
    builtBy?: string;
    builtFor?: string;
    publishedBy?: string;
    publishedByDba?: string;
  };
};

export const appCatalog: AppCatalogItem[] = [
  {
    id: 'nulldent',
    name: 'Nulldent',
    summary: 'A fast, focused, keyboard-first text and code editor for macOS.',
    ownershipType: 'melken-product',
    deployment: 'internal',
    primaryActionLabel: 'View Nulldent',
    product: {
      href: '/nulldent',
      external: false,
    },
    support: {
      href: '/nulldent/support',
      external: false,
    },
    privacy: {
      href: '/nulldent/privacy',
      external: false,
    },
    operatingSystems: ['macOS'],
    applicationCategory: 'DeveloperApplication',
  },
  {
    id: 'safestop-rv',
    name: 'SafeStop RV',
    summary:
      'SafeStop RV 2.0 is an RV travel companion for iOS and Android with RV route guidance, community-verified safe stops, campground discovery, weather intelligence, and related travel tools.',
    ownershipType: 'melken-product',
    deployment: 'external',
    primaryActionLabel: 'Visit SafeStop RV',
    product: {
      href: 'https://rvsafestop.com',
      external: true,
    },
    support: {
      href: 'https://rvsafestop.com/contact',
      external: true,
    },
    privacy: {
      href: 'https://rvsafestop.com/privacy',
      external: true,
    },
    operatingSystems: ['iOS', 'Android'],
    applicationCategory: 'TravelApplication',
  },
  {
    id: 'aci-member-app',
    name: 'ACI Member App',
    summary:
      'Official ACI Member App with BRN lookup, membership directory, events and rallies, member communications, courtesy parking, and member-only access.',
    ownershipType: 'client-work',
    deployment: 'external',
    primaryActionLabel: 'Learn about the ACI Member App',
    product: {
      href: 'https://airstreamclub.org/newmembers/aci-member-app',
      external: true,
    },
    downloads: [
      {
        label: 'Download on the App Store',
        link: {
          href: 'https://apps.apple.com/us/app/airstream-club/id6742466189',
          external: true,
        },
      },
      {
        label: 'Get it on Google Play',
        link: {
          href: 'https://play.google.com/store/apps/details?id=org.airstreamclub.member',
          external: true,
        },
      },
    ],
    operatingSystems: ['iOS', 'Android'],
    applicationCategory: 'LifestyleApplication',
    attribution: {
      builtBy: 'Melken TechWork',
      builtFor: 'Airstream Club International (ACI)',
      publishedBy: 'Wally Byam Caravan Club International, Inc.',
      publishedByDba: 'Airstream Club International',
    },
  },
];
