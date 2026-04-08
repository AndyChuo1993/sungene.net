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
import { getTopicHubIntro, TOPIC_HUB_FAQ_TITLE, TOPIC_MACHINES, getTopicHubFaqs } from '@/lib/topicHubFaq'
import type { TopicMachine } from '@/lib/topicHubFaq'

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
    'pouch-packing-machine': 'Pouch packing',
    'powder-filling-machine': 'Powder filling',
    'liquid-filling-machine': 'Liquid filling',
    'snack-processing-line': 'Snack processing line',
    'conveyor-system': 'Conveyor systems',
  },
  zh: {
    'pouch-packing-machine': '袋裝包裝機',
    'powder-filling-machine': '粉末灌裝機',
    'liquid-filling-machine': '液體灌裝機',
    'snack-processing-line': '休閒食品加工線',
    'conveyor-system': '輸送系統',
  },
  cn: {
    'pouch-packing-machine': '袋装包装机',
    'powder-filling-machine': '粉末灌装机',
    'liquid-filling-machine': '液体灌装机',
    'snack-processing-line': '休闲食品加工线',
    'conveyor-system': '输送系统',
  },
  fr: {
    'pouch-packing-machine': 'Ensachage (pouch)',
    'powder-filling-machine': 'Remplissage poudre',
    'liquid-filling-machine': 'Remplissage liquide',
    'snack-processing-line': 'Ligne snack',
    'conveyor-system': 'Convoyeurs',
  },
  es: {
    'pouch-packing-machine': 'Empaque en bolsa',
    'powder-filling-machine': 'Llenado de polvo',
    'liquid-filling-machine': 'Llenado de líquidos',
    'snack-processing-line': 'Línea de snacks',
    'conveyor-system': 'Sistemas de transporte',
  },
  pt: {
    'pouch-packing-machine': 'Embalagem em saco',
    'powder-filling-machine': 'Envase de pó',
    'liquid-filling-machine': 'Envase de líquidos',
    'snack-processing-line': 'Linha de snacks',
    'conveyor-system': 'Sistemas de transporte',
  },
  ko: {
    'pouch-packing-machine': '파우치 포장',
    'powder-filling-machine': '분말 충전',
    'liquid-filling-machine': '액체 충전',
    'snack-processing-line': '스낵 생산 라인',
    'conveyor-system': '컨베이어 시스템',
  },
  ja: {
    'pouch-packing-machine': 'パウチ包装',
    'powder-filling-machine': '粉体充填',
    'liquid-filling-machine': '液体充填',
    'snack-processing-line': 'スナックライン',
    'conveyor-system': '搬送システム',
  },
  ar: {
    'pouch-packing-machine': 'تعبئة الأكياس',
    'powder-filling-machine': 'تعبئة المساحيق',
    'liquid-filling-machine': 'تعبئة السوائل',
    'snack-processing-line': 'خط معالجة السناكات',
    'conveyor-system': 'أنظمة النقل',
  },
  th: {
    'pouch-packing-machine': 'เครื่องบรรจุถุง',
    'powder-filling-machine': 'เครื่องบรรจุผง',
    'liquid-filling-machine': 'เครื่องบรรจุของเหลว',
    'snack-processing-line': 'ไลน์ขนมขบเคี้ยว',
    'conveyor-system': 'ระบบลำเลียง',
  },
  vi: {
    'pouch-packing-machine': 'Đóng gói túi',
    'powder-filling-machine': 'Chiết rót bột',
    'liquid-filling-machine': 'Chiết rót chất lỏng',
    'snack-processing-line': 'Dây chuyền snack',
    'conveyor-system': 'Hệ thống băng tải',
  },
  de: {
    'pouch-packing-machine': 'Beutelverpackung',
    'powder-filling-machine': 'Pulverabfüllung',
    'liquid-filling-machine': 'Flüssigabfüllung',
    'snack-processing-line': 'Snack-Linie',
    'conveyor-system': 'Fördersysteme',
  },
}

