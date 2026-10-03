'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      var groups = Array.prototype.slice.call(document.querySelectorAll('.faq-group'));
      var faqs = Array.prototype.slice.call(document.querySelectorAll('.faq'));
      var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
      var input = document.getElementById('faq-search');
      var none = document.getElementById('no-results');
      var filter = 'all';
      faqs.forEach(function (d) {
        d._q = d.querySelector('.q'); d._a = d.querySelector('.a p');
        d._qt = d._q.textContent; d._at = d._a.textContent;
      });
      function esc(t) { return t.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
      function mark(text, term) {
        if (!term) return esc(text);
        var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        return esc(text).replace(re, '<mark class="hit">$1</mark>');
      }
      function apply() {
        var term = input.value.trim(), low = term.toLowerCase(), shown = 0;
        groups.forEach(function (g) {
          var inFilter = filter === 'all' || g.getAttribute('data-group') === filter, count = 0;
          g.querySelectorAll('.faq').forEach(function (d) {
            var match = !low || (d._qt + ' ' + d._at).toLowerCase().indexOf(low) !== -1;
            d.hidden = !(inFilter && match);
            d._q.innerHTML = mark(d._qt, term);
            d._a.innerHTML = mark(d._at, term);
            if (term && match) d.open = true;
            if (!d.hidden) count++;
          });
          g.hidden = count === 0; shown += count;
        });
        none.classList.toggle('show', shown === 0);
      }
      tabs.forEach(function (t) {
        t.addEventListener('click', function () {
          filter = t.getAttribute('data-filter');
          tabs.forEach(function (x) { var on = x === t; x.classList.toggle('active', on); x.setAttribute('aria-pressed', String(on)); });
          apply();
          var top = document.querySelector('.q-body').getBoundingClientRect().top + window.scrollY - 90;
          if (window.scrollY > top) window.scrollTo({ top: top, behavior: 'smooth' });
        });
      });
      input.addEventListener('input', apply);
      // Open a question linked directly, e.g. /faqs/#can-i-use-blink-connect-for-free
      function openHash() {
        var el = location.hash && document.getElementById(location.hash.slice(1));
        if (el && el.classList.contains('faq')) { el.open = true; }
      }
      window.addEventListener('hashchange', openHash);
      openHash();

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
