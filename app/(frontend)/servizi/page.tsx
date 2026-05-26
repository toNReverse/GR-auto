import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import {
  Search,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Repeat,
  FileText,
  Wrench,
  Car,
  Phone,
  Wallet,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    "Tutto quello che facciamo, dalla consulenza all'acquisto al post-vendita. Selezione su commessione, finanziamenti, permute, garanzie estese, consegna a domicilio e molto altro.",
}

type Pricing = 'free' | 'included' | 'quote' | 'indicative'

const pricingMeta: Record<Pricing, { label: string; className: string }> = {
  free: {
    label: 'Gratuito',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  included: {
    label: "Incluso nell'acquisto",
    className: 'bg-blue-50 text-blue-700 ring-blue-200',
  },
  quote: {
    label: 'Su preventivo',
    className: 'bg-amber-50 text-amber-800 ring-amber-200',
  },
  indicative: {
    label: 'Costo indicativo',
    className: 'bg-ink-100 text-ink-800 ring-ink-200',
  },
}

type Service = {
  title: string
  benefit: string
  audience: string
  pricing: Pricing
  priceNote?: string
}

type ServiceCategory = {
  slug: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  shortTitle: string
  intro: string
  services: Service[]
}

const categories: ServiceCategory[] = [
  {
    slug: 'vendita-consulenza',
    icon: Sparkles,
    title: 'Vendita e Consulenza',
    shortTitle: 'Vendita',
    intro:
      "Ti aiutiamo a scegliere l'auto giusta — non quella che ci conviene vendere.",
    services: [
      {
        title: 'Selezione e importazione su commessione',
        benefit:
          "Cerchiamo l'auto perfetta per te anche se non è nel nostro parco o sul mercato italiano. Tu dici cosa vuoi, ci pensiamo noi.",
        audience:
          "Chi cerca un modello premium o prestigioso con una configurazione specifica (colore, accessori, motorizzazione) non disponibile in pronta consegna.",
        pricing: 'quote',
        priceNote: "In base al valore dell'auto, trasporto e nazionalizzazione",
      },
      {
        title: 'Consulenza all’acquisto',
        benefit:
          "Indeciso tra ibrido, benzina o diesel? Tra due modelli? Mettiamo a confronto le opzioni in base al tuo stile di vita reale.",
        audience:
          'Chi vuole cambiare auto ma non sa orientarsi tra motorizzazioni o segmenti diversi.',
        pricing: 'free',
      },
      {
        title: 'Test drive dedicato e prolungato',
        benefit:
          "Non i classici 5 minuti intorno all'isolato: percorso misto su strada a scorrimento veloce, per capire davvero come si comporta.",
        audience:
          "L'acquirente seriamente intenzionato che vuole valutare comfort, dinamica e feeling reali.",
        pricing: 'free',
      },
      {
        title: 'Controllo dal tuo meccanico o in casa madre',
        benefit:
          "Vuoi un occhio terzo prima di firmare? Portiamo l'auto dove preferisci tu per un controllo indipendente.",
        audience: "A chi vuole una verifica meccanica esterna prima dell'acquisto.",
        pricing: 'free',
      },
    ],
  },
  {
    slug: 'finanziari-assicurativi',
    icon: CreditCard,
    title: 'Servizi Finanziari e Assicurativi',
    shortTitle: 'Finanza & Assicurazioni',
    intro:
      "Un unico interlocutore per rata, polizza e tranquillità mentale.",
    services: [
      {
        title: 'Finanziamenti e leasing personalizzati',
        benefit:
          "Costruiamo il piano davanti a te: maxirata, valore futuro garantito, leasing per professionisti. Modifichiamo le rate sulle tue esigenze reali.",
        audience:
          'Privati e aziende che vogliono dilazionare il pagamento.',
        pricing: 'indicative',
        priceNote: 'Servizio gratuito, tassi bancari variabili in base al profilo',
      },
      {
        title: 'Pacchetti assicurativi integrati',
        benefit:
          "Furto, Incendio e Kasko in una sola rata mensile insieme al finanziamento. In caso di sinistro nei primi anni, valore a nuovo senza svalutazione.",
        audience:
          "Chi vuole uscire dal salone con la certezza di essere coperto sin dal primo giorno.",
        pricing: 'quote',
        priceNote: 'Variabile in base a provincia e valore del veicolo',
      },
    ],
  },
  {
    slug: 'usato',
    icon: Repeat,
    title: 'Gestione dell’usato',
    shortTitle: 'Usato',
    intro:
      "La tua vecchia auto non è un problema da risolvere: è parte della trattativa.",
    services: [
      {
        title: 'Valutazione e ritiro in permuta',
        benefit:
          "Ti liberiamo della vecchia auto subito, senza appuntamenti con sconosciuti, scaricando il valore direttamente sulla nuova.",
        audience:
          "Chi acquista da noi e non vuole lo stress di vendere privatamente.",
        pricing: 'free',
      },
      {
        title: 'Conto vendita Basic e Premium',
        benefit:
          "Mettiamo la tua auto in vetrina sui nostri canali, gestiamo le visite e le trattative. Tu monetizzi al massimo senza ricevere estranei a casa.",
        audience:
          "Proprietari di auto di prestigio, classiche o di particolare interesse commerciale.",
        pricing: 'free',
      },
      {
        title: 'Acquisto diretto con pagamento immediato',
        benefit:
          "Vendi in 24-48 ore con quotazioni di mercato reali. Nessun obbligo di acquistare un'altra auto da noi.",
        audience:
          "Chi ha bisogno di monetizzare la propria auto in tempi record.",
        pricing: 'free',
      },
    ],
  },
  {
    slug: 'burocrazia-consegna',
    icon: FileText,
    title: 'Burocrazia e Consegna',
    shortTitle: 'Burocrazia',
    intro:
      "I servizi 'scontati' ma vitali: ti azzeriamo code, errori e tempi morti.",
    services: [
      {
        title: 'Pratiche auto e passaggio di proprietà in sede',
        benefit:
          "Tutto in sede tramite agenzie collegate: niente file alla motorizzazione, zero errori di compilazione.",
        audience: 'Tutti gli acquirenti e venditori.',
        pricing: 'indicative',
        priceNote: "Costo vivo del passaggio secondo i kW dell'auto",
      },
      {
        title: 'Consegna a domicilio (bisarca o autista)',
        benefit:
          "Ricevi l'auto direttamente sotto casa o in ufficio, ovunque tu sia in Italia.",
        audience:
          "Clienti in regione, fuori regione, collezionisti o professionisti molto impegnati.",
        pricing: 'quote',
        priceNote: 'Gratuito in provincia · Fuori regione indicativamente €150–€600',
      },
    ],
  },
  {
    slug: 'post-vendita',
    icon: Wrench,
    title: 'Post-vendita e preparazione',
    shortTitle: 'Post-vendita',
    intro:
      "Quando ritiri l'auto, è già pronta per i prossimi anni — non per la prima officina.",
    services: [
      {
        title: 'Garanzia estensibile fino a 24/36 mesi',
        benefit:
          "Copertura simile al nuovo su componenti meccaniche ed elettroniche complesse. Riparabile anche fuori regione tramite la rete convenzionata.",
        audience:
          "Chi acquista un usato e vuole dormire tranquillo a lungo termine.",
        pricing: 'indicative',
        priceNote:
          'Garanzia legale 12 mesi inclusa · Estensioni in base al modello',
      },
      {
        title: 'Detailing, lucidatura e sanificazione',
        benefit:
          "L'auto deve sembrare nuova, profumare di nuovo, essere igienizzata a fondo. Punto.",
        audience: 'Ogni singolo cliente che ritira un’auto.',
        pricing: 'included',
        priceNote: 'Servizio esterno disponibile su preventivo: €150–€400',
      },
      {
        title: 'Check-up e tagliando pre-consegna',
        benefit:
          "Consegniamo sempre con controlli completi e materiali di consumo azzerati: niente officina per i successivi 15-20.000 km.",
        audience: "Chi vuole un'auto pronta a partire senza pensieri.",
        pricing: 'included',
      },
    ],
  },
]

const journey = [
  {
    phase: 'Fase 1',
    title: 'Il primo contatto',
    icon: Phone,
    body: "Ci contatti per un'auto specifica o per una ricerca personalizzata. Niente messaggi automatici: analizziamo la richiesta e ti richiamiamo per una chiacchierata (telefono o WhatsApp, come preferisci). Se l'auto è disponibile, fissiamo un appuntamento dedicato e la blocchiamo per te.",
  },
  {
    phase: 'Fase 2',
    title: 'L’incontro in salone',
    icon: Car,
    body: "Arrivi all'orario stabilito. Trovi l'auto pulita, esposta al meglio, e noi a tua completa disposizione. Prima dei numeri parliamo della macchina: storico tagliandi, perizie, certificazione chilometri quando presente. Poi saliamo a bordo per un test drive su percorso misto. Niente fretta: deve scattare il feeling.",
  },
  {
    phase: 'Fase 3',
    title: 'La trattativa sartoriale',
    icon: Wallet,
    body: "Se l'auto è quella giusta, configuriamo l'acquisto. Valutiamo all'istante un eventuale usato con parametri di mercato reali. Costruiamo davanti a te il piano finanziario e assicurativo, modificando le rate sulle tue esigenze. Il contratto è trasparente: zero costi nascosti, zero spese fantasma all'ultimo minuto.",
  },
  {
    phase: 'Fase 4',
    title: 'La preparazione tecnica',
    icon: Wrench,
    body: "Mentre aspetti (3-7 giorni lavorativi), l'auto entra nella nostra clinica. Check-up completo, eventuale tagliando pre-consegna, lucidatura della carrozzeria e sanificazione profonda dell'abitacolo. In parallelo, l'agenzia sbriga il passaggio di proprietà.",
  },
  {
    phase: 'Fase 5',
    title: 'Il giorno della consegna',
    icon: Sparkles,
    body: "Torni in salone (o ricevi l'auto a casa via bisarca). Ti consegniamo plico documenti, doppie chiavi e scheda garanzia. Ci prendiamo mezz'ora dentro l'abitacolo per spiegarti ogni tecnologia, configurare il tuo telefono con l'infotainment e impostare i settaggi di guida. Parti senza dubbi.",
  },
  {
    phase: 'Fase 6',
    title: 'Il post-vendita',
    icon: ShieldCheck,
    body: "Dopo circa due settimane, una breve telefonata di cortesia per assicurarci che tutto stia andando come deve. Restiamo il tuo punto di riferimento per qualsiasi manutenzione futura — e per quando, tra qualche anno, deciderai di cambiare ancora.",
  },
]

const faqs = [
  {
    area: 'Trasparenza',
    question: 'I chilometri sono originali? Come faccio a esserne sicuro?',
    context:
      "La paura più grande di chi compra un usato è la truffa del contachilometri scalato.",
    answer:
      "Non diciamo solo 'si fidi'. Consegniamo libretto dei tagliandi originale, fatture delle manutenzioni precedenti e cronologia delle revisioni ministeriali (quando presenti), inserendo il chilometraggio esatto sia sul contratto sia sul certificato di garanzia. Quando i tagliandi non ci sono, siamo disposti a portare l'auto in casa madre per un check-up completo.",
  },
  {
    area: 'Costi',
    question: 'Il prezzo è trattabile? Ci sono costi nascosti o obblighi di finanziamento?',
    context:
      "Molte concessionarie pubblicizzano prezzi bassi legandoli a finanziamenti con tassi alti, o aggiungono 'spese di preparazione' fantasiose.",
    answer:
      "Il nostro prezzo è trasparente. Se c'è margine di trattativa lo valutiamo insieme, ma il prezzo esposto è reale — sia che paghi in bonifico, sia che scelga un finanziamento. L'unico costo aggiuntivo è il passaggio di proprietà, calcolato su tabelle ACI ufficiali.",
  },
  {
    area: 'Finanziamento',
    question: "Posso finanziare l'intero importo?",
    context:
      "Chi non vuole impegnare liquidità subito ha bisogno di sapere fino a dove può spingersi.",
    answer:
      "Assolutamente sì. Finanziamo dal 100% dell'importo fino a piccole quote, includendo nel piano anche la polizza Furto/Incendio o la Kasko: un unico addebito mensile, zero pensieri.",
  },
  {
    area: 'Tempi',
    question: 'Se firmo oggi, quando posso ritirare l’auto?',
    context:
      'Chi compra ha spesso scadenze precise: ha già venduto la vecchia, deve partire per le vacanze, e così via.',
    answer:
      "Per un'auto in pronta consegna i tempi tecnici di finanziamento, passaggio e preparazione vanno dai 3 ai 7 giorni lavorativi. Ti diamo una data certa e la rispettiamo.",
  },
  {
    area: 'Garanzia',
    question: 'Cosa copre esattamente la garanzia? Devo tornare per forza da voi?',
    context:
      "La paura di restare a piedi con un guasto costoso e scoprire che 'quel pezzo non era coperto'.",
    answer:
      "La garanzia di legge di 12 mesi copre tutti gli organi principali. Collaboriamo con un network di garanzie convenzionali: se sei fuori regione o in viaggio, puoi portare l'auto in qualsiasi officina autorizzata della zona e la riparazione viene gestita direttamente da noi attraverso la rete.",
  },
  {
    area: 'Lungo termine',
    question: 'Se tra due o tre anni decidessi di cambiarla, me la riprendete voi?',
    context:
      "È il complimento più bello: significa che ti fidi già del nostro futuro.",
    answer:
      "Certo che sì. Conosciamo la storia dell'auto perché l'abbiamo curata noi — siamo i primi a volerla riscattare e valorizzarla di nuovo sul mercato.",
  },
]

export default function ServiziPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-600" />
        <div
          aria-hidden
          className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-200">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-brand-600"
              />
              Servizi
            </span>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Tutto quello che facciamo per te,{' '}
              <span className="text-brand-600">in 5 aree</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-700 sm:text-lg">
              Dietro a una compravendita c&apos;è un ecosistema di servizi
              pensato per azzerare lo stress di chi compra e di chi vende.
              Scegli da dove partire.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {categories.map((cat) => (
              <li
                key={cat.slug}
                className="basis-[calc(50%-0.375rem)] sm:basis-auto"
              >
                <Link
                  href={`#${cat.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-md"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-3 text-sm font-semibold leading-snug text-ink-900">
                    {cat.shortTitle}
                  </h2>
                  <p className="mt-1 text-xs text-ink-500">
                    {cat.services.length}{' '}
                    {cat.services.length === 1 ? 'servizio' : 'servizi'}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVIZIO IN EVIDENZA: PERSONAL CAR SHOPPER */}
      <Section className="py-10 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-brand-600/30 bg-gradient-to-br from-ink-50 to-white p-6 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Servizio in evidenza
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Personal Car Shopper:{' '}
                <span className="text-brand-600">
                  l&apos;auto perfetta, trovata per te.
                </span>
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-ink-700">
                Il mercato delle auto prestigiose o con allestimenti
                particolari è una giungla. Con la nostra{' '}
                <strong className="text-ink-900">
                  ricerca personalizzata su commessione
                </strong>{' '}
                non devi fare nulla: diciamo cosa vuoi, ci pensiamo noi.
                Diventiamo i tuoi consulenti personali, dalla selezione alla
                consegna in Italia.
              </p>
              <div className="mt-6">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contatti">Richiedi una ricerca</Link>
                </Button>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                {
                  title: 'Selezione sui canali ufficiali',
                  body: "Reti dedicate ai rivenditori e mercati esteri come la Germania, dove si trovano i pezzi migliori e più curati.",
                },
                {
                  title: 'Perizia diretta in loco',
                  body: "Mandiamo i nostri tecnici sul posto a ispezionare l'auto, verificare i chilometri e la cronologia dei sinistri.",
                },
                {
                  title: 'Burocrazia completa',
                  body: "Importazione, nazionalizzazione, trasporto e immatricolazione italiana. Tu ricevi l'auto già pronta.",
                },
                {
                  title: 'Certificata da noi',
                  body: "Esattamente come la desideravi, controllata, garantita. Senza aver perso un minuto di sonno.",
                },
              ].map((p) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-xl border border-ink-200 bg-white p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <h3 className="font-semibold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TUTTI I SERVIZI */}
      <section id="servizi" className="bg-ink-50 py-10 sm:py-20">
        <Section>
          <SectionHeader
            eyebrow="Catalogo completo"
            title="Tutto quello che facciamo, in cinque aree"
            description="Un servizio non è utile per cosa fa, ma per lo stress che ti toglie e il tempo che ti restituisce. Ecco il nostro elenco, diviso per ambito."
          />

          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
                <div className="mb-6 flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-700 sm:text-base">
                      {cat.intro}
                    </p>
                  </div>
                </div>

                <ul className="grid gap-4 md:grid-cols-2">
                  {cat.services.map((s) => {
                    const meta = pricingMeta[s.pricing]
                    return (
                      <li
                        key={s.title}
                        className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h4 className="text-base font-semibold text-ink-900">
                            {s.title}
                          </h4>
                          <span
                            className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-inset ${meta.className}`}
                          >
                            {meta.label}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink-800">
                          {s.benefit}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-ink-600">
                          <span className="font-semibold text-ink-700">
                            A chi è rivolto:{' '}
                          </span>
                          {s.audience}
                        </p>
                        {s.priceNote ? (
                          <p className="mt-3 border-t border-ink-100 pt-3 text-xs text-ink-500">
                            {s.priceNote}
                          </p>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* IL VIAGGIO CON NOI */}
      <Section className="py-10 sm:py-20">
        <SectionHeader
          eyebrow="Il viaggio con noi"
          title="Dalla prima richiesta alla consegna"
          description="Un processo fluido, studiato per farti sentire costantemente assistito e al sicuro, senza alcuna pressione commerciale. Ecco come funziona, fase per fase."
        />

        <ol className="relative space-y-6 border-l-2 border-ink-200 pl-6 sm:pl-10">
          {journey.map((j) => (
            <li key={j.phase} className="relative">
              <span
                aria-hidden
                className="absolute -left-[15px] top-5 grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-white shadow-md ring-4 ring-white sm:-left-[19px] sm:h-10 sm:w-10"
              >
                <j.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="rounded-2xl border border-ink-200 bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {j.phase}
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">
                    {j.title}
                  </h3>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-700 sm:text-base">
                  {j.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <section className="bg-ink-50 py-10 sm:py-20">
        <Section>
          <SectionHeader
            eyebrow="Domande frequenti"
            title="Le domande che ci fanno tutti, e le nostre risposte"
            description="Nel momento decisivo ogni cliente diventa un investigatore. Sono domande legittime: ecco come affrontiamo i dubbi più comuni, in modo diretto e trasparente."
          />

          <ul className="space-y-3">
            {faqs.map((f) => (
              <li key={f.question}>
                <details className="group rounded-2xl border border-ink-200 bg-white open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                        {f.area}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-ink-900 sm:text-lg">
                        {f.question}
                      </h3>
                    </div>
                    <ChevronDown
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-ink-500 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="space-y-3 border-t border-ink-100 px-5 pb-5 pt-4 text-sm leading-relaxed sm:px-6 sm:pb-6">
                    <p className="text-ink-600">
                      <span className="font-semibold text-ink-700">
                        Cosa c&apos;è dietro:{' '}
                      </span>
                      {f.context}
                    </p>
                    <p className="text-ink-800">
                      <span className="font-semibold text-ink-900">
                        Come rispondiamo:{' '}
                      </span>
                      {f.answer}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      {/* CTA FINALE */}
      <section className="py-8 sm:py-10">
        <Section>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 p-8 text-white sm:p-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,45,18,0.3),transparent_55%)]"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Hai un&apos;esigenza particolare? Parliamone.
                </h2>
                <p className="mt-3 text-pretty text-white/80">
                  Sia che tu voglia acquistare, vendere, permutare o cercare
                  un&apos;auto specifica: raccontaci cosa ti serve, ci
                  pensiamo noi.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contatti">
                    <Phone className="h-4 w-4" />
                    Contattaci
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Link href="/veicoli">
                    <Search className="h-4 w-4" />
                    Tutti i Veicoli
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </section>
    </>
  )
}