const tx: Record<Lang, { titleSuffix: string; intro: string; quoteTitle: string; quoteBody: string; viewMachine: string; recommend: string; contact: string; empty: string }> = {
  en: {
    titleSuffix: 'Buying guides',
    intro: 'Selection notes and comparisons that help you confirm the right configuration before you request a quotation.',
    quoteTitle: 'Request a quotation',
    quoteBody: 'Send product, package format, fill range, target output, and destination voltage/frequency.',
    viewMachine: 'View machine page',
    recommend: 'Recommendation form',
    contact: 'Contact',
    empty: 'No guides yet.',
  },
  zh: {
    titleSuffix: '採購指南',
    intro: '整理選型重點與比較，讓你在詢價前先把配置方向確認清楚。',
    quoteTitle: '取得報價',
    quoteBody: '請提供產品、包材形式、灌裝範圍、目標產速，以及目的地電壓/頻率。',
    viewMachine: '查看機型頁',
    recommend: '需求表單',
    contact: '聯絡',
    empty: '目前沒有相關文章。',
  },
  cn: {
    titleSuffix: '采购指南',
    intro: '整理选型要点与比较内容，方便在询价前先把配置方向确认清楚。',
    quoteTitle: '获取报价',
    quoteBody: '请提供产品、包装形式、灌装范围、目标产速，以及目的地电压/频率。',
    viewMachine: '查看机型页',
    recommend: '需求表单',
    contact: '联系',
    empty: '目前没有相关文章。',
  },
  fr: {
    titleSuffix: 'Guides d’achat',
    intro: 'Notes de sélection et comparatifs pour valider la configuration avant demande de devis.',
    quoteTitle: 'Demander un devis',
    quoteBody: 'Produit, format, plage de dosage, cadence cible, tension/fréquence du pays.',
    viewMachine: 'Voir la page machine',
    recommend: 'Formulaire',
    contact: 'Contact',
    empty: 'Aucun guide pour le moment.',
  },
  es: {
    titleSuffix: 'Guías de compra',
    intro: 'Notas de selección y comparaciones para confirmar la configuración antes de cotizar.',
    quoteTitle: 'Solicitar cotización',
    quoteBody: 'Producto, formato, rango de llenado, velocidad objetivo y voltaje/frecuencia del destino.',
    viewMachine: 'Ver página de máquina',
    recommend: 'Formulario',
    contact: 'Contacto',
    empty: 'Aún no hay guías.',
  },
  pt: {
    titleSuffix: 'Guias de compra',
    intro: 'Notas de seleção e comparativos para confirmar a configuração antes do orçamento.',
    quoteTitle: 'Solicitar orçamento',
    quoteBody: 'Produto, formato, faixa de enchimento, velocidade-alvo e tensão/frequência do destino.',
    viewMachine: 'Ver página da máquina',
    recommend: 'Formulário',
    contact: 'Contato',
    empty: 'Ainda não há guias.',
  },
  ko: {
    titleSuffix: '구매 가이드',
    intro: '견적 요청 전에 구성 방향을 확인할 수 있도록 선정 기준과 비교 자료를 정리했습니다.',
    quoteTitle: '견적 요청',
    quoteBody: '제품, 포장 형식, 충전 범위, 목표 속도, 목적지 전압/주파수를 보내주세요.',
    viewMachine: '기계 페이지',
    recommend: '추천 폼',
    contact: '문의',
    empty: '관련 가이드가 아직 없습니다.',
  },
  ja: {
    titleSuffix: '購入ガイド',
    intro: '見積依頼の前に、構成の方向性を確認できる選定ポイントと比較記事をまとめています。',
    quoteTitle: '見積依頼',
    quoteBody: '製品、包装形態、充填範囲、目標能力、仕向地の電圧/周波数をご共有ください。',
    viewMachine: '機種ページ',
    recommend: 'フォーム',
    contact: '問い合わせ',
    empty: '関連ガイドはまだありません。',
  },
  ar: {
    titleSuffix: 'أدلة الشراء',
    intro: 'ملاحظات اختيار ومقارنات تساعدك على تثبيت التكوين قبل طلب عرض سعر.',
    quoteTitle: 'طلب عرض سعر',
    quoteBody: 'أرسل المنتج وشكل العبوة ونطاق التعبئة والقدرة المطلوبة ومعيار الجهد/التردد.',
    viewMachine: 'صفحة الماكينة',
    recommend: 'نموذج',
    contact: 'تواصل',
    empty: 'لا توجد أدلة بعد.',
  },
  th: {
    titleSuffix: 'คู่มือการเลือกซื้อ',
    intro: 'สรุปเกณฑ์เลือกและบทความเปรียบเทียบ เพื่อยืนยันสเปกก่อนขอใบเสนอราคา',
    quoteTitle: 'ขอใบเสนอราคา',
    quoteBody: 'แจ้งสินค้า รูปแบบบรรจุภัณฑ์ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง',
    viewMachine: 'ดูหน้ารุ่นเครื่อง',
    recommend: 'แบบฟอร์ม',
    contact: 'ติดต่อ',
    empty: 'ยังไม่มีคู่มือ',
  },
  vi: {
    titleSuffix: 'Hướng dẫn mua',
    intro: 'Tổng hợp tiêu chí chọn máy và bài so sánh để chốt cấu hình trước khi xin báo giá.',
    quoteTitle: 'Yêu cầu báo giá',
    quoteBody: 'Gửi sản phẩm, format, dải chiết rót, tốc độ mục tiêu và điện áp/tần số tại điểm đến.',
    viewMachine: 'Trang máy',
    recommend: 'Biểu mẫu',
    contact: 'Liên hệ',
    empty: 'Chưa có bài phù hợp.',
  },
  de: {
    titleSuffix: 'Kaufratgeber',
    intro: 'Auswahlhinweise und Vergleiche, um die Konfiguration vor der Angebotsanfrage abzusichern.',
    quoteTitle: 'Angebot anfordern',
    quoteBody: 'Produkt, Format, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort senden.',
    viewMachine: 'Maschinenseite',
    recommend: 'Formular',
    contact: 'Kontakt',
    empty: 'Noch keine Ratgeber verfügbar.',
  },
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const langs: Lang[] = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
  return langs.flatMap((lang) => TOPIC_MACHINES.map((machine) => ({ lang, machine })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; machine: string }> }): Promise<Metadata> {
  const { lang, machine } = await params
  const l = normalizeLang(lang)
  if (!TOPIC_MACHINES.includes(machine as TopicMachine)) notFound()
  const m = machine as TopicMachine
  const title = `${machineLabel[l][m]} ${tx[l].titleSuffix} | SunGene`
  const description = getTopicHubIntro(l, m)
  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/resources/topic/${m}`,
    type: 'website',
  })
}

export default async function TopicHubPage({ params }: { params: Promise<{ lang: string; machine: string }> }) {
  const { lang, machine } = await params
  const l = normalizeLang(lang)
  if (!TOPIC_MACHINES.includes(machine as TopicMachine)) notFound()
  const m = machine as TopicMachine
  const t = tx[l]
  const faqs = getTopicHubFaqs(l, m)
  const intro = getTopicHubIntro(l, m)

  const guides = getResourceArticlesByMachine(m, l, 32)
  const title = `${machineLabel[l][m]} ${t.titleSuffix}`
  const machineHref = `/${l}/machines/${m}`
  const recommendHref = `/${l}/recommend?machine=${encodeURIComponent(m)}`
  const contactHref = `/${l}/contact?machine=${encodeURIComponent(m)}`
  const pageUrl = `${SITE_URL}/${l}/resources/topic/${m}`
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
              { label: title, href: `/${l}/resources/topic/${m}` },
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
