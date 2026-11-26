import type { Metadata } from 'next';
import AuditForm from '@/components/AuditForm';

export const metadata: Metadata = {
  title: 'Amazon PPC Services',
  description: 'StoreStride Amazon PPC services: Sponsored Products, Sponsored Brands, Sponsored Display, Amazon DSP, Brand Video, listing optimisation, listing creation and full account management.',
  alternates: { canonical: '/services' },
};

const list = [
  ['PPC Management', 'Sponsored Products, Brands & Display. Full campaign build, weekly optimisation, and monthly reporting. TACOS-led bids, keyword harvesting, negative pruning.'],
  ['Amazon DSP', 'Re-engage high-intent shoppers on and off Amazon. Audience layering, retargeting and Amazon Marketing Cloud reporting.'],
  ['Sponsored Brand Video', 'High-converting auto-play video ads in search results — one of Amazon’s highest click-through formats.'],
  ['Listing Optimisation', 'Title, bullets, description, backend keywords and A+ Content — written to rank and convert.'],
  ['Listing Creation', 'Complete listing from scratch — keyword research through to A+ Content — so you start selling from day one.'],
  ['Keyword Research', 'Deep keyword discovery, search volume analysis and competitor keyword gap mapping.'],
  ['Product Launch', 'Launch strategy, ranking campaigns and review generation to get new products to page one fast.'],
  ['Full Account Management', 'End-to-end Amazon management: ads, listings, inventory planning, Brand Registry and growth strategy.'],
];

export default function Services() {
  return (
    <section className="section"><div className="container">
      <span className="eyebrow">Our Services</span>
      <h1>Tailored to Your Account &amp; Goals</h1>
      <p className="lead">Every brand is different — ad spend, category, competition and growth stage all affect what the right strategy looks like. We scope every engagement individually so you only pay for what your account actually needs.</p>
      <div className="grid grid-2" style={{ marginTop: 28 }}>
        {list.map(([t, d]) => (<article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>))}
      </div>
      <div style={{ marginTop: 36 }}><AuditForm /></div>
    </div></section>
  );
}
