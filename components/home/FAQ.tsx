'use client'
import { useState } from 'react'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function FAQ({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is the minimum order quantity (MOQ)?', a: 'Our MOQ is 1 unit for most standard machines. We support both sample orders and bulk procurement for production line setups.' },
        { q: 'Can you customize machines to our specifications?', a: 'Yes. Our engineering team can customize dimensions, materials (SUS304/316L), output capacity, voltage (110V-480V), and automation level to match your production environment.' },
        { q: 'What countries do you export to?', a: 'We export to 50+ countries across Southeast Asia, Middle East, Africa, Europe, and the Americas. All machines come with CE certification and international shipping support.' },
        { q: 'Do you provide after-sales support?', a: 'Yes. We offer remote video installation guidance, operator training, 24/7 technical support, and spare parts supply with fast international shipping.' },
        { q: 'How long is the production lead time?', a: 'Standard machines: 15-30 days. Custom machines: 30-60 days. We provide factory test videos and photos before shipment for your confirmation.' },
        { q: 'Can I visit your factory?', a: 'Absolutely. We welcome factory visits to our production facilities in Taichung, Taiwan. We can arrange pickup from the airport and provide a full tour of our production lines.' },
      ]
    },
    cn: {
      kicker: '常见问题',
      title: '常见问题解答',
      items: [
        { q: '最低起订量（MOQ）是多少？', a: '大部分标准机型MOQ为1台。我们支持样品订单和批量采购。' },
        { q: '可以按我们的规格定制机器吗？', a: '可以。我们的工程团队可定制尺寸、材料（SUS304/316L）、产能、电压（110V-480V）和自动化水平。' },
        { q: '你们出口到哪些国家？', a: '我们出口到50多个国家，覆盖东南亚、中东、非洲、欧洲和美洲。所有机器都有CE认证和国际物流支持。' },
        { q: '提供售后支持吗？', a: '是的。我们提供远程视频安装指导、操作培训、24/7技术支持和备件快速国际物流。' },
        { q: '生产交期多长？', a: '标准机型：15-30天。定制机型：30-60天。发货前提供工厂测试视频和照片供确认。' },
        { q: '可以参观工厂吗？', a: '当然可以。欢迎来我们台中工厂参观。我们可以安排机场接送和产线全程参观。' },
      ]
    },
    zh: {
      kicker: '常見問題',
      title: '常見問題解答',
      items: [
        { q: '最低起訂量（MOQ）是多少？', a: '大部分標準機型MOQ為1台。我們支援樣品訂單和批量採購。' },
        { q: '可以按我們的規格客製機器嗎？', a: '可以。我們的工程團隊可客製尺寸、材料（SUS304/316L）、產能、電壓（110V-480V）和自動化水平。' },
        { q: '你們出口到哪些國家？', a: '我們出口到50多個國家，覆蓋東南亞、中東、非洲、歐洲和美洲。所有機器都有CE認證和國際物流支援。' },
        { q: '提供售後支援嗎？', a: '是的。我們提供遠端視訊安裝指導、操作培訓、24/7技術支援和備件快速國際物流。' },
        { q: '生產交期多長？', a: '標準機型：15-30天。客製機型：30-60天。發貨前提供工廠測試影片和照片供確認。' },
        { q: '可以參觀工廠嗎？', a: '當然可以。歡迎來我們台中工廠參觀。我們可以安排機場接送和產線全程參觀。' },
      ]
    },
    fr: {
      kicker: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        { q: 'Quelle est la quantité minimum de commande (MOQ) ?', a: 'Notre MOQ est de 1 unité pour la plupart des machines standard. Nous acceptons les commandes d\'échantillons et les achats en gros pour l\'équipement de lignes de production.' },
        { q: 'Pouvez-vous personnaliser les machines selon nos spécifications ?', a: 'Oui. Notre équipe d\'ingénierie peut personnaliser les dimensions, les matériaux (SUS304/316L), la capacité de production, la tension (110V-480V) et le niveau d\'automatisation selon votre environnement de production.' },
        { q: 'Vers quels pays exportez-vous ?', a: 'Nous exportons vers plus de 50 pays en Asie du Sud-Est, au Moyen-Orient, en Afrique, en Europe et dans les Amériques. Toutes les machines sont certifiées CE avec support logistique international.' },
        { q: 'Proposez-vous un service après-vente ?', a: 'Oui. Nous offrons une assistance à l\'installation par vidéo à distance, la formation des opérateurs, un support technique 24h/24 et 7j/7, et la fourniture de pièces détachées avec expédition internationale rapide.' },
        { q: 'Quel est le délai de fabrication ?', a: 'Machines standard : 15-30 jours. Machines sur mesure : 30-60 jours. Nous fournissons des vidéos et photos de tests usine avant expédition pour votre validation.' },
        { q: 'Puis-je visiter votre usine ?', a: 'Absolument. Nous accueillons les visites d\'usine dans nos installations de production à Taichung, Taïwan. Nous pouvons organiser le transfert depuis l\'aéroport et une visite complète de nos lignes de production.' },
      ]
    },
    es: {
      kicker: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuál es la cantidad mínima de pedido (MOQ)?', a: 'Nuestro MOQ es de 1 unidad para la mayoría de las máquinas estándar. Aceptamos pedidos de muestra y compras al por mayor para configuraciones de líneas de producción.' },
        { q: '¿Pueden personalizar las máquinas según nuestras especificaciones?', a: 'Sí. Nuestro equipo de ingeniería puede personalizar dimensiones, materiales (SUS304/316L), capacidad de producción, voltaje (110V-480V) y nivel de automatización según su entorno productivo.' },
        { q: '¿A qué países exportan?', a: 'Exportamos a más de 50 países en el Sudeste Asiático, Medio Oriente, África, Europa y las Américas. Todas las máquinas cuentan con certificación CE y soporte logístico internacional.' },
        { q: '¿Ofrecen soporte postventa?', a: 'Sí. Ofrecemos asistencia de instalación por video remoto, capacitación de operadores, soporte técnico 24/7 y suministro de repuestos con envío internacional rápido.' },
        { q: '¿Cuál es el tiempo de fabricación?', a: 'Máquinas estándar: 15-30 días. Máquinas personalizadas: 30-60 días. Proporcionamos videos y fotos de pruebas en fábrica antes del envío para su confirmación.' },
        { q: '¿Puedo visitar su fábrica?', a: 'Por supuesto. Recibimos visitas en nuestras instalaciones de producción en Taichung, Taiwán. Podemos organizar el traslado desde el aeropuerto y un recorrido completo por nuestras líneas de producción.' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200/60">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">{t.title}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200">
          {t.items.map((item: any, i: number) => (
            <AccordionItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base font-semibold text-gray-950 pr-4">{question}</span>
        <svg className={`h-5 w-5 shrink-0 text-gray-400 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-base leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  )
}
