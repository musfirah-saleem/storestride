import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';

// Add a page here when you add a route, or Google won't find it.
const SITE_URL = 'https://storestride.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '', '/services', '/case-studies', '/pricing', '/contact',
    '/team', '/blog', '/podcast', '/checklist',
    ...services.map((s) => `/services/${s.slug}`),
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p || '/'}`,
    lastModified: new Date('2026-11-27'),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));
}
