import { MetadataRoute } from 'next'
import { posts } from '@/content/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const insightsRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.oriconsultoria.com/insights',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://www.oriconsultoria.com/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    {
      url: 'https://www.oriconsultoria.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.oriconsultoria.com/valoracion',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.oriconsultoria.com/valoracion/calculadora',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.oriconsultoria.com/consultoria-comercial-b2b-quito',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.oriconsultoria.com/estrategia-de-ventas-b2b-ecuador',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.oriconsultoria.com/alianzas-estrategicas-b2b-ecuador',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.oriconsultoria.com/como-aumentar-ventas-b2b-ecuador',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.oriconsultoria.com/acceso-canal-corporativo-b2b-ecuador',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...insightsRoutes,
  ]
}
