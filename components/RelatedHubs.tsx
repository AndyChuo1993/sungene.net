/**
 * Bottom-of-page cross-links from machine landing pages to:
 *  - 5 relevant export markets (boosts crawlability of /markets/[slug])
 *  - 5 relevant industries that use this machine (boosts /industries/[slug])
 *
 * Internal linking is the single biggest free SEO lever: Google uses link
 * graphs to decide crawl priority. Every machine page now hands 10 extra
 * links into the market + industry long-tail ecosystem.
 */
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import type { Lang } from '@/lib/i18n'
import type { MachineSlug } from '@/lib/productSchema'
import { MARKETS, type MarketSlug } from '@/lib/markets'
import { INDUSTRIES, type IndustrySlug } from '@/lib/industries'

/** Machine → recommended markets (higher-intent countries). */
const MACHINE_TO_MARKETS: Record<MachineSlug, MarketSlug[]> = {
  'pouch-packing-machine': ['vietnam', 'indonesia', 'saudi-arabia', 'united-arab-emirates', 'united-states'],
  'powder-filling-machine': ['india', 'vietnam', 'egypt', 'nigeria', 'saudi-arabia'],
  'liquid-filling-machine': ['thailand', 'philippines', 'mexico', 'brazil', 'germany'],
  'snack-processing-line': ['vietnam', 'indonesia', 'thailand', 'mexico', 'nigeria'],
  'conveyor-system': ['japan', 'south-korea', 'germany', 'united-states', 'united-arab-emirates'],
}

/** Machine → recommended industries. */
const MACHINE_TO_INDUSTRIES: Record<MachineSlug, IndustrySlug[]> = {
  'pouch-packing-machine': ['coffee', 'snack-chips', 'nuts-dried-fruit', 'pet-food', 'tea-herbal'],
  'powder-filling-machine': ['spice-seasoning', 'protein-supplement', 'detergent-household', 'pharmaceutical', 'agricultural-seed'],
  'liquid-filling-machine': ['sauce-condiment', 'edible-oil', 'honey-syrup', 'dairy-yogurt', 'cosmetic-personal-care'],
  'snack-processing-line': ['snack-chips', 'nuts-dried-fruit', 'pet-food', 'coffee', 'spice-seasoning'],
  'conveyor-system': ['snack-chips', 'coffee', 'agricultural-seed', 'dairy-yogurt', 'pet-food'],
}

/** Section heading translations. Compact set; defaults to English. */
const HEADINGS: Record<
  Lang,
  { marketsTitle: string; industriesTitle: string; marketsDesc: string; industriesDesc: string }
> = {
  en: {
    marketsTitle: 'Top export markets for this machine',
    industriesTitle: 'Industries that use this machine',
    marketsDesc: 'Country-specific voltage, transit and price references.',
    industriesDesc: 'Real use cases, product forms, and packaging formats.',
  },
  zh: {
    marketsTitle: '此機型主要出口市場',
    industriesTitle: '此機型常見產業',
    marketsDesc: '各國電壓、航程與參考報價。',
    industriesDesc: '實際案例、產品形式與包裝型式。',
  },
  cn: {
    marketsTitle: '此机型主要出口市场',
    industriesTitle: '此机型常见产业',
    marketsDesc: '各国电压、航程与参考报价。',
    industriesDesc: '实际案例、产品形式与包装型式。',
  },
  fr: {
    marketsTitle: 'Principaux marchés export pour cette machine',
    industriesTitle: 'Secteurs qui utilisent cette machine',
    marketsDesc: 'Tensions, délais et prix de référence par pays.',
    industriesDesc: 'Cas d\'usage réels, formes produit et formats d\'emballage.',
  },
  es: {
    marketsTitle: 'Principales mercados de exportación',
    industriesTitle: 'Industrias que usan esta máquina',
    marketsDesc: 'Tensión, tránsito y precio de referencia por país.',
    industriesDesc: 'Casos de uso reales, formas de producto y formatos.',
  },
  pt: {
    marketsTitle: 'Principais mercados de exportação',
    industriesTitle: 'Setores que usam esta máquina',
    marketsDesc: 'Tensão, trânsito e preço por país.',
    industriesDesc: 'Casos reais, formas de produto e formatos de embalagem.',
  },
  ko: {
    marketsTitle: '이 기계의 주요 수출 시장',
    industriesTitle: '이 기계를 사용하는 산업',
    marketsDesc: '국가별 전압, 운송 시간 및 참고 가격.',
    industriesDesc: '실제 사용 사례, 제품 형태 및 포장 형식.',
  },
  ja: {
    marketsTitle: 'この機種の主要輸出市場',
    industriesTitle: 'この機種を使用する業界',
    marketsDesc: '国ごとの電圧、輸送日数、参考価格。',
    industriesDesc: '実際の導入事例、製品形態、包装形式。',
  },
  ar: {
    marketsTitle: 'أهم أسواق التصدير لهذه الماكينة',
    industriesTitle: 'الصناعات التي تستخدم هذه الماكينة',
    marketsDesc: 'الجهد ومدة الشحن والسعر المرجعي حسب الدولة.',
    industriesDesc: 'حالات استخدام حقيقية وأشكال المنتج والتعبئة.',
  },
  th: {
    marketsTitle: 'ตลาดส่งออกหลักสำหรับเครื่องนี้',
    industriesTitle: 'อุตสาหกรรมที่ใช้เครื่องนี้',
    marketsDesc: 'แรงดันไฟ ระยะเวลาขนส่ง และราคาอ้างอิงตามประเทศ',
    industriesDesc: 'กรณีใช้งานจริง รูปแบบสินค้า และบรรจุภัณฑ์',
  },
  vi: {
    marketsTitle: 'Thị trường xuất khẩu chính cho máy này',
    industriesTitle: 'Ngành sử dụng máy này',
    marketsDesc: 'Điện áp, thời gian vận chuyển, giá tham khảo theo quốc gia.',
    industriesDesc: 'Tình huống thực tế, dạng sản phẩm và bao bì.',
  },
  de: {
    marketsTitle: 'Wichtigste Exportmärkte für diese Maschine',
    industriesTitle: 'Branchen, die diese Maschine einsetzen',
    marketsDesc: 'Länderspezifische Spannung, Transit und Richtpreis.',
    industriesDesc: 'Reale Anwendungsfälle, Produktformen und Verpackungsformate.',
  },
}

export default function RelatedHubs({ lang, machine }: { lang: Lang; machine: MachineSlug }) {
  const markets = MACHINE_TO_MARKETS[machine] || []
  const industries = MACHINE_TO_INDUSTRIES[machine] || []
  const t = HEADINGS[lang] || HEADINGS.en

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
      <Container className="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Markets */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950 md:text-2xl">{t.marketsTitle}</h2>
            <p className="mt-2 text-sm text-gray-600">{t.marketsDesc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {markets.map((m) => (
                <li key={m}>
                  <Link
                    href={`/${lang}/markets/${m}`}
                    className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-400 hover:text-brand-700"
                  >
                    {MARKETS[m].countryName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${lang}/markets`}
                  className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-accent-600 transition hover:border-accent-400"
                >
                  → All markets
                </Link>
              </li>
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950 md:text-2xl">{t.industriesTitle}</h2>
            <p className="mt-2 text-sm text-gray-600">{t.industriesDesc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i}>
                  <Link
                    href={`/${lang}/industries/${i}`}
                    className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-400 hover:text-brand-700"
                  >
                    {INDUSTRIES[i].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${lang}/industries`}
                  className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-accent-600 transition hover:border-accent-400"
                >
                  → All industries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
