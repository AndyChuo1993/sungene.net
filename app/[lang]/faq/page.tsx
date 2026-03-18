import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import { faqs, FAQCategory } from '@/data/faqs'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'
  
  const title = isChinese ? '常見問題｜SunGene' : 'FAQ | SunGene'
  const description = isChinese
    ? '彙整 SunGene 服務流程、收費模式、保密與合作條款等常見問題。'
    : 'Answers to common questions about SunGene: process, pricing, confidentiality, and engagement terms.'
  return {
    title,
    description,
    keywords: isChinese
      ? '外銷常見問題, 海外客戶開發, 服務流程, 收費模式'
      : 'faq, export lead generation, process, pricing, confidentiality',
    alternates: { 
      canonical: `${baseUrl}/${lang}/faq`, 
      languages: { 
        'zh-CN': 'https://sungene.net/cn/faq', 
        'zh-TW': 'https://sungenelite.com/zh/faq', 
        'en': 'https://sungene.net/en/faq', 
        'x-default': 'https://sungene.net/en/faq' 
      } 
    },
    openGraph: { 
      title, 
      description, 
      url: `${baseUrl}/${lang}/faq`,
      type: 'website' 
    },
    robots: { index: false, follow: true },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'

  const categories: { key: FAQCategory; label: { cn: string; zh: string; en: string } }[] = [
    { key: 'general', label: { cn: '一般問題', zh: '一般問題', en: 'General' } },
    { key: 'service', label: { cn: '服務相關', zh: '服務相關', en: 'Service' } },
    { key: 'process', label: { cn: '合作流程', zh: '合作流程', en: 'Process' } },
    { key: 'pricing', label: { cn: '價格與合約', zh: '價格與合約', en: 'Pricing' } },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: isChinese ? faq.question.zh : faq.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isChinese ? faq.answer.zh : faq.answer.en,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block bg-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'en' ? 'Support Center' : (lang === 'cn' ? '支援中心' : '支援中心')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'en' ? 'Frequently Asked Questions' : (lang === 'cn' ? '常見問題解答' : '常見問題解答')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {isChinese 
              ? '這裡彙整了客戶最常詢問的問題。如果您找不到答案，歡迎直接聯繫我們。' 
              : 'Here are answers to the most common questions. If you can\'t find what you need, feel free to contact us.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                {t(lang, 'nav_contact')}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-16">
                {categories.map((category) => {
                    const categoryFaqs = faqs.filter(f => f.category === category.key)
                    if (categoryFaqs.length === 0) return null

                    return (
                        <div key={category.key} id={category.key} className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                                {lang === 'cn' ? category.label.cn : isChinese ? category.label.zh : category.label.en}
                            </h2>
                            <div className="space-y-4">
                                {categoryFaqs.map((faq, index) => (
                                    <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-sm">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <span className="text-lg text-gray-900">
                                                {isChinese ? faq.question.zh : faq.question.en}
                                            </span>
                                            <span className="transition-transform group-open:rotate-180 text-gray-500">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="text-gray-600 p-6 pt-4 border-t border-gray-100 bg-white leading-relaxed">
                                            {isChinese ? faq.answer.zh : faq.answer.en}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Still have questions? */}
            <div className="mt-24 text-center bg-blue-50 rounded-2xl p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {lang === 'en' ? 'Still have questions?' : (lang === 'cn' ? '還有其他問題嗎？' : '還有其他問題嗎？')}
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    {isChinese 
                     ? '我們的顧問隨時準備為您解答。預約一次免費諮詢，讓我們深入了解您的需求。' 
                     : 'Our consultants are ready to help. Book a free consultation to discuss your needs in depth.'}
                </p>
                <Link href={`/${lang}/contact`} className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-700 transition">
                    {lang === 'en' ? 'Contact Us' : (lang === 'cn' ? '聯繫我們' : '聯繫我們')}
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}
