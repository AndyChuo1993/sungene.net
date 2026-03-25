import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'TRUSTED MACHINERY SUPPLIER FROM TAIWAN',
      h1: 'Industrial Machinery for Packaging, Food Processing & Automation',
      sub: 'We manufacture and export high-performance packaging machines, food processing equipment, filling & sealing systems, and automated production lines to buyers worldwide.',
      btnQuote: 'Get a Free Quote',
      btnCatalog: 'View Machinery Catalog',
      stats: [
        { value: '500+', label: 'Machines Exported' },
        { value: '50+', label: 'Countries Served' },
        { value: '15+', label: 'Years Experience' },
        { value: '24/7', label: 'Technical Support' },
      ]
    },
    cn: {
      kicker: '来自台湾的值得信赖的机械供应商',
      h1: '包装、食品加工与自动化工业机械',
      sub: '我们制造并出口高性能包装机、食品加工设备、灌装封口系统及自动化生产线，面向全球买家。',
      btnQuote: '获取免费报价',
      btnCatalog: '查看机械目录',
      stats: [
        { value: '500+', label: '台设备出口' },
        { value: '50+', label: '个国家服务' },
        { value: '15+', label: '年行业经验' },
        { value: '24/7', label: '技术支持' },
      ]
    },
    zh: {
      kicker: '來自台灣的值得信賴的機械供應商',
      h1: '包裝、食品加工與自動化工業機械',
      sub: '我們製造並出口高性能包裝機、食品加工設備、灌裝封口系統及自動化生產線，面向全球買家。',
      btnQuote: '取得免費報價',
      btnCatalog: '查看機械目錄',
      stats: [
        { value: '500+', label: '台設備出口' },
        { value: '50+', label: '個國家服務' },
        { value: '15+', label: '年行業經驗' },
        { value: '24/7', label: '技術支援' },
      ]
    },
    fr: {
      kicker: 'FOURNISSEUR DE MACHINES DE CONFIANCE DEPUIS TAÏWAN',
      h1: 'Machines industrielles pour l\'emballage, l\'agroalimentaire et l\'automatisation',
      sub: 'Nous fabriquons et exportons des machines d\'emballage haute performance, des équipements de transformation alimentaire, des systèmes de remplissage et de scellage, ainsi que des lignes de production automatisées à destination d\'acheteurs du monde entier.',
      btnQuote: 'Devis gratuit',
      btnCatalog: 'Voir le catalogue machines',
      stats: [
        { value: '500+', label: 'Machines exportées' },
        { value: '50+', label: 'Pays desservis' },
        { value: '15+', label: 'Années d\'expérience' },
        { value: '24/7', label: 'Support technique' },
      ]
    },
    es: {
      kicker: 'PROVEEDOR DE MAQUINARIA DE CONFIANZA DESDE TAIWÁN',
      h1: 'Maquinaria industrial para empaque, procesamiento de alimentos y automatización',
      sub: 'Fabricamos y exportamos máquinas de empaque de alto rendimiento, equipos de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas para compradores de todo el mundo.',
      btnQuote: 'Cotización gratuita',
      btnCatalog: 'Ver catálogo de maquinaria',
      stats: [
        { value: '500+', label: 'Máquinas exportadas' },
        { value: '50+', label: 'Países atendidos' },
        { value: '15+', label: 'Años de experiencia' },
        { value: '24/7', label: 'Soporte técnico' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative overflow-hidden bg-brand-950 pb-0 pt-12 sm:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/10 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div className="py-8 lg:py-16">
            <span className="inline-block rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-400">
              {t.kicker}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/${lang}/contact`} size="lg">
                {t.btnQuote}
              </ButtonLink>
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
                {t.btnCatalog}
              </ButtonLink>
            </div>
          </div>

          {/* Hero image - machinery illustration */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src="/machinery/hero-main.svg"
                alt="SunGene Industrial Production Line - Packaging Machinery, Conveyor Systems, and Palletizer"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative -mb-px grid grid-cols-2 gap-px rounded-t-2xl bg-white/10 md:grid-cols-4">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="bg-brand-900/50 px-6 py-6 text-center backdrop-blur first:rounded-tl-2xl last:rounded-tr-2xl">
              <div className="text-3xl font-bold text-accent-400">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
