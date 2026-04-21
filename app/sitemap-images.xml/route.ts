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
import { ALL_LANGS } from '@/lib/i18n'

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

  for (const lang of ALL_LANGS) {
    entries.push({
      pageUrl: `${SITE_URL}/${lang}`,
      images: [
        { loc: abs(PHOTO.home.hero), title: 'SunGene sourcing support — Taiwan & China supply network', caption: 'Industrial equipment and automation sourcing support by SunGene Co., LTD.' },
        ...PHOTO.home.trustGallery.map((p, i) => ({
          loc: abs(p),
          title: `SunGene verification & delivery process — ${['welding','PLC wiring','sealing test','FAT acceptance test','export crating','container loading','assembly team','QC inspection'][i] || 'process'}`,
          caption: 'SunGene Co., LTD. — technical sourcing and export delivery support',
        })),
      ],
    })
  }

  // Machine landing pages
  const machineSlugs: MachineSlug[] = [
    'pouch-packing-machine',
    'powder-filling-machine',
    'liquid-filling-machine',
    'snack-processing-line',
    'conveyor-system',
  ]
  for (const lang of ALL_LANGS) {
    for (const slug of machineSlugs) {
      const def = MACHINE_DEFS[slug]
      entries.push({
        pageUrl: `${SITE_URL}/${lang}/machines/${slug}`,
        images: [def.heroPhoto, ...def.extraPhotos].map((p) => ({
          loc: abs(p),
          title: `${def.name} — sourcing support, CE documentation`,
          caption: def.description,
        })),
      })
    }
  }

  // Wuu Sheng supplementary product pages
  const wuushengImageDefs = [
    { slug: 'vacuum-packing-machine', name: 'Vacuum Packing Machine', desc: 'Chamber vacuum packing machine for food preservation and electronics moisture protection', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/12_Vacuum_Packing_Machine/01_Vacuum_Packing_Machine/Vacuum_Packing_Machine.jpg' },
    { slug: 'shrinking-machine', name: 'Shrink Wrapping Machine', desc: 'Heat shrink tunnel for food, electronics, and consumer goods packaging lines', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/03_Shrinking_Tunnel/01_Shrinking_Machine/Shrinking_Machine.jpg' },
    { slug: 'pillow-type-packing-machine', name: 'Pillow Type Packing Machine', desc: 'Horizontal flow wrapper for biscuits, bread, ice cream, and solid products', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/11_Horizontal_Packing_Mac/01_Pillow_Type_Packing_Machine/Pillow_Type_Packing_Machine.gif' },
    { slug: 'stretch-wrapping-machine', name: 'Stretch Wrapping Machine', desc: 'Pallet stretch wrapper for export goods, cartons, and industrial shipments', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/14_Stretch_Wrapping_Machine/01_Stretch_Wrapping_Machine/Stretch_Wrapping_Machine.jpg' },
    { slug: 'hand-sealer-impulse-type', name: 'Hand Sealer (Impulse Type)', desc: 'Impulse hand sealer for plastics, food, electronics, and stationery packaging', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/01_Hand_Sealer_Impulse_Type/Hand_Sealer_Impulse_Type.jpg' },
    { slug: 'foot-sealer-impulse-type', name: 'Foot Sealer (Impulse Type)', desc: 'Foot-operated impulse sealer for hands-free plastic bag sealing', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/03_Foot_Sealer_Impulse_Type/Foot_Sealer_Impulse_Type.jpg' },
    { slug: 'extra-long-hand-sealer-impulse-type', name: 'Extra Long Hand Sealer (Impulse Type)', desc: 'Extended-length impulse hand sealer for wide plastic bags', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/02_Extra_Long_Hand_Sealer_Impulse_Type/Extra_Long_Hand_Sealer_Impulse_Type.jpg' },
  ]
  for (const lang of ALL_LANGS) {
    for (const def of wuushengImageDefs) {
      entries.push({
        pageUrl: `${SITE_URL}/${lang}/machines/${def.slug}`,
        images: [{ loc: def.img, title: `${def.name} — sourcing support, CE documentation`, caption: def.desc }],
      })
    }
  }

  // About / Resources / Contact hero photos
  for (const lang of ALL_LANGS) {
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/about`,
      images: [
        { loc: abs(PHOTO.pages.about.hero), title: 'SunGene sourcing team — Taichung, Taiwan', caption: 'SunGene headquarters in Taichung, Taiwan' },
        ...PHOTO.pages.about.gallery.map((p) => ({
          loc: abs(p),
          title: 'SunGene project verification',
          caption: 'SunGene Co., LTD. — engineering review and verification',
        })),
      ],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/contact`,
      images: [{ loc: abs(PHOTO.pages.contact.hero), title: 'Contact SunGene for a sourcing assessment', caption: 'Contact SunGene Taiwan' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/resources`,
      images: [
        { loc: abs(PHOTO.pages.resources.hero), title: 'Industrial sourcing guides — SunGene resources', caption: 'Practical guides for industrial equipment buyers' },
        ...PHOTO.pages.resources.cards.map((p) => ({
          loc: abs(p),
          title: 'SunGene sourcing guide',
          caption: 'Detailed guide for industrial equipment buyers',
        })),
      ],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/industries`,
      images: [
        { loc: abs(PHOTO.pages.industries.hero), title: 'Industrial applications — sourcing-ready machinery setups', caption: 'Industry applications supported by SunGene sourcing' },
        ...PHOTO.pages.industries.cards.map((p) => ({
          loc: abs(p),
          title: 'Industry application',
          caption: 'Packaging and processing applications',
        })),
      ],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/solutions`,
      images: [{ loc: abs(PHOTO.pages.solutions.hero), title: 'Turnkey sourcing solutions', caption: 'Sourcing assessment and turnkey project support' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery`,
      images: [
        { loc: abs(PHOTO.machinery.catalogHero), title: 'Sourcing scope — industrial equipment support', caption: 'Industrial equipment sourcing scope with guidance' },
        ...PHOTO.machinery.categoryPhotos.map((p) => ({
          loc: abs(p),
          title: 'Sourcing category',
          caption: 'Industrial equipment and automation sourcing categories',
        })),
      ],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery/packaging`,
      images: [{ loc: abs(PHOTO.machinery.subpageHeroes.packaging), title: 'Packaging machinery — sourcing support', caption: 'Packaging machinery category' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery/food-processing`,
      images: [{ loc: abs(PHOTO.machinery.subpageHeroes.foodProcessing), title: 'Food processing equipment — sourcing support', caption: 'Food processing equipment category' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery/filling-sealing`,
      images: [{ loc: abs(PHOTO.machinery.subpageHeroes.fillingSealing), title: 'Filling & sealing systems — sourcing support', caption: 'Filling and sealing systems category' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery/conveying-automation`,
      images: [{ loc: abs(PHOTO.machinery.subpageHeroes.conveyingAutomation), title: 'Conveying & automation — sourcing support', caption: 'Conveying and automation category' }],
    })
    entries.push({
      pageUrl: `${SITE_URL}/${lang}/machinery/custom`,
      images: [{ loc: abs(PHOTO.machinery.subpageHeroes.custom), title: 'Custom projects — spec customization', caption: 'Custom engineering and supplier coordination' }],
    })
  }

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
