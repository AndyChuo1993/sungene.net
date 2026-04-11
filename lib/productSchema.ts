import type { Lang } from '@/lib/i18n'
import { LANG_META } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'
import { PHOTO } from '@/lib/photoLibrary'

export type MachineSlug =
  | 'pouch-packing-machine'
  | 'powder-filling-machine'
  | 'liquid-filling-machine'
  | 'snack-processing-line'
  | 'conveyor-system'

type MachineDef = {
  /** Internal stable key. Used in URLs. */
  slug: MachineSlug
  /** English canonical name for schema. */
  name: string
  /** Category label for schema.org. */
  category: string
  /** Short factual description for Product.description. */
  description: string
  /** Hero photo (already a path — prepended with SITE_URL at render time). */
  heroPhoto: string
  /** Additional photos to boost Google image eligibility. Must be absolute-from-root paths. */
  extraPhotos: string[]
  /** Realistic B2B price band in USD. Google merchant listings require price/priceSpecification. */
  priceLow: number
  priceHigh: number
  /** Typical variants offered — used for AggregateOffer.offerCount. */
  offerCount: number
  /** Output speed property value. */
  outputSpeed: string
  /** Typical bag/fill/unit formats. */
  formats: string
  /** GTIN-style mpn — use slug for stable identifier. */
  mpn: string
}

export const MACHINE_DEFS: Record<MachineSlug, MachineDef> = {
  'pouch-packing-machine': {
    slug: 'pouch-packing-machine',
    name: 'Pouch Packing Machine',
    category: 'Pouch & Bag Packaging Machinery',
    description:
      'SunGene VFFS, HFFS, pre-made pouch, stick pack and vacuum packing machines for snacks, food, powder, liquid, pharmaceutical and consumer goods flexible packaging. CE certified, SUS304/316L stainless steel, configured per product.',
    heroPhoto: PHOTO.machines.pouchPackingHero,
    extraPhotos: [
      PHOTO.home.trustGallery[0],
      PHOTO.home.trustGallery[2],
      PHOTO.home.trustGallery[3],
      PHOTO.details.items[3],
    ],
    priceLow: 8000,
    priceHigh: 180000,
    offerCount: 7,
    outputSpeed: '20–300 bags/min',
    formats: 'Pillow bag, stand-up pouch, zipper pouch, stick pack, vacuum bag, retort pouch',
    mpn: 'SG-POUCH',
  },
  'powder-filling-machine': {
    slug: 'powder-filling-machine',
    name: 'Powder Filling Machine',
    category: 'Powder & Granule Filling Machinery',
    description:
      'SunGene auger fillers, cup fillers and net-weigh powder packing machines for flour, milk, spices, protein, coffee, detergent and agricultural powders. Dust containment, servo auger, CE certified.',
    heroPhoto: PHOTO.machines.powderFillingHero,
    extraPhotos: [
      PHOTO.home.trustGallery[0],
      PHOTO.home.trustGallery[1],
      PHOTO.details.items[4],
      PHOTO.details.items[0],
    ],
    priceLow: 6500,
    priceHigh: 95000,
    offerCount: 5,
    outputSpeed: '15–60 fills/min (auger), 100–400/min (stick pack)',
    formats: 'Fine powder, granule, bulk bag, sachet, can, bottle',
    mpn: 'SG-POWDER',
  },
  'liquid-filling-machine': {
    slug: 'liquid-filling-machine',
    name: 'Liquid Filling Machine',
    category: 'Liquid Filling & Sealing Machinery',
    description:
      'SunGene piston, gravity, flow-meter and pump-type liquid filling machines for sauce, oil, water, juice, chemical, cosmetic and beverage products. Configurable viscosity handling, CIP-ready, CE certified.',
    heroPhoto: PHOTO.machines.liquidFillingHero,
    extraPhotos: [
      PHOTO.details.items[2],
      PHOTO.details.items[4],
      PHOTO.home.trustGallery[2],
      PHOTO.home.trustGallery[0],
    ],
    priceLow: 9000,
    priceHigh: 220000,
    offerCount: 6,
    outputSpeed: '20–120 fills/min depending on viscosity',
    formats: 'Bottle, jar, jerrycan, pouch with spout, carton, drum',
    mpn: 'SG-LIQUID',
  },
  'snack-processing-line': {
    slug: 'snack-processing-line',
    name: 'Snack Processing Line',
    category: 'Food Processing Machinery',
    description:
      'SunGene continuous fryers, de-oilers, seasoning tumblers, roasters and complete snack production lines for chips, nuts, extruded snacks and pellet snacks. Gas or electric, throughput configurable, CE certified.',
    heroPhoto: PHOTO.machines.snackProcessingHero,
    extraPhotos: [
      PHOTO.home.trustGallery[0],
      PHOTO.home.trustGallery[1],
      PHOTO.home.trustGallery[3],
      PHOTO.details.items[4],
    ],
    priceLow: 35000,
    priceHigh: 850000,
    offerCount: 4,
    outputSpeed: 'Batch or continuous — typically 100–2000 kg/hr',
    formats: 'Chips, nuts, extruded snacks, pellet snacks, coated nuts',
    mpn: 'SG-SNACK',
  },
  'conveyor-system': {
    slug: 'conveyor-system',
    name: 'Conveyor & Automation System',
    category: 'Conveying & Automation Systems',
    description:
      'SunGene food-grade belt conveyors, modular belts, roller conveyors, vibratory feeders, metal detectors, checkweighers and PLC+HMI controlled automation systems for packaging and food lines. CE certified, SUS304/316L.',
    heroPhoto: PHOTO.machines.conveyorSystemHero,
    extraPhotos: [
      PHOTO.home.trustGallery[0],
      PHOTO.home.trustGallery[1],
      PHOTO.home.trustGallery[2],
      PHOTO.details.items[0],
    ],
    priceLow: 2500,
    priceHigh: 120000,
    offerCount: 8,
    outputSpeed: 'Belt speed adjustable 2–30 m/min',
    formats: 'Belt, roller, modular, vibratory, incline, elevator',
    mpn: 'SG-CONV',
  },
}

