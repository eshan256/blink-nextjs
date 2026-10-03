// Structured data (JSON-LD) shared across pages. Company details match the Contact page.
import { SITE } from '@/lib/site';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#app`;

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: `${SITE.url}/icon.svg`,
  parentOrganization: { '@type': 'Organization', name: 'Wehookup Inc' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2468 Horseshoe Dr',
    addressLocality: 'East Stroudsburg',
    addressRegion: 'PA',
    postalCode: '18301',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+1-732-640-6068',
    url: `${SITE.url}/contact/`,
  },
  sameAs: [SITE.appStoreUrl, SITE.googlePlayUrl],
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  publisher: { '@id': ORG_ID },
};

export const mobileApp = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': APP_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  description:
    'BlinkConnect brings founders, investors, GTM partners, professionals and students together in one app. AI-powered matching, events and direct messages.',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'BusinessApplication',
  installUrl: [SITE.appStoreUrl, SITE.googlePlayUrl],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': ORG_ID },
};

// Page names used in breadcrumbs, keyed by URL path.
const PAGE_NAMES = {
  '/about/': 'About',
  '/features/': 'Features',
  '/how-blinkconnect-works/': 'How it works',
  '/blinkconnect-community-discussions/': 'Community',
  '/blink-connect-gtm-partners-opportunities/': 'GTM Partners',
  '/blink-connect-startups-gtm-growth-opportunities/': 'Startups',
  '/blink-connect-investors-curated-startups-opportunities/': 'Investors',
  '/contact/': 'Contact',
  '/support/': 'Support',
  '/faqs/': 'FAQs',
  '/privacy-policy/': 'Privacy Policy',
  '/end-user-agreement-terms-of-use/': 'Terms of Use',
  '/blinkconnect-child-sexual-abuse-and-exploitation-csae-policy/': 'Child Safety Policy',
  '/user-generated-content-policy/': 'User Generated Content Policy',
};

export function breadcrumbs(path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: PAGE_NAMES[path], item: `${SITE.url}${path}` },
    ],
  };
}

// FAQPage from a list of { q, a } pairs.
export function faqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
