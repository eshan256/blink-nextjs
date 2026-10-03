'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      // Reveal sections as they scroll into view
      var els = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
        els.forEach(function (el) { io.observe(el); });
      } else {
        els.forEach(function (el) { el.classList.add('in'); });
      }

  }, []);
  return null;
}
