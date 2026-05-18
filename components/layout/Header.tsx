'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/veicoli', label: 'Veicoli' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/vendi-la-tua-auto', label: 'Vendi la tua auto' },
  { href: '/contatti', label: 'Contatti' },
]

export function Header({
  siteName,
  phone,
  logoUrl,
}: {
  siteName: string
  phone?: string | null
  logoUrl?: string | null
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="GR AUTO">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="GR AUTO"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          ) : (
            <span className="flex flex-col leading-none">
              <span className="text-lg font-extrabold uppercase tracking-wider text-ink-900">
                GR <span className="text-brand-600">AUTO</span>
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                Vendita auto e moto
              </span>
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                isActive(l.href)
                  ? 'text-brand-600 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:bg-brand-600'
                  : 'text-ink-700 hover:text-brand-600',
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm">
            <Link href="/veicoli">Sfoglia veicoli</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-900 md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-ink-200 bg-white md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide hover:bg-ink-100',
                isActive(l.href) ? 'text-brand-600' : 'text-ink-900',
              )}
            >
              {l.label}
            </Link>
          ))}
          {phone ? (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
