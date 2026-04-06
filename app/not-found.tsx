import Link from 'next/link'
import { headers } from 'next/headers'

const tx: Record<string, { title: string; desc: string; machinery: string; recommend: string; resources: string; home: string }> = {
  en: { title: 'Page not found', desc: 'The page may have moved or the URL is incorrect.', machinery: 'Machinery', recommend: 'Get recommendation', resources: 'Resources', home: 'Home' },
  zh: { title: '找不到頁面', desc: '頁面可能已移動或網址不正確。', machinery: '機械目錄', recommend: '取得推薦', resources: '資源中心', home: '首頁' },
  cn: { title: '找不到页面', desc: '页面可能已移动或网址不正确。', machinery: '机械目录', recommend: '获取推荐', resources: '资源中心', home: '首页' },
  fr: { title: 'Page introuvable', desc: 'La page a peut-être été déplacée ou l’URL est incorrecte.', machinery: 'Catalogue', recommend: 'Recommandation', resources: 'Ressources', home: 'Accueil' },
  es: { title: 'Página no encontrada', desc: 'Es posible que la página se haya movido o que la URL sea incorrecta.', machinery: 'Maquinaria', recommend: 'Recomendación', resources: 'Recursos', home: 'Inicio' },
  pt: { title: 'Página não encontrada', desc: 'A página pode ter sido movida ou o URL está incorreto.', machinery: 'Máquinas', recommend: 'Recomendação', resources: 'Recursos', home: 'Início' },
  ko: { title: '페이지를 찾을 수 없습니다', desc: '페이지가 이동했거나 주소가 올바르지 않을 수 있습니다.', machinery: '기계', recommend: '추천 받기', resources: '리소스', home: '홈' },
  ja: { title: 'ページが見つかりません', desc: 'ページが移動したか、URL が正しくない可能性があります。', machinery: '機械', recommend: '推薦', resources: 'リソース', home: 'ホーム' },
  ar: { title: 'الصفحة غير موجودة', desc: 'قد تكون الصفحة قد نُقلت أو أن الرابط غير صحيح.', machinery: 'الماكينات', recommend: 'توصية', resources: 'الموارد', home: 'الرئيسية' },
  th: { title: 'ไม่พบหน้าเว็บ', desc: 'หน้าเว็บอาจถูกย้ายหรือ URL ไม่ถูกต้อง', machinery: 'เครื่องจักร', recommend: 'รับคำแนะนำ', resources: 'แหล่งข้อมูล', home: 'หน้าแรก' },
  vi: { title: 'Không tìm thấy trang', desc: 'Trang có thể đã được chuyển hoặc URL không đúng.', machinery: 'Máy móc', recommend: 'Nhận tư vấn', resources: 'Tài nguyên', home: 'Trang chủ' },
  de: { title: 'Seite nicht gefunden', desc: 'Die Seite wurde möglicherweise verschoben oder die URL ist falsch.', machinery: 'Maschinen', recommend: 'Empfehlung', resources: 'Ressourcen', home: 'Startseite' },
}

export default async function NotFound() {
  const h = await headers()
  const lang = h.get('x-lang') || 'en'
  const t = tx[lang] || tx.en

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-base text-gray-700">{t.desc}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/${lang}`} className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-brand-400 hover:text-brand-700">
            {t.home}
          </Link>
          <Link href={`/${lang}/machinery`} className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-brand-400 hover:text-brand-700">
            {t.machinery}
          </Link>
          <Link href={`/${lang}/resources`} className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-brand-400 hover:text-brand-700">
            {t.resources}
          </Link>
          <Link href={`/${lang}/recommend`} className="rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700">
            {t.recommend}
          </Link>
        </div>
      </div>
    </div>
  )
}

