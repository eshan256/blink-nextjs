/** @type {import('next').NextConfig} */
const nextConfig = {
  // Match the current WordPress URLs (/about/, /faqs/ ...), so existing links and Google results keep working.
  trailingSlash: true,
  // Page scripts attach listeners once on load; strict mode would run them twice in development.
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Old single-question FAQ pages from WordPress
      { source: '/faq-items/:slug*', destination: '/faqs/', permanent: true },
      { source: '/faq_category/:slug*', destination: '/faqs/', permanent: true },
    ];
  },
};

export default nextConfig;
