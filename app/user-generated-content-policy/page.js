import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "User Generated Content Policy | BlinkConnect"
  },
  "description": "Blink Connect's User Generated Content Policy: acceptable and prohibited content, ownership, moderation, reporting and appeals.",
  "alternates": {
    "canonical": "/user-generated-content-policy/"
  },
  "openGraph": {
    "title": "User Generated Content Policy | BlinkConnect",
    "description": "Blink Connect's User Generated Content Policy: acceptable and prohibited content, ownership, moderation, reporting and appeals.",
    "url": "/user-generated-content-policy/"
  }
};

export default function UgcPolicyPage() {
  return (
    <div className="pg-ugc">
    <main id="top">
      <JsonLd data={breadcrumbs('/user-generated-content-policy/')} />
      <section className="l-hero">
        <div className="wrap l-grid">
          <div className="l-copy">
            <span className="label" style={{ "color": "var(--accent)" }}>
              UGC Policy
            </span>
            {" "}
            <h1>
              User Generated Content{" "}
              <em>
                Policy
              </em>
            </h1>
          </div>
          {" "}
          <div className="l-meta">
            <Link href="/end-user-agreement-terms-of-use/">
              <b>
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-doc" />
                </svg>
                Read our Terms of Use
              </b>
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
            {" "}
            <button type="button" id="print-btn">
              <b>
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-print" />
                </svg>
                Print this page
              </b>
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {" "}
      <div className="wrap legal">
        <div className="legal-grid">
          <details className="toc" open>
            <summary>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-list" />
                </svg>
                On this page
              </span>
              <svg className="i chev" width="18" height="18" aria-hidden="true">
                <use href="#i-chev-down" />
              </svg>
            </summary>
            {" "}
            <ol>
              <li>
                <a href="#purpose">
                  <i>
                    01
                  </i>
                  <span>
                    Purpose
                  </span>
                </a>
              </li>
              <li>
                <a href="#acceptable-content">
                  <i>
                    02
                  </i>
                  <span>
                    Acceptable Content
                  </span>
                </a>
              </li>
              <li>
                <a href="#prohibited-content">
                  <i>
                    03
                  </i>
                  <span>
                    Prohibited Content
                  </span>
                </a>
              </li>
              <li>
                <a href="#content-ownership">
                  <i>
                    04
                  </i>
                  <span>
                    Content Ownership
                  </span>
                </a>
              </li>
              <li>
                <a href="#moderation">
                  <i>
                    05
                  </i>
                  <span>
                    Moderation and Enforcement
                  </span>
                </a>
              </li>
              <li>
                <a href="#reporting">
                  <i>
                    06
                  </i>
                  <span>
                    Reporting Mechanisms
                  </span>
                </a>
              </li>
              <li>
                <a href="#dispute-resolution">
                  <i>
                    07
                  </i>
                  <span>
                    Dispute Resolution
                  </span>
                </a>
              </li>
              <li>
                <a href="#amendments">
                  <i>
                    08
                  </i>
                  <span>
                    Amendments to the Policy
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i>
                    09
                  </i>
                  <span>
                    Contact Information
                  </span>
                </a>
              </li>
              <li>
                <a href="#acknowledgment">
                  <i>
                    10
                  </i>
                  <span>
                    Acknowledgment and Agreement
                  </span>
                </a>
              </li>
            </ol>
          </details>
          {" "}
          <div>
            <article className="prose">
              <section id="purpose">
                <h2>
                  1. Purpose
                </h2>
                {" "}
                <p>
                  Explain the importance of user-generated content and how it enhances the networking experience, while also emphasizing the need for responsible sharing.
                </p>
              </section>
              {" "}
              <section id="acceptable-content">
                <h2>
                  2. Acceptable Content
                </h2>
                {" "}
                <p>
                  Define what constitutes acceptable content on Blink Connect, including:
                </p>
                {" "}
                <ul>
                  <li>
                    Professional posts, articles, and updates.
                  </li>
                  <li>
                    Appropriate images and videos related to professional activities or networking.
                  </li>
                  <li>
                    Comments that constructively contribute to discussions.
                  </li>
                </ul>
              </section>
              {" "}
              <section id="prohibited-content">
                <h2>
                  3. Prohibited Content
                </h2>
                {" "}
                <p>
                  Clearly list the types of content that are not allowed, such as:
                </p>
                {" "}
                <ul>
                  <li>
                    Offensive or derogatory language.
                  </li>
                  <li>
                    Discriminatory, harassing, or threatening messages.
                  </li>
                  <li>
                    Copyrighted material shared without permission.
                  </li>
                  <li>
                    Spam, malicious links, or advertisements unrelated to professional development.
                  </li>
                </ul>
              </section>
              {" "}
              <section id="content-ownership">
                <h2>
                  4. Content Ownership
                </h2>
                {" "}
                <p>
                  Clarify that while users retain ownership of their content, posting on Blink Connect grants the platform a license to use, distribute, and display the content as part of its services.
                </p>
              </section>
              {" "}
              <section id="moderation">
                <h2>
                  5. Moderation and Enforcement
                </h2>
                {" "}
                <p>
                  Describe how content will be moderated, including:
                </p>
                {" "}
                <ul>
                  <li>
                    The use of automated systems and human reviewers.
                  </li>
                  <li>
                    The process for reporting inappropriate content by users.
                  </li>
                  <li>
                    Actions that will be taken against violations, such as content removal or account suspension.
                  </li>
                </ul>
              </section>
              {" "}
              <section id="reporting">
                <h2>
                  6. Reporting Mechanisms
                </h2>
                {" "}
                <p>
                  Provide detailed instructions on how users can report inappropriate content or behavior, and assure them that all reports will be handled confidentially.
                </p>
              </section>
              {" "}
              <section id="dispute-resolution">
                <h2>
                  7. Dispute Resolution
                </h2>
                {" "}
                <p>
                  Outline the steps users can take if they disagree with a moderation decision, including how they can appeal.
                </p>
              </section>
              {" "}
              <section id="amendments">
                <h2>
                  8. Amendments to the Policy
                </h2>
                {" "}
                <p>
                  Inform users that the UGC policy may be updated and advise them to review the policy periodically.
                </p>
              </section>
              {" "}
              <section id="contact">
                <h2>
                  9. Contact Information
                </h2>
                {" "}
                <p>
                  Offer a way for users to contact Blink Connect for further clarification about the UGC policy or any related concerns.
                </p>
              </section>
              {" "}
              <section id="acknowledgment">
                <h2>
                  10. Acknowledgment and Agreement
                </h2>
                {" "}
                <p>
                  Require users to acknowledge and agree to the UGC policy as a condition of using the platform.
                </p>
              </section>
            </article>
            {" "}
            <a href="#top" className="back-top">
              Back to top
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow-up" />
              </svg>
            </a>
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
