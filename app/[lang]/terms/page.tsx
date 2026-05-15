import { Metadata } from 'next'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ALL_LANGS.map((lang) => ({ lang }))
}

const META: Record<Lang, { title: string; desc: string }> = {
  en: { title: 'Terms of Service', desc: 'Terms governing sourcing inquiries, quotations, and trade through sungene.net.' },
  zh: { title: '服務條款', desc: '透過 sungene.net 進行採購詢問、報價與貿易的條款。' },
  cn: { title: '服务条款', desc: '通过 sungene.net 进行采购询问、报价与贸易的条款。' },
  fr: { title: 'Conditions d\'utilisation', desc: 'Conditions régissant les demandes de sourcing, devis et opérations commerciales via sungene.net.' },
  es: { title: 'Términos del servicio', desc: 'Términos que rigen las consultas de sourcing, cotizaciones y operaciones comerciales a través de sungene.net.' },
  pt: { title: 'Termos de Serviço', desc: 'Termos que regem consultas de sourcing e operações via sungene.net.' },
  ko: { title: '서비스 약관', desc: 'sungene.net을 통한 소싱 문의 및 거래 약관.' },
  ja: { title: '利用規約', desc: 'sungene.net を介したソーシング照会・取引の規約。' },
  ar: { title: 'شروط الخدمة', desc: 'الشروط التي تحكم استفسارات السورسينج والمعاملات عبر sungene.net.' },
  th: { title: 'ข้อกำหนดการใช้บริการ', desc: 'ข้อกำหนดสำหรับการสอบถามและธุรกรรมผ่าน sungene.net' },
  vi: { title: 'Điều khoản dịch vụ', desc: 'Điều khoản về yêu cầu sourcing và giao dịch qua sungene.net.' },
  de: { title: 'Nutzungsbedingungen', desc: 'Bedingungen für Sourcing-Anfragen und Geschäfte über sungene.net.' },
}

