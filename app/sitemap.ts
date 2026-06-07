import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rbtechsphere.com';

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/custom-website-development',
    '/services/web-application-development',
    '/services/mobile-app-development',
    '/services/seo-digital-marketing',
    '/services/ui-ux-design',
    '/services/odoo-erp-solutions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.8 : 0.6,
  }));
}
