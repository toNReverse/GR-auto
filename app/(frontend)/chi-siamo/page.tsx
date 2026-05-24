import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import {
  Quote,
  ShieldCheck,
  Eye,
  Handshake,
  Heart,
  Sparkles,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    "GR AUTO nasce da una passione viscerale per le auto. Selezione personale, integrità totale e clienti che tornano: la nostra storia, i nostri principi, le persone con cui lavoriamo.",
}

const differenziali = [
  {
    icon: Eye,
    title: 'Selezione personale, non da catalogo',
    body: "I grandi multimarca comprano stock all'ingrosso per fare volume. Noi facciamo l'esatto contrario. Ogni singola auto del nostro parco, specialmente le più prestigiose, viene scelta e ispezionata personalmente da me, come se dovessi metterla nel mio garage privato.",
  },
  {
    icon: ShieldCheck,
    title: 'Standard non negoziabili',
    body: 'Se una vettura non supera i nostri standard estetici, meccanici e di storicità, semplicemente non entra in salone. Preferiamo un parco più piccolo ma di sostanza, piuttosto che un piazzale pieno di compromessi.',
  },
  {
    icon: Sparkles,
    title: "L'occhio dell'appassionato",
    body: "Non parliamo solo di rate, consumi o tabelle di manutenzione. Parliamo di emozioni, dettagli, storia dell'auto. È quello che cerchiamo nelle vetture che selezioniamo — e nelle persone con cui lavoriamo.",
  },
]

const clienteIdeale = [
  {
    number: '01',
    title: 'Un appassionato che sa apprezzare i dettagli',
    body: "È quello che, quando vede la vettura, nota la precisione della cucitura sul sedile, la lucentezza della vernice originale, il suono pulito del motore all'accensione. Quando sale a bordo, ha un momento di rispetto per l'oggetto. Parlare con lui significa parlare la stessa lingua: quella di chi ama i motori.",
  },
  {
    number: '02',
    title: 'Cerca competenza e valore, non solo il prezzo più basso',
    body: "È una persona consapevole. Sa che sul mercato si trovano auto apparentemente identiche a meno, ma capisce che dietro a una differenza di prezzo c'è una differenza di qualità, preparazione e trasparenza. Non viene per fare il mercante al ribasso: apprezza il lavoro di selezione fatto a monte.",
  },
  {
    number: '03',
    title: 'Rispetta il nostro lavoro come noi rispettiamo le sue esigenze',
    body: 'È un cliente educato, trasparente e diretto. Ci dice chiaramente cosa si aspetta, quali sono i suoi dubbi e le sue disponibilità. Ascolta i nostri consigli e si fida della nostra esperienza. Ed è quello con cui, alla consegna delle chiavi, si finisce per stringersi la mano davvero.',
  },
]

