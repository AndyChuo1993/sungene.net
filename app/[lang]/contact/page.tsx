import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  const titles = {
    en: 'Get a Free Quote | Contact SunGene Machinery',
    cn: '获取免费报价 | 联系 SunGene 机械',
    zh: '取得免費報價 | 聯繫 SunGene 機械',
    fr: 'Devis gratuit | Contacter SunGene Machinery',
    es: 'Cotización gratuita | Contactar SunGene Machinery',
  }
  const descriptions = {
    en: 'Request a free quote for packaging machinery, food processing equipment, or any industrial machinery. Our engineers will respond within 24 hours with a customized recommendation.',
    cn: '请求包装机械、食品加工设备或任何工业机械的免费报价。我们的工程师将在24小时内提供定制建议。',
    zh: '請求包裝機械、食品加工設備或任何工業機械的免費報價。我們的工程師將在24小時內提供客製建議。',
    fr: 'Demandez un devis gratuit pour des machines d\'emballage, des équipements de transformation alimentaire ou toute machine industrielle. Nos ingénieurs vous répondront sous 24 heures avec une recommandation personnalisée.',
    es: 'Solicite una cotización gratuita para maquinaria de empaque, equipos de procesamiento de alimentos o cualquier maquinaria industrial. Nuestros ingenieros responderán en 24 horas con una recomendación personalizada.',
  }
  return { title: (titles as Record<string,string>)[l] || titles.en, description: (descriptions as Record<string,string>)[l] || descriptions.en }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'GET A FREE QUOTE',
      title: 'Tell Us What You Need',
      desc: 'Share your product type, target output, and requirements. Our engineering team will analyze your needs and provide a customized machinery recommendation within 24 hours.',
      infoTitle: 'What to Include',
      formList: [
        'What product do you process or pack?',
        'Target output per hour or per day',
        'Packaging format (bags, bottles, pouches, etc.)',
        'Automation level preference',
        'Destination country & voltage',
        'Budget range (optional)',
      ],
      contactTitle: 'Direct Contact',
      contacts: [
        { label: 'Email', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Location', value: 'Taichung, Taiwan' },
        { label: 'Hours', value: 'Mon-Fri 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Submit Inquiry',
      responseNote: 'Average response time: < 24 hours',
    },
    cn: {
      kicker: '获取免费报价',
      title: '告诉我们您的需求',
      desc: '分享您的产品类型、目标产能和要求。我们的工程团队将在24小时内分析您的需求并提供定制机械建议。',
      infoTitle: '请提供以下信息',
      formList: [
        '您加工或包装什么产品？',
        '每小时或每天的目标产量',
        '包装形式（袋装、瓶装、袋包等）',
        '自动化水平偏好',
        '目的国及电压要求',
        '预算范围（可选）',
      ],
      contactTitle: '直接联系',
      contacts: [
        { label: '邮箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台湾台中' },
        { label: '工作时间', value: '周一至周五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交询价',
      responseNote: '平均回复时间：< 24小时',
    },
    zh: {
      kicker: '取得免費報價',
      title: '告訴我們您的需求',
      desc: '分享您的產品類型、目標產能和要求。我們的工程團隊將在24小時內分析您的需求並提供客製機械建議。',
      infoTitle: '請提供以下資訊',
      formList: [
        '您加工或包裝什麼產品？',
        '每小時或每天的目標產量',
        '包裝形式（袋裝、瓶裝、袋包等）',
        '自動化水平偏好',
        '目的國及電壓要求',
        '預算範圍（可選）',
      ],
      contactTitle: '直接聯繫',
      contacts: [
        { label: '信箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台灣台中' },
        { label: '工作時間', value: '週一至週五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交詢價',
      responseNote: '平均回覆時間：< 24小時',
    },
    fr: {
      kicker: 'DEVIS GRATUIT',
      title: 'Décrivez-nous vos besoins',
      desc: 'Partagez votre type de produit, objectif de production et exigences. Notre équipe d\'ingénierie analysera vos besoins et vous fournira une recommandation machine personnalisée sous 24 heures.',
      infoTitle: 'Informations à fournir',
      formList: ['Quel produit transformez-vous ou emballez-vous ?', 'Production cible par heure ou par jour', 'Format d\'emballage (sachets, bouteilles, poches, etc.)', 'Préférence de niveau d\'automatisation', 'Pays de destination et tension', 'Fourchette budgétaire (optionnel)'],
      contactTitle: 'Contact direct',
      contacts: [{ label: 'Email', value: 'contact@sungene.net' }, { label: 'WhatsApp', value: '+886 4-3703-2705' }, { label: 'Adresse', value: 'Taichung, Taïwan' }, { label: 'Horaires', value: 'Lun-Ven 9h-18h (GMT+8)' }],
      btn: 'Envoyer la demande',
      responseNote: 'Temps de réponse moyen : < 24 heures',
    },
    es: {
      kicker: 'COTIZACIÓN GRATIS',
      title: 'Cuéntenos qué necesita',
      desc: 'Comparta su tipo de producto, producción objetivo y requisitos. Nuestro equipo de ingeniería analizará sus necesidades y le proporcionará una recomendación de maquinaria personalizada en 24 horas.',
      infoTitle: 'Información a incluir',
      formList: ['¿Qué producto procesa o empaca?', 'Producción objetivo por hora o por día', 'Formato de empaque (bolsas, botellas, pouches, etc.)', 'Preferencia de nivel de automatización', 'País de destino y voltaje', 'Rango de presupuesto (opcional)'],
      contactTitle: 'Contacto directo',
      contacts: [{ label: 'Email', value: 'contact@sungene.net' }, { label: 'WhatsApp', value: '+886 4-3703-2705' }, { label: 'Ubicación', value: 'Taichung, Taiwán' }, { label: 'Horario', value: 'Lun-Vie 9:00-18:00 (GMT+8)' }],
      btn: 'Enviar consulta',
      responseNote: 'Tiempo de respuesta promedio: < 24 horas',
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-8 pb-16">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{t.desc}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Left side - info */}
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.infoTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {t.formList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.contactTitle}</h2>
                <ul className="mt-5 space-y-4">
                  {t.contacts.map((c: { label: string; value: string }, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-20">{c.label}</span>
                      <span className="text-sm text-gray-900">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-xl bg-accent-50 p-4 text-center">
                <p className="text-sm font-semibold text-accent-700">{t.responseNote}</p>
              </div>
            </div>

            {/* Right side - form */}
            <Card className="p-8">
              <InquiryForm
                lang={lang}
                type="Contact"
                submitLabel={t.btn}
                fields={[
                  { name: 'name', label: ({ en: 'Your Name', cn: '联系人姓名', zh: '聯絡人姓名', fr: 'Votre nom', es: 'Su nombre' } as Record<string,string>)[lang] || 'Your Name', type: 'text', required: true, autoComplete: 'name' },
                  { name: 'email', label: ({ en: 'Email Address', cn: '邮箱地址', zh: '電子郵件', fr: 'Adresse e-mail', es: 'Correo electrónico' } as Record<string,string>)[lang] || 'Email Address', type: 'email', required: true, autoComplete: 'email' },
                  { name: 'company', label: ({ en: 'Company Name', cn: '公司名称', zh: '公司名稱', fr: 'Nom de l\'entreprise', es: 'Nombre de la empresa' } as Record<string,string>)[lang] || 'Company Name', type: 'text', autoComplete: 'organization' },
                  { name: 'product', label: ({ en: 'Product / Application', cn: '产品 / 应用', zh: '產品 / 應用', fr: 'Produit / Application', es: 'Producto / Aplicación' } as Record<string,string>)[lang] || 'Product / Application', type: 'text', required: true, placeholder: ({ en: 'e.g., Powder packaging, Liquid filling, Food processing...', fr: 'ex. Emballage poudre, Remplissage liquide, Transformation alimentaire...', es: 'ej. Empaque de polvo, Llenado de líquidos, Procesamiento de alimentos...' } as Record<string,string>)[lang] || '' },
                  { name: 'capacity', label: ({ en: 'Target Output', cn: '目标产能', zh: '目標產能', fr: 'Production cible', es: 'Producción objetivo' } as Record<string,string>)[lang] || 'Target Output', type: 'text', placeholder: ({ en: 'e.g., 30 bags/min, 1000 bottles/hour...', fr: 'ex. 30 sachets/min, 1000 bouteilles/heure...', es: 'ej. 30 bolsas/min, 1000 botellas/hora...' } as Record<string,string>)[lang] || '' },
                  { name: 'country', label: ({ en: 'Destination Country', cn: '使用国家', zh: '使用國家', fr: 'Pays de destination', es: 'País de destino' } as Record<string,string>)[lang] || 'Destination Country', type: 'text' },
                  { name: 'voltage', label: ({ en: 'Voltage (if known)', cn: '电压（如已知）', zh: '電壓（如已知）', fr: 'Tension (si connue)', es: 'Voltaje (si lo sabe)' } as Record<string,string>)[lang] || 'Voltage (if known)', type: 'text', placeholder: ({ en: 'e.g., 220V/380V/480V, 50Hz/60Hz', fr: 'ex. 220V/380V/480V, 50Hz/60Hz', es: 'ej. 220V/380V/480V, 50Hz/60Hz' } as Record<string,string>)[lang] || '' },
                  { name: 'budget', label: ({ en: 'Budget Range (USD)', cn: '预算范围（美元）', zh: '預算範圍（美元）', fr: 'Fourchette budgétaire (USD)', es: 'Rango de presupuesto (USD)' } as Record<string,string>)[lang] || 'Budget Range (USD)', type: 'text' },
                  { name: 'message', label: ({ en: 'Additional Details', cn: '补充说明', zh: '補充說明', fr: 'Détails supplémentaires', es: 'Detalles adicionales' } as Record<string,string>)[lang] || 'Additional Details', type: 'textarea', rows: 5, placeholder: ({ en: 'Tell us more about your requirements, current production setup, or any specific features you need...', fr: 'Dites-nous en plus sur vos besoins, votre configuration de production actuelle ou les fonctionnalités spécifiques recherchées...', es: 'Cuéntenos más sobre sus requisitos, configuración de producción actual o características específicas que necesita...' } as Record<string,string>)[lang] || '' },
                ]}
              />
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
