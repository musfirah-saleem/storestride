import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amazon PPC Case Studies',
  description: 'Real StoreStride results: supplement brand $1.5M in 12 months, blanket brand +71% revenue, pet brand $200K to $1.2M, baby brand TACOS cut from 25% to 4%.',
  alternates: { canonical: '/case-studies' },
};

const cases = [
  { title: 'Supplement Brand — $1.5M in Sales. No Social Media. No External Traffic.', body: 'Built campaigns from scratch — proper keyword research, clean structure, tight bids — and kept tightening every week. Twelve months in: $1.5M in sales at a 40% net margin. Everything came from inside Amazon.', stats: '$1.5M Total Sales · 40% Net Margin · 12mo' },
  { title: 'Blanket Brand — They Were About to Pull the Plug on Ads', body: 'Tore apart the old campaigns, rebuilt the keyword structure properly, and cut everything that wasn’t pulling its weight. Two months later — revenue up 71%, ROAS at 200%.', stats: '+71% Revenue · 200% ROAS · 2mo' },
  { title: 'Pet Supplies — From $200K to $1.2M', body: 'Introduced DSP to go after audiences outside of search, layered Sponsored Display for retargeting, and used Sponsored Products to protect core terms. $1.2M in annual revenue by year end.', stats: '$1.2M Annual Revenue · 6× Growth · DSP + Full Funnel' },
  { title: 'Baby Products — TACOS 25% → 4%', body: 'Aggressive negative keyword pruning and bid restructuring cut TACOS by 84% while protecting sales.', stats: '4% TACOS · 84% Reduction' },
  { title: 'Beauty Brand — Brand New. Zero Reviews. Page 1 in 6 Months.', body: 'Exact-match campaigns to build early rank, pushed hard on converting keywords, adjusted bids week by week as reviews came in. Month 6: page one, 3× ROAS.', stats: '3× ROAS · Page 1 · 6mo' },
  { title: 'New Launch — £34K/Month by Month Six', body: 'Fresh listing, blank slate. Tight exact-match campaigns to push early rank, tested the main image until CTR improved, then pushed Sponsored Brand Video hard.', stats: '£34K/mo · 6mo · From Launch' },
];

export default function CaseStudies() {
  return (
    <section className="section"><div className="container">
      <span className="eyebrow">Proof of Results</span>
      <h1>Real Brands. Real Numbers.</h1>
      <p className="lead">Every result below is documented. Before we start, we audit. After we start, we prove it.</p>
      <div className="grid grid-2" style={{ marginTop: 28 }}>
        {cases.map((c) => (<article className="card" key={c.title}><h3>{c.title}</h3><p>{c.body}</p><p><b>{c.stats}</b></p></article>))}
      </div>
      <p style={{ marginTop: 28 }}><a className="btn" href="/contact">Book a Free Audit →</a></p>
    </div></section>
  );
}
