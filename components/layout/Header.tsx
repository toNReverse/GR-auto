'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
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
              <Link href="/veicoli">Tutti i Veicoli</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Apri menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-900 hover:bg-ink-100 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
          className={cn(
            'absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between border-b border-ink-200 px-4 py-4">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="GR AUTO"
              onClick={() => setOpen(false)}
            >
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="GR AUTO"
                  width={160}
                  height={48}
                  className="h-9 w-auto"
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
            <button
              type="button"
              aria-label="Chiudi menu"
              className="rounded-md p-2 text-ink-700 hover:bg-ink-100"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between rounded-md px-3 py-3 text-base font-semibold transition-colors',
                  isActive(l.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink-900 hover:bg-ink-50',
                )}
              >
                <span>{l.label}</span>
                <ChevronRight
                  className={cn(
                    'h-4 w-4',
                    isActive(l.href) ? 'text-brand-500' : 'text-ink-400',
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="space-y-2 border-t border-ink-200 px-4 py-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/veicoli" onClick={() => setOpen(false)}>
                Tutti i Veicoli
              </Link>
            </Button>
            {phone ? (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-50 px-3 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            ) : null}
          </div>
        </aside>
      </div>
    </>
  )
}
