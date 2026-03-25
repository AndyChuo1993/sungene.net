'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const switchLang = (targetLang: string) => {
    if (!pathname) return
    const segments = pathname.split('/').filter(Boolean)
    // segments[0] is usually lang (e.g. 'en', 'zh', 'cn')
    // But pathname starts with / so split gives ['', 'en', ...]
    // Let's use robust logic.
    
    // Check if first segment is a known lang
    const knownLangs = ['en', 'zh', 'cn']
    let newPath = pathname
    if (knownLangs.includes(segments[0])) {
      segments[0] = targetLang
      newPath = '/' + segments.join('/')
    } else {
      // Maybe no lang prefix? (should not happen in this app structure)
      newPath = `/${targetLang}${pathname}`
    }

    const query = searchParams?.toString()
    router.push(query ? `${newPath}?${query}` : newPath)
  }

  return (
    <div className="flex gap-3 text-sm font-medium text-gray-600">
      <button 
        onClick={() => switchLang('en')}
        className={`transition hover:text-brand-950 ${lang === 'en' ? 'text-brand-950 font-semibold' : ''}`}
      >
        英
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => switchLang('zh')}
        className={`transition hover:text-brand-950 ${lang === 'zh' ? 'text-brand-950 font-semibold' : ''}`}
      >
        繁
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => switchLang('cn')}
        className={`transition hover:text-brand-950 ${lang === 'cn' ? 'text-brand-950 font-semibold' : ''}`}
      >
        简
      </button>
    </div>
  )
}
