/**
 * Migrazione media: ricarica su Vercel Blob i file ancora presenti in ./media
 * aggiornando gli STESSI record (i collegamenti coi veicoli restano intatti).
 *
 * - Salta i record il cui file non esiste in locale.
 * - Salta i record gia' su Blob.
 * - Richiede BLOB_READ_WRITE_TOKEN e DATABASE_URL nel .env.
 *
 * Esegui con: `npx tsx scripts/migrate-media-to-blob.ts`
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import { existsSync, readFileSync } from 'fs'
import path from 'path'
import config from '../payload.config.js'

const mimeByExt: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
}

const run = async () => {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('ERRORE: BLOB_READ_WRITE_TOKEN mancante nel .env')
    process.exit(1)
  }

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'media',
    limit: 1000,
    depth: 0,
  })

  let migrated = 0
  let skippedNoFile = 0
  let skippedOnBlob = 0
  const errors: string[] = []

  for (const m of docs as unknown as Array<Record<string, unknown>>) {
    const id = m.id
    const filename = String(m.filename ?? '')
    const url = String(m.url ?? '')

    if (url.includes('blob.vercel-storage.com')) {
      skippedOnBlob++
      continue
    }

    const localPath = path.resolve('media', filename)
    if (!filename || !existsSync(localPath)) {
      skippedNoFile++
      console.log(`SKIP (file mancante)  id=${id}  "${filename}"`)
      continue
    }

    const ext = path.extname(filename).toLowerCase()
    const mimetype = mimeByExt[ext] ?? 'image/jpeg'
    const data = readFileSync(localPath)

    try {
      await payload.update({
        collection: 'media',
        id: id as number,
        data: {},
        file: { data, mimetype, name: filename, size: data.length },
        overrideAccess: true,
      })
      migrated++
      console.log(`OK   id=${id}  "${filename}" -> caricato su Blob`)
    } catch (err) {
      errors.push(`id=${id} "${filename}": ${(err as Error).message}`)
      console.error(`ERRORE id=${id} "${filename}":`, (err as Error).message)
    }
  }

  console.log('\n--- Riepilogo ---')
  console.log(`Migrati su Blob:        ${migrated}`)
  console.log(`Saltati (gia su Blob):  ${skippedOnBlob}`)
  console.log(`Saltati (file mancante):${skippedNoFile}`)
  if (errors.length) {
    console.log(`Errori: ${errors.length}`)
    errors.forEach((e) => console.log('  - ' + e))
  }
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
