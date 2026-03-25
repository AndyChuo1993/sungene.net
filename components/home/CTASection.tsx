import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export default function CTASection({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Tell Us What You Need to Produce or Pack',
      desc: 'You do not need to know the exact machine name to start the conversation. Tell us your product, production target, packaging style, and budget range, and we will help you identify a more suitable machinery direction.',
      btn: 'Request a Recommendation'
    },
    cn: {
      title: '告诉我们您需要生产或包装什么',
      desc: '您不需要知道确切的机器名称即可开始讨论。只需告诉我们您的产品、生产目标、包装形式和预算范围，我们就会协助您找到更合适的机械方向。',
      btn: '获取设备推荐'
    },
    zh: {
      title: '告訴我們您需要生產或包裝什麼',
      desc: '您不需要知道確切的機器名稱即可開始討論。只需告訴我們您的產品、生產目標、包裝形式和預算範圍，我們就會協助您找到更合適的機械方向。',
      btn: '取得設備推薦'
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-24 bg-blue-600 text-white text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          {t.desc}
        </p>
        <Link href={`/${lang}/contact`} className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-sm hover:bg-orange-700 transition shadow-lg text-lg">
          {t.btn}
        </Link>
      </div>
    </section>
  )
}
