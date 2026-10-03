'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      // Investor details form
      var form = document.getElementById('join-form');
      var status = document.getElementById('form-status');
      var wrap = document.getElementById('form-wrap');
      var success = document.getElementById('success');
      var successText = document.getElementById('success-text');
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
        el.addEventListener('change', function () { if (el.tagName === 'SELECT') validate(el); });
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
        if (form.hp_field.value) return;
        var names = ['name', 'company', 'email', 'phone', 'funding_stage', 'industry', 'investment_goals', 'geo_focus'];
        var labels = { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', funding_stage: 'Funding stage', industry: 'Industry focus', investment_goals: 'Investment goals', geo_focus: 'Geographic focus' };
        var data = {};
        names.forEach(function (n) { data[n] = form[n].value.trim(); });
        var endpoint = form.getAttribute('data-endpoint');
        var btn = form.querySelector('.submit');
        if (endpoint) {
          btn.disabled = true; btn.querySelector('span').textContent = 'Sending...';
          fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
            .then(function (r) { if (!r.ok) throw new Error(); form.reset(); done(); })
            .catch(function () { status.className = 'form-status error-msg'; status.textContent = 'Sorry, your details could not be sent. Please try again.'; })
            .then(function () { btn.disabled = false; btn.querySelector('span').textContent = 'Submit'; });
        } else {
          var body = names.filter(function (n) { return data[n]; }).map(function (n) { return labels[n] + ': ' + data[n]; }).join('\n');
          location.href = 'mailto:' + encodeURIComponent(form.getAttribute('data-mailto')) +
            '?subject=' + encodeURIComponent('Investor details: ' + data.company) +
            '&body=' + encodeURIComponent(body);
          done('Your email app should open with your details filled in. Press send there to reach our team.');
        }
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
