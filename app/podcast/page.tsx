import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcast | StoreStride — Beyond PPC',
  description: 'The StoreStride Podcast — Beyond PPC: deep dives into Amazon and Google advertising, eCommerce trends and actionable strategies.',
  alternates: { canonical: '/podcast' },
};

const episodes = [
  { n: 'Ep. 12', title: 'Holiday lessons for Q1 wins', text: 'What the busiest quarter teaches you about the quiet one — and how to plan for it.' },
  { n: 'Ep. 11', title: 'ACOS vs TACOS, explained properly', text: 'The metric most sellers get wrong, and how we set targets from real margins.' },
  { n: 'Ep. 10', title: 'DSP for small brands: does it pay?', text: 'Retargeting budgets, audience layering, and when DSP beats Sponsored Display.' },
  { n: 'Ep. 09', title: 'Launch strategy: zero to page one', text: 'Exact-match rank building, then pushing the converting keywords hard.' },
  { n: 'Ep. 08', title: 'Listing copy that converts', text: 'Titles, bullets and A+ Content — written for buyers, not just for the algorithm.' },
  { n: 'Ep. 07', title: 'The 10 PPC mistakes we see everywhere', text: 'Wasted spend, broken structure, missing negatives — and the fixes.' },
];

export default function Podcast() {
  return (
    <>
      <section className="hero-light">
        <div className="container">
          <span className="eyebrow">Podcast</span>
          <h1>The StoreStride Podcast — Beyond PPC</h1>
          <p className="lead">Welcome to the Beyond PPC Podcast — a comprehensive resource not just for Amazon sellers, but for all e-commerce enthusiasts, advertisers, and marketers. Each episode is a deep dive into the world of eCommerce, with actionable strategies you can apply directly.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {episodes.map((e) => (
              <article className="card" key={e.n}>
                <span className="tag">{e.n}</span>
                <h3>{e.title}</h3><p>{e.text}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>Tune in and stay ahead of the curve! New episodes every month.</p>
        </div>
      </section>
    </>
  );
}
