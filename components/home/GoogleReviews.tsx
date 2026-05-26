type Review = {
  name: string
  initial: string
  avatarClass: string
  timeAgo: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Dario pietro Consoli',
    initial: 'D',
    avatarClass: 'bg-stone-600',
    timeAgo: '7 mesi fa',
    text:
      'Ho acquistato diverse auto presso questo autosalone, Gabriele persona veramente squisita e disponibile pronto a soddisfare tutte le esigenze del cliente, esperienza unica, trattamento davvero professionale',
  },
  {
    name: 'Sonila Bruhamaj',
    initial: 'S',
    avatarClass: 'bg-orange-500',
    timeAgo: '1 anno fa',
    text:
      'Ho acquistato una Fiat tipo, personale davvero gentile, Gabriele il proprietario molto disponibile e pronto a soddisfare le mie esigenze, consigliatissimo, auto davvero bella',
  },
  {
    name: 'Nancy Silenzio',
    initial: 'N',
    avatarClass: 'bg-purple-500',
    timeAgo: '1 anno fa',
    text:
      'Auto di alto livello e di tutte le marche e dimensioni, parco macchine molto fornito, professionisti del settore',
  },
  {
    name: 'Giuseppe Raciti',
    initial: 'G',
    avatarClass: 'bg-stone-500',
    timeAgo: '4 settimane fa',
    text:
      'Sono cliente di questo autosalone da circa un anno, io e i miei familiari abbiamo acquistato diverse autovetture e ci siamo trovati benissimo soprattutto con il titolare in quanto particolarmente serio professionale e preciso. Consiglio a tutti questa concessionaria',
  },
  {
    name: 'Cettina La Rosa',
    initial: 'C',
    avatarClass: 'bg-orange-500',
    timeAgo: '1 mese fa',
    text:
      "La concessionaria GR AUTO, dove ho acquistato un'auto Fiat Tipo anno 2021. Siamo stati seguiti da Gabriele ragazzo preparato e gentile che ci ha guidato nell'acquisto della vettura in ottime condizioni",
  },
  {
    name: 'Marco La Rosa',
    initial: 'M',
    avatarClass: 'bg-fuchsia-700',
    timeAgo: '1 mese fa',
    text:
      'Azienda seria. Ho acquistato una renault scenic bellissima tutta tagliandata e curata nei dettagli, personale incredibile con esperienza nel settore. Felicissimo del mio acquisto tornerò e consiglierò ad amici',
  },
]

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FBBC04"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
      />
    </svg>
  )
}

function VerifiedBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1A73E8"
        d="M12 1l2.39 1.74 2.96-.05.95 2.81 2.41 1.72-.91 2.82.91 2.82-2.41 1.72-.95 2.81-2.96-.05L12 17.08l-2.39-1.74-2.96.05-.95-2.81-2.41-1.72.91-2.82-.91-2.82 2.41-1.72.95-2.81 2.96.05L12 1z"
      />
      <path
        fill="#fff"
        d="M10.6 13.4l-2.3-2.3 1.4-1.4.9.9 3.7-3.7 1.4 1.4z"
      />
    </svg>
  )
}

export function GoogleReviews() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-4 py-10 sm:px-8 sm:py-16 lg:px-12">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,45,18,0.18),transparent_55%)]"
      />
      <div className="relative">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Recensioni Google
          </span>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cosa dicono i nostri clienti
          </h2>
          <p className="mt-3 text-pretty text-base text-white/75">
            La fiducia di chi ha scelto GR AUTO. Recensioni verificate dai nostri
            clienti su Google.
          </p>
        </div>

        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-6 pr-4 scroll-pl-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-1 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="relative flex h-full w-[19rem] shrink-0 snap-start flex-col rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:w-auto sm:shrink"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-base font-semibold text-white ${r.avatarClass}`}
                  aria-hidden
                >
                  {r.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-ink-900">
                    {r.name}
                  </div>
                  <div className="mt-0.5 text-xs text-ink-500">{r.timeAgo}</div>
                </div>
                <GoogleLogo className="h-5 w-5 shrink-0" />
              </div>

              <div className="mt-3 flex items-center gap-1">
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <VerifiedBadge className="ml-1 h-4 w-4" />
              </div>

              <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-ink-700">
                {r.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <GoogleLogo className="h-5 w-5" />
            <span className="font-semibold text-white">5,0</span>
            <div className="flex items-center gap-0.5">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
            </div>
          </div>
          <span className="text-white/60">
            Basato sulle recensioni Google di GR AUTO di Gabriele Russo
          </span>
        </div>
      </div>
    </div>
  )
}
