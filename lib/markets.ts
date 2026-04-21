/**
 * Market / country landing page data.
 *
 * Each market becomes a dedicated, indexable page at `/[lang]/markets/[slug]`
 * targeting long-tail queries like "Taiwan packaging machine exporter to Vietnam".
 *
 * Content per market is translated to English only at the source level; the
 * page renders in all 12 languages but uses a neutral localized skeleton plus
 * the English facts — market-specific voltage / shipping / language coverage
 * is universally useful.
 */

import { ALL_LANGS, type Lang } from '@/lib/i18n'

export type MarketSlug =
  | 'vietnam'
  | 'thailand'
  | 'indonesia'
  | 'malaysia'
  | 'philippines'
  | 'india'
  | 'saudi-arabia'
  | 'united-arab-emirates'
  | 'egypt'
  | 'nigeria'
  | 'south-africa'
  | 'germany'
  | 'france'
  | 'united-states'
  | 'mexico'
  | 'brazil'
  | 'japan'
  | 'south-korea'

export type Market = {
  slug: MarketSlug
  countryName: string
  /** ISO 3166-1 alpha-2 */
  countryCode: string
  region: 'Southeast Asia' | 'Middle East' | 'Europe' | 'Americas' | 'Africa' | 'East Asia' | 'South Asia'
  /** Capital or biggest port city */
  majorCity: string
  /** Voltage/frequency info customers will immediately want */
  voltage: string
  /** Shipping lead time from Taichung */
  transit: string
  /** Preferred incoterm for the market */
  incoterm: string
  /** Major shipping ports in destination country */
  destinationPorts: string[]
  /** Highest-value local industries for our machinery */
  keyIndustries: string[]
  /** HS code import reference (for customs) */
  hsReference: string
  /** Sample price band in USD for a typical single machine */
  samplePriceUsd: string
}

