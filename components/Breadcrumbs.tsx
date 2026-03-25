import Link from 'next/link'
import { Lang } from '@/lib/i18n'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  lang: Lang
}

export default function Breadcrumbs({ items, lang }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}${item.href}` : `https://sungene.net${item.href}`
    }))
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href={`/${lang}`} className="transition hover:text-brand-900">
            {({en: 'Home', cn: '首页', zh: '首頁', fr: 'Accueil', es: 'Inicio', pt: 'Início', ko: '홈', ja: 'ホーム', ar: 'الرئيسية', th: 'หน้าแรก', vi: 'Trang chủ', de: 'Startseite' } as Record<string,string>)[lang] || 'Home'}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mx-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-950" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition hover:text-brand-900">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
