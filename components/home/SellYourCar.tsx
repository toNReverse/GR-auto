import Link from 'next/link'
import { ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SellYourCar() {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 p-8 sm:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-brand-100 sm:grid">
            <ArrowLeftRight className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Permuta e ritiro
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Vuoi vendere la tua auto?
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-base text-ink-700">
              Valutazione gratuita in giornata, ritiro veloce e pagamento sicuro.
              Anche se non acquisti da noi.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button asChild size="lg">
            <Link href="/vendi-la-tua-auto">Richiedi valutazione</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
