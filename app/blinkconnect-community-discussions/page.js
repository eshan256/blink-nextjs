import Link from 'next/link';
import { SITE, FORMS } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "BlinkConnect Community and Discussions | 45 Professional Communities"
  },
  "description": "Real conversations with real professionals. Explore 45 BlinkConnect communities, join private discussions and accelerate your career in the app.",
  "alternates": {
    "canonical": "/blinkconnect-community-discussions/"
  },
  "openGraph": {
    "title": "BlinkConnect Community and Discussions | 45 Professional Communities",
    "description": "Real conversations with real professionals. Explore 45 BlinkConnect communities, join private discussions and accelerate your career in the app.",
    "url": "/blinkconnect-community-discussions/"
  }
};

export default function CommunityPage() {
  return (
    <div className="pg-community">
    <main id="top">
      <JsonLd data={breadcrumbs('/blinkconnect-community-discussions/')} />
      <section className="g-hero on-dark">
        <div className="g-hero-grid cm">
          <div className="g-hero-copy">
            <span className="label">
              Community
            </span>
            {" "}
            <h1>
              BlinkConnect Community{" "}
              <em>
                &amp; Discussions
              </em>
            </h1>
            {" "}
            <p className="tagline">
              Real conversations with real professionals.
            </p>
            {" "}
            <p className="lead">
              Connect with industry leaders, join private discussions, and accelerate your career. Experience the full power of networking exclusively on our mobile app.
            </p>
            {" "}
            <div className="g-cta">
              <a href="#join" className="btn btn-brand">
                Join the discussions
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
          <div className="thread-wrap" aria-hidden="true">
            <div className="thread">
              <div className="th-card">
                <div className="th-head">
                  <span className="grp">
                    <span className="gic">
                      <svg className="i" width="20" height="20" aria-hidden="true">
                        <use href="#i-rocket" />
                      </svg>
                    </span>
                    <span>
                      <strong>
                        Startup Central
                      </strong>
                      <small>
                        <svg className="i" width="13" height="13" aria-hidden="true">
                          <use href="#i-lock" />
                        </svg>
                        Private discussion
                      </small>
                    </span>
                  </span>
                  <span className="live-pill">
                    <i />
                    Active now
                  </span>
                </div>
                {" "}
                <div className="post-a">
                  <span className="av" style={{ "background": "var(--brand)" }}>
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
                </div>
                {" "}
                <p className="topic-q">
                  What is one go-to-market lesson you wish you had learned earlier?
                </p>
                {" "}
                <span className="replies">
                  <svg className="i" width="16" height="16" aria-hidden="true">
                    <use href="#i-message" />
                  </svg>
                  4816 replies
                </span>
              </div>
              {" "}
              <div className="reply">
                <span className="av" style={{ "background": "var(--accent)", "color": "var(--ink)" }}>
                  MB
                </span>
                <p>
                  <b>
                    Michael Brooks
                  </b>
                  Talk to 20 customers before you write a single line of marketing copy.
                </p>
              </div>
              {" "}
              <div className="reply">
                <span className="av" style={{ "background": "#3A3140" }}>
                  SM
                </span>
                <p>
                  <b>
                    Sarah Mitchell
                  </b>
                  Pick one channel and own it. Spreading thin early cost us a year.
                </p>
              </div>
              {" "}
              <div className="composer">
                <span>
                  Add to the discussion
                </span>
                <i>
                  <svg className="i" width="16" height="16" aria-hidden="true">
                    <use href="#i-send" />
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="perks">
          <div className="wrap">
            <div className="perk">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
              </span>
              <div>
                <h3>
                  Industry leaders
                </h3>
                <p>
                  Learn from and connect with experienced professionals.
                </p>
              </div>
            </div>
            {" "}
            <div className="perk">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-lock" />
                </svg>
              </span>
              <div>
                <h3>
                  Private discussions
                </h3>
                <p>
                  Focused conversations with people who share your goals.
                </p>
              </div>
            </div>
            {" "}
            <div className="perk">
              <span className="ic bg-soft">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <div>
                <h3>
                  Career acceleration
                </h3>
                <p>
                  Turn one good conversation into your next opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="comms" id="communities">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                01 / Explore communities
              </span>
              {" "}
              <h2 className="display">
                Find your people.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Dive into specialized discussions tailored to your industry and interests.
            </p>
          </div>
          {" "}
          <div className="toolbar">
            <div className="tabs" role="group" aria-label="Filter communities by topic">
              <button className="tab active" type="button" data-filter="all" aria-pressed="true">
                All{" "}
                <span>
                  45
                </span>
              </button>
              <button className="tab" type="button" data-filter="startups" aria-pressed="false">
                Startups and funding{" "}
                <span>
                  7
                </span>
              </button>
              <button className="tab" type="button" data-filter="growth" aria-pressed="false">
                Go-to-market and business{" "}
                <span>
                  11
                </span>
              </button>
              <button className="tab" type="button" data-filter="tech" aria-pressed="false">
                Tech and product{" "}
                <span>
                  10
                </span>
              </button>
              <button className="tab" type="button" data-filter="careers" aria-pressed="false">
                Careers and students{" "}
                <span>
                  10
                </span>
              </button>
              <button className="tab" type="button" data-filter="lifestyle" aria-pressed="false">
                Lifestyle and interests{" "}
                <span>
                  7
                </span>
              </button>
            </div>
            {" "}
            <div className="search">
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-search" />
              </svg>
              <label htmlFor="comm-search" style={{ "position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)" }}>
                Search communities
              </label>
              <input id="comm-search" type="search" placeholder="Search communities" autoComplete="off" />
            </div>
          </div>
          {" "}
          <ul className="comm-grid" id="comm-grid">
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Startup Central
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Investor Insights
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Co-Founder Connect
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Funding &amp; Finance Forum
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  MVP Makers
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Women Entrepreneurs Circle
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="startups">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-rocket" />
                </svg>
              </span>
              <span>
                <strong>
                  Entrepreneurship
                </strong>
                <small>
                  Startups and funding
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Marketing Mavericks
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Sales &amp; Growth Strategists
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Global Market Connect
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Partnership Builders
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Market Launch Experts
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Channel Partner Connect
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Global Expansion Hub
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Innovation Commercializers
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Business and Management
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  HR &amp; People Ops
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="growth">
              <span className="ic bg-brand">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <span>
                <strong>
                  Legal Eagles
                </strong>
                <small>
                  Go-to-market and business
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Tech Titans
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  AI &amp; Future Tech
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Product Managers Guild
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Cloud &amp; DevOps Enthusiasts
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Data Wizards
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Design &amp; Innovation Hub
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Green Innovators
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Technology and Innovation
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  STEM Innovators Club
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="tech">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cpu" />
                </svg>
              </span>
              <span>
                <strong>
                  Hackathon Heroes
                </strong>
                <small>
                  Tech and product
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Campus Innovators
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Internship Seekers
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Young Leaders Forum
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Job Hunters Network
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Skill Sharers
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Freelance Connect
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Career Pathfinders
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Startup Intern Connect
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Project Showcase Zone
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="careers">
              <span className="ic bg-accent">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-cap" />
                </svg>
              </span>
              <span>
                <strong>
                  Professional Development
                </strong>
                <small>
                  Careers and students
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Health and Wellness
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Personal Finance and Wealth
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Travel and Exploration
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Food and Drink
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Education and Learning
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Creative Industries
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
            <li className="comm" data-group="lifestyle">
              <span className="ic bg-ink">
                <svg className="i" width="20" height="20" aria-hidden="true">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <span>
                <strong>
                  Content Creators Collective
                </strong>
                <small>
                  Lifestyle and interests
                </small>
              </span>
            </li>
          </ul>
          {" "}
          <p className="comm-empty" id="comm-empty" role="status">
            No communities match that search.
          </p>
          {" "}
          <div className="comm-note">
            <p>
              <strong>
                All communities live in the BlinkConnect app.
              </strong>
              {" "}Download it to join the ones that fit you.
            </p>
            {" "}
            <a href="#download" className="btn btn-brand">
              <svg className="i" width="18" height="18" aria-hidden="true">
                <use href="#i-download" />
              </svg>
              Get the app
            </a>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="apply" id="join">
        <div className="apply-side on-dark">
          <span className="label">
            02 / Join the conversation
          </span>
          {" "}
          <h2>
            Join Blink Connect and start discussions.
          </h2>
          {" "}
          <p>
            Take your Go-To-Market strategies to the next level. Connect with high-potential startups and investors, expand your business, and accelerate growth, all on one platform.
          </p>
          {" "}
          <div className="quote-card">
            One discussion can change the way you think.
          </div>
        </div>
        {" "}
        <div className="apply-form">
          <div id="form-wrap">
            <h2 className="ft">
              Connect with us
            </h2>
            {" "}
            <p className="form-sub">
              Tell us about you and your business, and our team will be in touch. Fields marked * are required.
            </p>
            {" "}
            {" "}
            <form id="join-form" className="form-grid" noValidate data-endpoint={FORMS.community} data-mailto={SITE.emails.support}>
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
              <div className="field">
                <label htmlFor="gtm_experience">
                  Experience in go-to-market strategy
                  <span className="opt">
                    (optional)
                  </span>
                </label>
                {" "}
                <input className="input" id="gtm_experience" name="gtm_experience" type="text" placeholder="e.g. 8 years" />
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
                  By sending this form, you agree that we may use your details to contact you, as described in our{" "}
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
                    Join BlinkConnect communities
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
              Thanks for reaching out.
            </h2>
            {" "}
            <p id="success-text">
              Our team will be in touch at the email address you provided. In the meantime, download the app to explore the communities.
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
              Join the discussions in the app.
            </h2>
            {" "}
            <p>
              Download BlinkConnect to join communities, start conversations and grow your network.
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
