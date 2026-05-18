export const dynamic = 'force-dynamic'

import { existsSync } from 'node:fs'
import path from 'node:path'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { getSiteSettings } from '@/lib/payload/queries'
import type { Media } from '@/payload-types'

const HAS_STATIC_LOGO = existsSync(path.join(process.cwd(), 'public', 'logo.png'))

function resolveLogoUrl(logo: unknown): string | null {
  if (!logo) return null
  if (typeof logo === 'object' && logo !== null && 'url' in logo) {
    const m = logo as Media
    return m.url ?? null
  }
  return null
}

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const logoUrl =
    resolveLogoUrl(settings.logo) ?? (HAS_STATIC_LOGO ? '/logo.png' : null)

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar settings={settings} />
      <Header
        siteName={settings.name}
        phone={settings.phone}
        logoUrl={logoUrl}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer settings={settings} />
      <CookieBanner />
    </div>
  )
}
