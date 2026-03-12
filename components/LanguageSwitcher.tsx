'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const router = useRouter()

  const toggle = () => {
    if (!pathname) return
    const segments = pathname.split('/')
    const currentLang = segments[1]
    const targetLang = currentLang === 'zh' ? 'en' : 'zh'
    
    // Replace the language segment
    segments[1] = targetLang
    const newPath = segments.join('/')
    
    router.push(newPath)
  }

  return (
    <button onClick={toggle} className="text-gray-600 hover:text-blue-900 font-medium text-sm transition" aria-label="language switch">
      {lang === 'zh' ? 'EN' : '繁中'}
    </button>
  )
}
