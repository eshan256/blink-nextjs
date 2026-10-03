import { SITE } from '@/lib/site';

const ROUTES = [
  '/', '/about/', '/features/', '/how-blinkconnect-works/', '/blinkconnect-community-discussions/',
  '/blink-connect-gtm-partners-opportunities/', '/blink-connect-startups-gtm-growth-opportunities/',
  '/blink-connect-investors-curated-startups-opportunities/', '/contact/', '/support/', '/faqs/',
  '/privacy-policy/', '/end-user-agreement-terms-of-use/',
  '/blinkconnect-child-sexual-abuse-and-exploitation-csae-policy/', '/user-generated-content-policy/',
];

export default function sitemap() {
  return ROUTES.map((path) => ({ url: `${SITE.url}${path}`, changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7 }));
}
