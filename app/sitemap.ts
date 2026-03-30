import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL

  const langs = ALL_LANGS

  // Priority 1.0 - Homepage
  const homepages = langs.map(lang => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }))

  // Priority 0.9 - Machine landing pages (highest conversion value)
  const machinePages = [
    '/machines/pouch-packing-machine',
    '/machines/powder-filling-machine',
    '/machines/liquid-filling-machine',
    '/machines/snack-processing-line',
    '/machines/conveyor-system',
  ]
  const machineSitemap = machinePages.flatMap(route =>
    langs.map(lang => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  )

  // Priority 0.85 - Machinery categories + recommend
  const machineryRoutes = [
    '/machinery',
    '/machinery/packaging',
    '/machinery/food-processing',
    '/machinery/filling-sealing',
    '/machinery/conveying-automation',
    '/machinery/custom',
    '/recommend',
  ]
  const machinerySitemap = machineryRoutes.flatMap(route =>
    langs.map(lang => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))
  )

  // Priority 0.7 - Supporting pages
  const supportRoutes = [
    '/industries',
    '/solutions',
    '/about',
    '/contact',
    '/resources',
  ]
  const supportSitemap = supportRoutes.flatMap(route =>
    langs.map(lang => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  // Priority 0.65 - Resource articles
  const articleSlugs = [
    // Comparison
    '/resources/vffs-vs-hffs',
    '/resources/auger-vs-volumetric-filler',
    '/resources/piston-vs-pump-filler',
    '/resources/premade-pouch-machine-vs-vffs',
    '/resources/semi-auto-vs-full-auto-packaging-line',
    // Selection guides
    '/resources/how-to-choose-powder-filling-machine',
    '/resources/how-to-choose-liquid-filling-machine',
    '/resources/how-to-choose-pouch-packing-machine',
    '/resources/how-to-choose-conveyor-system',
    // Application guides
    '/resources/spice-powder-packaging',
    '/resources/spice-powder-packaging-machine',
    '/resources/flour-packaging',
    '/resources/flour-packaging-machine-guide',
    '/resources/sauce-filling',
    '/resources/sauce-filling-machine-selection',
    '/resources/snack-packing',
    '/resources/detergent-powder-packaging',
    '/resources/detergent-powder-packaging-machine',
    '/resources/protein-powder-filling-machine',
    '/resources/edible-oil-filling-machine',
    // Buying guides
    '/resources/what-to-include-in-quote-request',
    '/resources/what-to-prepare-before-machine-quote',
    '/resources/voltage-customization-for-export',
    '/resources/ce-guide-for-machinery-buyers',
  ]
  const articleSitemap = articleSlugs.flatMap(route =>
    langs.map(lang => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  )

  return [...homepages, ...machineSitemap, ...machinerySitemap, ...supportSitemap, ...articleSitemap]
}
