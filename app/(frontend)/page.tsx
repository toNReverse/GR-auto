import Link from 'next/link'

export const dynamic = 'force-dynamic'

import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { Services } from '@/components/home/Services'
import { SellYourCar } from '@/components/home/SellYourCar'
import { FinalCTA } from '@/components/home/FinalCTA'
import { GoogleReviews } from '@/components/home/GoogleReviews'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { VehicleCard } from '@/components/vehicles/VehicleCard'
import {
  getFeaturedVehicles,
  getMakes,
  getPublishedVehicles,
} from '@/lib/payload/queries'

export default async function HomePage() {
  const [featured, makes, all] = await Promise.all([
    getFeaturedVehicles(),
    getMakes(),
    getPublishedVehicles(),
  ])

  return (
    <>
      <Hero makes={makes} totalCount={all.length} />

      {featured.length > 0 ? (
        <Section className="pb-10 pt-48 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="In vetrina"
              title="Veicoli in evidenza"
              description="Le proposte del momento, scelte per qualità, prezzo o disponibilità immediata."
            />
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link href="/veicoli">Vedi tutti i veicoli →</Link>
            </Button>
          </div>
          <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
            {featured.map((v) => (
              <li
                key={v.id}
                className="h-full w-72 shrink-0 snap-start sm:w-auto sm:shrink"
              >
                <VehicleCard vehicle={v} />
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:hidden">
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/veicoli">Vedi tutti i veicoli →</Link>
            </Button>
          </div>
        </Section>
      ) : null}

      <Section className="py-10">
        <SellYourCar />
      </Section>

      <Section className="py-8 sm:py-12">
        <GoogleReviews />
      </Section>

      <Section className="py-10">
        <SectionHeader
          eyebrow="Servizi"
          title="Quello che facciamo, oltre alla vendita"
        />
        <Services />
      </Section>

      <Section className="py-10">
        <SectionHeader
          eyebrow="Esplora il catalogo"
          title="Trova quello che fa per te"
          description="Filtra per carrozzeria o alimentazione: ti portiamo direttamente al sotto-insieme giusto."
        />
        <CategoryGrid />
      </Section>

      <Section className="pb-10 pt-4">
        <FinalCTA />
      </Section>
    </>
  )
}
