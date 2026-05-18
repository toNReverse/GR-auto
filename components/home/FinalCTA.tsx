import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-600 p-8 text-white shadow-xl sm:p-12">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_55%)]"
      />
      <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Vuoi parlare con noi prima di scegliere?
          </h2>
          <p className="mt-3 max-w-lg text-pretty text-base text-white/85">
            Raccontaci cosa cerchi: marca, budget, finalità d&apos;uso. Ti chiamiamo
            noi con due o tre proposte realmente disponibili.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button
            asChild
            size="lg"
            className="border border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contatti">Scrivici</Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-ink-900 hover:bg-white/90">
            <Link href="/veicoli">Sfoglia il catalogo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
