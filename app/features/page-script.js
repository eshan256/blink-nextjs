'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      // Highlight the feature in the sticky bar as you scroll
      var links = document.querySelectorAll('.fnav a[href^="#"]:not(.fnav-cta)');
      var map = {};
      links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var secs = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
      function setActive() {
        var y = window.scrollY + 200, cur = null;
        secs.forEach(function (sec) { if (sec.offsetTop <= y) cur = sec.id; });
        links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
        var act = cur && map[cur];
        if (act && act.parentNode.scrollWidth > act.parentNode.clientWidth) {
          act.parentNode.scrollTo({ left: act.offsetLeft - 24, behavior: 'smooth' });
        }
      }
      var ticking = false;
      window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { setActive(); ticking = false; }); } }, { passive: true });
      setActive();

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