const CONTENT: Record<Lang, { sections: { h: string; p: string }[] }> = {
  en: {
    sections: [
      { h: 'Acceptance of terms', p: 'By submitting an inquiry, accepting a quotation, or placing an order through sungene.net or our team, you accept these terms. SunGene Co., LTD. is the contracting entity, registered in Taichung, Taiwan, with a registered office in Xiamen, Mainland China.' },
      { h: 'Nature of service', p: 'SunGene acts as a buy-and-resell trading principal. We purchase goods from vetted factories at FOB or EXW terms and resell to you with our margin shown separately on the quote. Underlying factory pricing is shared on request before order confirmation.' },
      { h: 'Quotations', p: 'Quotations are valid for 14 days from issuance unless otherwise stated. Prices are denominated in USD by default. Quotations include factory cost, our margin, agreed Incoterms (FOB / CIF / DDP), packaging spec, lead time, and payment terms.' },
      { h: 'Orders and payment', p: 'Standard payment terms are T/T 30% deposit upon order confirmation, 70% balance before shipment. L/C at sight is supported for orders above USD 30,000. Wire transfers are settled in USD; bank fees on the sender side. Mould tooling, samples, and custom-print plates are paid before production starts.' },
      { h: 'Lead time and shipping', p: 'Stock SKUs ship within 7–14 days. Custom-print packaging: 25–35 days. Private-label home/garden/beauty: 35–55 days. Lead times start from receipt of cleared deposit and approved artwork/samples. Sea freight transit varies 18–35 days depending on port.' },
      { h: 'Quality and inspection', p: 'Every order includes pre-shipment QC by SunGene staff with photo and video documentation. AQL-based sampling is applied. Buyer may request third-party inspection at buyer\'s cost. Disputes must be raised within 14 days of receipt with photo evidence and product retention; replacements or refunds for confirmed quality issues are handled case-by-case.' },
      { h: 'Intellectual property', p: 'Buyer retains all rights to artwork, brand marks, and product designs submitted. SunGene treats buyer artwork as confidential and does not share with third parties beyond the contracted factory. Tooling for custom moulds is retained at the factory under exclusive-use agreement for the buyer, unless shipped to buyer at additional cost.' },
      { h: 'Limitation of liability', p: 'SunGene\'s liability is limited to the value of the affected order. We are not liable for indirect or consequential damages including lost profits or business interruption. Force majeure events (port strike, natural disaster, government restriction) suspend obligations during the event.' },
      { h: 'Governing law', p: 'These terms are governed by the laws of Taiwan. Disputes are first attempted through good-faith negotiation, then through arbitration at the Chinese Arbitration Association, Taipei. Buyer remains entitled to mandatory consumer protections under buyer\'s local jurisdiction where applicable.' },
      { h: 'Contact', p: 'Contractual enquiries: contact@sungene.net. Postal: 201 Guangfu Rd., Central District, Taichung 40041, Taiwan.' },
    ],
  },
  zh: {
    sections: [
      { h: '條款接受', p: '當你透過 sungene.net 或我方團隊提交詢問、接受報價或下單,即代表你接受本條款。SunGene Co., LTD.(上瑾錸有限公司)為簽約主體,登記於台灣台中,並在中國大陸廈門設有辦公室。' },
      { h: '服務性質', p: 'SunGene 為買斷再轉售的貿易主體(principal)。我們以 FOB 或 EXW 向審核過的工廠採購,在報價單上把我方利潤與工廠價分開列出。底下的工廠報價在訂單確認前可應要求分享。' },
      { h: '報價', p: '報價自開立日起 14 日內有效,另有約定者除外。價格預設以 USD 計價。報價含工廠成本、我方利潤、約定的 Incoterms(FOB / CIF / DDP)、包裝規格、交期與付款條件。' },
      { h: '訂單與付款', p: '標準付款條件為 T/T 30% 訂金於訂單確認時、70% 尾款於出貨前。即期 L/C 適用於 USD 30,000 以上之訂單。電匯以 USD 結算,銀行手續費由匯款方負擔。模具費、樣品費、客製印版費於量產前支付。' },
      { h: '交期與出貨', p: '現貨 SKU 7–14 日出貨。客製印刷包裝 25–35 日。家居/園藝/美容貼牌 35–55 日。交期自訂金到帳且確認稿/樣品後起算。海運運期視港口 18–35 日。' },
      { h: '品質與驗貨', p: '每筆訂單均由 SunGene 團隊執行出貨前驗貨,含照片與影片紀錄,並依 AQL 抽樣。買方可自費要求第三方驗貨。糾紛須於收貨後 14 日內提出,附照片證據與留樣;確認的品質問題依個案處理替換或退款。' },
      { h: '智慧財產', p: '買方保有所提交稿件、品牌標識與產品設計的所有權利。SunGene 將買方稿件視為機密,除合作工廠外不對第三方分享。客製模具於工廠以「買方專用」協議保留,除非另付運費寄交買方。' },
      { h: '責任限制', p: 'SunGene 之責任以受影響訂單金額為上限。我方不對間接或衍生損害(包含營利損失、業務中斷)負責。不可抗力事件(港口罷工、天災、政府限制)期間義務暫停。' },
      { h: '準據法', p: '本條款受中華民國(台灣)法律規範。爭議先以善意協商方式解決,協商不成時提交中華仲裁協會台北分會仲裁。買方所在地之強制性消費者保護權利於適用時不受影響。' },
      { h: '聯絡', p: '合約事項詢問:contact@sungene.net。地址:40041 台中市中區光復路 201 號。' },
    ],
  },
  cn: {
    sections: [
      { h: '条款接受', p: '当你通过 sungene.net 或我方团队提交询问、接受报价或下单,即代表你接受本条款。SunGene Co., LTD.(上瑾錸有限公司)为签约主体,注册于台湾台中,并在中国大陆厦门设有办公室。' },
      { h: '服务性质', p: 'SunGene 为买断再转售的贸易主体。我们以 FOB 或 EXW 向核查过的工厂采购,在报价单上把我方利润与工厂价分开列出。底下的工厂报价在订单确认前可应要求分享。' },
      { h: '报价', p: '报价自开立日起 14 日内有效,另有约定者除外。价格默认以 USD 计价。报价含工厂成本、我方利润、约定的 Incoterms(FOB / CIF / DDP)、包装规格、交期与付款条件。' },
      { h: '订单与付款', p: '标准付款条件为 T/T 30% 订金于订单确认时、70% 尾款于发货前。即期 L/C 适用于 USD 30,000 以上之订单。电汇以 USD 结算,银行手续费由汇款方负担。模具费、样品费、定制印版费于量产前支付。' },
      { h: '交期与发货', p: '现货 SKU 7–14 日发货。定制印刷包装 25–35 日。家居/园艺/美容贴牌 35–55 日。交期自订金到账且确认稿/样品后起算。海运运期视港口 18–35 日。' },
      { h: '质量与验货', p: '每笔订单均由 SunGene 团队执行发货前验货,含照片与视频记录,并依 AQL 抽样。买方可自费要求第三方验货。纠纷须于收货后 14 日内提出,附照片证据与留样;确认的质量问题按个案处理替换或退款。' },
      { h: '知识产权', p: '买方保有所提交稿件、品牌标识与产品设计的所有权利。SunGene 将买方稿件视为机密,除合作工厂外不对第三方分享。定制模具于工厂以「买方专用」协议保留,除非另付运费寄交买方。' },
      { h: '责任限制', p: 'SunGene 之责任以受影响订单金额为上限。我方不对间接或衍生损害(包含营利损失、业务中断)负责。不可抗力事件(港口罢工、天灾、政府限制)期间义务暂停。' },
      { h: '准据法', p: '本条款受中华民国(台湾)法律规范。争议先以善意协商方式解决,协商不成时提交中华仲裁协会台北分会仲裁。买方所在地之强制性消费者保护权利于适用时不受影响。' },
      { h: '联系', p: '合约事项询问:contact@sungene.net。地址:40041 台中市中区光复路 201 号。' },
    ],
  },
  fr: {
    sections: [
      { h: 'Acceptation', p: 'En soumettant une demande, acceptant un devis ou passant commande via sungene.net ou notre équipe, vous acceptez ces conditions. SunGene Co., LTD. est l\'entité contractante, enregistrée à Taichung (Taïwan) avec un bureau à Xiamen (Chine continentale).' },
      { h: 'Nature du service', p: 'SunGene agit comme négociant achat-revente principal. Nous achetons FOB ou EXW à des usines vérifiées et revendons avec notre marge affichée séparément sur le devis. Le prix usine sous-jacent est partagé sur demande avant confirmation de commande.' },
      { h: 'Devis', p: 'Les devis sont valables 14 jours sauf mention contraire. Prix en USD par défaut. Le devis inclut coût usine, notre marge, Incoterms convenus (FOB / CIF / DDP), spec emballage, délai et conditions de paiement.' },
      { h: 'Commandes et paiement', p: 'Paiement standard : T/T 30 % d\'acompte à la confirmation, 70 % avant expédition. L/C à vue accepté au-dessus de 30 000 USD. Virements en USD, frais bancaires côté émetteur. Outillages, échantillons et plaques d\'impression personnalisées sont payés avant production.' },
      { h: 'Délais et expédition', p: 'SKU stock : 7–14 jours. Emballage imprimé personnalisé : 25–35 jours. Marque blanche maison/jardin/beauté : 35–55 jours. Délais à compter de l\'acompte reçu et de l\'approbation graphique. Transit maritime : 18–35 jours selon port.' },
      { h: 'Qualité et inspection', p: 'Chaque commande inclut un CQ avant expédition par le personnel SunGene avec documentation photo et vidéo. Échantillonnage AQL. Inspection tierce à la charge de l\'acheteur. Les litiges doivent être soulevés dans les 14 jours suivant la réception avec preuves photo et conservation produit ; remplacement ou remboursement selon le cas.' },
      { h: 'Propriété intellectuelle', p: 'L\'acheteur conserve tous les droits sur graphismes, marques et designs soumis. SunGene traite les graphismes comme confidentiels et ne les partage qu\'avec l\'usine contractée. Les outillages personnalisés sont conservés à l\'usine en usage exclusif acheteur, sauf expédition à l\'acheteur en supplément.' },
      { h: 'Limitation de responsabilité', p: 'La responsabilité de SunGene est limitée à la valeur de la commande concernée. Aucune responsabilité pour dommages indirects (perte de profits, interruption d\'activité). Cas de force majeure suspendent les obligations pendant l\'événement.' },
      { h: 'Droit applicable', p: 'Ces conditions sont régies par les lois de Taïwan. Litiges réglés en priorité par négociation, puis arbitrage à l\'Association d\'Arbitrage Chinoise, Taipei. Droits consommateurs locaux respectés le cas échéant.' },
      { h: 'Contact', p: 'Demandes contractuelles : contact@sungene.net. Adresse : 201 Guangfu Rd., Central District, Taichung 40041, Taïwan.' },
    ],
  },
  es: {
    sections: [
      { h: 'Aceptación', p: 'Al enviar una consulta, aceptar una cotización o realizar un pedido a través de sungene.net o nuestro equipo, usted acepta estos términos. SunGene Co., LTD. es la entidad contratante, registrada en Taichung (Taiwán) con oficina en Xiamen (China continental).' },
      { h: 'Naturaleza del servicio', p: 'SunGene actúa como comerciante de compra-reventa principal. Compramos FOB o EXW a fábricas verificadas y revendemos con nuestra margen mostrada por separado en la cotización. El precio de fábrica subyacente se comparte bajo solicitud antes de la confirmación.' },
      { h: 'Cotizaciones', p: 'Las cotizaciones son válidas 14 días salvo mención en contrario. Precios en USD por defecto. Incluyen costo de fábrica, margen, Incoterms acordados (FOB / CIF / DDP), spec de empaque, plazo y términos de pago.' },
      { h: 'Pedidos y pago', p: 'Pago estándar: T/T 30 % anticipo en confirmación, 70 % antes del envío. L/C a la vista para pedidos sobre USD 30,000. Transferencias en USD, comisiones bancarias del remitente. Moldes, muestras y placas de impresión se pagan antes de producción.' },
      { h: 'Plazos y envío', p: 'SKU en stock: 7–14 días. Empaque impreso personalizado: 25–35 días. Marca blanca hogar/jardín/belleza: 35–55 días. Plazos desde recepción de anticipo y aprobación gráfica. Tránsito marítimo 18–35 días según puerto.' },
      { h: 'Calidad e inspección', p: 'Cada pedido incluye QC previo al envío por personal SunGene con documentación foto y video. Muestreo AQL. Inspección de terceros a costo del comprador. Disputas dentro de 14 días tras recepción con evidencia foto y retención de producto; reemplazos/reembolsos caso por caso.' },
      { h: 'Propiedad intelectual', p: 'El comprador conserva todos los derechos sobre arte, marcas y diseños presentados. SunGene trata el arte como confidencial y no lo comparte fuera de la fábrica contratada. Los moldes personalizados se conservan en fábrica para uso exclusivo del comprador, salvo envío con costo adicional.' },
      { h: 'Limitación de responsabilidad', p: 'La responsabilidad de SunGene se limita al valor del pedido afectado. No responde por daños indirectos (lucro cesante, interrupción de negocio). Fuerza mayor suspende obligaciones durante el evento.' },
      { h: 'Ley aplicable', p: 'Términos regidos por las leyes de Taiwán. Disputas resueltas primero por negociación, luego por arbitraje en la Asociación China de Arbitraje, Taipéi. Derechos de consumidor locales respetados cuando aplique.' },
      { h: 'Contacto', p: 'Consultas contractuales: contact@sungene.net. Dirección: 201 Guangfu Rd., Central District, Taichung 40041, Taiwán.' },
    ],
  },
  pt: { sections: [{ h: 'Termos', p: 'Ao usar nossos serviços você aceita os termos. Detalhes em inglês disponíveis em /en/terms. Contato: contact@sungene.net.' }] },
  ko: { sections: [{ h: '약관', p: '서비스 이용 시 약관에 동의합니다. 영문 전체본 /en/terms. 문의: contact@sungene.net.' }] },
  ja: { sections: [{ h: '規約', p: 'サービス利用時に規約に同意するものとします。英語版 /en/terms。お問い合わせ: contact@sungene.net.' }] },
  ar: { sections: [{ h: 'الشروط', p: 'باستخدام خدماتنا فإنك توافق على الشروط. النسخة الكاملة بالإنجليزية /en/terms. اتصل: contact@sungene.net.' }] },
  th: { sections: [{ h: 'ข้อกำหนด', p: 'การใช้บริการของเราถือว่ายอมรับข้อกำหนด ฉบับเต็มภาษาอังกฤษ /en/terms ติดต่อ: contact@sungene.net' }] },
  vi: { sections: [{ h: 'Điều khoản', p: 'Sử dụng dịch vụ tức là chấp nhận điều khoản. Bản đầy đủ tiếng Anh /en/terms. Liên hệ: contact@sungene.net.' }] },
  de: { sections: [{ h: 'AGB', p: 'Mit der Nutzung unserer Dienste akzeptieren Sie die Bedingungen. Vollversion auf Englisch /en/terms. Kontakt: contact@sungene.net.' }] },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang) as Lang
  const m = META[l] ?? META.en
  return buildPageMetadata({
    lang: l,
    title: `${m.title} | SunGene`,
    description: m.desc,
    pathname: '/terms',
    type: 'website',
  })
}

export default async function TermsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const l = normalizeLang(lang) as Lang
  const m = META[l] ?? META.en
  const c = CONTENT[l] ?? CONTENT.en

  return (
    <>
      <PageHero kicker={l === 'zh' ? '法律' : l === 'cn' ? '法律' : l === 'fr' ? 'JURIDIQUE' : l === 'es' ? 'LEGAL' : 'LEGAL'} title={m.title} desc={m.desc} />
      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Breadcrumbs lang={l} items={[{ label: m.title, href: `/${l}/terms` }]} />
          <div className="mt-8 space-y-8">
            {c.sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-bold text-gray-950">{s.h}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-700">{s.p}</p>
              </div>
            ))}
            <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
              {l === 'zh' ? '最後更新' : l === 'cn' ? '最后更新' : l === 'fr' ? 'Dernière mise à jour' : l === 'es' ? 'Última actualización' : 'Last updated'}: 2026-05-15
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
