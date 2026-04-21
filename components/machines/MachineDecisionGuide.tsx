import { Lang } from '@/lib/i18n'

const guideByLang: Record<Lang, {
  title: string
  fitTitle: string
  riskTitle: string
  compareTitle: string
  acceptanceTitle: string
  fitLead: string
  riskItems: string[]
  compareItems: string[]
  acceptanceItems: string[]
}> = {
  en: {
    title: 'Procurement Decision Guide',
    fitTitle: 'Best Fit Scenarios',
    riskTitle: 'Project Risks To Confirm Early',
    compareTitle: 'Supplier Comparison Checkpoints',
    acceptanceTitle: 'FAT / Acceptance Focus',
    fitLead: 'Use these pages to qualify fit before asking for price:',
    riskItems: [
      'Check real throughput with your own product, package size, and operator assumptions.',
      'Confirm destination voltage, spare parts list, and lead time before PO.',
      'Review cleaning, changeover, and maintenance workload, not just nameplate speed.',
    ],
    compareItems: [
      'Ask for sample videos, real reference projects, and the exact configuration included in scope.',
      'Compare what is excluded: conveyors, coding, inspection, guarding, commissioning, and documents.',
      'Verify after-sales path: who answers, response time, and what remote support actually covers.',
    ],
    acceptanceItems: [
      'Define pass/fail criteria with your actual product, packaging material, and target output.',
      'List the critical checks: seal quality, weight accuracy, changeover time, alarms, and safety items.',
      'Align FAT records, spare parts, manuals, and electrical documents before shipment release.',
    ],
  },
  zh: {
    title: '採購決策指南',
    fitTitle: '適用情境',
    riskTitle: '應先確認的專案風險',
    compareTitle: '供應商比對重點',
    acceptanceTitle: 'FAT / 驗收重點',
    fitLead: '先用這些情境判斷是否適合，再進一步談價格與配置：',
    riskItems: [
      '先用你的實際產品、包材尺寸與操作假設確認真實產能，而不是只看型錄速度。',
      '下單前確認目的國電壓、備件清單與交期，避免後段補件拖延。',
      '把清潔、換線與保養負擔一起納入評估，不要只看設備本體。',
    ],
    compareItems: [
      '要求樣品影片、真實案例與此次報價實際包含的配置範圍。',
      '逐項比對哪些內容未含：輸送、打碼、檢測、防護、調試與文件。',
      '確認售後窗口、回覆時效，以及遠端支援真正能處理到什麼程度。',
    ],
    acceptanceItems: [
      '先用你的實際產品、包材與目標產速定義 FAT 合格標準。',
      '把關鍵檢查項列清楚：封口品質、重量精度、換線時間、警報與安全項目。',
      '出貨前確認 FAT 紀錄、備件、操作手冊與電氣文件是否齊全。',
    ],
  },
  cn: {
    title: '采购决策指南',
    fitTitle: '适用情境',
    riskTitle: '应先确认的项目风险',
    compareTitle: '供应商比对重点',
    acceptanceTitle: 'FAT / 验收重点',
    fitLead: '先用这些情境判断是否适合，再进一步谈价格与配置：',
    riskItems: [
      '先用你的实际产品、包材尺寸与操作假设确认真实产能，而不是只看目录速度。',
      '下单前确认目的国电压、备件清单与交期，避免后段补件拖延。',
      '把清洁、换线与保养负担一起纳入评估，不要只看设备本体。',
    ],
    compareItems: [
      '要求样品视频、真实案例与本次报价实际包含的配置范围。',
      '逐项比对哪些内容未含：输送、打码、检测、防护、调试与文件。',
      '确认售后窗口、回复时效，以及远程支持真正能处理到什么程度。',
    ],
    acceptanceItems: [
      '先用你的实际产品、包材与目标产速定义 FAT 合格标准。',
      '把关键检查项列清楚：封口质量、重量精度、换线时间、报警与安全项目。',
      '出货前确认 FAT 记录、备件、操作手册与电气文件是否齐全。',
    ],
  },
  fr: {
    title: 'Guide de Décision Sourcing',
    fitTitle: 'Cas d’Usage Adaptés',
    riskTitle: 'Risques Projet à Valider Tôt',
    compareTitle: 'Points de Comparaison Fournisseur',
    acceptanceTitle: 'Points FAT / Réception',
    fitLead: 'Utilisez ces cas pour qualifier l’adéquation avant de parler prix :',
    riskItems: [
      'Vérifiez le débit réel avec votre produit, votre emballage et vos hypothèses opérateur.',
      'Confirmez tension, pièces de rechange et délai avant la commande.',
      'Évaluez aussi nettoyage, changement de format et maintenance, pas seulement la cadence nominale.',
    ],
    compareItems: [
      'Demandez vidéos d’essai, références réelles et configuration exacte incluse.',
      'Comparez les exclusions : convoyage, codage, inspection, protections, mise en service, documents.',
      'Validez qui gère l’après-vente, le délai de réponse et la portée réelle du support à distance.',
    ],
    acceptanceItems: [
      'Définissez les critères FAT avec votre vrai produit, emballage et cadence cible.',
      'Listez les contrôles critiques : qualité de soudure, précision, changement de format, alarmes, sécurité.',
      'Vérifiez rapports FAT, pièces, manuels et documents électriques avant libération expédition.',
    ],
  },
  es: {
    title: 'Guía de Decisión de Abastecimiento',
    fitTitle: 'Escenarios Adecuados',
    riskTitle: 'Riesgos a Confirmar Temprano',
    compareTitle: 'Puntos para Comparar Proveedores',
    acceptanceTitle: 'Enfoque FAT / Aceptación',
    fitLead: 'Use estos escenarios para validar encaje antes de hablar de precio:',
    riskItems: [
      'Confirme el rendimiento real con su producto, envase y supuestos operativos.',
      'Revise voltaje destino, lista de repuestos y plazo antes de emitir la orden.',
      'Evalúe limpieza, cambio de formato y mantenimiento, no solo la velocidad nominal.',
    ],
    compareItems: [
      'Pida videos de prueba, referencias reales y la configuración exacta incluida.',
      'Compare exclusiones: transportadores, codificación, inspección, protecciones, puesta en marcha y documentos.',
      'Valide quién responde posventa, en cuánto tiempo y qué cubre realmente el soporte remoto.',
    ],
    acceptanceItems: [
      'Defina criterios FAT con su producto real, material de empaque y salida objetivo.',
      'Liste los controles críticos: sellado, precisión de peso, cambio de formato, alarmas y seguridad.',
      'Alinee registros FAT, repuestos, manuales y documentos eléctricos antes del embarque.',
    ],
  },
  pt: {
    title: 'Guia de Decisão de Sourcing',
    fitTitle: 'Cenários Mais Adequados',
    riskTitle: 'Riscos para Confirmar Cedo',
    compareTitle: 'Pontos para Comparar Fornecedores',
    acceptanceTitle: 'Foco em FAT / Aceitação',
    fitLead: 'Use estes cenários para validar aderência antes de falar de preço:',
    riskItems: [
      'Confirme o rendimento real com seu produto, embalagem e hipóteses operacionais.',
      'Revise tensão de destino, lista de sobressalentes e prazo antes do pedido.',
      'Avalie limpeza, setup e manutenção, não apenas a velocidade nominal.',
    ],
    compareItems: [
      'Peça vídeos de teste, referências reais e a configuração exata incluída.',
      'Compare exclusões: transportadores, codificação, inspeção, proteções, comissionamento e documentos.',
      'Valide quem atende o pós-venda, tempo de resposta e o que o suporte remoto cobre.',
    ],
    acceptanceItems: [
      'Defina critérios FAT com seu produto real, material de embalagem e produção-alvo.',
      'Liste verificações críticas: selagem, precisão, troca de formato, alarmes e segurança.',
      'Alinhe registros FAT, sobressalentes, manuais e documentos elétricos antes do embarque.',
    ],
  },
  ko: {
    title: '소싱 의사결정 가이드',
    fitTitle: '적합한 적용 시나리오',
    riskTitle: '초기에 확인할 프로젝트 리스크',
    compareTitle: '공급업체 비교 포인트',
    acceptanceTitle: 'FAT / 검수 포인트',
    fitLead: '가격을 보기 전에 먼저 적합성을 판단하세요:',
    riskItems: [
      '실제 제품, 포장 규격, 작업 조건으로 실출력을 확인하세요.',
      '발주 전 목적지 전압, 예비부품 목록, 납기를 확인하세요.',
      '정격 속도뿐 아니라 세척, 전환, 유지보수 부담도 함께 평가하세요.',
    ],
    compareItems: [
      '테스트 영상, 실제 납품 사례, 포함 범위를 요청하세요.',
      '컨베이어, 코딩, 검사, 가드, 시운전, 문서 포함 여부를 비교하세요.',
      'A/S 창구, 응답 속도, 원격 지원 범위를 확인하세요.',
    ],
    acceptanceItems: [
      '실제 제품, 포장재, 목표 생산량으로 FAT 합격 기준을 정의하세요.',
      '실링 품질, 중량 정확도, 교체 시간, 알람, 안전 항목을 체크하세요.',
      '출하 전 FAT 기록, 예비부품, 매뉴얼, 전기 문서 완비 여부를 확인하세요.',
    ],
  },
  ja: {
    title: '調達判断ガイド',
    fitTitle: '適用しやすいケース',
    riskTitle: '早期に確認すべきリスク',
    compareTitle: 'サプライヤー比較ポイント',
    acceptanceTitle: 'FAT / 検収ポイント',
    fitLead: '価格確認の前に、まず適合性を確認してください：',
    riskItems: [
      '実製品、包材、運用条件で実能力を確認してください。',
      '発注前に仕向地電圧、予備品、納期を確認してください。',
      '定格速度だけでなく、洗浄、段取り替え、保守負荷も評価してください。',
    ],
    compareItems: [
      'テスト動画、実績案件、見積範囲を要求してください。',
      '搬送、印字、検査、安全カバー、立上げ、書類の含有範囲を比較してください。',
      'アフター対応窓口、応答速度、遠隔支援範囲を確認してください。',
    ],
    acceptanceItems: [
      '実製品、包材、目標能力で FAT 合格基準を定義してください。',
      'シール品質、重量精度、切替時間、アラーム、安全項目を確認してください。',
      '出荷前に FAT 記録、予備品、取説、電気書類をそろえてください。',
    ],
  },
  ar: {
    title: 'دليل قرار التوريد',
    fitTitle: 'حالات الاستخدام المناسبة',
    riskTitle: 'المخاطر التي يجب تأكيدها مبكرًا',
    compareTitle: 'نقاط مقارنة الموردين',
    acceptanceTitle: 'تركيز FAT / القبول',
    fitLead: 'استخدم هذه الحالات لتأكيد الملاءمة قبل مناقشة السعر:',
    riskItems: [
      'تحقق من الإنتاجية الفعلية باستخدام منتجك وعبوتك وافتراضات التشغيل.',
      'أكد الجهد الكهربائي وقطع الغيار والمهلة قبل إصدار الطلب.',
      'قيّم التنظيف وتغيير المقاس والصيانة، وليس السرعة الاسمية فقط.',
    ],
    compareItems: [
      'اطلب فيديوهات اختبار ومراجع فعلية ونطاق التوريد الدقيق.',
      'قارن ما هو غير مشمول: الناقلات، الترميز، الفحص، الحمايات، التشغيل، والوثائق.',
      'تحقق من جهة ما بعد البيع وزمن الرد وما يغطيه الدعم عن بُعد فعليًا.',
    ],
    acceptanceItems: [
      'حدد معايير FAT باستخدام منتجك الفعلي ومواد التعبئة والإنتاج المستهدف.',
      'راجع جودة الإغلاق ودقة الوزن وزمن التبديل والإنذارات وعناصر السلامة.',
      'أكد سجلات FAT وقطع الغيار والكتيبات والوثائق الكهربائية قبل الشحن.',
    ],
  },
  th: {
    title: 'คู่มือการตัดสินใจจัดหา',
    fitTitle: 'สถานการณ์ที่เหมาะสม',
    riskTitle: 'ความเสี่ยงที่ควรยืนยันตั้งแต่ต้น',
    compareTitle: 'จุดเปรียบเทียบซัพพลายเออร์',
    acceptanceTitle: 'จุดเน้น FAT / การตรวจรับ',
    fitLead: 'ใช้รายการนี้เพื่อดูความเหมาะสมก่อนคุยเรื่องราคา:',
    riskItems: [
      'ยืนยันกำลังการผลิตจริงด้วยสินค้า บรรจุภัณฑ์ และเงื่อนไขการใช้งานของคุณ',
      'ตรวจสอบแรงดันไฟ อะไหล่ และระยะเวลาส่งมอบก่อนออก PO',
      'ประเมินการทำความสะอาด การเปลี่ยนงาน และภาระการบำรุงรักษาด้วย',
    ],
    compareItems: [
      'ขอวิดีโอทดสอบ เคสอ้างอิงจริง และขอบเขตอุปกรณ์ที่รวมในราคา',
      'เปรียบเทียบสิ่งที่ไม่รวม เช่น ลำเลียง พิมพ์โค้ด ตรวจสอบ การ์ดป้องกัน คอมมิชชันนิ่ง และเอกสาร',
      'ยืนยันช่องทางบริการหลังการขาย เวลาตอบกลับ และขอบเขตซัพพอร์ตระยะไกล',
    ],
    acceptanceItems: [
      'กำหนดเกณฑ์ FAT ด้วยสินค้าจริง วัสดุบรรจุ และกำลังการผลิตเป้าหมาย',
      'ระบุจุดตรวจสำคัญ เช่น คุณภาพซีล ความแม่นยำ เวลาเปลี่ยนงาน สัญญาณเตือน และความปลอดภัย',
      'ตรวจสอบบันทึก FAT อะไหล่ คู่มือ และเอกสารไฟฟ้าก่อนปล่อยส่งมอบ',
    ],
  },
  vi: {
    title: 'Hướng Dẫn Quyết Định Sourcing',
    fitTitle: 'Tình Huống Phù Hợp',
    riskTitle: 'Rủi Ro Cần Xác Nhận Sớm',
    compareTitle: 'Điểm So Sánh Nhà Cung Cấp',
    acceptanceTitle: 'Trọng Tâm FAT / Nghiệm Thu',
    fitLead: 'Dùng các tình huống này để đánh giá độ phù hợp trước khi hỏi giá:',
    riskItems: [
      'Xác nhận năng suất thực với chính sản phẩm, bao bì và điều kiện vận hành của bạn.',
      'Kiểm tra điện áp đích, danh sách phụ tùng và lead time trước khi đặt PO.',
      'Đánh giá cả vệ sinh, đổi format và bảo trì, không chỉ tốc độ danh nghĩa.',
    ],
    compareItems: [
      'Yêu cầu video test, dự án tham chiếu thật và phạm vi cấu hình được báo giá.',
      'So sánh các hạng mục không bao gồm: băng tải, in date, kiểm tra, che chắn, commissioning và tài liệu.',
      'Xác minh đầu mối hậu mãi, thời gian phản hồi và phạm vi hỗ trợ từ xa.',
    ],
    acceptanceItems: [
      'Định nghĩa tiêu chí FAT bằng sản phẩm thật, vật liệu bao bì và công suất mục tiêu.',
      'Liệt kê hạng mục kiểm tra quan trọng: chất lượng hàn, độ chính xác, thời gian đổi format, cảnh báo, an toàn.',
      'Đối chiếu biên bản FAT, phụ tùng, hướng dẫn và tài liệu điện trước khi giao hàng.',
    ],
  },
  de: {
    title: 'Beschaffungs-Entscheidungsleitfaden',
    fitTitle: 'Geeignete Einsatzszenarien',
    riskTitle: 'Früh zu prüfende Projektrisiken',
    compareTitle: 'Lieferanten-Vergleichspunkte',
    acceptanceTitle: 'FAT / Abnahmefokus',
    fitLead: 'Prüfen Sie zuerst die Eignung, bevor Sie Preise vergleichen:',
    riskItems: [
      'Bestätigen Sie die reale Leistung mit Ihrem Produkt, Verpackungsmaterial und Bedienannahmen.',
      'Prüfen Sie Zielspannung, Ersatzteilliste und Lieferzeit vor der Bestellung.',
      'Bewerten Sie auch Reinigung, Formatwechsel und Wartungsaufwand, nicht nur Nenngeschwindigkeit.',
    ],
    compareItems: [
      'Fordern Sie Testvideos, echte Referenzen und den genauen Lieferumfang an.',
      'Vergleichen Sie Ausschlüsse: Fördertechnik, Codierung, Inspektion, Schutz, Inbetriebnahme, Dokumente.',
      'Klären Sie After-Sales-Ansprechpartner, Reaktionszeit und Umfang des Remote-Supports.',
    ],
    acceptanceItems: [
      'Definieren Sie FAT-Kriterien mit Ihrem echten Produkt, Material und Zielleistung.',
      'Prüfen Sie Siegelqualität, Gewichtsgenauigkeit, Umrüstzeit, Alarme und Sicherheitspunkte.',
      'Stimmen Sie FAT-Protokolle, Ersatzteile, Handbücher und Elektro-Unterlagen vor Versand ab.',
    ],
  },
}

export default function MachineDecisionGuide({
  lang,
  fitScenarios,
}: {
  lang: Lang
  fitScenarios: string[]
}) {
  const t = guideByLang[lang] || guideByLang.en
  const fitItems = fitScenarios.filter(Boolean).slice(0, 6)

  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">{t.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.fitTitle}</h3>
            <p className="mt-2 text-sm text-gray-600">{t.fitLead}</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {fitItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-accent-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.riskTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {t.riskItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.compareTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {t.compareItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-brand-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-950">{t.acceptanceTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {t.acceptanceItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
