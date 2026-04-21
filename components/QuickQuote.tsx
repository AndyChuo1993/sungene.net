'use client'
import { useState } from 'react'
import type { Lang } from '@/lib/i18n'
import { trackEvent, trackFormSubmitFail, trackFormSubmitSuccess } from '@/lib/analytics'

type Props = {
  lang: Lang
  /** Context: the machine slug, industry name, or market country — stamped into the submission. */
  context: string
  /** Source type to tag the inquiry in the CRM. */
  source?: 'machine' | 'market' | 'industry' | 'resource' | 'quote' | 'sourcing'
}

const labels: Record<
  Lang,
  {
    title: string
    subtitle: string
    name: string
    email: string
    whatsapp: string
    output: string
    outputPlaceholder: string
    country: string
    submit: string
    submitting: string
    successTitle: string
    successBody: string
    errorTitle: string
    errorBody: string
    privacy: string
  }
> = {
  en: {
    title: 'Get a sourcing assessment in 1 business day',
    subtitle: 'Fill in 5 fields. Our engineers provide a professional procurement evaluation matched to your technical needs.',
    name: 'Your name *',
    email: 'Work email *',
    whatsapp: 'WhatsApp or phone',
    output: 'Target output / fill size',
    outputPlaceholder: 'e.g. 500g bags at 60/min',
    country: 'Destination country *',
    submit: 'Get Assessment',
    submitting: 'Sending…',
    successTitle: 'Received — assessment in progress',
    successBody: 'Our engineering team will reply with a technical sourcing assessment within 1 business day.',
    errorTitle: 'Something went wrong',
    errorBody: 'Please email contact@sungene.net or use WhatsApp.',
    privacy: 'No spam. Your details are used for technical evaluation only.',
  },
  zh: {
    title: '1 個工作日取得採購評估',
    subtitle: '填寫 5 個欄位，台中工程團隊會依您的技術需求提供專業採購建議。',
    name: '姓名 *',
    email: '公司電郵 *',
    whatsapp: 'WhatsApp 或電話',
    output: '目標產速 / 包裝重量',
    outputPlaceholder: '例：500g 包，60 包/分鐘',
    country: '目的地國家 *',
    submit: '獲取採購評估與建議',
    submitting: '傳送中…',
    successTitle: '已收到評估需求',
    successBody: '台中工程團隊將於 1 個工作日內回覆技術採購評估。',
    errorTitle: '發生錯誤',
    errorBody: '請寄信至 contact@sungene.net 或使用 WhatsApp 聯絡。',
    privacy: '不會發送垃圾郵件，資料僅用於技術評估。',
  },
  cn: {
    title: '1 个工作日内获取采购评估',
    subtitle: '填写 5 个字段，台中工程团队会依您的技术需求提供专业采购建议。',
    name: '姓名 *',
    email: '公司邮箱 *',
    whatsapp: 'WhatsApp 或电话',
    output: '目标产速 / 包装重量',
    outputPlaceholder: '例：500g 包，60 包/分钟',
    country: '目的地国家 *',
    submit: '获取评估建议',
    submitting: '发送中…',
    successTitle: '已收到评估需求',
    successBody: '台中工程团队将于 1 个工作日内回复技术采购评估。',
    errorTitle: '发生错误',
    errorBody: '请邮件至 contact@sungene.net or use WhatsApp 联系。',
    privacy: '不会发送垃圾邮件，资料仅用于技术评估。',
  },
  fr: {
    title: 'Évaluation de sourcing sous 1 jour ouvré',
    subtitle: 'Remplissez 5 champs. Nos ingénieurs fournissent une évaluation d\'approvisionnement professionnelle adaptée à vos besoins techniques.',
    name: 'Votre nom *',
    email: 'E-mail professionnel *',
    whatsapp: 'WhatsApp ou téléphone',
    output: 'Cadence cible / format',
    outputPlaceholder: 'ex. sachets 500g à 60/min',
    country: 'Pays de destination *',
    submit: 'Obtenir une évaluation',
    submitting: 'Envoi…',
    successTitle: 'Demande reçue — évaluation en cours',
    successBody: 'Notre équipe à Taichung répondra avec une évaluation technique sous 1 jour ouvré.',
    errorTitle: "Une erreur s'est produite",
    errorBody: "Merci d'envoyer un e-mail à contact@sungene.net ou d'utiliser WhatsApp.",
    privacy: 'Pas de spam. Vos données servent uniquement à l\'évaluation technique.',
  },
  es: {
    title: 'Evaluación de abastecimiento en 1 día hábil',
    subtitle: 'Complete 5 campos. Nuestros ingenieros brindan una evaluación de adquisiciones profesional adaptada a sus necesidades técnicas.',
    name: 'Nombre *',
    email: 'Correo corporativo *',
    whatsapp: 'WhatsApp o teléfono',
    output: 'Velocidad objetivo / formato',
    outputPlaceholder: 'ej. bolsas 500g a 60/min',
    country: 'País de destino *',
    submit: 'Obtener evaluación',
    submitting: 'Enviando…',
    successTitle: 'Solicitud recibida — evaluación en curso',
    successBody: 'Nuestro equipo en Taichung responderá con una evaluación técnica en 1 día hábil.',
    errorTitle: 'Algo salió mal',
    errorBody: 'Envíe un correo a contact@sungene.net o use WhatsApp.',
    privacy: 'Sin spam. Sus datos solo se usan para evaluación técnica.',
  },
  pt: {
    title: 'Avaliação de sourcing em 1 dia útil',
    subtitle: 'Preencha 5 campos. Nossos engenheiros fornecem uma avaliação profissional de suprimentos adaptada às suas necessidades técnicas.',
    name: 'Seu nome *',
    email: 'E-mail corporativo *',
    whatsapp: 'WhatsApp ou telefone',
    output: 'Velocidade-alvo / formato',
    outputPlaceholder: 'ex. sacos 500g a 60/min',
    country: 'País de destino *',
    submit: 'Obter avaliação',
    submitting: 'Enviando…',
    successTitle: 'Pedido recebido — avaliação em andamento',
    successBody: 'Nossa equipe em Taichung retornará com uma avaliação técnica em 1 dia útil.',
    errorTitle: 'Algo deu errado',
    errorBody: 'Envie e-mail para contact@sungene.net ou use WhatsApp.',
    privacy: 'Sem spam. Seus dados são usados apenas para avaliação técnica.',
  },
  ko: {
    title: '1영업일 내 소싱 평가 받기',
    subtitle: '5개 항목만 입력하세요. 당사 엔지니어가 귀하의 기술적 요구에 맞춘 전문 구매 평가를 제공합니다.',
    name: '이름 *',
    email: '업무 이메일 *',
    whatsapp: 'WhatsApp 또는 전화',
    output: '목표 처리량 / 용량',
    outputPlaceholder: '예: 500g 파우치, 60개/분',
    country: '목적지 국가 *',
    submit: '평가 받기',
    submitting: '전송 중…',
    successTitle: '평가 요청 수신 완료',
    successBody: '엔지니어링팀이 1영업일 내에 기술 소싱 평가를 회신합니다.',
    errorTitle: '오류 발생',
    errorBody: 'contact@sungene.net으로 이메일 또는 WhatsApp을 이용해 주세요.',
    privacy: '스팸 없음. 데이터는 기술 평가 목적으로만 사용됩니다.',
  },
  ja: {
    title: '1営業日以内にソーシング評価を提示',
    subtitle: '5項目ご記入ください。当社のエンジニアがお客様の技術的ニーズに合わせた専門的な調達評価を提供します。',
    name: 'お名前 *',
    email: '会社メール *',
    whatsapp: 'WhatsAppまたは電話',
    output: '目標能力・仕様',
    outputPlaceholder: '例：500gパウチ、60袋/分',
    country: '仕向国 *',
    submit: '評価を依頼',
    submitting: '送信中…',
    successTitle: '評価依頼を受領しました',
    successBody: 'エンジニアチームが1営業日以内に技術的なソーシング評価を回答します。',
    errorTitle: 'エラーが発生しました',
    errorBody: 'contact@sungene.net までメール、またはWhatsAppをご利用ください。',
    privacy: 'スパムは送りません。技術評価の目的のみに使用します。',
  },
  ar: {
    title: 'احصل على تقييم توريد خلال يوم عمل واحد',
    subtitle: 'املأ 5 حقول فقط. يقدم مهندسونا تقييماً مهنياً للمشتريات يتوافق مع احتياجاتك التقنية.',
    name: 'الاسم *',
    email: 'البريد الإلكتروني للعمل *',
    whatsapp: 'WhatsApp أو هاتف',
    output: 'السرعة المستهدفة / الحجم',
    outputPlaceholder: 'مثال: أكياس 500غ بسرعة 60/دقيقة',
    country: 'دولة الوجهة *',
    submit: 'طلب تقييم',
    submitting: 'جارٍ الإرسال…',
    successTitle: 'تم استلام طلب التقييم',
    successBody: 'سيرد فريق الهندسة بتقييم تقني للتوريد خلال يوم عمل واحد.',
    errorTitle: 'حدث خطأ',
    errorBody: 'يرجى المراسلة على contact@sungene.net أو استخدام WhatsApp.',
    privacy: 'لا رسائل مزعجة. تُستخدم بياناتك للتقييم التقني فقط.',
  },
  th: {
    title: 'ขอรับการประเมินการจัดหาภายใน 1 วันทำการ',
    subtitle: 'กรอกเพียง 5 ช่อง ทีมวิศวกรของเราจะให้การประเมินการจัดซื้อระดับมืออาชีพที่ตรงกับความต้องการทางเทคนิคของคุณ',
    name: 'ชื่อของคุณ *',
    email: 'อีเมลบริษัท *',
    whatsapp: 'WhatsApp หรือโทรศัพท์',
    output: 'ความเร็วเป้าหมาย / ขนาดบรรจุ',
    outputPlaceholder: 'เช่น ถุง 500g ที่ 60/นาที',
    country: 'ประเทศปลายทาง *',
    submit: 'ขอรับการประเมิน',
    submitting: 'กำลังส่ง…',
    successTitle: 'รับคำขอการประเมินแล้ว',
    successBody: 'ทีมวิศวกรจะตอบกลับพร้อมการประเมินการจัดหาทางเทคนิคภายใน 1 วันทำการ',
    errorTitle: 'เกิดข้อผิดพลาด',
    errorBody: 'โปรดส่งอีเมลไปที่ contact@sungene.net หรือใช้ WhatsApp',
    privacy: 'ไม่มีสแปม ข้อมูลของคุณใช้เพื่อการประเมินทางเทคนิคเท่านั้น',
  },
  vi: {
    title: 'Nhận đánh giá nguồn cung trong 1 ngày làm việc',
    subtitle: 'Điền 5 trường. Các kỹ sư của chúng tôi sẽ cung cấp đánh giá mua hàng chuyên nghiệp phù hợp với nhu cầu kỹ thuật của bạn.',
    name: 'Tên của bạn *',
    email: 'Email công việc *',
    whatsapp: 'WhatsApp hoặc điện thoại',
    output: 'Tốc độ / dung tích mục tiêu',
    outputPlaceholder: 'VD: túi 500g @ 60/phút',
    country: 'Quốc gia đến *',
    submit: 'Nhận đánh giá',
    submitting: 'Đang gửi…',
    successTitle: 'Đã nhận yêu cầu đánh giá',
    successBody: 'Đội ngũ kỹ sư sẽ phản hồi với đánh giá nguồn cung kỹ thuật trong 1 ngày làm việc.',
    errorTitle: 'Có lỗi xảy ra',
    errorBody: 'Vui lòng email đến contact@sungene.net hoặc dùng WhatsApp.',
    privacy: 'Không spam. Dữ liệu chỉ dùng cho đánh giá kỹ thuật.',
  },
  de: {
    title: 'Sourcing-Bewertung innerhalb von 1 Werktag',
    subtitle: '5 Felder ausfüllen. Unsere Ingenieure erstellen eine professionelle Beschaffungsbewertung, die auf Ihre technischen Anforderungen zugeschnitten ist.',
    name: 'Ihr Name *',
    email: 'Geschäftliche E-Mail *',
    whatsapp: 'WhatsApp oder Telefon',
    output: 'Ziel-Leistung / Format',
    outputPlaceholder: 'z.B. 500g-Beutel bei 60/min',
    country: 'Bestimmungsland *',
    submit: 'Bewertung anfordern',
    submitting: 'Senden…',
    successTitle: 'Anfrage erhalten — Bewertung läuft',
    successBody: 'Unser Team in Taichung antwortet mit einer technischen Sourcing-Bewertung innerhalb von 1 Werktag.',
    errorTitle: 'Ein Fehler ist aufgetreten',
    errorBody: 'Bitte per E-Mail an contact@sungene.net oder WhatsApp.',
    privacy: 'Kein Spam. Daten werden nur zur technischen Bewertung verwendet.',
  },
}

