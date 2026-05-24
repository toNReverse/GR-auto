'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
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
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 text-white">
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
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-44">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400 ring-1 ring-inset ring-brand-600/30">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {totalCount} veicoli pronti consegna
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Scegli la tua auto <span className="text-brand-500">ideale</span>.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
            Auto usate, km 0 e aziendali controllate punto per punto. Garanzia,
            finanziamento su misura e permuta valutata in giornata.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex-1 rounded-2xl border-t-4 border-brand-600 bg-white p-5 text-ink-900 shadow-2xl ring-1 ring-black/5 sm:p-6"
        >
          <div className="text-sm font-semibold uppercase tracking-wider text-ink-900">Trova la tua auto</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
              <span className="mb-1 block text-ink-700">Prezzo massimo</span>
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
              <span className="mb-1 block text-ink-700">Alimentazione</span>
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
          <Button type="submit" size="lg" className="mt-5 w-full">
            <Search className="h-4 w-4" />
            Cerca veicoli
          </Button>
        </form>
      </div>
    </section>
  )
}
