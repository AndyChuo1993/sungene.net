import type { Lang } from '@/lib/i18n'
import { ButtonLink } from '@/components/ui/Button'
import type { TopicMachine } from '@/lib/topicHubFaq'

const labels: Record<Lang, { guides: string; recommend: string; contact: string }> = {
  en: { guides: 'Configuration guides', recommend: 'Get assessment', contact: 'Request assessment' },
  zh: { guides: '配置指南', recommend: '取得評估', contact: '申請評估' },
  cn: { guides: '配置指南', recommend: '获取评估', contact: '申请评估' },
  fr: { guides: 'Guides de configuration', recommend: 'Obtenir évaluation', contact: 'Demander une évaluation' },
  es: { guides: 'Guías de configuración', recommend: 'Obtener evaluación', contact: 'Solicitar evaluación' },
  pt: { guides: 'Guias de configuração', recommend: 'Obter avaliação', contact: 'Solicitar avaliação' },
  ko: { guides: '구성 가이드', recommend: '평가 받기', contact: '평가 요청' },
  ja: { guides: '構成ガイド', recommend: '評価を受ける', contact: '評価を依頼' },
  ar: { guides: 'أدلة التهيئة', recommend: 'احصل على تقييم', contact: 'اطلب تقييمًا' },
  th: { guides: 'คู่มือการกำหนดค่า', recommend: 'รับการประเมิน', contact: 'ขอการประเมิน' },
  vi: { guides: 'Hướng dẫn cấu hình', recommend: 'Nhận đánh giá', contact: 'Yêu cầu đánh giá' },
  de: { guides: 'Konfigurationsleitfäden', recommend: 'Bewertung erhalten', contact: 'Bewertung anfordern' },
}

export default function MachineQuickLinks({ lang, machine }: { lang: Lang; machine: TopicMachine }) {
  const l = labels[lang] || labels.en
  const guidesHref =
    ({
      'pouch-packing-machine': `/${lang}/resources/route/pouch-packaging`,
      'powder-filling-machine': `/${lang}/resources/route/powder-dosing`,
      'liquid-filling-machine': `/${lang}/resources/route/liquid-filling`,
      'snack-processing-line': `/${lang}/resources/route/food-processing-line`,
      'conveyor-system': `/${lang}/resources/route/conveying-automation`,
    } as Record<TopicMachine, string>)[machine]
  const recommendHref = `/${lang}/assessment`
  const contactHref = `/${lang}/contact`

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <ButtonLink href={guidesHref} variant="secondary">{l.guides}</ButtonLink>
      <ButtonLink href={recommendHref}>{l.recommend}</ButtonLink>
      <ButtonLink href={contactHref} variant="secondary">{l.contact}</ButtonLink>
    </div>
  )
}
