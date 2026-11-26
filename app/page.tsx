import type { Metadata } from 'next';
import AuditForm from '@/components/AuditForm';

// Home page title is set in full here — no template, so Google sees the exact title.
export const metadata: Metadata = {
  title: { absolute: 'StoreStride | Amazon PPC Agency UK | Full-Funnel Amazon Advertising' },
  description:
    'StoreStride — UK-based Amazon PPC agency. Full-funnel Sponsored Products, DSP, Brand Video, listing optimisation and full account management. $10M+ ad spend managed, 50+ brands scaled.',
  alternates: { canonical: '/' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What if I have burned money on Amazon ads before?', acceptedAnswer: { '@type': 'Answer', text: 'We start with a free audit to pinpoint exactly what went wrong. Failed campaigns almost always follow fixable patterns.' } },
    { '@type': 'Question', name: 'How quickly will I see results?', acceptedAnswer: { '@type': 'Answer', text: 'Most brands see measurable improvements in ACOS within 30 days. Significant revenue growth typically builds over 90–180 days.' } },
    { '@type': 'Question', name: 'Do you work with new product launches?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we have added $100K+ in sales within 60 days of launch for multiple brands using structured launch-phase PPC and keyword rank strategies.' } },
    { '@type': 'Question', name: 'What niches do you specialize in?', acceptedAnswer: { '@type': 'Answer', text: 'Home & Garden is our primary niche, with strong expertise in pet supplies, sports & outdoors, kitchen & home, beauty and supplements.' } },
  ],
};

const services = [
  { icon: '🎥', title: 'Sponsored Brand Video', text: 'High-converting auto-play video ads in search results — one of Amazon’s highest click-through formats. We manage targeting and bid optimisation.' },
  { icon: '📝', title: 'Listing Optimisation', text: 'Keyword-rich titles, persuasive bullets, compelling descriptions and A+ Content that rank higher organically and turn browsers into buyers.' },
  { icon: '✏️', title: 'Listing Creation', text: 'Launching a new product? We build your complete Amazon listing from scratch — keyword research through to A+ Content.' },
  { icon: '📊', title: 'Full Account Management', text: 'End-to-end Seller Central management: PPC, listings, inventory health, account compliance and monthly strategy reviews.' },
  { icon: '🎯', title: 'PPC Management', text: 'Sponsored Products, Brands & Display. Full campaign build, weekly optimisation, TACOS-led bids and monthly reporting.' },
  { icon: '🔁', title: 'DSP & Retargeting', text: 'Re-engage high-intent shoppers on and off Amazon using Sponsored Display and Amazon DSP, with Amazon Marketing Cloud insight.' },
];

