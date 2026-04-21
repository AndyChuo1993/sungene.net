'use client'
/**
 * Sticky contact floating action button rendered site-wide (mounted in
 * [lang]/layout.tsx). Gives every visitor a persistent, one-tap path to
 * WhatsApp, email, or phone without scrolling.
 *
 * Why this matters for inquiries:
 *  - Mobile B2B buyers want WhatsApp, not forms. This is the #1 conversion
 *    lever for B2B machinery.
 *  - Persistent visibility across all pages means the CTA is available at
 *    any scroll depth, including long spec sections where normal CTAs
 *    would have been scrolled past.
 *  - Pre-filled WhatsApp message includes the page URL so the sales team
 *    knows which machine/market/industry the buyer was looking at.
 */
import { useEffect, useState } from 'react'
import type { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { trackEvent } from '@/lib/analytics'

const PHONE_TW = '+886437032705'
const WHATSAPP_NUMBER = '8618144132078' // +86 18144132078, digits only for wa.me
const EMAIL = 'contact@sungene.net'

const labels: Record<
  Lang,
  {
    whatsapp: string
    email: string
    phone: string
    contactUs: string
    whatsappMsg: string
  }
> = {
  en: {
    whatsapp: 'Chat on WhatsApp',
    email: 'Email us',
    phone: 'Call Taiwan office',
    contactUs: 'Contact',
    whatsappMsg: "Hi SunGene, I'm interested in a sourcing assessment for your equipment. I'm browsing: ",
  },
  zh: {
    whatsapp: 'WhatsApp 聯絡',
    email: '電郵聯絡',
    phone: '台灣辦公室',
    contactUs: '聯絡我們',
    whatsappMsg: '您好 SunGene，我對貴司設備有興趣，希望能獲取採購評估與建議。目前瀏覽頁面：',
  },
  cn: {
    whatsapp: 'WhatsApp 联系',
    email: '邮件联系',
    phone: '台湾办公室',
    contactUs: '联系我们',
    whatsappMsg: '您好 SunGene，我对贵司设备有兴趣，希望能获取采购评估与建议。目前浏览页面：',
  },
  fr: {
    whatsapp: 'Chatter sur WhatsApp',
    email: 'Nous envoyer un e-mail',
    phone: 'Bureau Taïwan',
    contactUs: 'Contact',
    whatsappMsg: "Bonjour SunGene, je souhaite une évaluation de sourcing pour vos équipements. Page consultée : ",
  },
  es: {
    whatsapp: 'Chatear en WhatsApp',
    email: 'Enviar correo',
    phone: 'Oficina Taiwán',
    contactUs: 'Contacto',
    whatsappMsg: 'Hola SunGene, me interesa una evaluación de abastecimiento para sus equipos. Estoy viendo: ',
  },
  pt: {
    whatsapp: 'Falar no WhatsApp',
    email: 'Enviar e-mail',
    phone: 'Escritório Taiwan',
    contactUs: 'Contato',
    whatsappMsg: 'Olá SunGene, tenho interesse em uma avaliação de sourcing para seus equipamentos. Estou vendo: ',
  },
  ko: {
    whatsapp: 'WhatsApp 문의',
    email: '이메일 문의',
    phone: '대만 사무소',
    contactUs: '문의하기',
    whatsappMsg: '안녕하세요 SunGene, 귀사 장비에 대한 소싱 평가를 받고 싶습니다. 현재 보는 페이지: ',
  },
  ja: {
    whatsapp: 'WhatsAppで連絡',
    email: 'メールで連絡',
    phone: '台湾オフィス',
    contactUs: 'お問い合わせ',
    whatsappMsg: 'SunGene 様、貴社設備のソーシング評価に興味があります。閲覧中のページ：',
  },
  ar: {
    whatsapp: 'الدردشة عبر WhatsApp',
    email: 'راسلنا بالبريد',
    phone: 'مكتب تايوان',
    contactUs: 'تواصل معنا',
    whatsappMsg: 'مرحبًا SunGene، أنا مهتم بتقييم توريد لمعداتكم. الصفحة التي أتصفحها: ',
  },
  th: {
    whatsapp: 'แชทผ่าน WhatsApp',
    email: 'ส่งอีเมล',
    phone: 'สำนักงานไต้หวัน',
    contactUs: 'ติดต่อเรา',
    whatsappMsg: 'สวัสดี SunGene ผมสนใจรับการประเมินการจัดหาสำหรับอุปกรณ์ของคุณ กำลังดูหน้า: ',
  },
  vi: {
    whatsapp: 'Chat WhatsApp',
    email: 'Gửi email',
    phone: 'Văn phòng Đài Loan',
    contactUs: 'Liên hệ',
    whatsappMsg: 'Xin chào SunGene, tôi muốn nhận đánh giá nguồn cung cho thiết bị của quý công ty. Đang xem trang: ',
  },
  de: {
    whatsapp: 'WhatsApp-Chat',
    email: 'E-Mail senden',
    phone: 'Büro Taiwan',
    contactUs: 'Kontakt',
    whatsappMsg: 'Hallo SunGene, ich interessiere mich für eine Sourcing-Bewertung Ihrer Anlagen. Aktuelle Seite: ',
  },
}

export default function StickyContactFAB({ lang }: { lang: Lang }) {
  const [expanded, setExpanded] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const t = labels[lang] || labels.en

  useEffect(() => {
    if (typeof window === 'undefined') return
    const id = window.setTimeout(() => {
      setCurrentUrl(window.location.href)
    }, 0)
    return () => window.clearTimeout(id)
  }, [])

  const waMsg = encodeURIComponent(`${t.whatsappMsg}${currentUrl || SITE_URL}`)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`
  const mailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent('Sourcing assessment inquiry — SunGene')}&body=${encodeURIComponent(`Hi SunGene,\n\nI'm interested in your equipment and would like a technical sourcing assessment.\n\nCurrent page: ${currentUrl}\n\nBest regards,`)}`
  const telUrl = `tel:${PHONE_TW}`

  const trackClick = (channel: 'whatsapp' | 'email' | 'phone') => {
    trackEvent('contact_fab_click', { channel, lang })
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {expanded ? (
        <div className="flex flex-col items-end gap-2 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('whatsapp')}
            className="flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            {t.whatsapp}
          </a>
          <a
            href={mailUrl}
            onClick={() => trackClick('email')}
            className="flex items-center gap-3 rounded-xl bg-accent-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {t.email}
          </a>
          <a
            href={telUrl}
            onClick={() => trackClick('phone')}
            className="flex items-center gap-3 rounded-xl bg-brand-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {t.phone}
          </a>
        </div>
      ) : null}

      <button
        type="button"
        aria-label={t.contactUs}
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg ring-4 ring-white/60 transition hover:scale-105 hover:bg-accent-500 active:scale-95"
      >
        {expanded ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        )}
      </button>
    </div>
  )
}
