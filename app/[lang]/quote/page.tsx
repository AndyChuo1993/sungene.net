import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import type { Lang } from '@/lib/i18n'

const titleByLang: Partial<Record<Lang, string>> = {
  en: 'Request a Quote | Packaging, Filling & Automation Projects',
  zh: '取得報價與採購評估 | 包裝與灌裝機械',
  cn: '获取报价与采购评估 | 包装与灌装机械',
}

const descByLang: Partial<Record<Lang, string>> = {
  en: 'Choose a machine category and request a sourcing assessment. We reply with configuration notes, options, and a clear next step.',
  zh: '選擇機器類別並送出需求，我們會回覆配置重點、選配建議與下一步。',
  cn: '选择机器类别并提交需求，我们会回复配置要点、选配建议与下一步。',
}

const uiByLang: Partial<Record<Lang, { kicker: string; h1: string; subtitle: string; cta: string }>> = {
  en: {
    kicker: 'QUOTE',
    h1: 'Request a quote and sourcing assessment',
    subtitle: 'Start with the machine category closest to your product. You can add photos and detailed requirements later.',
    cta: 'Open quote page',
  },
  zh: {
    kicker: '報價',
    h1: '取得報價與採購評估',
    subtitle: '先選最接近你產品的類別，細節與照片可後補。我們會用工程角度把配置方向整理清楚。',
    cta: '前往報價頁',
  },
  cn: {
    kicker: '报价',
    h1: '获取报价与采购评估',
    subtitle: '先选最接近你产品的类别，细节与照片可后补。我们会用工程角度把配置方向整理清楚。',
    cta: '进入报价页',
  },
}

const machines: Array<{ slug: string; label: Partial<Record<Lang, string>> }> = [
  { slug: 'pouch-packing-machine', label: { en: 'Pouch packing machines', zh: '袋裝包裝機', cn: '袋装包装机' } },
  { slug: 'powder-filling-machine', label: { en: 'Powder filling machines', zh: '粉末灌裝機', cn: '粉末灌装机' } },
  { slug: 'liquid-filling-machine', label: { en: 'Liquid filling machines', zh: '液體灌裝機', cn: '液体灌装机' } },
  { slug: 'snack-processing-line', label: { en: 'Snack processing lines', zh: '休閒食品加工線', cn: '休闲食品加工线' } },
  { slug: 'conveyor-system', label: { en: 'Conveyor systems', zh: '輸送系統', cn: '输送系统' } },
]

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const langs: Lang[] = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
  return langs.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titleByLang[l] ?? titleByLang.en ?? 'Request a Quote',
    description: descByLang[l] ?? descByLang.en ?? '',
    pathname: '/quote',
    type: 'website',
    keywords: [
      'request a quote',
      'machinery quote',
      'packaging machine quote',
      'filling machine quote',
      'sourcing assessment',
      'industrial machinery sourcing',
    ],
  })
}

export default async function QuoteHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l = normalizeLang(lang)
  const ui = uiByLang[l] ?? uiByLang.en!

  return (
    <main>
      <section className="bg-gray-950 py-14 text-white sm:py-18">
        <Container className="max-w-4xl">
          <div className="text-center">
            <div className="text-xs font-bold tracking-[0.2em] text-white/70">{ui.kicker}</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{ui.h1}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">{ui.subtitle}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {machines.map((m) => (
              <div key={m.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-bold text-gray-950">{m.label[l] ?? m.label.en ?? m.slug}</div>
                <div className="mt-4">
                  <ButtonLink href={`/${l}/quote/${m.slug}`} variant="primary" size="md">
                    {ui.cta}
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
