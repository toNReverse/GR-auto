export const dynamic = 'force-dynamic'

import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { getSiteSettings } from '@/lib/payload/queries'

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar settings={settings} />
      <Header siteName={settings.name} phone={settings.phone} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer settings={settings} />
      <CookieBanner />
    </div>
  )
}
