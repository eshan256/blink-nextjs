import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "BlinkConnect Features | Profiles, Events, Messaging and AI Matching"
  },
  "description": "Explore BlinkConnect features: professional profiles, industry events, real-time messaging, the Blink Feed and AI-powered matching for founders, investors and professionals.",
  "alternates": {
    "canonical": "/features/"
  },
  "openGraph": {
    "title": "BlinkConnect Features | Profiles, Events, Messaging and AI Matching",
    "description": "Explore BlinkConnect features: professional profiles, industry events, real-time messaging, the Blink Feed and AI-powered matching for founders, investors and professionals.",
    "url": "/features/"
  }
};

export default function FeaturesPage() {
  return (
    <div className="pg-features">
    <main id="top">
      <JsonLd data={breadcrumbs('/features/')} />
      <section className="f-hero on-dark">
        <div className="wrap f-hero-grid">
          <div className="f-hero-copy">
            <span className="label">
              BlinkConnect features
            </span>
            {" "}
            <h1>
              Connect{" "}
              <em>
                with purpose.
              </em>
            </h1>
            {" "}
            <p className="lead">
              Join a community of professionals where meaningful connections pave the way for collaboration and growth.
            </p>
          </div>
          {" "}
          <nav className="index" aria-label="Features on this page">
            <a href="#profiles">
              <span className="n">
                01
              </span>
              <span>
                <b>
                  Profiles
                </b>
                <small>
                  Tailor your professional persona
                </small>
              </span>
              <span className="go">
                <svg className="i" width="18" height="18" style={{ "transform": "rotate(90deg)" }} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </a>
            {" "}
            <a href="#events">
              <span className="n">
                02
              </span>
              <span>
                <b>
                  Events
                </b>
                <small>
                  Webinars, workshops and meetups
                </small>
              </span>
              <span className="go">
                <svg className="i" width="18" height="18" style={{ "transform": "rotate(90deg)" }} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </a>
            {" "}
            <a href="#messaging">
              <span className="n">
                03
              </span>
              <span>
                <b>
                  Messaging
                </b>
                <small>
                  Real-time, direct conversations
                </small>
              </span>
              <span className="go">
                <svg className="i" width="18" height="18" style={{ "transform": "rotate(90deg)" }} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </a>
            {" "}
            <a href="#blink-feed">
              <span className="n">
                04
              </span>
              <span>
                <b>
                  Blink Feed
                </b>
                <small>
                  Share ideas, spark conversations
                </small>
              </span>
              <span className="go">
                <svg className="i" width="18" height="18" style={{ "transform": "rotate(90deg)" }} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </a>
            {" "}
            <a href="#more">
              <span className="n">
                05
              </span>
              <span>
                <b>
                  AI matching
                </b>
                <small>
                  Smart tools behind every connection
                </small>
              </span>
              <span className="go">
                <svg className="i" width="18" height="18" style={{ "transform": "rotate(90deg)" }} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </a>
          </nav>
        </div>
      </section>
      {" "}
      <figure className="strip" style={{ "margin": "0" }}>
        <img src="/images/community-group.jpg" width="2000" height="335" alt="A group of smiling young professionals taking a selfie together outdoors" />
        {" "}
        <figcaption>
          <i />
          A community of ambitious professionals
        </figcaption>
      </figure>
      {" "}
      <nav className="fnav" aria-label="Jump to a feature">
        <div className="wrap">
          <a href="#profiles">
            <span>
              01
            </span>
            Profiles
          </a>
          {" "}
          <a href="#events">
            <span>
              02
            </span>
            Events
          </a>
          {" "}
          <a href="#messaging">
            <span>
              03
            </span>
            Messaging
          </a>
          {" "}
          <a href="#blink-feed">
            <span>
              04
            </span>
            Blink Feed
          </a>
          {" "}
          <a href="#more">
            <span>
              05
            </span>
            AI matching
          </a>
          {" "}
          <a href="#download" className="fnav-cta">
            Get the app
            <svg className="i" width="16" height="16" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>
      </nav>
      {" "}
      {" "}
      <section className="feat" id="profiles">
        <div className="feat-copy reveal">
          <span className="feat-num" aria-hidden="true">
            01
          </span>
          {" "}
          <span className="label">
            Profiles
          </span>
          {" "}
          <h2>
            Tailor your professional persona.
          </h2>
          {" "}
          <p>
            Showcase your skills, experience and professional interests with a customizable profile. A rich, detailed profile helps you stand out in a network of ambitious people.
          </p>
          {" "}
          <ul className="ticks">
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Highlight your unique strengths, skills and experience
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Share your interests and what you are looking for
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Make it easy for like-minded professionals to discover you
            </li>
          </ul>
        </div>
        {" "}
        <div className="feat-art art-profile" aria-hidden="true">
          <svg className="rings" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="98" fill="none" stroke="#E7DFD9" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#E7DFD9" strokeWidth="0.5" strokeDasharray="2 3" />
          </svg>
          {" "}
          <div className="pf-stage">
            <div className="ph">
              <img src="/images/app-profile-screen.png" width="1290" height="2796" alt="" />
            </div>
            {" "}
            <div className="pf-card">
              <div className="who">
                <span className="av">
                  EC
                </span>
                <span>
                  <b>
                    Emily Carter
                  </b>
                  <small>
                    Founder, HealthTech startup
                  </small>
                </span>
                <span className="badge">
                  Founder
                </span>
              </div>
              {" "}
              <div>
                <h4>
                  Skills
                </h4>
                <div className="tags">
                  <span>
                    Product strategy
                  </span>
                  <span>
                    Fundraising
                  </span>
                  <span>
                    B2B SaaS
                  </span>
                </div>
              </div>
              {" "}
              <div>
                <h4>
                  Experience
                </h4>
                <div className="xp">
                  <div>
                    <i />
                    <span>
                      <b>
                        Founder &amp; CEO
                      </b>
                      {" "}
                      <small>
                        HealthTech startup
                      </small>
                    </span>
                  </div>
                  <div>
                    <i />
                    <span>
                      <b>
                        Product Lead
                      </b>
                      {" "}
                      <small>
                        Fintech company
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              <div>
                <h4>
                  Looking for
                </h4>
                <div className="tags hot">
                  <span>
                    Seed investors
                  </span>
                  <span>
                    GTM partners
                  </span>
                  <span>
                    Advisors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="feat flip on-dark" id="events" style={{ "background": "var(--ink)", "color": "#fff" }}>
        <div className="feat-copy reveal">
          <span className="feat-num" aria-hidden="true">
            02
          </span>
          {" "}
          <span className="label">
            Events
          </span>
          {" "}
          <h2>
            Stay engaged with industry events.
          </h2>
          {" "}
          <p>
            Never miss an opportunity to grow and network. The interactive events calendar keeps you updated on the latest webinars, workshops and meetups relevant to your industry.
          </p>
          {" "}
          <ul className="ticks">
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Webinars, workshops and meetups in one calendar
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              RSVP or join virtual events with a single click
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Stay connected with trends and peers
            </li>
          </ul>
        </div>
        {" "}
        <div className="feat-art art-events" aria-hidden="true">
          <div className="ev">
            <div className="ev-top">
              <b>
                Events for you
              </b>
              <span>
                October
              </span>
            </div>
            {" "}
            <div className="wk">
              <div className="">
                <small>
                  Mon
                </small>
                <b>
                  12
                </b>
              </div>
              <div className="">
                <small>
                  Tue
                </small>
                <b>
                  13
                </b>
              </div>
              <div className="on has">
                <small>
                  Wed
                </small>
                <b>
                  14
                </b>
              </div>
              <div className="">
                <small>
                  Thu
                </small>
                <b>
                  15
                </b>
              </div>
              <div className="has">
                <small>
                  Fri
                </small>
                <b>
                  16
                </b>
              </div>
              <div className="">
                <small>
                  Sat
                </small>
                <b>
                  17
                </b>
              </div>
              <div className="">
                <small>
                  Sun
                </small>
                <b>
                  18
                </b>
              </div>
            </div>
            {" "}
            <div className="ecard">
              <span className="date">
                <small>
                  OCT
                </small>
                <strong>
                  14
                </strong>
              </span>
              <span>
                <span className="t">
                  Meetup
                </span>
                <b>
                  Founders &amp; Investors Mixer
                </b>
                <small className="m">
                  <svg className="i" width="14" height="14" aria-hidden="true">
                    <use href="#i-pinmap" />
                  </svg>
                  6:00 PM, in person
                </small>
              </span>
              <span className="act">
                RSVP
              </span>
            </div>
            {" "}
            <div className="ecard">
              <span className="date">
                <small>
                  OCT
                </small>
                <strong>
                  14
                </strong>
              </span>
              <span>
                <span className="t">
                  Webinar
                </span>
                <b>
                  Scaling go-to-market
                </b>
                <small className="m">
                  <svg className="i" width="14" height="14" aria-hidden="true">
                    <use href="#i-video" />
                  </svg>
                  8:30 PM, virtual
                </small>
              </span>
              <span className="act join">
                Join
              </span>
            </div>
            {" "}
            <div className="ecard">
              <span className="date">
                <small>
                  OCT
                </small>
                <strong>
                  16
                </strong>
              </span>
              <span>
                <span className="t">
                  Workshop
                </span>
                <b>
                  Pitch deck clinic
                </b>
                <small className="m">
                  <svg className="i" width="14" height="14" aria-hidden="true">
                    <use href="#i-video" />
                  </svg>
                  11:00 AM, virtual
                </small>
              </span>
              <span className="act">
                RSVP
              </span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="feat" id="messaging">
        <div className="feat-copy reveal">
          <span className="feat-num" aria-hidden="true">
            03
          </span>
          {" "}
          <span className="label">
            Messaging
          </span>
          {" "}
          <h2>
            Communicate seamlessly.
          </h2>
          {" "}
          <p>
            Engage in meaningful conversations without barriers. Real-time messaging lets you communicate instantly, build relationships and collaborate effortlessly.
          </p>
          {" "}
          <ul className="ticks">
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Real-time messaging for instant communication
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Perfect for quick queries or in-depth discussions
            </li>
            <li>
              <span className="ck">
                <svg className="i" width="16" height="16" style={{ "strokeWidth": "2.6" }} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Direct conversations, without algorithmic noise
            </li>
          </ul>
        </div>
        {" "}
        <div className="feat-art art-chat" aria-hidden="true">
          <div className="chat-float a">
            <span className="ic">
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-message" />
              </svg>
            </span>
            Real-time
          </div>
          {" "}
          <div className="chat">
            <div className="chat-h">
              <span className="av">
                MB
              </span>
              <span>
                <b>
                  Michael Brooks
                </b>
                <small>
                  Online
                </small>
              </span>
            </div>
            {" "}
            <div className="chat-b">
              <span className="day-sep">
                Today
              </span>
              {" "}
              <div className="bub them">
                Hi Emily, enjoyed your post on mentors vs advisors. Are you raising this quarter?
              </div>
              {" "}
              <div className="bub me">
                Thanks Michael! Yes, we are opening our seed round next month.
              </div>
              {" "}
              <div className="bub them">
                Great timing. Could we set up a quick call this week?
              </div>
              {" "}
              <div className="bub me">
                Absolutely. Thursday at 4 PM works for me.
              </div>
            </div>
            {" "}
            <div className="chat-f">
              <span>
                Write a message
              </span>
              <i>
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-send" />
                </svg>
              </i>
            </div>
          </div>
          {" "}
          <div className="chat-float b">
            <span className="ic">
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-shield" />
              </svg>
            </span>
            No algorithmic noise
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="feat flip feed" id="blink-feed">
        <div className="feat-copy reveal">
          <span className="feat-num" aria-hidden="true">
            04
          </span>
          {" "}
          <span className="label">
            Blink Feed
          </span>
          {" "}
          <h2>
            Share ideas. Spark conversations.
          </h2>
          {" "}
          <p>
            The Blink Feed is where the community thinks out loud. Post your perspective, discover what others are discussing and turn a good idea into a new connection.
          </p>
          {" "}
          <ul className="steps3">
            <li>
              <span className="ic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-feed" />
                </svg>
              </span>
              <div>
                <h3>
                  Post your perspective
                </h3>
                <p>
                  Share thoughts, lessons and ideas with professionals who care about the same things.
                </p>
              </div>
            </li>
            <li>
              <span className="ic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-tag" />
                </svg>
              </span>
              <div>
                <h3>
                  Organized by topic
                </h3>
                <p>
                  Posts are tagged by topic, so it is easy to find the conversations you want.
                </p>
              </div>
            </li>
            <li>
              <span className="ic bg-ink">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-heart" />
                </svg>
              </span>
              <div>
                <h3>
                  React and connect
                </h3>
                <p>
                  Like a post, start a conversation and connect with the people behind it.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {" "}
        <figure className="feat-art" style={{ "margin": "0" }}>
          <img src="/images/app-blink-feed.jpg" width="1600" height="1058" loading="lazy" alt="The Blink Feed in the BlinkConnect app on a phone, showing member posts tagged by topic with likes" />
          {" "}
          <figcaption>
            <span className="live" />
            Blink Feed, live in the app
          </figcaption>
        </figure>
      </section>
      {" "}
      {" "}
      <section className="more on-dark" id="more">
        <div className="wrap">
          <div className="more-head reveal">
            <div>
              <span className="label">
                05 / And there is more
              </span>
              {" "}
              <h2 className="display">
                Smart tools that work behind every connection.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              BlinkConnect uses AI and machine learning to bring the right people, ideas and opportunities to you.
            </p>
          </div>
          {" "}
          <div className="grid6 reveal">
            <article className="tool">
              <span className="ic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-sparkle" />
                </svg>
              </span>
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
            <article className="tool">
              <span className="ic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-target" />
                </svg>
              </span>
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
            <article className="tool">
              <span className="ic bg-soft">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <h3>
                Industry insights
              </h3>
              <p>
                Stay updated on the latest trends in AI, tech and more, curated for your interests.
              </p>
            </article>
            {" "}
            <article className="tool">
              <span className="ic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-link" />
                </svg>
              </span>
              <h3>
                GTM Partner profiles
              </h3>
              <p>
                Sign up as a GTM Partner and connect instantly with investors, founders and other businesses.
              </p>
              <Link href="/blink-connect-gtm-partners-opportunities/">
                Connect Instantly as GTM Partner
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </article>
            {" "}
            <article className="tool">
              <span className="ic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-users" />
                </svg>
              </span>
              <h3>
                Community discussions
              </h3>
              <p>
                Join discussions, share insights and explore collaboration opportunities with your community.
              </p>
              <Link href="/blinkconnect-community-discussions/">
                Explore communities
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </article>
            {" "}
            <article className="tool">
              <span className="ic bg-soft">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
              </span>
              <h3>
                Trusted profiles
              </h3>
              <p>
                Clear identity and purpose in every profile, in a community focused on respect and professionalism.
              </p>
            </article>
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
              All of this, in one app.
            </h2>
            {" "}
            <p>
              Download BlinkConnect and start connecting with purpose today.
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
