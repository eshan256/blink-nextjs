import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "How BlinkConnect Works | From Download to Your Next Opportunity"
  },
  "description": "See how BlinkConnect works: download the app, build your profile, get matched by AI and connect with professionals, job opportunities and resources.",
  "alternates": {
    "canonical": "/how-blinkconnect-works/"
  },
  "openGraph": {
    "title": "How BlinkConnect Works | From Download to Your Next Opportunity",
    "description": "See how BlinkConnect works: download the app, build your profile, get matched by AI and connect with professionals, job opportunities and resources.",
    "url": "/how-blinkconnect-works/"
  }
};

export default function HowPage() {
  return (
    <div className="pg-how">
    <main id="top">
      <JsonLd data={breadcrumbs('/how-blinkconnect-works/')} />
      <section className="h-hero on-dark">
        <div className="wrap">
          <div className="h-top">
            <div className="h-top-l">
              <span className="label">
                How it works
              </span>
              {" "}
              <h1>
                How BlinkConnect{" "}
                <em>
                  works.
                </em>
              </h1>
            </div>
            {" "}
            <div className="h-top-r">
              <p>
                BlinkConnect is an AI-powered professional networking platform that connects people from all backgrounds, including college students, professionals and entrepreneurs. Smart matching connects you with relevant professionals, job opportunities and resources tailored to your needs and interests.
              </p>
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
          </div>
          {" "}
          <div className="video-wrap">
            <div className="video" data-vimeo-id={SITE.vimeo.id || 'YOUR_VIMEO_ID'} data-vimeo-hash={SITE.vimeo.hash}>
              <button className="video-poster" type="button" aria-label="Play video: See BlinkConnect in action">
                <img src="/images/video-poster.jpg" width="1600" height="857" alt="" />
                {" "}
                <span className="play" aria-hidden="true">
                  <svg width="38" height="38" viewBox="0 0 24 24">
                    <path d="M7 4.5v15l12.5-7.5z" />
                  </svg>
                </span>
                {" "}
                <span className="video-meta">
                  <span>
                    <b>
                      See BlinkConnect in action
                    </b>
                    <small className="vm-sub">
                      Watch how founders, students and professionals connect in a blink
                    </small>
                  </span>
                  <span className="pill-v">
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-play" />
                    </svg>
                    Watch the video
                  </span>
                </span>
              </button>
            </div>
            {" "}
            <noscript>
              <p className="video-caption">
                Watch the video on{" "}
                <a href={`https://vimeo.com/${SITE.vimeo.id}/${SITE.vimeo.hash}`}>
                  Vimeo
                </a>
                .
              </p>
            </noscript>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <section className="steps-sec" id="steps">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                01 / Getting started
              </span>
              {" "}
              <h2 className="display">
                From download to your next opportunity.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              Four simple steps, all inside the BlinkConnect app.
            </p>
          </div>
          {" "}
          <ol className="steps4 reveal">
            <li className="st">
              <div className="st-art" aria-hidden="true">
                <div className="a-stores">
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
              <div className="st-body">
                <span className="st-dot">
                  01
                </span>
                <h3>
                  Download the app
                </h3>
                <p>
                  Get BlinkConnect from the App Store or Google Play and create your account.
                </p>
              </div>
            </li>
            <li className="st">
              <div className="st-art" aria-hidden="true">
                <div className="a-types">
                  <span>
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-rocket" />
                    </svg>
                    Founder
                  </span>
                  <span>
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-pie" />
                    </svg>
                    Investor
                  </span>
                  <span className="on">
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-link" />
                    </svg>
                    GTM Partner
                  </span>
                  <span>
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-briefcase" />
                    </svg>
                    Professional
                  </span>
                  <span>
                    <svg className="i" width="14" height="14" aria-hidden="true">
                      <use href="#i-cap" />
                    </svg>
                    Student
                  </span>
                </div>
              </div>
              {" "}
              <div className="st-body">
                <span className="st-dot">
                  02
                </span>
                <h3>
                  Build your profile
                </h3>
                <p>
                  Choose your profile type and add your skills, interests, goals and what you are looking for.
                </p>
              </div>
            </li>
            <li className="st hl">
              <div className="st-art" aria-hidden="true">
                <div className="a-match">
                  <svg className="ln" viewBox="0 0 240 200">
                    <path d="M80 100 H160" />
                  </svg>
                  <span className="av l">
                    EC
                  </span>
                  <span className="mid">
                    <svg className="i" width="24" height="24" aria-hidden="true">
                      <use href="#i-sparkle" />
                    </svg>
                  </span>
                  <span className="av r">
                    MB
                  </span>
                  <span className="badge">
                    New match
                  </span>
                </div>
              </div>
              {" "}
              <div className="st-body">
                <span className="st-dot">
                  03
                </span>
                <span className="ai">
                  AI-powered
                </span>
                <h3>
                  Get matched
                </h3>
                <p>
                  Our algorithms match you with relevant professionals, job opportunities and resources.
                </p>
              </div>
            </li>
            <li className="st">
              <div className="st-art" aria-hidden="true">
                <div className="a-chat">
                  <span className="b t">
                    Great to connect! Coffee chat this week?
                  </span>
                  <span className="b m">
                    Yes, Thursday works.
                  </span>
                  <span className="ev">
                    <i>
                      <svg className="i" width="16" height="16" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                    </i>
                    <span>
                      Founders &amp; Investors Mixer
                      <small>
                        Oct 14, 6:00 PM
                      </small>
                    </span>
                  </span>
                </div>
              </div>
              {" "}
              <div className="st-body">
                <span className="st-dot">
                  04
                </span>
                <h3>
                  Connect and grow
                </h3>
                <p>
                  Message your matches, join events and collaborate with a community that helps you grow.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      {" "}
      {" "}
      <section className="stu" id="students">
        <div className="stu-art" aria-hidden="true">
          <div className="kit">
            <div className="kit-h">
              <strong>
                Career toolkit
              </strong>
              <span>
                For students
              </span>
            </div>
            {" "}
            <div className="kit-row">
              <span className="ic bg-brand">
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-file" />
                </svg>
              </span>
              <span>
                <b>
                  Resume builder
                </b>
                <small>
                  Almost there, add one more project
                </small>
                <span className="bar">
                  <i />
                </span>
              </span>
            </div>
            {" "}
            <div className="kit-row">
              <span className="ic bg-accent">
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-mic" />
                </svg>
              </span>
              <span>
                <b>
                  Interview prep
                </b>
                <small>
                  Practice common questions
                </small>
              </span>
            </div>
            {" "}
            <div className="kit-row">
              <span className="ic bg-ink">
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-bolt2" />
                </svg>
              </span>
              <span>
                <b>
                  Skills training
                </b>
                <small>
                  Essential skills for your first role
                </small>
              </span>
            </div>
          </div>
          {" "}
          <img className="stu-photo" src="/images/student.jpg" width="372" height="602" loading="lazy" alt="" />
          {" "}
          <div className="newm">
            <span className="newm-h">
              New match for you
            </span>
            {" "}
            <div className="newm-p">
              <span className="av">
                SM
              </span>
              <span>
                <b>
                  Sarah Mitchell
                </b>
                <small>
                  Senior Product Manager, hiring interns
                </small>
              </span>
            </div>
            {" "}
            <div className="newm-a">
              <span>
                Connect
              </span>
              <span>
                View profile
              </span>
            </div>
          </div>
        </div>
        {" "}
        <div className="stu-copy reveal">
          <span className="label">
            02 / Benefits for college students
          </span>
          {" "}
          <h2>
            Start your career with the right connections.
          </h2>
          {" "}
          <p>
            We understand the challenges college students face in today's competitive job market. That is why we designed BlinkConnect to give you a head start.
          </p>
          {" "}
          <ul className="benefits">
            <li>
              <span className="ic bg-brand">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-file" />
                </svg>
              </span>
              <div>
                <h3>
                  Career development resources
                </h3>
                <p>
                  Access resume building tools, interview preparation and essential skills training.
                </p>
              </div>
            </li>
            <li>
              <span className="ic bg-accent">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-users" />
                </svg>
              </span>
              <div>
                <h3>
                  Networking opportunities
                </h3>
                <p>
                  Connect with professionals in your desired field and land internships or job opportunities.
                </p>
              </div>
            </li>
            <li>
              <span className="ic bg-ink">
                <svg className="i" width="22" height="22" aria-hidden="true">
                  <use href="#i-trend" />
                </svg>
              </span>
              <div>
                <h3>
                  Industry insights
                </h3>
                <p>
                  Stay informed about the latest industry trends and news.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {" "}
      {" "}
      <section className="apart on-dark" id="apart">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="label">
                03 / What sets us apart
              </span>
              {" "}
              <h2 className="display">
                More than a professional networking platform.
              </h2>
            </div>
            {" "}
            <p className="lead-l">
              BlinkConnect combines smart technology with real community, so every connection moves you forward.
            </p>
          </div>
          {" "}
          <div className="cols3">
            <article className="col reveal">
              <span className="big" aria-hidden="true">
                01
              </span>
              <span className="ic bg-brand">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-sparkle" />
                </svg>
              </span>
              <h3>
                AI-powered matchmaking
              </h3>
              <p>
                Our advanced algorithms connect you with relevant professionals, job opportunities and resources.
              </p>
              <ul>
                <li>
                  Professionals
                </li>
                <li>
                  Job opportunities
                </li>
                <li>
                  Resources
                </li>
              </ul>
            </article>
            {" "}
            <article className="col reveal">
              <span className="big" aria-hidden="true">
                02
              </span>
              <span className="ic bg-accent">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-calendar" />
                </svg>
              </span>
              <h3>
                Exclusive events
              </h3>
              <p>
                Attend webinars, workshops and conferences that bring members together to network and grow.
              </p>
              <ul>
                <li>
                  Webinars
                </li>
                <li>
                  Workshops
                </li>
                <li>
                  Conferences
                </li>
              </ul>
            </article>
            {" "}
            <article className="col reveal">
              <span className="big" aria-hidden="true">
                03
              </span>
              <span className="ic bg-soft">
                <svg className="i" width="26" height="26" aria-hidden="true">
                  <use href="#i-users" />
                </svg>
              </span>
              <h3>
                Community-driven
              </h3>
              <p>
                Join a supportive community where members share knowledge, ask questions and collaborate on projects.
              </p>
              <ul>
                <li>
                  Share knowledge
                </li>
                <li>
                  Ask questions
                </li>
                <li>
                  Collaborate
                </li>
              </ul>
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
              Get started today.
            </h2>
            {" "}
            <p>
              Ready to take your career to the next level? Download BlinkConnect and start connecting with professionals, accessing career resources and growing your network.
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
