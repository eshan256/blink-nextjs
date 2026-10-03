import Link from 'next/link';

export const metadata = { title: { absolute: 'Page not found | BlinkConnect' } };

export default function NotFound() {
  return (
    <main id="top" style={{ background: 'var(--ink)', color: '#FFFFFF', padding: '140px 24px 160px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px' }}>
      <span className="label" style={{ color: 'var(--accent)' }}>404</span>
      <h1 style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.98 }}>
        We could not find <span style={{ color: 'var(--brand)' }}>that page.</span>
      </h1>
      <p style={{ fontSize: '18px', color: 'var(--on-dark)', maxWidth: '520px', lineHeight: 1.6 }}>The page may have moved. Try the home page or our FAQs.</p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-brand">Go to the home page</Link>
        <Link href="/faqs/" className="btn btn-line">Read the FAQs</Link>
      </div>
    </main>
  );
}
