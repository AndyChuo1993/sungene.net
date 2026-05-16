'use client'

const LABEL: Record<string, string> = {
  en: 'Cookie settings',
  zh: 'Cookie 設定',
  cn: 'Cookie 设置',
  fr: 'Paramètres cookies',
  es: 'Configuración de cookies',
}

export default function CookieSettingsLink({ lang }: { lang: string }) {
  const label = LABEL[lang] || LABEL.en
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('open-cookie-settings'))
        }
      }}
      className="text-xs text-gray-500 transition-colors hover:text-gray-300"
    >
      {label}
    </button>
  )
}
