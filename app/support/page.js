import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "BlinkConnect Support | How Can We Help?"
  },
  "description": "Get help with BlinkConnect: profiles, chats and messages, your account, or deleting your account. Send our support team a message.",
  "alternates": {
    "canonical": "/support/"
  },
  "openGraph": {
    "title": "BlinkConnect Support | How Can We Help?",
    "description": "Get help with BlinkConnect: profiles, chats and messages, your account, or deleting your account. Send our support team a message.",
    "url": "/support/"
  }
};

export default function SupportPage() {
  return (
    <div className="pg-support">
    <main id="top">
      <JsonLd data={breadcrumbs('/support/')} />
      <section className="s-hero on-dark">
        <div className="wrap">
          <div className="s-top">
            <div className="s-top-l">
              <span className="label">
                Support
              </span>
              {" "}
              <h1>
                How can we{" "}
                <em>
                  help?
                </em>
              </h1>
            </div>
            {" "}
            <p className="lead">
              Questions about your profile, chats or account? Pick a topic below or send us a message, and our team will get back to you.
            </p>
          </div>
          {" "}
          <div className="topics" role="list" aria-label="Support topics">
            <button className="topic" type="button" role="listitem" data-topic="Related to user">
              <span className="ic bg-accent">
                <svg className="i" width="24" height="24" aria-hidden="true">
                  <use href="#i-user" />
                </svg>
              </span>
              <span className="num">
                01
              </span>
              <strong>
                Users and profiles
              </strong>
              <span className="d">
                Questions about a profile, connections, or reporting another user.
              </span>
              <span className="go">
                Get help
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </button>
            <button className="topic" type="button" role="listitem" data-topic="Related to chat">
              <span className="ic bg-brand">
                <svg className="i" width="24" height="24" aria-hidden="true">
                  <use href="#i-message" />
                </svg>
              </span>
              <span className="num">
                02
              </span>
              <strong>
                Chats and messages
              </strong>
              <span className="d">
                Trouble sending, receiving or finding your messages.
              </span>
              <span className="go">
                Get help
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </button>
            <button className="topic" type="button" role="listitem" data-topic="Account related">
              <span className="ic bg-soft">
                <svg className="i" width="24" height="24" aria-hidden="true">
                  <use href="#i-gear" />
                </svg>
              </span>
              <span className="num">
                03
              </span>
              <strong>
                Your account
              </strong>
              <span className="d">
                Signing in, account settings, subscriptions and billing.
              </span>
              <span className="go">
                Get help
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </button>
            <button className="topic del" type="button" role="listitem" data-topic="Deleting account">
              <span className="ic bg-brand">
                <svg className="i" width="24" height="24" aria-hidden="true">
                  <use href="#i-trash" />
                </svg>
              </span>
              <span className="num">
                04
              </span>
              <strong>
                Deleting your account
              </strong>
              <span className="d">
                Request to delete your BlinkConnect account and data.
              </span>
              <span className="go">
                Get help
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="c-main" id="contact-form">
        <div className="c-form-col">
          <div id="form-wrap">
            <span className="label">
              Send a message
            </span>
            {" "}
            <h2 className="display">
              Send us a message.
            </h2>
            {" "}
            <p className="form-sub">
              Fill in the form and we will reply to the email address you provide. Fields marked * are required.
            </p>
            {" "}
            {" "}
            <form id="support-form" className="form-grid" noValidate data-endpoint={FORMS.support} data-mailto={SITE.emails.support}>
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
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="last_name" name="last_name" type="text" autoComplete="family-name" />
              </div>
              {" "}
              <div className="field">
                <label htmlFor="email">
                  Email address
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <div className="control">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  {" "}
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
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <div className="control">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-tel" />
                  </svg>
                  {" "}
                  <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="topic">
                  Support topic
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <div className="control">
                  <select defaultValue="" className="input" id="topic" name="topic" required aria-describedby="topic-err">
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option>
                      Related to user
                    </option>
                    <option>
                      Related to chat
                    </option>
                    <option>
                      Account related
                    </option>
                    <option>
                      Deleting account
                    </option>
                  </select>
                  {" "}
                  <svg className="i chev" width="18" height="18" aria-hidden="true">
                    <use href="#i-chev-down" />
                  </svg>
                </div>
                {" "}
                <span className="error" id="topic-err">
                  Please choose a support topic.
                </span>
              </div>
              {" "}
              <div className="delete-note" id="delete-note" role="note">
                <strong>
                  Deleting your account:
                </strong>
                {" "}please send this request from the email address linked to your BlinkConnect account so we can verify it is you. You can read how we handle your data after deletion in our{" "}
                <Link href="/end-user-agreement-terms-of-use/#data-retention">
                  Data Retention and Removal
                </Link>
                {" "}terms and{" "}
                <Link href="/privacy-policy/#deletion">
                  Privacy Policy
                </Link>
                .{" "}
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="message">
                  Message
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <textarea className="input" id="message" name="message" required maxLength="2000" aria-describedby="message-err message-count" placeholder="Tell us what is happening and how we can help." />
                {" "}
                <span className="error" id="message-err">
                  Please enter a message.
                </span>
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
                  By sending this form, you agree that we may use your details to respond to your request, as described in our{" "}
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
              Our support team will reply to the email address you provided.
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
          <div className="side-block">
            <span className="label">
              Contact information
            </span>
            {" "}
            <h3>
              Reach the team
            </h3>
            {" "}
            <ul className="addr">
              <li>
                <span className="ic">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                </span>
                <span>
                  <small>
                    Contact
                  </small>
                  <b>
                    <Link href="/contact/">Contact page</Link>
                  </b>
                </span>
              </li>
              <li>
                <span className="ic">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-tel" />
                  </svg>
                </span>
                <span>
                  <small>
                    Phone
                  </small>
                  <b>
                    <a href="tel:+17326406068">
                      (732) 640-6068
                    </a>
                  </b>
                </span>
              </li>
              <li>
                <span className="ic">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                </span>
                <span>
                  <small>
                    Mailing address
                  </small>
                  <b>
                    Wehookup Inc
                    <br />
                    2468 Horseshoe Dr
                    <br />
                    East Stroudsburg, PA 18301
                  </b>
                </span>
              </li>
            </ul>
          </div>
          {" "}
          <div className="side-block">
            <span className="label">
              Helpful links
            </span>
            {" "}
            <h3>
              Find answers
            </h3>
            {" "}
            <p>
              Answers about your data, your rights and how BlinkConnect works.
            </p>
            {" "}
            <nav className="links" aria-label="Helpful links">
              <Link href="/faqs/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-help" />
                  </svg>
                  Frequently asked questions
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/privacy-policy/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                  Privacy Policy
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/blinkconnect-child-sexual-abuse-and-exploitation-csae-policy/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                  Child safety policy
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/end-user-agreement-terms-of-use/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-book" />
                  </svg>
                  Terms of Use
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/how-blinkconnect-works/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-sparkle" />
                  </svg>
                  How BlinkConnect works
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/features/">
                <span>
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  App features
                </span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </nav>
          </div>
        </aside>
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
              Not on BlinkConnect yet?
            </h2>
            {" "}
            <p>
              Download the app and start building meaningful connections today.
            </p>
            {" "}
            <div className="stores">
              <a href={SITE.appStoreUrl} className="store dark" aria-label="Download on the App Store">
                <svg className="i" width="26" height="26" style={{ "strokeWidth": "1.8" }} aria-hidden="true">
                  <use href="#i-phone" />
                </svg>
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
