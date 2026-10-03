import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs, faqPage } from '@/lib/schema';
import { FAQ_SCHEMA_ITEMS } from './faq-items';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "BlinkConnect FAQs | Frequently Asked Questions"
  },
  "description": "Answers to common questions about BlinkConnect: getting started, safety and support, and using BlinkConnect as a startup or GTM partner.",
  "alternates": {
    "canonical": "/faqs/"
  },
  "openGraph": {
    "title": "BlinkConnect FAQs | Frequently Asked Questions",
    "description": "Answers to common questions about BlinkConnect: getting started, safety and support, and using BlinkConnect as a startup or GTM partner.",
    "url": "/faqs/"
  }
};

export default function FaqsPage() {
  return (
    <div className="pg-faqs">
    <main id="top">
      <JsonLd data={[breadcrumbs('/faqs/'), faqPage(FAQ_SCHEMA_ITEMS)]} />
      <section className="q-hero">
        <div className="wrap q-grid">
          <div className="q-l">
            <span className="label" style={{ "color": "var(--accent)" }}>
              FAQs
            </span>
            {" "}
            <h1>
              Frequently asked{" "}
              <em>
                questions.
              </em>
            </h1>
          </div>
          {" "}
          <div className="q-r">
            <p>
              Everything you need to know about getting started, staying safe, and using BlinkConnect as a startup or GTM partner.
            </p>
            {" "}
            <div className="search" role="search">
              <label htmlFor="faq-search" style={{ "position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)" }}>
                Search the FAQs
              </label>
              {" "}
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-search2" />
              </svg>
              {" "}
              <input id="faq-search" type="search" placeholder="Search the FAQs" autoComplete="off" aria-controls="faq-groups" />
            </div>
            {" "}
            <div className="q-stats">
              <span>
                <b>
                  19
                </b>
                {" "}questions
              </span>
              <span>
                <b>
                  4
                </b>
                {" "}topics
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <div className="wrap q-body">
        <aside className="side">
          <div className="tabs" role="group" aria-label="Filter by topic">
            <button className="tab active" type="button" data-filter="all" aria-pressed="true">
              All questions{" "}
              <span>
                19
              </span>
            </button>
            <button className="tab" type="button" data-filter="getting-started" aria-pressed="false">
              Getting started{" "}
              <span>
                6
              </span>
            </button>
            <button className="tab" type="button" data-filter="safety-support" aria-pressed="false">
              Safety and support{" "}
              <span>
                2
              </span>
            </button>
            <button className="tab" type="button" data-filter="startups" aria-pressed="false">
              For startups{" "}
              <span>
                6
              </span>
            </button>
            <button className="tab" type="button" data-filter="gtm-partners" aria-pressed="false">
              For GTM partners{" "}
              <span>
                5
              </span>
            </button>
          </div>
          {" "}
          <div className="side-help">
            <b>
              Can't find it?
            </b>
            <p>
              Our support team is happy to help with anything not covered here.
            </p>
            <Link href="/support/">
              Contact support
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </aside>
        {" "}
        <div>
          <div className="faq-groups" id="faq-groups">
            <section className="faq-group" id="getting-started" data-group="getting-started">
              <div className="group-head">
                <span className="gic bg-accent">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-rocket" />
                  </svg>
                </span>
                {" "}
                <h2>
                  Getting started
                </h2>
                {" "}
                <span className="group-count">
                  6 questions
                </span>
              </div>
              {" "}
              <div className="faq-list">
                <details className="faq" id="how-do-i-download-the-blink-connect-app" open>
                  <summary>
                    <span className="q">
                      How do I download the Blink Connect app?
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
                      You can download the Blink Connect app from the App Store or Google Play Store. Search for "Blink Connect" in your app store, click "Install," and follow the on-screen instructions to get started.
                    </p>
                    <a className="permalink" href="#how-do-i-download-the-blink-connect-app">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="can-i-access-blink-connect-from-a-computer">
                  <summary>
                    <span className="q">
                      Can I access Blink Connect from a computer?
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
                      Currently, Blink Connect is available exclusively as a mobile app for iOS and Android devices. This ensures a seamless and optimized experience tailored to mobile use.
                    </p>
                    <a className="permalink" href="#can-i-access-blink-connect-from-a-computer">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="how-do-i-customize-my-profile-in-the-blink-connect-app">
                  <summary>
                    <span className="q">
                      How do I customize my profile in the Blink Connect app?
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
                      To customize your profile, tap on your profile icon in the app, select 'Edit Profile,' and you can then add or change your professional details, profile photo, and preferences. Make sure to save the changes to update your profile.
                    </p>
                    <a className="permalink" href="#how-do-i-customize-my-profile-in-the-blink-connect-app">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="can-i-use-blink-connect-for-free">
                  <summary>
                    <span className="q">
                      Can I use Blink Connect for free?
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
                      Yes, Blink Connect offers a free tier with access to most features. We also offer premium subscriptions that provide additional features like enhanced networking options and exclusive content.
                    </p>
                    <a className="permalink" href="#can-i-use-blink-connect-for-free">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="is-there-a-limit-to-the-number-of-connections-i-can-have">
                  <summary>
                    <span className="q">
                      Is there a limit to the number of connections I can have?
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
                      No, there is no limit. You can connect with as many professionals as you like to maximize your networking opportunities.
                    </p>
                    <a className="permalink" href="#is-there-a-limit-to-the-number-of-connections-i-can-have">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="what-is-the-best-way-to-network-on-blink-connect">
                  <summary>
                    <span className="q">
                      What is the best way to network on Blink Connect?
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
                      The best way to network is to actively engage with other users through comments, join groups relevant to your interests, and participate in events. Regularly updating your profile and contributions helps keep your connections informed and engaged.
                    </p>
                    <a className="permalink" href="#what-is-the-best-way-to-network-on-blink-connect">
                      Link to this answer
                    </a>
                  </div>
                </details>
              </div>
            </section>
            {" "}
            <section className="faq-group" id="safety-support" data-group="safety-support">
              <div className="group-head">
                <span className="gic bg-ink">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                </span>
                {" "}
                <h2>
                  Safety and support
                </h2>
                {" "}
                <span className="group-count">
                  2 questions
                </span>
              </div>
              {" "}
              <div className="faq-list">
                <details className="faq" id="can-i-block-or-report-someone-on-the-app">
                  <summary>
                    <span className="q">
                      Can I block or report someone on the app?
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
                      Yes, your safety is our priority. To block or report a user, go to their profile, tap the three dots in the corner, and select 'Block' or 'Report'. Please provide a reason for reporting to help us take appropriate action.
                    </p>
                    <a className="permalink" href="#can-i-block-or-report-someone-on-the-app">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="what-should-i-do-if-i-experience-technical-issues-with-the-app">
                  <summary>
                    <span className="q">
                      What should I do if I experience technical issues with the app?
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
                      If you encounter any technical difficulties, please visit the 'Support' section in the app. You can report the issue directly through the app by tapping on 'Report a Problem,' and our technical support team will assist you as soon as possible.
                    </p>
                    <a className="permalink" href="#what-should-i-do-if-i-experience-technical-issues-with-the-app">
                      Link to this answer
                    </a>
                  </div>
                </details>
              </div>
            </section>
            {" "}
            <section className="faq-group" id="startups" data-group="startups">
              <div className="group-head">
                <span className="gic bg-accent">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-trend" />
                  </svg>
                </span>
                {" "}
                <h2>
                  For startups
                </h2>
                {" "}
                <span className="group-count">
                  6 questions
                </span>
              </div>
              {" "}
              <div className="faq-list">
                <details className="faq" id="how-does-blink-connect-help-startups">
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
                    <a className="permalink" href="#how-does-blink-connect-help-startups">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="how-do-i-sign-up-as-a-startup">
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
                    <a className="permalink" href="#how-do-i-sign-up-as-a-startup">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="how-can-blink-connect-help-me-grow-my-business">
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
                    <a className="permalink" href="#how-can-blink-connect-help-me-grow-my-business">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="what-kind-of-gtm-partner-can-i-connect-with-on-blink-connect">
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
                    <a className="permalink" href="#what-kind-of-gtm-partner-can-i-connect-with-on-blink-connect">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="can-i-track-the-gtm-or-investors-i-engage-with-on-the-platform">
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
                    <a className="permalink" href="#can-i-track-the-gtm-or-investors-i-engage-with-on-the-platform">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="are-there-any-membership-fees-for-startups">
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
                    <a className="permalink" href="#are-there-any-membership-fees-for-startups">
                      Link to this answer
                    </a>
                  </div>
                </details>
              </div>
            </section>
            {" "}
            <section className="faq-group" id="gtm-partners" data-group="gtm-partners">
              <div className="group-head">
                <span className="gic bg-brand">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-link" />
                  </svg>
                </span>
                {" "}
                <h2>
                  For GTM partners
                </h2>
                {" "}
                <span className="group-count">
                  5 questions
                </span>
              </div>
              {" "}
              <div className="faq-list">
                <details className="faq" id="what-is-blink-connect-and-how-does-it-benefit-gtm-partners">
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
                    <a className="permalink" href="#what-is-blink-connect-and-how-does-it-benefit-gtm-partners">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="how-can-i-join-blink-connect-as-a-gtm-partner">
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
                    <a className="permalink" href="#how-can-i-join-blink-connect-as-a-gtm-partner">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="what-types-of-startups-will-i-have-access-to">
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
                    <a className="permalink" href="#what-types-of-startups-will-i-have-access-to">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="is-there-a-fee-to-join-as-a-gtm-partner">
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
                    <a className="permalink" href="#is-there-a-fee-to-join-as-a-gtm-partner">
                      Link to this answer
                    </a>
                  </div>
                </details>
                {" "}
                <details className="faq" id="how-does-blink-connect-ensure-i-get-matched-with-the-right-startups">
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
                    <a className="permalink" href="#how-does-blink-connect-ensure-i-get-matched-with-the-right-startups">
                      Link to this answer
                    </a>
                  </div>
                </details>
              </div>
            </section>
          </div>
          {" "}
          <p className="no-results" id="no-results" role="status">
            <strong>
              No matching questions.
            </strong>
            {" "}Try a different word, or{" "}
            <Link href="/support/">
              ask our support team
            </Link>
            .
          </p>
          {" "}
          <div className="stuck reveal">
            <div className="stuck-l">
              <span className="gic bg-accent">
                <svg className="i" width="28" height="28" aria-hidden="true">
                  <use href="#i-life" />
                </svg>
              </span>
              <div>
                <h2>
                  Still have questions?
                </h2>
                <p>
                  Our support team is happy to help with anything not covered here.
                </p>
              </div>
            </div>
            {" "}
            <Link href="/support/" className="btn btn-brand">
              Contact support
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
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
              Ready to get started?
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
