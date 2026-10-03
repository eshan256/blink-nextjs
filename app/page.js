import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { mobileApp } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "BlinkConnect | Connect Instantly, Grow Your Network"
  },
  "description": "BlinkConnect brings founders, investors, GTM partners, professionals and students together in one app. AI-powered matching, events and direct messages.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "BlinkConnect | Connect Instantly, Grow Your Network",
    "description": "BlinkConnect brings founders, investors, GTM partners, professionals and students together in one app. AI-powered matching, events and direct messages.",
    "url": "/"
  }
};

export default function HomePage() {
  return (
    <div className="pg-home">
    <main id="top">
      <JsonLd data={mobileApp} />
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        {" "}
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label">
              Professional networking, in a blink
            </span>
            {" "}
            <h1>
              <span className="line">
                Connect instantly.
              </span>
              <span className="line">
                Grow your{" "}
                <em>
                  network.
                </em>
              </span>
            </h1>
            {" "}
            <p className="lead">
              BlinkConnect brings founders, investors, GTM partners, professionals and students together in one app. AI-powered matching puts the right people in front of you, so every conversation moves your work forward.
            </p>
            {" "}
            <div className="hero-cta">
              <a href="#download" className="btn btn-brand">
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-download" />
                </svg>
                Download the app
              </a>
              {" "}
              <Link href="/how-blinkconnect-works/" className="btn btn-line">
                See how it works
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            {" "}
            <div className="platforms">
              <span>
                <i />
                iOS
              </span>
              <span>
                <i />
                Android
              </span>
              <span>
                <i />
                AI-powered matching
              </span>
            </div>
          </div>
          {" "}
          <div className="net" role="img" aria-label="The BlinkConnect app at the center of a network linking founders, investors, GTM partners, professionals and students">
            <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <ellipse className="ring" cx="50" cy="50" rx="44" ry="44" vectorEffect="non-scaling-stroke" />
              <ellipse className="ring" cx="50" cy="50" rx="30" ry="30" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M12 14 C 30 20, 38 36, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M88 24 C 74 28, 62 38, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M88 66 C 76 60, 64 54, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M12 76 C 24 68, 38 58, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M50 96 C 50 80, 50 64, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="link" d="M12 14 C 40 4, 70 8, 88 24" vectorEffect="non-scaling-stroke" style={{ "opacity": ".45" }} />
              <path className="link" d="M12 76 C 22 92, 36 98, 50 96" vectorEffect="non-scaling-stroke" style={{ "opacity": ".45" }} />
              <path className="flow" pathLength="100" d="M12 14 C 30 20, 38 36, 50 50" vectorEffect="non-scaling-stroke" />
              <path className="flow pink" pathLength="100" d="M50 50 C 62 38, 74 28, 88 24" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-1.2s" }} />
              <path className="flow" pathLength="100" d="M88 66 C 76 60, 64 54, 50 50" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-2.1s" }} />
              <path className="flow pink" pathLength="100" d="M50 50 C 38 58, 24 68, 12 76" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-0.6s" }} />
              <path className="flow" pathLength="100" d="M50 96 C 50 80, 50 64, 50 50" vectorEffect="non-scaling-stroke" style={{ "animationDelay": "-2.8s" }} />
            </svg>
            {" "}
            <div className="phone">
              <img src="/images/app-discover-screen.png" width="1290" height="2796" alt="" />
            </div>
            {" "}
            <span className="node pulse l" style={{ "left": "0", "top": "14%" }}>
              <span className="ic bg-accent">
                <svg className="i" width="18" height="18">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Founders
                </strong>
                <small>
                  Raising and building
                </small>
              </span>
            </span>
            {" "}
            <span className="node r" style={{ "left": "100%", "top": "24%" }}>
              <span className="ic bg-brand">
                <svg className="i" width="18" height="18">
                  <use href="#i-pie" />
                </svg>
              </span>
              <span>
                <strong>
                  Investors
                </strong>
                <small>
                  Curated startups
                </small>
              </span>
            </span>
            {" "}
            <span className="node pulse r" style={{ "left": "100%", "top": "66%" }}>
              <span className="ic bg-accent">
                <svg className="i" width="18" height="18">
                  <use href="#i-link" />
                </svg>
              </span>
              <span>
                <strong>
                  GTM Partners
                </strong>
                <small>
                  Go-to-market experts
                </small>
              </span>
            </span>
            {" "}
            <span className="node l" style={{ "left": "0", "top": "76%" }}>
              <span className="ic bg-ink">
                <svg className="i" width="18" height="18">
                  <use href="#i-briefcase" />
                </svg>
              </span>
              <span>
                <strong>
                  Professionals
                </strong>
                <small>
                  Every industry
                </small>
              </span>
            </span>
            {" "}
            <span className="node" style={{ "left": "50%", "top": "96%" }}>
              <span className="ic bg-soft">
                <svg className="i" width="18" height="18">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Students
                </strong>
                <small>
                  First opportunities
                </small>
              </span>
            </span>
          </div>
        </div>
        {" "}
        <div className="hero-foot">
          <div className="wrap">
            <div className="hf">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-sparkle" />
              </svg>
              <span>
                <b>
                  AI-driven matches
                </b>
                Based on goals and growth stage
              </span>
            </div>
            {" "}
            <div className="hf">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-message" />
              </svg>
              <span>
                <b>
                  Direct messages
                </b>
                Without algorithmic noise
              </span>
            </div>
            {" "}
            <div className="hf">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-calendar" />
              </svg>
              <span>
                <b>
                  Industry events
                </b>
                Webinars, workshops, meetups
              </span>
            </div>
            {" "}
            <div className="hf">
              <svg className="i" width="22" height="22" aria-hidden="true">
                <use href="#i-shield" />
              </svg>
              <span>
                <b>
                  Trusted profiles
                </b>
                Clear identity and purpose
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="audience" id="about">
        <div className="wrap">
          <div className="aud-head reveal">
            <div>
              <span className="label">
                01 / Who it's for
              </span>
              {" "}
              <h2 className="display" style={{ "marginTop": "20px" }}>
                One app, every side of the table.
              </h2>
            </div>
            {" "}
            <p>
              BlinkConnect is built for the people who make business happen, from first-time founders and college students to investors and GTM partners.
            </p>
          </div>
          {" "}
          <div className="aud-grid">
            <Link className="aud reveal" href="/blink-connect-startups-gtm-growth-opportunities/">
              <span className="aud-num">
                A
              </span>
              {" "}
              <span className="aud-ic bg-accent">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              {" "}
              <h3>
                Founders
              </h3>
              {" "}
              <p>
                Find investors, advisors and collaborators who fit your stage and goals.
              </p>
              {" "}
              <span className="go">
                For startups
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="aud reveal" href="/blink-connect-investors-curated-startups-opportunities/">
              <span className="aud-num">
                B
              </span>
              {" "}
              <span className="aud-ic bg-brand">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-pie" />
                </svg>
              </span>
              {" "}
              <h3>
                Investors
              </h3>
              {" "}
              <p>
                Discover curated startups and connect directly with the founders behind them.
              </p>
              {" "}
              <span className="go">
                For investors
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="aud reveal" href="/blink-connect-gtm-partners-opportunities/">
              <span className="aud-num">
                C
              </span>
              {" "}
              <span className="aud-ic bg-ink">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-link" />
                </svg>
              </span>
              {" "}
              <h3>
                GTM Partners
              </h3>
              {" "}
              <p>
                Connect instantly with investors, founders and businesses that need your expertise.
              </p>
              {" "}
              <span className="go">
                For GTM partners
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </Link>
            {" "}
            <Link className="aud reveal" href="/about/#who">
              <span className="aud-num">
                D
              </span>
              {" "}
              <span className="aud-ic bg-soft">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              {" "}
              <h3>
                Professionals and students
              </h3>
              {" "}
              <p>
                Grow your network and open doors to new opportunities, wherever you are in your career.
              </p>
              {" "}
              <span className="go">
                Learn more
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
      <section id="features">
        <div className="wrap features-head reveal">
          <div>
            <span className="label">
              02 / Why BlinkConnect
            </span>
            {" "}
            <h2 className="display" style={{ "marginTop": "20px" }}>
              Expand your professional network and unlock new opportunities.
            </h2>
          </div>
          {" "}
          <p>
            Build meaningful connections with professionals across industries, all over the world, with tools designed around how business relationships really start.
          </p>
        </div>
        {" "}
        <div className="tiles">
          <article className="tile light reveal">
            <span className="tile-num">
              2.1
            </span>
            {" "}
            <h3>
              Instant connections
            </h3>
            {" "}
            <p>
              Connect with professionals across the globe in just a blink. Send a request in one tap and pick up the conversation right away.
            </p>
            {" "}
            <div className="tile-art conn-art" aria-hidden="true">
              <div className="conn-photo">
                <img src="/images/professionals.jpg" width="2000" height="1600" alt="" loading="lazy" />
                {" "}
                <span className="badge">
                  <svg className="i bold" width="14" height="14">
                    <use href="#i-check" />
                  </svg>
                  Connected
                </span>
              </div>
              {" "}
              <div className="req-card">
                <span className="t">
                  Requests
                </span>
                {" "}
                <div className="avs">
                  <span className="av bg-accent">
                    EC
                  </span>
                  <span className="av bg-ink">
                    MB
                  </span>
                  <span className="av bg-brand">
                    SM
                  </span>
                  <span className="av bg-soft">
                    +2
                  </span>
                </div>
                {" "}
                <p>
                  <b>
                    Emily, Michael and 3 others
                  </b>
                  {" "}want to connect with you
                </p>
                {" "}
                <span className="accept">
                  <svg className="i bold" width="14" height="14">
                    <use href="#i-check" />
                  </svg>
                  Accept all
                </span>
              </div>
            </div>
          </article>
          {" "}
          <article className="tile dark reveal">
            <span className="tile-num">
              2.2
            </span>
            {" "}
            <h3>
              Industry insights
            </h3>
            {" "}
            <p>
              Gain valuable insights and stay updated with the latest trends in your industry.
            </p>
            {" "}
            <div className="tile-art" aria-hidden="true">
              <div className="chart-art">
                <div className="chart-top">
                  <strong>
                    Trending in your feed
                  </strong>
                  <span>
                    Topics
                  </span>
                </div>
                {" "}
                <svg viewBox="0 0 520 200">
                  <defs>
                    <linearGradient id="areaPink" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#E3165B" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#E3165B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g className="grid">
                    <line x1="0" y1="40" x2="520" y2="40" />
                    <line x1="0" y1="90" x2="520" y2="90" />
                    <line x1="0" y1="140" x2="520" y2="140" />
                    <line x1="0" y1="190" x2="520" y2="190" />
                  </g>
                  <path className="area" d="M0 168 C 60 160, 90 150, 140 132 S 230 120, 280 96 S 380 70, 430 52 S 500 34, 520 28 L 520 200 L 0 200 Z" />
                  <path className="l3" d="M0 150 C 80 146, 160 150, 240 140 S 400 130, 520 126" />
                  <path className="l2" d="M0 182 C 70 176, 120 172, 180 160 S 290 150, 340 132 S 450 112, 520 92" />
                  <path className="l1" d="M0 168 C 60 160, 90 150, 140 132 S 230 120, 280 96 S 380 70, 430 52 S 500 34, 520 28" />
                </svg>
                {" "}
                <div className="legend">
                  <span>
                    <i style={{ "background": "#E3165B" }} />
                    AI in B2B sales
                  </span>
                  <span>
                    <i style={{ "background": "#F7891F" }} />
                    Climate tech funding
                  </span>
                  <span>
                    <i style={{ "background": "rgba(255,255,255,.45)" }} />
                    Partner-led growth
                  </span>
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="tile dark reveal">
            <span className="tile-num">
              2.3
            </span>
            {" "}
            <h3>
              Event networking
            </h3>
            {" "}
            <p>
              Discover and attend webinars, workshops and meetups that build meaningful connections, online and in person.
            </p>
            {" "}
            <div className="tile-art cal-art" aria-hidden="true">
              <div className="cal">
                <div className="cal-h">
                  <strong>
                    October
                  </strong>
                  <span>
                    2026
                  </span>
                </div>
                {" "}
                <div className="cal-g">
                  <span className="d">
                    M
                  </span>
                  <span className="d">
                    T
                  </span>
                  <span className="d">
                    W
                  </span>
                  <span className="d">
                    T
                  </span>
                  <span className="d">
                    F
                  </span>
                  <span className="d">
                    S
                  </span>
                  <span className="d">
                    S
                  </span>
                  {" "}
                  <span className="n">
                    5
                  </span>
                  <span className="n">
                    6
                  </span>
                  <span className="n e">
                    7
                  </span>
                  <span className="n">
                    8
                  </span>
                  <span className="n">
                    9
                  </span>
                  <span className="n">
                    10
                  </span>
                  <span className="n">
                    11
                  </span>
                  {" "}
                  <span className="n">
                    12
                  </span>
                  <span className="n e">
                    13
                  </span>
                  <span className="n on">
                    14
                  </span>
                  <span className="n">
                    15
                  </span>
                  <span className="n e">
                    16
                  </span>
                  <span className="n">
                    17
                  </span>
                  <span className="n">
                    18
                  </span>
                  {" "}
                  <span className="n">
                    19
                  </span>
                  <span className="n">
                    20
                  </span>
                  <span className="n e">
                    21
                  </span>
                  <span className="n">
                    22
                  </span>
                  <span className="n">
                    23
                  </span>
                  <span className="n">
                    24
                  </span>
                  <span className="n">
                    25
                  </span>
                </div>
              </div>
              {" "}
              <div className="ev-list">
                <div className="ev">
                  <span className="dt">
                    <small>
                      OCT
                    </small>
                    <b>
                      14
                    </b>
                  </span>
                  <span className="tx">
                    <strong>
                      Founders &amp; Investors Mixer
                    </strong>
                    <span>
                      6:00 PM, in person
                    </span>
                  </span>
                  <span className="ty meet">
                    Meetup
                  </span>
                </div>
                {" "}
                <div className="ev">
                  <span className="dt">
                    <small>
                      OCT
                    </small>
                    <b>
                      16
                    </b>
                  </span>
                  <span className="tx">
                    <strong>
                      Scaling go-to-market
                    </strong>
                    <span>
                      8:30 PM, virtual
                    </span>
                  </span>
                  <span className="ty web">
                    Webinar
                  </span>
                </div>
                {" "}
                <div className="ev">
                  <span className="dt">
                    <small>
                      OCT
                    </small>
                    <b>
                      21
                    </b>
                  </span>
                  <span className="tx">
                    <strong>
                      Pitch deck clinic
                    </strong>
                    <span>
                      11:00 AM, virtual
                    </span>
                  </span>
                  <span className="ty work">
                    Workshop
                  </span>
                </div>
              </div>
            </div>
          </article>
          {" "}
          <article className="tile light reveal">
            <span className="tile-num">
              2.4
            </span>
            {" "}
            <h3>
              Direct messages
            </h3>
            {" "}
            <p>
              Experience effortless networking with an intuitive interface. Message professionals directly and keep every conversation in one place.
            </p>
            {" "}
            <div className="tile-art chat-art" aria-hidden="true">
              <div className="bub in">
                <span className="who">
                  Michael Brooks
                </span>
                Hi Emily, saw your talk on partner-led growth. Open to a quick call?
              </div>
              {" "}
              <div className="bub out">
                Absolutely. Does Tuesday work for you?
              </div>
              {" "}
              <div className="bub in">
                Perfect, sending an invite now.
              </div>
              {" "}
              <div className="typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          </article>
        </div>
      </section>
      {" "}
      {" "}
      <section className="flow-sec" id="how-it-works">
        <div className="wrap">
          <div className="flow-head reveal">
            <div>
              <span className="label">
                03 / How it works
              </span>
              {" "}
              <h2 className="display" style={{ "marginTop": "20px" }}>
                From download to your first connection in four steps.
              </h2>
            </div>
            {" "}
            <Link href="/how-blinkconnect-works/">
              See how BlinkConnect works
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
          {" "}
          <ol className="steps reveal">
            <li className="step">
              <span className="step-dot">
                01
              </span>
              <h3>
                Download the app
              </h3>
              <p>
                Get BlinkConnect from the App Store or Google Play and create your account.
              </p>
            </li>
            <li className="step">
              <span className="step-dot">
                02
              </span>
              <h3>
                Build your profile
              </h3>
              <p>
                Choose your profile type and add your skills, interests, goals and what you are looking for.
              </p>
            </li>
            <li className="step ai">
              <span className="step-dot">
                03
              </span>
              <span className="ai-tag">
                AI-powered
              </span>
              <h3>
                Get matched
              </h3>
              <p>
                Smart matching connects you with relevant professionals, opportunities and resources.
              </p>
            </li>
            <li className="step">
              <span className="step-dot">
                04
              </span>
              <h3>
                Connect and grow
              </h3>
              <p>
                Message your matches, join events and collaborate with a community that helps you grow.
              </p>
            </li>
          </ol>
        </div>
      </section>
      {" "}
      {" "}
      <section className="gtm on-dark" id="partners">
        <div className="gtm-media">
          <img src="/images/gtm-partner.jpg" width="1200" height="1200" alt="Become a GTM Partner on BlinkConnect and connect with investors, founders and other businesses" loading="lazy" />
        </div>
        {" "}
        <div className="gtm-copy reveal">
          <span className="label">
            04 / For GTM partners
          </span>
          {" "}
          <h2 className="display">
            Grow your business with us.
          </h2>
          {" "}
          <p>
            GTM Partner is one of the profile types in the BlinkConnect app. Sign up as a GTM Partner and connect instantly with investors, founders and other businesses, all through direct messages.
          </p>
          {" "}
          <ul className="chips">
            <li>
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-pie" />
              </svg>
              Investors
            </li>
            <li>
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-rocket" />
              </svg>
              Founders
            </li>
            <li>
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-building" />
              </svg>
              Businesses
            </li>
          </ul>
          {" "}
          <Link href="/blink-connect-gtm-partners-opportunities/" className="btn btn-brand">
            Connect Instantly as GTM Partner
            <svg className="i" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </Link>
        </div>
      </section>
      {" "}
      {" "}
      <section className="ribbon" id="communities">
        <div className="wrap ribbon-head reveal">
          <div>
            <span className="label">
              05 / Community
            </span>
            {" "}
            <h2 className="display" style={{ "marginTop": "20px" }}>
              45 communities. One app.
            </h2>
          </div>
          {" "}
          <Link href="/blinkconnect-community-discussions/">
            Explore all communities
            <svg className="i" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </Link>
        </div>
        {" "}
        <div aria-hidden="true">
          <div className="marquee">
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Startup Central
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Investor Insights
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Co-Founder Connect
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              AI &amp; Future Tech
            </span>
            <span className="pill ink">
              <i style={{ "background": "#E3165B" }} />
              Marketing Mavericks
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Women Entrepreneurs Circle
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Product Managers Guild
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Funding &amp; Finance Forum
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Global Expansion Hub
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Data Wizards
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Partnership Builders
            </span>
            {" "}
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Startup Central
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Investor Insights
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Co-Founder Connect
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              AI &amp; Future Tech
            </span>
            <span className="pill ink">
              <i style={{ "background": "#E3165B" }} />
              Marketing Mavericks
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Women Entrepreneurs Circle
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Product Managers Guild
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Funding &amp; Finance Forum
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Global Expansion Hub
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Data Wizards
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Partnership Builders
            </span>
          </div>
          {" "}
          <div className="marquee rev">
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Campus Innovators
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Sales &amp; Growth Strategists
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Career Pathfinders
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Hackathon Heroes
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Legal Eagles
            </span>
            <span className="pill ink">
              <i style={{ "background": "#E3165B" }} />
              Green Innovators
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Market Launch Experts
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Internship Seekers
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Design &amp; Innovation Hub
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Channel Partner Connect
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Young Leaders Forum
            </span>
            {" "}
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Campus Innovators
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Sales &amp; Growth Strategists
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Career Pathfinders
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Hackathon Heroes
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Legal Eagles
            </span>
            <span className="pill ink">
              <i style={{ "background": "#E3165B" }} />
              Green Innovators
            </span>
            <span className="pill">
              <i style={{ "background": "#F7891F" }} />
              Market Launch Experts
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Internship Seekers
            </span>
            <span className="pill">
              <i style={{ "background": "#E3165B" }} />
              Design &amp; Innovation Hub
            </span>
            <span className="pill ink">
              <i style={{ "background": "#F7891F" }} />
              Channel Partner Connect
            </span>
            <span className="pill">
              <i style={{ "background": "#17131C" }} />
              Young Leaders Forum
            </span>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="download" id="download">
        <svg className="rings" viewBox="0 0 1100 1100" aria-hidden="true">
          <g fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            <circle cx="550" cy="550" r="160" />
            <circle cx="550" cy="550" r="270" />
            <circle cx="550" cy="550" r="380" strokeDasharray="3 9" />
            <circle cx="550" cy="550" r="500" />
          </g>
          <circle cx="550" cy="550" r="120" fill="#F7891F" opacity="0.55" />
        </svg>
        {" "}
        <div className="wrap dl-grid">
          <div className="dl-copy reveal">
            <span className="label" style={{ "color": "#FFFFFF" }}>
              06 / Get the app
            </span>
            {" "}
            <h2>
              Your next opportunity is a blink away.
            </h2>
            {" "}
            <p>
              Download BlinkConnect and start building your network today. Available on iOS and Android.
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
