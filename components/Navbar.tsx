'use client';
import { useState } from 'react';
import Icon from '@/components/Icons';

// Pathfinder-style nav: white bar, logo left, menu centre with hover dropdowns,
// orange pill CTA right. Clean white line icons — no emojis.
const services = [
  { icon: 'target', href: '/services/amazon-ppc-management', label: 'Amazon PPC Management' },
  { icon: 'tv', href: '/services/amazon-dsp', label: 'Amazon DSP' },
  { icon: 'search', href: '/services/google-ads-for-amazon', label: 'Google Ads for Amazon' },
  { icon: 'doc', href: '/services/listing-optimization', label: 'Listing Optimization' },
  { icon: 'store', href: '/services/storefront-design', label: 'Storefront Design' },
  { icon: 'folder', href: '/services/full-account-management', label: 'Full Account Management' },
  { icon: 'audit', href: '/services/ad-account-audit', label: 'A–Z Ad Account Audit' },
  { icon: 'video', href: '/services/sponsored-brand-video', label: 'Sponsored Brand Video' },
];
const resources = [
  { icon: 'news', href: '/blog', label: 'Blog' },
  { icon: 'mic', href: '/podcast', label: 'Podcast' },
  { icon: 'checklist', href: '/checklist', label: 'PPC Checklist' },
  { icon: 'chart', href: '/case-studies', label: 'Case Studies' },
  { icon: 'calc', href: '/#tools', label: 'Free Calculators' },
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
                <a key={s.href} href={s.href}><Icon name={s.icon} size={18} /> {s.label}</a>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-label">Resources ⌄</span>
            <div className="dropdown">
              {resources.map((s) => (
                <a key={s.href} href={s.href}><Icon name={s.icon} size={18} /> {s.label}</a>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-label">About us ⌄</span>
            <div className="dropdown">
              <a href="/team"><Icon name="users" size={18} /> Team</a>
              <a href="/case-studies"><Icon name="trophy" size={18} /> Case Studies</a>
            </div>
          </div>
          <a href="/contact">Contact Us</a>
        </nav>
        <a className="btn nav-cta" href="/contact"><Icon name="phone" size={17} /> Book a Call</a>
      </div>
    </header>
  );
}
