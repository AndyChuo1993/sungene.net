import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { ButtonLink } from '@/components/ui/Button'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'
import type { Lang } from '@/lib/i18n'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'
import { getTopicHubIntro, TOPIC_HUB_FAQ_TITLE, getTopicHubFaqs } from '@/lib/topicHubFaq'
import type { TopicMachine } from '@/lib/topicHubFaq'

type RouteSlug = 'pouch-packaging' | 'powder-dosing' | 'liquid-filling' | 'food-processing-line' | 'conveying-automation'

const ROUTE_SLUGS: RouteSlug[] = ['pouch-packaging', 'powder-dosing', 'liquid-filling', 'food-processing-line', 'conveying-automation']

const ROUTE_TO_MACHINE: Record<RouteSlug, TopicMachine> = {
  'pouch-packaging': 'pouch-packing-machine',
  'powder-dosing': 'powder-filling-machine',
  'liquid-filling': 'liquid-filling-machine',
  'food-processing-line': 'snack-processing-line',
  'conveying-automation': 'conveyor-system',
}

const resourcesLabel: Record<Lang, string> = {
  en: 'Resources',
  cn: '资源中心',
  zh: '資源中心',
  fr: 'Ressources',
  es: 'Recursos',
  pt: 'Recursos',
  ko: '리소스',
  ja: 'リソース',
  ar: 'الموارد',
  th: 'แหล่งข้อมูล',
  vi: 'Tài nguyên',
  de: 'Ressourcen',
}

const machineLabel: Record<Lang, Record<TopicMachine, string>> = {
  en: {
    'pouch-packing-machine': 'Pouch packaging',
    'powder-filling-machine': 'Powder dosing',
    'liquid-filling-machine': 'Liquid filling',
    'snack-processing-line': 'Food processing line',
    'conveyor-system': 'Conveying & automation',
  },
  zh: {
    'pouch-packing-machine': '袋包裝配置',
    'powder-filling-machine': '粉體計量配置',
    'liquid-filling-machine': '液體灌裝配置',
    'snack-processing-line': '食品加工整線配置',
    'conveyor-system': '輸送與自動化配置',
  },
  cn: {
    'pouch-packing-machine': '袋包装配置',
    'powder-filling-machine': '粉体计量配置',
    'liquid-filling-machine': '液体灌装配置',
    'snack-processing-line': '食品加工整线配置',
    'conveyor-system': '输送与自动化配置',
  },
  fr: {
    'pouch-packing-machine': 'Configuration ensachage',
    'powder-filling-machine': 'Configuration dosage poudre',
    'liquid-filling-machine': 'Configuration remplissage liquide',
    'snack-processing-line': 'Configuration ligne process',
    'conveyor-system': 'Configuration convoyage & automatisation',
  },
  es: {
    'pouch-packing-machine': 'Configuración empaque en bolsa',
    'powder-filling-machine': 'Configuración dosificación de polvo',
    'liquid-filling-machine': 'Configuración llenado de líquidos',
    'snack-processing-line': 'Configuración línea de proceso',
    'conveyor-system': 'Configuración transporte y automatización',
  },
  pt: {
    'pouch-packing-machine': 'Configuração embalagem em saco',
    'powder-filling-machine': 'Configuração dosagem de pó',
    'liquid-filling-machine': 'Configuração envase de líquidos',
    'snack-processing-line': 'Configuração linha de processo',
    'conveyor-system': 'Configuração transporte e automação',
  },
  ko: {
    'pouch-packing-machine': '파우치 구성',
    'powder-filling-machine': '분말 계량 구성',
    'liquid-filling-machine': '액체 충전 구성',
    'snack-processing-line': '식품 라인 구성',
    'conveyor-system': '이송/자동화 구성',
  },
  ja: {
    'pouch-packing-machine': 'パウチ構成',
    'powder-filling-machine': '粉体計量構成',
    'liquid-filling-machine': '液体充填構成',
    'snack-processing-line': '加工ライン構成',
    'conveyor-system': '搬送/自動化構成',
  },
  ar: {
    'pouch-packing-machine': 'تهيئة تعبئة الأكياس',
    'powder-filling-machine': 'تهيئة جرعات المساحيق',
    'liquid-filling-machine': 'تهيئة تعبئة السوائل',
    'snack-processing-line': 'تهيئة خط المعالجة',
    'conveyor-system': 'تهيئة النقل والأتمتة',
  },
  th: {
    'pouch-packing-machine': 'กำหนดค่าบรรจุถุง',
    'powder-filling-machine': 'กำหนดค่าการตวงผง',
    'liquid-filling-machine': 'กำหนดค่าบรรจุของเหลว',
    'snack-processing-line': 'กำหนดค่าไลน์กระบวนการ',
    'conveyor-system': 'กำหนดค่าลำเลียงและอัตโนมัติ',
  },
  vi: {
    'pouch-packing-machine': 'Cấu hình đóng gói túi',
    'powder-filling-machine': 'Cấu hình định lượng bột',
    'liquid-filling-machine': 'Cấu hình chiết rót',
    'snack-processing-line': 'Cấu hình dây chuyền chế biến',
    'conveyor-system': 'Cấu hình băng tải & tự động hóa',
  },
  de: {
    'pouch-packing-machine': 'Konfiguration Beutelverpackung',
    'powder-filling-machine': 'Konfiguration Pulverdosierung',
    'liquid-filling-machine': 'Konfiguration Flüssigabfüllung',
    'snack-processing-line': 'Konfiguration Prozesslinie',
    'conveyor-system': 'Konfiguration Fördertechnik & Automation',
  },
}

