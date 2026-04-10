import type { MetadataRoute } from 'next';
import { string } from '@/utils/string';

const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.8 },
  { path: '/projects', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${string.metadata.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
};

export default sitemap;
