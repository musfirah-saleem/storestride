import type { Metadata } from 'next';
import AuditForm from '@/components/AuditForm';
import Counter from '@/components/Counter';
import Calculators from '@/components/Calculators';
import Icon from '@/components/Icons';
import CaseCarousel from '@/components/CaseCarousel';
import ProfitSimulator from '@/components/ProfitSimulator';

// Homepage rebuilt Pathfinder-style: light hero, floating cards, carousel,
// survey, lead magnet, blog + podcast bands — same StoreStride content.
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

const secret = [
  { icon: 'chart', title: 'Data driven approach', text: 'Data comes first — it drives our decisions at the macro account level to the micro hourly level, so you get the best results for your campaigns.' },
  { icon: 'bolt', title: 'Advanced bidding', text: 'We use the best features Amazon can offer — Amazon Marketing Stream and DayParting — to spend when it is most profitable for you.' },
  { icon: 'chat', title: 'Clear and proactive communication', text: 'A dedicated team gives fast, efficient and frequent updates, keeping you in the loop. An ‘in-house’ feeling is a rarity in the Amazon space.' },
  { icon: 'chart', title: 'Personalised reporting', text: 'Clean, informative and tailored reporting on the metrics you care about — ACOS, TACOS, ROAS, revenue contribution and organic rank. No vanity metrics.' },
  { icon: 'award', title: 'Experienced', text: 'Our team has 5+ years of Amazon PPC experience across 50+ brands. Whatever you are facing in your Amazon journey, we have seen it before.' },
];

