import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "For Investors | Discover Curated Startups on BlinkConnect"
  },
  "description": "Discover your next big investment with BlinkConnect: curated startups, data-driven insights, expert guidance and direct connections to founders.",
  "alternates": {
    "canonical": "/blink-connect-investors-curated-startups-opportunities/"
  },
  "openGraph": {
    "title": "For Investors | Discover Curated Startups on BlinkConnect",
    "description": "Discover your next big investment with BlinkConnect: curated startups, data-driven insights, expert guidance and direct connections to founders.",
    "url": "/blink-connect-investors-curated-startups-opportunities/"
  }
};

export default function InvestorsPage() {
  return (
    <div className="pg-investors">
    <main id="top">
      <JsonLd data={breadcrumbs('/blink-connect-investors-curated-startups-opportunities/')} />
      <section className="g-hero on-dark">
        <div className="g-hero-grid inv">
          <div className="g-hero-copy">
            <span className="label">
              For investors
            </span>
            {" "}
            <h1>
              Discover your next big investment opportunity with{" "}
              <em>
                BlinkConnect.
              </em>
            </h1>
            {" "}
            <p className="lead">
              Your gateway to curated startups, backed by data-driven insights and expert guidance.
            </p>
            {" "}
            <div className="g-cta">
              <a href="#apply" className="btn btn-brand">
                Sign up and connect with top startups
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
          </div>
          {" "}
          <div className="deal-wrap" aria-hidden="true">
            <div className="deal">
              <div className="deal-h">
                <span>
                  <strong>
                    Curated for you
                  </strong>
                  <small>
                    Matches your preferences
                  </small>
                </span>
                <span className="spark">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-sparkle" />
                  </svg>
                </span>
              </div>
              {" "}
              <div className="co top">
                <span className="lg bg-accent">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-leaf" />
                  </svg>
                </span>
                <span>
                  <strong>
                    Climate tech startup
                  </strong>
                  <span className="tg">
                    <span>
                      GreenTech
                    </span>
                    <span>
                      B2B
                    </span>
                  </span>
                </span>
                <span className="stage">
                  Seed
                </span>
              </div>
              {" "}
              <div className="co">
                <span className="lg bg-brand">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-heartpulse" />
                  </svg>
                </span>
                <span>
                  <strong>
                    Healthcare AI startup
                  </strong>
                  <span className="tg">
                    <span>
                      HealthTech
                    </span>
                    <span>
                      AI
                    </span>
                  </span>
                </span>
                <span className="stage">
                  Series A
                </span>
              </div>
              {" "}
              <div className="co">
                <span className="lg bg-ink">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-card" />
                  </svg>
                </span>
                <span>
                  <strong>
                    Fintech startup
                  </strong>
                  <span className="tg">
                    <span>
                      FinTech
                    </span>
                    <span>
                      Payments
                    </span>
                  </span>
                </span>
                <span className="stage">
                  Pre-seed
                </span>
              </div>
              {" "}
              <div className="proj">
                <small>
                  Growth projection
                </small>
                {" "}
                <svg viewBox="0 0 200 64" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#F7891F" stopOpacity=".45" />
                      <stop offset="1" stopColor="#F7891F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 56 C 30 52, 50 46, 80 40 S 140 22, 200 6 V64 H0Z" fill="url(#pg)" />
                  <path d="M0 56 C 30 52, 50 46, 80 40 S 140 22, 200 6" fill="none" stroke="#F7891F" strokeWidth="2.5" />
                </svg>
                {" "}
                <strong>
                  View insights
                  <svg className="i" width="14" height="14" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="why" id="why">
        <figure className="why-media" style={{ "margin": "0" }}>
          <img src="/images/professionals.jpg" width="2000" height="1600" loading="lazy" alt="Smiling professionals standing together outside an office building" />
          {" "}
          <figcaption>
            <svg className="i" width="18" height="18" aria-hidden="true">
              <use href="#i-star" />
            </svg>
            Find the next unicorn
          </figcaption>
        </figure>
        {" "}
        <div className="why-copy reveal">
          <span className="label">
            01 / For investors
          </span>
          {" "}
          <h2 className="display">
            Why Blink Connect?
          </h2>
          {" "}
          <p>
            We simplify the investment process so you can focus on discovering the next unicorn.
          </p>
          {" "}
          <ul className="why-grid">
            <li>
              <span className="ic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-filter" />
                </svg>
              </span>
              <h3>
                Curated startups
              </h3>
              <p>
                Get access to a curated list of startups with vetted growth potential and market fit.
              </p>
            </li>
            <li>
              <span className="ic bg-ink">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-chart" />
                </svg>
              </span>
              <h3>
                Detailed analytics
              </h3>
              <p>
                Make informed decisions with access to detailed startup profiles, market data, and financial insights.
              </p>
            </li>
            <li>
              <span className="ic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
              </span>
              <h3>
                Exclusive opportunities
              </h3>
              <p>
                Connect with early-stage startups and unique investment opportunities before the competition.
              </p>
            </li>
            <li>
              <span className="ic bg-soft">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-link" />
                </svg>
              </span>
              <h3>
                GTM partner access
              </h3>
              <p>
                Collaborate with Go-To-Market (GTM) experts to guide your portfolio companies toward success.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {" "}
      {" "}
      <section className="challenge">
        <div className="wrap ch2">
          <div className="ch2-copy reveal">
            <span className="label">
              02 / The challenge
            </span>
            {" "}
            <h2 className="display">
              The challenge investors face.
            </h2>
            {" "}
            <p className="lead-l">
              With countless startups emerging daily, finding the right investment opportunities is overwhelming. Sifting through unqualified pitches and dealing with incomplete information leads to missed opportunities. Investors need a way to access reliable, high-potential startups, backed by real data and strategic insights.
            </p>
            {" "}
            <ul className="pains2">
              <li>
                Unqualified pitches
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </li>
              <li>
                Incomplete information
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </li>
              <li>
                Missed opportunities
                <span className="x">
                  <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                    <use href="#i-x" />
                  </svg>
                </span>
              </li>
            </ul>
            {" "}
            <a href="#apply" className="btn btn-brand">
              Sign up and connect with top startups
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
          {" "}
          <div className="funnel reveal" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 2 H98 L64 66 V96 H36 V66 Z" fill="#FFFFFF" stroke="#E7DFD9" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              <line x1="16" y1="34" x2="84" y2="34" stroke="#E7DFD9" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
              <line x1="34" y1="66" x2="66" y2="66" stroke="#E7DFD9" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
            </svg>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <circle cx="55.4" cy="15.8" r="1.3" fill="#CFC6CB" />
              <circle cx="81.8" cy="15.7" r="1.0" fill="#CFC6CB" />
              <circle cx="51.1" cy="8.8" r="1.6" fill="#CFC6CB" />
              <circle cx="22.1" cy="20.0" r="1.3" fill="#CFC6CB" />
              <circle cx="13.0" cy="11.9" r="1.6" fill="#CFC6CB" />
              <circle cx="58.5" cy="20.5" r="1.3" fill="#CFC6CB" />
              <circle cx="63.4" cy="29.1" r="1.6" fill="#CFC6CB" />
              <circle cx="60.9" cy="20.9" r="1.6" fill="#CFC6CB" />
              <circle cx="7.4" cy="5.6" r="1.0" fill="#CFC6CB" />
              <circle cx="74.7" cy="19.6" r="1.3" fill="#CFC6CB" />
              <circle cx="80.7" cy="15.5" r="1.6" fill="#CFC6CB" />
              <circle cx="31.3" cy="10.1" r="1.0" fill="#CFC6CB" />
              <circle cx="46.2" cy="21.2" r="1.3" fill="#CFC6CB" />
              <circle cx="54.6" cy="14.6" r="1.0" fill="#CFC6CB" />
              <circle cx="33.7" cy="22.4" r="1.0" fill="#CFC6CB" />
              <circle cx="8.0" cy="17.3" r="1.6" fill="#CFC6CB" />
              <circle cx="41.2" cy="23.9" r="1.3" fill="#CFC6CB" />
              <circle cx="91.2" cy="14.0" r="1.6" fill="#CFC6CB" />
              <circle cx="23.3" cy="4.0" r="1.0" fill="#CFC6CB" />
              <circle cx="93.0" cy="16.2" r="1.3" fill="#CFC6CB" />
              <circle cx="55.9" cy="14.9" r="1.0" fill="#CFC6CB" />
              <circle cx="29.8" cy="24.2" r="1.0" fill="#CFC6CB" />
              <circle cx="6.2" cy="12.1" r="1.3" fill="#CFC6CB" />
              <circle cx="16.4" cy="23.7" r="1.0" fill="#CFC6CB" />
              <circle cx="6.8" cy="22.4" r="1.3" fill="#CFC6CB" />
              <circle cx="21.7" cy="24.7" r="1.6" fill="#CFC6CB" />
              <circle cx="50.8" cy="8.9" r="1.6" fill="#CFC6CB" />
              <circle cx="42.9" cy="24.0" r="1.3" fill="#CFC6CB" />
              <circle cx="42.8" cy="7.0" r="1.0" fill="#CFC6CB" />
              <circle cx="83.5" cy="4.0" r="1.6" fill="#CFC6CB" />
              <circle cx="84.8" cy="11.9" r="1.0" fill="#CFC6CB" />
              <circle cx="95.1" cy="8.9" r="1.6" fill="#CFC6CB" />
              <circle cx="14.6" cy="20.7" r="1.0" fill="#CFC6CB" />
              <circle cx="28.0" cy="9.5" r="1.6" fill="#CFC6CB" />
              <circle cx="31.6" cy="12.6" r="1.0" fill="#CFC6CB" />
              <circle cx="23.3" cy="5.9" r="1.6" fill="#CFC6CB" />
              <circle cx="59.2" cy="10.3" r="1.3" fill="#CFC6CB" />
              <circle cx="16.9" cy="20.2" r="1.6" fill="#CFC6CB" />
              <circle cx="56.7" cy="16.6" r="1.3" fill="#CFC6CB" />
              <circle cx="18.5" cy="8.8" r="1.0" fill="#CFC6CB" />
              <circle cx="28.0" cy="25.3" r="1.0" fill="#CFC6CB" />
              <circle cx="61.8" cy="8.1" r="1.6" fill="#CFC6CB" />
              <circle cx="91.0" cy="9.1" r="1.3" fill="#CFC6CB" />
              <circle cx="43.0" cy="19.7" r="1.0" fill="#CFC6CB" />
              <circle cx="51.1" cy="6.8" r="1.3" fill="#CFC6CB" />
              <circle cx="68.6" cy="10.2" r="1.3" fill="#CFC6CB" />
              <circle cx="86.4" cy="14.9" r="1.3" fill="#CFC6CB" />
              <circle cx="20.6" cy="11.6" r="1.6" fill="#CFC6CB" />
              <circle cx="17.5" cy="29.4" r="1.3" fill="#CFC6CB" />
              <circle cx="81.4" cy="18.5" r="1.6" fill="#CFC6CB" />
              <circle cx="23.7" cy="5.9" r="1.0" fill="#CFC6CB" />
              <circle cx="12.0" cy="23.5" r="1.3" fill="#CFC6CB" />
              <circle cx="10.6" cy="15.6" r="1.0" fill="#CFC6CB" />
              <circle cx="52.8" cy="11.3" r="1.0" fill="#CFC6CB" />
              <circle cx="16.9" cy="6.4" r="1.3" fill="#CFC6CB" />
              <circle cx="63.6" cy="29.5" r="1.6" fill="#CFC6CB" />
              <circle cx="89.9" cy="17.6" r="1.6" fill="#CFC6CB" />
              <circle cx="5.7" cy="4.9" r="1.3" fill="#CFC6CB" />
              <circle cx="90.9" cy="22.2" r="1.0" fill="#CFC6CB" />
              <circle cx="12.2" cy="19.6" r="1.0" fill="#CFC6CB" />
              <circle cx="34.0" cy="23.0" r="1.0" fill="#CFC6CB" />
              <circle cx="54.2" cy="6.0" r="1.6" fill="#CFC6CB" />
              <circle cx="90.0" cy="5.2" r="1.6" fill="#CFC6CB" />
              <circle cx="75.9" cy="22.3" r="1.3" fill="#CFC6CB" />
              <circle cx="66.7" cy="13.1" r="1.0" fill="#CFC6CB" />
              <circle cx="42.8" cy="26.6" r="1.0" fill="#CFC6CB" />
              <circle cx="56.4" cy="26.5" r="1.6" fill="#CFC6CB" />
              <circle cx="39.3" cy="21.2" r="1.0" fill="#CFC6CB" />
              <circle cx="12.7" cy="19.8" r="1.6" fill="#CFC6CB" />
              <circle cx="27.8" cy="7.0" r="1.3" fill="#CFC6CB" />
              <circle cx="45.6" cy="54.9" r="1.4" fill="#B9AFB5" />
              <circle cx="67.8" cy="47.5" r="1.1" fill="#B9AFB5" />
              <circle cx="50.7" cy="49.5" r="1.4" fill="#B9AFB5" />
              <circle cx="49.1" cy="51.6" r="1.1" fill="#B9AFB5" />
              <circle cx="38.5" cy="60.9" r="1.4" fill="#B9AFB5" />
              <circle cx="20.3" cy="42.7" r="1.4" fill="#B9AFB5" />
              <circle cx="57.3" cy="39.7" r="1.1" fill="#B9AFB5" />
              <circle cx="43.9" cy="55.6" r="1.4" fill="#B9AFB5" />
              <circle cx="37.1" cy="49.0" r="1.4" fill="#B9AFB5" />
              <circle cx="37.2" cy="53.3" r="1.4" fill="#B9AFB5" />
              <circle cx="59.3" cy="56.9" r="1.1" fill="#B9AFB5" />
              <circle cx="46.2" cy="58.9" r="1.4" fill="#B9AFB5" />
              <circle cx="27.1" cy="41.5" r="1.4" fill="#B9AFB5" />
              <circle cx="62.2" cy="57.8" r="1.1" fill="#B9AFB5" />
              <circle cx="43.3" cy="60.7" r="1.1" fill="#B9AFB5" />
              <circle cx="48.1" cy="38.9" r="1.1" fill="#B9AFB5" />
              <circle cx="45.9" cy="57.6" r="1.4" fill="#B9AFB5" />
              <circle cx="59.1" cy="53.5" r="1.4" fill="#B9AFB5" />
              <circle cx="69.0" cy="44.3" r="1.4" fill="#B9AFB5" />
              <circle cx="34.7" cy="58.7" r="1.4" fill="#B9AFB5" />
              <circle cx="41.1" cy="50.8" r="1.1" fill="#B9AFB5" />
              <circle cx="45.9" cy="52.7" r="1.1" fill="#B9AFB5" />
              <circle cx="73.4" cy="36.6" r="1.1" fill="#B9AFB5" />
              <circle cx="61.1" cy="56.3" r="1.1" fill="#B9AFB5" />
              <circle cx="56.8" cy="47.6" r="1.4" fill="#B9AFB5" />
              <circle cx="55.5" cy="60.9" r="1.1" fill="#B9AFB5" />
              <circle cx="44.0" cy="80.0" r="2.6" fill="#E3165B" />
              <circle cx="50.0" cy="84.0" r="2.6" fill="#E3165B" />
              <circle cx="56.0" cy="80.0" r="2.6" fill="#E3165B" />
              <circle cx="50.0" cy="76.0" r="2.6" fill="#E3165B" />
            </svg>
            {" "}
            <span className="f-tag muted" style={{ "left": "50%", "top": "-1%" }}>
              Countless startups, every day
            </span>
            {" "}
            <span className="f-tag" style={{ "left": "78%", "top": "34%" }}>
              <span className="x">
                <svg className="i" width="12" height="12" style={{ "strokeWidth": "3" }} aria-hidden="true">
                  <use href="#i-x" />
                </svg>
              </span>
              Unqualified pitches
            </span>
            {" "}
            <span className="f-tag" style={{ "left": "24%", "top": "52%" }}>
              <span className="x">
                <svg className="i" width="12" height="12" style={{ "strokeWidth": "3" }} aria-hidden="true">
                  <use href="#i-x" />
                </svg>
              </span>
              Incomplete information
            </span>
            {" "}
            <span className="f-tag ok" style={{ "left": "50%", "top": "96%" }}>
              <span className="x">
                <svg className="i" width="12" height="12" style={{ "strokeWidth": "3" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Reliable, high-potential startups
            </span>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="how on-dark" id="how">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                03 / How it works
              </span>
              {" "}
              <h2 className="display">
                How Blink Connect works for investors.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              BlinkConnect streamlines the investment process by offering a curated list of startups, in-depth insights, and direct connections to founders. Make data-driven decisions and invest with confidence.
            </p>
          </div>
          {" "}
          <ol className="hsteps reveal">
            <li className="hstep">
              <span className="dot">
                01
              </span>
              <h3>
                Browse curated startups
              </h3>
              <p>
                View a curated list of startups tailored to your investment preferences.
              </p>
            </li>
            <li className="hstep">
              <span className="dot">
                02
              </span>
              <h3>
                Access deep insights
              </h3>
              <p>
                Get financial data, market analytics, and growth projections for each startup.
              </p>
            </li>
            <li className="hstep">
              <span className="dot">
                03
              </span>
              <h3>
                Connect with startups
              </h3>
              <p>
                Communicate directly with founders or GTM partners through the platform.
              </p>
            </li>
            <li className="hstep">
              <span className="dot">
                04
              </span>
              <h3>
                Invest confidently
              </h3>
              <p>
                Make informed investment decisions backed by comprehensive data.
              </p>
            </li>
          </ol>
        </div>
      </section>
      {" "}
      {" "}
      <section className="opp">
        <div className="wrap">
          <div className="opp-grid reveal">
            <div>
              <span className="label">
                04 / The opportunity
              </span>
              {" "}
              <h2 className="display">
                The growing opportunity in startup investments.
              </h2>
            </div>
            {" "}
            <div className="opp-r">
              <p className="lead-l">
                With more startups seeking investment than ever before, the potential to discover the next game-changing company has never been greater. The global startup ecosystem continues to expand, offering investors access to untapped markets and innovative business models.
              </p>
              {" "}
              <a href="#apply" className="btn btn-brand">
                Sign up and connect with top startups
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {" "}
        <div className="opp-chart" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="og" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#E3165B" stopOpacity=".22" />
                <stop offset="1" stopColor="#E3165B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="og2" x1="0" x2="1">
                <stop offset="0" stopColor="#E3165B" />
                <stop offset="1" stopColor="#F7891F" />
              </linearGradient>
            </defs>
            <path d="M0 92 C 12 90, 20 86, 30 82 S 48 74, 58 64 S 76 44, 86 30 S 96 12, 100 6 V100 H0Z" fill="url(#og)" />
            <path d="M0 92 C 12 90, 20 86, 30 82 S 48 74, 58 64 S 76 44, 86 30 S 96 12, 100 6" fill="none" stroke="url(#og2)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path d="M0 96 C 20 95, 40 92, 60 86 S 85 74, 100 64" fill="none" stroke="#D9CFC9" strokeWidth="1.5" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
          </svg>
          {" "}
          <span className="tag" style={{ "left": "56%", "top": "46%" }}>
            <i />
            Untapped markets
          </span>
          {" "}
          <span className="tag" style={{ "right": "var(--pad)", "top": "4%" }}>
            <i />
            Innovative business models
          </span>
        </div>
      </section>
      {" "}
      {" "}
      <section className="apply" id="apply">
        <div className="apply-side on-dark">
          <span className="label">
            05 / Investor details
          </span>
          {" "}
          <h2>
            Join BlinkConnect as an investor.
          </h2>
          {" "}
          <p>
            Tell us about your investment focus, and we will help you discover startups that match your preferences.
          </p>
          {" "}
          <ol className="next">
            <li>
              <span className="n">
                1
              </span>
              <span>
                <strong>
                  Share your details
                </strong>
                <span className="t">
                  Your funding stage, industry focus, goals and geography.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                2
              </span>
              <span>
                <strong>
                  Browse curated startups
                </strong>
                <span className="t">
                  See startups tailored to your investment preferences.
                </span>
              </span>
            </li>
            <li>
              <span className="n">
                3
              </span>
              <span>
                <strong>
                  Connect and invest
                </strong>
                <span className="t">
                  Talk directly with founders and GTM partners in the app.
                </span>
              </span>
            </li>
          </ol>
        </div>
        {" "}
        <div className="apply-form">
          <div id="form-wrap">
            <h2 className="ft">
              Investor details
            </h2>
            {" "}
            <p className="form-sub">
              Fields marked * are required.
            </p>
            {" "}
            {" "}
            <form id="join-form" className="form-grid" noValidate data-endpoint={FORMS.investors} data-mailto={SITE.emails.support}>
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
                  <input className="input" id="email" name="email" type="email" autoComplete="email" placeholder="you@fund.com" required aria-describedby="email-err" inputMode="email" />
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
                <label htmlFor="industry">
                  Industry focus
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
                <label htmlFor="investment_goals">
                  Investment goals
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <textarea className="input" id="investment_goals" name="investment_goals" rows="4" placeholder="e.g. early-stage B2B SaaS, $50K to $250K checks" />
              </div>
              {" "}
              <div className="field full">
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
                  By submitting this form, you agree that we may use your details to contact you, as described in our{" "}
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
                    Submit
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
              Thanks for your interest.
            </h2>
            {" "}
            <p id="success-text">
              Our team will be in touch at the email address you provided. In the meantime, download the app to start exploring startups.
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
              Get the app
            </span>
            {" "}
            <h2>
              Find your next investment in the app.
            </h2>
            {" "}
            <p>
              Download BlinkConnect to browse curated startups, access insights and connect directly with founders.
            </p>
            {" "}
            <div className="cta-row">
              <a href="#apply" className="btn btn-dark">
                Sign up and connect with top startups
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
