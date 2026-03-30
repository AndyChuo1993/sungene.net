// ─── Canonical article data — single source of truth ────────────────────────
// Used by: sitemap.ts, app/[lang]/resources/page.tsx
// All 19 canonical slugs (old slugs 301 redirect to these)

export type ArticleCategory = 'comparison' | 'selection' | 'application' | 'buying'

export interface ArticleData {
  slug: string          // path segment, e.g. 'vffs-vs-hffs'
  category: ArticleCategory
  relatedMachine?: string  // machine page slug, e.g. 'pouch-packing-machine'
}

// Full path = /resources/{slug}
export const ARTICLES: ArticleData[] = [
  // Comparison
  { slug: 'vffs-vs-hffs',                         category: 'comparison',   relatedMachine: 'pouch-packing-machine' },
  { slug: 'auger-vs-volumetric-filler',            category: 'comparison',   relatedMachine: 'powder-filling-machine' },
  { slug: 'piston-vs-pump-filler',                 category: 'comparison',   relatedMachine: 'liquid-filling-machine' },
  { slug: 'premade-pouch-machine-vs-vffs',         category: 'comparison',   relatedMachine: 'pouch-packing-machine' },
  { slug: 'semi-auto-vs-full-auto-packaging-line', category: 'comparison' },
  // Selection guides
  { slug: 'how-to-choose-powder-filling-machine',  category: 'selection',    relatedMachine: 'powder-filling-machine' },
  { slug: 'how-to-choose-liquid-filling-machine',  category: 'selection',    relatedMachine: 'liquid-filling-machine' },
  { slug: 'how-to-choose-pouch-packing-machine',   category: 'selection',    relatedMachine: 'pouch-packing-machine' },
  { slug: 'how-to-choose-conveyor-system',         category: 'selection',    relatedMachine: 'conveyor-system' },
  // Application guides
  { slug: 'spice-powder-packaging-machine',        category: 'application',  relatedMachine: 'powder-filling-machine' },
  { slug: 'flour-packaging-machine-guide',         category: 'application',  relatedMachine: 'powder-filling-machine' },
  { slug: 'sauce-filling-machine-selection',       category: 'application',  relatedMachine: 'liquid-filling-machine' },
  { slug: 'snack-packing',                         category: 'application',  relatedMachine: 'snack-processing-line' },
  { slug: 'detergent-powder-packaging-machine',    category: 'application',  relatedMachine: 'powder-filling-machine' },
  { slug: 'protein-powder-filling-machine',        category: 'application',  relatedMachine: 'powder-filling-machine' },
  { slug: 'edible-oil-filling-machine',            category: 'application',  relatedMachine: 'liquid-filling-machine' },
  // Buying guides
  { slug: 'what-to-prepare-before-machine-quote',  category: 'buying' },
  { slug: 'voltage-customization-for-export',      category: 'buying' },
  { slug: 'ce-guide-for-machinery-buyers',         category: 'buying' },
]

// Convenience: get all slugs for sitemap
export const ARTICLE_SLUGS = ARTICLES.map(a => `/resources/${a.slug}`)

// Convenience: get articles by category
export function getArticlesByCategory(category: ArticleCategory): ArticleData[] {
  return ARTICLES.filter(a => a.category === category)
}
