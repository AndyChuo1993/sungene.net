import type { Lang } from '@/lib/i18n'
import { ButtonLink } from '@/components/ui/Button'
import type { TopicMachine } from '@/lib/topicHubFaq'

const labels: Record<Lang, { guides: string; recommend: string; contact: string }> = {
  en: { guides: 'Buying guides', recommend: 'Get recommendation', contact: 'Request a quote' },
  zh: { guides: '採購指南', recommend: '取得推薦', contact: '詢價聯絡' },
  cn: { guides: '采购指南', recommend: '获取推荐', contact: '询价联系' },
  fr: { guides: 'Guides d’achat', recommend: 'Recommandation', contact: 'Demander un devis' },
  es: { guides: 'Guías de compra', recommend: 'Recomendación', contact: 'Solicitar cotización' },
  pt: { guides: 'Guias de compra', recommend: 'Recomendação', contact: 'Solicitar orçamento' },
  ko: { guides: '구매 가이드', recommend: '추천 받기', contact: '견적 문의' },
  ja: { guides: '購入ガイド', recommend: '推薦を受ける', contact: '見積依頼' },
  ar: { guides: 'أدلة الشراء', recommend: 'توصية', contact: 'طلب عرض سعر' },
  th: { guides: 'คู่มือการเลือกซื้อ', recommend: 'ขอคำแนะนำ', contact: 'ขอใบเสนอราคา' },
  vi: { guides: 'Hướng dẫn mua', recommend: 'Nhận tư vấn', contact: 'Yêu cầu báo giá' },
  de: { guides: 'Kaufratgeber', recommend: 'Empfehlung', contact: 'Angebot anfordern' },
}

export default function MachineQuickLinks({ lang, machine }: { lang: Lang; machine: TopicMachine }) {
  const l = labels[lang] || labels.en
  const guidesHref = `/${lang}/resources/topic/${machine}`
  const recommendHref = `/${lang}/recommend?machine=${encodeURIComponent(machine)}`
  const contactHref = `/${lang}/contact?machine=${encodeURIComponent(machine)}`

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <ButtonLink href={guidesHref} variant="secondary">{l.guides}</ButtonLink>
      <ButtonLink href={recommendHref}>{l.recommend}</ButtonLink>
      <ButtonLink href={contactHref} variant="secondary">{l.contact}</ButtonLink>
    </div>
  )
}

