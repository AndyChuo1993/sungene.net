import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import QuickAssessment from '@/components/QuickAssessment'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import type { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'

type QuoteSlug =
  | 'pouch-packing-machine'
  | 'powder-filling-machine'
  | 'liquid-filling-machine'
  | 'snack-processing-line'
  | 'conveyor-system'

const slugs: QuoteSlug[] = [
  'pouch-packing-machine',
  'powder-filling-machine',
  'liquid-filling-machine',
  'snack-processing-line',
  'conveyor-system',
]

const machineName: Record<QuoteSlug, Partial<Record<Lang, string>>> = {
  'pouch-packing-machine': { en: 'Pouch packing machine', zh: '袋裝包裝機', cn: '袋装包装机' },
  'powder-filling-machine': { en: 'Powder filling machine', zh: '粉末灌裝機', cn: '粉末灌装机' },
  'liquid-filling-machine': { en: 'Liquid filling machine', zh: '液體灌裝機', cn: '液体灌装机' },
  'snack-processing-line': { en: 'Snack processing line', zh: '休閒食品加工線', cn: '休闲食品加工线' },
  'conveyor-system': { en: 'Conveyor system', zh: '輸送系統', cn: '输送系统' },
}

const copyByLang: Partial<Record<Lang, { kicker: string; titlePrefix: string; subtitle: string; whatToSend: string; bullets: string[]; nextTitle: string; nextBody: string; btnRecommend: string; btnContact: string }>> = {
  en: {
    kicker: 'QUOTE',
    titlePrefix: 'Request a quote for',
    subtitle: 'Share your product, package format, and target output. We reply with configuration notes, options, and a clear next step.',
    whatToSend: 'To speed things up, include:',
    bullets: [
      'Product and package format (photos help)',
      'Fill range / weight, and target speed or daily output',
      'Destination country and power standard (voltage/frequency)',
      'Any constraints: footprint, dust control, CIP, materials',
    ],
    nextTitle: 'Next steps',
    nextBody: 'You can submit a quick assessment now. If you want a deeper assessment, use the full form.',
    btnRecommend: 'Full assessment form',
    btnContact: 'Contact',
  },
  zh: {
    kicker: '報價',
    titlePrefix: '取得報價：',
    subtitle: '提供產品、包材形式與目標產速，我們會回覆配置重點、選配建議與下一步。',
    whatToSend: '為了加快評估，建議提供：',
    bullets: [
      '產品與包材形式（有照片最快）',
      '灌裝範圍/重量、目標速度或日產量',
      '目的地國家與電力規格（電壓/頻率）',
      '限制條件：場地尺寸、粉塵/清潔、材質需求等',
    ],
    nextTitle: '下一步',
    nextBody: '你可以先送出快速評估；若要更精準的配置建議，請用完整需求表單。',
    btnRecommend: '完整需求表單',
    btnContact: '聯絡',
  },
  cn: {
    kicker: '报价',
    titlePrefix: '获取报价：',
    subtitle: '提供产品、包装形式与目标产速，我们会回复配置要点、选配建议与下一步。',
    whatToSend: '为了加快评估，建议提供：',
    bullets: [
      '产品与包装形式（有照片最快）',
      '灌装范围/重量、目标速度或日产量',
      '目的地国家与电力规格（电压/频率）',
      '限制条件：场地尺寸、粉尘/清洁、材质需求等',
    ],
    nextTitle: '下一步',
    nextBody: '你可以先提交快速评估；如需更精准的配置建议，请使用完整需求表单。',
    btnRecommend: '完整需求表单',
    btnContact: '联系',
  },
}

type Block = { type: 'h2'; text: string } | { type: 'p'; text: string } | { type: 'ul'; items: string[] }

const detailBySlug: Record<QuoteSlug, Partial<Record<Lang, Block[]>>> = {
  'pouch-packing-machine': {
    en: [
      { type: 'h2', text: 'How we scope pouch packing projects (so the quote matches reality)' },
      { type: 'p', text: 'For pouches, the quote is driven by the packaging path (premade pouch vs VFFS), product behavior, and how your bag must look and seal. We scope around stable production, not just headline speed.' },
      { type: 'h2', text: 'Key decisions that impact configuration' },
      { type: 'ul', items: ['Premade pouch vs VFFS (appearance vs material cost vs speed)', 'Bag type: stand-up, zipper, gusset, pillow; and size range', 'Dosing method: multihead weigher / auger / volumetric / liquid dosing modules', 'Seal risk: dust/oil contamination and film structure', 'Inspection: metal detection, checkweigher, vision'] },
      { type: 'h2', text: 'Common options buyers add after the first quote (budget drivers)' },
      { type: 'ul', items: ['Nitrogen flushing', 'De-dusting near seal for powders', 'Gusset/stand-up accessories', 'Code printer + verification', 'Reject conveyors and line buffering'] },
    ],
    zh: [
      { type: 'h2', text: '我們怎麼做袋裝包裝的需求拆解（讓報價更貼近實際）' },
      { type: 'p', text: '袋裝報價的核心是：袋型路線（預製袋 vs VFFS）、產品特性、袋子外觀與封口限制。我們會以「穩定量產」為主，避免只看速度數字。' },
      { type: 'h2', text: '最影響配置的幾個決策' },
      { type: 'ul', items: ['預製袋 vs VFFS（外觀 vs 材料成本 vs 產速）', '袋型：自立/拉鍊/折角/枕式與尺寸範圍', '計量方式：多頭秤/螺旋/容積/液體模組', '封口風險：粉塵/油污污染與包材結構', '檢測模組：金屬檢測、檢重、視覺'] },
      { type: 'h2', text: '常見會在第二輪才加上的選配（也是價差來源）' },
      { type: 'ul', items: ['充氮', '粉末封口除塵', '折角/自立附件', '噴碼＋驗證', '剔除輸送與緩衝'] },
    ],
    cn: [
      { type: 'h2', text: '我们怎么拆解袋装包装需求（让报价更贴近实际）' },
      { type: 'p', text: '袋装报价的核心是：袋型路线（预制袋 vs VFFS）、产品特性、袋子外观与封口限制。我们以“稳定量产”为主，避免只看速度数字。' },
      { type: 'h2', text: '最影响配置的几个决策' },
      { type: 'ul', items: ['预制袋 vs VFFS（外观 vs 材料成本 vs 产速）', '袋型：自立/拉链/折角/枕式与尺寸范围', '计量方式：多头秤/螺旋/容积/液体模块', '封口风险：粉尘/油污污染与包材结构', '检测模块：金属检测、检重、视觉'] },
      { type: 'h2', text: '常见第二轮才追加的选配（也是价差来源）' },
      { type: 'ul', items: ['充氮', '粉末封口除尘', '折角/自立附件', '喷码+验证', '剔除输送与缓冲'] },
    ],
  },
  'powder-filling-machine': {
    en: [
      { type: 'h2', text: 'Powder filling is a feeding problem first, and a dosing problem second' },
      { type: 'p', text: 'If the powder does not feed consistently, accuracy drifts and seals fail from dust. We scope hopper, agitation, dust control, and dosing together.' },
      { type: 'h2', text: 'What usually changes the quote' },
      { type: 'ul', items: ['Accuracy definition (and target speed at that tolerance)', 'Dust level and seal contamination risk', 'Auger vs net weigh strategy', 'Hygiene level and cleaning access', 'Integration: checkweigher / metal detector / dust extraction'] },
    ],
    zh: [
      { type: 'h2', text: '粉末灌裝先解決供料，再談精度' },
      { type: 'p', text: '粉末供料不穩，精度就會漂移，粉塵也會污染封口導致報廢。我們會把料斗、攪拌、除塵與計量一起做配置。' },
      { type: 'h2', text: '最常拉開價差的因素' },
      { type: 'ul', items: ['精度定義（以及在該公差下要跑的速度）', '粉塵等級與封口污染風險', '螺旋 vs 淨重秤策略', '衛生等級與清潔可達性', '整合：檢重/金屬檢測/除塵'] },
    ],
    cn: [
      { type: 'h2', text: '粉末灌装先解决供料，再谈精度' },
      { type: 'p', text: '粉末供料不稳，精度就会漂移，粉尘也会污染封口导致报废。我们会把料斗、搅拌、除尘与计量一起配置。' },
      { type: 'h2', text: '最常拉开价差的因素' },
      { type: 'ul', items: ['精度定义（以及在该公差下要跑的速度）', '粉尘等级与封口污染风险', '螺旋 vs 净重秤策略', '卫生等级与清洁可达性', '整合：检重/金属检测/除尘'] },
    ],
  },
  'liquid-filling-machine': {
    en: [
      { type: 'h2', text: 'Liquid filling depends on behavior: foaming, dripping, particulates, and temperature' },
      { type: 'p', text: 'Viscosity is only a starting point. We select gravity/pump/piston based on how your product behaves and how fast you need to run without mess.' },
      { type: 'h2', text: 'Common line items' },
      { type: 'ul', items: ['Nozzle strategy (shutoff, suck-back, bottom-up)', 'CIP / cleaning access and changeover', 'Particulate valve sizing', 'Capping, labeling, coding, and conveyors'] },
    ],
    zh: [
      { type: 'h2', text: '液體灌裝看的是行為：起泡、滴漏、顆粒、溫度' },
      { type: 'p', text: '黏度只是起點。我們會依產品行為與產速需求，選重力/泵式/活塞，並把止滴與清潔策略一起考慮。' },
      { type: 'h2', text: '常見整線項目' },
      { type: 'ul', items: ['噴嘴策略（止滴、回吸、底部充填）', 'CIP/清潔可達性與換線', '含顆粒閥型與管徑', '旋蓋、貼標、噴碼與輸送'] },
    ],
    cn: [
      { type: 'h2', text: '液体灌装看的是行为：起泡、滴漏、颗粒、温度' },
      { type: 'p', text: '黏度只是起点。我们会按产品行为与产速需求选重力/泵式/活塞，并把止滴与清洁策略一起考虑。' },
      { type: 'h2', text: '常见整线项目' },
      { type: 'ul', items: ['喷嘴策略（止滴、回吸、底部充填）', 'CIP/清洁可达性与换线', '含颗粒阀型与管径', '旋盖、贴标、喷码与输送'] },
    ],
  },
  'snack-processing-line': {
    en: [
      { type: 'h2', text: 'Snack lines are defined by bottlenecks and oil management' },
      { type: 'p', text: 'We scope capacity by the slowest step and validate oil management, cooling, and packaging interface to keep output stable.' },
      { type: 'h2', text: 'What to confirm before a serious quote' },
      { type: 'ul', items: ['Target packed output/hour (not only fryer input)', 'Oil filtration and safety requirements', 'Cooling length and seasoning adhesion', 'Packaging format and buffer strategy'] },
    ],
    zh: [
      { type: 'h2', text: '零食線看瓶頸，也看油管理' },
      { type: 'p', text: '我們會用最慢的一段定義產能，並把油管理、冷卻與包裝端接口一起驗證，確保產速穩定。' },
      { type: 'h2', text: '要做認真報價前，先確認這些' },
      { type: 'ul', items: ['最終包裝出貨量/小時（不只看油炸進料）', '濾油與安全需求', '冷卻長度與調味附著', '包裝形式與緩衝策略'] },
    ],
    cn: [
      { type: 'h2', text: '零食线看瓶颈，也看油管理' },
      { type: 'p', text: '我们以最慢的一段定义产能，并把油管理、冷却与包装端接口一起验证，确保产速稳定。' },
      { type: 'h2', text: '做认真报价前先确认这些' },
      { type: 'ul', items: ['最终包装出货量/小时（不只看油炸进料）', '滤油与安全需求', '冷却长度与调味附着', '包装形式与缓冲策略'] },
    ],
  },
  'conveyor-system': {
    en: [
      { type: 'h2', text: 'Conveyors are a control + layout system, not only a belt' },
      { type: 'p', text: 'We scope transfers, speed matching, accumulation, and maintenance access. Those details decide uptime more than belt brand.' },
      { type: 'h2', text: 'What we confirm to avoid jams' },
      { type: 'ul', items: ['Transfer gaps and guides', 'Zone control and jam detection', 'Buffer length and reject strategy', 'Cleaning and hygiene level'] },
    ],
    zh: [
      { type: 'h2', text: '輸送系統是「控制＋佈局」，不只是皮帶' },
      { type: 'p', text: '我們會先把轉接、速度匹配、緩衝與維修空間做清楚，這些比皮帶品牌更影響稼動率。' },
      { type: 'h2', text: '避免卡料的關鍵確認點' },
      { type: 'ul', items: ['轉接間隙與導正', '分區控制與卡料偵測', '緩衝長度與剔除策略', '清潔與衛生等級'] },
    ],
    cn: [
      { type: 'h2', text: '输送系统是“控制+布局”，不只是皮带' },
      { type: 'p', text: '我们会先把转接、速度匹配、缓冲与维护空间确认清楚，这些比皮带品牌更影响稼动率。' },
      { type: 'h2', text: '避免卡料的关键确认点' },
      { type: 'ul', items: ['转接间隙与导正', '分区控制与卡料检测', '缓冲长度与剔除策略', '清洁与卫生等级'] },
    ],
  },
}

const moreByLang: Partial<Record<Lang, { machineBtn: string; guidesTitle: string; guidesDesc: string }>> = {
  en: { machineBtn: 'View machine page', guidesTitle: 'Related buying guides', guidesDesc: 'Use these guides to confirm key specs before you request a quote.' },
  zh: { machineBtn: '查看機型頁', guidesTitle: '相關採購指南', guidesDesc: '用這些文章先把關鍵規格確認好，再詢價會更快更準。' },
  cn: { machineBtn: '查看机型页', guidesTitle: '相关采购指南', guidesDesc: '先用这些文章把关键规格确认好，再询价会更快更准。' },
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const langs: Lang[] = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!slugs.includes(slug as QuoteSlug)) notFound()
  const s = slug as QuoteSlug
  const name = machineName[s][l] ?? machineName[s].en ?? slug
  const title = l === 'zh' || l === 'cn' ? `${copyByLang[l]?.titlePrefix ?? ''}${name}` : `Request a Quote | ${name}`
  const description =
    copyByLang[l]?.subtitle ??
    copyByLang.en?.subtitle ??
    'Request a quote and sourcing assessment for industrial packaging and filling machinery.'

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/quote/${s}`,
    type: 'website',
    keywords: [
      `${name} quote`,
      `${name} supplier`,
      'request a quote',
      'machinery quote',
      'sourcing assessment',
      'industrial equipment sourcing',
    ],
  })
}

export default async function QuoteDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!slugs.includes(slug as QuoteSlug)) notFound()
  const s = slug as QuoteSlug

  const name = machineName[s][l] ?? machineName[s].en ?? slug
  const c = copyByLang[l] ?? copyByLang.en!
  const more = moreByLang[l] ?? moreByLang.en!
  const machineHref = `/${l}/machines/${s}`
  const guides = getResourceArticlesByMachine(s, l, 8)
  const blocks = detailBySlug[s][l] ?? detailBySlug[s].en ?? []

  const canonical = `${SITE_URL}/${l}/quote/${s}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${l}` },
      { '@type': 'ListItem', position: 2, name: 'Quote', item: `${SITE_URL}/${l}/quote` },
      { '@type': 'ListItem', position: 3, name: name, item: canonical },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: l === 'zh' ? '多久可以拿到回覆？' : l === 'cn' ? '多久可以拿到回复？' : 'How fast do you reply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            l === 'zh'
              ? '一般 1–2 個工作日內回覆配置建議與下一步。'
              : l === 'cn'
                ? '一般 1–2 个工作日内回复配置建议与下一步。'
                : 'Usually within 1–2 business days with configuration notes and next steps.',
        },
      },
      {
        '@type': 'Question',
        name: l === 'zh' ? '要提供哪些資訊最有效？' : l === 'cn' ? '提供哪些信息最有效？' : 'What information is most useful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            l === 'zh'
              ? '產品、包材形式、灌裝範圍/重量、目標產速，以及目的地電壓/頻率。照片或樣品包裝會更快。'
              : l === 'cn'
                ? '产品、包装形式、灌装范围/重量、目标产速，以及目的地电压/频率。照片或样品包装会更快。'
                : 'Product, package format, fill range/weight, target speed, and destination voltage/frequency. Photos help.',
        },
      },
      {
        '@type': 'Question',
        name: l === 'zh' ? '可以先快速評估，再補細節嗎？' : l === 'cn' ? '可以先快速评估，再补细节吗？' : 'Can I submit a quick request first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            l === 'zh'
              ? '可以。先送出快速評估，我們會先把配置方向抓出來；後續再補照片、樣品與更完整需求。'
              : l === 'cn'
                ? '可以。先提交快速评估，我们会先把配置方向抓出来；后续再补照片、样品与更完整需求。'
                : 'Yes. Start with a quick assessment and add photos/specs later.',
        },
      },
    ],
  }

  return (
    <main>
      <JsonLd data={[breadcrumb, faq]} />

      <section className="bg-gray-950 py-14 text-white sm:py-18">
        <Container className="max-w-4xl">
          <div className="text-center">
            <div className="text-xs font-bold tracking-[0.2em] text-white/70">{c.kicker}</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {l === 'zh' || l === 'cn' ? (
                <>
                  {c.titlePrefix}
                  {name}
                </>
              ) : (
                <>
                  {c.titlePrefix} {name}
                </>
              )}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">{c.subtitle}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-lg font-bold text-gray-950">{c.whatToSend}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {c.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-gray-50 p-5">
                <div className="text-sm font-bold text-gray-950">{c.nextTitle}</div>
                <p className="mt-2 text-sm text-gray-700">{c.nextBody}</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`/${l}/assessment`} variant="primary" size="md">
                    {c.btnRecommend}
                  </ButtonLink>
                  <ButtonLink href={`/${l}/contact`} variant="soft" size="md">
                    {c.btnContact}
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <QuickAssessment lang={l} context={s} source="quote" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 border-t border-gray-200/60 bg-white">
        <Container className="max-w-4xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{more.guidesTitle}</h2>
              <p className="mt-2 text-sm text-gray-600">{more.guidesDesc}</p>
            </div>
            <ButtonLink href={machineHref} variant="secondary" size="md">
              {more.machineBtn}
            </ButtonLink>
          </div>

          {guides.length > 0 ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {guides.map((g) => (
                <a
                  key={g.slug}
                  href={`/${l}/resources/${g.slug}`}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold text-accent-700 hover:border-accent-300 hover:bg-accent-50"
                >
                  {g.title}
                </a>
              ))}
            </div>
          ) : null}

          {blocks.length > 0 ? (
            <div className="mt-10 space-y-6">
              {blocks.map((b, idx) => {
                if (b.type === 'h2') return <h3 key={idx} className="text-xl font-bold text-gray-950">{b.text}</h3>
                if (b.type === 'p') return <p key={idx} className="text-sm leading-relaxed text-gray-700">{b.text}</p>
                if (b.type === 'ul') {
                  return (
                    <ul key={idx} className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      {b.items.map((it, i) => <li key={i}>{it}</li>)}
                    </ul>
                  )
                }
                return null
              })}
            </div>
          ) : null}
        </Container>
      </section>
    </main>
  )
}
