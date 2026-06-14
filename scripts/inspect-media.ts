/**
 * Script di SOLA LETTURA: elenca i record della collezione `media`,
 * il loro URL e se il file originale è presente in ./media.
 * Non modifica nulla. Esegui con: `npx tsx scripts/inspect-media.ts`
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import { existsSync } from 'fs'
import path from 'path'
import config from '../payload.config.js'

const run = async () => {
  const payload = await getPayload({ config })

  const { docs, totalDocs } = await payload.find({
    collection: 'media',
    limit: 1000,
    depth: 0,
  })

  console.log(`\nTotale media nel DB: ${totalDocs}\n`)

  for (const m of docs as unknown as Array<Record<string, unknown>>) {
    const filename = String(m.filename ?? '')
    const url = String(m.url ?? '')
    const localPath = path.resolve('media', filename)
    const hasLocal = filename ? existsSync(localPath) : false
    const onBlob = url.includes('blob.vercel-storage.com')
    const onLocalhost = url.includes('localhost')

    console.log(
      [
        `id=${m.id}`,
        `file="${filename}"`,
        `localFile=${hasLocal ? 'SI' : 'NO'}`,
        onBlob ? 'urlBLOB' : onLocalhost ? 'urlLOCALHOST' : 'urlALTRO',
      ].join('  '),
    )
    console.log(`   url: ${url}`)
  }

  console.log('\nFine. Nessuna modifica effettuata.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
