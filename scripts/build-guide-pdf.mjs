/**
 * Genera GUIDA-GR-AUTO.pdf a partire da docs/GUIDA.md.
 * Converte Markdown -> HTML con `marked`, poi stampa in PDF con Chrome headless
 * (gia' installato sul Mac). Eseguire con:
 *   node scripts/build-guide-pdf.mjs
 */

import { readFile, writeFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { marked } from 'marked'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const md = await readFile(path.join(root, 'docs', 'GUIDA.md'), 'utf-8')
const htmlBody = marked.parse(md)

const html = /* html */ `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<title>Guida GR AUTO</title>
<style>
  @page { size: A4; margin: 20mm 16mm; }
  * { box-sizing: border-box; }
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #0f172a; line-height: 1.55; font-size: 10.5pt; margin: 0;
  }
  h1 { font-size: 23pt; margin: 0 0 4mm; line-height: 1.15; color: #1e293b; }
  h2 { font-size: 15pt; margin: 9mm 0 3mm; padding-bottom: 1.5mm; border-bottom: 2px solid #3a52c4; color: #1e293b; page-break-after: avoid; }
  h3 { font-size: 12.5pt; margin: 6mm 0 2mm; color: #1e293b; page-break-after: avoid; }
  h4 { font-size: 11pt; margin: 4mm 0 1.5mm; color: #334155; page-break-after: avoid; }
  p, ul, ol { margin: 0 0 3mm; }
  ul, ol { padding-left: 6mm; }
  li { margin: 0.8mm 0; }
  hr { border: 0; border-top: 1px solid #e2e8f0; margin: 8mm 0; }
  a { color: #3a52c4; text-decoration: none; }
  strong { color: #0f172a; }
  code { font-family: 'SFMono-Regular', Consolas, Menlo, monospace; background: #f1f5f9; padding: 0.4mm 1.2mm; border-radius: 1mm; font-size: 9.3pt; }
  pre { background: #0f172a; color: #e2e8f0; padding: 3mm 4mm; border-radius: 2mm; overflow-x: auto; font-size: 9pt; line-height: 1.45; page-break-inside: avoid; }
  pre code { background: transparent; color: inherit; padding: 0; }
  table { border-collapse: collapse; width: 100%; margin: 0 0 3mm; font-size: 9.5pt; page-break-inside: avoid; }
  th, td { border: 1px solid #cbd5e1; padding: 1.6mm 2.4mm; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; font-weight: 600; }
  blockquote { margin: 0 0 3mm; padding: 2mm 4mm; background: #eef2ff; border-left: 3px solid #3a52c4; border-radius: 0 2mm 2mm 0; }
  blockquote p { margin: 0; }
  h2, h3 { break-after: avoid; }
</style>
</head>
<body>
${htmlBody}
</body>
</html>`

const tmpHtml = path.join(root, '.guide-tmp.html')
const outPdf = path.join(root, 'GUIDA-GR-AUTO.pdf')
await writeFile(tmpHtml, html, 'utf-8')

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  'google-chrome',
  'chromium',
]
const chrome = chromeCandidates.find((c) => c.includes('/') ? existsSync(c) : true)

const res = spawnSync(
  chrome,
  [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    `--print-to-pdf=${outPdf}`,
    tmpHtml,
  ],
  { stdio: 'inherit' },
)

await rm(tmpHtml, { force: true })

if (res.status !== 0) {
  console.error('Errore nella generazione PDF (Chrome headless).')
  process.exit(1)
}
console.log('PDF generato:', outPdf)
