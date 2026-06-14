/**
 * Formattazione per il mercato italiano: prezzi in EUR, km e date.
 */
/**
 * Raggruppa le migliaia con il punto (stile italiano) in modo DETERMINISTICO,
 * identico tra server (Node) e browser. Non usa Intl per evitare il mismatch
 * di idratazione di React (errore #418), causato da differenze nei caratteri
 * di spazio/separatore tra le diverse versioni ICU.
 */
export function groupThousandsIt(value: number): string {
  const rounded = Math.round(Math.abs(value))
  const digits = rounded.toString()
  let grouped = ''
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) grouped += '.'
    grouped += digits[i]
  }
  return (value < 0 ? '-' : '') + grouped
}

export function formatPrice(value: number | null | undefined): string {
  if (value == null) return '—'
  return `${groupThousandsIt(value)} €`
}

export function formatKm(value: number | null | undefined): string {
  if (value == null) return '—'
  return `${groupThousandsIt(value)} km`
}

export function formatMonthYear(
  date: string | number | Date | null | undefined,
): string {
  if (date == null || date === '') return '—'
  const d = date instanceof Date ? date : new Date(date)
  if (Number.isNaN(d.getTime())) return '—'
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return `${month}/${d.getFullYear()}`
}

export function kwToCv(kw: number): number {
  return Math.round(kw * 1.36)
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}
