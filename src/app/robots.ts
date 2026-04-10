import type { MetadataRoute } from 'next';
import { string } from '@/utils/string';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/'],
  },
  host: string.metadata.url,
  sitemap: `${string.metadata.url}/sitemap.xml`,
});

export default robots;
