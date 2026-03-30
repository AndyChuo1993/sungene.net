'use client'
import { ButtonLink } from '@/components/ui/Button'
import { trackMachineCtaClick } from '@/lib/analytics'
import { Lang } from '@/lib/i18n'

export default function HeroCtaWrapper({ lang, btnQuote, btnCatalog }: { lang: Lang; btnQuote: string; btnCatalog: string }) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <ButtonLink
        href={`/${lang}/recommend`}
        size="lg"
        className="shadow-lg shadow-accent-700/30"
        onClick={() => trackMachineCtaClick({ product_cluster: 'general', cta_position: 'hero', cta_label: btnQuote, lang, page_type: 'home' })}
      >
        {btnQuote}
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
      </ButtonLink>
      <ButtonLink
        href={`/${lang}/machinery`}
        variant="secondary"
        size="lg"
        className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20"
        onClick={() => trackMachineCtaClick({ product_cluster: 'general', cta_position: 'hero', cta_label: btnCatalog, lang, page_type: 'home' })}
      >
        {btnCatalog}
      </ButtonLink>
    </div>
  )
}
