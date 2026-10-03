import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "Privacy Policy | BlinkConnect"
  },
  "description": "How BlinkConnect collects, uses and protects your personal information.",
  "alternates": {
    "canonical": "/privacy-policy/"
  },
  "openGraph": {
    "title": "Privacy Policy | BlinkConnect",
    "description": "How BlinkConnect collects, uses and protects your personal information.",
    "url": "/privacy-policy/"
  }
};

export default function PrivacyPage() {
  return (
    <div className="pg-privacy">
    <main id="top">
      <JsonLd data={breadcrumbs('/privacy-policy/')} />
      <section className="l-hero">
        <div className="wrap l-grid">
          <div className="l-copy">
            <span className="label" style={{ "color": "var(--accent)" }}>
              Privacy Policy
            </span>
            {" "}
            <h1>
              Privacy{" "}
              <em>
                Policy
              </em>
            </h1>
          </div>
          {" "}
          <div className="l-meta">
            <div>
              <span>
                Effective date
              </span>
              <strong>
                June 03, 2024
              </strong>
            </div>
            {" "}
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
                <a href="#collection">
                  <i>
                    01
                  </i>
                  <span>
                    Collection of your Personal Information
                  </span>
                </a>
              </li>
              <li>
                <a href="#use">
                  <i>
                    02
                  </i>
                  <span>
                    Use of your Personal Information
                  </span>
                </a>
              </li>
              <li>
                <a href="#sharing">
                  <i>
                    03
                  </i>
                  <span>
                    Sharing Information with Third Parties
                  </span>
                </a>
              </li>
              <li>
                <a href="#security">
                  <i>
                    04
                  </i>
                  <span>
                    Security of your Personal Information
                  </span>
                </a>
              </li>
              <li>
                <a href="#deletion">
                  <i>
                    05
                  </i>
                  <span>
                    Right to Deletion
                  </span>
                </a>
              </li>
              <li>
                <a href="#children">
                  <i>
                    06
                  </i>
                  <span>
                    Children Under Thirteen
                  </span>
                </a>
              </li>
              <li>
                <a href="#third-party-accounts">
                  <i>
                    07
                  </i>
                  <span>
                    Disconnecting your blinkconnect Account from Third Party Websites
                  </span>
                </a>
              </li>
              <li>
                <a href="#email">
                  <i>
                    08
                  </i>
                  <span>
                    E-mail Communications
                  </span>
                </a>
              </li>
              <li>
                <a href="#storage">
                  <i>
                    09
                  </i>
                  <span>
                    External Data Storage Sites
                  </span>
                </a>
              </li>
              <li>
                <a href="#changes">
                  <i>
                    10
                  </i>
                  <span>
                    Changes to this Statement
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i>
                    11
                  </i>
                  <span>
                    Contact Information
                  </span>
                </a>
              </li>
            </ol>
          </details>
          {" "}
          <div>
            <article className="prose">
              <div className="lead-in">
                <p>
                  Protecting your private information is our priority. This Statement of Privacy applies to blinkconnect and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to blinkconnect include P.O. Box 532, .blinkconnect.app and .blinkconnect.app. The blinkconnect application is a dating &amp; matchmaking service application. By using the blinkconnect application, you consent to the data practices described in this statement.
                </p>
              </div>
              {" "}
              <section id="collection">
                <h2>
                  Collection of your Personal Information
                </h2>
                {" "}
                <p>
                  In order to better provide you with products and services offered, blinkconnect may collect personally identifiable information, such as your:
                </p>
                {" "}
                <ul>
                  <li>
                    First And Last Name
                  </li>
                  <li>
                    E-mail Address
                  </li>
                  <li>
                    Phone Number
                  </li>
                  <li>
                    City &amp; state
                  </li>
                </ul>
                {" "}
                <p>
                  If you purchase blinkconnect's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction. blinkconnect may also collect anonymous demographic information, which is not unique to you, such as your:
                </p>
                {" "}
                <ul>
                  <li>
                    Age
                  </li>
                  <li>
                    Gender
                  </li>
                </ul>
                {" "}
                <p>
                  We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
                </p>
              </section>
              {" "}
              <section id="use">
                <h2>
                  Use of your Personal Information
                </h2>
                {" "}
                <p>
                  Wehookup inc collects and uses your personal information to operate and deliver the services you have requested. blinkconnect may also use your personally identifiable information to inform you of other products or services available from blinkconnect and its affiliates.
                </p>
              </section>
              {" "}
              <section id="sharing">
                <h2>
                  Sharing Information with Third Parties
                </h2>
                {" "}
                <p>
                  Wehookup inc does not sell, rent or lease its customer lists to third parties. blinkconnect may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. blinkconnect may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to blinkconnect, and they are required to maintain the confidentiality of your information. blinkconnect may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on blinkconnect or the site; (b) protect and defend the rights or property of blinkconnect; and/or (c) act under exigent circumstances to protect the personal safety of users of blinkconnect, or the public.
                </p>
              </section>
              {" "}
              <section id="security">
                <h2>
                  Security of your Personal Information
                </h2>
                {" "}
                <p>
                  Wehookup inc secures your personal information from unauthorized access, use, or disclosure. blinkconnect uses the following methods for this purpose:
                </p>
                {" "}
                <h3>
                  Geo trust
                </h3>
                {" "}
                <p>
                  We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
                </p>
              </section>
              {" "}
              <section id="deletion">
                <h2>
                  Right to Deletion
                </h2>
                {" "}
                <p>
                  Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
                </p>
                {" "}
                <ul>
                  <li>
                    Delete your personal information from our records; and
                  </li>
                  <li>
                    Direct any service providers to delete your personal information from their records.
                  </li>
                </ul>
                {" "}
                <p>
                  Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
                </p>
                {" "}
                <ul>
                  <li>
                    Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;
                  </li>
                  <li>
                    Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;
                  </li>
                  <li>
                    Debug to identify and repair errors that impair existing intended functionality;
                  </li>
                  <li>
                    Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;
                  </li>
                  <li>
                    Comply with the California Electronic Communications Privacy Act;
                  </li>
                  <li>
                    Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;
                  </li>
                  <li>
                    Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;
                  </li>
                  <li>
                    Comply with an existing legal obligation; or
                  </li>
                  <li>
                    Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.
                  </li>
                </ul>
              </section>
              {" "}
              <section id="children">
                <h2>
                  Children Under Thirteen
                </h2>
                {" "}
                <p>
                  Wehookup inc does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this application.
                </p>
              </section>
              {" "}
              <section id="third-party-accounts">
                <h2>
                  Disconnecting your blinkconnect Account from Third Party Websites
                </h2>
                {" "}
                <p>
                  You will be able to connect your blinkconnect account to third party accounts. BY CONNECTING YOUR WEHOOKUP INC ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third party account at any time.
                </p>
              </section>
              {" "}
              <section id="email">
                <h2>
                  E-mail Communications
                </h2>
                {" "}
                <p>
                  From time to time, blinkconnect may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from blinkconnect or click on a link therein. If you would like to stop receiving marketing or promotional communications via email from blinkconnect, you may opt out of such communications by clicking on the UNSUBSCRIBE button.
                </p>
              </section>
              {" "}
              <section id="storage">
                <h2>
                  External Data Storage Sites
                </h2>
                {" "}
                <p>
                  We may store your data on servers provided by third party hosting vendors with whom we have contracted.
                </p>
              </section>
              {" "}
              <section id="changes">
                <h2>
                  Changes to this Statement
                </h2>
                {" "}
                <p>
                  Wehookup inc reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our application, and/or by updating any privacy information. Your continued use of the application and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
                </p>
              </section>
              {" "}
              <section id="contact">
                <h2>
                  Contact Information
                </h2>
                {" "}
                <p>
                  Wehookup inc welcomes your questions or comments regarding the Terms:
                </p>
                {" "}
                <div className="contact-card">
                  <strong>
                    Wehookup Inc
                  </strong>
                  {" "}
                  <span>
                    Middlesex, New Jersey 08846
                  </span>
                  {" "}
                  <span>
                    Contact:{" "}
                    <Link href="/contact/">contact page</Link>
                  </span>
                  {" "}
                  <span>
                    Telephone number:{" "}
                    <a href="tel:+17326406068">
                      7326406068
                    </a>
                  </span>
                </div>
                {" "}
                <p className="effective">
                  Effective as of June 03, 2024
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
