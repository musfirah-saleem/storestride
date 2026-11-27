import type { Metadata } from 'next';
import AuditForm from '@/components/AuditForm';
import Counter from '@/components/Counter';
import Calculators from '@/components/Calculators';

// Olifant-style title — full-service agency, not just "PPC".
export const metadata: Metadata = {
  title: { absolute: 'Full-Service Amazon Marketing Agency | StoreStride' },
  description:
    'StoreStride is a full-service Amazon marketing agency: PPC, DSP, listing optimisation, SEO, brand management and full account management. Specialists run your whole Amazon account end to end — $10M+ ad spend managed, 50+ brands scaled.',
  alternates: { canonical: '/' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is StoreStride?', acceptedAnswer: { '@type': 'Answer', text: 'StoreStride is a full-service Amazon agency. Specialists run your whole Amazon account end to end: PPC, DSP, listing optimisation, SEO, brand management and full account management, with targets set on revenue and profit.' } },
    { '@type': 'Question', name: 'What does a full-service Amazon agency do?', acceptedAnswer: { '@type': 'Answer', text: 'We run your whole Amazon channel: advertising (Sponsored Products, Brands, Display and DSP), listings and SEO, A+ Content, catalog, inventory and brand protection, with our team accountable for revenue and profit.' } },
    { '@type': 'Question', name: 'Is StoreStride an Amazon PPC agency?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PPC is the core of our full-service work. You can hire us for PPC only or for full Amazon account management. Plans are custom-quoted, and onboarding starts with a free audit.' } },
    { '@type': 'Question', name: 'How much does StoreStride cost?', acceptedAnswer: { '@type': 'Answer', text: 'Every quote is custom, scoped to your ad spend, ASINs and goals. You get the exact scope and fee in your free plan, before you sign anything. No hidden fees, no long-term lock-in.' } },
    { '@type': 'Question', name: 'Is there a contract?', acceptedAnswer: { '@type': 'Answer', text: 'No. There is no long-term lock-in. If it is not working, you are free to walk.' } },
    { '@type': 'Question', name: 'Which brands do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'Brands selling on Amazon at every stage, from pre-launch to established accounts. Home & Garden is our primary niche, with strong expertise in pet supplies, sports & outdoors, kitchen & home, beauty and supplements.' } },
    { '@type': 'Question', name: 'Which marketplaces do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon across the UK, North America, Europe and Australia.' } },
  ],
};

const chips = [
  { metric: '$1.5M', label: 'Supplement brand sales in 12 months' },
  { metric: '+71%', label: 'Blanket brand revenue in 2 months' },
  { metric: '$1.2M', label: 'Pet brand annual revenue, from $200K' },
  { metric: '4%', label: 'Baby brand TACOS — was 25%' },
  { metric: '3×', label: 'Beauty brand ROAS, page 1 in 6 months' },
  { metric: '+£40K/mo', label: 'Extra revenue, £0 extra ad spend' },
  { metric: '+$100K', label: 'New launch sales in first 60 days' },
  { metric: '84%', label: 'TACOS cut through negative pruning' },
];

const services = [
  { icon: '🗂️', title: 'Amazon Account Management', text: 'Our experts run your whole Amazon account: ads, listings, catalog, inventory and reporting, with a clear plan every month.' },
  { icon: '🎯', title: 'Amazon PPC', text: 'Sponsored Products, Brands and Display campaigns built around profit. Specialists review every account daily and cut wasted spend fast.' },
  { icon: '📺', title: 'Amazon DSP', text: 'Display and video ads on and off Amazon that retarget shoppers who viewed your products and reach new buyers with Amazon shopper data.' },
  { icon: '📝', title: 'Amazon Listing Optimization', text: 'Titles, bullets, images and A+ Content written to rank and convert, so the traffic you pay for turns into more sales.' },
  { icon: '🔍', title: 'Amazon SEO', text: 'Keyword research and listing updates that move your products up for the searches your buyers actually use.' },
  { icon: '🛡️', title: 'Amazon Brand Management', text: 'Brand Registry, Brand Store, pricing and reseller control, so your brand looks and sells the way it should.' },
  { icon: '🏪', title: 'Vendor Central', text: 'For brands selling to Amazon as a vendor: catalog, POs, chargebacks, retail analytics and advertising, run by the same team.' },
  { icon: '🚀', title: 'Amazon Product Launch', text: 'Listings, launch ads and a ranking plan that take new products from zero to steady sales.' },
  { icon: '🔎', title: 'Amazon Account Audit', text: 'A deep review of your ads, listings and account health, with a clear list of what is costing you sales and how to fix it.' },
];

