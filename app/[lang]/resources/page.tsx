import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import ResourceArticles from './ResourceArticles'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import { aiImageUrl, photoPrompt } from '@/lib/aiImage'

const titles: Record<string, string> = {
  en: 'Machinery Buying Guides & Resources | SunGene', cn: '资源中心｜SunGene', zh: '資源中心｜SunGene',
  fr: 'Guides d\'achat et ressources | SunGene', es: 'Guías de compra y recursos | SunGene',
  pt: 'Guias de Compra e Recursos | SunGene', ko: '기계 구매 가이드 및 리소스 | SunGene', ja: '機械購入ガイド・リソース | SunGene',
  ar: 'أدلة شراء الماكينات والموارد | SunGene', th: 'คู่มือการซื้อเครื่องจักรและแหล่งข้อมูล | SunGene', vi: 'Hướng Dẫn Mua Máy & Tài Nguyên | SunGene',
  de: 'Maschinenkaufratgeber & Ressourcen | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'Practical buying guides for industrial machinery: how to choose packaging machines, VFFS vs HFFS comparison, import process from Taiwan, voltage requirements, and supplier evaluation tips.',
  cn: '工业机械实用采购指南：如何选择包装机械、VFFS与HFFS比较、台湾进口流程、电压要求和供应商评估技巧。',
  zh: '工業機械實用採購指南：如何選擇包裝機械、VFFS與HFFS比較、台灣進口流程、電壓要求和供應商評估技巧。',
  fr: 'Guides pratiques d\'achat de machines industrielles : choisir sa machine, VFFS vs HFFS, importation depuis Taïwan, exigences de tension et évaluation des fournisseurs.',
  es: 'Guías prácticas de compra de maquinaria industrial: elegir máquinas de empaque, VFFS vs HFFS, importación desde Taiwán, requisitos de voltaje y evaluación de proveedores.',
  pt: 'Guias práticos de compra de maquinário industrial: como escolher máquinas de embalagem, VFFS vs HFFS, importação de Taiwan, requisitos de tensão e avaliação de fornecedores.',
  ko: '산업 기계 실용 구매 가이드: 포장 기계 선택 방법, VFFS vs HFFS 비교, 대만 수입 절차, 전압 요건, 공급업체 평가 팁.',
  ja: '産業機械の実用的な購買ガイド：包装機の選び方、VFFS vs HFFS比較、台湾からの輸入手続き、電圧要件、サプライヤー評価のヒント。',
  ar: 'أدلة شراء عملية للآلات الصناعية: اختيار آلات التعبئة، مقارنة VFFS وHFFS، الاستيراد من تايوان، متطلبات الجهد وتقييم الموردين.',
  th: 'คู่มือการซื้อเครื่องจักรอุตสาหกรรม: วิธีเลือกเครื่องบรรจุภัณฑ์ VFFS กับ HFFS การนำเข้าจากไต้หวัน ข้อกำหนดแรงดันไฟฟ้า และการประเมินซัพพลายเออร์',
  vi: 'Hướng dẫn mua máy móc công nghiệp thực tế: cách chọn máy đóng gói, so sánh VFFS và HFFS, nhập khẩu từ Đài Loan, yêu cầu điện áp và đánh giá nhà cung cấp.',
  de: 'Praktische Kaufratgeber für Industriemaschinen: Verpackungsmaschinen auswählen, VFFS vs HFFS Vergleich, Import aus Taiwan, Spannungsanforderungen und Lieferantenbeurteilung.',
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'].map(lang => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['packaging machine buying guide', 'how to choose packaging machine', 'VFFS HFFS comparison', 'import machinery Taiwan', 'machinery voltage requirements', 'packaging machinery guide'],
    alternates: {
      canonical: `https://sungene.net/${l}/resources`,
      languages: {
        'en': 'https://sungene.net/en/resources',
        'zh-TW': 'https://sungene.net/zh/resources',
        'zh-CN': 'https://sungene.net/cn/resources',
        'fr': 'https://sungene.net/fr/resources',
        'es': 'https://sungene.net/es/resources',
        'pt': 'https://sungene.net/pt/resources',
        'ko': 'https://sungene.net/ko/resources',
        'ja': 'https://sungene.net/ja/resources',
        'ar': 'https://sungene.net/ar/resources',
        'th': 'https://sungene.net/th/resources',
        'vi': 'https://sungene.net/vi/resources',
        'de': 'https://sungene.net/de/resources',
        'x-default': 'https://sungene.net/en/resources',
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `https://sungene.net/${l}/resources`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: ['https://sungene.net/og/og.png'] },
  }
}

