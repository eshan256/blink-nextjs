'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      document.getElementById('print-btn').addEventListener('click', function () { window.print(); });
      // Table of contents: collapse on small screens, highlight the section in view
      var toc = document.querySelector('.toc');
      if (window.matchMedia('(max-width: 1180px)').matches) toc.removeAttribute('open');
      var links = {};
      toc.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      if ('IntersectionObserver' in window) {
        var tio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
              if (links[en.target.id]) links[en.target.id].classList.add('active');
            }
          });
        }, { rootMargin: '-20% 0px -70% 0px' });
        document.querySelectorAll('.prose > section').forEach(function (sec) { tio.observe(sec); });
      }

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
