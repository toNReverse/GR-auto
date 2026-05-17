type StatItem = { value: number | string; label: string; suffix?: string }

export function Stats({
  vehicles,
  clients = 1200,
  reviews = 350,
  sold = 2400,
}: {
  vehicles: number
  clients?: number
  reviews?: number
  sold?: number
}) {
  const items: StatItem[] = [
    { value: vehicles, label: 'Veicoli disponibili' },
    { value: clients, label: 'Clienti soddisfatti', suffix: '+' },
    { value: reviews, label: 'Recensioni positive', suffix: '+' },
    { value: sold, label: 'Auto vendute', suffix: '+' },
  ]

  const formatter = new Intl.NumberFormat('it-IT')

  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 lg:grid-cols-4">
      {items.map((it) => (
        <li
          key={it.label}
          className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center"
        >
          <span className="text-4xl font-semibold tracking-tight text-ink-900 tabular-nums sm:text-5xl">
            {typeof it.value === 'number' ? formatter.format(it.value) : it.value}
            {it.suffix ? (
              <span className="text-brand-600">{it.suffix}</span>
            ) : null}
          </span>
          <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
            {it.label}
          </span>
        </li>
      ))}
    </ul>
  )
}
