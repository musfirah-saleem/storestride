import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Custom Amazon PPC Quotes',
  description: 'StoreStride pricing: every quote is custom — no hidden fees. Scoped to your ad spend, number of ASINs and growth objectives. Book a free audit call for a no-obligation proposal.',
  alternates: { canonical: '/pricing' },
};

export default function Pricing() {
  return (
    <section className="section"><div className="container">
      <span className="eyebrow">Pricing</span>
      <h1>Every Quote Is Custom — No Hidden Fees</h1>
      <p className="lead">We scope your engagement based on your ad spend, number of ASINs, and growth objectives. Book a free audit call and we will put together a proposal with no obligation.</p>
      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <article className="card"><h3>PPC Management</h3><p>Sponsored Products, Brands &amp; Display. Full campaign build, weekly optimisation, monthly reporting.</p><p><b>Custom quote</b></p></article>
        <article className="card"><h3>Listing Optimisation</h3><p>Title, bullets, description, backend keywords and A+ Content — written to rank and convert.</p><p><b>Custom quote</b></p></article>
        <article className="card"><h3>Full Account Management</h3><p>End-to-end Amazon management: ads, listings, inventory planning, Brand Registry and growth strategy.</p><p><b>Custom quote</b></p></article>
      </div>
      <p style={{ marginTop: 24 }}>Included free for every client: dedicated success manager, monthly performance reports, private client community, bi-weekly strategy calls, competitor monitoring, keyword ranking tracking and VIP priority support.</p>
      <p><a className="btn" href="/contact">Book Free Audit Call →</a></p>
    </div></section>
  );
}
