import Link from 'next/link';
import { FOOTER } from '@/lib/site';
import DownloadLink from './DownloadLink';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="BlinkConnect home">
              <span className="b">Blink</span><span className="c">Connect</span>
            </Link>
            <p>Professional networking, in a blink. Available on iOS and Android.</p>
            <p>Questions? <Link href="/contact" className="email">Contact us</Link></p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {FOOTER.map((col) => (
              <div className="footer-col" key={col.title}>
                <h4>{col.title}</h4>
                {col.links.map((l) =>
                  l.download ? (
                    <DownloadLink key={l.label}>{l.label}</DownloadLink>
                  ) : (
                    <Link key={l.href} href={l.href}>{l.label}</Link>
                  )
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} BlinkConnect. All rights reserved.</span>
          <span>Design by <a href="https://indatos.com" className="credit" target="_blank" rel="noopener">Indatos</a></span>
        </div>
      </div>
    </footer>
  );
}
