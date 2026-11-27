import type { Metadata } from 'next';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Amazon Services | StoreStride — PPC, DSP, Listings & Full Account Management',
  description: 'All 8 StoreStride Amazon services: PPC management, DSP, Google Ads for Amazon, listing optimisation, storefront design, full account management, ad account audit and Brand Video.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <>
      <section className="hero-light">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Amazon services we run for you</h1>
          <p className="lead">Every service is managed by in-house specialists, supported by data from 50+ Amazon accounts. Pick one — or let us run the whole account.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((s) => (
              <article className="card" key={s.slug}>
                <div className="icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3><p>{s.short}</p>
                <p><a href={`/services/${s.slug}`}><b>Learn More →</b></a></p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28 }}><a className="btn btn-pulse" href="/contact">📞 Book a Call — Free Audit First</a></p>
        </div>
      </section>
    </>
  );
}
