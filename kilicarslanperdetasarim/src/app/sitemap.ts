import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { business } from '@/data/business'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.url

  // Base routes
  const routes = [
    '',
    '/modeller',
    '/yapilan-isler',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/modeller/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...routes, ...productRoutes]
}
