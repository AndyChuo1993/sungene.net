import { Lang } from '@/lib/i18n'
import { permanentRedirect } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  permanentRedirect(`/${lang}/qualified-b2b-leads`)
}
