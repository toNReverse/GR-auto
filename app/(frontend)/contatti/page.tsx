import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

import { Section, SectionHeader } from '@/components/ui/section'
import { LeadForm } from '@/components/forms/LeadForm'
import { LocationMapLazy } from '@/components/vehicles/LocationMapLazy'
import { getLocations, getSiteSettings } from '@/lib/payload/queries'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Scrivici, chiamaci o passa in concessionaria. Siamo a tua disposizione per ogni informazione.',
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
        description="Risposta entro la giornata lavorativa successiva. Per richieste urgenti, telefono o WhatsApp."
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

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
            Canali rapidi
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {site.phone ? (
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-ink-700">
                    Chiama
                  </div>
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
                  <div className="text-xs font-semibold text-ink-700">
                    Email
                  </div>
                  <div className="truncate text-sm font-bold text-ink-900">
                    {site.email}
                  </div>
                </div>
              </a>
            ) : null}
          </div>
        </div>

        <div className="order-2 lg:order-1 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="rounded-xl border border-ink-200 bg-white p-5">
            <h3 className="mb-4 text-base font-semibold text-ink-900">
              Scrivici un messaggio
            </h3>
            <LeadForm type="info" submitLabel="Invia messaggio" withMessage />
          </div>
        </div>

        <div className="order-3 space-y-6 lg:col-start-2 lg:row-start-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="overflow-hidden rounded-xl border border-ink-200 bg-white"
            >
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink-900">
                  {loc.name}
                </h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                    <div>
                      {loc.address}
                      <br />
                      {loc.zip} {loc.city} ({loc.province})
                    </div>
                  </div>
                  {loc.phone ? (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-brand-700" />
                      <a
                        className="hover:text-brand-700"
                        href={`tel:${loc.phone}`}
                      >
                        {loc.phone}
                      </a>
                    </div>
                  ) : null}
                  {loc.openingHours && loc.openingHours.length > 0 ? (
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                      <ul>
                        {loc.openingHours.map((o) => (
                          <li key={o.id ?? o.days}>
                            <strong>{o.days}:</strong> {o.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
              {loc.coordinates ? (
                <div className="border-t border-ink-200">
                  <LocationMapLazy location={loc} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
