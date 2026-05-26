import Link from 'next/link'
import { ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SellYourCar() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-6 text-white sm:p-12">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(220,45,18,0.25),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-brand-600"
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-start gap-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-md sm:h-14 sm:w-14">
            <ArrowLeftRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Permuta e ritiro
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Vendi la tua auto.
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-base text-white/75">
              Valutazione gratuita in giornata, ritiro veloce e pagamento sicuro.
              Anche se non acquisti da noi.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button asChild size="lg">
            <Link href="/vendi-la-tua-auto">Richiedi valutazione</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
