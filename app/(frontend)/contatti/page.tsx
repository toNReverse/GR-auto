import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

import { Section, SectionHeader } from '@/components/ui/section'
import { LocationMapLazy } from '@/components/vehicles/LocationMapLazy'
import { getLocations, getSiteSettings } from '@/lib/payload/queries'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Chiamaci, scrivici su WhatsApp o passa in concessionaria. Siamo a tua disposizione per ogni informazione.',
}

export default async function ContattiPage() {
  const [site, locations] = await Promise.all([
    getSiteSettings(),
    getLocations(),
  ])

  const whatsappUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`
    : null

  return (
    <Section className="py-12 sm:py-16">
      <SectionHeader
        eyebrow="Contatti"
        title="Parliamone"
        description="Chiamaci, scrivici su WhatsApp o vieni a trovarci direttamente in concessionaria."
      />

      {site.phone ? (
        <a
          href={`tel:${site.phone.replace(/\s/g, '')}`}
          className="mb-8 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-5 text-white shadow-md transition-transform active:scale-[0.99] lg:hidden"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/20">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Chiamaci ora
            </div>
            <div className="truncate text-xl font-bold tracking-tight">
              {site.phone}
            </div>
          </div>
        </a>
      ) : null}

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
          Canali rapidi
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {site.phone ? (
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-ink-700">Chiama</div>
                <div className="truncate text-sm font-bold text-ink-900">
                  {site.phone}
                </div>
              </div>
            </a>
          ) : null}

          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white shadow-md">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-ink-700">
                  WhatsApp
                </div>
                <div className="truncate text-sm font-bold text-ink-900">
                  Scrivici subito
                </div>
              </div>
            </a>
          ) : null}

          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-ink-400 hover:bg-ink-50"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-900 text-white shadow-md">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-ink-700">Email</div>
                <div className="truncate text-sm font-bold text-ink-900">
                  {site.email}
                </div>
              </div>
            </a>
          ) : null}
        </div>
      </div>

      {locations.length > 0 ? (
        <div className="mt-10 space-y-6 lg:mt-12">
          {locations.map((loc) => {
            const fullAddress = `${loc.address}, ${loc.zip ?? ''} ${loc.city ?? ''} ${loc.province ?? ''}`.trim()
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
            return (
              <div
                key={loc.id}
                className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
              >
                <div className="flex flex-col justify-between gap-6 p-6 lg:p-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">
                        {loc.name}
                      </h3>
                    </div>

                    <div className="mt-5 space-y-3 text-sm">
                      <div className="text-ink-800">
                        {loc.address}
                        <br />
                        {loc.zip} {loc.city} ({loc.province})
                      </div>

                      {loc.phone ? (
                        <a
                          href={`tel:${loc.phone}`}
                          className="inline-flex items-center gap-2 font-medium text-ink-800 hover:text-brand-700"
                        >
                          <Phone className="h-4 w-4 text-brand-600" />
                          {loc.phone}
                        </a>
                      ) : null}

                      {loc.openingHours && loc.openingHours.length > 0 ? (
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          <ul className="space-y-0.5 text-ink-800">
                            {loc.openingHours.map((o) => (
                              <li key={o.id ?? o.days}>
                                <strong className="text-ink-900">
                                  {o.days}:
                                </strong>{' '}
                                {o.hours}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 sm:w-auto sm:self-start"
                  >
                    <Navigation className="h-4 w-4" />
                    Indicazioni stradali
                  </a>
                </div>

                {loc.coordinates ? (
                  <div className="min-h-[320px] lg:min-h-[420px]">
                    <LocationMapLazy location={loc} />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      ) : null}
    </Section>
  )
}
