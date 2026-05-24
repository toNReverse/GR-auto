import Image from 'next/image'
import { Phone, MapPin, Instagram } from 'lucide-react'
import type { SiteSetting } from '@/payload-types'

const SUBITO_URL = 'https://impresapiu.subito.it/shops/54562-gr-auto'
const INSTAGRAM_FALLBACK = 'https://www.instagram.com/gr_auto__/'
const ADDRESS = 'Via Galermo, 181, 95123 Catania CT'

export function TopBar({ settings }: { settings: SiteSetting }) {
  const instagramUrl =
    settings.social?.find((s) => s.platform === 'instagram')?.url ||
    INSTAGRAM_FALLBACK

  if (!settings.phone) return null

  return (
    <div className="hidden border-b border-ink-200 bg-white text-ink-700 md:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${settings.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-ink-900"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span>{settings.phone}</span>
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>{ADDRESS}</span>
          </span>
        </div>

        <ul className="flex items-center gap-2">
          <li>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-7 w-7 place-items-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </li>
          <li>
            <a
              href={SUBITO_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Subito"
              className="grid h-7 w-7 place-items-center rounded-full transition-opacity hover:opacity-80"
            >
              <Image
                src="/subito-logo.png"
                alt=""
                width={20}
                height={20}
                className="h-4 w-4 rounded-sm"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
