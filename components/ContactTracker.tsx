'use client'
import { trackWhatsappClick, trackContactClick } from '@/lib/analytics'
import { Lang } from '@/lib/i18n'

export function WhatsAppLink({ lang, sourcePage, children, className }: { lang: Lang; sourcePage: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href="https://wa.me/8618144132078"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsappClick({ lang, source_page: sourcePage, cta_position: 'sidebar' })}
    >
      {children}
    </a>
  )
}

export function EmailLink({ lang, sourcePage, children, className }: { lang: Lang; sourcePage: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href="mailto:contact@sungene.net"
      className={className}
      onClick={() => trackContactClick({ lang, source_page: sourcePage, contact_type: 'email', cta_position: 'sidebar' })}
    >
      {children}
    </a>
  )
}