export const MARKETS: Record<MarketSlug, Market> = {
  'vietnam': {
    slug: 'vietnam',
    countryName: 'Vietnam',
    countryCode: 'VN',
    region: 'Southeast Asia',
    majorCity: 'Ho Chi Minh City',
    voltage: '220V, 50 Hz, 1-phase / 380V 3-phase industrial',
    transit: '7–10 days from Taichung to Ho Chi Minh City / Hai Phong',
    incoterm: 'CIF preferred',
    destinationPorts: ['Cat Lai (Ho Chi Minh City)', 'Hai Phong', 'Da Nang'],
    keyIndustries: ['Coffee', 'Cashew nuts', 'Dried fruit', 'Pho and noodle sauces', 'Fish sauce', 'Instant coffee', 'Rice products'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 8,000–80,000 per machine',
  },
  'thailand': {
    slug: 'thailand',
    countryName: 'Thailand',
    countryCode: 'TH',
    region: 'Southeast Asia',
    majorCity: 'Bangkok',
    voltage: '220V, 50 Hz, 1-phase / 380V 3-phase industrial',
    transit: '7–12 days from Taichung to Laem Chabang / Bangkok',
    incoterm: 'CIF preferred',
    destinationPorts: ['Laem Chabang', 'Bangkok Port'],
    keyIndustries: ['Snacks and chips', 'Coconut products', 'Curry paste', 'Sauce and condiments', 'Tropical fruit', 'Seafood'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 10,000–120,000 per machine',
  },
  'indonesia': {
    slug: 'indonesia',
    countryName: 'Indonesia',
    countryCode: 'ID',
    region: 'Southeast Asia',
    majorCity: 'Jakarta',
    voltage: '220V, 50 Hz, 1-phase / 380V 3-phase industrial',
    transit: '10–14 days from Taichung to Tanjung Priok (Jakarta)',
    incoterm: 'CIF preferred',
    destinationPorts: ['Tanjung Priok (Jakarta)', 'Tanjung Perak (Surabaya)'],
    keyIndustries: ['Instant noodles', 'Snack foods', 'Coffee', 'Palm oil products', 'Sambal and sauces', 'Herbal supplements (jamu)'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 10,000–150,000 per machine',
  },
  'malaysia': {
    slug: 'malaysia',
    countryName: 'Malaysia',
    countryCode: 'MY',
    region: 'Southeast Asia',
    majorCity: 'Kuala Lumpur',
    voltage: '240V, 50 Hz, 1-phase / 415V 3-phase industrial',
    transit: '8–12 days from Taichung to Port Klang / Penang',
    incoterm: 'CIF preferred',
    destinationPorts: ['Port Klang', 'Penang Port', 'Tanjung Pelepas'],
    keyIndustries: ['Halal food', 'Palm oil products', 'Coconut milk', 'Biscuits and snacks', 'Sauces'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 10,000–150,000 per machine',
  },
  'philippines': {
    slug: 'philippines',
    countryName: 'Philippines',
    countryCode: 'PH',
    region: 'Southeast Asia',
    majorCity: 'Manila',
    voltage: '220V, 60 Hz, 1-phase / 380V 60 Hz industrial',
    transit: '7–10 days from Taichung to Manila',
    incoterm: 'CIF preferred',
    destinationPorts: ['Manila', 'Cebu', 'Subic'],
    keyIndustries: ['Bananas and dried mango', 'Coconut products', 'Instant noodles', 'Snack foods', 'Condiments'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 8,000–100,000 per machine',
  },
  'india': {
    slug: 'india',
    countryName: 'India',
    countryCode: 'IN',
    region: 'South Asia',
    majorCity: 'Mumbai',
    voltage: '230V, 50 Hz, 1-phase / 415V 3-phase industrial',
    transit: '16–22 days from Taichung to Mumbai (Nhava Sheva) / Chennai',
    incoterm: 'CIF preferred',
    destinationPorts: ['Nhava Sheva (Mumbai)', 'Chennai', 'Mundra'],
    keyIndustries: ['Spices and masala', 'Rice and pulses', 'Tea', 'Dairy powders', 'Ghee', 'Ayurvedic supplements', 'Snack foods'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 8,000–150,000 per machine',
  },
  'saudi-arabia': {
    slug: 'saudi-arabia',
    countryName: 'Saudi Arabia',
    countryCode: 'SA',
    region: 'Middle East',
    majorCity: 'Jeddah',
    voltage: '220V / 380V, 60 Hz, 3-phase industrial',
    transit: '18–25 days from Taichung to Jeddah / Dammam',
    incoterm: 'CIF preferred',
    destinationPorts: ['Jeddah Islamic Port', 'King Abdul Aziz Port (Dammam)'],
    keyIndustries: ['Dates', 'Halal meat', 'Dairy', 'Bottled water and beverages', 'Spices', 'Sesame / tahini'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–250,000 per machine',
  },
  'united-arab-emirates': {
    slug: 'united-arab-emirates',
    countryName: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Middle East',
    majorCity: 'Dubai',
    voltage: '220V, 50 Hz, 1-phase / 400V 3-phase industrial',
    transit: '18–24 days from Taichung to Jebel Ali (Dubai)',
    incoterm: 'CIF preferred',
    destinationPorts: ['Jebel Ali (Dubai)', 'Abu Dhabi', 'Sharjah'],
    keyIndustries: ['Dates and nuts', 'Halal food', 'Dairy', 'Cosmetics', 'Spices', 'Re-export packaging hub'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–200,000 per machine',
  },
  'egypt': {
    slug: 'egypt',
    countryName: 'Egypt',
    countryCode: 'EG',
    region: 'Middle East',
    majorCity: 'Alexandria',
    voltage: '220V, 50 Hz, 1-phase / 380V 3-phase industrial',
    transit: '25–32 days from Taichung to Alexandria / Port Said',
    incoterm: 'CIF preferred',
    destinationPorts: ['Alexandria', 'Port Said', 'Damietta'],
    keyIndustries: ['Dates', 'Spices and herbs', 'Tahini and halva', 'Dried tomatoes', 'Frozen vegetables', 'Halal meat'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 10,000–180,000 per machine',
  },
  'nigeria': {
    slug: 'nigeria',
    countryName: 'Nigeria',
    countryCode: 'NG',
    region: 'Africa',
    majorCity: 'Lagos',
    voltage: '230V, 50 Hz, 1-phase / 415V 3-phase industrial',
    transit: '35–45 days from Taichung to Lagos (Apapa/Tin Can Island)',
    incoterm: 'CIF preferred',
    destinationPorts: ['Apapa (Lagos)', 'Tin Can Island (Lagos)', 'Onne'],
    keyIndustries: ['Palm oil', 'Cassava flour (garri)', 'Rice', 'Spices and seasoning', 'Packaged water', 'Biscuits'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 10,000–150,000 per machine',
  },
  'south-africa': {
    slug: 'south-africa',
    countryName: 'South Africa',
    countryCode: 'ZA',
    region: 'Africa',
    majorCity: 'Durban',
    voltage: '230V, 50 Hz, 1-phase / 400V 3-phase industrial',
    transit: '30–40 days from Taichung to Durban / Cape Town',
    incoterm: 'CIF preferred',
    destinationPorts: ['Durban', 'Cape Town', 'Port Elizabeth'],
    keyIndustries: ['Rooibos tea', 'Biltong', 'Dried fruit', 'Wine', 'Maize meal', 'Snack foods'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 12,000–180,000 per machine',
  },
  'germany': {
    slug: 'germany',
    countryName: 'Germany',
    countryCode: 'DE',
    region: 'Europe',
    majorCity: 'Hamburg',
    voltage: '230V, 50 Hz, 1-phase / 400V 3-phase industrial',
    transit: '28–35 days from Taichung to Hamburg / Bremerhaven',
    incoterm: 'CIF preferred',
    destinationPorts: ['Hamburg', 'Bremerhaven'],
    keyIndustries: ['Premium coffee', 'Chocolate and confectionery', 'Organic food', 'Nutrition supplements', 'Pharma'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 20,000–300,000 per machine',
  },
  'france': {
    slug: 'france',
    countryName: 'France',
    countryCode: 'FR',
    region: 'Europe',
    majorCity: 'Le Havre',
    voltage: '230V, 50 Hz, 1-phase / 400V 3-phase industrial',
    transit: '30–36 days from Taichung to Le Havre / Marseille',
    incoterm: 'CIF preferred',
    destinationPorts: ['Le Havre', 'Marseille-Fos', 'Dunkirk'],
    keyIndustries: ['Wine', 'Cheese', 'Bakery products', 'Cosmetics', 'Pharma', 'Specialty foods'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 20,000–300,000 per machine',
  },
  'united-states': {
    slug: 'united-states',
    countryName: 'United States',
    countryCode: 'US',
    region: 'Americas',
    majorCity: 'Los Angeles',
    voltage: '120V / 240V, 60 Hz, 1-phase / 208V / 480V 3-phase industrial',
    transit: '14–20 days from Taichung to Los Angeles / Long Beach',
    incoterm: 'CIF preferred',
    destinationPorts: ['Los Angeles', 'Long Beach', 'New York/Newark', 'Seattle-Tacoma'],
    keyIndustries: ['Snack foods', 'Coffee', 'Nutraceuticals', 'Pet food', 'Cosmetics', 'Cannabis-adjacent packaging'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–250,000 per machine',
  },
  'mexico': {
    slug: 'mexico',
    countryName: 'Mexico',
    countryCode: 'MX',
    region: 'Americas',
    majorCity: 'Manzanillo',
    voltage: '127V / 220V, 60 Hz, 1-phase / 220V / 440V 3-phase industrial',
    transit: '16–22 days from Taichung to Manzanillo / Lazaro Cardenas',
    incoterm: 'CIF preferred',
    destinationPorts: ['Manzanillo', 'Lazaro Cardenas', 'Veracruz'],
    keyIndustries: ['Tortilla chips', 'Salsa and sauces', 'Coffee', 'Beer', 'Dairy', 'Confectionery'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 12,000–200,000 per machine',
  },
  'brazil': {
    slug: 'brazil',
    countryName: 'Brazil',
    countryCode: 'BR',
    region: 'Americas',
    majorCity: 'Santos',
    voltage: '127V / 220V, 60 Hz, 1-phase / 220V / 380V 3-phase industrial',
    transit: '35–45 days from Taichung to Santos',
    incoterm: 'CIF preferred',
    destinationPorts: ['Santos', 'Rio de Janeiro', 'Paranagua'],
    keyIndustries: ['Coffee', 'Sugar', 'Cachaca', 'Açaí', 'Snacks', 'Poultry products'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–200,000 per machine',
  },
  'japan': {
    slug: 'japan',
    countryName: 'Japan',
    countryCode: 'JP',
    region: 'East Asia',
    majorCity: 'Tokyo',
    voltage: '100V / 200V, 50 Hz (east) or 60 Hz (west), 3-phase industrial',
    transit: '3–5 days from Taichung to Tokyo / Yokohama',
    incoterm: 'CIF preferred',
    destinationPorts: ['Tokyo', 'Yokohama', 'Kobe', 'Osaka', 'Nagoya'],
    keyIndustries: ['Snacks and senbei', 'Tea', 'Instant noodles', 'Sauces (soy, miso)', 'Confectionery', 'Cosmetics'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–250,000 per machine',
  },
  'south-korea': {
    slug: 'south-korea',
    countryName: 'South Korea',
    countryCode: 'KR',
    region: 'East Asia',
    majorCity: 'Busan',
    voltage: '220V, 60 Hz, 1-phase / 380V 3-phase industrial',
    transit: '3–5 days from Taichung to Busan / Incheon',
    incoterm: 'CIF preferred',
    destinationPorts: ['Busan', 'Incheon'],
    keyIndustries: ['Kimchi', 'Gochujang / sauces', 'Instant ramyeon', 'Snack foods', 'Coffee', 'K-beauty cosmetics'],
    hsReference: '8422.30, 8422.40',
    samplePriceUsd: 'USD 15,000–250,000 per machine',
  },
}

export const MARKET_SLUGS = Object.keys(MARKETS) as MarketSlug[]

/** Build list of all (lang, slug) pairs for static generation. */
export function getAllMarketParams(): { lang: Lang; slug: MarketSlug }[] {
  return ALL_LANGS.flatMap((lang) => MARKET_SLUGS.map((slug) => ({ lang, slug })))
}
