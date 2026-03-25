import { redirect } from 'next/navigation';
export default async function RedirectPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  redirect(`/${lang}/machinery`);
}
