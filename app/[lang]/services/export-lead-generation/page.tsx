import { Lang } from '@/lib/i18n'
import ServiceSeoPage from '@/components/ServiceSeoPage'
import { coreServices } from '@/data/coreServices'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const service = coreServices.exportLeadGeneration
  const path = service.path || '/services/export-lead-generation'
  return {
    title: service.title[lang],
    description: service.description[lang],
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        zh: `/zh${path}`,
        en: `/en${path}`,
        'x-default': `/en${path}`,
      },
    },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const service = coreServices.exportLeadGeneration
  const withLang = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withLang} />
}

