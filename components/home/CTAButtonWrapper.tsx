'use client'
import { ButtonLink } from '@/components/ui/Button'
import { trackMachineCtaClick } from '@/lib/analytics'
import { Lang } from '@/lib/i18n'

export default function CTAButtonWrapper({ lang, label }: { lang: Lang; label: string }) {
  return (
    <ButtonLink
      href={`/${lang}/recommend`}
      size="lg"
      onClick={() =>
        trackMachineCtaClick({
          product_cluster: 'general',
          cta_position: 'cta_section',
          cta_label: label,
          lang,
          page_type: 'home',
        })
      }
    >
      {label}
    </ButtonLink>
  )
}
