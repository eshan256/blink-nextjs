'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      // Vimeo player: loads only when the visitor presses play, so the page stays fast.
      document.querySelectorAll('.video[data-vimeo-id]').forEach(function (box) {
        var btn = box.querySelector('.video-poster');
        btn.addEventListener('click', function () {
          var id = box.getAttribute('data-vimeo-id');
          if (!id || id === 'YOUR_VIMEO_ID') {
            btn.querySelector('.vm-sub').textContent = 'Video coming soon.';
            return;
          }
          var hash = box.getAttribute('data-vimeo-hash');
          var src = 'https://player.vimeo.com/video/' + encodeURIComponent(id) +
            '?autoplay=1&dnt=1&title=0&byline=0&portrait=0&color=E3165B' +
            (hash ? '&h=' + encodeURIComponent(hash) : '');
          var frame = document.createElement('iframe');
          frame.src = src;
          frame.title = 'BlinkConnect video';
          frame.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media';
          frame.allowFullscreen = true;
          box.replaceChild(frame, btn);
        });
      });

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
