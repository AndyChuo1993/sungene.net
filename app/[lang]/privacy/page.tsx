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
  en: { title: 'Privacy Policy', desc: 'How SunGene collects, uses, and protects your data when you make sourcing inquiries.' },
  zh: { title: '隱私權政策', desc: 'SunGene 在你提出採購詢問時如何收集、使用與保護你的資料。' },
  cn: { title: '隐私权政策', desc: 'SunGene 在你提出采购询问时如何收集、使用与保护你的数据。' },
  fr: { title: 'Politique de confidentialité', desc: 'Comment SunGene collecte, utilise et protège vos données lors de vos demandes de sourcing.' },
  es: { title: 'Política de privacidad', desc: 'Cómo SunGene recopila, usa y protege sus datos en las consultas de sourcing.' },
  pt: { title: 'Política de Privacidade', desc: 'Como a SunGene coleta, usa e protege seus dados.' },
  ko: { title: '개인정보 처리방침', desc: 'SunGene이 개인정보를 수집·사용·보호하는 방식.' },
  ja: { title: 'プライバシーポリシー', desc: 'SunGene の個人情報の取扱いについて。' },
  ar: { title: 'سياسة الخصوصية', desc: 'كيف تجمع SunGene بياناتك وتستخدمها وتحميها.' },
  th: { title: 'นโยบายความเป็นส่วนตัว', desc: 'SunGene จัดการข้อมูลของคุณอย่างไร' },
  vi: { title: 'Chính sách quyền riêng tư', desc: 'Cách SunGene thu thập và bảo vệ dữ liệu của bạn.' },
  de: { title: 'Datenschutzerklärung', desc: 'Wie SunGene Ihre Daten erfasst, verwendet und schützt.' },
}

