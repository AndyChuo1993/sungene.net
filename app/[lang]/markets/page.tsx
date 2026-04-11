import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PHOTO } from '@/lib/photoLibrary'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, BREADCRUMB_LABELS } from '@/lib/seo'
import { MARKETS, MARKET_SLUGS } from '@/lib/markets'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: 'Export Markets — SunGene Taiwan Machinery Worldwide',
    description:
      'SunGene exports packaging machinery, food processing equipment and filling lines from Taiwan to 40+ countries. Browse country-specific machine recommendations, voltage, shipping transit and quote references.',
    pathname: '/markets',
    type: 'website',
    keywords: [
      'Taiwan machinery exporter',
      'packaging machine by country',
      'global machinery supplier',
      'CIF machinery shipping',
      'CE certified machine export Taiwan',
    ],
  })
}

const title: Record<Lang, string> = {
  en: 'Export Markets',
  zh: '出口市場',
  cn: '出口市场',
  fr: 'Marchés export',
  es: 'Mercados de exportación',
  pt: 'Mercados de exportação',
  ko: '수출 시장',
  ja: '輸出市場',
  ar: 'أسواق التصدير',
  th: 'ตลาดส่งออก',
  vi: 'Thị trường xuất khẩu',
  de: 'Exportmärkte',
}

const desc: Record<Lang, string> = {
  en: 'Voltage, transit time, sample price and recommended machines for each country SunGene exports to — from Vietnam and Saudi Arabia to Germany and the United States.',
  zh: '每個出口國家的電壓、航程、報價範例與推薦機型——從越南、沙烏地阿拉伯到德國與美國。',
  cn: '每个出口国家的电压、航程、报价范例与推荐机型——从越南、沙特阿拉伯到德国与美国。',
  fr: 'Tension, délai, prix indicatif et machines recommandées pour chaque pays d\'export de SunGene — du Vietnam et de l\'Arabie saoudite à l\'Allemagne et aux États-Unis.',
  es: 'Tensión, tránsito, precio de referencia y máquinas recomendadas para cada país al que SunGene exporta — desde Vietnam y Arabia Saudita hasta Alemania y Estados Unidos.',
  pt: 'Tensão, trânsito, preço de referência e máquinas recomendadas para cada país destino da SunGene — do Vietnã e Arábia Saudita à Alemanha e aos Estados Unidos.',
  ko: 'SunGene이 수출하는 각 국가의 전압, 운송 시간, 참고 가격 및 추천 기계 — 베트남과 사우디아라비아에서 독일과 미국까지.',
  ja: 'SunGeneが輸出する各国の電圧、輸送日数、参考価格、推奨機種 — ベトナムやサウジアラビアからドイツ、米国まで。',
  ar: 'الجهد ومدة الشحن والسعر المرجعي والآلات الموصى بها لكل دولة تُصدِّر إليها SunGene — من فيتنام والمملكة العربية السعودية إلى ألمانيا والولايات المتحدة.',
  th: 'แรงดันไฟฟ้า ระยะเวลาขนส่ง ราคาอ้างอิง และเครื่องที่แนะนำสำหรับแต่ละประเทศที่ SunGene ส่งออก — ตั้งแต่เวียดนาม ซาอุดีอาระเบีย ถึงเยอรมนีและสหรัฐอเมริกา',
  vi: 'Điện áp, thời gian vận chuyển, giá tham khảo và máy đề xuất cho từng quốc gia SunGene xuất khẩu — từ Việt Nam, Ả Rập Xê Út đến Đức và Mỹ.',
  de: 'Spannung, Transitzeit, Richtpreis und empfohlene Maschinen für jedes Land, in das SunGene exportiert — von Vietnam und Saudi-Arabien bis Deutschland und die USA.',
}

export default async function MarketsIndexPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const hero = PHOTO.home.hero
  const pageUrl = `${SITE_URL}/${lang}/markets`

  // Group markets by region for a clean UI
  const byRegion = MARKET_SLUGS.reduce<Record<string, typeof MARKETS[keyof typeof MARKETS][]>>((acc, slug) => {
    const m = MARKETS[slug]
    acc[m.region] ??= []
    acc[m.region].push(m)
    return acc
  }, {})
  const regionOrder = ['Southeast Asia', 'East Asia', 'South Asia', 'Middle East', 'Europe', 'Americas', 'Africa']

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[lang].htmlLang,
    name: 'SunGene Export Markets',
    numberOfItems: MARKET_SLUGS.length,
    itemListElement: MARKET_SLUGS.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: MARKETS[slug].countryName,
      url: `${SITE_URL}/${lang}/markets/${slug}`,
    })),
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    url: pageUrl,
    name: title[lang] || title.en,
    description: desc[lang] || desc.en,
    inLanguage: LANG_META[lang].htmlLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': `${pageUrl}#itemlist` },
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker="MARKETS"
        title={title[lang] || title.en}
        desc={desc[lang] || desc.en}
        image={{
          src: hero,
          alt: 'World map showing SunGene export markets',
          priority: true,
          aspectClassName: 'aspect-[16/9]',
        }}
      />

      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].home, href: `/${lang}` },
              { label: title[lang] || title.en, href: `/${lang}/markets` },
            ]}
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-6xl">
          {regionOrder.map((region) => {
            const markets = byRegion[region] || []
            if (markets.length === 0) return null
            return (
              <div key={region} className="mb-10">
                <h2 className="text-xl font-bold tracking-tight text-gray-950 md:text-2xl mb-6">{region}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {markets.map((m) => (
                    <a
                      key={m.slug}
                      href={`/${lang}/markets/${m.slug}`}
                      className="group block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-brand-400 hover:shadow-md"
                    >
                      <div className="text-base font-bold text-gray-950 group-hover:text-brand-700">
                        {m.countryName}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {m.voltage}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {m.transit}
                      </div>
                      <div className="mt-3 text-xs font-semibold text-accent-600">View market →</div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}
