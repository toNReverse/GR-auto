import Link from 'next/link'
import type { SiteSetting } from '@/payload-types'

const SUBITO_URL = 'https://impresapiu.subito.it/shops/54562-gr-auto'
const INSTAGRAM_URL = 'https://www.instagram.com/gr_auto__/'
const ADDRESS = 'Via Galermo, 181 — 95123 Catania (CT)'

type SocialKey = 'facebook' | 'instagram' | 'whatsapp' | 'tiktok'

function findSocialUrl(
  settings: SiteSetting,
  platform: NonNullable<SiteSetting['social']>[number]['platform'],
): string | null {
  const item = settings.social?.find((s) => s.platform === platform)
  return item?.url || null
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5H16.5V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1V10.5H7.5v3h2.5V21h3.5z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.2 5 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-3.9-.1-.1-1-1.4-1-2.6 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.7 1.9.1.1.1.3 0 .5l-.3.4-.3.4c-.1.1-.2.2-.1.5.1.3.6 1 1.3 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.6-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3 0 .1 0 .8-.2 1.4z" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3a5.6 5.6 0 0 0 4.5 4.5V11a8.8 8.8 0 0 1-4.5-1.4v6.4a5.5 5.5 0 1 1-5.5-5.5c.3 0 .5 0 .8.1v3.4a2.1 2.1 0 1 0 1.5 2V3h3.2z" />
    </svg>
  )
}

const socialStyles: Record<SocialKey, { bg: string; label: string; Icon: typeof FacebookIcon }> = {
  facebook: { bg: 'bg-[#1877F2]', label: 'Facebook', Icon: FacebookIcon },
  instagram: {
    bg: 'bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  whatsapp: { bg: 'bg-[#25D366]', label: 'WhatsApp', Icon: WhatsappIcon },
  tiktok: { bg: 'bg-black', label: 'TikTok', Icon: TiktokIcon },
}

function SubitoLogo() {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FF6F00] text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="5 12 10 17 19 7" />
        </svg>
      </span>
      <span className="text-2xl font-bold tracking-tight text-[#FF6F00]">subito</span>
    </div>
  )
}

export function Footer({ settings }: { settings: SiteSetting }) {
  const year = new Date().getFullYear()

  const facebookUrl = findSocialUrl(settings, 'facebook')
  const instagramUrl = findSocialUrl(settings, 'instagram') || INSTAGRAM_URL
  const tiktokUrl = findSocialUrl(settings, 'tiktok')
  const whatsappUrl = settings.whatsapp
    ? `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`
    : null

  const socials: { key: SocialKey; url: string }[] = [
    facebookUrl ? { key: 'facebook' as const, url: facebookUrl } : null,
    { key: 'instagram' as const, url: instagramUrl },
    whatsappUrl ? { key: 'whatsapp' as const, url: whatsappUrl } : null,
    tiktokUrl ? { key: 'tiktok' as const, url: tiktokUrl } : null,
  ].filter((x): x is { key: SocialKey; url: string } => x !== null)

  const companyName = 'GR AUTO'

  return (
    <footer className="mt-24 bg-ink-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
        {/* Colonna 1 — Azienda + Orari */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            {companyName}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {settings.footerText ||
              `${companyName} è il tuo concessionario di fiducia per la vendita di auto usate, km 0 e aziendali. Selezioniamo personalmente ogni veicolo per offrirti qualità, garanzia e finanziamento su misura. Permuta valutata in giornata.`}
          </p>

          <h4 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
            Orari di apertura
          </h4>
          <div className="mt-4 space-y-1 text-sm text-white/70">
            <p>Lun – Ven: 09:00 – 13:00 | 15:30 – 19:30</p>
            <p>Sabato: 09:00 – 19:30</p>
            <p>Domenica: Chiuso</p>
          </div>
        </div>

        {/* Colonna 2 — Card Subito */}
        <div className="flex">
          <a
            href={SUBITO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 text-center text-ink-900 shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <SubitoLogo />
            <p className="mt-4 text-lg font-semibold text-ink-900">
              Visita il nostro shop
            </p>
            <span className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-brand-600 px-6 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700">
              Vai allo shop
            </span>
          </a>
        </div>

        {/* Colonna 3 — Contattaci */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            Contattaci
          </h3>

          {socials.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ key, url }) => {
                const cfg = socialStyles[key]
                const Icon = cfg.Icon
                return (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={cfg.label}
                      className={`grid h-12 w-12 place-items-center rounded-xl text-white shadow-md transition-transform hover:-translate-y-0.5 ${cfg.bg}`}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : null}

          <div className="mt-7 space-y-1 text-sm text-white/80">
            <p className="font-bold uppercase tracking-wider text-white">{companyName}</p>
            <p>{ADDRESS}</p>
            {settings.vat ? (
              <p>
                <span className="font-semibold uppercase tracking-wider">Partita IVA:</span>{' '}
                {settings.vat}
              </p>
            ) : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link className="text-white/80 hover:text-brand-500" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-white/80 hover:text-brand-500" href="/cookie">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {year} {companyName}. {settings.rea ? `REA ${settings.rea} · ` : ''}Tutti i diritti riservati.
          </p>
          {socials.length > 0 ? (
            <ul className="flex items-center gap-3">
              {socials.map(({ key, url }) => {
                const cfg = socialStyles[key]
                const Icon = cfg.Icon
                return (
                  <li key={`bottom-${key}`}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={cfg.label}
                      className="grid h-7 w-7 place-items-center rounded-full text-white/60 transition-colors hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
