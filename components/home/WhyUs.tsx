import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function WhyUs({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'WHY CHOOSE US',
      title: 'Your Trusted Sourcing Partner for Industrial Tech',
      desc: 'We don’t just supply machines — we help you make the right sourcing decisions before you commit capital. We bridge the gap between technical specs and supply chain reality.',
      items: [
        { icon: '01', title: 'Technical Vetting', desc: 'We perform supplier audits and engineering verification before selection to help verify alignment with your quality criteria.' },
        { icon: '02', title: 'Sourcing Accuracy', desc: 'We match equipment to your product behavior and footprint, reducing the risk of incompatibility after the machines arrive.' },
        { icon: '03', title: 'Risk Management', desc: 'From CE-oriented documentation and destination-market requirements to multi-voltage customization (110–480V), we help manage technical risks in international procurement.' },
        { icon: '04', title: 'Supply Chain Support', desc: 'We coordinate across suppliers for components, sensors, and controls to support a unified and integrated line system.' },
        { icon: '05', title: 'Custom Engineering', desc: 'Our team tailors dimensions, materials (SUS304/316L), and automation levels to fit your specific industrial environment.' },
        { icon: '06', title: 'Global Export Logistics', desc: 'Experienced in shipping technical cargo to 50+ countries with full documentation and international shipping coordination.' },
      ]
    },
    cn: {
      kicker: '为什么选择我们',
      title: '您值得信赖的工业技术采购伙伴',
      desc: '我们不仅仅是提供机器——我们协助您在投入资本前做出正确的采购决策。我们填补了技术规格与供应链现状之间的鸿沟。',
      items: [
        { icon: '01', title: '技术审核', desc: '我们在选型前进行供应商审核与工程验证，协助验证设备与您的质量标准是否一致。' },
        { icon: '02', title: '采购精准度', desc: '我们将设备与您的产品特性及场地空间精准匹配，降低设备到场后不兼容的风险。' },
        { icon: '03', title: '风险控管', desc: '从 CE/UL 相关合规要求到多电压定制 (110–480V)，我们协助识别并降低国际采购中的主要技术风险。' },
        { icon: '04', title: '供应链支持', desc: '我们协调多个零部件、传感器与控制系统供应商，推动线体系统的顺利整合。' },
        { icon: '05', title: '定制工程', desc: '我们的团队根据您的特定工业环境，定制尺寸、材料（SUS304/316L）与自动化水平。' },
        { icon: '06', title: '全球出口物流', desc: '拥有向 50 多个国家运送技术货物的经验，提供完整文件支持与国际物流协调。' },
      ]
    },
    zh: {
      kicker: '為什麼選擇我們',
      title: '您值得信賴的工業技術採購夥伴',
      desc: '我們不僅僅是提供機器——我們協助您在投入資本前做出正確的採購決策。我們填補了技術規格與供應鏈現狀之間的鴻溝。',
      items: [
        { icon: '01', title: '技術審核', desc: '我們在選型前進行供應商稽核與工程驗證，協助驗證設備與您的品質標準是否一致。' },
        { icon: '02', title: '採購精準度', desc: '我們將設備與您的產品特性及場地空間精準匹配，降低設備到場後不相容的風險。' },
        { icon: '03', title: '風險控管', desc: '從 CE/UL 相關合規要求到多電壓客製 (110–480V)，我們協助識別並降低國際採購中的主要技術風險。' },
        { icon: '04', title: '供應鏈支援', desc: '我們協調多個零組件、感測器與控制系統供應商，推動線體系統的順利整合。' },
        { icon: '05', title: '客製工程', desc: '我們的團隊根據您的特定工業環境，客製尺寸、材料（SUS304/316L）與自動化水平。' },
        { icon: '06', title: '全球出口物流', desc: '擁有向 50 多個國家運送技術貨物的經驗，提供完整文件支援與國際物流協調。' },
      ]
    },
    fr: {
      kicker: 'POURQUOI NOUS CHOISIR',
      title: 'Votre partenaire de sourcing de confiance en Asie',
      desc: 'Nous ne nous contentons pas de vendre des machines. De la sélection des équipements à la gestion logistique de l\'exportation, nous offrons un accompagnement complet sur lequel les acheteurs internationaux comptent.',
      items: [
        { icon: '01', title: 'Tarifs fournisseurs directs', desc: 'En tant que partenaire de sourcing expert, nous obtenons des tarifs compétitifs directement auprès des fournisseurs, sans marge d\'intermédiaire.' },
        { icon: '02', title: 'Solutions clé en main', desc: 'Des machines individuelles aux intégrations de ligne complètes, nous concevons et livrons des solutions intégrées conçues pour vos besoins précis.' },
        { icon: '03', title: 'Expertise export mondiale', desc: 'Expérience d\'exportation vers plus de 50 pays avec documentation complète, adaptation des tensions et support logistique international.' },
        { icon: '04', title: 'Service après-vente et formation', desc: 'Assistance à l\'installation par vidéo à distance, formation des opérateurs, fourniture de pièces détachées et support technique 24h/24 et 7j/7.' },
        { icon: '05', title: 'Ingénierie sur mesure', desc: 'Notre équipe peut personnaliser dimensions, matériaux, débit cible et niveau d\'automatisation selon vos contraintes de site.' },
        { icon: '06', title: 'Conformité & documents', desc: 'Support documentaire CE à l’export lorsque applicable, avec options SUS304/316L pour les surfaces en contact produit.' },
      ]
    },
    es: {
      kicker: 'POR QUÉ ELEGIRNOS',
      title: 'Su socio experto en abastecimiento en Asia',
      desc: 'No solo vendemos máquinas. Desde la selección de equipos hasta la gestión logística de exportación, ofrecemos un soporte integral en el que confían compradores de todo el mundo.',
      items: [
        { icon: '01', title: 'Precios directos del proveedor', desc: 'Como su socio experto en abastecimiento, obtenemos precios competitivos directamente de los proveedores sin recargos de intermediarios.' },
        { icon: '02', title: 'Soluciones llave en mano', desc: 'Desde máquinas individuales hasta integraciones de línea completas, diseñamos y entregamos soluciones integradas adaptadas a sus requisitos específicos.' },
        { icon: '03', title: 'Experiencia en exportación global', desc: 'Experiencia exportando a más de 50 países con documentación completa, personalización de voltaje y soporte logístico internacional.' },
        { icon: '04', title: 'Postventa y capacitación', desc: 'Asistencia de instalación por video remoto, capacitación de operadores, suministro de repuestos y soporte técnico 24/7.' },
        { icon: '05', title: 'Ingeniería a medida', desc: 'Nuestro equipo puede personalizar dimensiones, materiales, capacidad objetivo y nivel de automatización según las condiciones de su sitio.' },
        { icon: '06', title: 'Cumplimiento y documentación', desc: 'Soporte de documentación CE para exportación cuando aplica, con opciones SUS304/316L en superficies de contacto con producto.' },
      ]
    },
    pt: {
      kicker: 'POR QUE NOS ESCOLHER',
      title: 'Seu Parceiro Especialista em Sourcing na Ásia',
      desc: 'Vamos além da venda de máquinas. Desde a seleção do equipamento certo até a gestão da logística de exportação, oferecemos suporte completo em que compradores globais confiam.',
      items: [
        { icon: '01', title: 'Preço Direto do Fornecedor', desc: 'Como seu parceiro especialista em sourcing, buscamos preços competitivos diretamente com fornecedores, sem margens de intermediários.' },
        { icon: '02', title: 'Soluções Prontas para Uso', desc: 'De máquinas individuais a integrações de linha completas, projetamos e entregamos soluções integradas sob medida para suas necessidades específicas.' },
        { icon: '03', title: 'Expertise em Exportação Global', desc: 'Experiência em exportação para mais de 50 países com documentação completa, personalização de voltagem e suporte logístico internacional.' },
        { icon: '04', title: 'Pós-Venda e Treinamento', desc: 'Orientação de instalação por vídeo remoto, treinamento de operadores, fornecimento de peças de reposição e suporte técnico 24/7 para todos os equipamentos.' },
        { icon: '05', title: 'Engenharia Personalizada', desc: 'Nossa equipe pode personalizar dimensões, materiais, capacidade-alvo e níveis de automação para atender às condições do seu site.' },
        { icon: '06', title: 'Conformidade e documentação', desc: 'Suporte de documentação CE para exportação quando aplicável, com opções SUS304/316L em superfícies de contato com produto.' },
      ]
    },
    ko: {
      kicker: '당사를 선택하는 이유',
      title: '아시아의 신뢰할 수 있는 소싱 파트너',
      desc: '단순한 기계 판매를 넘어, 적합한 장비 선정부터 수출 물류 관리까지 글로벌 바이어가 신뢰하는 종합 지원을 제공합니다.',
      items: [
        { icon: '01', title: '공급사 직거래 가격', desc: '전문 소싱 파트너로서 중간 유통 마진 없이 경쟁력 있는 공급사 직거래 가격을 제공합니다.' },
        { icon: '02', title: '턴키 솔루션', desc: '단일 기계부터 완전한 생산 라인까지, 고객의 요구 사항에 맞춘 통합 솔루션을 설계하고 납품합니다.' },
        { icon: '03', title: '글로벌 수출 전문성', desc: '50개 이상의 국가에 수출 경험을 보유하며, 완전한 서류, 전압 맞춤 및 국제 물류 지원을 제공합니다.' },
        { icon: '04', title: 'A/S 및 교육', desc: '원격 화상 설치 안내, 운전자 교육, 예비 부품 공급 및 모든 장비에 대한 24/7 기술 지원.' },
        { icon: '05', title: '맞춤 엔지니어링', desc: '현장 조건에 맞춰 치수, 재질, 목표 처리량 및 자동화 수준을 구성합니다.' },
        { icon: '06', title: '컴플라이언스 문서', desc: '수출 목적지 요건에 따라 CE 관련 문서 지원(해당 시)과 SUS304/316L 옵션을 제공합니다.' },
      ]
    },
    ja: {
      kicker: '選ばれる理由',
      title: 'アジアの信頼できるソーシングパートナー',
      desc: '単なる機械販売にとどまりません。最適な設備の選定から輸出物流の管理まで、世界中のバイヤーが頼りにする全工程をカバーするサポートを提供します。',
      items: [
        { icon: '01', title: 'サプライヤー直取引価格', desc: '専門的なソーシングパートナーとして、仲介マージンなしの競争力あるサプライヤー直取引価格を提供します。' },
        { icon: '02', title: 'ターンキーソリューション', desc: '単体機械から完全な生産ラインまで、お客様の要件に合わせた統合ソリューションを設計・納品します。' },
        { icon: '03', title: 'グローバル輸出実績', desc: '50カ国以上への輸出実績があり、完全な書類作成、電圧カスタマイズ、国際配送サポートを提供します。' },
        { icon: '04', title: 'アフターサービスとトレーニング', desc: 'リモートビデオによる設置ガイダンス、オペレーター研修、予備部品供給、全設備24時間365日技術サポート。' },
        { icon: '05', title: 'カスタムエンジニアリング', desc: '現場条件に合わせて寸法、材質、目標処理量、自動化レベルを構成します。' },
        { icon: '06', title: 'コンプライアンス書類', desc: '輸出向けに、必要に応じてCE関連書類をサポートします。食品接触部はSUS304/316Lを指定可能です。' },
      ]
    },
    ar: {
      kicker: 'لماذا تختارنا',
      title: 'شريك التوريد الموثوق في آسيا',
      desc: 'نتجاوز مجرد بيع الآلات. من اختيار المعدات المناسبة إلى إدارة لوجستيات التصدير، نقدم دعمًا شاملاً يعتمد عليه المشترون العالميون.',
      items: [
        { icon: '01', title: 'أسعار المورد المباشرة', desc: 'بصفتنا شريك توريد خبير، نوفر أسعارًا تنافسية مباشرة من الموردين بدون هوامش وسطاء.' },
        { icon: '02', title: 'حلول متكاملة جاهزة', desc: 'من الآلات المنفردة إلى خطوط الإنتاج الكاملة، نصمم ونسلم حلولاً متكاملة مصممة وفق متطلباتكم المحددة.' },
        { icon: '03', title: 'خبرة تصدير عالمية', desc: 'خبرة في التصدير إلى أكثر من 50 دولة مع وثائق كاملة وتخصيص الجهد الكهربائي ودعم الشحن الدولي.' },
        { icon: '04', title: 'خدمة ما بعد البيع والتدريب', desc: 'إرشادات التركيب عبر الفيديو عن بُعد، تدريب المشغلين، توريد قطع الغيار، ودعم فني على مدار الساعة لجميع معداتنا.' },
        { icon: '05', title: 'هندسة مخصصة', desc: 'نخصص الأبعاد والمواد والطاقة المستهدفة ومستوى الأتمتة لتناسب ظروف موقعك.' },
        { icon: '06', title: 'الامتثال والوثائق', desc: 'دعم وثائق CE للتصدير عند الحاجة، مع خيارات SUS304/316L لأسطح تلامس المنتج.' },
      ]
    },
    th: {
      kicker: 'ทำไมต้องเลือกเรา',
      title: 'พันธมิตรการจัดหาที่เชื่อถือได้ในเอเชีย',
      desc: 'เราไม่ได้แค่ขายเครื่องจักร ตั้งแต่การเลือกอุปกรณ์ที่เหมาะสมไปจนถึงการจัดการโลจิสติกส์การส่งออก เราให้การสนับสนุนครบวงจรที่ผู้ซื้อทั่วโลกไว้วางใจ',
      items: [
        { icon: '01', title: 'ราคาตรงจากซัพพลายเออร์', desc: 'ในฐานะพันธมิตรการจัดหาผู้เชี่ยวชาญ เราเสนอราคาที่แข่งขันได้โดยตรงจากซัพพลายเออร์ โดยไม่มีค่าใช้จ่ายของคนกลาง' },
        { icon: '02', title: 'โซลูชันครบวงจร', desc: 'ตั้งแต่เครื่องจักรเดี่ยวไปจนถึงการบูรณาการไลน์ครบชุด เราออกแบบและส่งมอบโซลูชันแบบบูรณาการตามความต้องการเฉพาะของคุณ' },
        { icon: '03', title: 'ความเชี่ยวชาญด้านการส่งออกทั่วโลก', desc: 'มีประสบการณ์ส่งออกไปกว่า 50 ประเทศ พร้อมเอกสารครบถ้วน การปรับแรงดันไฟฟ้า และสนับสนุนการขนส่งระหว่างประเทศ' },
        { icon: '04', title: 'บริการหลังการขายและการฝึกอบรม', desc: 'แนะนำการติดตั้งผ่านวิดีโอทางไกล ฝึกอบรมผู้ปฏิบัติงาน จัดหาอะไหล่ และสนับสนุนทางเทคนิค 24/7 สำหรับอุปกรณ์ทั้งหมด' },
        { icon: '05', title: 'วิศวกรรมตามสั่ง', desc: 'ทีมของเราสามารถปรับแต่งขนาด วัสดุ เป้าหมาย throughput และระดับอัตโนมัติให้เหมาะกับเงื่อนไขหน้างานของคุณ' },
        { icon: '06', title: 'เอกสารและมาตรฐาน', desc: 'สนับสนุนเอกสาร CE สำหรับงานส่งออกเมื่อเหมาะสม พร้อมตัวเลือก SUS304/316L สำหรับส่วนที่สัมผัสผลิตภัณฑ์' },
      ]
    },
    vi: {
      kicker: 'TẠI SAO CHỌN CHÚNG TÔI',
      title: 'Đối Tác Tìm Nguồn Cung Ứng Đáng Tin Cậy Từ Châu Á',
      desc: 'Chúng tôi không chỉ bán máy. Từ việc lựa chọn thiết bị phù hợp đến quản lý logistics xuất khẩu, chúng tôi cung cấp hỗ trợ toàn diện mà khách hàng toàn cầu tin tưởng.',
      items: [
        { icon: '01', title: 'Giá Trực Tiếp Từ Nhà Cung Cấp', desc: 'Là đối tác tìm nguồn cung ứng chuyên gia, chúng tôi cung cấp giá cạnh tranh trực tiếp từ nhà cung cấp mà không có phí trung gian.' },
        { icon: '02', title: 'Giải Pháp Trọn Gói', desc: 'Từ máy đơn lẻ đến tích hợp dây chuyền hoàn chỉnh, chúng tôi thiết kế và cung cấp giải pháp tích hợp theo yêu cầu cụ thể của bạn.' },
        { icon: '03', title: 'Kinh Nghiệm Xuất Khẩu Toàn Cầu', desc: 'Có kinh nghiệm xuất khẩu đến hơn 50 quốc gia với đầy đủ chứng từ, tùy chỉnh điện áp và hỗ trợ vận chuyển quốc tế.' },
        { icon: '04', title: 'Hậu Mãi và Đào Tạo', desc: 'Hướng dẫn lắp đặt qua video từ xa, đào tạo vận hành, cung cấp phụ tùng thay thế và hỗ trợ kỹ thuật 24/7 cho tất cả thiết bị.' },
        { icon: '05', title: 'Kỹ Thuật Tùy Chỉnh', desc: 'Chúng tôi có thể tùy chỉnh kích thước, vật liệu, công suất mục tiêu và mức độ tự động hóa phù hợp với điều kiện lắp đặt của bạn.' },
        { icon: '06', title: 'Tài liệu & tiêu chuẩn', desc: 'Hỗ trợ tài liệu CE cho dự án xuất khẩu khi phù hợp, với tùy chọn SUS304/316L cho bề mặt tiếp xúc sản phẩm.' },
      ]
    },
    de: {
      kicker: 'WARUM UNS WÄHLEN',
      title: 'Ihr vertrauenswürdiger Sourcing-Partner in Asien',
      desc: 'Wir verkaufen nicht nur Maschinen. Von der Auswahl der richtigen Ausrüstung bis zur Verwaltung der Exportlogistik bieten wir umfassende Unterstützung, auf die globale Einkäufer vertrauen.',
      items: [
        { icon: '01', title: 'Direkte Lieferantenpreise', desc: 'Als Ihr fachkundiger Sourcing-Partner sichern wir wettbewerbsfähige Preise direkt von Lieferanten — ohne Aufschläge von Zwischenhändlern.' },
        { icon: '02', title: 'Schlüsselfertige Lösungen', desc: 'Von Einzelmaschinen bis hin zu kompletter Linienintegration — wir entwerfen und liefern integrierte Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.' },
        { icon: '03', title: 'Globale Exportkompetenz', desc: 'Erfahrung im Export in über 50 Länder mit vollständiger Dokumentation, Spannungsanpassung und internationalem Versandsupport.' },
        { icon: '04', title: 'Kundendienst und Schulung', desc: 'Ferninstallationsanleitung per Video, Bedienerschulung, Ersatzteilversorgung und technischer Support rund um die Uhr für alle unsere Geräte.' },
        { icon: '05', title: 'Kundenspezifische Konstruktion', desc: 'Unser Team kann Abmessungen, Materialien, Zielleistung und Automatisierungsgrad an Ihre Standortbedingungen anpassen.' },
        { icon: '06', title: 'Dokumentation & Standards', desc: 'CE-Dokumentationssupport für Exportprojekte, sofern anwendbar, mit SUS304/316L-Optionen für produktberührende Flächen.' },
      ]
    }
  }

  const t = content[lang] || content['en']

  const featureIcons = [
    // Pricing icon
    <svg key="0" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
    // Puzzle icon
    <svg key="1" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" /></svg>,
    // Globe icon
    <svg key="2" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
    // Chat/Support icon
    <svg key="3" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
    // Wrench/Custom icon
    <svg key="4" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0012 22a9.96 9.96 0 007.74-2.28" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>,
    // Shield/Certified icon
    <svg key="5" className="h-5 w-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  ]

  return (
    <section className="py-20 sm:py-28 bg-gray-50 bg-stripe-accent border-y border-gray-200/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: heading + lead text + highlighted stat */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em]">{t.kicker}</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>

            {/* Highlighted stat */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-brand-950 px-6 py-4">
              <div className="text-3xl font-black text-accent-400">50+</div>
              <div className="text-sm font-medium text-brand-300">Countries Served<br/><span className="text-xs text-brand-400">Supplier-vetted sourcing</span></div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['CE Docs Support', 'SUS304/316L', '15+ Years'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                  <svg className="h-3.5 w-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 2-column feature grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {t.items.map((item: any, i: number) => (
              <div key={i} className="relative bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50">
                    {featureIcons[i]}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
