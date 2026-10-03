# BlinkConnect website (Next.js)

The BlinkConnect marketing site (version 2 design: full-width, dark headers, graphic sections), built with Next.js (App Router) and ready to deploy on Vercel.

Every page is pre-rendered as static HTML, so the site is fast and needs no database.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node.js 18.18 or newer.

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New > Project** and import the repository. Vercel detects Next.js automatically; no build settings need changing.
3. Add the form environment variables below (optional, but needed for forms to submit to a service).
4. Deploy, then add your domain (`blinkconnect.app`) under **Settings > Domains** and update your DNS as Vercel instructs.

## Where to change things

| What | Where |
| --- | --- |
| Store links, emails, Vimeo video | `lib/site.js` (`SITE`) |
| Menu and footer links | `lib/site.js` (`NAV`, `FOOTER`) |
| Header, footer, icons | `components/` |
| A page's content | `app/<page>/page.js` |
| A page's styles | `app/<page>/page.css` (scoped to that page only) |
| A page's interactive behavior (forms, search, filters) | `app/<page>/page-script.js` |
| Colors, fonts, buttons, header and footer styles | `app/globals.css` |
| Browser tab icon | `app/icon.png` |
| Images | `public/images/` |
| Redirects from old WordPress URLs | `next.config.mjs` |

Email placeholders such as `[YOUR SUPPORT EMAIL]`, `[EMAIL ADDRESS]` and `[CHILD SAFETY EMAIL]` show on the site until you replace them in `lib/site.js`.

The Support page can open with a topic already chosen, which is handy for linking from the app: `/support/?topic=delete` (also `user`, `chat` and `account`). Any FAQ answer can be linked directly, for example `/faqs/#can-i-use-blink-connect-for-free`.

## Forms

The Support, Contact, Community, GTM Partners, Startups and Investors forms each post to a URL you choose, for example a [Formspree](https://formspree.io), Basin or Getform endpoint. Set these in Vercel under **Settings > Environment Variables**:

| Variable | Form |
| --- | --- |
| `NEXT_PUBLIC_FORM_SUPPORT` | Support |
| `NEXT_PUBLIC_FORM_CONTACT` | Contact |
| `NEXT_PUBLIC_FORM_COMMUNITY` | Community (Connect with us) |
| `NEXT_PUBLIC_FORM_GTM_PARTNERS` | GTM Partners (Apply now) |
| `NEXT_PUBLIC_FORM_STARTUPS` | Startups (Apply now) |
| `NEXT_PUBLIC_FORM_INVESTORS` | Investors (Investor details) |

Redeploy after changing them. Until a form has an endpoint, pressing Send opens the visitor's email app, addressed to the support email in `lib/site.js`.

## Pages and URLs

The pages keep the same addresses as the current WordPress site, so existing links and search results keep working.

| Page | URL |
| --- | --- |
| Home | `/` |
| About | `/about/` |
| Features | `/features/` |
| How It Works | `/how-blinkconnect-works/` |
| Community | `/blinkconnect-community-discussions/` |
| For GTM Partners | `/blink-connect-gtm-partners-opportunities/` |
| For Startups | `/blink-connect-startups-gtm-growth-opportunities/` |
| For Investors | `/blink-connect-investors-curated-startups-opportunities/` |
| Contact | `/contact/` |
| Support | `/support/` |
| FAQs | `/faqs/` |
| Privacy Policy | `/privacy-policy/` |
| Terms of Use | `/end-user-agreement-terms-of-use/` |
| Child Safety (CSAE) Policy | `/blinkconnect-child-sexual-abuse-and-exploitation-csae-policy/` |
| User Generated Content Policy | `/user-generated-content-policy/` |

Old single-question FAQ pages (`/faq-items/...`) redirect to `/faqs/`. A sitemap is served at `/sitemap.xml` and `robots.txt` at `/robots.txt`.

Every page carries JSON-LD structured data (Organization and WebSite site-wide, MobileApplication on Home, FAQPage on FAQs, breadcrumbs elsewhere). It is set up in `lib/schema.js`; the FAQ answers for it live in `app/faqs/faq-items.js`, so update that file when you change an FAQ.
