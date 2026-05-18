import { Phone, Facebook, Instagram, Youtube, Linkedin, Music2 } from 'lucide-react'
import type { SiteSetting } from '@/payload-types'

const socialIcons: Record<
  NonNullable<SiteSetting['social']>[number]['platform'],
  React.ComponentType<{ className?: string }>
> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
  linkedin: Linkedin,
}

const socialLabels: Record<
  NonNullable<SiteSetting['social']>[number]['platform'],
  string
> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn',
}

export function TopBar({ settings }: { settings: SiteSetting }) {
  const hasPhone = Boolean(settings.phone)
  const hasSocial = Boolean(settings.social && settings.social.length > 0)

  if (!hasPhone && !hasSocial) return null

  return (
    <div className="hidden bg-ink-900 text-white/90 md:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          {settings.phone ? (
            <a
              href={`tel:${settings.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>{settings.phone}</span>
            </a>
          ) : null}
        </div>

        {hasSocial ? (
          <ul className="flex items-center gap-3">
            {settings.social!.map((s) => {
              const Icon = socialIcons[s.platform]
              const label = socialLabels[s.platform]
              return (
                <li key={s.id ?? s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid h-7 w-7 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
