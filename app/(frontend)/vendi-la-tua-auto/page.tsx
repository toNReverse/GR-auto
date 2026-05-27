import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { CheckCircle2, Phone } from 'lucide-react'
import { getSiteSettings } from '@/lib/payload/queries'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Vendi la tua auto',
  description:
    'Valutazione gratuita della tua auto entro la giornata. Chiamaci per una stima al telefono, senza impegno.',
}

const steps = [
  {
    title: 'Chiamaci',
    body: 'Bastano marca, modello, anno e km. Ti diamo subito una prima stima al telefono.',
  },
  {
    title: 'Valutazione entro 24h',
    body: 'Stimiamo il valore in base allo stato e alla nostra rete di canali.',
  },
  {
    title: 'Ritiro o permuta',
    body: 'Ti proponiamo ritiro diretto o permuta su una delle auto in catalogo.',
  },
]

export default async function VendiPage() {
  const settings = await getSiteSettings()

  return (
    <Section className="py-12 sm:py-16">
      <SectionHeader
        eyebrow="Permuta · Ritiro"
        title="Vendi o permuta la tua auto"
        description="Valutazione trasparente, gratuita e senza impegno. Chiamaci e ti diamo una prima stima al volo."
      />

      {settings.phone ? (
        <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-md">
              <Phone className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">
                Chiamaci per la valutazione gratuita
              </h3>
              <p className="mt-1 text-sm text-ink-700">
                Ti rispondiamo subito negli orari di apertura. Nessun obbligo,
                nessun modulo da compilare.
              </p>
              <a
                href={`tel:${settings.phone.replace(/\s/g, '')}`}
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-brand-700 hover:text-brand-800 sm:text-3xl"
              >
                {settings.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-xl border border-ink-200 bg-white p-5"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                {i + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-ink-700">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-xl bg-ink-50 p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-ink-900">
          Cosa controlliamo prima dell&apos;offerta
        </h3>
        <ul className="mt-3 grid grid-cols-1 gap-1.5 text-sm text-ink-700 sm:grid-cols-2">
          {[
            'Storia tagliandi e manutenzione',
            'Stato meccanico ed elettronico',
            'Carrozzeria e interni',
            'Documenti, passaggi proprietà',
            'Optional e dotazioni',
            'Andamento del mercato del modello',
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
