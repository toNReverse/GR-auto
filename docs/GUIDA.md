# Guida GR AUTO

Sito vetrina del concessionario con CMS integrato (Payload). Questa guida è
divisa in due parti:

- **Parte 1 — Setup tecnico**: per chi installa, configura e pubblica il sito
  (sviluppatore / chi gestisce hosting).
- **Parte 2 — Uso dell'admin**: per chi gestisce i contenuti ogni giorno
  (caricare auto, foto, modificare contatti, ecc.).

---

# PARTE 1 — Setup tecnico

## 1.1 Stack tecnologico

- **Next.js 15** (App Router) + **TypeScript**
- **Payload CMS 3** (pannello admin integrato nello stesso progetto)
- **PostgreSQL** (consigliato **Neon**, piano gratuito)
- **Vercel Blob** per l'archiviazione delle immagini
- **Hosting su Vercel**

Il sito pubblico e il pannello admin girano nello stesso progetto:

- Sito pubblico → `https://<dominio>/`
- Pannello admin → `https://<dominio>/admin`

## 1.2 Prerequisiti

- **Node.js ≥ 20.9**
- Un account **Vercel**, un database **Neon**, uno store **Vercel Blob**
- Accesso al repository GitHub del progetto

## 1.3 Variabili d'ambiente (`.env`)

Crea un file `.env` nella radice del progetto (in locale) e imposta le stesse
variabili anche su Vercel (**Settings → Environment Variables**).

| Variabile | Obbligatoria | A cosa serve |
|-----------|--------------|--------------|
| `DATABASE_URL` | Sì | Stringa di connessione PostgreSQL (Neon). Include utente, password, host, nome DB e `?sslmode=require`. |
| `PAYLOAD_SECRET` | Sì | Stringa lunga e casuale per firmare i token di sessione/login admin. Generala con `openssl rand -base64 32`. Tienila segreta e diversa tra locale e produzione. |
| `NEXT_PUBLIC_SITE_URL` | Sì | URL pubblico del sito. In locale `http://localhost:3000`; in produzione il dominio reale (es. `https://gr-auto.vercel.app`). Usata per CORS/CSRF, link assoluti e `serverURL` di Payload. |
| `BLOB_READ_WRITE_TOKEN` | Sì (produzione) | Token di Vercel Blob per caricare/leggere le immagini. Senza, gli upload non funzionano. |

> **Importante:** `NEXT_PUBLIC_SITE_URL` viene "incorporata" durante il build.
> Se la cambi su Vercel, devi rifare un **Redeploy** perché abbia effetto.

Esempio di `.env` locale:

```
DATABASE_URL=postgres://user:password@host/dbname?sslmode=require
PAYLOAD_SECRET=una-stringa-lunga-e-casuale
NEXT_PUBLIC_SITE_URL=http://localhost:3000
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxx
```

## 1.4 Servizi esterni

### Database — Neon

1. Crea un progetto su **neon.tech** (piano gratuito).
2. Copia la **connection string** e mettila in `DATABASE_URL` (deve contenere
   `?sslmode=require`).
3. Lo stesso `DATABASE_URL` va usato sia in locale sia su Vercel (un unico DB).

### Immagini — Vercel Blob

1. Su Vercel: progetto → tab **Storage** → **Create Database** → **Blob**.
2. **Importante:** scegli accesso **Public** (le foto delle auto devono essere
   visibili a tutti). L'accesso non è modificabile dopo la creazione.
3. Tab **Projects** dello store → **Connect Project** → seleziona il progetto e
   **spunta "Add a read-write token env var"** così viene creato
   `BLOB_READ_WRITE_TOKEN`.
4. Per il locale, copia il token dalla tab **`.env.local`** dello store nel tuo
   file `.env`.