const homeServices = [
  { icon: 'target', slug: 'amazon-ppc-management', title: 'Amazon sponsored advertising', note: 'Our most popular service', text: 'Sponsored Products, Brands and Display campaigns built around profit.' },
  { icon: 'tv', slug: 'amazon-dsp', title: 'Amazon DSP', note: '', text: 'Display and video ads on and off Amazon that retarget shoppers and reach new buyers.' },
  { icon: 'search', slug: 'google-ads-for-amazon', title: 'Google Ads for Amazon', note: '', text: 'High-intent Google traffic sent straight to your Amazon listings.' },
  { icon: 'doc', slug: 'listing-optimization', title: 'Amazon listing optimization', note: '', text: 'Titles, bullets, images and A+ Content written to rank and convert.' },
  { icon: 'store', slug: 'storefront-design', title: 'Amazon Storefront design', note: '', text: 'A Brand Store that looks like your brand and sells like your best listing.' },
  { icon: 'audit', slug: 'ad-account-audit', title: 'A–Z Amazon Ad account audit', note: '', text: 'A deep review of your ads, listings and account health — free to start.' },
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
      {/* Hero — light, Pathfinder-style: big headline left, visual + floating cards right */}
      <section className="hero-light">
        <div className="container hero-grid">
          <div className="fade-up">
            <h1>We help great brands scale with <span className="grad-text">Amazon advertising</span></h1>
            <p className="lead">We build profitable Amazon ad strategies for your ecommerce business so you don&apos;t have to.</p>
            <p><a className="btn btn-pulse" href="/contact">Schedule a Free Audit With Us →</a>{' '}<a className="btn btn-navy" href="/services">Our Services</a></p>
            <div className="hero-stats">
              <div className="stat"><b style={{ color: 'var(--orange-dark)' }}>$<Counter to={10} suffix="M+" /></b><span style={{ color: 'var(--muted)' }}>Ad Spend Managed</span></div>
              <div className="stat"><b style={{ color: 'var(--orange-dark)' }}><Counter to={50} suffix="+" /></b><span style={{ color: 'var(--muted)' }}>Brands Scaled</span></div>
              <div className="stat"><b style={{ color: 'var(--orange-dark)' }}>5.0★</b><span style={{ color: 'var(--muted)' }}>Client Rated</span></div>
            </div>
          </div>
          <div className="hero-visual fade-up-2">
            <div className="hero-shape" />
            <div className="hero-photo">
              <img src="/images/hero-team.jpg" alt="The StoreStride team working on Amazon ad campaigns" />
              <div className="hero-photo-caption">
                <p className="big">40% Net Margin</p>
                <p>Supplement brand: $1.5M in 12 months — Amazon PPC only</p>
              </div>
            </div>
            <div className="float-card fc-1">★★★★★ Excellent<small>5.0 client rated</small></div>
            <div className="float-card fc-2">✓ Amazon Ads Verified Partner</div>
            <div className="float-card fc-3"><Icon name="chart" size={17} /> Monthly earning 15X<small>Growth, tracked weekly</small></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Brands and niches we work with">
        <div className="marquee-track">
          <span>Join 65+ brands trusting StoreStride</span><span>Supplements</span><span>Home &amp; Garden</span><span>Pet Supplies</span><span>Beauty &amp; Health</span><span>Baby Products</span><span>Kitchen &amp; Home</span><span>Sports &amp; Outdoors</span><span>Apparel</span>
          <span>Join 65+ brands trusting StoreStride</span><span>Supplements</span><span>Home &amp; Garden</span><span>Pet Supplies</span><span>Beauty &amp; Health</span><span>Baby Products</span><span>Kitchen &amp; Home</span><span>Sports &amp; Outdoors</span><span>Apparel</span>
        </div>
      </div>

      {/* Profit simulator — interactive: move the sliders, see your wasted spend */}
      <section className="section section-soft" aria-labelledby="simulator">
        <div className="container">
          <span className="eyebrow">Try It Yourself — 30 Seconds</span>
          <h2 id="simulator">See what better ACOS is worth to you</h2>
          <p className="lead">Most sellers lose thousands a month to wasted ad spend without realising it. Move the sliders — this is the same maths we run on every free audit.</p>
          <div style={{ marginTop: 24 }}><ProfitSimulator /></div>
        </div>
      </section>

      {/* Meet our clients — case carousel */}
      <section className="section" aria-labelledby="clients">
        <div className="container">
          <span className="eyebrow">Meet Our Clients</span>
          <h2 id="clients">Explore our client case studies to discover how we&apos;ve helped our partners succeed</h2>
          <div style={{ marginTop: 24 }}><CaseCarousel /></div>
          <p style={{ marginTop: 20 }}><a className="btn btn-navy" href="/case-studies">See Case Studies of Our Work →</a></p>
        </div>
      </section>

      {/* Why partner */}
      <section className="section section-soft" aria-labelledby="partner">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Why Partner With StoreStride?</span>
            <h2 id="partner">Choosing an agency partner is hard</h2>
            <p className="lead">At StoreStride we put emphasis on clear, effective communication, transparency, accountability and trust. Combined with our expert knowledge of the field, it sets the stage for long-lasting, successful partnerships.</p>
            <p><a className="btn" href="/contact"><Icon name="phone" size={17} /> Book a Call</a></p>
          </div>
          <div className="card">
            <img className="img-card" src="/images/meeting.jpg" alt="StoreStride specialists reviewing a client's growth numbers together" />
            <p className="quote">“A professional service so aligned with your revenue goals and communication style, you&apos;ll swear it&apos;s your own in-house team.”</p>
            <p><b>Muhammad Moin</b>, Founder &amp; CEO, StoreStride</p>
            <p>“Most Amazon sellers I speak to have the same story — they tried running ads themselves, burned through budget, maybe hired a big agency that assigned them a junior account manager and disappeared. That&apos;s exactly why I built StoreStride.”</p>
          </div>
        </div>
      </section>

      {/* The secret to our success — 5 cards */}
      <section className="section" aria-labelledby="secret">
        <div className="container">
          <span className="eyebrow">The Secret To Our Success</span>
          <h2 id="secret">Five things that make StoreStride different</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {secret.map((s) => (
              <article className="card" key={s.title}>
                <div className="icon" aria-hidden="true"><Icon name={s.icon} size={28} /></div>
                <h3>{s.title}</h3><p>{s.text}</p>
                <p><a href="/contact"><b>Get a Quote →</b></a></p>
              </article>
            ))}
            <article className="card card-dark">
              <h3>Ready to find out what we can do for you?</h3>
              <p>Book a free call — we&apos;ll tell you honestly whether we can help.</p>
              <p><a className="btn" href="/contact">Book a Call →</a></p>
            </article>
          </div>
        </div>
      </section>

      {/* Services cards */}
      <section className="section section-soft" aria-labelledby="services">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h2 id="services">Explore the ways our experts can contribute to your growth</h2>
          <p><a className="btn" href="/contact"><Icon name="phone" size={17} /> Book a Call</a></p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {homeServices.map((s) => (
              <article className="card" key={s.slug}>
                <div className="icon" aria-hidden="true"><Icon name={s.icon} size={28} /></div>
                {s.note && <span className="tag tag-orange">{s.note}</span>}
                <h3>{s.title}</h3><p>{s.text}</p>
                <p><a href={`/services/${s.slug}`}><b>Learn More →</b></a></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Get started survey */}
      <section className="section" aria-labelledby="survey">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Get Started Survey</span>
          <h2 id="survey">Tell us where you&apos;re stuck — get a plan in 24 hours</h2>
          <div className="survey-box">
            <AuditForm />
          </div>
        </div>
      </section>

      {/* How does it work — 3 steps */}
      <section className="section section-soft" aria-labelledby="process">
        <div className="container">
          <span className="eyebrow">How Does It Work? Simple!</span>
          <h2 id="process">From first call to first results — in 3 steps</h2>
          <div className="steps" style={{ marginTop: 24 }}>
            <article className="step"><h3>Understanding Now</h3><p>To grow your business we must understand your brand, vision and goals. We start with an intensive audit, looking for trouble spots and opportunities, then build a plan together.</p></article>
            <article className="step"><h3>Build Foundations for Success</h3><p>With our plan in hand we create the building blocks — ramping up an existing account, starting fresh, or designing beautiful listings — and turn the plan into action.</p></article>
            <article className="step"><h3>Assess, Grow and Scale</h3><p>Careful expansion next. We shoot for sales or health targets, use learned data to grow, and keep you in the conversation with regular updates and reports.</p></article>
          </div>
          <p style={{ marginTop: 20 }}><b>Ready to dive in?</b> Schedule a call with one of our PPC specialists. <a className="btn" href="/contact">Book a Call →</a></p>
        </div>
      </section>

      {/* Stats band */}
      <section className="section section-navy" aria-labelledby="stats">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 id="stats"><Counter to={50} suffix="+" /> brands thrive with us</h2>
          <p className="lead" style={{ margin: '0 auto' }}>As we uncover the effortless path to success — $10M+ in managed ad spend, 5.0★ client rated.</p>
          <p style={{ marginTop: 20 }}><a className="btn" href="/case-studies">See Case Studies of Our Work →</a></p>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="section band-peach" aria-labelledby="report">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Free Download</span>
            <h2 id="report">Download StoreStride&apos;s Amazon PPC Audit Guide</h2>
            <p className="lead">The top changes to watch out for in Amazon advertising — ad spend, ROAS and ACoS, explained in plain English.</p>
            <p><a className="btn btn-pulse" href="/contact">Claim Your Copy →</a></p>
          </div>
          <div className="card">
            <h3>What&apos;s inside</h3>
            <p>✓ The 10 most common PPC mistakes<br />✓ How to read ACOS vs TACOS properly<br />✓ A 24-hour audit checklist<br />✓ Real numbers from real accounts</p>
          </div>
        </div>
      </section>

      {/* In the wild — blog cards */}
      <section className="section" aria-labelledby="wild">
        <div className="container">
          <span className="eyebrow">StoreStride&apos;s In The Wild</span>
          <h2 id="wild">From the blog and the podcast</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            <article className="card"><img className="img-card" src="/images/warehouse.jpg" alt="Amazon warehouse shelves packed with products ready to ship" /><span className="tag">Blog</span><h3>When should your business consider using Amazon DSP?</h3><p>DSP is not just for big brands. Here is how to know when retargeting will pay for itself.</p><p><a href="/blog"><b>Read →</b></a></p></article>
            <article className="card"><img className="img-card" src="/images/analytics.jpg" alt="Laptop showing advertising performance charts and analytics" /><span className="tag">Blog</span><h3>ACOS vs TACOS: the number that actually matters</h3><p>Most sellers optimise the wrong metric. Here is the one we judge every account on.</p><p><a href="/blog"><b>Read →</b></a></p></article>
            <article className="card"><img className="img-card" src="/images/checkout.jpg" alt="Online shopping and checkout on a phone and laptop" /><span className="tag">Podcast</span><h3>Holiday lessons for Q1 wins</h3><p>What the busiest quarter teaches you about the quiet one — and how to plan for it.</p><p><a href="/podcast"><b>Listen →</b></a></p></article>
          </div>
          <p style={{ marginTop: 20 }}><a className="btn btn-navy" href="/blog">View All Blogs →</a></p>
        </div>
      </section>

      {/* Podcast band */}
      <section className="section band-teal" aria-labelledby="podcast">
        <div className="container">
          <span className="eyebrow eyebrow-light">Podcast</span>
          <h2 id="podcast">The StoreStride Podcast — Beyond PPC</h2>
          <p className="lead">A deep dive into the world of eCommerce, offering expert insights into Amazon and Google advertising, and the latest industry trends — with actionable strategies you can apply directly.</p>
          <p><a className="btn" href="/podcast">View All Episodes →</a> <span style={{ marginLeft: 12 }}>Tune in and stay ahead of the curve!</span></p>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section-soft" aria-labelledby="reviews">
        <div className="container">
          <span className="eyebrow">Client Reviews</span>
          <h2 id="reviews">What our clients say</h2>
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
      <section className="section section-soft" id="tools" aria-labelledby="tools">
        <div className="container">
          <span className="eyebrow">Free Tools</span>
          <h2 id="tools">Free Amazon PPC Calculators</h2>
          <p className="lead">The same maths we use on client accounts. Try your own numbers.</p>
          <div style={{ marginTop: 24 }}><Calculators /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" aria-labelledby="faq">
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
