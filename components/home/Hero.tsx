'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Search, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import type { Make } from '@/payload-types'
import { fuelLabels } from '@/lib/utils/labels'

const priceOptions = [10000, 15000, 20000, 25000, 30000, 40000, 60000]

const heroSlides = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
]

const SLIDE_INTERVAL_MS = 5000

export function Hero({ makes, totalCount }: { makes: Make[]; totalCount: number }) {
  const router = useRouter()
  const [marca, setMarca] = useState('')
  const [prezzoMax, setPrezzoMax] = useState('')
  const [fuel, setFuel] = useState('')
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (heroSlides.length < 2) return
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (marca) params.set('marca', marca)
    if (prezzoMax) params.set('prezzo_max', prezzoMax)
    if (fuel) params.set('alimentazione', fuel)
    router.push(`/veicoli?${params.toString()}`)
  }

  return (
    <section className="relative bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 text-white sm:overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        {heroSlides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === slide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/70 to-ink-900/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,45,18,0.25),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1 bg-brand-600"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:gap-10 sm:px-6 sm:py-32 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-44">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400 ring-1 ring-inset ring-brand-600/30">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {totalCount} veicoli pronti consegna
          </span>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Scegli la tua auto <span className="text-brand-500">ideale</span>.
          </h1>
          <p className="mt-3 max-w-xl text-pretty text-sm text-white/80 sm:mt-4 sm:text-base lg:text-lg">
            Auto usate, km 0 e aziendali controllate punto per punto. Garanzia,
            finanziamento su misura e permuta valutata in giornata.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/90 sm:mt-6 sm:gap-x-6 sm:text-sm">
            <li className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" aria-hidden />
              Garanzia inclusa
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" aria-hidden />
              Finanziamento su misura
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" aria-hidden />
              Permuta valutata
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative z-20 -mb-44 flex-1 rounded-2xl border-t-4 border-brand-600 bg-white p-4 text-ink-900 shadow-2xl ring-1 ring-black/5 sm:-mb-0 sm:p-6"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-900 sm:text-sm">
            Trova la tua auto
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
            <label className="block text-xs">
              <span className="mb-1 block text-ink-700">Marca</span>
              <Select value={marca} onChange={(e) => setMarca(e.target.value)}>
                <option value="">Tutte</option>
                {makes.map((m) => (
                  <option key={m.id} value={m.slug}>
                    {m.name}
                  </option>
                ))}
              </Select>
            </label>
            <label className="block text-xs">
              <span className="mb-1 block text-ink-700">
                <span className="sm:hidden">Prezzo</span>
                <span className="hidden sm:inline">Prezzo massimo</span>
              </span>
              <Select
                value={prezzoMax}
                onChange={(e) => setPrezzoMax(e.target.value)}
              >
                <option value="">Qualsiasi</option>
                {priceOptions.map((p) => (
                  <option key={p} value={p}>
                    fino a € {p.toLocaleString('it-IT')}
                  </option>
                ))}
              </Select>
            </label>
            <label className="block text-xs">
              <span className="mb-1 block text-ink-700">
                <span className="sm:hidden">Alim.</span>
                <span className="hidden sm:inline">Alimentazione</span>
              </span>
              <Select value={fuel} onChange={(e) => setFuel(e.target.value)}>
                <option value="">Tutte</option>
                {Object.entries(fuelLabels).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </Select>
            </label>
          </div>
          <Button type="submit" size="lg" className="mt-4 w-full sm:mt-5">
            <Search className="h-4 w-4" />
            Cerca veicoli
          </Button>
        </form>
      </div>
    </section>
  )
}
