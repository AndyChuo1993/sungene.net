import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  en: 'Packaging Machinery | VFFS, HFFS, Pouch & Carton Packing | SunGene',
  cn: '包装机械 | 立式/卧式充填封口机 | SunGene', zh: '包裝機械 | 立式/臥式充填封口機 | SunGene',
  fr: 'Machines d\'emballage | VFFS, HFFS, sachets et cartons | SunGene',
  es: 'Maquinaria de empaque | VFFS, HFFS, bolsas y cartones | SunGene',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: titles[lang] || titles.en }
}

export default async function PackagingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización' }

  const content: Record<string, { title: string; p1: string; p2: string; subTitle: string; cons: string[]; cta: string; machines: string[] }> = {
    en: {
      title: 'Packaging Machinery',
      p1: 'We manufacture a complete range of packaging machines for powder, granule, liquid, solid, and mixed products. Our VFFS, HFFS, premade pouch, vacuum, shrink wrap, and carton packing machines serve food, pharmaceutical, chemical, and consumer goods industries worldwide.',
      p2: 'All machines are built with SUS304/316L stainless steel, CE certified, and available with custom voltage, output speed, and automation levels. We provide factory test videos before shipment.',
      subTitle: 'Machine Types Available',
      cons: ['Vertical Form-Fill-Seal (VFFS)', 'Horizontal Form-Fill-Seal (HFFS)', 'Premade Pouch Packing', 'Vacuum Packaging Machines', 'Shrink Wrapping Machines', 'Multi-Head Weighers', 'Carton/Case Packing', 'Labeling & Date Coding'],
      cta: 'Tell us your product and packaging format — we\'ll recommend the right machine.',
      machines: ['Powder Packaging', 'Granule Packaging', 'Liquid Packaging', 'Solid/Piece Packaging']
    },
    cn: {
      title: '包装机械',
      p1: '我们生产全系列包装机，适用于粉末、颗粒、液体、固体和混合产品。我们的立式充填封口机、卧式充填封口机、预制袋包装机、真空包装机、热缩包装机和装箱机服务于全球食品、制药、化工和消费品行业。',
      p2: '所有机器均采用SUS304/316L不锈钢制造，CE认证，可定制电压、产速和自动化水平。发货前提供工厂测试视频。',
      subTitle: '可用机型',
      cons: ['立式充填封口机 (VFFS)', '卧式充填封口机 (HFFS)', '预制袋包装机', '真空包装机', '热缩包装机', '多头秤', '装箱/纸箱包装', '贴标与打码'],
      cta: '告诉我们您的产品和包装形式——我们将推荐合适的机器。',
      machines: ['粉末包装', '颗粒包装', '液体包装', '固体/单件包装']
    },
    zh: {
      title: '包裝機械',
      p1: '我們生產全系列包裝機，適用於粉末、顆粒、液體、固體和混合產品。我們的立式充填封口機、臥式充填封口機、預製袋包裝機、真空包裝機、熱縮包裝機和裝箱機服務於全球食品、製藥、化工和消費品行業。',
      p2: '所有機器均採用SUS304/316L不鏽鋼製造，CE認證，可客製電壓、產速和自動化水平。發貨前提供工廠測試影片。',
      subTitle: '可用機型',
      cons: ['立式充填封口機 (VFFS)', '臥式充填封口機 (HFFS)', '預製袋包裝機', '真空包裝機', '熱縮包裝機', '多頭秤', '裝箱/紙箱包裝', '貼標與打碼'],
      cta: '告訴我們您的產品和包裝形式——我們將推薦合適的機器。',
      machines: ['粉末包裝', '顆粒包裝', '液體包裝', '固體/單件包裝']
    },
    fr: {
      title: 'Machines d\'emballage',
      p1: 'Nous fabriquons une gamme complète de machines de conditionnement pour produits en poudre, granulés, liquides, solides et mixtes. Nos machines VFFS, HFFS, sachets préformés, sous vide, rétractables et d\'encaissage servent les industries alimentaire, pharmaceutique, chimique et de biens de consommation dans le monde entier.',
      p2: 'Toutes les machines sont construites en acier inoxydable SUS304/316L, certifiées CE, avec tension, vitesse et niveau d\'automatisation personnalisables. Nous fournissons des vidéos de test usine avant expédition.',
      subTitle: 'Types de machines disponibles',
      cons: ['Ensacheuse verticale (VFFS)', 'Ensacheuse horizontale (HFFS)', 'Conditionnement en sachets préformés', 'Machines sous vide', 'Machines de rétraction', 'Peseuses multi-têtes', 'Encaissage/mise en carton', 'Étiquetage et datage'],
      cta: 'Décrivez-nous votre produit et format d\'emballage — nous vous recommanderons la machine adaptée.',
      machines: ['Conditionnement poudre', 'Conditionnement granulés', 'Conditionnement liquide', 'Conditionnement solide']
    },
    es: {
      title: 'Maquinaria de empaque',
      p1: 'Fabricamos una gama completa de máquinas de empaque para productos en polvo, granulados, líquidos, sólidos y mixtos. Nuestras máquinas VFFS, HFFS, bolsas premade, vacío, termoencogibles y encajadoras sirven a las industrias alimentaria, farmacéutica, química y de bienes de consumo en todo el mundo.',
      p2: 'Todas las máquinas están construidas con acero inoxidable SUS304/316L, certificadas CE, con voltaje, velocidad y nivel de automatización personalizables. Proporcionamos videos de prueba de fábrica antes del envío.',
      subTitle: 'Tipos de máquinas disponibles',
      cons: ['Empacadora vertical (VFFS)', 'Empacadora horizontal (HFFS)', 'Empaque en bolsas premade', 'Máquinas de vacío', 'Máquinas termoencogibles', 'Pesadoras multicabezal', 'Encajado/embalaje en cartón', 'Etiquetado y codificación'],
      cta: 'Cuéntenos sobre su producto y formato de empaque — le recomendaremos la máquina adecuada.',
      machines: ['Empaque de polvo', 'Empaque de granulados', 'Empaque de líquidos', 'Empaque de sólidos']
    }
  }
  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.p1} kicker={lang === 'en' ? 'PACKAGING EQUIPMENT' : lang === 'fr' ? 'ÉQUIPEMENT D\'EMBALLAGE' : lang === 'es' ? 'EQUIPO DE EMPAQUE' : '包裝設備'} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>

              {/* Machine type tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m, i) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>

              <div className="mt-8">
                <Image src="/machinery/hero-packaging.svg" alt="Packaging Machinery - VFFS Machine" width={600} height={400} className="rounded-xl" />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