export default function QuickQuote({ lang, context, source = 'machine' }: Props) {
  const t = labels[lang] || labels.en
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<'idle' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setResult('idle')
    const fd = new FormData(e.currentTarget)
    const data = {
      type: 'Contact' as const,
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('whatsapp') || ''),
      source,
      context,
      message: `QuickAssessment — source=${source} — context=${context}\nTarget output: ${fd.get('output')}\nDestination: ${fd.get('country')}\nPage: ${typeof window !== 'undefined' ? window.location.href : ''}`,
      lang,
    }
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json?.ok === false) throw new Error(json?.error || 'HTTP ' + res.status)
      setResult('success')
      trackEvent('quick_assessment_submit', { source, context })
      trackFormSubmitSuccess({ form_type: 'quick_quote', lang, ref_id: String(json?.id || '') })
      e.currentTarget.reset()
    } catch {
      setResult('error')
      trackFormSubmitFail({ form_type: 'quick_quote', lang, error_type: 'server' })
    } finally {
      setLoading(false)
    }
  }

  if (result === 'success') {
    return (
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent-50 to-white border-t border-gray-200/60">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="mt-5 text-xl font-bold text-gray-950 sm:text-2xl">{t.successTitle}</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">{t.successBody}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-accent-50 to-white border-t border-gray-200/60">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.title}</h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">{t.subtitle}</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <input type="hidden" name="source" value={source} />
          <input type="hidden" name="context" value={context} />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{t.name}</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent-500/30 focus:border-accent-500 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{t.email}</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent-500/30 focus:border-accent-500 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{t.whatsapp}</span>
              <input
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent-500/30 focus:border-accent-500 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{t.country}</span>
              <input
                name="country"
                type="text"
                required
                autoComplete="country-name"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent-500/30 focus:border-accent-500 focus:ring-2"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{t.output}</span>
            <input
              name="output"
              type="text"
              placeholder={t.outputPlaceholder}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent-500/30 focus:border-accent-500 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? t.submitting : t.submit}
          </button>
          <p className="text-center text-xs text-gray-500">{t.privacy}</p>
          {result === 'error' ? (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              <strong>{t.errorTitle}.</strong> {t.errorBody}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