const CONTENT: Record<Lang, { sections: { h: string; p: string }[] }> = {
  en: {
    sections: [
      { h: 'Who we are', p: 'SunGene Co., LTD. is a Taiwan-registered trading company with offices in Taichung, Taiwan and Xiamen, Mainland China. We operate sungene.net as a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging (mooncake boxes, brand gift boxes, retail packaging); other corporate gift categories are sourced through our vetted factory network.' },
      { h: 'Information we collect', p: 'When you submit an inquiry form, request a quote, or contact us via WhatsApp/WeChat/email, we collect: name, work email, phone or messaging-app ID, company name, destination market, product category interest, and the content of your message. We do not require payment information through this website.' },
      { h: 'How we use your data', p: 'Your information is used solely to prepare and deliver a sourcing quote, coordinate factory inspections, and follow up on your order. We do not sell, rent, or share your data with unrelated third parties. We share data with a factory only after you confirm interest in that specific supplier.' },
      { h: 'Cookies and analytics', p: 'sungene.net uses essential cookies for language selection and form state. We use Google Analytics 4 (anonymized) to understand which pages buyers find useful. You can opt out by enabling browser Do Not Track or using a privacy extension.' },
      { h: 'Data retention', p: 'Inquiry records are retained for 3 years to support warranty, repeat orders, and after-sales correspondence. You can request deletion at any time by emailing contact@sungene.net.' },
      { h: 'Your rights', p: 'You can request access to, correction of, or deletion of your personal data at any time. For EU/UK buyers we honor GDPR rights including data portability. Email contact@sungene.net with subject "Privacy Request".' },
      { h: 'International transfers', p: 'Because we operate across Taiwan and Mainland China, your data may be processed in either jurisdiction. We maintain commercially reasonable safeguards (encrypted transit, access controls) across both offices.' },
      { h: 'Contact', p: 'Privacy enquiries: contact@sungene.net. Postal: 201 Guangfu Rd., Central District, Taichung 40041, Taiwan.' },
    ],
  },
  zh: {
    sections: [
      { h: '關於我們', p: 'SunGene Co., LTD.(上瑾錸有限公司)是註冊於台灣的貿易公司,在台灣台中與中國大陸廈門設有辦公室。我們經營 sungene.net 作為台灣 + 中國雙公司採購夥伴。Alibaba 公開可驗證的專長是客製紙盒禮品包裝(月餅禮盒、品牌禮盒、零售包裝);其他企業禮贈品類別透過合作工廠網絡採購。' },
      { h: '我們收集的資料', p: '當你提交詢問表單、索取報價或透過 WhatsApp/微信/電子郵件聯絡時,我們會收集:姓名、公司郵箱、電話或通訊軟體 ID、公司名稱、目的地市場、有興趣的品類、訊息內容。本網站不要求你提供付款資訊。' },
      { h: '我們如何使用你的資料', p: '你的資料僅用於準備與遞交採購報價、安排工廠驗貨、追蹤訂單。我們不會將你的資料出售、出租或分享給無關第三方。只有在你確認對某個特定供應商有興趣後,我們才會與該工廠分享相關資料。' },
      { h: 'Cookie 與分析', p: 'sungene.net 使用必要的 Cookie 處理語言選擇與表單狀態。我們使用 Google Analytics 4(已匿名)瞭解哪些頁面對買家有用。你可透過瀏覽器的 Do Not Track 或隱私擴充功能選擇不被追蹤。' },
      { h: '資料保留', p: '詢盤紀錄保留 3 年以利保固、重複下單與售後通訊。你隨時可寄信至 contact@sungene.net 要求刪除。' },
      { h: '你的權利', p: '你隨時可要求查閱、更正或刪除個人資料。對於歐盟/英國買家,我們遵守 GDPR 規定,包含資料可攜權。請寄信至 contact@sungene.net 主旨註明「隱私權請求」。' },
      { h: '跨境傳輸', p: '因公司於台灣與中國大陸雙地營運,你的資料可能在任一司法管轄區處理。我們在兩地辦公室皆採取商業上合理的保護措施(加密傳輸、存取控制)。' },
      { h: '聯絡', p: '隱私權詢問:contact@sungene.net。地址:40041 台中市中區光復路 201 號。' },
    ],
  },
  cn: {
    sections: [
      { h: '关于我们', p: 'SunGene Co., LTD.(上瑾錸有限公司)是注册于台湾的贸易公司,在台湾台中与中国大陆厦门设有办公室。我们经营 sungene.net 作为台湾 + 中国双公司采购伙伴。Alibaba 公开可验证的专长是客制纸盒礼品包装(月饼礼盒、品牌礼盒、零售包装);其他企业礼赠品类别通过合作工厂网络采购。' },
      { h: '我们收集的数据', p: '当你提交询问表单、索取报价或通过 WhatsApp/微信/电子邮件联系时,我们会收集:姓名、公司邮箱、电话或通讯软件 ID、公司名称、目的地市场、有兴趣的品类、信息内容。本网站不要求你提供付款信息。' },
      { h: '我们如何使用你的数据', p: '你的数据仅用于准备与递交采购报价、安排工厂验货、跟进订单。我们不会出售、出租或与无关第三方分享你的数据。只有在你确认对某个特定供应商有兴趣后,我们才会与该工厂分享相关数据。' },
      { h: 'Cookie 与分析', p: 'sungene.net 使用必要的 Cookie 处理语言选择与表单状态。我们使用 Google Analytics 4(已匿名)了解哪些页面对买家有用。你可通过浏览器的 Do Not Track 或隐私扩展选择不被追踪。' },
      { h: '数据保留', p: '询盘记录保留 3 年以利保修、重复下单与售后通讯。你随时可寄信至 contact@sungene.net 要求删除。' },
      { h: '你的权利', p: '你随时可要求查阅、更正或删除个人数据。对于欧盟/英国买家,我们遵守 GDPR 规定,包含数据可携权。请寄信至 contact@sungene.net 主旨注明「隐私权请求」。' },
      { h: '跨境传输', p: '因公司于台湾与中国大陆双地营运,你的数据可能在任一司法管辖区处理。我们在两地办公室皆采取商业上合理的保护措施(加密传输、访问控制)。' },
      { h: '联系', p: '隐私权询问:contact@sungene.net。地址:40041 台中市中区光复路 201 号。' },
    ],
  },
  fr: {
    sections: [
      { h: 'Qui nous sommes', p: 'SunGene Co., LTD. est une société de négoce enregistrée à Taïwan, avec des bureaux à Taichung (Taïwan) et Xiamen (Chine continentale). Nous exploitons sungene.net en tant que partenaire sourcing bi-entité Taïwan + Chine. Notre spécialité vérifiable sur Alibaba est l\'emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux, emballage retail); les autres catégories de cadeaux corporate sont sourcées via notre réseau d\'usines vérifiées.' },
      { h: 'Informations collectées', p: 'Lorsque vous soumettez un formulaire, demandez un devis ou nous contactez par WhatsApp/WeChat/email, nous collectons : nom, email professionnel, téléphone ou ID de messagerie, nom de société, marché cible, catégorie d\'intérêt et contenu de votre message. Aucune information de paiement n\'est demandée sur ce site.' },
      { h: 'Utilisation des données', p: 'Vos informations servent uniquement à préparer et remettre un devis de sourcing, coordonner les inspections d\'usine et assurer le suivi de commande. Nous ne vendons, louons ni partageons vos données avec des tiers non concernés. Nous transmettons des données à une usine uniquement après votre accord sur ce fournisseur précis.' },
      { h: 'Cookies et analytique', p: 'sungene.net utilise des cookies essentiels pour la sélection de langue et l\'état des formulaires. Nous utilisons Google Analytics 4 (anonymisé) pour comprendre les pages utiles aux acheteurs. Vous pouvez désactiver via Do Not Track ou une extension de confidentialité.' },
      { h: 'Conservation', p: 'Les demandes sont conservées 3 ans pour garantie, réassorts et SAV. Vous pouvez demander la suppression à tout moment via contact@sungene.net.' },
      { h: 'Vos droits', p: 'Vous pouvez demander l\'accès, la correction ou la suppression de vos données à tout moment. Pour les acheteurs UE/Royaume-Uni, nous respectons le RGPD, y compris la portabilité. Email : contact@sungene.net, objet « Demande RGPD ».' },
      { h: 'Transferts internationaux', p: 'Comme nous opérons à Taïwan et en Chine continentale, vos données peuvent être traitées dans l\'une ou l\'autre juridiction. Nous appliquons des garanties commercialement raisonnables (chiffrement, contrôles d\'accès) dans les deux bureaux.' },
      { h: 'Contact', p: 'Confidentialité : contact@sungene.net. Adresse : 201 Guangfu Rd., Central District, Taichung 40041, Taïwan.' },
    ],
  },
  es: {
    sections: [
      { h: 'Quiénes somos', p: 'SunGene Co., LTD. es una empresa comercial registrada en Taiwán, con oficinas en Taichung (Taiwán) y Xiamen (China continental). Operamos sungene.net como partner sourcing bi-entidad Taiwán + China. Nuestra especialidad verificable en Alibaba es el embalaje regalo papel personalizado (cajas mooncake, cajas regalo, embalaje retail); otras categorías de regalos corporativos se abastecen vía nuestra red de fábricas verificadas.' },
      { h: 'Información que recopilamos', p: 'Al enviar un formulario, solicitar una cotización o contactarnos por WhatsApp/WeChat/email, recopilamos: nombre, email laboral, teléfono o ID de mensajería, nombre de empresa, mercado destino, categoría de interés y contenido del mensaje. No solicitamos información de pago a través de este sitio.' },
      { h: 'Uso de tus datos', p: 'Tus datos se usan únicamente para preparar y entregar una cotización de sourcing, coordinar inspecciones de fábrica y dar seguimiento a tu pedido. No vendemos, alquilamos ni compartimos tus datos con terceros no relacionados. Solo compartimos datos con una fábrica tras tu confirmación con ese proveedor específico.' },
      { h: 'Cookies y analítica', p: 'sungene.net usa cookies esenciales para selección de idioma y estado del formulario. Usamos Google Analytics 4 (anonimizado) para entender qué páginas resultan útiles. Puedes desactivar con Do Not Track o una extensión de privacidad.' },
      { h: 'Retención', p: 'Los registros de consulta se conservan 3 años para garantía, repeticiones y postventa. Puedes solicitar la eliminación en cualquier momento escribiendo a contact@sungene.net.' },
      { h: 'Tus derechos', p: 'Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento. Para compradores UE/Reino Unido respetamos el RGPD, incluida la portabilidad. Email: contact@sungene.net, asunto «Solicitud de privacidad».' },
      { h: 'Transferencias internacionales', p: 'Al operar entre Taiwán y China continental, tus datos pueden procesarse en cualquiera de las jurisdicciones. Mantenemos salvaguardas comercialmente razonables (cifrado, control de acceso) en ambas oficinas.' },
      { h: 'Contacto', p: 'Privacidad: contact@sungene.net. Dirección: 201 Guangfu Rd., Central District, Taichung 40041, Taiwán.' },
    ],
  },
  pt: { sections: [{ h: 'Privacidade', p: 'A SunGene coleta apenas dados necessários para preparar sua cotação. Contato: contact@sungene.net.' }] },
  ko: { sections: [{ h: '개인정보', p: 'SunGene은 견적 준비에 필요한 정보만 수집합니다. 문의: contact@sungene.net.' }] },
  ja: { sections: [{ h: 'プライバシー', p: 'SunGene は見積もり準備に必要な情報のみ収集します。お問い合わせ: contact@sungene.net.' }] },
  ar: { sections: [{ h: 'الخصوصية', p: 'تجمع SunGene فقط البيانات اللازمة لإعداد عرض السعر. اتصل: contact@sungene.net.' }] },
  th: { sections: [{ h: 'ความเป็นส่วนตัว', p: 'SunGene เก็บเฉพาะข้อมูลที่จำเป็นในการเตรียมใบเสนอราคา ติดต่อ: contact@sungene.net' }] },
  vi: { sections: [{ h: 'Quyền riêng tư', p: 'SunGene chỉ thu thập dữ liệu cần thiết để chuẩn bị báo giá. Liên hệ: contact@sungene.net.' }] },
  de: { sections: [{ h: 'Datenschutz', p: 'SunGene erhebt nur die für das Angebot erforderlichen Daten. Kontakt: contact@sungene.net.' }] },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang) as Lang
  const m = META[l] ?? META.en
  return buildPageMetadata({
    lang: l,
    title: m.title,
    description: m.desc,
    pathname: '/privacy',
    type: 'website',
  })
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const l = normalizeLang(lang) as Lang
  const m = META[l] ?? META.en
  const c = CONTENT[l] ?? CONTENT.en

  return (
    <>
      <PageHero kicker={l === 'zh' ? '法律' : l === 'cn' ? '法律' : l === 'fr' ? 'JURIDIQUE' : l === 'es' ? 'LEGAL' : 'LEGAL'} title={m.title} desc={m.desc} />
      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Breadcrumbs lang={l} items={[{ label: m.title, href: `/${l}/privacy` }]} />
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
