import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function CTASection({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Ready to Find the Right Machine?',
      desc: 'Tell us what you need to produce or pack — product type, target output, and budget range. Our engineering team will recommend the best machinery solution within 24 hours.',
      btn: 'Get a Free Quote Now',
      features: ['No minimum order required', 'Factory test video before shipment', 'Voltage customization available', 'International shipping arranged'],
    },
    cn: {
      title: '准备好找到合适的机器了吗？',
      desc: '告诉我们您需要生产或包装什么——产品类型、目标产能和预算范围。我们的工程团队将在24小时内为您推荐最佳机械方案。',
      btn: '立即获取免费报价',
      features: ['无最低起订量要求', '发货前提供工厂测试视频', '可定制电压', '安排国际物流'],
    },
    zh: {
      title: '準備好找到合適的機器了嗎？',
      desc: '告訴我們您需要生產或包裝什麼——產品類型、目標產能和預算範圍。我們的工程團隊將在24小時內為您推薦最佳機械方案。',
      btn: '立即取得免費報價',
      features: ['無最低起訂量要求', '發貨前提供工廠測試影片', '可客製電壓', '安排國際物流'],
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/banner/banner2.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-brand-950/80" />
      </div>

      <Container className="relative text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{t.desc}</p>
            <div className="mt-8">
              <ButtonLink href={`/${lang}/contact`} size="lg">
                {t.btn}
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-4">
            {t.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
                <svg className="h-6 w-6 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
