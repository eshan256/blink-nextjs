'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, MOBILE_EXTRA } from '@/lib/site';
import DownloadLink from './DownloadLink';

function DownloadIcon() {
  return (
    <svg className="i" width="18" height="18" aria-hidden="true"><use href="#i-download" /></svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu on navigation and with the Escape key
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href) => (pathname === href ? 'page' : undefined);
  const mobileNav = [];
  NAV.forEach((item) => {
    mobileNav.push(item);
    MOBILE_EXTRA.filter((x) => x.after === item.href).forEach((x) => mobileNav.push(x));
  });

  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main">
        <Link href="/" className="logo" aria-label="BlinkConnect home">
          <span className="b">Blink</span><span className="c">Connect</span>
        </Link>
        <div className="nav-links">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href)}>{item.label}</Link>
          ))}
        </div>
        <div className="nav-actions">
          <DownloadLink className="btn btn-brand"><DownloadIcon />Get the app</DownloadLink>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="i" width="22" height="22" aria-hidden="true"><use href={open ? '#i-close' : '#i-menu'} /></svg>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        {mobileNav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={isCurrent(item.href)} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <DownloadLink className="btn btn-brand" onNavigate={() => setOpen(false)}><DownloadIcon />Get the app</DownloadLink>
      </div>
    </header>
  );
}
