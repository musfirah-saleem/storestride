import type { MetadataRoute } from 'next';

// Lets Google in, keeps /api/ out.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://storestride-website.vercel.app/sitemap.xml',
  };
}