const tx: Record<Lang, { titleSuffix: string; intro: string; quoteTitle: string; quoteBody: string; quoteBtn: string; viewMachine: string; recommend: string; contact: string; empty: string }> = {
  en: {
    titleSuffix: 'Configuration guides',
    intro: 'Selection notes and comparisons that help you confirm the right configuration before you request a sourcing assessment.',
    quoteTitle: 'Request sourcing assessment',
    quoteBody: 'Send product, package format, fill range, target output, and destination voltage/frequency.',
    quoteBtn: 'Open quote page',
    viewMachine: 'View configuration page',
    recommend: 'Get assessment',
    contact: 'Contact',
    empty: 'No guides yet.',
  },
  zh: {
    titleSuffix: '配置指南',
    intro: '整理選型重點與比較，讓你在申請採購評估前先把配置方向確認清楚。',
    quoteTitle: '取得採購評估',
    quoteBody: '請提供產品、包材形式、灌裝範圍、目標產速，以及目的地電壓/頻率。',
    quoteBtn: '前往報價頁',
    viewMachine: '查看配置頁',
    recommend: '取得評估',
    contact: '聯絡',
    empty: '目前沒有相關文章。',
  },
  cn: {
    titleSuffix: '配置指南',
    intro: '整理选型要点与比较内容，方便在申请采购评估前先把配置方向确认清楚。',
    quoteTitle: '获取采购评估',
    quoteBody: '请提供产品、包装形式、灌装范围、目标产速，以及目的地电压/频率。',
    quoteBtn: '进入报价页',
    viewMachine: '查看配置页',
    recommend: '获取评估',
    contact: '联系',
    empty: '目前没有相关文章。',
  },
  fr: {
    titleSuffix: 'Guides de configuration',
    intro: 'Notes de sélection et comparatifs pour valider la configuration avant une évaluation de sourcing.',
    quoteTitle: 'Demander une évaluation',
    quoteBody: 'Produit, format, plage de dosage, cadence cible, tension/fréquence du pays.',
    quoteBtn: 'Ouvrir la page devis',
    viewMachine: 'Voir la page configuration',
    recommend: 'Formulaire',
    contact: 'Contact',
    empty: 'Aucun guide pour le moment.',
  },
  es: {
    titleSuffix: 'Guías de configuración',
    intro: 'Notas de selección y comparaciones para confirmar la configuración antes de cotizar.',
    quoteTitle: 'Solicitar evaluación',
    quoteBody: 'Producto, formato, rango de llenado, velocidad objetivo y voltaje/frecuencia del destino.',
    quoteBtn: 'Abrir página de cotización',
    viewMachine: 'Ver página de configuración',
    recommend: 'Formulario',
    contact: 'Contacto',
    empty: 'Aún no hay guías.',
  },
  pt: {
    titleSuffix: 'Guias de configuração',
    intro: 'Notas de seleção e comparativos para confirmar a configuração antes do orçamento.',
    quoteTitle: 'Solicitar avaliação',
    quoteBody: 'Produto, formato, faixa de enchimento, velocidade-alvo e tensão/frequência do destino.',
    quoteBtn: 'Abrir página de cotação',
    viewMachine: 'Ver página de configuração',
    recommend: 'Formulário',
    contact: 'Contato',
    empty: 'Ainda não há guias.',
  },
  ko: {
    titleSuffix: '구성 가이드',
    intro: '견적 요청 전에 구성 방향을 확인할 수 있도록 선정 기준과 비교 자료를 정리했습니다.',
    quoteTitle: '소싱 평가 요청',
    quoteBody: '제품, 포장 형식, 충전 범위, 목표 속도, 목적지 전압/주파수를 보내주세요.',
    quoteBtn: '견적 페이지',
    viewMachine: '구성 페이지',
    recommend: '평가 받기',
    contact: '문의',
    empty: '관련 가이드가 아직 없습니다.',
  },
  ja: {
    titleSuffix: '構成ガイド',
    intro: '見積依頼の前に、構成の方向性を確認できる選定ポイントと比較記事をまとめています。',
    quoteTitle: 'ソーシング評価を依頼',
    quoteBody: '製品、包装形態、充填範囲、目標能力、仕向地の電圧/周波数をご共有ください。',
    quoteBtn: '見積ページ',
    viewMachine: '構成ページ',
    recommend: 'フォーム',
    contact: '問い合わせ',
    empty: '関連ガイドはまだありません。',
  },
  ar: {
    titleSuffix: 'أدلة التهيئة',
    intro: 'ملاحظات اختيار ومقارنات تساعدك على تثبيت التكوين قبل طلب عرض سعر.',
    quoteTitle: 'طلب تقييم',
    quoteBody: 'أرسل المنتج وشكل العبوة ونطاق التعبئة والقدرة المطلوبة ومعيار الجهد/التردد.',
    quoteBtn: 'صفحة عرض السعر',
    viewMachine: 'صفحة التهيئة',
    recommend: 'نموذج',
    contact: 'تواصل',
    empty: 'لا توجد أدلة بعد.',
  },
  th: {
    titleSuffix: 'คู่มือการกำหนดค่า',
    intro: 'สรุปเกณฑ์เลือกและบทความเปรียบเทียบ เพื่อยืนยันสเปกก่อนขอใบเสนอราคา',
    quoteTitle: 'ขอการประเมิน',
    quoteBody: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง',
    quoteBtn: 'หน้าใบเสนอราคา',
    viewMachine: 'ดูหน้าการกำหนดค่า',
    recommend: 'แบบฟอร์ม',
    contact: 'ติดต่อ',
    empty: 'ยังไม่มีคู่มือ',
  },
  vi: {
    titleSuffix: 'Hướng dẫn cấu hình',
    intro: 'Tổng hợp tiêu chí chọn máy và bài so sánh để chốt cấu hình trước khi xin báo giá.',
    quoteTitle: 'Yêu cầu đánh giá',
    quoteBody: 'Gửi sản phẩm, format, dải chiết rót, tốc độ mục tiêu và điện áp/tần số tại điểm đến.',
    quoteBtn: 'Trang báo giá',
    viewMachine: 'Trang cấu hình',
    recommend: 'Biểu mẫu',
    contact: 'Liên hệ',
    empty: 'Chưa có bài phù hợp.',
  },
  de: {
    titleSuffix: 'Konfigurationsleitfäden',
    intro: 'Auswahlhinweise und Vergleiche, um die Konfiguration vor der Angebotsanfrage abzusichern.',
    quoteTitle: 'Bewertung anfordern',
    quoteBody: 'Produkt, Format, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort senden.',
    quoteBtn: 'Angebotsseite öffnen',
    viewMachine: 'Konfigurationsseite',
    recommend: 'Formular',
    contact: 'Kontakt',
    empty: 'Noch keine Ratgeber verfügbar.',
  },
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const langs: Lang[] = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
  return langs.flatMap((lang) => ROUTE_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!ROUTE_SLUGS.includes(slug as RouteSlug)) notFound()
  const s = slug as RouteSlug
  const m = ROUTE_TO_MACHINE[s]
  const title = `${machineLabel[l][m]} ${tx[l].titleSuffix}`
  const description = getTopicHubIntro(l, m)
  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/resources/route/${s}`,
    type: 'website',
  })
}

export default async function RouteHubPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!ROUTE_SLUGS.includes(slug as RouteSlug)) notFound()
  const s = slug as RouteSlug
  const m = ROUTE_TO_MACHINE[s]
  const t = tx[l]
  const faqs = getTopicHubFaqs(l, m)
  const intro = getTopicHubIntro(l, m)

  const guides = getResourceArticlesByMachine(m, l, 32)
  const title = `${machineLabel[l][m]} ${t.titleSuffix}`
  const machineHref = `/${l}/machines/${m}`
  const recommendHref = `/${l}/assessment`
  const contactHref = `/${l}/contact`
  const quoteHref = `/${l}/quote/${m}`
  const pageUrl = `${SITE_URL}/${l}/resources/route/${s}`
  const itemListId = `${pageUrl}#itemlist`

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[l].htmlLang,
    name: title,
    description: intro,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[l].htmlLang,
    name: title,
    isPartOf: { '@id': pageUrl },
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.title,
      item: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/${l}/resources/${g.slug}`,
        url: `${SITE_URL}/${l}/resources/${g.slug}`,
        name: g.title,
      },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    inLanguage: LANG_META[l].htmlLang,
    name: title,
    url: pageUrl,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.text-base.text-gray-700'] },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[l].htmlLang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <section className="py-10 sm:py-14 bg-white">
        <Container className="max-w-4xl">
          <Breadcrumbs
            lang={l}
            items={[
              { label: resourcesLabel[l], href: `/${l}/resources` },
              { label: title, href: `/${l}/resources/route/${s}` },
            ]}
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base text-gray-700">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={machineHref} variant="secondary">{t.viewMachine}</ButtonLink>
            <ButtonLink href={recommendHref}>{t.recommend}</ButtonLink>
            <ButtonLink href={contactHref} variant="secondary">{t.contact}</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 bg-gray-50">
        <Container className="max-w-4xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-950">{t.quoteTitle}</h2>
            <p className="mt-2 text-sm text-gray-600">{t.quoteBody}</p>
            <div className="mt-4">
              <ButtonLink href={quoteHref} size="md">{t.quoteBtn}</ButtonLink>
            </div>
          </div>

          {guides.length > 0 ? (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="space-y-2 text-sm">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <a href={`/${l}/resources/${g.slug}`} className="text-accent-600 hover:underline">{g.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm text-gray-600">{t.empty}</p>
            </div>
          )}
        </Container>
      </section>

      <section className="py-10 sm:py-12 bg-white border-t border-gray-200/60">
        <Container className="max-w-4xl">
          <h2 id="faq" className="text-xl font-bold text-gray-950">{TOPIC_HUB_FAQ_TITLE[l] || TOPIC_HUB_FAQ_TITLE.en}</h2>
          <div className="mt-6 divide-y divide-gray-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-base font-semibold text-gray-950">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <JsonLd data={[collectionSchema, itemListSchema, faqSchema, speakableSchema]} />
    </>
  )
}
