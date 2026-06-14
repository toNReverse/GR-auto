import { MessageSquare, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils/format'
import type { Vehicle } from '@/payload-types'

export function VehicleSidebar({
  vehicle,
  whatsapp,
  phone,
  email,
}: {
  vehicle: Vehicle
  whatsapp?: string | null
  phone?: string | null
  email?: string | null
}) {
  const waMessage = encodeURIComponent(
    `Buongiorno, sono interessato/a a ${vehicle.title} (€ ${vehicle.price.toLocaleString('it-IT')}). Posso avere maggiori informazioni?`,
  )
  const waUrl = whatsapp
    ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${waMessage}`
    : undefined
  const emailSubject = encodeURIComponent(
    `Richiesta informazioni: ${vehicle.title}`,
  )

  return (
    <aside className="space-y-4">
      <div className="rounded-xl border border-ink-200 bg-white p-5">
        {vehicle.priceStrikethrough ? (
          <div className="text-sm text-ink-500 line-through">
            {formatPrice(vehicle.priceStrikethrough)}
          </div>
        ) : null}
        <div className="text-3xl font-bold tabular-nums text-ink-900">
          {formatPrice(vehicle.price)}
        </div>
        {vehicle.vatDeductible ? (
          <div className="mt-1 text-xs font-medium text-emerald-700">
            IVA esposta detraibile
          </div>
        ) : null}
        {vehicle.financingMonthly ? (
          <div className="mt-2 text-sm text-ink-700">
            o da{' '}
            <strong className="text-ink-900">
              {formatPrice(vehicle.financingMonthly)}/mese
            </strong>
          </div>
        ) : null}

        <div className="mt-5 grid gap-2">
          {phone ? (
            <Button asChild>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>
                <Phone className="h-4 w-4" />
                Chiama: {phone}
              </a>
            </Button>
          ) : null}
          {waUrl ? (
            <Button asChild variant="secondary">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          ) : null}
          {email ? (
            <Button asChild variant="outline">
              <a href={`mailto:${email}?subject=${emailSubject}`}>
                <Mail className="h-4 w-4" />
                Scrivici una email
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </aside>
  )
}
