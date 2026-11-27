'use client';
import { useState } from 'react';

// Pathfinder-style nav: white bar, logo left, menu centre with hover dropdowns,
// orange pill CTA right. Dropdowns open on hover (desktop) and tap (mobile).
const services = [
  { icon: '🎯', href: '/services/amazon-ppc-management', label: 'Amazon PPC Management' },
  { icon: '📺', href: '/services/amazon-dsp', label: 'Amazon DSP' },
  { icon: '🔎', href: '/services/google-ads-for-amazon', label: 'Google Ads for Amazon' },
  { icon: '📝', href: '/services/listing-optimization', label: 'Listing Optimization' },
  { icon: '🏪', href: '/services/storefront-design', label: 'Storefront Design' },
  { icon: '🗂️', href: '/services/full-account-management', label: 'Full Account Management' },
  { icon: '🔍', href: '/services/ad-account-audit', label: 'A–Z Ad Account Audit' },
  { icon: '🎥', href: '/services/sponsored-brand-video', label: 'Sponsored Brand Video' },
];
const resources = [
  { icon: '📰', href: '/blog', label: 'Blog' },
  { icon: '🎙️', href: '/podcast', label: 'Podcast' },
  { icon: '📬', href: '/checklist', label: 'PPC Checklist' },
  { icon: '📈', href: '/case-studies', label: 'Case Studies' },
  { icon: '🧰', href: '/#tools', label: 'Free Calculators' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site">
      <div className="container nav">
        <a className="logo" href="/" aria-label="StoreStride home">Store<span>Stride</span></a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="/" className="nav-active">Home</a>
          <div className="nav-item">
            <span className="nav-label">Services ⌄</span>
            <div className="dropdown">
              {services.map((s) => (
                <a key={s.href} href={s.href}><span aria-hidden="true">{s.icon} </span>{s.label}</a>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-label">Resources ⌄</span>
            <div className="dropdown">
              {resources.map((s) => (
                <a key={s.href} href={s.href}><span aria-hidden="true">{s.icon} </span>{s.label}</a>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-label">About us ⌄</span>
            <div className="dropdown">
              <a href="/team"><span aria-hidden="true">👥 </span>Team</a>
              <a href="/case-studies"><span aria-hidden="true">🏆 </span>Case Studies</a>
            </div>
          </div>
          <a href="/contact">Contact Us</a>
        </nav>
        <a className="btn nav-cta" href="/contact">📞 Book a Call</a>
      </div>
    </header>
  );
}
