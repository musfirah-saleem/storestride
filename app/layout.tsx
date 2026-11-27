import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Change this when the live domain changes — sitemap + canonical use it too.
const SITE_URL = 'https://storestride.vercel.app';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
const SITE_NAME = 'StoreStride';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#004D6D' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Full-Service Amazon Marketing Agency | StoreStride',
    template: '%s | StoreStride — Amazon PPC Agency UK',
  },
  description:
    'StoreStride is a UK-based, senior-led Amazon PPC agency. Full-funnel Amazon advertising — Sponsored Products, DSP, Brand Video, listing optimisation and full account management. $10M+ ad spend managed, 50+ brands scaled.',
  keywords: [
    'Amazon PPC agency UK', 'Amazon advertising agency', 'Amazon PPC management',
    'Sponsored Products', 'Amazon DSP', 'Amazon listing optimisation',
    'Amazon account management', 'Amazon PPC agency', 'StoreStride',
  ],
  authors: [{ name: 'StoreStride' }],
  creator: 'StoreStride',
  publisher: 'StoreStride',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_GB', url: SITE_URL, siteName: SITE_NAME,
    title: 'StoreStride | Amazon PPC Agency UK | Full-Funnel Amazon Advertising',
    description: 'Data-driven Amazon PPC that scales brands. $10M+ ad spend managed, 50+ brands, 5.0★ client rated. Free account audit.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'StoreStride — Amazon PPC Agency UK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoreStride | Amazon PPC Agency UK',
    description: 'Full-funnel Amazon advertising that scales brands. Free account audit.',
    images: ['/og.jpg'],
  },
  category: 'Amazon PPC Agency',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService', '@id': `${SITE_URL}/#org`,
      name: 'StoreStride', url: SITE_URL,
      description: 'UK-based Amazon PPC agency offering full-funnel Amazon advertising, DSP, Brand Video, listing optimisation and full account management.',
      email: 'amzservices@storestride.com', telephone: '+44 7950 471970',
      address: { '@type': 'PostalAddress', streetAddress: '13 Holdich Street', addressLocality: 'Peterborough', postalCode: 'PE3 6DH', addressCountry: 'GB' },
      areaServed: ['GB', 'US', 'EU'], priceRange: '$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '50' },
    },
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <header className="site">
          <div className="container nav">
            <a className="logo" href="/" aria-label="StoreStride home">Store<span>Stride</span></a>
            <nav className="nav-links" aria-label="Main navigation">
              <a href="/services">Services</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
            </nav>
            <a className="btn" href="/contact">Free Audit</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site">
          <div className="container footer-grid">
            <div>
              <h3>StoreStride</h3>
              <p>Full-funnel Amazon advertising agency helping brands scale revenue with data-driven PPC strategies and transparent, no-fluff reporting.</p>
              <p>Amazon Ads Partner Network Member · Helium 10 Partner · PickFu Certified</p>
            </div>
            <div>
              <h4>Services</h4>
              <p><a href="/services">Sponsored Products</a><br /><a href="/services">Sponsored Brands</a><br /><a href="/services">Amazon DSP</a><br /><a href="/services">Brand Video Ads</a><br /><a href="/services">Account Management</a></p>
            </div>
            <div>
              <h4>Company</h4>
              <p><a href="/case-studies">Case Studies</a><br /><a href="/pricing">Pricing</a><br /><a href="/contact">Contact Us</a><br /><a href="/">Our Process</a></p>
            </div>
            <div>
              <h4>Get In Touch</h4>
              <p><a href="mailto:amzservices@storestride.com">amzservices@storestride.com</a><br /><a href="tel:+447950471970">+44 7950 471 970</a><br />13 Holdich Street<br />Peterborough, PE3 6DH, England, UK</p>
            </div>
          </div>
          <div className="container"><p style={{ marginTop: 28, fontSize: '.85rem' }}>© 2026 StoreStride. All rights reserved.</p></div>
        </footer>
      </body>
    </html>
  );
}