export default function ChiSiamoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,45,18,0.25),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 bg-brand-600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400 ring-1 ring-inset ring-brand-600/30">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Chi siamo
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            La passione per le auto,{' '}
            <span className="text-brand-500">prima di tutto</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
            GR AUTO non è nata da un calcolo commerciale, ma da una passione
            viscerale per i motori. Ogni vettura nel nostro salone è scelta
            personalmente, con l&apos;occhio di chi le auto le ama davvero.
          </p>
        </div>
      </section>

      {/* LA NOSTRA STORIA */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              La nostra storia
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Una passione che è diventata un lavoro a tempo pieno
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-base leading-relaxed text-ink-700 sm:text-lg">
            <p>
              La verità è che questa attività non è nata da un calcolo
              commerciale, ma da una{' '}
              <strong className="text-ink-900">passione viscerale</strong> che
              mi porto dentro fin da bambino: l&apos;amore per le auto e per i
              motori.
            </p>
            <p>
              Per me le auto non sono mai state semplici mezzi di trasporto.
              C&apos;è chi colleziona quadri e chi, come me, restava incantato
              a sentire il rombo di un motore, a studiare le linee di una
              carrozzeria, a respirare l&apos;odore della pelle dei sedili.
              Questa attività è nata dal bisogno naturale di trasformare quel
              fuoco che avevo dentro in un lavoro a tempo pieno.
            </p>
            <p>
              Volevo passare ogni singolo giorno della mia vita in mezzo alle
              auto, selezionando solo quelle capaci di trasmettere
              un&apos;emozione. Finché si trattava di piccole auto, era un
              hobby. La svolta è arrivata quando ho deciso di rischiare,
              investendo su vetture di nuova generazione: da lì in poi, non
              sono più tornato indietro.
            </p>
          </div>
        </div>
      </Section>

      {/* COSA CI RENDE DIVERSI */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Section>
          <SectionHeader
            eyebrow="Cosa ci rende diversi"
            title="Non siamo la classica concessionaria da grandi numeri"
            description="Se un cliente firma da noi invece di andare da un concorrente, è perché fin dal primo impatto percepisce che non puntiamo sulle vendite mordi e fuggi. Ecco perché ci scelgono."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differenziali.map((d) => (
              <li
                key={d.title}
                className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      {/* IL NOSTRO PRINCIPIO */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Il nostro principio
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Integrità totale, anche a costo di perdere una vendita
            </h2>
          </div>
          <div className="space-y-6 text-pretty text-base leading-relaxed text-ink-700 sm:text-lg">
            <p>
              Se dovessi indicare l&apos;unico principio su cui non sono
              disposto a scendere a compromessi, a costo di perdere una
              vendita, la risposta è una sola:{' '}
              <strong className="text-ink-900">
                la totale e assoluta verità sullo stato dell&apos;auto
              </strong>
              . In una parola, l&apos;integrità.
            </p>
            <p>
              Nel nostro settore c&apos;è una linea sottile ma netta tra il
              &quot;saper vendere&quot; e l&apos;omettere la verità per
              chiudere un affare. Per me questo principio è sacro e non
              negoziabile.
            </p>

            <figure className="relative rounded-2xl border-l-4 border-brand-600 bg-ink-50 p-6 sm:p-8">
              <Quote
                aria-hidden
                className="absolute right-5 top-5 h-8 w-8 text-brand-200"
              />
              <blockquote className="text-lg font-medium italic text-ink-900 sm:text-xl">
                Preferisco perdere una vendita che perdere la faccia.
              </blockquote>
              <figcaption className="mt-3 text-sm text-ink-700">
                Se un&apos;auto ha un difetto, lo dico. Anche se è un
                dettaglio che potrei tranquillamente tacere, anche se rischio
                che il cliente vada via. Perché la fiducia, una volta tradita,
                non si riconquista più — e perché voglio poter dormire sereno
                la sera.
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* IL CLIENTE IDEALE */}
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <Section>
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Il cliente ideale
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Non lo riconosci dal portafoglio, ma dall&apos;attitudine
            </h2>
            <p className="mt-3 text-pretty text-base text-white/80">
              Il nostro cliente ideale è quello che, varcando la soglia del
              salone, riaccende in noi il motivo esatto per cui abbiamo aperto
              questa attività. Tre caratteristiche fondamentali lo descrivono.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-3">
            {clienteIdeale.map((c) => (
              <li
                key={c.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="text-3xl font-bold text-brand-500">
                  {c.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>

          <figure className="mt-12 rounded-2xl border border-brand-600/30 bg-brand-600/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
              <Heart className="h-4 w-4" />
              La scena perfetta
            </div>
            <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-white sm:text-xl">
              Il momento in cui pensiamo{' '}
              <em className="text-brand-300">
                &quot;ecco perché facciamo questo lavoro&quot;
              </em>{' '}
              è quasi sempre la consegna delle chiavi. Il cliente ideale è
              quello che, prima di salire in macchina, si ferma, ci guarda
              negli occhi, stringe la mano con forza e dice:{' '}
              <strong className="font-semibold text-white">
                &quot;Grazie, era esattamente quello che volevo, gestito come
                speravo&quot;
              </strong>
              . Vederlo partire con il sorriso stampato in faccia mentre
              guarda lo specchietto retrovisore è una soddisfazione che va
              ben oltre il guadagno economico.
            </blockquote>
          </figure>
        </Section>
      </section>

      {/* DI COSA ANDIAMO FIERI */}
      <Section className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="Di cosa andiamo fieri"
          title="Non un trofeo, ma un numero e una storia"
          description="Se c'è una cosa che teniamo idealmente in cima a tutte le altre, non è un attestato formale: è una percentuale e una storia vera, che per noi valgono più di qualsiasi premio del settore."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
          {/* Stat 93% */}
          <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-white">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-600/20 blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                <TrendingUp className="h-4 w-4" />
                Il nostro numero
              </div>
              <div className="mt-4 text-7xl font-bold leading-none tracking-tight text-brand-500 sm:text-8xl">
                93<span className="text-5xl sm:text-6xl">%</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                dei nostri clienti torna da noi quando deve cambiare auto,
                oppure ci manda un amico o un familiare. In un settore in cui
                il cliente è spesso &quot;di passaggio&quot;, è il
                riconoscimento più grande che potessimo ricevere.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <Users className="h-3.5 w-3.5" />
                Tasso di ritorno e passaparola
              </div>
            </div>
          </div>

          {/* Storia */}
          <article className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Handshake className="h-4 w-4" />
              La storia di cui andiamo più fieri
            </div>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Il sogno di una vita, da padre in figlio
            </h3>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-ink-700">
              <p>
                Un cliente, un signore sulla sessantina, per tutta la vita
                aveva sognato una determinata auto sportiva italiana:
                un&apos;Alfa Romeo. Aveva lavorato sodo, messo da parte i
                risparmi e, quando finalmente era arrivato il momento, è
                venuto da noi.
              </p>
              <p>
                Ci abbiamo messo circa due mesi a trovare la vettura
                perfetta: configurazione rara, interni immacolati, pochissimi
                chilometri e tutta la cronologia dei tagliandi ufficiale.
                Quando gliel&apos;abbiamo consegnata, l&apos;emozione nei suoi
                occhi era indescrivibile.
              </p>
              <p>
                Ma la vera sorpresa è arrivata cinque mesi dopo. Un sabato
                mattina si è presentato in salone un ragazzo giovane. Era suo
                figlio. Mi ha guardato e mi ha detto:
              </p>
              <blockquote className="border-l-4 border-brand-600 bg-ink-50 px-5 py-4 text-ink-900">
                <p className="text-pretty italic">
                  &quot;Mio padre mi ha detto che se mai avessi comprato la
                  mia prima auto seria, sarei dovuto venire solo ed
                  esclusivamente da te, perché di persone che lavorano così
                  non ne esistono più. Oggi sono qui per questo&quot;.
                </p>
              </blockquote>
              <p>
                Vedere la fiducia che si tramanda di generazione in
                generazione, sapere che il nome del nostro salone è sinonimo
                di sicurezza e passione all&apos;interno di una famiglia: è
                l&apos;unica cosa che ci fa dire, ogni sera quando abbassiamo
                la serranda, che ne è valsa la pena.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* CTA FINALE */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Section>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 p-8 text-white sm:p-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,45,18,0.3),transparent_55%)]"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Vieni a trovarci, o dai un&apos;occhiata al nostro parco
                  auto.
                </h2>
                <p className="mt-3 text-pretty text-white/80">
                  La stessa cura con cui scegliamo le vetture, la mettiamo in
                  ogni cliente che entra in salone. Inizia da qui.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/veicoli">
                    <Search className="h-4 w-4" />
                    Tutti i Veicoli
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contatti">Contattaci</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </section>
    </>
  )
}