const cases = [
  { niche: 'Supplement Brand', metric: '$1.5M', label: 'Sales Generated', detail: '40% net margin in 12 months. Amazon PPC only — no external traffic.' },
  { niche: 'Blanket / Home Niche', metric: '+71%', label: 'Revenue Boost', detail: '200% ROAS in 2 months. Campaign restructure + keyword expansion.' },
  { niche: 'Pet Supplies Brand', metric: '$1.2M', label: 'Annual Revenue', detail: '6× growth from $200K. Full-funnel Sponsored Ads + DSP.' },
  { niche: 'Baby Products', metric: '4%', label: 'TACOS (was 25%)', detail: '84% TACOS reduction. Aggressive negative keyword pruning.' },
  { niche: 'Beauty Brand', metric: '3×', label: 'ROAS', detail: 'Page 1 rankings in 6 months. Launch strategy + Sponsored Brand Video.' },
  { niche: 'New Product Launch', metric: '+$100K', label: 'Added Sales', detail: 'First 60 days. Launch-phase PPC + ranking strategy.' },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {/* Hero — headline, stats, free audit card */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">UK-Based · Amazon Ads Partner Network Member</span>
            <h1>Full-Funnel Amazon Advertising That Scales Brands</h1>
            <p className="lead">A UK-based, senior-led Amazon PPC agency engineering data-driven strategies across Amazon.co.uk and global marketplaces — Sponsored Products, DSP, Brand Video — backed by real outcomes across 50+ brands and $10M+ in managed ad spend.</p>
            <p><a className="btn" href="/contact">Book Free Strategy Session</a>{' '}<a className="btn btn-ghost" href="/case-studies">See Case Studies</a></p>
            <div className="hero-stats">
              <div className="stat"><b>$10M+</b><span>Ad Spend Managed</span></div>
              <div className="stat"><b>50+</b><span>Brands Scaled</span></div>
              <div className="stat"><b>5+</b><span>Yrs Amazon Expertise</span></div>
              <div className="stat"><b>5.0★</b><span>Client Rated</span></div>
            </div>
          </div>
          <div className="hero-card">
            <span className="tag">Proof of Results</span>
            <h3>Supplement brand: $1.5M in 12 months</h3>
            <p>No social media. No external traffic. Just Amazon — proper keyword research, clean structure, tight bids, optimised every week.</p>
            <p className="big">40% Net Margin</p>
            <p>Free audit first — we show you where profit is leaking before you pay anything.</p>
            <a className="btn" href="/contact">Get My Free Audit →</a>
          </div>
        </div>
      </section>

      {/* Services — the 6 things we actually sell */}
      <section className="section" aria-labelledby="services">
        <div className="container">
          <span className="eyebrow">What We Deliver</span>
          <h2 id="services">Everything Included in Your Account Management</h2>
          <p className="lead">From awareness to conversion — we manage the complete Amazon advertising ecosystem so you can focus on your product. No hidden add-ons. No surprise fees.</p>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {services.map((s) => (
              <article className="card" key={s.title}>
                <div className="icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3><p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="approach">
        <div className="container">
          <span className="eyebrow">AMZ Pathfinder-Style Approach — Data First</span>
          <h2 id="approach">Data-Driven, Not Guesswork</h2>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            <article className="card"><h3>📊 Data-Driven Approach</h3><p>Data comes first — it drives our decisions at the macro account level to the micro hourly level, so you get the best results for your campaigns.</p></article>
            <article className="card"><h3>⚡ Advanced Bidding</h3><p>We use the best features Amazon can offer — Amazon Marketing Stream and DayParting — to spend when it is most profitable for you.</p></article>
            <article className="card"><h3>💬 Clear &amp; Proactive Communication</h3><p>A dedicated team gives fast, efficient and frequent updates, keeping you in the loop. An ‘in-house’ feeling is a rarity in the Amazon space.</p></article>
            <article className="card"><h3>📈 Personalised Reporting</h3><p>Clean, informative and tailored reporting on the metrics you care about — ACOS, TACOS, ROAS, revenue contribution and organic rank. No vanity metrics.</p></article>
          </div>
        </div>
      </section>

      {/* Case studies — real numbers only, no made-up claims */}
      <section className="section" aria-labelledby="cases">
        <div className="container">
          <span className="eyebrow">Real Numbers. Real Brands. Real Growth.</span>
          <h2 id="cases">Every Metric Comes From an Actual Client Account</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {cases.map((c) => (
              <article className="card" key={c.niche}>
                <span className="tag">{c.niche}</span>
                <p className="case-metric">{c.metric}</p>
                <h3>{c.label}</h3><p>{c.detail}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 20 }}><a className="btn btn-navy" href="/case-studies">Read All Case Studies →</a></p>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="process">
        <div className="container">
          <span className="eyebrow">How We Onboard</span>
          <h2 id="process">From First Call to First Results — in 3 Steps</h2>
          <div className="steps" style={{ marginTop: 24 }}>
            <article className="step"><h3>Understanding Now</h3><p>To grow your business we must understand your brand, vision and goals. We start with an intensive audit, looking for trouble spots and opportunities, then build a plan together.</p></article>
            <article className="step"><h3>Build Foundations for Success</h3><p>With our plan in hand we create the building blocks — ramping up an existing account, starting fresh, or designing beautiful listings — and turn the plan into action.</p></article>
            <article className="step"><h3>Assess, Grow and Scale</h3><p>Careful expansion next. We shoot for sales or health targets, use learned data to grow, and keep you in the conversation with regular updates and reports.</p></article>
          </div>
          <p style={{ marginTop: 20 }}>Plus: Book Strategy Session → Deep Audit &amp; Gameplan → Onboarding &amp; Setup → Deliver &amp; Optimise. Transparent, accountable, no long-term lock-in.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="why">
        <div className="container">
          <span className="eyebrow">Why StoreStride</span>
          <h2 id="why">We&apos;re Not Your Average Amazon Advertising Agency</h2>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            <article className="card"><h3>Senior-led, not handed to juniors</h3><p>Direct access to senior Amazon PPC specialists — not account managers reading from scripts. You work directly with the people running your campaigns.</p></article>
            <article className="card"><h3>Profit-first, TACOS-led</h3><p>We judge success on net margin and TACOS, not just ACoS or clicks. Ad spend increases only when data confirms profitability benchmarks are met.</p></article>
            <article className="card"><h3>Transparent pricing</h3><p>Every quote is custom — scoped to your ad spend, ASINs and goals. No hidden fees, no long-term lock-in contracts. If it&apos;s not working, you&apos;re free to walk.</p></article>
            <article className="card"><h3>Full-funnel coverage</h3><p>Sponsored Ads, DSP, Video and listing optimisation under one roof — with niche expertise across supplements, home goods, pet, beauty, baby and apparel.</p></article>
          </div>
        </div>
      </section>

      {/* FAQ — keep this in sync with the JSON-LD above */}
      <section className="section section-soft faq" aria-labelledby="faq">
        <div className="container">
          <span className="eyebrow">Common Questions</span>
          <h2 id="faq">Frequently Asked Questions</h2>
          <details><summary>What if I&apos;ve burned money on Amazon ads before?</summary><p>We start with a free audit to pinpoint exactly what went wrong. Failed campaigns almost always follow fixable patterns.</p></details>
          <details><summary>How quickly will I see results?</summary><p>Most brands see measurable improvements in ACOS within 30 days. Significant revenue growth typically builds over 90–180 days.</p></details>
          <details><summary>Do you work with new product launches?</summary><p>Yes — we&apos;ve added $100K+ in sales within 60 days of launch for multiple brands using structured launch-phase PPC and keyword rank strategies.</p></details>
          <details><summary>What niches do you specialize in?</summary><p>Home &amp; Garden is our primary niche — outdoor furniture, garden tools, planters and home décor. We also have strong expertise in pet supplies, sports &amp; outdoors, kitchen &amp; home, beauty and supplements.</p></details>
        </div>
      </section>

      <section className="section" aria-labelledby="audit">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Get Your Free Audit</span>
          <h2 id="audit">Start Scaling Your Amazon Brand Today</h2>
          <p className="lead">Fill in the form and we&apos;ll deliver a full account audit — no commitment, no sales pressure, just real insights.</p>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
