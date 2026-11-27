import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | StoreStride — Amazon PPC Guides & Insights',
  description: 'StoreStride blog: Amazon PPC strategy, ACOS vs TACOS, DSP, listing optimisation and real numbers from real accounts.',
  alternates: { canonical: '/blog' },
};

const posts = [
  { tag: 'PPC Strategy', title: 'When should your business consider using Amazon DSP?', text: 'DSP is not just for big brands. Here is how to know when retargeting will pay for itself.' },
  { tag: 'PPC Strategy', title: 'ACOS vs TACOS: the number that actually matters', text: 'Most sellers optimise the wrong metric. Here is the one we judge every account on.' },
  { tag: 'Listings', title: 'Listing optimisation: titles, bullets and A+ that actually convert', text: 'Keyword research is only half the job. The other half is writing like a human who wants to buy.' },
  { tag: 'Launches', title: 'New product launch: from zero to steady sales in 60 days', text: 'Launch-phase PPC and keyword rank strategy, step by step — with the numbers to prove it.' },
  { tag: 'DSP', title: 'Retargeting that pays: DSP + Sponsored Display, done together', text: 'How one pet brand went from $200K to $1.2M with DSP and Sponsored Products working as one funnel.' },
  { tag: 'Account Health', title: 'The 10 most common PPC mistakes (and how to fix them)', text: 'Wasted spend, broken structure, missing negatives — the audit findings we see on almost every account.' },
];

export default function Blog() {
  return (
    <>
      <section className="hero-light">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1>Blog</h1>
          <p className="lead">Amazon PPC strategy, DSP, listings and real numbers from real accounts — written by the people running them.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((p) => (
              <article className="card" key={p.title}>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3><p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
