import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | StoreStride — Amazon PPC Experts',
  description: 'Meet the StoreStride team: senior Amazon PPC specialists, designers and copywriters running your whole Amazon account end to end.',
  alternates: { canonical: '/team' },
};

const values = [
  { title: 'Ownership', text: 'We own the numbers — revenue, profit, TACOS — not just the tasks.' },
  { title: 'Simplicity', text: 'Plain language, clear plans, no jargon. If you can’t understand it, we haven’t explained it.' },
  { title: 'Clients Come First', text: 'Your margin matters more than our retainer. We say so when a spend doesn’t make sense.' },
  { title: 'Continuous Improvement', text: 'Every account, every week, a little better than last week.' },
  { title: 'Radical Honesty', text: 'When results dip, we tell you why and what we are changing. No hiding behind reports.' },
];

export default function Team() {
  return (
    <>
      <section className="hero-light">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Team of Amazon PPC experts</h1>
          <p className="lead">When you work with StoreStride, you work directly with senior Amazon advertising specialists — not junior account managers.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <article className="card"><h3>Muhammad Moin</h3><p><b>CEO &amp; Founder</b></p><p>“My name and my reputation are on every brand we work with, so I hold our work to the highest standard there is.”</p><p><b>$10M+ ad spend managed · 50+ brands scaled · 5+ yrs Amazon PPC · 5.0★ client rated</b></p></article>
            <article className="card"><h3>Usman Azam</h3><p><b>Co-Founder &amp; Head of Strategy</b></p><p>“My focus has always been on the numbers that actually matter — not just impressions or clicks, but net margin, TACOS, and real revenue growth.”</p><p><b>84% TACOS reduction (case) · 3× ROAS improvement (case)</b></p></article>
          </div>
          <h2 style={{ marginTop: 48 }}>Our core values</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {values.map((v) => (
              <article className="card" key={v.title}><h3>{v.title}</h3><p>{v.text}</p></article>
            ))}
            <article className="card card-dark"><h3>Want to work with us?</h3><p>Book a free call — we&apos;ll tell you honestly whether we can help.</p><p><a className="btn" href="/contact">Book a Call →</a></p></article>
          </div>
        </div>
      </section>
    </>
  );
}
