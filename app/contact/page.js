import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "Contact BlinkConnect | Let's Keep in Touch"
  },
  "description": "Contact the BlinkConnect team. Send us a message, see our working hours and find our office in East Stroudsburg, PA.",
  "alternates": {
    "canonical": "/contact/"
  },
  "openGraph": {
    "title": "Contact BlinkConnect | Let's Keep in Touch",
    "description": "Contact the BlinkConnect team. Send us a message, see our working hours and find our office in East Stroudsburg, PA.",
    "url": "/contact/"
  }
};

export default function ContactPage() {
  return (
    <div className="pg-contact">
    <main id="top">
      <JsonLd data={breadcrumbs('/contact/')} />
      <section className="c-hero on-dark">
        <div className="wrap c-hero-grid">
          <div className="c-hero-copy">
            <span className="label">
              Contact
            </span>
            {" "}
            <h1>
              Let's keep{" "}
              <em>
                in touch.
              </em>
            </h1>
            {" "}
            <p className="lead">
              Reach out to us anytime, and let's make your networking experience seamless.
            </p>
            {" "}
            <nav className="jump" aria-label="On this page">
              <a href="#contact-form">
                <span>
                  01
                </span>
                <b>
                  Send a message
                </b>
              </a>
              {" "}
              <a href="#hours">
                <span>
                  02
                </span>
                <b>
                  Working hours
                </b>
              </a>
              {" "}
              <a href="#location">
                <span>
                  03
                </span>
                <b>
                  Our location
                </b>
              </a>
            </nav>
          </div>
          {" "}
          <div className="c-visual">
            <figure className="c-photo" style={{ "margin": "0" }}>
              <img src="/images/gtm-challenge.jpg" width="844" height="412" alt="A diverse group of smiling professionals giving a thumbs up" />
              {" "}
              <figcaption>
                We would love to hear from you
              </figcaption>
            </figure>
            {" "}
            <div className="c-chip one">
              <span className="ic bg-brand">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-send" />
                </svg>
              </span>
              <span>
                <strong>
                  Send a message
                </strong>
                <small>
                  We reply on working days
                </small>
              </span>
            </div>
            {" "}
            <div className="c-chip two">
              <span className="ic bg-accent">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-clock" />
                </svg>
              </span>
              <span>
                <strong>
                  <span className="status-dot" id="chip-dot" />
                  <span id="chip-status">
                    Monday to Friday
                  </span>
                </strong>
                <small>
                  Open, 8 to 4
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="c-main" id="contact-form">
        <div className="c-form-col">
          <div id="form-wrap">
            <span className="label">
              01 / Send a message
            </span>
            {" "}
            <h2 className="display">
              Send us a message.
            </h2>
            {" "}
            <p className="form-sub">
              Fill in your details and we will get back to you. Fields marked * are required.
            </p>
            {" "}
            {" "}
            <form id="contact-form-el" className="form-grid" noValidate data-endpoint={FORMS.contact} data-mailto={SITE.emails.support}>
              <div className="field">
                <label htmlFor="first_name">
                  First name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="first_name" name="first_name" type="text" autoComplete="given-name" required aria-describedby="first_name-err" />
                {" "}
                <span className="error" id="first_name-err">
                  Please enter your first name.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="last_name">
                  Last name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="last_name" name="last_name" type="text" autoComplete="family-name" required aria-describedby="last_name-err" />
                {" "}
                <span className="error" id="last_name-err">
                  Please enter your last name.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="email">
                  Email
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <div className="control">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  <input className="input" id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="email-err" placeholder="you@example.com" />
                </div>
                {" "}
                <span className="error" id="email-err">
                  Please enter a valid email address.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="phone">
                  Phone number
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <div className="control">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-tel" />
                  </svg>
                  <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required aria-describedby="phone-err" placeholder="(555) 123-4567" />
                </div>
                {" "}
                <span className="error" id="phone-err">
                  Please enter your phone number.
                </span>
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="message">
                  Your message
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <textarea className="input" id="message" name="message" maxLength="2000" aria-describedby="message-count" placeholder="How can we help?" />
                {" "}
                <span className="count" id="message-count" aria-live="polite">
                  0 / 2000
                </span>
              </div>
              {" "}
              <div className="hp" aria-hidden="true">
                <label htmlFor="website">
                  Leave this field empty
                </label>
                {" "}
                <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
              </div>
              {" "}
              <div className="form-status" id="form-status" role="alert" />
              {" "}
              <div className="form-actions">
                <p>
                  By sending this form, you agree that we may use your details to respond to you, as described in our{" "}
                  <Link href="/privacy-policy/">
                    Privacy Policy
                  </Link>
                  .
                </p>
                {" "}
                <button className="btn btn-brand submit" type="submit">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-send" />
                  </svg>
                  <span>
                    Send message
                  </span>
                </button>
              </div>
            </form>
          </div>
          {" "}
          <div className="success" id="success" tabIndex="-1" aria-live="polite">
            <span className="ok bg-accent">
              <svg className="i" width="28" height="28" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                <use href="#i-check" />
              </svg>
            </span>
            {" "}
            <h2>
              Thanks, your message is on its way.
            </h2>
            {" "}
            <p id="success-text">
              We will get back to you during our working hours, Monday to Friday.
            </p>
            {" "}
            <button className="link-btn" type="button" id="send-another">
              Send another message
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
        {" "}
        <aside className="c-side on-dark" aria-label="Contact details">
          <div className="side-block" id="hours">
            <span className="label">
              02 / Working hours
            </span>
            {" "}
            <h3>
              When we are in
              <span className="now" id="now-status" hidden />
            </h3>
            {" "}
            <div className="week" aria-hidden="true">
              <div className="day" data-day="1">
                <span>
                  MON
                </span>
                <div className="track">
                  <i />
                </div>
              </div>
              <div className="day" data-day="2">
                <span>
                  TUE
                </span>
                <div className="track">
                  <i />
                </div>
              </div>
              <div className="day" data-day="3">
                <span>
                  WED
                </span>
                <div className="track">
                  <i />
                </div>
              </div>
              <div className="day" data-day="4">
                <span>
                  THU
                </span>
                <div className="track">
                  <i />
                </div>
              </div>
              <div className="day" data-day="5">
                <span>
                  FRI
                </span>
                <div className="track">
                  <i />
                </div>
              </div>
              <div className="day off" data-day="6">
                <span>
                  SAT
                </span>
                <div className="track" />
              </div>
              <div className="day off" data-day="0">
                <span>
                  SUN
                </span>
                <div className="track" />
              </div>
              {" "}
              <div className="ticks">
                <i />
                <div>
                  <span style={{ "left": "33.33%" }}>
                    8 AM
                  </span>
                  <span style={{ "left": "66.66%" }}>
                    4 PM
                  </span>
                </div>
              </div>
            </div>
            {" "}
            <div className="hours">
              <div className="open">
                <span>
                  Monday to Friday
                </span>
                <span>
                  Open, 8 to 4
                </span>
              </div>
              {" "}
              <div>
                <span>
                  Saturday and Sunday
                </span>
                <span>
                  Closed
                </span>
              </div>
              {" "}
              <div>
                <span>
                  Public holidays
                </span>
                <span>
                  Closed
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div className="side-block" id="location">
            <span className="label">
              03 / Our location
            </span>
            {" "}
            <h3>
              Where to find us
            </h3>
            {" "}
            <a className="map" href="https://www.google.com/maps/search/?api=1&query=2468+Horseshoe+Dr%2C+East+Stroudsburg%2C+PA+18301" target="_blank" rel="noopener" aria-label="Open our location in Google Maps">
              <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect className="block" x="14" y="14" width="70" height="44" rx="4" />
                <rect className="block" x="100" y="14" width="66" height="44" rx="4" />
                <rect className="park" x="14" y="74" width="70" height="52" rx="4" />
                <rect className="block" x="100" y="74" width="66" height="52" rx="4" />
                <rect className="block" x="216" y="14" width="90" height="40" rx="4" />
                <rect className="block" x="232" y="112" width="74" height="54" rx="4" />
                <rect className="block" x="14" y="142" width="152" height="30" rx="4" />
                <path className="road" d="M92 0V180M174 0V180M0 66H200M0 134H180" strokeWidth="3" />
                <path className="road main" d="M-10 170 C 80 150, 150 110, 200 92 S 290 60, 340 40" />
                <path className="road" d="M205 0 C 210 40, 214 70, 198 92 M198 92 C 220 120, 222 150, 226 190" strokeWidth="3" />
                <path className="road route" d="M92 180 V134 H174 V100 C 180 94, 190 90, 198 84" />
              </svg>
              {" "}
              <span className="pin-ring" aria-hidden="true" />
              {" "}
              <span className="pin" aria-hidden="true">
                <span className="head">
                  <svg className="i" width="20" height="20" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                </span>
              </span>
            </a>
            {" "}
            <ul className="addr">
              <li>
                <span className="ic">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                </span>
                <span>
                  <small>
                    Address
                  </small>
                  <b>
                    2468 Horseshoe Dr
                    <br />
                    East Stroudsburg, PA 18301
                  </b>
                </span>
              </li>
            </ul>
            {" "}
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=2468+Horseshoe+Dr%2C+East+Stroudsburg%2C+PA+18301" target="_blank" rel="noopener">
              Open in Google Maps
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-external" />
              </svg>
            </a>
          </div>
        </aside>
      </section>
      {" "}
      {" "}
      <section className="more">
        <div className="wrap">
          <div className="more-head reveal">
            <div>
              <span className="label">
                04 / More ways to reach us
              </span>
              {" "}
              <h2 className="display">
                Looking for something specific?
              </h2>
            </div>
          </div>
          {" "}
          <div className="help-grid reveal">
            <Link className="help" href="/support/">
              <span className="hic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-help" />
                </svg>
              </span>
              <strong>
                App support
              </strong>
              <span>
                Account, chats and deleting your account
              </span>
              <span className="go" aria-hidden="true">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="help" href="/faqs/">
              <span className="hic bg-ink">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-message" />
                </svg>
              </span>
              <strong>
                FAQs
              </strong>
              <span>
                Quick answers to common questions
              </span>
              <span className="go" aria-hidden="true">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="help" href="/blink-connect-gtm-partners-opportunities/#apply">
              <span className="hic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-link" />
                </svg>
              </span>
              <strong>
                Become a GTM partner
              </strong>
              <span>
                Apply to join as a partner
              </span>
              <span className="go" aria-hidden="true">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="help" href="/blink-connect-investors-curated-startups-opportunities/#apply">
              <span className="hic bg-soft">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-pie" />
                </svg>
              </span>
              <strong>
                Investors and startups
              </strong>
              <span>
                Share your details with our team
              </span>
              <span className="go" aria-hidden="true">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="download" id="download">
        <svg className="rings" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="198" fill="none" stroke="#fff" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="102" fill="none" stroke="#fff" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="56" fill="#F7891F" opacity="0.5" />
        </svg>
        {" "}
        <div className="wrap dl-grid">
          <div className="dl-copy reveal">
            <span className="label" style={{ "color": "#FFFFFF" }}>
              Get the app
            </span>
            {" "}
            <h2>
              Prefer to connect in the app?
            </h2>
            {" "}
            <p>
              Download BlinkConnect and start building meaningful connections today.
            </p>
            {" "}
            <div className="stores">
              <a href={SITE.appStoreUrl} className="store dark" aria-label="Download on the App Store">
                <svg className="i" width="26" height="26" style={{ "strokeWidth": "1.8" }} aria-hidden="true">
                  <use href="#i-phone" />
                </svg>
                {" "}
                <span>
                  <small>
                    Download on the
                  </small>
                  <strong>
                    App Store
                  </strong>
                </span>
              </a>
              {" "}
              <a href={SITE.googlePlayUrl} className="store dark" aria-label="Get it on Google Play">
                <svg className="i" width="24" height="24" style={{ "strokeWidth": "1.8" }} aria-hidden="true">
                  <use href="#i-play" />
                </svg>
                {" "}
                <span>
                  <small>
                    Get it on
                  </small>
                  <strong>
                    Google Play
                  </strong>
                </span>
              </a>
            </div>
          </div>
          {" "}
          <div className="dl-phones" aria-hidden="true">
            <div className="ph a">
              <img src="/images/app-profile-screen.png" width="1290" height="2796" alt="" loading="lazy" />
            </div>
            {" "}
            <div className="ph b">
              <img src="/images/app-discover-screen.png" width="1290" height="2796" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
      <PageScript />
    </div>
  );
}
