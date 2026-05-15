/**
 * Centralized list of resource article slugs that:
 *  - are NOT shown on the /resources hub UI
 *  - are NOT listed in /resources JSON-LD ItemList
 *  - are NOT included in sitemap.xml
 *  - emit `robots: { index: false, follow: true }` on their own page
 *
 * Why: these articles are machinery-themed legacy content from the previous positioning.
 * They remain accessible by direct URL (Next.js still renders them) so existing inbound
 * links don't 404, but they're hidden from search engines + LLMs to avoid the
 * "trading company / machinery guides" identity conflict.
 *
 * If you eventually rewrite an article as a buyer-side sourcing guide, REMOVE its slug
 * from this set and add it back to the hub.
 */
export const HIDDEN_RESOURCE_SLUGS = new Set<string>([
  'vffs-vs-hffs',
  'fat-sat-acceptance-criteria-packaging-machinery',
  'bottle-capping-options-after-filling',
  'powder-dosing-when-to-use-auger-filler',
  'conveyor-layout-packaging-line',
  'auger-vs-volumetric-filler',
  'piston-vs-pump-filler',
  'premade-pouch-machine-vs-vffs',
  'semi-auto-vs-full-auto-packaging-line',
  'how-to-choose-powder-filling-machine',
  'how-to-choose-liquid-filling-machine',
  'how-to-choose-pouch-packing-machine',
  'how-to-choose-conveyor-system',
  'spice-powder-packaging-machine',
  'flour-packaging-machine-guide',
  'sauce-filling-machine-selection',
  'snack-packing',
  'detergent-powder-packaging-machine',
])

/**
 * 5 /resources/route/* configuration hubs that are 100% machinery-flavored.
 * Same treatment: removed from sitemap + hub UI + emit noindex.
 */
export const HIDDEN_ROUTE_HUBS = new Set<string>([
  'pouch-packaging',
  'powder-dosing',
  'liquid-filling',
  'food-processing-line',
  'conveying-automation',
])
