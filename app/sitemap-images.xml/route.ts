/**
 * Image sitemap — exposes all machine / home / industry / solution / about hero
 * photos to Google Images and Bing Image search. The regular sitemap.xml only
 * carries page URLs; this separate file uses the image-sitemap extension.
 *
 * Spec: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 */
import { SITE_URL } from '@/lib/siteConfig'
import { PHOTO } from '@/lib/photoLibrary'
import { MACHINE_DEFS, type MachineSlug } from '@/lib/productSchema'

type ImgEntry = { loc: string; title: string; caption?: string }
type PageEntry = { pageUrl: string; images: ImgEntry[] }

function abs(p: string) {
  return `${SITE_URL}${p}`
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const entries: PageEntry[] = []

  // Homepage — hero + trust gallery + process thumbs
  entries.push({
    pageUrl: `${SITE_URL}/en`,
    images: [
      { loc: abs(PHOTO.home.hero), title: 'SunGene packaging machinery workshop — Taichung Taiwan', caption: 'CE certified packaging machinery manufactured in Taichung, Taiwan by SunGene Co., LTD.' },
      ...PHOTO.home.trustGallery.map((p, i) => ({
        loc: abs(p),
        title: `SunGene manufacturing process — ${['welding','PLC wiring','sealing test','factory acceptance test','export crating','container loading','assembly team','QC inspection'][i] || 'production'}`,
        caption: 'SunGene Co., LTD. — packaging machinery production in Taiwan',
      })),
    ],
  })

  // Machine landing pages
  const machineSlugs: MachineSlug[] = [
    'pouch-packing-machine',
    'powder-filling-machine',
    'liquid-filling-machine',
    'snack-processing-line',
    'conveyor-system',
  ]
  for (const slug of machineSlugs) {
    const def = MACHINE_DEFS[slug]
    entries.push({
      pageUrl: `${SITE_URL}/en/machines/${slug}`,
      images: [def.heroPhoto, ...def.extraPhotos].map((p) => ({
        loc: abs(p),
        title: `${def.name} — Taiwan manufactured, CE certified`,
        caption: def.description,
      })),
    })
  }

  // About / Resources / Contact hero photos
  entries.push({
    pageUrl: `${SITE_URL}/en/about`,
    images: [
      { loc: abs(PHOTO.pages.about.hero), title: 'SunGene factory — Taichung, Taiwan', caption: 'SunGene headquarters and production facility in Taichung, Taiwan' },
      ...PHOTO.pages.about.gallery.map((p) => ({
        loc: abs(p),
        title: 'SunGene factory interior',
        caption: 'SunGene Co., LTD. manufacturing facility',
      })),
    ],
  })
  entries.push({
    pageUrl: `${SITE_URL}/en/contact`,
    images: [{ loc: abs(PHOTO.pages.contact.hero), title: 'Contact SunGene for a machinery quote', caption: 'Contact SunGene Taiwan' }],
  })
  entries.push({
    pageUrl: `${SITE_URL}/en/resources`,
    images: [
      { loc: abs(PHOTO.pages.resources.hero), title: 'Machinery buying guides — SunGene resources', caption: 'Practical buying guides for packaging machinery buyers' },
      ...PHOTO.pages.resources.cards.map((p) => ({
        loc: abs(p),
        title: 'SunGene machinery buying guide',
        caption: 'Detailed guide for industrial machinery buyers',
      })),
    ],
  })

  // Render XML
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(e.pageUrl)}</loc>
${e.images
  .map(
    (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
${img.caption ? `      <image:caption>${escapeXml(img.caption)}</image:caption>\n` : ''}    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
