import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "About BlinkConnect | The AI-Powered Network for Founders, Investors and Professionals"
  },
  "description": "BlinkConnect is a social AI network for founders, investors, GTM partners, college students and professionals, built around relevance, trust and real outcomes.",
  "alternates": {
    "canonical": "/about/"
  },
  "openGraph": {
    "title": "About BlinkConnect | The AI-Powered Network for Founders, Investors and Professionals",
    "description": "BlinkConnect is a social AI network for founders, investors, GTM partners, college students and professionals, built around relevance, trust and real outcomes.",
    "url": "/about/"
  }
};

export default function AboutPage() {
  return (
    <div className="pg-about">
    <main id="top">
      <JsonLd data={breadcrumbs('/about/')} />
      <section className="a-hero on-dark">
        <div className="a-hero-grid">
          <div className="a-hero-copy">
            <span className="label">
              About BlinkConnect
            </span>
            {" "}
            <h1>
              The AI-powered social network for{" "}
              <em>
                founders, investors
              </em>
              {" "}and professionals.
            </h1>
            {" "}
            <p className="lead">
              BlinkConnect is a social AI network designed for founders, investors, GTM partners, college students and professionals to spark{" "}
              <strong>
                meaningful connections
              </strong>
              , collaborations and opportunities. Using AI and machine learning, we are making professional networking more human, relevant and effective.
            </p>
            {" "}
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a href="#download" className="btn btn-brand">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-download" />
                </svg>
                Download the app
              </a>
              {" "}
              <a href="#what" className="btn btn-line">
                Our story
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
          {" "}
          <div className="a-hero-media">
            <img src="/images/people-table.jpg" width="881" height="1112" alt="Overhead view of professionals gathered around a round table, collaborating" />
            {" "}
            <div className="media-tag">
              <span className="av">
                <span style={{ "background": "var(--brand)" }}>
                  EC
                </span>
                <span style={{ "background": "var(--accent)" }}>
                  MB
                </span>
                <span style={{ "background": "#3A3140" }}>
                  SM
                </span>
              </span>
              Founders, investors and professionals, at one table
            </div>
          </div>
        </div>
        {" "}
        <div className="a-facts">
          <div className="wrap">
            <div className="fact">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              <span>
                <b>
                  Mobile-first
                </b>
                Built for iOS and Android
              </span>
            </div>
            {" "}
            <div className="fact">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-sparkle" />
              </svg>
              <span>
                <b>
                  AI-powered
                </b>
                Matching based on intent
              </span>
            </div>
            {" "}
            <div className="fact">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-shield" />
              </svg>
              <span>
                <b>
                  Trust-first
                </b>
                Clear identity and purpose
              </span>
            </div>
            {" "}
            <div className="fact">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-message" />
              </svg>
              <span>
                <b>
                  Direct
                </b>
                No algorithmic noise
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="sec" id="what">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                01 / What is BlinkConnect?
              </span>
              {" "}
              <h2 className="display">
                Networking that is focused, not noisy.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              BlinkConnect is a{" "}
              <strong>
                mobile-first platform
              </strong>
              {" "}that connects ambitious people in a focused and intentional way. Unlike traditional social media or networking platforms that prioritize scale and noise, BlinkConnect puts relevance, trust and real outcomes first.
            </p>
          </div>
          {" "}
          <div className="vs-wrap reveal">
            <div className="vs">
              <div className="vs-side noisy">
                <h3>
                  Most platforms prioritize
                </h3>
                {" "}
                <div className="vs-art" aria-hidden="true">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line className="nlink" x1="33.8" y1="19.3" x2="9.3" y2="50.7" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="53.3" y1="38.2" x2="9.5" y2="24.1" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="7.4" y1="44.2" x2="68.0" y2="58.3" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="43.1" y1="78.8" x2="54.5" y2="83.7" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="61.7" y1="89.4" x2="32.4" y2="77.8" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="93.8" y1="10.1" x2="18.0" y2="49.0" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="17.3" y1="16.4" x2="9.4" y2="73.6" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="20.6" y1="57.2" x2="57.1" y2="40.9" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="54.4" y1="11.5" x2="52.3" y2="83.0" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="66.6" y1="43.6" x2="79.6" y2="31.0" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="45.7" y1="32.4" x2="10.4" y2="14.0" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="26.5" y1="56.5" x2="32.9" y2="57.5" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="71.1" y1="31.3" x2="81.3" y2="89.1" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="42.5" y1="72.6" x2="63.9" y2="12.4" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="7.6" y1="64.8" x2="62.8" y2="38.8" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="84.5" y1="33.6" x2="74.3" y2="56.4" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="57.4" y1="46.1" x2="40.0" y2="82.7" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="47.6" y1="64.4" x2="83.0" y2="31.5" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="63.5" y1="93.4" x2="94.2" y2="16.4" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="39.5" y1="64.8" x2="6.1" y2="46.6" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="19.5" y1="16.3" x2="15.4" y2="25.6" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="15.9" y1="27.8" x2="77.1" y2="67.5" vectorEffect="non-scaling-stroke" />
                    <line className="nlink" x1="11.4" y1="45.5" x2="9.6" y2="67.7" vectorEffect="non-scaling-stroke" />
                    <circle className="dot-n" cx="33.8" cy="19.3" r="1.2" />
                    <circle className="dot-n" cx="63.9" cy="12.4" r="1.6" />
                    <circle className="dot-n" cx="53.3" cy="38.2" r="1.2" />
                    <circle className="dot-n" cx="9.3" cy="50.7" r="1.6" />
                    <circle className="dot-n" cx="7.4" cy="44.2" r="1.2" />
                    <circle className="dot-n" cx="10.4" cy="14.0" r="1.2" />
                    <circle className="dot-n" cx="43.1" cy="78.8" r="1.6" />
                    <circle className="dot-n" cx="15.4" cy="25.6" r="1.2" />
                    <circle className="dot-n" cx="61.7" cy="89.4" r="0.9" />
                    <circle className="dot-n" cx="57.1" cy="40.9" r="0.9" />
                    <circle className="dot-n" cx="93.8" cy="10.1" r="0.9" />
                    <circle className="dot-n" cx="83.0" cy="31.5" r="0.9" />
                    <circle className="dot-n" cx="17.3" cy="16.4" r="0.9" />
                    <circle className="dot-n" cx="32.4" cy="77.8" r="0.9" />
                    <circle className="dot-n" cx="20.6" cy="57.2" r="1.6" />
                    <circle className="dot-n" cx="62.8" cy="38.8" r="0.9" />
                    <circle className="dot-n" cx="54.4" cy="11.5" r="0.9" />
                    <circle className="dot-n" cx="9.5" cy="24.1" r="1.2" />
                    <circle className="dot-n" cx="66.6" cy="43.6" r="1.6" />
                    <circle className="dot-n" cx="32.9" cy="57.5" r="0.9" />
                    <circle className="dot-n" cx="45.7" cy="32.4" r="1.2" />
                    <circle className="dot-n" cx="77.1" cy="67.5" r="1.2" />
                    <circle className="dot-n" cx="26.5" cy="56.5" r="0.9" />
                    <circle className="dot-n" cx="52.3" cy="83.0" r="0.9" />
                    <circle className="dot-n" cx="71.1" cy="31.3" r="1.2" />
                    <circle className="dot-n" cx="94.2" cy="16.4" r="1.6" />
                    <circle className="dot-n" cx="42.5" cy="72.6" r="1.2" />
                    <circle className="dot-n" cx="18.0" cy="49.0" r="1.6" />
                    <circle className="dot-n" cx="7.6" cy="64.8" r="1.6" />
                    <circle className="dot-n" cx="74.3" cy="56.4" r="1.2" />
                    <circle className="dot-n" cx="84.5" cy="33.6" r="0.9" />
                    <circle className="dot-n" cx="68.0" cy="58.3" r="1.6" />
                    <circle className="dot-n" cx="57.4" cy="46.1" r="1.6" />
                    <circle className="dot-n" cx="81.3" cy="89.1" r="1.6" />
                    <circle className="dot-n" cx="47.6" cy="64.4" r="1.6" />
                    <circle className="dot-n" cx="9.6" cy="67.7" r="1.6" />
                    <circle className="dot-n" cx="63.5" cy="93.4" r="1.6" />
                    <circle className="dot-n" cx="79.6" cy="31.0" r="0.9" />
                    <circle className="dot-n" cx="39.5" cy="64.8" r="1.2" />
                    <circle className="dot-n" cx="6.1" cy="46.6" r="1.6" />
                    <circle className="dot-n" cx="19.5" cy="16.3" r="1.6" />
                    <circle className="dot-n" cx="9.4" cy="73.6" r="1.2" />
                    <circle className="dot-n" cx="15.9" cy="27.8" r="1.2" />
                    <circle className="dot-n" cx="40.0" cy="82.7" r="1.2" />
                    <circle className="dot-n" cx="11.4" cy="45.5" r="1.2" />
                    <circle className="dot-n" cx="54.5" cy="83.7" r="0.9" />
                  </svg>
                </div>
                {" "}
                <ul className="vs-words">
                  <li>
                    Scale
                  </li>
                  <li>
                    Noise
                  </li>
                </ul>
              </div>
              {" "}
              <div className="vs-side clear">
                <h3>
                  BlinkConnect emphasizes
                </h3>
                {" "}
                <div className="vs-art" aria-hidden="true">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line className="clink" x1="50" y1="50" x2="18" y2="22" vectorEffect="non-scaling-stroke" />
                    <line className="clink" x1="50" y1="50" x2="84" y2="26" vectorEffect="non-scaling-stroke" />
                    <line className="clink hot" x1="50" y1="50" x2="80" y2="80" vectorEffect="non-scaling-stroke" />
                    <line className="clink" x1="50" y1="50" x2="20" y2="78" vectorEffect="non-scaling-stroke" />
                  </svg>
                  {" "}
                  <span className="cn me">
                    You
                  </span>
                  {" "}
                  <span className="cn" style={{ "left": "18%", "top": "22%" }}>
                    Founder
                  </span>
                  {" "}
                  <span className="cn" style={{ "left": "84%", "top": "26%" }}>
                    Investor
                  </span>
                  {" "}
                  <span className="cn hot" style={{ "left": "80%", "top": "80%" }}>
                    GTM Partner
                  </span>
                  {" "}
                  <span className="cn" style={{ "left": "20%", "top": "78%" }}>
                    Professional
                  </span>
                </div>
                {" "}
                <ul className="vs-words">
                  <li>
                    Relevance
                  </li>
                  <li>
                    Trust
                  </li>
                  <li>
                    Real outcomes
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="vs-mid" aria-hidden="true">
              VS
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="sec features" id="key-features">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                02 / Key features
              </span>
              {" "}
              <h2 className="display">
                Everything you need to network with intention.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Smart tools that help you meet the right people, share what you know and find your next opportunity.
            </p>
          </div>
          {" "}
          <div className="feat-grid reveal">
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-brand">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-sparkle" />
                  </svg>
                </span>
                <span className="feat-num">
                  01
                </span>
              </div>
              <span className="tag">
                AI-driven
              </span>
              <h3>
                Connection suggestions
              </h3>
              <p>
                Get matched with relevant founders, investors or professionals based on your goals, interests and growth stage.
              </p>
            </article>
            {" "}
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-ink">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-id" />
                  </svg>
                </span>
                <span className="feat-num">
                  02
                </span>
              </div>
              <h3>
                Professional profiles and networking tools
              </h3>
              <p>
                Showcase your skills, interests and goals so the right connections can find you.
              </p>
            </article>
            {" "}
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-accent">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                </span>
                <span className="feat-num">
                  03
                </span>
              </div>
              <h3>
                Community and collaboration
              </h3>
              <p>
                Join discussions, share insights and explore opportunities with a community that shares your ambition.
              </p>
            </article>
            {" "}
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-soft">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-trend" />
                  </svg>
                </span>
                <span className="feat-num">
                  04
                </span>
              </div>
              <h3>
                Industry insights and resources
              </h3>
              <p>
                Stay updated on the latest trends in AI, tech and more.
              </p>
            </article>
            {" "}
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-brand">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-target" />
                  </svg>
                </span>
                <span className="feat-num">
                  05
                </span>
              </div>
              <span className="tag or">
                AI-powered
              </span>
              <h3>
                Matchmaking
              </h3>
              <p>
                Get introduced to investors, founders and professionals for collaborations, funding or mentorship.
              </p>
            </article>
            {" "}
            <article className="feat">
              <div className="feat-top">
                <span className="feat-ic bg-ink">
                  <svg className="i" width="22" height="22" aria-hidden="true">
                    <use href="#i-link" />
                  </svg>
                </span>
                <span className="feat-num">
                  06
                </span>
              </div>
              <h3>
                Meaningful connection building
              </h3>
              <p>
                Contextual matching based on professional intent and goals, so every connection has a reason.
              </p>
            </article>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section id="who">
        <div className="wrap sec-head reveal" style={{ "paddingTop": "120px" }}>
          <div>
            <span className="label">
              03 / Who is BlinkConnect for?
            </span>
            {" "}
            <h2 className="display">
              Built for people who make business happen.
            </h2>
          </div>
          {" "}
          <p className="lead-l">
            Whether you are raising, investing, partnering or just starting out, BlinkConnect helps you meet the people who matter for your next step.
          </p>
        </div>
        {" "}
        <div className="who-grid">
          <Link className="who a reveal" href="/blink-connect-startups-gtm-growth-opportunities/">
            <span className="big" aria-hidden="true">
              F
            </span>
            <svg className="i w-ic" width="34" height="34" aria-hidden="true">
              <use href="#i-rocket" />
            </svg>
            <h3>
              Founders
            </h3>
            <p>
              Find investors, advisors and collaborators who fit your stage and goals.
            </p>
          </Link>
          {" "}
          <Link className="who b reveal" href="/blink-connect-investors-curated-startups-opportunities/">
            <span className="big" aria-hidden="true">
              I
            </span>
            <svg className="i" width="34" height="34" aria-hidden="true">
              <use href="#i-pie" />
            </svg>
            <h3>
              Investors
            </h3>
            <p>
              Discover promising startups and build connections with the people behind them.
            </p>
          </Link>
          {" "}
          <Link className="who c reveal" href="/blink-connect-gtm-partners-opportunities/">
            <span className="big" aria-hidden="true">
              G
            </span>
            <svg className="i" width="34" height="34" aria-hidden="true">
              <use href="#i-link" />
            </svg>
            <h3>
              GTM Partners
            </h3>
            <p>
              Sign up as a GTM Partner and connect instantly with investors, founders and other businesses.
            </p>
          </Link>
          {" "}
          <div className="who d reveal">
            <span className="big" aria-hidden="true">
              P
            </span>
            <svg className="i" width="34" height="34" aria-hidden="true">
              <use href="#i-cap" />
            </svg>
            <h3>
              Professionals and students
            </h3>
            <p>
              Grow your network and open doors to new opportunities, wherever you are in your career.
            </p>
          </div>
        </div>
        {" "}
        <div className="wrap">
          <p className="who-note">
            <svg className="i" width="22" height="22" aria-hidden="true">
              <use href="#i-users" />
            </svg>
            And anyone who values clarity, relevance and trust in professional networking.
          </p>
        </div>
      </section>
      {" "}
      {" "}
      <section className="trust on-dark" id="trust">
        <div className="trust-col reveal">
          <span className="label">
            04 / Our approach to trust and relevance
          </span>
          {" "}
          <h2>
            Trust is key in networking.
          </h2>
          {" "}
          <p>
            That is why every part of BlinkConnect is designed around it.
          </p>
          {" "}
          <ul className="checks">
            <li>
              <span className="ck">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-id" />
                </svg>
              </span>
              Clear identity and purpose in every profile
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-target" />
                </svg>
              </span>
              Contextual matching based on professional intent
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-message" />
                </svg>
              </span>
              Direct communication without algorithmic noise
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
              </span>
              A community focused on respect and professionalism
            </li>
          </ul>
        </div>
        {" "}
        <div className="trust-col reveal">
          <span className="label">
            AI in BlinkConnect
          </span>
          {" "}
          <h2>
            Smarter matches, powered by AI.
          </h2>
          {" "}
          <p>
            BlinkConnect uses AI and machine learning to bring the right people and ideas to you.
          </p>
          {" "}
          <div className="match" aria-hidden="true">
            <div className="match-row">
              <div className="person">
                <span className="pa" style={{ "background": "var(--brand)" }}>
                  EC
                </span>
                <span>
                  <b>
                    Emily Carter
                  </b>
                  <small>
                    Founder, HealthTech
                  </small>
                </span>
              </div>
              {" "}
              <div className="match-line">
                <span>
                  <svg className="i" width="18" height="18" style={{ "color": "#fff" }} aria-hidden="true">
                    <use href="#i-sparkle" />
                  </svg>
                </span>
              </div>
              {" "}
              <div className="person r">
                <span className="pa" style={{ "background": "var(--accent)" }}>
                  MB
                </span>
                <span>
                  <b>
                    Michael Brooks
                  </b>
                  <small>
                    Angel investor
                  </small>
                </span>
              </div>
            </div>
            {" "}
            <div className="reasons">
              <em>
                Why this match
              </em>
              <span>
                Raising seed
              </span>
              <span>
                HealthTech focus
              </span>
              <span>
                Same goals
              </span>
            </div>
          </div>
          {" "}
          <div className="ai-list">
            <div className="ai-item">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-target" />
              </svg>
              <h3>
                Matchmaking
              </h3>
              <p>
                Connecting users based on their goals and intent.
              </p>
            </div>
            {" "}
            <div className="ai-item">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-sparkle" />
              </svg>
              <h3>
                Recommendations
              </h3>
              <p>
                Suggesting relevant connections and content.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="sec" id="values">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                05 / Our values
              </span>
              {" "}
              <h2 className="display">
                Building connections with integrity, innovation and inclusivity.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Our core values are woven into the fabric of our platform. They guide our decisions and shape the way we build relationships, making BlinkConnect not just a networking platform, but a community where professional bonds flourish.
            </p>
          </div>
          {" "}
          <div className="values-list">
            <div className="value reveal">
              <span className="value-num">
                V.01
              </span>
              <h3>
                Integrity
              </h3>
              <p>
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                We ensure transparency and honesty in all our interactions, fostering trust within our professional community.
              </p>
            </div>
            {" "}
            <div className="value reveal">
              <span className="value-num">
                V.02
              </span>
              <h3>
                Innovation
              </h3>
              <p>
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-sparkle" />
                </svg>
                We continually enhance our networking tools and features to stay at the forefront of technology and user experience.
              </p>
            </div>
            {" "}
            <div className="value reveal">
              <span className="value-num">
                V.03
              </span>
              <h3>
                Inclusivity
              </h3>
              <p>
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-users" />
                </svg>
                We create a diverse, welcoming space where all professionals, regardless of background, can connect, share and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="sec vision" id="vision">
        <svg className="arc" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="98" fill="none" stroke="#E7DFD9" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="74" fill="none" stroke="#E7DFD9" strokeWidth="0.6" strokeDasharray="2 3" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#F3C9D7" strokeWidth="0.6" />
        </svg>
        {" "}
        <div className="wrap">
          <div className="reveal">
            <span className="label">
              06 / Our long-term vision
            </span>
            {" "}
            <p className="quote">
              We believe professional networking should be{" "}
              <mark>
                smaller,
              </mark>
              {" "}
              <mark className="o">
                smarter
              </mark>
              {" "}and{" "}
              <mark>
                intentional.
              </mark>
            </p>
          </div>
          {" "}
          <div className="vision-foot reveal">
            <p className="lead-l">
              BlinkConnect focuses on helping you build durable relationships, support your career growth and keep every interaction transparent.
            </p>
            {" "}
            <div className="indep" role="note" aria-labelledby="independent-title">
              <span className="ic">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-eye" />
                </svg>
              </span>
              {" "}
              <div>
                <h3 id="independent-title">
                  Independent and clear
                </h3>
                <p>
                  BlinkConnect is an independent platform. It is not affiliated with media companies or content organizations with similar names.
                </p>
              </div>
            </div>
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
              Ready to network with intention?
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