const cases = [
  { brand: 'Supplement Brand', metric: '$1.5M', label: 'Sales in 12 months · 40% net margin', story: 'No social media. No external traffic. Just Amazon — proper keyword research, clean structure, tight bids, optimised every week. The brand went from plateaued to $1.5M in a year, at 40% net margin.' },
  { brand: 'Blanket / Home', metric: '+71%', label: 'Revenue in 2 months · 200% ROAS', story: 'The owner was about to pull the plug on ads. We rebuilt the keyword structure and cut what wasn’t pulling its weight. Revenue up 71% in two months, ROAS at 200%.' },
  { brand: 'Pet Supplies', metric: '$1.2M', label: 'Annual revenue · 6× from $200K', story: 'Stuck at $200K for two years. DSP + Sponsored Display retargeting + Sponsored Products on core terms. Six times the revenue by year end.' },
  { brand: 'Baby Products', metric: '4%', label: 'TACOS — was 25% · 84% cut', story: 'Aggressive negative keyword pruning. Same sales, far less wasted spend. TACOS fell from 25% to 4%.' },
  { brand: 'Beauty Brand', metric: '3×', label: 'ROAS · Page 1 in 6 months', story: 'Brand new, zero reviews. Exact-match rank building, then pushed the converting keywords hard. Page one by month six, ROAS tripled.' },
  { brand: 'E-Commerce Brand', metric: '+£40K/mo', label: 'Extra revenue · £0 extra spend', story: 'Same budget, used smarter — one product per campaign, match types separated, negatives added properly. £40K more a month in 3 months.' },
];

