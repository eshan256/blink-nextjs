import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "GTM Partners | Grow Your Business with BlinkConnect"
  },
  "description": "Join BlinkConnect as a GTM partner and connect with high-potential startups and investors to drive growth, scale faster and expand your client base.",
  "alternates": {
    "canonical": "/blink-connect-gtm-partners-opportunities/"
  },
  "openGraph": {
    "title": "GTM Partners | Grow Your Business with BlinkConnect",
    "description": "Join BlinkConnect as a GTM partner and connect with high-potential startups and investors to drive growth, scale faster and expand your client base.",
    "url": "/blink-connect-gtm-partners-opportunities/"
  }
};

export default function GtmPage() {
  return (
    <div className="pg-gtm">
    <main id="top">
      <JsonLd data={breadcrumbs('/blink-connect-gtm-partners-opportunities/')} />
      <section className="g-hero on-dark">
        <div className="g-hero-grid">
          <div className="g-hero-copy">
            <span className="label">
              For GTM partners
            </span>
            {" "}
            <h1>
              Unlock new business opportunities with{" "}
              <em>
                Blink Connect.
              </em>
            </h1>
            {" "}
            <p className="lead">
              Join the platform where GTM partners connect with startups and investors to drive growth, scale faster, and expand your client base.
            </p>
            {" "}
            <div className="g-cta">
              <a href="#apply" className="btn btn-brand">
                Join now to grow your business
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
                  <use href="#i-rocket" />
                </svg>
                Startups
              </span>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-pie" />
                </svg>
                Investors
              </span>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-building" />
                </svg>
                Businesses
              </span>
            </div>
          </div>
          {" "}
          <div className="g-hero-media">
            <img src="/images/gtm-partner.jpg" width="1200" height="1200" alt="Become a GTM Partner on BlinkConnect and connect with investors, founders and other businesses" />
            {" "}
            <div className="match-card">
              <span className="ic">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  New startup match
                </strong>
                <small>
                  Seeking GTM expertise in fintech
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="challenge">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                01 / The challenge
              </span>
              {" "}
              <h2 className="display">
                Finding the right startups and investors is always a challenge.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              As a Go-To-Market partner, you're constantly searching for the next big opportunity, but connecting with the right startups and investors can be time-consuming and inefficient. Without a centralized platform, valuable business opportunities are missed, and growth is slowed by fragmented networking.
            </p>
          </div>
          {" "}
          <div className="ch-grid reveal">
            <figure className="ch-photo" style={{ "margin": "0" }}>
              <img src="/images/gtm-challenge.jpg" width="844" height="412" loading="lazy" alt="A diverse group of smiling professionals giving a thumbs up" />
              {" "}
              <figcaption>
                <i />
                Startups and investors, in one place
              </figcaption>
            </figure>
            {" "}
            <div className="pains">
              <div className="pain">
                <span className="ic">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                </span>
                <b>
                  Time-consuming searches
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
                    <use href="#i-search" />
                  </svg>
                </span>
                <b>
                  Missed opportunities
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
                    <use href="#i-puzzle" />
                  </svg>
                </span>
                <b>
                  Fragmented networking
                </b>
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </div>
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
                BlinkConnect: your gateway to business growth.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Blink Connect offers a streamlined platform where Go-To-Market (GTM) partners can effortlessly connect with high-potential startups and investors. We bridge the gap between opportunity and action, allowing you to discover new clients, forge strong partnerships, and accelerate your business growth.
            </p>
          </div>
          {" "}
          <div className="bridge reveal" aria-label="BlinkConnect bridges the gap between opportunity and action">
            <div className="side">
              <h3>
                Opportunity
              </h3>
              {" "}
              <ul>
                <li>
                  <span className="ic bg-accent">
                    <svg className="i" width="20" height="20" aria-hidden="true">
                      <use href="#i-rocket" />
                    </svg>
                  </span>
                  High-potential startups
                </li>
                <li>
                  <span className="ic bg-brand">
                    <svg className="i" width="20" height="20" aria-hidden="true">
                      <use href="#i-pie" />
                    </svg>
                  </span>
                  Investors
                </li>
              </ul>
            </div>
            {" "}
            <div className="hub" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path className="ln" d="M0 30 C 25 30, 30 50, 50 50" vectorEffect="non-scaling-stroke" />
                <path className="ln" d="M0 70 C 25 70, 30 50, 50 50" vectorEffect="non-scaling-stroke" />
                <path className="ln" d="M50 50 C 70 50, 75 20, 100 20" vectorEffect="non-scaling-stroke" />
                <path className="ln" d="M50 50 C 70 50, 80 50, 100 50" vectorEffect="non-scaling-stroke" />
                <path className="ln" d="M50 50 C 70 50, 75 80, 100 80" vectorEffect="non-scaling-stroke" />
                <path className="fl" pathLength="100" d="M0 30 C 25 30, 30 50, 50 50" vectorEffect="non-scaling-stroke" />
                <path className="fl p" pathLength="100" d="M0 70 C 25 70, 30 50, 50 50" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-1.5s" }} />
                <path className="fl" pathLength="100" d="M50 50 C 70 50, 75 20, 100 20" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-.6s" }} />
                <path className="fl p" pathLength="100" d="M50 50 C 70 50, 80 50, 100 50" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-2.2s" }} />
                <path className="fl" pathLength="100" d="M50 50 C 70 50, 75 80, 100 80" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-1.1s" }} />
              </svg>
              <div className="hub-core">
                <small>
                  Your gateway
                </small>
                <b>
                  Blink
                  <br />
                  Connect
                </b>
              </div>
            </div>
            {" "}
            <div className="side r">
              <h3>
                Action
              </h3>
              {" "}
              <ul>
                <li>
                  <span className="ic bg-soft">
                    <svg className="i" width="20" height="20" aria-hidden="true">
                      <use href="#i-search" />
                    </svg>
                  </span>
                  Discover new clients
                </li>
                <li>
                  <span className="ic bg-soft">
                    <svg className="i" width="20" height="20" aria-hidden="true">
                      <use href="#i-link" />
                    </svg>
                  </span>
                  Forge strong partnerships
                </li>
                <li>
                  <span className="ic bg-soft">
                    <svg className="i" width="20" height="20" aria-hidden="true">
                      <use href="#i-trend" />
                    </svg>
                  </span>
                  Accelerate your business growth
                </li>
              </ul>
            </div>
          </div>
        </div>
        {" "}
        <figure className="strip">
          <img src="/images/community-group.jpg" width="2000" height="335" loading="lazy" alt="A group of smiling young professionals taking a selfie together outdoors" />
        </figure>
        {" "}
        <div className="wrap">
          <div className="pillars">
            <div className="pillar reveal">
              <span className="num">
                01
              </span>
              <h3>
                Curated network
              </h3>
              <p>
                Access to a targeted pool of startups and investors actively seeking GTM expertise.
              </p>
            </div>
            {" "}
            <div className="pillar reveal">
              <span className="num">
                02
              </span>
              <h3>
                Direct engagement
              </h3>
              <p>
                Easily connect, collaborate, and pitch your services to relevant businesses.
              </p>
            </div>
            {" "}
            <div className="pillar reveal">
              <span className="num">
                03
              </span>
              <h3>
                Business expansion
              </h3>
              <p>
                Grow your client base by becoming the go-to solution for scaling startups and investors alike.
              </p>
            </div>
          </div>
          {" "}
          <div className="sol-cta">
            <p>
              Ready to grow your client base?
            </p>
            {" "}
            <a href="#apply" className="btn btn-brand">
              Join now to grow your business
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
              Questions from GTM partners.
            </h2>
            {" "}
            <p className="lead-l">
              Everything you need to know before you apply.
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
                  How does Blink Connect ensure I get matched with the right startups?
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
                  We use a curated matching system based on your expertise, industry focus, and geographic reach to connect you with startups that align with your services and goals.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  Is there a fee to join as a GTM partner?
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
                  Yes, Blink Connect operates on a membership model. GTM partners pay a fee to access the platform, but this ensures you're connected with serious, high-growth startups.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  What types of startups will I have access to?
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
                  You'll be able to connect with startups from various industries, including technology, healthcare, fintech, and more. We curate our network to match your expertise with startups that need your specific services.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  How can I join Blink Connect as a GTM partner?
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
                  Simply fill out the form on this page, and our team will review your information. If you're a good fit, we'll reach out with the next steps to onboard you as a partner.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="q">
                  What is Blink Connect, and how does it benefit GTM partners?
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
                  Blink Connect is a platform that connects startups with investors and Go-To-Market (GTM) partners. As a GTM partner, you'll have access to a network of high-potential startups looking for expertise in entering and scaling within their target markets.
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
            Become a BlinkConnect GTM partner.
          </h2>
          {" "}
          <p>
            Tell us about your business and the services you offer. Here is what happens next:
          </p>
          {" "}
          <ol className="next">
            <li>
              <span className="n">
                1
              </span>
              <span>
                <strong>
                  Fill out the form
                </strong>
                <span className="t">
                  Share your company, industry and go-to-market experience.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                2
              </span>
              <span>
                <strong>
                  Our team reviews it
                </strong>
                <span className="t">
                  We look at how your expertise fits the startups on the platform.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                3
              </span>
              <span>
                <strong>
                  Get onboarded
                </strong>
                <span className="t">
                  If you are a good fit, we reach out with the next steps.
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
            <form id="join-form" className="form-grid" noValidate data-endpoint={FORMS.gtmPartners} data-mailto={SITE.emails.support}>
              <div className="field">
                <label htmlFor="name">
                  Your name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="name" name="name" type="text" autoComplete="name" required aria-describedby="name-err" />
                {" "}
                <span className="error" id="name-err">
                  Please fill in this field.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="company">
                  Company / organization name
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="company" name="company" type="text" autoComplete="organization" required aria-describedby="company-err" />
                {" "}
                <span className="error" id="company-err">
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
                  <input className="input" id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-describedby="email-err" inputMode="email" />
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
              <div className="field">
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
              <div className="field">
                <label htmlFor="industry">
                  Industry
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <div className="control">
                  <select defaultValue="" className="input" id="industry" name="industry" required aria-describedby="industry-err">
                    <option value="" disabled>
                      Choose an industry
                    </option>
                    <option>
                      Technology (SaaS, AI, Blockchain)
                    </option>
                    <option>
                      Healthcare &amp; Biotech
                    </option>
                    <option>
                      FinTech &amp; Financial Services
                    </option>
                    <option>
                      E-commerce &amp; Retail
                    </option>
                    <option>
                      GreenTech &amp; Sustainability
                    </option>
                    <option>
                      EdTech &amp; Learning Solutions
                    </option>
                    <option>
                      Consumer Products &amp; Goods
                    </option>
                    <option>
                      Media &amp; Entertainment
                    </option>
                    <option>
                      Real Estate &amp; PropTech
                    </option>
                    <option>
                      Transportation &amp; Mobility
                    </option>
                    <option>
                      Food &amp; Beverage
                    </option>
                    <option>
                      Agriculture &amp; AgTech
                    </option>
                    <option>
                      Energy &amp; CleanTech
                    </option>
                    <option>
                      Cybersecurity
                    </option>
                    <option>
                      Telecommunications &amp; 5G
                    </option>
                    <option>
                      Manufacturing &amp; Industry 4.0
                    </option>
                    <option>
                      Travel &amp; Hospitality
                    </option>
                    <option>
                      Gaming &amp; Esports
                    </option>
                    <option>
                      Digital Marketing &amp; Advertising Tech
                    </option>
                    <option>
                      Supply Chain &amp; Logistics
                    </option>
                    <option>
                      LegalTech
                    </option>
                    <option>
                      GovTech &amp; CivicTech
                    </option>
                    <option>
                      Insurance &amp; InsurTech
                    </option>
                    <option>
                      Fashion &amp; Apparel
                    </option>
                    <option>
                      Automotive &amp; EV Technologies
                    </option>
                    <option>
                      Mental Health &amp; Wellness
                    </option>
                    <option>
                      PetTech &amp; Animal Care
                    </option>
                    <option>
                      SportsTech &amp; Fitness
                    </option>
                    <option>
                      HR &amp; Recruitment Technology
                    </option>
                    <option>
                      Social Impact &amp; Non-Profit Solutions
                    </option>
                    <option>
                      Others
                    </option>
                  </select>
                  {" "}
                  <svg className="i chev" width="18" height="18" aria-hidden="true">
                    <use href="#i-chev-down" />
                  </svg>
                </div>
                {" "}
                <span className="error" id="industry-err">
                  Please choose an industry.
                </span>
              </div>
              {" "}
              <div className="field full">
                <label htmlFor="services">
                  Services offered
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="services" name="services" type="text" placeholder="e.g. demand generation, sales outsourcing, market entry" />
              </div>
              {" "}
              <div className="field">
                <label htmlFor="gtm_experience">
                  Experience in go-to-market strategy
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </label>
                {" "}
                <input className="input" id="gtm_experience" name="gtm_experience" type="text" placeholder="e.g. 8 years" required aria-describedby="gtm_experience-err" />
                {" "}
                <span className="error" id="gtm_experience-err">
                  Please fill in this field.
                </span>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="geo_focus">
                  Geographic focus
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="geo_focus" name="geo_focus" type="text" placeholder="e.g. North America, Europe" />
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
              Our team will review your information. If you are a good fit, we will reach out with the next steps to onboard you as a partner.
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
              Join Blink Connect and start growing today.
            </h2>
            {" "}
            <p>
              Take your Go-To-Market strategies to the next level. Connect with high-potential startups and investors, expand your business, and accelerate growth, all on one platform. Don't miss out on the opportunity to be part of the Blink Connect network.
            </p>
            {" "}
            <div className="cta-row">
              <a href="#apply" className="btn btn-dark">
                Join now to grow your business
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
