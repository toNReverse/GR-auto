import Link from 'next/link'
import { Car, Truck } from 'lucide-react'
import { bodyTypeLabels, fuelLabels } from '@/lib/utils/labels'

const bodyTiles: { key: string; label: string; emoji: string }[] = [
  { key: 'suv', label: bodyTypeLabels.suv, emoji: '🚙' },
  { key: 'berlina', label: bodyTypeLabels.berlina, emoji: '🚗' },
  { key: 'station-wagon', label: bodyTypeLabels['station-wagon'], emoji: '🚘' },
  { key: 'city-car', label: bodyTypeLabels['city-car'], emoji: '🚕' },
  { key: 'crossover', label: bodyTypeLabels.crossover, emoji: '🛻' },
  { key: 'cabrio', label: bodyTypeLabels.cabrio, emoji: '🏎️' },
]

const fuelTiles: { key: string; label: string }[] = [
  { key: 'benzina', label: fuelLabels.benzina },
  { key: 'diesel', label: fuelLabels.diesel },
  { key: 'ibrida', label: fuelLabels.ibrida },
  { key: 'ibrida-plug-in', label: fuelLabels['ibrida-plug-in'] },
  { key: 'elettrica', label: fuelLabels.elettrica },
  { key: 'gpl', label: fuelLabels.gpl },
]

export function CategoryGrid() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Per tipo veicolo
        </h3>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <Link
              href="/veicoli?tipo=civile"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md transition-transform group-hover:scale-105">
                <Car className="h-7 w-7" />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-semibold text-ink-900">
                  Auto
                </span>
                <span className="mt-0.5 block text-sm text-ink-600">
                  Berline, SUV, city car, station wagon
                </span>
              </span>
              <span
                aria-hidden
                className="text-xl text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600"
              >
                →
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/veicoli?tipo=commerciale"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink-900 text-white shadow-md transition-transform group-hover:scale-105">
                <Truck className="h-7 w-7" />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-semibold text-ink-900">
                  Furgoni
                </span>
                <span className="mt-0.5 block text-sm text-ink-600">
                  Veicoli commerciali e da lavoro
                </span>
              </span>
              <span
                aria-hidden
                className="text-xl text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600"
              >
                →
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Per carrozzeria
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {bodyTiles.map((b) => (
              <li key={b.key}>
                <Link
                  href={`/veicoli?carrozzeria=${b.key}`}
                  className="flex h-24 flex-col items-start justify-between rounded-xl border border-ink-200 bg-white p-4 text-sm font-medium text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-sm"
                >
                  <span aria-hidden className="text-2xl">
                    {b.emoji}
                  </span>
                  {b.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Per alimentazione
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {fuelTiles.map((f) => (
              <li key={f.key}>
                <Link
                  href={`/veicoli?alimentazione=${f.key}`}
                  className="flex h-24 flex-col items-start justify-end rounded-xl border border-ink-200 bg-white p-4 text-sm font-medium text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-sm"
                >
                  {f.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
