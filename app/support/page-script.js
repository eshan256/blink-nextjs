'use client';

import { useEffect } from 'react';

// Page behaviour (forms, filters, search and so on), run once the page is on screen.
export default function PageScript() {
  useEffect(() => {
      var form = document.getElementById('support-form');
      var topic = document.getElementById('topic');
      var note = document.getElementById('delete-note');
      var msg = document.getElementById('message');
      var count = document.getElementById('message-count');
      var status = document.getElementById('form-status');
      var wrap = document.getElementById('form-wrap');
      var success = document.getElementById('success');
      var successText = document.getElementById('success-text');
      var topicBtns = document.querySelectorAll('.topic');

      function syncTopic() {
        note.classList.toggle('show', topic.value === 'Deleting account');
        topicBtns.forEach(function (b) { b.classList.toggle('picked', b.getAttribute('data-topic') === topic.value); });
      }
      topic.addEventListener('change', function () { syncTopic(); validate(topic); });

      // Topic cards choose the topic and jump to the form
      topicBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          topic.value = btn.getAttribute('data-topic');
          syncTopic(); validate(topic);
          document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(function () { document.getElementById('first_name').focus({ preventScroll: true }); }, 450);
        });
      });

      // Preselect a topic from the URL, e.g. /support/?topic=delete
      var q = new URLSearchParams(location.search).get('topic');
      var map = { user: 'Related to user', chat: 'Related to chat', account: 'Account related', delete: 'Deleting account' };
      if (q && map[q]) { topic.value = map[q]; syncTopic(); }

      msg.addEventListener('input', function () { count.textContent = msg.value.length + ' / 2000'; });

      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      function validate(el) {
        var ok = true;
        if (el.required) ok = el.value.trim() !== '';
        if (ok && el.type === 'email') ok = emailRe.test(el.value.trim());
        el.closest('.field').classList.toggle('invalid', !ok);
        el.setAttribute('aria-invalid', String(!ok));
        return ok;
      }
      form.querySelectorAll('[required]').forEach(function (el) {
        el.addEventListener('blur', function () { if (el.value) validate(el); });
        el.addEventListener('input', function () { if (el.closest('.field').classList.contains('invalid')) validate(el); });
      });
      function showSuccess(text) {
        wrap.style.display = 'none';
        if (text) successText.textContent = text;
        success.classList.add('show'); success.focus();
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.className = 'form-status'; status.textContent = '';
        var firstBad = null;
        form.querySelectorAll('[required]').forEach(function (el) { if (!validate(el) && !firstBad) firstBad = el; });
        if (firstBad) { firstBad.focus(); return; }
        if (form.website.value) return; // spam trap
        var data = {
          first_name: form.first_name.value.trim(), last_name: form.last_name.value.trim(),
          email: form.email.value.trim(), phone: form.phone.value.trim(),
          topic: form.topic.value, message: form.message.value.trim()
        };
        var endpoint = form.getAttribute('data-endpoint');
        var btn = form.querySelector('.submit');
        if (endpoint) {
          btn.disabled = true; btn.querySelector('span').textContent = 'Sending...';
          fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
            .then(function (r) { if (!r.ok) throw new Error(); form.reset(); syncTopic(); count.textContent = '0 / 2000'; showSuccess(); })
            .catch(function () { status.className = 'form-status error-msg'; status.textContent = 'Sorry, your message could not be sent. Please try again, or contact us by phone or email.'; })
            .then(function () { btn.disabled = false; btn.querySelector('span').textContent = 'Send message'; });
        } else {
          var body = 'Name: ' + data.first_name + ' ' + data.last_name + '\n' + 'Email: ' + data.email + '\n' +
                     (data.phone ? 'Phone: ' + data.phone + '\n' : '') + 'Topic: ' + data.topic + '\n\n' + data.message;
          location.href = 'mailto:' + encodeURIComponent(form.getAttribute('data-mailto')) +
            '?subject=' + encodeURIComponent('BlinkConnect support: ' + data.topic) +
            '&body=' + encodeURIComponent(body);
          showSuccess('Your email app should open with your message filled in. Press send there to reach our support team.');
        }
      });
      document.getElementById('send-another').addEventListener('click', function () {
        success.classList.remove('show'); wrap.style.display = '';
        form.querySelectorAll('.field').forEach(function (f) { f.classList.remove('invalid'); });
        document.getElementById('first_name').focus();
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