> Le immagini vengono servite **direttamente dal CDN Blob**
> (`*.public.blob.vercel-storage.com`), grazie all'opzione
> `disablePayloadAccessControl` in `payload.config.ts`. Questo dominio è già in
> whitelist in `next.config.mjs` (necessario per l'ottimizzatore di Next.js).

### Hosting — Vercel

1. Importa il repository GitHub su Vercel.
2. Imposta le **4 variabili d'ambiente** (sezione 1.3) per gli ambienti
   Production e Preview.
3. Ogni `git push` sul branch `main` avvia un **deploy automatico**.

## 1.5 Sviluppo in locale

```
npm install        # installa le dipendenze
npm run dev        # avvia in locale su http://localhost:3000
```

- Sito: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## 1.6 Comandi disponibili

| Comando | Cosa fa |
|---------|---------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Esegue le migrazioni DB e compila per la produzione |
| `npm start` | Avvia la build di produzione |
| `npm run lint` | Controllo lint |
| `npm run type-check` | Controllo dei tipi TypeScript |
| `npm run generate:types` | Rigenera i tipi TypeScript di Payload |
| `npm run seed` | Popola il DB con dati demo (solo sviluppo) |

> ⚠️ `npm run seed` crea veicoli/dati di esempio: **non eseguirlo in
> produzione**, ricreerebbe contenuti demo da cancellare.

## 1.7 Deploy in produzione

1. `git push` su `main` → Vercel builda e pubblica.
2. Il comando di build (`payload migrate && next build`) applica eventuali
   migrazioni del database automaticamente.
3. Verifica che le 4 variabili d'ambiente siano presenti su Vercel.

## 1.8 Note tecniche utili

- **Pagine dinamiche:** le pagine del sito sono `force-dynamic` ma leggono dati
  tramite cache con tag (es. `vehicles`, `site`). Salvando un veicolo o le
  impostazioni, un hook rivalida automaticamente la cache: le modifiche
  compaiono sul sito senza redeploy.
- **Immagini:** servite dal CDN Blob. Se aggiungi un dominio personalizzato,
  aggiorna `NEXT_PUBLIC_SITE_URL` su Vercel e fai un redeploy.
- **Generazione di questa guida:** `node scripts/build-guide-pdf.mjs` rigenera
  `GUIDA-GR-AUTO.pdf` da `docs/GUIDA.md` (richiede Google Chrome installato).

---

# PARTE 2 — Uso dell'admin

Questa parte spiega come gestire i contenuti del sito dal pannello.

## 2.1 Accesso

1. Vai su `https://<dominio>/admin`.
2. Inserisci email e password del tuo account.
3. Al primo accesso **cambia la password** (in basso a sinistra → il tuo
   account → modifica).

## 2.2 Panoramica del pannello

Nel menu di sinistra trovi le sezioni:

- **Veicoli** — il catalogo delle auto/furgoni (la sezione che userai di più)
- **Media** — tutte le immagini caricate
- **Marche** — i marchi (Audi, BMW, …)
- **Optional** — gli accessori selezionabili sulle auto
- **Sedi** — gli indirizzi/contatti della concessionaria
- **Pagine** — pagine di contenuto (es. Chi siamo, Servizi)
- **Utenti** — chi può accedere all'admin
- **Impostazioni sito** e **Finanziamento** — configurazioni globali

## 2.3 Caricare un'auto (passo-passo)

Vai su **Veicoli → Crea nuovo**. La scheda è divisa in schede (tab):

### Tab "Identificativi"
- **Titolo**: il nome mostrato (es. *BMW Serie 3 320d xDrive Msport*).
- **Slug**: si genera da solo dal titolo (è l'indirizzo della pagina). Lascialo
  così salvo necessità.
- **Codice interno**: tuo riferimento interno (facoltativo).
- **Disponibilità**: Disponibile / Riservato / Venduto / In arrivo.
- **Tipo veicolo**: Auto (civile) o Furgone (commerciale) — determina la
  categoria nel sito.
- **In evidenza**: spunta per dare risalto al veicolo.

### Tab "Dati tecnici"
- **Marca** (da scegliere tra quelle esistenti), **Modello**, **Allestimento**.
- **Condizione**: Nuovo / Km 0 / Aziendale / Usato.
- **Prima immatricolazione** (data) e **Chilometri**.
- **Alimentazione** (Benzina, Diesel, GPL, Metano, Ibrida, Ibrida plug-in,
  Elettrica), **Cambio** (Manuale/Automatico/Semiautomatico), **Trazione**.
- **Cilindrata**, **Potenza** (kW e CV), **CO₂**, **Classe Euro**.
- **Porte**, **Posti**, **Carrozzeria** (Berlina, SUV, City Car, …).

### Tab "Colori e interni"
- **Colore esterno** + tipo (Metallizzato/Pastello/Perlato/Opaco).
- **Colore interni** + materiale (Tessuto, Pelle, Alcantara, …).

### Tab "Prezzo"
- **Prezzo (€)**: prezzo di vendita.
- **Prezzo barrato (€)**: prezzo precedente, mostrato sbarrato (facoltativo).
- **IVA esposta**: spunta se l'IVA è detraibile.
- **Rata indicativa (€/mese)**: rata di finanziamento da mostrare (facoltativa).

### Tab "Descrizione"
- **Descrizione**: testo libero con formattazione.
- **Punti salienti**: elenco di voci brevi in evidenza.
- **Optional**: seleziona gli accessori (da Optional esistenti).

### Tab "Media" (le foto)
- **Galleria**: clicca **Aggiungi**, poi sul campo **Immagine** carica un file
  (o scegline uno già caricato). Ripeti per ogni foto. La prima foto è la
  copertina. Vedi sezione 2.4 per i dettagli.
- **URL video**: link YouTube/Vimeo (facoltativo).

### Tab "Sede"
- **Sede**: scegli a quale sede appartiene il veicolo.

### Tab "SEO"
- **Meta title** e **Meta description**: testi per Google (facoltativi; se
  vuoti vengono generati automaticamente).

### Salvare e pubblicare
- **Salva come bozza**: non visibile sul sito.
- **Pubblica modifiche**: rende il veicolo visibile sul sito pubblico.

## 2.4 Gestire le foto

- Carica le immagini **dal pannello su Vercel** (`<dominio>/admin`): finiscono
  automaticamente sul CDN Blob e sono subito visibili online.
- Formati consigliati: JPG/PNG/WebP. Il sistema crea da solo le versioni
  ottimizzate.
- La **prima immagine della galleria** è la copertina (usata nelle liste).
- Per riordinare le foto, trascina le righe della galleria.
- Le immagini sono condivise tra i veicoli tramite la sezione **Media**: la
  stessa foto può essere riusata.

> Suggerimento: usa foto orizzontali di buona qualità (almeno 1200px di
> larghezza) per una resa migliore.

## 2.5 Marche, Optional, Sedi

Prima di poter selezionarli su un veicolo, questi elementi devono esistere.

- **Marche**: Nome + (facoltativo) logo. Lo slug si genera da solo.
- **Optional**: Nome + Categoria (Comfort, Sicurezza, Multimedia, Esterni,
  Interni, Assistenza alla guida).
- **Sedi**: Nome, indirizzo completo (via, CAP, città, provincia), contatti
  (telefono, WhatsApp in formato `+39…`, email), **orari di apertura**
  (giorni + orario) e **coordinate** per la mappa.

## 2.6 Impostazioni sito

In **Impostazioni sito** (configurazione globale), per schede:

- **Identità**: nome concessionario, tagline, logo, logo per sfondo scuro,
  favicon.
- **Brand**: colore primario e colore accento.
- **Contatti**: telefono principale, WhatsApp, email (compaiono nel sito).
- **Social**: aggiungi profili (Facebook, Instagram, YouTube, TikTok,
  LinkedIn) con relativo URL.
- **Legale**: ragione sociale, Partita IVA, REA, testo del footer.

## 2.7 Finanziamento

In **Finanziamento** imposti i valori del calcolatore di rata mostrato sulle
schede auto:

- **TAN** e **TAEG** di default, **Anticipo %**, **Durata (mesi)** di default.
- **Durate selezionabili** (es. 24, 36, 48, 60, 72, 84 mesi).
- **Disclaimer**: testo legale mostrato sotto al calcolatore.

## 2.8 Pagine

In **Pagine** crei/modifichi pagine di contenuto (es. Chi siamo, Servizi):

- **Titolo** e **Slug** (indirizzo della pagina).
- **Contenuto**: composto a blocchi — **Hero**, **Sezione di testo**, **Griglia
  immagini**, **Call to action**, **FAQ**, **Testimonianze**.
- **SEO**: meta title, meta description, immagine Open Graph.

## 2.9 Utenti e ruoli

In **Utenti** gestisci chi accede all'admin. Due ruoli:

- **Amministratore**: accesso completo (inclusa gestione utenti).
- **Editor**: può gestire i contenuti ma non gli utenti.

Per aggiungere una persona: **Crea nuovo** → nome, email, ruolo, password.

## 2.10 Consigli pratici

- Pubblica un veicolo solo quando ha **almeno una foto** e i dati principali
  (prezzo, marca, modello).
- Per togliere un'auto dal sito senza eliminarla, imposta la disponibilità su
  **Venduto** o riportala in **bozza**.
- Le modifiche pubblicate compaiono sul sito in pochi istanti; se non le vedi,
  fai un **refresh forzato** del browser (Cmd/Ctrl + Shift + R).
- Carica sempre le foto **dal sito in produzione**, non da ambienti locali.

---

*Per assistenza tecnica fare riferimento alla Parte 1 di questa guida.*
