'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      // Contact form
      var form = document.getElementById('contact-form-el');
      var msg = document.getElementById('message');
      var count = document.getElementById('message-count');
      var status = document.getElementById('form-status');
      var wrap = document.getElementById('form-wrap');
      var success = document.getElementById('success');
      var successText = document.getElementById('success-text');
      msg.addEventListener('input', function () { count.textContent = msg.value.length + ' / 2000'; });
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      function validate(el) {
        var ok = el.value.trim() !== '';
        if (ok && el.type === 'email') ok = emailRe.test(el.value.trim());
        el.closest('.field').classList.toggle('invalid', !ok);
        el.setAttribute('aria-invalid', String(!ok));
        return ok;
      }
      form.querySelectorAll('[required]').forEach(function (el) {
        el.addEventListener('blur', function () { if (el.value) validate(el); });
        el.addEventListener('input', function () { if (el.closest('.field').classList.contains('invalid')) validate(el); });
      });
      function done(text) {
        wrap.style.display = 'none';
        if (text) successText.textContent = text;
        success.classList.add('show'); success.focus();
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.className = 'form-status'; status.textContent = '';
        var bad = null;
        form.querySelectorAll('[required]').forEach(function (el) { if (!validate(el) && !bad) bad = el; });
        if (bad) { bad.focus(); return; }
        if (form.website.value) return;
        var data = {
          first_name: form.first_name.value.trim(), last_name: form.last_name.value.trim(),
          email: form.email.value.trim(), phone: form.phone.value.trim(), message: form.message.value.trim()
        };
        var endpoint = form.getAttribute('data-endpoint');
        var btn = form.querySelector('.submit');
        if (endpoint) {
          btn.disabled = true; btn.querySelector('span').textContent = 'Sending...';
          fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
            .then(function (r) { if (!r.ok) throw new Error(); form.reset(); count.textContent = '0 / 2000'; done(); })
            .catch(function () { status.className = 'form-status error-msg'; status.textContent = 'Sorry, your message could not be sent. Please try again.'; })
            .then(function () { btn.disabled = false; btn.querySelector('span').textContent = 'Send message'; });
        } else {
          var body = 'Name: ' + data.first_name + ' ' + data.last_name + '\nEmail: ' + data.email + '\nPhone: ' + data.phone + (data.message ? '\n\n' + data.message : '');
          location.href = 'mailto:' + encodeURIComponent(form.getAttribute('data-mailto')) +
            '?subject=' + encodeURIComponent('BlinkConnect contact: ' + data.first_name + ' ' + data.last_name) +
            '&body=' + encodeURIComponent(body);
          done('Your email app should open with your message filled in. Press send there to reach us.');
        }
      });
      document.getElementById('send-another').addEventListener('click', function () {
        success.classList.remove('show'); wrap.style.display = '';
        document.getElementById('first_name').focus();
      });

      // Open or closed right now, using office time (Eastern). Change OFFICE_TZ if needed.
      var OFFICE_TZ = 'America/New_York';
      try {
        var parts = new Intl.DateTimeFormat('en-US', { timeZone: OFFICE_TZ, weekday: 'short', hour: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
        var wd = parts.find(function (p) { return p.type === 'weekday'; }).value;
        var hr = parseInt(parts.find(function (p) { return p.type === 'hour'; }).value, 10);
        var dayNum = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[wd];
        var isOpen = dayNum >= 1 && dayNum <= 5 && hr >= 8 && hr < 16;
        var today = document.querySelector('.day[data-day="' + dayNum + '"]');
        if (today) today.classList.add('today');
        var nowEl = document.getElementById('now-status');
        nowEl.innerHTML = '<span class="status-dot' + (isOpen ? ' open' : '') + '"></span>' + (isOpen ? 'Open now' : 'Closed now');
        nowEl.hidden = false;
        document.getElementById('chip-dot').classList.toggle('open', isOpen);
        document.getElementById('chip-status').textContent = isOpen ? 'Open now' : 'Closed now';
      } catch (err) {}

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
