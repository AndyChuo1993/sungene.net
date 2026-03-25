import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'cn') return { title: '提交询价｜SunGene' }
  if (lang === 'zh') return { title: '提交詢價｜SunGene' }
  return { title: 'Send an Inquiry | SunGene' }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'Tell Us About Your Machinery Requirement',
      desc: 'You do not need to know the exact machine model before contacting us. The more helpful starting point is your product, production target, packaging style, automation expectation, and destination market. Based on that, we can help suggest a more suitable machinery direction.',
      formDesc: 'Please share any of the following if available:',
      formList: [
        'What product do you process or pack?',
        'What output do you need per hour or per day?',
        'What packaging format or production result do you want?',
        'Do you prefer semi-automatic or fully automatic?',
        'Which country will the machine be used in?',
        'Do you have voltage requirements?',
        'What is your expected budget range?',
        'Do you need a single machine or a broader solution?'
      ],
      btn: 'Submit Inquiry',
      footer: 'If your project is still in an early discussion stage, that is fine. A clear application description is often enough to begin.'
    },
    cn: {
      title: '告诉我们您的机械需求',
      desc: '在联系我们之前，您不需要知道确切的机器型号。更有帮助的起点是您的产品、生产目标、包装形式、自动化预期和目标市场。基于这些，我们可以协助建议更合适的机械方向。',
      formDesc: '如果可以，请分享以下信息：',
      formList: [
        '您加工或包装什么产品？',
        '您每小时或每天需要多少产量？',
        '您希望达到什么包装格式或生产结果？',
        '您倾向半自动还是全自动？',
        '机器将在哪个国家使用？',
        '您有电压要求吗？',
        '您的预期预算范围是多少？',
        '您需要单台机器还是更广泛的解决方案？'
      ],
      btn: '提交询价',
      footer: '如果您的项目仍处于早期讨论阶段，没关系。清晰的应用场景描述通常就足以开始。'
    },
    zh: {
      title: '告訴我們您的機械需求',
      desc: '在聯絡我們之前，您不需要知道確切的機器型號。更有幫助的起點是您的產品、生產目標、包裝形式、自動化預期和目標市場。基於這些，我們可以協助建議更合適的機械方向。',
      formDesc: '如果可以，請分享以下資訊：',
      formList: [
        '您加工或包裝什麼產品？',
        '您每小時或每天需要多少產量？',
        '您希望達到什麼包裝格式或生產結果？',
        '您傾向半自動還是全自動？',
        '機器將在哪個國家使用？',
        '您有電壓要求嗎？',
        '您的預期預算範圍是多少？',
        '您需要單臺機器還是更廣泛的解決方案？'
      ],
      btn: '提交詢價',
      footer: '如果您的專案仍處於早期討論階段，沒關係。清晰的應用場景描述通常就足以開始。'
    }
  }

  const t = content[lang] || content['en']

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">{t.desc}</p>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t.formDesc}</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
            {t.formList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <InquiryForm
            lang={lang}
            type="Contact"
            submitLabel={t.btn}
            fields={[
              { name: 'name', label: lang === 'en' ? 'Name' : (lang === 'cn' ? '联系人姓名' : '聯絡人姓名'), type: 'text', required: true, autoComplete: 'name' },
              { name: 'email', label: lang === 'en' ? 'Email' : (lang === 'cn' ? '邮箱' : '電子郵件'), type: 'email', required: true, autoComplete: 'email' },
              { name: 'product', label: lang === 'en' ? 'Product / Application' : (lang === 'cn' ? '产品 / 应用' : '產品 / 應用'), type: 'text', required: true },
              { name: 'capacity', label: lang === 'en' ? 'Target Output' : (lang === 'cn' ? '目标产能' : '目標產能'), type: 'text' },
              { name: 'packaging', label: lang === 'en' ? 'Packaging Format / Result' : (lang === 'cn' ? '包装格式 / 结果' : '包裝格式 / 結果'), type: 'text' },
              { name: 'automation', label: lang === 'en' ? 'Automation Preference' : (lang === 'cn' ? '自动化偏好' : '自動化偏好'), type: 'text' },
              { name: 'country', label: lang === 'en' ? 'Destination Country' : (lang === 'cn' ? '使用国家' : '使用國家'), type: 'text' },
              { name: 'voltage', label: lang === 'en' ? 'Voltage Requirement' : (lang === 'cn' ? '电压要求' : '電壓要求'), type: 'text' },
              { name: 'budget', label: lang === 'en' ? 'Budget Range' : (lang === 'cn' ? '预算范围' : '預算範圍'), type: 'text' },
              { name: 'scope', label: lang === 'en' ? 'Project Scope' : (lang === 'cn' ? '需求范围' : '需求範圍'), type: 'text' },
              { name: 'message', label: lang === 'en' ? 'Notes' : (lang === 'cn' ? '补充说明' : '補充說明'), type: 'textarea', rows: 6 },
            ]}
          />
          <p className="mt-6 text-sm text-gray-500 text-center">{t.footer}</p>
        </div>
      </div>
    </div>
  )
}
