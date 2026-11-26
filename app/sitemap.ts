import type { MetadataRoute } from 'next';

// Add a page here when you add a route, or Google won't find it.
const SITE_URL = 'https://storestride-website.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/case-studies', '/pricing', '/contact'];
  return pages.map((p) => ({
    url: `${SITE_URL}${p || '/'}`,
    lastModified: new Date('2026-11-26'),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));
}