export default async function ResourcesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const heroPhoto = aiImageUrl(
    photoPrompt(
      'engineer reviewing packaging machinery documents on a factory floor, stainless steel machines in background, faces not visible',
      'engineering'
    ),
    'landscape_16_9'
  )

  const content: Record<string, { title: string; desc: string; articles: { title: string; body: string }[] }> = {
    en: {
      title: 'Machinery Buying Guides',
      desc: 'Practical guides to help you choose the right machinery, plan your production line, and navigate the export process. Knowledge that saves you time and money.',
      articles: [
        { title: 'How to Choose the Right Packaging Machinery for Your Product', body: 'Start by identifying your product type (powder, liquid, granule, solid), target output speed, and packaging format (pillow bag, stand-up pouch, bottle, sachet). Consider your budget, automation level, and floor space. Our engineers can help you narrow down the best machine type after a brief consultation.' },
        { title: 'VFFS vs HFFS: Which Packaging Machine Do You Need?', body: 'Vertical Form-Fill-Seal (VFFS) machines are ideal for free-flowing products like snacks, powders, and granules. Horizontal Form-Fill-Seal (HFFS) machines are better suited for solid items, bars, and individually wrapped products. Your choice depends on product characteristics, bag style, and speed requirements.' },
        { title: 'Semi-Automatic vs Fully Automatic: Making the Right Investment', body: 'Semi-automatic machines require manual loading but are more affordable and flexible for small batches. Fully automatic lines offer higher throughput and consistency but need more capital and floor space. Consider your current volume, growth plans, and labor costs when deciding.' },
        { title: 'Complete Guide to Importing Machinery from Taiwan', body: 'Taiwan is a major machinery manufacturing hub known for quality and competitive pricing. This guide covers selecting a supplier, factory audits, payment terms (T/T, L/C), shipping options (FOB, CIF), customs clearance, and after-sales support expectations.' },
        { title: 'Understanding Voltage Requirements for International Machinery', body: 'Machinery voltage must match your local power supply. Common standards include 220V/380V 50Hz (Europe, Asia, Africa) and 110V/220V/480V 60Hz (Americas). Always confirm voltage, phase (single/three-phase), and plug configuration before ordering.' },
        { title: 'How to Evaluate a Machinery Supplier Before Ordering', body: 'Key evaluation criteria include factory history, export experience, CE/ISO certifications, customer references, warranty terms, and spare parts availability. Request factory test videos, visit the factory if possible, and verify that the supplier can support your specific voltage and regulatory requirements.' },
      ]
    },
    cn: {
      title: '机械采购指南',
      desc: '帮助您选择合适机械、规划生产线和了解出口流程的实用指南。节省您的时间和成本的知识。',
      articles: [
        { title: '如何为您的产品选择合适的包装机械', body: '首先确定您的产品类型（粉末、液体、颗粒、固体）、目标产速和包装形式（枕式袋、自立袋、瓶装、小袋）。考虑预算、自动化程度和场地空间。我们的工程师可以在简短咨询后帮您缩小最佳机型范围。' },
        { title: 'VFFS与HFFS：您需要哪种包装机？', body: '立式充填封口机（VFFS）适用于流动性好的产品，如零食、粉末和颗粒。卧式充填封口机（HFFS）更适合固体物品、条状产品和单独包装产品。您的选择取决于产品特性、袋型和速度要求。' },
        { title: '半自动与全自动：做出正确的投资选择', body: '半自动机器需要手动装料，但更经济且适合小批量。全自动产线提供更高产量和一致性，但需要更多资金和场地。根据当前产量、增长计划和人工成本来做决定。' },
        { title: '从台湾进口机械的完整指南', body: '台湾是知名的机械制造中心，以质量和价格竞争力著称。本指南涵盖供应商选择、工厂审核、付款条件（T/T、L/C）、运输方式（FOB、CIF）、清关手续和售后服务期望。' },
        { title: '了解国际机械的电压要求', body: '机械电压必须与当地电源匹配。常见标准包括220V/380V 50Hz（欧洲、亚洲、非洲）和110V/220V/480V 60Hz（美洲）。订购前务必确认电压、相位（单相/三相）和插头配置。' },
        { title: '下单前如何评估机械供应商', body: '关键评估标准包括工厂历史、出口经验、CE/ISO认证、客户参考、保修条款和备件供应。索取工厂测试视频，如有可能实地考察，并确认供应商能满足您的电压和法规要求。' },
      ]
    },
    zh: {
      title: '機械採購指南',
      desc: '幫助您選擇合適機械、規劃生產線和了解出口流程的實用指南。節省您的時間和成本的知識。',
      articles: [
        { title: '如何為您的產品選擇合適的包裝機械', body: '首先確定您的產品類型（粉末、液體、顆粒、固體）、目標產速和包裝形式（枕式袋、自立袋、瓶裝、小袋）。考慮預算、自動化程度和場地空間。我們的工程師可以在簡短諮詢後幫您縮小最佳機型範圍。' },
        { title: 'VFFS與HFFS：您需要哪種包裝機？', body: '立式充填封口機（VFFS）適用於流動性好的產品，如零食、粉末和顆粒。臥式充填封口機（HFFS）更適合固體物品、條狀產品和單獨包裝產品。您的選擇取決於產品特性、袋型和速度要求。' },
        { title: '半自動與全自動：做出正確的投資選擇', body: '半自動機器需要手動裝料，但更經濟且適合小批量。全自動產線提供更高產量和一致性，但需要更多資金和場地。根據當前產量、成長計畫和人工成本來做決定。' },
        { title: '從台灣進口機械的完整指南', body: '台灣是知名的機械製造中心，以品質和價格競爭力著稱。本指南涵蓋供應商選擇、工廠審核、付款條件（T/T、L/C）、運輸方式（FOB、CIF）、清關手續和售後服務期望。' },
        { title: '了解國際機械的電壓要求', body: '機械電壓必須與當地電源匹配。常見標準包括220V/380V 50Hz（歐洲、亞洲、非洲）和110V/220V/480V 60Hz（美洲）。訂購前務必確認電壓、相位（單相/三相）和插頭配置。' },
        { title: '下單前如何評估機械供應商', body: '關鍵評估標準包括工廠歷史、出口經驗、CE/ISO認證、客戶參考、保固條款和備件供應。索取工廠測試影片，如有可能實地考察，並確認供應商能滿足您的電壓和法規要求。' },
      ]
    },
    fr: {
      title: 'Guides d\'achat machines',
      desc: 'Guides pratiques pour vous aider à choisir la bonne machine, planifier votre ligne de production et naviguer le processus d\'exportation.',
      articles: [
        { title: 'Comment choisir la bonne machine d\'emballage pour votre produit', body: 'Commencez par identifier votre type de produit (poudre, liquide, granulé, solide), vitesse de production cible et format d\'emballage (sachet coussin, doypack, bouteille, stick). Tenez compte de votre budget, niveau d\'automatisation et espace disponible.' },
        { title: 'VFFS vs HFFS : quelle machine de conditionnement vous faut-il ?', body: 'Les machines VFFS (verticales) sont idéales pour les produits fluides comme les snacks, poudres et granulés. Les machines HFFS (horizontales) conviennent mieux aux produits solides, barres et articles emballés individuellement. Votre choix dépend des caractéristiques du produit, du style de sachet et des exigences de vitesse.' },
        { title: 'Semi-automatique vs automatique : faire le bon investissement', body: 'Les machines semi-automatiques nécessitent un chargement manuel mais sont plus abordables et flexibles pour les petits lots. Les lignes automatiques offrent un débit et une régularité supérieurs mais exigent plus de capital et d\'espace. Considérez votre volume actuel, vos plans de croissance et vos coûts de main-d\'oeuvre.' },
        { title: 'Guide complet pour importer des machines de Ta\u00EFwan', body: 'Ta\u00EFwan est un centre majeur de fabrication de machines, reconnu pour sa qualité et ses prix compétitifs. Ce guide couvre la sélection du fournisseur, les audits d\'usine, les conditions de paiement (T/T, L/C), les options de transport (FOB, CIF), le dédouanement et le service après-vente.' },
        { title: 'Comprendre les exigences de tension pour les machines internationales', body: 'La tension de la machine doit correspondre à votre alimentation locale. Les normes courantes incluent 220V/380V 50Hz (Europe, Asie, Afrique) et 110V/220V/480V 60Hz (Amériques). Confirmez toujours la tension, la phase (mono/triphasée) et la configuration de prise avant de commander.' },
        { title: 'Comment évaluer un fournisseur de machines avant de commander', body: 'Les critères clés comprennent l\'historique de l\'usine, l\'expérience export, les certifications CE/ISO, les références clients, les conditions de garantie et la disponibilité des pièces détachées. Demandez des vidéos de test en usine et vérifiez que le fournisseur peut répondre à vos exigences de tension et de réglementation.' },
      ]
    },
    es: {
      title: 'Gu\u00EDas de compra de maquinaria',
      desc: 'Gu\u00EDas pr\u00E1cticas para ayudarle a elegir la maquinaria adecuada, planificar su l\u00EDnea de producci\u00F3n y navegar el proceso de exportaci\u00F3n.',
      articles: [
        { title: 'C\u00F3mo elegir la maquinaria de empaque adecuada para su producto', body: 'Comience identificando su tipo de producto (polvo, l\u00EDquido, granulado, s\u00F3lido), velocidad objetivo y formato de empaque (bolsa almohada, doypack, botella, sobre). Considere su presupuesto, nivel de automatizaci\u00F3n y espacio disponible.' },
        { title: 'VFFS vs HFFS: \u00BFQu\u00E9 m\u00E1quina de empaque necesita?', body: 'Las m\u00E1quinas VFFS (verticales) son ideales para productos de flujo libre como snacks, polvos y granulados. Las HFFS (horizontales) son m\u00E1s adecuadas para art\u00EDculos s\u00F3lidos, barras y productos envueltos individualmente. Su elecci\u00F3n depende de las caracter\u00EDsticas del producto, estilo de bolsa y requisitos de velocidad.' },
        { title: 'Semiautom\u00E1tico vs totalmente autom\u00E1tico: hacer la inversi\u00F3n correcta', body: 'Las m\u00E1quinas semiautom\u00E1ticas requieren carga manual pero son m\u00E1s asequibles y flexibles para lotes peque\u00F1os. Las l\u00EDneas autom\u00E1ticas ofrecen mayor rendimiento y consistencia pero necesitan m\u00E1s capital y espacio. Considere su volumen actual, planes de crecimiento y costos laborales.' },
        { title: 'Gu\u00EDa completa para importar maquinaria de Taiw\u00E1n', body: 'Taiw\u00E1n es un importante centro de fabricaci\u00F3n de maquinaria conocido por su calidad y precios competitivos. Esta gu\u00EDa cubre selecci\u00F3n de proveedor, auditor\u00EDas de f\u00E1brica, t\u00E9rminos de pago (T/T, L/C), opciones de env\u00EDo (FOB, CIF), despacho aduanero y soporte posventa.' },
        { title: 'Comprender los requisitos de voltaje para maquinaria internacional', body: 'El voltaje de la maquinaria debe coincidir con su suministro el\u00E9ctrico local. Los est\u00E1ndares comunes incluyen 220V/380V 50Hz (Europa, Asia, \u00C1frica) y 110V/220V/480V 60Hz (Am\u00E9ricas). Confirme siempre voltaje, fase (monof\u00E1sica/trif\u00E1sica) y configuraci\u00F3n de enchufe antes de ordenar.' },
        { title: 'C\u00F3mo evaluar un proveedor de maquinaria antes de hacer un pedido', body: 'Los criterios clave incluyen historial de f\u00E1brica, experiencia exportadora, certificaciones CE/ISO, referencias de clientes, t\u00E9rminos de garant\u00EDa y disponibilidad de repuestos. Solicite videos de prueba en f\u00E1brica y verifique que el proveedor pueda cumplir sus requisitos de voltaje y regulaci\u00F3n.' },
      ]
    },
    pt: {
      title: 'Guias de Compra de Maquin\u00E1rio',
      desc: 'Guias pr\u00E1ticos para ajud\u00E1-lo a escolher o maquin\u00E1rio certo, planejar sua linha de produ\u00E7\u00E3o e navegar pelo processo de exporta\u00E7\u00E3o. Conhecimento que economiza seu tempo e dinheiro.',
      articles: [
        { title: 'Como Escolher o Maquin\u00E1rio de Embalagem Certo para Seu Produto', body: 'Comece identificando seu tipo de produto (p\u00F3, l\u00EDquido, gr\u00E2nulo, s\u00F3lido), velocidade alvo e formato de embalagem (sachet travesseiro, stand-up pouch, garrafa, sach\u00EA). Considere seu or\u00E7amento, n\u00EDvel de automa\u00E7\u00E3o e espa\u00E7o dispon\u00EDvel.' },
        { title: 'VFFS vs HFFS: Qual M\u00E1quina de Embalagem Voc\u00EA Precisa?', body: 'M\u00E1quinas VFFS (verticais) s\u00E3o ideais para produtos de fluxo livre como snacks, p\u00F3s e gr\u00E2nulos. M\u00E1quinas HFFS (horizontais) s\u00E3o mais adequadas para itens s\u00F3lidos, barras e produtos embalados individualmente.' },
        { title: 'Semiautom\u00E1tica vs Totalmente Autom\u00E1tica: Fazendo o Investimento Certo', body: 'M\u00E1quinas semiautom\u00E1ticas requerem carregamento manual mas s\u00E3o mais acess\u00EDveis e flex\u00EDveis para pequenos lotes. Linhas autom\u00E1ticas oferecem maior produ\u00E7\u00E3o e consist\u00EAncia mas precisam de mais capital e espa\u00E7o.' },
        { title: 'Guia Completo para Importar Maquin\u00E1rio de Taiwan', body: 'Taiwan \u00E9 um importante centro de fabrica\u00E7\u00E3o de m\u00E1quinas, reconhecido por qualidade e pre\u00E7os competitivos. Este guia cobre sele\u00E7\u00E3o de fornecedor, auditorias de f\u00E1brica, condi\u00E7\u00F5es de pagamento, op\u00E7\u00F5es de frete, desembara\u00E7o aduaneiro e suporte p\u00F3s-venda.' },
        { title: 'Entendendo os Requisitos de Voltagem para Maquin\u00E1rio Internacional', body: 'A voltagem da m\u00E1quina deve corresponder \u00E0 sua rede el\u00E9trica local. Padr\u00F5es comuns incluem 220V/380V 50Hz (Europa, \u00C1sia, \u00C1frica) e 110V/220V/480V 60Hz (Am\u00E9ricas). Sempre confirme voltagem, fase e configura\u00E7\u00E3o de tomada antes de encomendar.' },
        { title: 'Como Avaliar um Fornecedor de Maquin\u00E1rio Antes de Fazer o Pedido', body: 'Crit\u00E9rios chave incluem hist\u00F3rico da f\u00E1brica, experi\u00EAncia de exporta\u00E7\u00E3o, certifica\u00E7\u00F5es CE/ISO, refer\u00EAncias de clientes, termos de garantia e disponibilidade de pe\u00E7as. Solicite v\u00EDdeos de teste e verifique se o fornecedor atende seus requisitos.' },
      ]
    },
    ko: {
      title: '기계 구매 가이드',
      desc: '적합한 기계를 선택하고, 생산 라인을 계획하며, 수출 프로세스를 이해하는 데 도움이 되는 실용적인 가이드입니다. 시간과 비용을 절약하는 지식.',
      articles: [
        { title: '제품에 적합한 포장 기계를 선택하는 방법', body: '먼저 제품 유형(분말, 액체, 과립, 고체), 목표 생산 속도, 포장 형태(필로우백, 스탠드업 파우치, 병, 사셰)를 확인하세요. 예산, 자동화 수준, 설치 공간을 고려하여 최적의 기계를 선택하세요.' },
        { title: 'VFFS vs HFFS: 어떤 포장 기계가 필요한가?', body: 'VFFS(수직형)는 스낵, 분말, 과립 같은 유동성 제품에 이상적입니다. HFFS(수평형)는 고체 제품, 바, 개별 포장 제품에 더 적합합니다. 제품 특성, 봉지 스타일, 속도 요구사항에 따라 선택하세요.' },
        { title: '반자동 vs 완전 자동: 올바른 투자 결정', body: '반자동 기계는 수동 로딩이 필요하지만 소규모 배치에 더 경제적이고 유연합니다. 완전 자동 라인은 더 높은 생산량과 일관성을 제공하지만 더 많은 자본과 공간이 필요합니다.' },
        { title: '대만에서 기계를 수입하는 완전 가이드', body: '대만은 품질과 경쟁력 있는 가격으로 유명한 주요 기계 제조 허브입니다. 공급업체 선택, 공장 감사, 결제 조건, 운송 옵션, 통관, 사후 지원에 대해 안내합니다.' },
        { title: '국제 기계의 전압 요구사항 이해하기', body: '기계 전압은 현지 전원 공급에 맞아야 합니다. 일반적인 표준으로 220V/380V 50Hz(유럽, 아시아, 아프리카)와 110V/220V/480V 60Hz(미주)가 있습니다. 주문 전 반드시 확인하세요.' },
        { title: '주문 전 기계 공급업체를 평가하는 방법', body: '핵심 평가 기준에는 공장 역사, 수출 경험, CE/ISO 인증, 고객 레퍼런스, 보증 조건, 부품 가용성이 포함됩니다. 공장 테스트 영상을 요청하고 가능하면 직접 방문하세요.' },
      ]
    },
    ja: {
      title: '機械購入ガイド',
      desc: '適切な機械の選定、生産ラインの計画、輸出プロセスのナビゲーションに役立つ実用ガイドです。時間とコストを節約する知識を提供します。',
      articles: [
        { title: '製品に最適な包装機械の選び方', body: 'まず製品タイプ（粉末、液体、顆粒、固体）、目標生産速度、包装形態（ピロー袋、スタンドアップパウチ、ボトル、サシェ）を特定します。予算、自動化レベル、設置スペースを考慮してください。' },
        { title: 'VFFS vs HFFS：どちらの包装機が必要か？', body: 'VFFS（縦型）はスナック、粉末、顆粒などの流動性製品に最適です。HFFS（横型）は固体製品、バー、個包装製品に適しています。製品特性、袋タイプ、速度要件に応じて選択してください。' },
        { title: '半自動 vs 全自動：正しい投資判断', body: '半自動機は手動投入が必要ですが、小ロットには経済的で柔軟です。全自動ラインはより高い生産量と安定性を提供しますが、より多くの資本とスペースが必要です。' },
        { title: '台湾から機械を輸入するための完全ガイド', body: '台湾は品質と競争力のある価格で知られる主要な機械製造拠点です。サプライヤー選定、工場監査、支払条件、輸送オプション、通関手続き、アフターサポートについてご案内します。' },
        { title: '国際機械の電圧要件を理解する', body: '機械の電圧は現地の電源に合わせる必要があります。一般的な規格として220V/380V 50Hz（ヨーロッパ、アジア、アフリカ）と110V/220V/480V 60Hz（南北アメリカ）があります。注文前に必ず確認してください。' },
        { title: '注文前に機械サプライヤーを評価する方法', body: '重要な評価基準には、工場の歴史、輸出経験、CE/ISO認証、顧客レファレンス、保証条件、スペアパーツの入手性が含まれます。工場テスト動画を要求し、可能であれば工場を訪問してください。' },
      ]
    },
    ar: {
      title: '\u0623\u062F\u0644\u0629 \u0634\u0631\u0627\u0621 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A',
      desc: '\u0623\u062F\u0644\u0629 \u0639\u0645\u0644\u064A\u0629 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629\u060C \u0648\u062A\u062E\u0637\u064A\u0637 \u062E\u0637 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631. \u0645\u0639\u0631\u0641\u0629 \u062A\u0648\u0641\u0631 \u0644\u0643 \u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0645\u0627\u0644.',
      articles: [
        { title: '\u0643\u064A\u0641 \u062A\u062E\u062A\u0627\u0631 \u0645\u0627\u0643\u064A\u0646\u0629 \u0627\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u062A\u063A\u0644\u064A\u0641 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0645\u0646\u062A\u062C\u0643', body: '\u0627\u0628\u062F\u0623 \u0628\u062A\u062D\u062F\u064A\u062F \u0646\u0648\u0639 \u0645\u0646\u062A\u062C\u0643 (\u0645\u0633\u062D\u0648\u0642\u060C \u0633\u0627\u0626\u0644\u060C \u062D\u0628\u064A\u0628\u064A\u060C \u0635\u0644\u0628)\u060C \u0633\u0631\u0639\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629\u060C \u0648\u0634\u0643\u0644 \u0627\u0644\u062A\u0639\u0628\u0626\u0629. \u062E\u0630 \u0628\u0639\u064A\u0646 \u0627\u0644\u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u064A\u0632\u0627\u0646\u064A\u062A\u0643 \u0648\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u062A\u0645\u062A\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629.' },
        { title: 'VFFS \u0645\u0642\u0627\u0628\u0644 HFFS: \u0623\u064A \u0645\u0627\u0643\u064A\u0646\u0629 \u062A\u0639\u0628\u0626\u0629 \u062A\u062D\u062A\u0627\u062C\u061F', body: '\u0622\u0644\u0627\u062A VFFS (\u0627\u0644\u0639\u0645\u0648\u062F\u064A\u0629) \u0645\u062B\u0627\u0644\u064A\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0641\u0642\u0629 \u0645\u062B\u0644 \u0627\u0644\u0648\u062C\u0628\u0627\u062A \u0627\u0644\u062E\u0641\u064A\u0641\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u064A\u0642 \u0648\u0627\u0644\u062D\u0628\u064A\u0628\u0627\u062A. \u0622\u0644\u0627\u062A HFFS (\u0627\u0644\u0623\u0641\u0642\u064A\u0629) \u0623\u0643\u062B\u0631 \u0645\u0644\u0627\u0621\u0645\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0635\u0644\u0628\u0629 \u0648\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u063A\u0644\u0641\u0629 \u0641\u0631\u062F\u064A\u0627\u064B.' },
        { title: '\u0634\u0628\u0647 \u0622\u0644\u064A \u0645\u0642\u0627\u0628\u0644 \u0622\u0644\u064A \u0628\u0627\u0644\u0643\u0627\u0645\u0644: \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0635\u062D\u064A\u062D', body: '\u0627\u0644\u0622\u0644\u0627\u062A \u0634\u0628\u0647 \u0627\u0644\u0622\u0644\u064A\u0629 \u062A\u062A\u0637\u0644\u0628 \u062A\u062D\u0645\u064A\u0644\u0627\u064B \u064A\u062F\u0648\u064A\u0627\u064B \u0644\u0643\u0646\u0647\u0627 \u0623\u0643\u062B\u0631 \u0627\u0642\u062A\u0635\u0627\u062F\u0627\u064B \u0648\u0645\u0631\u0648\u0646\u0629 \u0644\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0635\u063A\u064A\u0631\u0629. \u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0622\u0644\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u062A\u0648\u0641\u0631 \u0625\u0646\u062A\u0627\u062C\u064A\u0629 \u0623\u0639\u0644\u0649 \u0644\u0643\u0646 \u062A\u062D\u062A\u0627\u062C \u0631\u0623\u0633 \u0645\u0627\u0644 \u0648\u0645\u0633\u0627\u062D\u0629 \u0623\u0643\u0628\u0631.' },
        { title: '\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0634\u0627\u0645\u0644 \u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A \u0645\u0646 \u062A\u0627\u064A\u0648\u0627\u0646', body: '\u062A\u0627\u064A\u0648\u0627\u0646 \u0645\u0631\u0643\u0632 \u0631\u0626\u064A\u0633\u064A \u0644\u062A\u0635\u0646\u064A\u0639 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A \u0645\u0639\u0631\u0648\u0641 \u0628\u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A\u0629. \u064A\u063A\u0637\u064A \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0648\u0631\u062F \u0648\u0634\u0631\u0648\u0637 \u0627\u0644\u062F\u0641\u0639 \u0648\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u062A\u062E\u0644\u064A\u0635 \u0627\u0644\u062C\u0645\u0631\u0643\u064A.' },
        { title: '\u0641\u0647\u0645 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062C\u0647\u062F \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A \u0644\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A \u0627\u0644\u062F\u0648\u0644\u064A\u0629', body: '\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0637\u0627\u0628\u0642 \u062C\u0647\u062F \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0645\u0639 \u0645\u0635\u062F\u0631 \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u062D\u0644\u064A. \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u062A\u0634\u0645\u0644 220V/380V 50Hz \u0648110V/220V/480V 60Hz. \u062A\u0623\u0643\u062F \u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0646 \u0627\u0644\u062C\u0647\u062F \u0648\u0627\u0644\u0637\u0648\u0631 \u0642\u0628\u0644 \u0627\u0644\u0637\u0644\u0628.' },
        { title: '\u0643\u064A\u0641 \u062A\u0642\u064A\u0651\u0645 \u0645\u0648\u0631\u062F \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0627\u062A \u0642\u0628\u0644 \u0627\u0644\u0637\u0644\u0628', body: '\u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u062A\u0634\u0645\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0635\u0646\u0639 \u0648\u062E\u0628\u0631\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0648\u0634\u0647\u0627\u062F\u0627\u062A CE/ISO \u0648\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0634\u0631\u0648\u0637 \u0627\u0644\u0636\u0645\u0627\u0646 \u0648\u062A\u0648\u0641\u0631 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631.' },
      ]
    },
    th: {
      title: '\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23',
      desc: '\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E04\u0E38\u0E13\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21 \u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01 \u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14\u0E40\u0E27\u0E25\u0E32\u0E41\u0E25\u0E30\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22',
      articles: [
        { title: '\u0E27\u0E34\u0E18\u0E35\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13', body: '\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C (\u0E1C\u0E07, \u0E02\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E27, \u0E40\u0E21\u0E47\u0E14, \u0E02\u0E2D\u0E07\u0E41\u0E02\u0E47\u0E07) \u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E20\u0E31\u0E13\u0E11\u0E4C \u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48' },
        { title: 'VFFS \u0E01\u0E31\u0E1A HFFS: \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38\u0E41\u0E1A\u0E1A\u0E44\u0E2B\u0E19?', body: '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 VFFS (\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07) \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E25\u0E44\u0E14\u0E49\u0E14\u0E35 \u0E40\u0E0A\u0E48\u0E19 \u0E02\u0E19\u0E21\u0E02\u0E1A\u0E40\u0E04\u0E35\u0E49\u0E22\u0E27 \u0E1C\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E47\u0E14 \u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 HFFS (\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19) \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E41\u0E02\u0E47\u0E07 \u0E41\u0E17\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E48\u0E2D\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27' },
        { title: '\u0E01\u0E36\u0E48\u0E07\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 vs \u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A: \u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E38\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07', body: '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E36\u0E48\u0E07\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E21\u0E37\u0E2D\u0E41\u0E15\u0E48\u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14\u0E01\u0E27\u0E48\u0E32\u0E41\u0E25\u0E30\u0E22\u0E37\u0E14\u0E2B\u0E22\u0E38\u0E48\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E25\u0E47\u0E2D\u0E15\u0E40\u0E25\u0E47\u0E01 \u0E2A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E43\u0E2B\u0E49\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E17\u0E38\u0E19\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E21\u0E32\u0E01\u0E02\u0E36\u0E49\u0E19' },
        { title: '\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E09\u0E1A\u0E31\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E08\u0E32\u0E01\u0E44\u0E15\u0E49\u0E2B\u0E27\u0E31\u0E19', body: '\u0E44\u0E15\u0E49\u0E2B\u0E27\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E34\u0E15\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E19\u0E35\u0E49\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E0B\u0E31\u0E1E\u0E1E\u0E25\u0E32\u0E22\u0E40\u0E2D\u0E2D\u0E23\u0E4C \u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 \u0E01\u0E32\u0E23\u0E02\u0E19\u0E2A\u0E48\u0E07 \u0E1E\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E28\u0E38\u0E25\u0E01\u0E32\u0E01\u0E23 \u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22' },
        { title: '\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34', body: '\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E08\u0E48\u0E32\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E43\u0E19\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19 \u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07 220V/380V 50Hz \u0E41\u0E25\u0E30 110V/220V/480V 60Hz \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E40\u0E1F\u0E2A\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E2A\u0E21\u0E2D' },
        { title: '\u0E27\u0E34\u0E18\u0E35\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E0B\u0E31\u0E1E\u0E1E\u0E25\u0E32\u0E22\u0E40\u0E2D\u0E2D\u0E23\u0E4C\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E31\u0E01\u0E23\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D', body: '\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07 \u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E42\u0E23\u0E07\u0E07\u0E32\u0E19 \u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01 \u0E43\u0E1A\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07 CE/ISO \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 \u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E02\u0E2D\u0E07\u0E2D\u0E30\u0E44\u0E2B\u0E25\u0E48 \u0E02\u0E2D\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E08\u0E32\u0E01\u0E42\u0E23\u0E07\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E16\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E44\u0E14\u0E49' },
      ]
    },
    vi: {
      title: 'H\u01B0\u1EDBng D\u1EABn Mua M\u00E1y',
      desc: 'C\u00E1c h\u01B0\u1EDBng d\u1EABn th\u1EF1c t\u1EBF gi\u00FAp b\u1EA1n ch\u1ECDn m\u00E1y m\u00F3c ph\u00F9 h\u1EE3p, l\u00EAn k\u1EBF ho\u1EA1ch d\u00E2y chuy\u1EC1n s\u1EA3n xu\u1EA5t v\u00E0 t\u00ECm hi\u1EC3u quy tr\u00ECnh xu\u1EA5t kh\u1EA9u. Ki\u1EBFn th\u1EE9c gi\u00FAp b\u1EA1n ti\u1EBFt ki\u1EC7m th\u1EDDi gian v\u00E0 chi ph\u00ED.',
      articles: [
        { title: 'C\u00E1ch Ch\u1ECDn M\u00E1y \u0110\u00F3ng G\u00F3i Ph\u00F9 H\u1EE3p Cho S\u1EA3n Ph\u1EA9m C\u1EE7a B\u1EA1n', body: 'B\u1EAFt \u0111\u1EA7u b\u1EB1ng c\u00E1ch x\u00E1c \u0111\u1ECBnh lo\u1EA1i s\u1EA3n ph\u1EA9m (b\u1ED9t, l\u1ECFng, h\u1EA1t, r\u1EAFn), t\u1ED1c \u0111\u1ED9 m\u1EE5c ti\u00EAu v\u00E0 \u0111\u1ECBnh d\u1EA1ng \u0111\u00F3ng g\u00F3i. Xem x\u00E9t ng\u00E2n s\u00E1ch, m\u1EE9c \u0111\u1ED9 t\u1EF1 \u0111\u1ED9ng h\u00F3a v\u00E0 di\u1EC7n t\u00EDch c\u00F3 s\u1EB5n.' },
        { title: 'VFFS so v\u1EDBi HFFS: B\u1EA1n C\u1EA7n M\u00E1y \u0110\u00F3ng G\u00F3i N\u00E0o?', body: 'M\u00E1y VFFS (d\u1ECDc) l\u00FD t\u01B0\u1EDFng cho s\u1EA3n ph\u1EA9m ch\u1EA3y t\u1EF1 do nh\u01B0 snack, b\u1ED9t v\u00E0 h\u1EA1t. M\u00E1y HFFS (ngang) ph\u00F9 h\u1EE3p h\u01A1n cho s\u1EA3n ph\u1EA9m r\u1EAFn, thanh v\u00E0 s\u1EA3n ph\u1EA9m b\u1ECDc ri\u00EAng l\u1EBB.' },
        { title: 'B\u00E1n T\u1EF1 \u0110\u1ED9ng vs Ho\u00E0n To\u00E0n T\u1EF1 \u0110\u1ED9ng: \u0110\u1EA7u T\u01B0 \u0110\u00FAng \u0110\u1EAFn', body: 'M\u00E1y b\u00E1n t\u1EF1 \u0111\u1ED9ng c\u1EA7n n\u1EA1p li\u1EC7u th\u1EE7 c\u00F4ng nh\u01B0ng kinh t\u1EBF v\u00E0 linh ho\u1EA1t h\u01A1n cho l\u00F4 nh\u1ECF. D\u00E2y chuy\u1EC1n t\u1EF1 \u0111\u1ED9ng cho n\u0103ng su\u1EA5t v\u00E0 \u0111\u1ED9 \u1ED5n \u0111\u1ECBnh cao h\u01A1n nh\u01B0ng c\u1EA7n nhi\u1EC1u v\u1ED1n v\u00E0 di\u1EC7n t\u00EDch h\u01A1n.' },
        { title: 'H\u01B0\u1EDBng D\u1EABn To\u00E0n Di\u1EC7n Nh\u1EADp Kh\u1EA9u M\u00E1y M\u00F3c T\u1EEB \u0110\u00E0i Loan', body: '\u0110\u00E0i Loan l\u00E0 trung t\u00E2m s\u1EA3n xu\u1EA5t m\u00E1y m\u00F3c l\u1EDBn, n\u1ED5i ti\u1EBFng v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng v\u00E0 gi\u00E1 c\u1EA1nh tranh. H\u01B0\u1EDBng d\u1EABn bao g\u1ED3m ch\u1ECDn nh\u00E0 cung c\u1EA5p, \u0111i\u1EC1u kho\u1EA3n thanh to\u00E1n, v\u1EADn chuy\u1EC3n, th\u1EE7 t\u1EE5c h\u1EA3i quan v\u00E0 h\u1ED7 tr\u1EE3 sau b\u00E1n h\u00E0ng.' },
        { title: 'Hi\u1EC3u Y\u00EAu C\u1EA7u \u0110i\u1EC7n \u00C1p Cho M\u00E1y M\u00F3c Qu\u1ED1c T\u1EBF', body: '\u0110i\u1EC7n \u00E1p m\u00E1y ph\u1EA3i ph\u00F9 h\u1EE3p v\u1EDBi ngu\u1ED3n \u0111i\u1EC7n \u0111\u1ECBa ph\u01B0\u01A1ng. Ti\u00EAu chu\u1EA9n ph\u1ED5 bi\u1EBFn g\u1ED3m 220V/380V 50Hz v\u00E0 110V/220V/480V 60Hz. Lu\u00F4n x\u00E1c nh\u1EADn \u0111i\u1EC7n \u00E1p v\u00E0 pha tr\u01B0\u1EDBc khi \u0111\u1EB7t h\u00E0ng.' },
        { title: 'C\u00E1ch \u0110\u00E1nh Gi\u00E1 Nh\u00E0 Cung C\u1EA5p M\u00E1y M\u00F3c Tr\u01B0\u1EDBc Khi \u0110\u1EB7t H\u00E0ng', body: 'Ti\u00EAu ch\u00ED ch\u00EDnh bao g\u1ED3m l\u1ECBch s\u1EED nh\u00E0 m\u00E1y, kinh nghi\u1EC7m xu\u1EA5t kh\u1EA9u, ch\u1EE9ng nh\u1EADn CE/ISO, tham chi\u1EBFu kh\u00E1ch h\u00E0ng, \u0111i\u1EC1u kho\u1EA3n b\u1EA3o h\u00E0nh v\u00E0 kh\u1EA3 n\u0103ng cung c\u1EA5p ph\u1EE5 t\u00F9ng. Y\u00EAu c\u1EA7u video th\u1EED nghi\u1EC7m v\u00E0 tham quan nh\u00E0 m\u00E1y n\u1EBFu c\u00F3 th\u1EC3.' },
      ]
    },
    de: {
      title: 'Maschinenkaufratgeber',
      desc: 'Praktische Ratgeber, die Ihnen helfen, die richtige Maschine auszuw\u00E4hlen, Ihre Produktionslinie zu planen und den Exportprozess zu verstehen. Wissen, das Ihnen Zeit und Geld spart.',
      articles: [
        { title: 'So w\u00E4hlen Sie die richtige Verpackungsmaschine f\u00FCr Ihr Produkt', body: 'Beginnen Sie mit der Identifikation Ihres Produkttyps (Pulver, Fl\u00FCssigkeit, Granulat, Feststoff), der Zielgeschwindigkeit und des Verpackungsformats (Kissenbeutel, Standbodenbeutel, Flasche, Sachet). Ber\u00FCcksichtigen Sie Budget, Automatisierungsgrad und verf\u00FCgbare Stellfl\u00E4che.' },
        { title: 'VFFS vs. HFFS: Welche Verpackungsmaschine brauchen Sie?', body: 'VFFS-Maschinen (vertikal) sind ideal f\u00FCr frei flie\u00DFende Produkte wie Snacks, Pulver und Granulate. HFFS-Maschinen (horizontal) eignen sich besser f\u00FCr feste Produkte, Riegel und einzeln verpackte Artikel. Ihre Wahl h\u00E4ngt von Produkteigenschaften, Beutelstil und Geschwindigkeitsanforderungen ab.' },
        { title: 'Halbautomatisch vs. Vollautomatisch: Die richtige Investitionsentscheidung', body: 'Halbautomatische Maschinen erfordern manuelles Beladen, sind aber g\u00FCnstiger und flexibler f\u00FCr kleine Chargen. Vollautomatische Linien bieten h\u00F6heren Durchsatz und Konsistenz, ben\u00F6tigen aber mehr Kapital und Platz.' },
        { title: 'Komplettanleitung zum Import von Maschinen aus Taiwan', body: 'Taiwan ist ein bedeutendes Zentrum f\u00FCr Maschinenbau, bekannt f\u00FCr Qualit\u00E4t und wettbewerbsf\u00E4hige Preise. Dieser Leitfaden behandelt Lieferantenauswahl, Werksaudits, Zahlungsbedingungen, Versandoptionen, Zollabfertigung und After-Sales-Support.' },
        { title: 'Spannungsanforderungen f\u00FCr internationale Maschinen verstehen', body: 'Die Maschinenspannung muss Ihrer lokalen Stromversorgung entsprechen. G\u00E4ngige Standards umfassen 220V/380V 50Hz (Europa, Asien, Afrika) und 110V/220V/480V 60Hz (Amerika). Best\u00E4tigen Sie immer Spannung, Phase und Steckerkonfiguration vor der Bestellung.' },
        { title: 'So bewerten Sie einen Maschinenlieferanten vor der Bestellung', body: 'Wichtige Bewertungskriterien umfassen Werksgeschichte, Exporterfahrung, CE/ISO-Zertifizierungen, Kundenreferenzen, Garantiebedingungen und Ersatzteilvef\u00FCgbarkeit. Fordern Sie Werkstestvideos an und besuchen Sie die Fabrik wenn m\u00F6glich.' },
      ]
    }
  }

  const t = content[lang] || content['en']

  const thumbs = [
    aiImageUrl(photoPrompt('packaging machinery selection scene in a factory, stainless steel machine, clean background', 'machinePortrait'), 'landscape_4_3'),
    aiImageUrl(photoPrompt('two packaging machines in a clean workshop, one vertical and one horizontal, side-by-side comparison', 'lineWide'), 'landscape_4_3'),
    aiImageUrl(photoPrompt('semi-automatic packaging station, operator hands only, bags and sealing area visible', 'engineering'), 'landscape_4_3'),
    aiImageUrl(photoPrompt('export shipping documents on a pallet next to a wooden crate in factory loading area', 'shipping'), 'landscape_4_3'),
    aiImageUrl(photoPrompt('industrial electrical control panel, voltage label area and neat wiring', 'machineDetail'), 'landscape_4_3'),
    aiImageUrl(photoPrompt('factory audit scene, clipboard and checklist on a workbench with machinery in background, faces not visible', 'engineering'), 'landscape_4_3'),
  ]

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-12">
        <Container>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200/60">
            <div className="relative aspect-[16/9] bg-gray-100">
              <Image src={heroPhoto} alt="Machinery buying guides" fill sizes="(min-width: 1024px) 72vw, 92vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <ResourceArticles articles={t.articles} thumbs={thumbs} />
        </Container>
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Choose the Right Industrial Packaging Machine',
        description: 'A step-by-step guide to selecting the optimal packaging or filling machine for your product, production goals, and budget.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Identify your product type',
            text: 'Determine if your product is powder, liquid, granule, solid, or a combination. This determines the filling and packaging mechanism.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Define your packaging format',
            text: 'Choose between pillow bag, stand-up pouch, bottle, sachet, can, or bulk. Each format requires different machinery.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Set your production speed target',
            text: 'Calculate the bags, bottles, or units per minute or per hour you need. This determines whether you need semi-automatic or fully automatic equipment.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Confirm voltage and certification requirements',
            text: 'Check your local power supply (voltage, phase, frequency) and required certifications (CE, FDA, etc.) before ordering from a foreign manufacturer.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Contact manufacturer for engineering consultation',
            text: 'Send your product sample, target output, and packaging specs to SunGene engineers. They will recommend the optimal machine model and provide a detailed quote.',
          },
        ],
      }} />
    </>
  )
}
