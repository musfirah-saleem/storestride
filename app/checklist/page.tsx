import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ultimate PPC Checklist | StoreStride',
  description: 'The ultimate Amazon PPC checklist: campaign structure, keywords, bids, negatives, listings and reporting — everything to check before you scale.',
  alternates: { canonical: '/checklist' },
};

const groups = [
  { title: 'Campaign structure', items: ['One product per campaign', 'Match types separated (exact / phrase / broad)', 'Auto + manual campaigns running together', 'Portfolios set up per product line'] },
  { title: 'Keywords', items: ['Search-term report checked weekly', 'Converting terms moved to exact match', 'New keywords added from auto campaigns', 'Irrelevant terms negated — exact + phrase'] },
  { title: 'Bids & budgets', items: ['Bids set from margin, not from a guess', 'Top-of-search multipliers reviewed', 'Budgets checked daily — no campaign running dry', 'DayParting on for your peak hours'] },
  { title: 'Listings', items: ['Title, bullets and backend keywords done', 'Main image + infographics up to date', 'A+ Content live on every hero ASIN', 'Price and stock checked before scaling ads'] },
  { title: 'Reporting', items: ['ACOS and TACOS tracked side by side', 'Organic rank tracked for top keywords', 'Weekly report: what changed and why', 'Monthly plan: targets, timeline, next fixes'] },
];

export default function Checklist() {
  return (
    <>
      <section className="hero-light">
        <div className="container">
          <span className="eyebrow">Free Resource</span>
          <h1>The Ultimate Amazon PPC Checklist</h1>
          <p className="lead">Everything to check before you scale — the same checklist we run on every client account, every week.</p>
          <p><a className="btn btn-pulse" href="/contact">Get the Printable Copy →</a></p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {groups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.items.map((i) => `☐ ${i}`).join('\n')}</p>
              </article>
            ))}
            <article className="card card-dark">
              <h3>Want us to run the checklist for you?</h3>
              <p>Book a free audit — we&apos;ll run it on your account and send you the findings in 24 hours.</p>
              <p><a className="btn" href="/contact">Book a Free Audit →</a></p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
