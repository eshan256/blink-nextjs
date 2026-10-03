// Site-wide settings. Change values here and every page updates.

export const SITE = {
  name: 'BlinkConnect',
  url: 'https://blinkconnect.app',

  // Store links (taken from the current blinkconnect.app site)
  appStoreUrl: 'https://apps.apple.com/app/blink-connect/id6478499997',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.blinkconnect.app',

  // Emails: placeholders in [BRACKETS] show highlighted on the page until replaced.
  emails: {
    support: '[YOUR SUPPORT EMAIL]',
    legal: '[EMAIL ADDRESS]', // Privacy Policy and Terms of Use contact
    childSafety: '[CHILD SAFETY EMAIL]', // CSAE policy contact
  },

  // How It Works video. For https://vimeo.com/123456789 set id: '123456789'.
  // For an unlisted video (https://vimeo.com/123456789/abc123) also set hash: 'abc123'.
  vimeo: { id: '1090454294', hash: '7bd505da82' },
};

// Where each form sends its submissions (for example a Formspree, Basin or Getform URL).
// Set these as environment variables in Vercel. Until set, the form opens the visitor's
// email app addressed to SITE.emails.support.
export const FORMS = {
  support: process.env.NEXT_PUBLIC_FORM_SUPPORT || '',
  contact: process.env.NEXT_PUBLIC_FORM_CONTACT || '',
  community: process.env.NEXT_PUBLIC_FORM_COMMUNITY || '',
  gtmPartners: process.env.NEXT_PUBLIC_FORM_GTM_PARTNERS || '',
  startups: process.env.NEXT_PUBLIC_FORM_STARTUPS || '',
  investors: process.env.NEXT_PUBLIC_FORM_INVESTORS || '',
};

// Main navigation
export const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/features/', label: 'Features' },
  { href: '/how-blinkconnect-works/', label: 'How it works' },
  { href: '/blink-connect-gtm-partners-opportunities/', label: 'For partners' },
  { href: '/contact/', label: 'Contact' },
];

// Extra item shown only in the phone menu
export const MOBILE_EXTRA = [{ href: '/blinkconnect-community-discussions/', label: 'Community', after: '/how-blinkconnect-works/' }];

export const FOOTER = [
  {
    title: 'App',
    links: [
      { href: '/features/', label: 'Features' },
      { href: '/how-blinkconnect-works/', label: 'How it works' },
      { href: '/blinkconnect-community-discussions/', label: 'Community' },
      { href: '#download', label: 'Download', download: true },
    ],
  },
  {
    title: 'Made for',
    links: [
      { href: '/blink-connect-gtm-partners-opportunities/', label: 'GTM Partners' },
      { href: '/blink-connect-startups-gtm-growth-opportunities/', label: 'Startups' },
      { href: '/blink-connect-investors-curated-startups-opportunities/', label: 'Investors' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' },
      { href: '/support/', label: 'Support' },
      { href: '/faqs/', label: 'FAQs' },
      { href: '/privacy-policy/', label: 'Privacy Policy' },
      { href: '/end-user-agreement-terms-of-use/', label: 'Terms of Use' },
      { href: '/blinkconnect-child-sexual-abuse-and-exploitation-csae-policy/', label: 'Child Safety Policy' },
      { href: '/user-generated-content-policy/', label: 'Content Policy' },
    ],
  },
];
