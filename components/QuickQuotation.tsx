'use client'
import { useState } from 'react'
import type { Lang } from '@/lib/i18n'
import { trackEvent, trackFormSubmitFail, trackFormSubmitSuccess } from '@/lib/analytics'

type Props = {
  lang: Lang
  context: string
  source?: string
}

const labels: Partial<Record<
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
>> = {
  en: {
    title: 'Request a quotation in 1 business day',
    subtitle: '5 fields. Our team replies the same day with a buyer-facing quotation, lead time, and the price band you should expect.',
    name: 'Your name *',
    email: 'Work email *',
    whatsapp: 'WhatsApp or phone',
    output: 'Quantity per shipment + product category',
    outputPlaceholder: 'e.g. 5,000 pcs custom mailer boxes, 1×20ft container',
    country: 'Destination country *',
    submit: 'Get Quote',
    submitting: 'Sending…',
    successTitle: 'Received — preparing your quote',
    successBody: 'Our team will reply with a buyer-facing quotation and price band within 1 business day.',
    errorTitle: 'Something went wrong',
    errorBody: 'Please email contact@sungene.net or use WhatsApp.',
    privacy: 'No spam. Your details are used only to prepare your quotation.',
  },
  zh: {
    title: '1 個工作日取得報價',
    subtitle: '5 個欄位,當日回覆買方視角的報價、交期與預期價格區間。',
    name: '姓名 *',
    email: '公司電郵 *',
    whatsapp: 'WhatsApp 或電話',
    output: '單批數量 + 產品品類',
    outputPlaceholder: '例:5,000 件客製郵寄盒、1×20ft 貨櫃',
    country: '目的地國家 *',
    submit: '索取報價',
    submitting: '傳送中…',
    successTitle: '已收到報價需求',
    successBody: '台中工程團隊將於 1 個工作日內回覆報價與價格區間。',
    errorTitle: '發生錯誤',
    errorBody: '請寄信至 contact@sungene.net 或使用 WhatsApp 聯絡。',
    privacy: '不會發送垃圾郵件，資料僅用於準備報價。',
  },
  cn: {
    title: '1 个工作日内取得报价',
    subtitle: '5 个字段，团队当日回复买方视角的报价、交期与预期价格区间。',
    name: '姓名 *',
    email: '公司邮箱 *',
    whatsapp: 'WhatsApp 或电话',
    output: '单批数量 + 产品品类',
    outputPlaceholder: '例:5,000 件定制邮寄盒、1×20ft 货柜',
    country: '目的地国家 *',
    submit: '索取报价',
    submitting: '发送中…',
    successTitle: '已收到询价需求',
    successBody: '台中工程团队将于 1 个工作日内回复报价与价格区间。',
    errorTitle: '发生错误',
    errorBody: '请邮件至 contact@sungene.net or use WhatsApp 联系。',
    privacy: '不会发送垃圾邮件，资料仅用于准备报价。',
  },
  fr: {
    title: 'Demander un devis (1 jour ouvré)',
    subtitle: '5 champs. Notre équipe répond le jour même avec un devis, un délai et la fourchette de prix attendue.',
    name: 'Votre nom *',
    email: 'E-mail professionnel *',
    whatsapp: 'WhatsApp ou téléphone',
    output: 'Cadence cible / format',
    outputPlaceholder: 'ex. 5 000 boîtes mailer personnalisées, 1×20ft',
    country: 'Pays de destination *',
    submit: 'Demander un devis',
    submitting: 'Envoi…',
    successTitle: 'Demande reçue — préparation du devis',
    successBody: 'Notre équipe à Taichung répondra avec un devis et la fourchette de prix sous 1 jour ouvré.',
    errorTitle: "Une erreur s'est produite",
    errorBody: "Merci d'envoyer un e-mail à contact@sungene.net ou d'utiliser WhatsApp.",
    privacy: 'Pas de spam. Vos données servent uniquement à préparer votre devis.',
  },
  es: {
    title: 'Solicitar una cotización (1 día hábil)',
    subtitle: '5 campos. Nuestro equipo responde el mismo día con una cotización, el plazo y el rango de precios esperado.',
    name: 'Nombre *',
    email: 'Correo corporativo *',
    whatsapp: 'WhatsApp o teléfono',
    output: 'Velocidad objetivo / formato',
    outputPlaceholder: 'ej. 5.000 cajas mailer personalizadas, 1×20ft',
    country: 'País de destino *',
    submit: 'Solicitar cotización',
    submitting: 'Enviando…',
    successTitle: 'Solicitud recibida — preparando cotización',
    successBody: 'Nuestro equipo en Taichung responderá con una cotización y el rango de precios en 1 día hábil.',
    errorTitle: 'Algo salió mal',
    errorBody: 'Envíe un correo a contact@sungene.net o use WhatsApp.',
    privacy: 'Sin spam. Sus datos solo se usan para preparar su cotización.',
  },
}

export default function QuickQuotation({ lang, context, source = 'machine' }: Props) {
  const t = labels[lang] || labels.en!
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
      message: `QuickQuotation — source=${source} — context=${context}\nTarget output: ${fd.get('output')}\nDestination: ${fd.get('country')}\nPage: ${typeof window !== 'undefined' ? window.location.href : ''}`,
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
      trackFormSubmitSuccess({ form_type: 'quick_assessment', lang, ref_id: String(json?.id || '') })
      e.currentTarget.reset()
    } catch {
      setResult('error')
      trackFormSubmitFail({ form_type: 'quick_assessment', lang, error_type: 'server' })
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
          <p className="text-center text-xs text-gray-500">
            {t.privacy}{' '}
            <a href={`/${lang}/privacy`} className="underline hover:text-accent-600">
              {({ en: 'Privacy Policy', zh: '隱私權政策', cn: '隐私权政策', fr: 'politique de confidentialité', es: 'política de privacidad' } as Record<string, string>)[lang] || 'Privacy Policy'}
            </a>.
          </p>
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
