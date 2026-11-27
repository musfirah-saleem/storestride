import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AuditForm from '@/components/AuditForm';
import Icon from '@/components/Icons';
import { services } from '@/lib/services';

// One template, 8 service pages — same shape as Pathfinder's service pages.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | StoreStride — Amazon Agency UK`,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  // Real photo per service — bundled with the site, no hotlinks.
  const serviceImg: Record<string, { src: string; alt: string }> = {
    'amazon-ppc-management': { src: '/images/analytics.jpg', alt: 'Advertising performance charts on a laptop' },
    'amazon-dsp': { src: '/images/warehouse.jpg', alt: 'Amazon warehouse shelves packed with products' },
    'google-ads-for-amazon': { src: '/images/checkout.jpg', alt: 'Customers checking out online' },
    'amazon-listing-optimization': { src: '/images/supplements.jpg', alt: 'Supplement products, optimised listings' },
    'amazon-storefront-design': { src: '/images/home.jpg', alt: 'A beautifully styled home storefront look' },
    'full-account-management': { src: '/images/meeting.jpg', alt: 'StoreStride specialists planning a client account' },
    'a-z-ad-account-audit': { src: '/images/analytics.jpg', alt: 'Deep dive into ad account data' },
    'sponsored-brand-video': { src: '/images/hero-team.jpg', alt: 'The StoreStride team at work' },
  };
  const img = serviceImg[s.slug] ?? { src: '/images/hero-team.jpg', alt: 'The StoreStride team at work' };
  return (
    <>
      {/* Hero — light, Pathfinder-style, with floating stat cards */}
      <section className="hero-light">
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="eyebrow"><Icon name={s.icon} size={15} /> {s.title}</span>
            <h1>{s.title}</h1>
            <p className="lead">{s.hero}</p>
            <p><a className="btn btn-pulse" href="/contact">Schedule a Free Audit →</a>{' '}<a className="btn btn-navy" href="/services">All Services</a></p>
          </div>
          <div className="hero-visual fade-up-2">
            <div className="hero-shape" />
            <div className="hero-photo">
              <img src={img.src} alt={img.alt} />
              <div className="hero-photo-caption">
                <p className="big">{s.stats[0].metric}</p>
                <p>{s.stats[0].label}</p>
              </div>
            </div>
            <div className="float-card fc-1">★★★★★ Excellent<small>5.0 client rated</small></div>
            <div className="float-card fc-2">✓ Amazon Ads Verified Partner</div>
            <div className="float-card fc-3">{s.stats[1].metric} {s.stats[1].label}</div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="what">
        <div className="container">
          <span className="eyebrow">What&apos;s Included</span>
          <h2 id="what">What you get with {s.title}</h2>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {s.points.map((p) => (
              <article className="card" key={p}><h3>✓ {p}</h3></article>
            ))}
          </div>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {s.stats.map((st) => (
              <div className="card" key={st.label} style={{ textAlign: 'center' }}>
                <p className="case-metric">{st.metric}</p><p style={{ margin: 0 }}>{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="more">
        <div className="container">
          <span className="eyebrow">Explore More Services</span>
          <h2 id="more">Other ways our experts can help</h2>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {others.map((o) => (
              <article className="card" key={o.slug}>
                <h3><Icon name={o.icon} size={20} /> {o.title}</h3><p>{o.short}</p>
                <p><a href={`/services/${o.slug}`}><b>Learn more →</b></a></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" aria-labelledby="faq">
        <div className="container">
          <span className="eyebrow">Questions</span>
          <h2 id="faq">Frequently asked — {s.title}</h2>
          {s.faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="audit">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Get Your Free Audit</span>
          <h2 id="audit">Start with a free {s.title} audit</h2>
          <p className="lead">Fill in the form and we&apos;ll deliver a full account audit — no commitment, no sales pressure, just real insights.</p>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
