# StoreStride — Next.js Site (SEO-Optimised)

Amazon PPC Agency UK — full-funnel Amazon advertising.
Mixture of the top 15 Amazon PPC agency sites, with the colour theme of
AMZ Pathfinder: deep navy `#004D6D` + orange `#F3952D`.

## Pages
- `/` — Home: hero, stats, services, data-first approach, case studies, 3-step process, why us, FAQ, free audit form
- `/services` — PPC, DSP, Brand Video, listing optimisation/creation, keyword research, launch, full account management
- `/case-studies` — 6 documented results
- `/pricing` — custom quotes, no hidden fees
- `/contact` — free audit form + contact details

## SEO built in
- Next.js App Router `metadata`: title template, description, keywords, canonical, Open Graph + Twitter cards
- JSON-LD: `ProfessionalService` / `Organization` + `WebSite` in `app/layout.tsx`, `FAQPage` on home
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`
- Semantic HTML: one `h1` per page, `h2` sections, `nav`/`main`/`footer` landmarks, `aria-label`s, descriptive alt text
- `next/font` (Inter, display swap), AVIF/WebP images, `compress: true`, `poweredByHeader: false`, security headers in `next.config.mjs`

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — must pass before deploy
npm start
```

## Deploy to Vercel (like the portfolio)
1. Push this folder to GitHub
2. Vercel → Add New Project → import the repo
3. Framework: Next.js (auto-detected), Build Command: `npm run build`
4. Deploy — auto-deploy on every push to main

Contact on the site: amzservices@storestride.com · +44 7950 471 970 · 13 Holdich Street, Peterborough, PE3 6DH, England, UK