const reviews = [
  { metric: 'Profits doubled', stars: '★★★★★', text: 'Moeed and team doubled my profits and generated six figures in revenue by month four. Professional, responsive, and deeply knowledgeable about the Amazon algorithm.', name: 'Amazon Brand Owner', meta: 'Supplements' },
  { metric: '+71% revenue', stars: '★★★★★', text: 'I highly recommend StoreStride for PPC management. Professional, knowledgeable about the Amazon algorithm, great communicators, and they actually listen to suggestions.', name: 'Casey', meta: 'Amazon Brand Owner' },
  { metric: 'Growth in 3 months', stars: '★★★★★', text: 'Great company. Very knowledgeable. They optimized our campaigns, saved us money, and we saw significant growth in just three months. Fast, easy to deal with.', name: 'James', meta: 'Amazon Seller' },
  { metric: '1 year, Italy launch', stars: '★★★★★', text: 'Young and competent team. We entrusted them with our Amazon brand development from first product launch in Italy. One full year of successful collaboration — remarkable.', name: 'Marco', meta: 'Italian Amazon Brand' },
  { metric: 'Measurable improvements', stars: '★★★★★', text: 'Moin and his team have been excellent to work with. Knowledgeable, responsive, and consistently helps optimize our Amazon listings and Amazon PPC. Strong, measurable improvements.', name: 'Grizmann145', meta: 'Amazon Seller, UK' },
  { metric: 'Complex problem solved', stars: '★★★★★', text: 'He is an expert with Amazon and helped us resolve a complex problem with UK tax authorities. Very experienced — we will definitely hire him again.', name: 'GetCompany', meta: 'Amazon Seller, Greece' },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {/* Hero — Olifant-style: full-service, profit-first, guarantee up front */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="eyebrow eyebrow-light">Full-Service Amazon Agency · UK-Based</span>
            <h1>The full-service Amazon agency that grows your <span className="grad-text">revenue and profit</span></h1>
            <p className="lead">Specialists run your entire Amazon account end to end: Amazon PPC, listing optimization, inventory and account health. You get a growth plan with targets set on your revenue and profit goals, weekly updates, and decisions backed by data across 50+ Amazon accounts.</p>
            <p><a className="btn btn-pulse" href="/contact">Get Your Free Marketing Plan →</a>{' '}<a className="btn btn-ghost" href="/case-studies">See The Results</a></p>
            <p style={{ fontSize: '.95rem' }}>✓ Free account audit &nbsp; ✓ No long-term lock-in &nbsp; ✓ Senior specialists only</p>
            <div className="hero-stats">
              <div className="stat"><b>$<Counter to={10} suffix="M+" /></b><span>Ad Spend Managed</span></div>
              <div className="stat"><b><Counter to={50} suffix="+" /></b><span>Brands Scaled</span></div>
              <div className="stat"><b><Counter to={5} suffix="+" /></b><span>Yrs Amazon Expertise</span></div>
              <div className="stat"><b>5.0★</b><span>Client Rated</span></div>
            </div>
          </div>
          <div className="hero-card fade-up-2">
            <span className="tag tag-orange">Proof of Results</span>
            <h3>Supplement brand: $1.5M in 12 months</h3>
            <p>No social media. No external traffic. Just Amazon — proper keyword research, clean structure, tight bids, optimised every week.</p>
            <p className="big">40% Net Margin</p>
            <p>Before you pay us anything, you&apos;ll know exactly what we&apos;d do, which team would run your account, and what it costs.</p>
            <a className="btn" href="/contact">Get My Free Plan →</a>
            <div style={{ marginTop: 18 }}>
              <span className="float-badge">✓ Amazon Ads Partner</span>
              <span className="float-badge">✓ Helium 10 Partner</span>
              <span className="float-badge">✓ 5.0★ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Result chips — every one a real StoreStride result */}
      <section style={{ padding: '34px 0 10px' }} aria-label="Results">
        <div className="container">
          <div className="grid grid-4">
            {chips.map((c) => (
              <div className="card" key={c.label} style={{ textAlign: 'center' }}>
                <p className="case-metric">{c.metric}</p>
                <p style={{ margin: 0 }}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Niches we work in">
        <div className="marquee-track">
          <span>Supplements</span><span>Home &amp; Garden</span><span>Pet Supplies</span><span>Beauty &amp; Health</span><span>Baby Products</span><span>Kitchen &amp; Home</span><span>Sports &amp; Outdoors</span><span>Apparel</span>
          <span>Supplements</span><span>Home &amp; Garden</span><span>Pet Supplies</span><span>Beauty &amp; Health</span><span>Baby Products</span><span>Kitchen &amp; Home</span><span>Sports &amp; Outdoors</span><span>Apparel</span>
        </div>
      </div>

      {/* Why us — numbered, Olifant-style */}
      <section className="section" aria-labelledby="why">
        <div className="container">
          <span className="eyebrow">Why StoreStride</span>
          <h2 id="why">Why brands selling on Amazon choose StoreStride</h2>
          <div className="steps" style={{ marginTop: 28, gridTemplateColumns: 'repeat(2,1fr)' }}>
            <article className="step"><h3>Experienced specialists on your account</h3><p>Every client gets a dedicated team built around the services they hire us for: an account manager, PPC specialist, designer and copywriter. You talk to them directly — no junior handoff, no scripts.</p></article>
            <article className="step"><h3>A written plan before you sign</h3><p>Before you sign, you get a written plan: what we fix first, the targets and the timeline. Every weekly update then shows what we changed and what comes next.</p></article>
            <article className="step"><h3>A strategy for every product</h3><p>Each product gets its own plan, built on its margin, organic rank and stock. We track sales and ACoS, but every target is set on your profit. What already works stays.</p></article>
            <article className="step"><h3>Always know what changed and why</h3><p>Weekly reports and a direct line to your team. When results go up, we tell you why. When they dip, we tell you why and what we are changing.</p></article>
          </div>
          <blockquote style={{ margin: '36px 0 0', padding: '24px 28px', background: 'var(--bg-soft)', borderLeft: '4px solid var(--orange)', borderRadius: 12 }}>
            <p className="quote">“Most Amazon sellers I speak to have the same story — they tried running ads themselves, burned through budget, maybe hired a big agency that assigned them a junior account manager and disappeared. That&apos;s exactly why I built StoreStride.”</p>
            <p><b>Muhammad Moin</b>, Founder &amp; CEO, StoreStride</p>
          </blockquote>
        </div>
      </section>

      {/* Services — all 9, Olifant-style */}
      <section className="section section-soft" aria-labelledby="services">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 id="services">Amazon services we run for you</h2>
          <p className="lead">Every service is managed by in-house specialists, supported by data from 50+ Amazon accounts — so decisions come from what works across real accounts, not guesswork.</p>
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

      {/* Three ways to work */}
      <section className="section" aria-labelledby="ways">
        <div className="container">
          <span className="eyebrow">Three Ways To Work With Us</span>
          <h2 id="ways">We review your account first and recommend the right fit</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <article className="card"><span className="tag">01 · Expert guidance</span><h3>Consulting</h3><p>Our Amazon specialists work with your team on whatever you need, from PPC and account strategy to launches and inventory planning.</p><p><b>Best for:</b> pre-launch brands, and brands with their own Amazon team that want expert help.</p></article>
            <article className="card"><span className="tag tag-orange">02 · Ads only</span><h3>Amazon PPC Management</h3><p>A dedicated PPC specialist runs your Amazon ads across every format, built around your goal: more revenue, a lower ACoS or higher profit. Daily optimisation, weekly report.</p><p><b>Best for:</b> brands that handle listings and operations in house and want specialists on their ads.</p></article>
            <article className="card"><span className="tag">03 · Done for you</span><h3>Full-Service Management</h3><p>A dedicated team runs your whole account: strategy, PPC, listings and A+ Content, promotions, inventory and Seller Central cases, with weekly updates.</p><p><b>Best for:</b> brands that want our Amazon team running the account end to end.</p></article>
          </div>
        </div>
      </section>

      {/* Case studies — real names are niches; numbers are real StoreStride results */}
      <section className="section section-soft" aria-labelledby="cases">
        <div className="container">
          <span className="eyebrow">Case Studies</span>
          <h2 id="cases">Results from the brands we work with</h2>
          <p className="lead">Every brand gets its own plan. See what we changed for each one, with real numbers.</p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {cases.map((c) => (
              <article className="card" key={c.brand}>
                <span className="tag">{c.brand}</span>
                <p className="case-metric">{c.metric}</p>
                <h3>{c.label}</h3><p>{c.story}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 20 }}><a className="btn btn-navy" href="/case-studies">Read All Case Studies →</a></p>
        </div>
      </section>

      {/* Research — Pathfinder data-first + Olifant research */}
      <section className="section" aria-labelledby="research">
        <div className="container">
          <span className="eyebrow">StoreStride Research</span>
          <h2 id="research">Every decision starts with research</h2>
          <p className="lead">We publish what we learn from the Amazon accounts we manage. We combine it with your margins to set the ACoS targets, bids and budgets in your account.</p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            <article className="card"><span className="tag">1 · Data</span><h3>Data comes first</h3><p>Data drives our decisions at the macro account level to the micro hourly level — Amazon Marketing Stream and DayParting, so you spend when it is most profitable.</p></article>
            <article className="card"><span className="tag">2 · Daily checks</span><h3>Reviewed every day</h3><p>Your specialists review every account daily against your contribution margin target, flagging wasted spend, campaigns running out of budget and winners worth scaling.</p></article>
            <article className="card"><span className="tag">3 · Decisions</span><h3>Acted on the same day</h3><p>Your specialists review what the data surfaces and act on it the same day. No waiting for a monthly report to fix a problem.</p></article>
          </div>
        </div>
      </section>

      {/* Reviews with metric headers, Olifant-style */}
      <section className="section section-soft" aria-labelledby="reviews">
        <div className="container">
          <span className="eyebrow">Client Reviews</span>
          <h2 id="reviews">What our clients say</h2>
          <p className="lead">Every quote links to the result behind it.</p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {reviews.map((r) => (
              <article className="card" key={r.name}>
                <p className="case-metric" style={{ fontSize: '1.4rem' }}>{r.metric}</p>
                <p className="stars" aria-label="5 out of 5 stars">{r.stars}</p>
                <p className="quote">“{r.text}”</p>
                <p><b>{r.name}</b><br />{r.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / trust */}
      <section className="section" aria-labelledby="awards">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Certifications &amp; Trust</span>
          <h2 id="awards">Amazon Ads Partner · 5.0★ Rated</h2>
          <p className="lead" style={{ margin: '0 auto' }}>StoreStride is a member of the Amazon Ads Partner Network, a Helium 10 partner and PickFu certified — with $10M+ in managed ad spend across 50+ brands.</p>
          <p style={{ marginTop: 20 }}><span className="float-badge">★ 5.0 Client Rated</span><span className="float-badge">✓ Amazon Ads Partner Network</span><span className="float-badge">✓ Helium 10 Partner</span><span className="float-badge">✓ PickFu Certified</span><span className="float-badge">✓ $10M+ Ad Spend Managed</span></p>
        </div>
      </section>

      {/* How we start */}
      <section className="section section-navy" aria-labelledby="start">
        <div className="container">
          <span className="eyebrow eyebrow-light">How We Start Working Together</span>
          <h2 id="start">Before you pay us anything, you&apos;ll know exactly what we&apos;d do</h2>
          <p className="lead">Which team would run your account, and what it costs — all in your free plan.</p>
          <div className="steps" style={{ marginTop: 28 }}>
            <article className="step"><h3>Apply for a marketing plan</h3><p>Fill out a short application: your brand, your goals, and where you&apos;re stuck. We&apos;ll review it and tell you honestly whether we can help.</p></article>
            <article className="step"><h3>Receive your marketing plan</h3><p>We build a plan tailored to your brand: the exact scope of work, the team who&apos;ll run it, and the fee — within 24 hours.</p></article>
            <article className="step"><h3>Meet your team and execute</h3><p>Meet the people who&apos;ll run your account day to day before you sign anything. Once aligned, we start with the highest-impact work first.</p></article>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="section" aria-labelledby="compare">
        <div className="container">
          <span className="eyebrow">How StoreStride Compares</span>
          <h2 id="compare">What changes when you hire StoreStride instead of a typical Amazon agency</h2>
          <div style={{ overflowX: 'auto', marginTop: 24 }}>
            <table className="compare">
              <thead><tr><th></th><th>StoreStride</th><th>Typical Amazon agency</th></tr></thead>
              <tbody>
                <tr><td>Who runs your account</td><td className="tick">✓ Senior specialists</td><td className="cross">✗ Often a junior account manager</td></tr>
                <tr><td>Scope</td><td className="tick">✓ PPC, DSP, listings, SEO, A+ Content, brand &amp; full account</td><td className="cross">✗ Often ads only</td></tr>
                <tr><td>How it is optimised</td><td className="tick">✓ Reviewed daily, judged on profit &amp; TACOS</td><td className="cross">✗ Weekly or monthly, judged on ACoS or sales</td></tr>
                <tr><td>Data behind decisions</td><td className="tick">✓ Benchmarks from 50+ accounts we manage</td><td className="cross">✗ Rules of thumb or one account&apos;s history</td></tr>
                <tr><td>Pricing</td><td className="tick">✓ Custom quote, no hidden fees</td><td className="cross">✗ Often a % of ad spend or sales</td></tr>
                <tr><td>Contract</td><td className="tick">✓ Month to month, no lock-in</td><td className="cross">✗ Often a 6–12 month lock-in</td></tr>
                <tr><td>Reporting</td><td className="tick">✓ Weekly reports, direct line to your team</td><td className="cross">✗ Often a monthly report</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section className="section section-soft" aria-labelledby="tools">
        <div className="container">
          <span className="eyebrow">Free Tools</span>
          <h2 id="tools">Free Amazon PPC Calculators</h2>
          <p className="lead">The same maths we use on client accounts. Try your own numbers.</p>
          <div style={{ marginTop: 24 }}><Calculators /></div>
          <p style={{ marginTop: 20 }}><span className="tag">Amazon PPC Guide</span> <span className="tag">Account Management Guide</span> <span className="tag">Keyword Research</span> <span className="tag">TACOS Calculator</span> <span className="tag">ACOS Calculator</span> <span className="tag">ROAS Calculator</span></p>
        </div>
      </section>

      {/* Team */}
      <section className="section" aria-labelledby="team">
        <div className="container">
          <span className="eyebrow">Meet the Team</span>
          <h2 id="team">The people behind your growth</h2>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            <article className="card"><h3>Muhammad Moin</h3><p><b>CEO &amp; Founder</b></p><p>“My name and my reputation are on every brand we work with, so I hold our work to the highest standard there is.”</p><p><b>$10M+ ad spend managed · 50+ brands scaled · 5+ yrs Amazon PPC · 5.0★ client rated</b></p></article>
            <article className="card"><h3>Usman Azam</h3><p><b>Co-Founder &amp; Head of Strategy</b></p><p>“My focus has always been on the numbers that actually matter — not just impressions or clicks, but net margin, TACOS, and real revenue growth. Every bidding decision is rooted in data I&apos;ve personally validated across dozens of brands.”</p><p><b>84% TACOS reduction (case) · 3× ROAS improvement (case)</b></p></article>
          </div>
        </div>
      </section>

      {/* FAQ — Olifant-style Q&A */}
      <section className="section section-soft faq" aria-labelledby="faq">
        <div className="container">
          <span className="eyebrow">Questions About StoreStride</span>
          <h2 id="faq">Frequently Asked Questions</h2>
          <details><summary>What is StoreStride?</summary><p>StoreStride is a full-service Amazon agency. Specialists run your whole Amazon account end to end: PPC, DSP, listing optimisation, SEO, brand management and full account management, with targets set on revenue and profit.</p></details>
          <details><summary>What does a full-service Amazon agency do?</summary><p>We run your whole Amazon channel: advertising (Sponsored Products, Brands, Display and DSP), listings and SEO, A+ Content, catalog, inventory and brand protection, with our team accountable for revenue and profit.</p></details>
          <details><summary>Is StoreStride an Amazon PPC agency?</summary><p>Yes. PPC is the core of our full-service work. You can hire us for PPC only or for full Amazon account management. Plans are custom-quoted, and onboarding starts with a free audit.</p></details>
          <details><summary>How much does StoreStride cost?</summary><p>Every quote is custom, scoped to your ad spend, ASINs and goals. You get the exact scope and fee in your free plan, before you sign anything. No hidden fees, no long-term lock-in.</p></details>
          <details><summary>Is there a contract?</summary><p>No. There is no long-term lock-in. If it&apos;s not working, you&apos;re free to walk.</p></details>
          <details><summary>Which brands do you work with?</summary><p>Brands selling on Amazon at every stage, from pre-launch to established accounts. Home &amp; Garden is our primary niche, with strong expertise in pet supplies, sports &amp; outdoors, kitchen &amp; home, beauty and supplements.</p></details>
          <details><summary>Which marketplaces do you manage?</summary><p>Amazon across the UK, North America, Europe and Australia.</p></details>
        </div>
      </section>

      {/* Final CTA + audit form */}
      <section className="section" aria-labelledby="audit">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">See What Your Brand Could Add</span>
          <h2 id="audit">Find out exactly what it takes to scale your brand</h2>
          <p className="lead">Answer a few quick questions and get your free marketing plan in 24 hours — no commitment, no sales pressure, just real insights.</p>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
