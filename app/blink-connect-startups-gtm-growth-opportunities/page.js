import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "For Startups | Grow Faster with GTM Partners and Investors on BlinkConnect"
  },
  "description": "Join BlinkConnect and get access to expert GTM partners, investors and the resources your startup needs to scale faster.",
  "alternates": {
    "canonical": "/blink-connect-startups-gtm-growth-opportunities/"
  },
  "openGraph": {
    "title": "For Startups | Grow Faster with GTM Partners and Investors on BlinkConnect",
    "description": "Join BlinkConnect and get access to expert GTM partners, investors and the resources your startup needs to scale faster.",
    "url": "/blink-connect-startups-gtm-growth-opportunities/"
  }
};

export default function StartupsPage() {
  return (
    <div className="pg-startups">
    <main id="top">
      <JsonLd data={breadcrumbs('/blink-connect-startups-gtm-growth-opportunities/')} />
      <section className="g-hero on-dark">
        <div className="g-hero-grid">
          <div className="g-hero-copy">
            <span className="label">
              For startups
            </span>
            {" "}
            <h1>
              Accelerate your startup's growth with{" "}
              <em>
                expert GTM partners.
              </em>
            </h1>
            {" "}
            <p className="lead">
              Join Blink Connect and get access to top Go-To-Market strategies, investors, and the support you need to scale faster.
            </p>
            {" "}
            <div className="g-cta">
              <a href="#apply" className="btn btn-brand">
                Sign up today
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
              {" "}
              <a href="#download" className="btn btn-line">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-download" />
                </svg>
                Download the app
              </a>
            </div>
            {" "}
            <div className="g-reach">
              <em>
                Connect with
              </em>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-link" />
                </svg>
                GTM partners
              </span>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-pie" />
                </svg>
                Investors
              </span>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-box" />
                </svg>
                Resources
              </span>
            </div>
          </div>
          {" "}
          <div className="g-hero-media st-media">
            <img src="/images/app-blink-feed.jpg" width="1600" height="1058" alt="The BlinkConnect app on a phone, showing the Blink Feed" />
            {" "}
            <div className="match-card">
              <span className="ic">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-pie" />
                </svg>
              </span>
              <span>
                <strong>
                  New investor match
                </strong>
                <small>
                  Interested in your seed round
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="challenge">
        <div className="wrap ch-grid">
          <figure className="ch-photo reveal" style={{ "margin": "0" }}>
            <img src="/images/people-table.jpg" width="881" height="1112" loading="lazy" alt="Overhead view of professionals gathered around a round table, collaborating" />
            {" "}
            <figcaption>
              <i />
              The right partners make the difference
            </figcaption>
          </figure>
          {" "}
          <div className="ch-copy reveal">
            <span className="label">
              01 / The startup challenge
            </span>
            {" "}
            <h2 className="display">
              Navigating growth alone.
            </h2>
            {" "}
            <p className="lead-l">
              Startups often struggle to grow due to limited access to the critical resources they need to succeed. Without the right Go-To-Market (GTM) strategies, many startups face obstacles such as unclear product-market fit, difficulty reaching target audiences, and the lack of connections with experienced partners who can help them scale. This leads to wasted time, money, and missed opportunities.
            </p>
            {" "}
            <div className="pains">
              <div className="pain">
                <span className="ic">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-target2" />
                  </svg>
                </span>
                <b>
                  Unclear product-market fit
                </b>
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </div>
              {" "}
              <div className="pain">
                <span className="ic">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-megaphone" />
                  </svg>
                </span>
                <b>
                  Hard-to-reach audiences
                </b>
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </div>
              {" "}
              <div className="pain">
                <span className="ic">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                </span>
                <b>
                  No experienced partners
                </b>
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </div>
            </div>
            {" "}
            <div className="waste">
              The result:
              <span>
                Wasted time
              </span>
              <span>
                Wasted money
              </span>
              <span>
                Missed opportunities
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="solution on-dark" id="solution">
        <div className="wrap sol-top">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                02 / The solution
              </span>
              {" "}
              <h2 className="display">
                Blink Connect: your one-stop platform for growth.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Blink Connect connects you with Go-To-Market (GTM) experts, investors, and other key resources to help you grow smarter and faster. Our platform brings all the partners you need to turn your vision into a reality.
            </p>
          </div>
          {" "}
          <div className="tree reveal">
            <div className="tree-top">
              <div className="core">
                <span className="ic">
                  <svg className="i" width="24" height="24" aria-hidden="true">
                    <use href="#i-rocket" />
                  </svg>
                </span>
                <span>
                  <small>
                    All in one place
                  </small>
                  <b>
                    Your startup
                  </b>
                </span>
              </div>
            </div>
            {" "}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path className="ln" d="M50 0 C 50 50, 16.6 50, 16.6 100" vectorEffect="non-scaling-stroke" />
              <path className="ln" d="M50 0 L 50 100" vectorEffect="non-scaling-stroke" />
              <path className="ln" d="M50 0 C 50 50, 83.4 50, 83.4 100" vectorEffect="non-scaling-stroke" />
              <path className="fl" pathLength="100" d="M50 0 C 50 50, 16.6 50, 16.6 100" vectorEffect="non-scaling-stroke" />
              <path className="fl p" pathLength="100" d="M50 0 L 50 100" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-.9s" }} />
              <path className="fl" pathLength="100" d="M50 0 C 50 50, 83.4 50, 83.4 100" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-1.7s" }} />
            </svg>
            {" "}
            <div className="leaves">
              <article className="leaf">
                <span className="ic bg-accent">
                  <svg className="i" width="24" height="24" aria-hidden="true">
                    <use href="#i-link" />
                  </svg>
                </span>
                <span className="num">
                  01
                </span>
                <h3>
                  GTM expertise
                </h3>
                <p>
                  Get strategic insights from GTM partners who specialize in scaling startups.
                </p>
              </article>
              {" "}
              <article className="leaf">
                <span className="ic bg-brand">
                  <svg className="i" width="24" height="24" aria-hidden="true">
                    <use href="#i-pie" />
                  </svg>
                </span>
                <span className="num">
                  02
                </span>
                <h3>
                  Investor connections
                </h3>
                <p>
                  Easily connect with investors looking for high-potential startups.
                </p>
              </article>
              {" "}
              <article className="leaf">
                <span className="ic bg-soft">
                  <svg className="i" width="24" height="24" aria-hidden="true">
                    <use href="#i-box" />
                  </svg>
                </span>
                <span className="num">
                  03
                </span>
                <h3>
                  Curated resources
                </h3>
                <p>
                  Access the tools, networks, and strategies you need to succeed.
                </p>
              </article>
            </div>
          </div>
        </div>
        {" "}
        <div className="wrap">
          <div className="sol-cta">
            <p>
              Turn your vision into a reality.
            </p>
            {" "}
            <a href="#apply" className="btn btn-brand">
              Sign up today
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="faqs" id="faqs">
        <div className="wrap faq-grid">
          <div className="faq-side reveal">
            <span className="label">
              03 / FAQs
            </span>
            {" "}
            <h2 className="display">
              Questions from startups.
            </h2>
            {" "}
            <p className="lead-l">
              Everything you need to know before you sign up.
            </p>
            {" "}
            <Link href="/faqs/" className="text-link">
              See all FAQs
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
          {" "}
          <div className="faq-list reveal">
            <details className="faq" open>
              <summary>
                <span className="q">
                  How can Blink Connect help me grow my business?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  Blink Connect connects you with investors, GTM partners, and market experts, giving you access to the resources and funding needed to scale your business.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  Can I track the GTM or investors I engage with on the platform?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  Yes, you can easily track and manage your interactions with GTM partners and investors directly through the platform's APP.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  Are there any membership fees for startups?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  Blink Connect offers different membership tiers, with some features available for free and premium options for enhanced visibility and connections.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  What kind of GTM partner can I connect with on Blink Connect?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  You'll connect with experienced GTM experts across industries, helping you with market strategy, customer acquisition, and business scaling.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  How do I sign up as a startup?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  Simply fill out the signup form, create your profile, and start connecting with investors and GTM partners that match your goals.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  How does Blink Connect help startups?
                </span>
                <span className="pm" aria-hidden="true">
                  <svg className="i bold" width="18" height="18">
                    <use href="#i-plus" />
                  </svg>
                </span>
              </summary>
              {" "}
              <div className="a">
                <p>
                  Blink Connect provides a comprehensive platform for showcasing your startup, networking with investors, and accessing GTM expertise to accelerate growth.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="apply" id="apply">
        <div className="apply-side on-dark">
          <span className="label">
            04 / Apply now
          </span>
          {" "}
          <h2>
            Grow your startup with BlinkConnect.
          </h2>
          {" "}
          <p>
            Tell us about your startup and where you need help. Here is how it works:
          </p>
          {" "}
          <ol className="next">
            <li>
              <span className="n">
                1
              </span>
              <span>
                <strong>
                  Fill out the signup form
                </strong>
                <span className="t">
                  Share your startup, funding stage and GTM challenges.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                2
              </span>
              <span>
                <strong>
                  Create your profile
                </strong>
                <span className="t">
                  Showcase your startup in the BlinkConnect app.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                3
              </span>
              <span>
                <strong>
                  Start connecting
                </strong>
                <span className="t">
                  Meet investors and GTM partners that match your goals.
                </span>
              </span>
            </li>
          </ol>
        </div>
        {" "}
        <div className="apply-form">
          <div id="form-wrap">
            <h2 className="ft">
              Apply now
            </h2>
            {" "}
            <p className="form-sub">
              Fields marked * are required.
            </p>
            {" "}
            {" "}
            <form id="join-form" className="form-grid" noValidate data-endpoint={FORMS.startups} data-mailto={SITE.emails.support}>
              <div className="field">
                <label htmlFor="startup_name">
                  Startup name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="startup_name" name="startup_name" type="text" autoComplete="organization" required aria-describedby="startup_name-err" />
                {" "}
                <span className="error" id="startup_name-err">
                  Please fill in this field.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="founder_name">
                  Founder's name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="founder_name" name="founder_name" type="text" autoComplete="name" required aria-describedby="founder_name-err" />
                {" "}
                <span className="error" id="founder_name-err">
                  Please fill in this field.
                </span>
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
                  <input className="input" id="email" name="email" type="email" autoComplete="email" placeholder="you@startup.com" required aria-describedby="email-err" inputMode="email" />
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
                  <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
                </div>
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="description">
                  Business description
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <textarea className="input" id="description" name="description" rows="4" placeholder="What does your startup do, and who is it for?" required aria-describedby="description-err" />
                {" "}
                <span className="error" id="description-err">
                  Please fill in this field.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="funding_stage">
                  Funding stage
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="funding_stage" name="funding_stage" type="text" placeholder="e.g. Seed, Series A" />
              </div>
              {" "}
              <div className="field">
                <label htmlFor="investment_needs">
                  Investment needs
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="investment_needs" name="investment_needs" type="text" placeholder="e.g. $500K seed round" />
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="website">
                  Website URL
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <div className="control">
                  <svg className="i" width="18" height="18" aria-hidden="true">
                    <use href="#i-globe" />
                  </svg>
                  {" "}
                  <input className="input" id="website" name="website" type="url" autoComplete="url" placeholder="https://" inputMode="url" />
                </div>
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="gtm_challenges">
                  GTM challenges
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <textarea className="input" id="gtm_challenges" name="gtm_challenges" rows="4" placeholder="What is holding back your go-to-market today?" />
              </div>
              {" "}
              <div className="hp" aria-hidden="true">
                <label htmlFor="hp_field">
                  Leave this field empty
                </label>
                {" "}
                <input id="hp_field" name="hp_field" type="text" tabIndex="-1" autoComplete="off" />
              </div>
              {" "}
              <div className="form-status" id="form-status" role="alert" />
              {" "}
              <div className="form-actions">
                <p>
                  By submitting this form, you agree that we may use your details to review your application and contact you, as described in our{" "}
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
                    Submit application
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
              Thanks for applying.
            </h2>
            {" "}
            <p id="success-text">
              Our team will be in touch at the email address you provided. In the meantime, download the app to create your startup profile.
            </p>
            {" "}
            <a href="#download" className="btn btn-brand">
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-download" />
              </svg>
              Download the app
            </a>
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
              Get started
            </span>
            {" "}
            <h2>
              Start growing with Blink Connect today.
            </h2>
            {" "}
            <p>
              Join a growing network of startups scaling with the support of expert GTM partners and investors. Blink Connect is the platform that helps you grow faster.
            </p>
            {" "}
            <div className="cta-row">
              <a href="#apply" className="btn btn-dark">
                Sign up today
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
            {" "}
            <div className="stores">
              <a href={SITE.appStoreUrl} className="store" aria-label="Download on the App Store">
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
              <a href={SITE.googlePlayUrl} className="store" aria-label="Get it on Google Play">
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
