import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import { Handshake, Users, PieChart, Briefcase } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  const title = isZh ? '合作夥伴計劃｜SunGene' : 'Partners | SunGene'
  const description = isZh
    ? '加入 SunGene 合作夥伴生態系：顧問、海外在地代理、與市場研究機構皆可合作，共同為製造業創造價值。'
    : 'Join SunGene partners: consultants, overseas agents, and research firms collaborating to create value for manufacturers.'
  return {
    title,
    description,
    keywords: isZh
      ? '外銷顧問合作, 海外代理合作, 合作夥伴計劃, 市場研究合作'
      : 'partners, referral program, overseas agents, market research partners',
    alternates: { canonical: `/${lang}/partners`, languages: { zh: '/zh/partners', en: '/en/partners', 'x-default': '/en/partners' } },
    robots: { index: false, follow: true },
    openGraph: { title, description, type: 'website' },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const programs = [
    {
      title: { zh: '企業顧問合作', en: 'Consultants & Advisors' },
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      description: { zh: '適合管理顧問、行銷顧問或創業導師。將 SunGene 的外銷服務推薦給您的客戶，協助他們解決海外開發難題，並獲得優渥的分潤。', en: 'For management consultants and startup mentors. Refer SunGene services to help your clients solve export challenges and earn commission.' },
      benefits: { zh: '專屬推薦程式碼、高額佣金、優先技術支援', en: 'Referral codes, high commission, priority support' }
    },
    {
      title: { zh: '海外在地代理', en: 'Overseas Agents' },
      icon: <Users className="w-10 h-10 text-green-600" />,
      description: { zh: '若您位於歐美、日本或東南亞，並熟悉當地產業通路。我們誠摯邀請您成為我們的在地合作夥伴，協助台灣企業進行在地化商務對接。', en: 'If you are based in EU, US, Japan or SEA with local connections. Partner with us to help Taiwanese firms with local business matchmaking.' },
      benefits: { zh: '優質產品來源、代理簽約機會、商務考察對接', en: 'Quality product sourcing, agency contracts, business trip support' }
    },
    {
      title: { zh: '市場研究機構', en: 'Market Research Firms' },
      icon: <PieChart className="w-10 h-10 text-indigo-600" />,
      description: { zh: '我們尋求資料合作夥伴，共同發布產業白皮書與市場分析報告，提升雙方在 B2B 領域的專業影響力。', en: 'Seeking data partners to co-publish industry whitepapers and market reports, enhancing authority in the B2B sector.' },
      benefits: { zh: '資料互換、聯合行銷、品牌曝光', en: 'Data exchange, co-marketing, brand exposure' }
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block bg-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '合作夥伴計劃' : 'Partner Program'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '攜手共創外銷新生態' : 'Build the Future of Global Trade Together'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '我們相信 1+1 > 2。加入 SunGene 生態系，為您的客戶提供更完整的全球化解決方案。' 
              : 'We believe in synergy. Join the SunGene ecosystem to provide comprehensive global solutions for your clients.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/contact?type=partner`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                {lang === 'zh' ? '申請加入' : 'Apply Now'}
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-12">
                {programs.map((program, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-6 bg-gray-50 p-4 rounded-full inline-block">
                            {program.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {lang === 'zh' ? program.title.zh : program.title.en}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {lang === 'zh' ? program.description.zh : program.description.en}
                        </p>
                        <div className="border-t border-gray-100 pt-6">
                            <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                {lang === 'zh' ? '合作優勢' : 'Benefits'}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {lang === 'zh' ? program.benefits.zh : program.benefits.en}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
            <Handshake className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {lang === 'zh' ? '準備好開始合作了嗎？' : 'Ready to Partner?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
                {lang === 'zh' 
                 ? '填寫合作申請表，我們的商務開發團隊將在 24 小時內與您聯繫。' 
                 : 'Fill out the application form, and our business development team will contact you within 24 hours.'}
            </p>
            <Link href={`/${lang}/contact?type=partner`} className="inline-block bg-purple-600 text-white font-bold py-4 px-10 rounded-sm hover:bg-purple-700 transition">
                {lang === 'zh' ? '聯繫商務團隊' : 'Contact Partnership Team'}
            </Link>
        </div>
      </section>
    </main>
  )
}
