import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IconSprite from '@/components/IconSprite';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { organization, website } from '@/lib/schema';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'BlinkConnect',
  description: 'BlinkConnect: professional networking, in a blink.',
  openGraph: { siteName: 'BlinkConnect', type: 'website' },
};

export const viewport = { themeColor: '#17131C' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Lets sections fade in as they scroll into view; without JavaScript everything simply shows. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;800;900&family=Red+Hat+Mono:wght@500;600&family=Red+Hat+Text:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <JsonLd data={[organization, website]} />
        <IconSprite />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
