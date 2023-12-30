import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://write34.com/sitemap.xml',
      'https://write34.com/scenarios/sitemap.xml',
    ]
  };
}