/**
 * Build a Google-compliant Product schema with AggregateOffer (so Merchant
 * listing requirements — name, image, offers.price — are all satisfied) and
 * full manufacturer / brand / audience / country fields.
 *
 * Validated against:
 * https://developers.google.com/search/docs/appearance/structured-data/product
 * https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
 */
export function buildProductSchema(opts: {
  lang: Lang
  slug: MachineSlug
  faq?: { q: string; a: string }[]
}) {
  const def = MACHINE_DEFS[opts.slug]
  const lang = opts.lang
  const pageUrl = `${SITE_URL}/${lang}/machines/${def.slug}`
  const contactUrl = `${SITE_URL}/${lang}/contact?machine=${def.slug}`
  const recommendUrl = `${SITE_URL}/${lang}/recommend?machine=${def.slug}`

  const images = [def.heroPhoto, ...def.extraPhotos].map((p) => `${SITE_URL}${p}`)

  const relatedSlugs: MachineSlug[] = (
    ['pouch-packing-machine', 'powder-filling-machine', 'liquid-filling-machine', 'snack-processing-line', 'conveyor-system'] as const
  ).filter((s) => s !== def.slug)

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    inLanguage: LANG_META[lang].htmlLang,
    name: def.name,
    description: def.description,
    url: pageUrl,
    image: images,
    sku: def.mpn,
    mpn: def.mpn,
    productID: def.mpn,
    brand: { '@type': 'Brand', '@id': `${SITE_URL}/#brand`, name: 'SunGene' },
    manufacturer: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL },
    category: def.category,
    material: 'SUS304 / 316L food-grade stainless steel',
    countryOfOrigin: { '@type': 'Country', name: 'Taiwan' },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Food, beverage, pharmaceutical, chemical and consumer-goods manufacturers, packers and exporters',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Output Speed', value: def.outputSpeed },
      { '@type': 'PropertyValue', name: 'Formats', value: def.formats },
      { '@type': 'PropertyValue', name: 'Certification', value: 'CE' },
      { '@type': 'PropertyValue', name: 'Contact Surface', value: 'SUS304 / 316L Stainless Steel' },
      { '@type': 'PropertyValue', name: 'Voltage Options', value: '110V / 220V / 380V / 480V, 50/60 Hz, 1-phase or 3-phase' },
      { '@type': 'PropertyValue', name: 'MOQ', value: '1 unit' },
      { '@type': 'PropertyValue', name: 'Lead Time', value: '30–60 days' },
      { '@type': 'PropertyValue', name: 'Payment Terms', value: 'T/T 30/70 or L/C at sight' },
      { '@type': 'PropertyValue', name: 'Shipping', value: 'FOB Taichung or CIF any world port' },
      { '@type': 'PropertyValue', name: 'Warranty', value: '1-year parts + lifetime technical support' },
      { '@type': 'PropertyValue', name: 'Customization', value: 'OEM / ODM — voltage, capacity, HMI language, materials' },
    ],
    isRelatedTo: relatedSlugs.map((s) => ({
      '@type': 'Product',
      '@id': `${SITE_URL}/${lang}/machines/${s}#product`,
      name: MACHINE_DEFS[s].name,
      url: `${SITE_URL}/${lang}/machines/${s}`,
      brand: { '@type': 'Brand', '@id': `${SITE_URL}/#brand`, name: 'SunGene' },
      manufacturer: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL },
    })),
    // AggregateOffer satisfies Google's "merchant listing" requirement of
    // having a concrete price without committing to a single SKU price for a
    // quote-driven B2B product. lowPrice/highPrice are realistic market bands.
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: def.priceLow,
      highPrice: def.priceHigh,
      offerCount: def.offerCount,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      url: contactUrl,
      seller: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL },
      eligibleRegion: [
        { '@type': 'Place', name: 'Worldwide' },
      ],
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'TW',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnLink: `${SITE_URL}/${lang}/contact`,
    },
    potentialAction: [
      {
        '@type': 'ViewAction',
        name: 'Get a Recommendation',
        target: recommendUrl,
      },
      {
        '@type': 'BuyAction',
        name: 'Request a Quote',
        target: contactUrl,
      },
    ],
    ...(opts.faq && opts.faq.length > 0
      ? {
          // Nested FAQ for extra semantic richness — the page also has a
          // standalone FAQPage node.
          subjectOf: {
            '@type': 'FAQPage',
            inLanguage: LANG_META[lang].htmlLang,
            mainEntity: opts.faq.map((it) => ({
              '@type': 'Question',
              name: it.q,
              acceptedAnswer: { '@type': 'Answer', text: it.a },
            })),
          },
        }
      : {}),
  }
}
