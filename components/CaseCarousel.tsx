'use client';
import { useState } from 'react';

// Pathfinder-style case carousel — tabs + prev/next, stat blocks per case.
const cases = [
  { brand: 'Supplement Brand', metric: '$1.5M', label: 'Sales in 12 months · 40% net margin', story: 'No social media. No external traffic. Just Amazon — proper keyword research, clean structure, tight bids, optimised every week.', img: '/images/supplements.jpg', alt: 'Supplement capsules and vitamins' },
  { brand: 'Blanket / Home', metric: '+71%', label: 'Revenue in 2 months · 200% ROAS', story: 'The owner was about to pull the plug on ads. We rebuilt the keyword structure and cut what wasn’t pulling its weight.', img: '/images/home.jpg', alt: 'Cozy home interior with a blanket on the sofa' },
  { brand: 'Pet Supplies', metric: '$1.2M', label: 'Annual revenue · 6× from $200K', story: 'Stuck at $200K for two years. DSP + Sponsored Display retargeting + Sponsored Products on core terms.', img: '/images/dogs.jpg', alt: 'Happy dogs running outdoors' },
  { brand: 'Baby Products', metric: '4%', label: 'TACOS — was 25% · 84% cut', story: 'Aggressive negative keyword pruning. Same sales, far less wasted spend.', img: '/images/baby.jpg', alt: 'Baby products for new parents' },
  { brand: 'Beauty Brand', metric: '3×', label: 'ROAS · Page 1 in 6 months', story: 'Brand new, zero reviews. Exact-match rank building, then pushed the converting keywords hard.', img: '/images/checkout.jpg', alt: 'Customers shopping for beauty products online' },
];

export default function CaseCarousel() {
  const [i, setI] = useState(0);
  const c = cases[i];
  return (
    <div className="carousel">
      <div className="carousel-tabs" role="tablist" aria-label="Case studies">
        {cases.map((x, idx) => (
          <button key={x.brand} className={idx === i ? 'active' : ''} onClick={() => setI(idx)}>{x.brand}</button>
        ))}
      </div>
      <div className="card" style={{ padding: 32 }}>
        <img className="img-card" src={c.img} alt={c.alt} />
        <span className="tag">{c.brand}</span>
        <p className="case-metric" style={{ fontSize: '2.6rem' }}>{c.metric}</p>
        <h3>{c.label}</h3>
        <p>{c.story}</p>
        <p><a href="/case-studies"><b>Read the case study →</b></a></p>
      </div>
      <p style={{ marginTop: 16 }}>
        <button className="carousel-arrow" aria-label="Previous case study" onClick={() => setI((i - 1 + cases.length) % cases.length)}>←</button>{' '}
        <button className="carousel-arrow" aria-label="Next case study" onClick={() => setI((i + 1) % cases.length)}>→</button>
        <span style={{ marginLeft: 12 }}>{i + 1} of {cases.length}</span>
      </p>
    </div>
  );
}
