'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Choice = 'granted' | 'denied'

const STORAGE_KEY = 'cookie-consent'
const REOPEN_EVENT = 'open-cookie-settings'

const COPY: Record<string, {
  title: string
  body: string
  accept: string
  decline: string
  privacy: string
  privacyLink: string
}> = {
  en: {
    title: 'We use analytics cookies',
    body: 'We use Google Analytics to understand which pages help buyers and to improve them. No personal information is sent. You can change your choice anytime in the footer.',
    accept: 'Accept analytics',
    decline: 'Decline',
    privacy: 'Privacy policy',
    privacyLink: '/en/privacy',
  },
  zh: {
    title: '我們使用分析 Cookie',
    body: '我們用 Google Analytics 了解買家最常看哪些頁面、藉此改善網站。我們不會傳送任何可辨識個人的資訊。您可隨時在頁尾改變選擇。',
    accept: '接受分析 Cookie',
    decline: '拒絕',
    privacy: '隱私權政策',
    privacyLink: '/zh/privacy',
  },
  cn: {
    title: '我们使用分析 Cookie',
    body: '我们用 Google Analytics 了解买家最常看哪些页面、藉此改进网站。不会传送任何可识别个人的信息。您可随时在页脚改变选择。',
    accept: '接受分析 Cookie',
    decline: '拒绝',
    privacy: '隐私政策',
    privacyLink: '/cn/privacy',
  },
  fr: {
    title: 'Nous utilisons des cookies analytiques',
    body: "Nous utilisons Google Analytics pour comprendre quelles pages aident les acheteurs et les améliorer. Aucune information personnelle n'est envoyée. Vous pouvez modifier votre choix à tout moment dans le pied de page.",
    accept: 'Accepter',
    decline: 'Refuser',
    privacy: 'Politique de confidentialité',
    privacyLink: '/fr/privacy',
  },
  es: {
    title: 'Usamos cookies analíticas',
    body: 'Usamos Google Analytics para entender qué páginas ayudan a los compradores y mejorarlas. No se envía información personal. Puede cambiar su elección en cualquier momento en el pie de página.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    privacy: 'Política de privacidad',
    privacyLink: '/es/privacy',
  },
}

function pickCopy(lang: string) {
  return COPY[lang] || COPY.en
}

function pushConsent(choice: Choice) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  if (!w.dataLayer) w.dataLayer = []
  if (typeof w.gtag !== 'function') {
    w.gtag = function gtag() {
      ;(w.dataLayer as unknown[]).push(arguments)
    } as never
  }
  w.gtag('consent', 'update', {
    analytics_storage: choice,
  })
}

export default function CookieBanner({ lang }: { lang: string }) {
  const [visible, setVisible] = useState(false)
  const copy = pickCopy(lang)

  useEffect(() => {
    try {
      const prior = localStorage.getItem(STORAGE_KEY)
      if (!prior) setVisible(true)
    } catch {
      setVisible(true)
    }
    const reopen = () => setVisible(true)
    window.addEventListener(REOPEN_EVENT, reopen)
    return () => window.removeEventListener(REOPEN_EVENT, reopen)
  }, [])

  const choose = (choice: Choice) => {
    try { localStorage.setItem(STORAGE_KEY, choice) } catch {}
    pushConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={copy.title}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-start sm:gap-6 sm:px-6">
        <div className="flex-1 text-sm leading-relaxed text-gray-700">
          <p className="mb-1 font-semibold text-gray-900">{copy.title}</p>
          <p>
            {copy.body}{' '}
            <Link href={copy.privacyLink} className="underline hover:text-brand-600">
              {copy.privacy}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            {copy.decline}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-lg bg-brand-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
