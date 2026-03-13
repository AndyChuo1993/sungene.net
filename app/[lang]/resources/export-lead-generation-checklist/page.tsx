import { Metadata } from 'next'
import Image from 'next/image'
import { getDictionary } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { Check, FileText, Target, Shield, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Export Lead Generation Checklist | 2025 Edition',
  description: 'Download the ultimate guide to finding and converting international buyers. A step-by-step checklist for B2B exporters.',
}

export default async function LeadMagnetPage({
  params: { lang },
}: {
  params: { lang: 'en' | 'zh' }
}) {
  const dict = await getDictionary(lang)

  const isZh = lang === 'zh'

  const content = {
    title: isZh ? '2025 外貿客戶開發終極檢查表' : '2025 Export Lead Generation Checklist',
    subtitle: isZh 
      ? '不再盲目開發。下載這份經過驗證的步驟清單，系統化地尋找並轉化高質量海外買家。' 
      : 'Stop guessing. Download this proven step-by-step checklist to systematically find and convert high-quality international buyers.',
    features: [
      {
        title: isZh ? '買家畫像定義' : 'Ideal Customer Profile',
        desc: isZh ? '精準定位目標客戶，避免無效開發' : 'Pinpoint your target audience to avoid wasted effort.'
      },
      {
        title: isZh ? '開發信範本' : 'Outreach Templates',
        desc: isZh ? '高回復率的 Cold Email 結構解析' : 'High-response Cold Email structures analyzed.'
      },
      {
        title: isZh ? '工具推薦' : 'Tool Stack',
        desc: isZh ? '20+ 個外貿必備的數據與自動化工具' : '20+ essential data and automation tools for exporters.'
      },
      {
        title: isZh ? '跟進策略' : 'Follow-up Strategy',
        desc: isZh ? '確保潛在客戶不流失的 5 步跟進法' : '5-step follow-up method to ensure no lead is left behind.'
      }
    ],
    faq: [
      {
        q: isZh ? '這份檢查表適合誰？' : 'Who is this checklist for?',
        a: isZh ? '適合外貿業務員、外貿經理以及希望拓展海外市場的 B2B 企業主。' : 'It is suitable for sales representatives, export managers, and B2B business owners looking to expand globally.'
      },
      {
        q: isZh ? '是免費的嗎？' : 'Is it free?',
        a: isZh ? '是的，這是我們提供的免費資源，旨在幫助您優化外貿流程。' : 'Yes, this is a free resource designed to help you optimize your export process.'
      }
    ]
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract%20world%20map%20dots%20connections%20blue%20background%20business%20technology&image_size=landscape_16_9')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                {isZh ? '免費下載資源' : 'Free Download Resource'}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                {content.subtitle}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-4">
                      <Check className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 blur-xl rounded-full opacity-50"></div>
              <DownloadForm dict={dict} lang={lang} resourceId="export-lead-gen-checklist-2025" />
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {isZh ? '為什麼你需要這份檢查表？' : 'Why You Need This Checklist'}
            </h2>
            <p className="text-lg text-slate-600">
              {isZh 
                ? '外貿開發不是運氣遊戲。成功的關鍵在於細節的執行。這份檢查表將幫助您：' 
                : 'Export development is not a game of luck. Success lies in execution details. This checklist will help you:'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isZh ? '提高轉化率' : 'Increase Conversion'}</h3>
              <p className="text-slate-600">
                {isZh 
                  ? '通過標準化的篩選流程，將精力集中在最有可能成交的客戶上。' 
                  : 'Focus your energy on high-potential clients through a standardized qualification process.'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isZh ? '減少錯誤' : 'Reduce Mistakes'}</h3>
              <p className="text-slate-600">
                {isZh 
                  ? '避免常見的開發信錯誤和文化禁忌，維護品牌專業形象。' 
                  : 'Avoid common outreach errors and cultural taboos to maintain a professional brand image.'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isZh ? '系統化流程' : 'Systematize Process'}</h3>
              <p className="text-slate-600">
                {isZh 
                  ? '將個人經驗轉化為團隊可複製的標準作業程序（SOP）。' 
                  : 'Turn personal experience into a Standard Operating Procedure (SOP) replicable by the team.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              {isZh ? '常見問題' : 'Frequently Asked Questions'}
            </h2>
          </div>
          
          <div className="space-y-6">
            {content.faq.map((item, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="flex items-start text-lg font-semibold text-slate-900 mb-2">
                  <HelpCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  {item.q}
                </h3>
                <p className="text-slate-600 ml-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
