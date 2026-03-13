import { redirect } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default function Page({ params }: { params: { lang: Lang } }) {
  redirect(`/${params.lang}/services/export-lead-generation`)
}
