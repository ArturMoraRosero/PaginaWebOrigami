import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/valoracion/login'],
    },
    sitemap: 'https://www.oriconsultoria.com/sitemap.xml',
  }
}
