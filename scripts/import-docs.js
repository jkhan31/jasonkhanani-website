#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const { spawnSync } = require('child_process');

function usage() {
  console.log('Usage: node scripts/import-docs.js <drive-folder-id> [--out <dir>] [--convert]');
  process.exit(1);
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 1) usage();
  const folderId = argv[0];
  const outIdx = argv.indexOf('--out');
  const outDir = outIdx !== -1 && argv[outIdx + 1] ? argv[outIdx + 1] : path.join(__dirname, '..', 'content', 'imports', folderId);
  const doConvert = argv.includes('--convert');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Determine credentials
  const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, 'credentials.json');
  if (!fs.existsSync(keyFile)) {
    console.error('Missing credentials. Place a service account JSON at scripts/credentials.json or set GOOGLE_APPLICATION_CREDENTIALS.');
    console.error('See WORKFLOW.md for setup steps.');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({ keyFile, scopes: ['https://www.googleapis.com/auth/drive.readonly'] });
  const drive = google.drive({ version: 'v3', auth });

  // List Google Docs in the folder
  const q = `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.document' and trashed = false`;
  const res = await drive.files.list({ q, fields: 'files(id,name)' });
  const files = res.data.files || [];
  if (!files.length) {
    console.log('No Google Docs found in folder:', folderId);
    return;
  }

  for (const file of files) {
    const safeName = file.name.replace(/[\\/:*?"<>|]+/g, '_');
    const outPath = path.join(outDir, `${safeName}.docx`);
    console.log('Exporting', file.name, '->', outPath);

    const dest = fs.createWriteStream(outPath);
    try {
      const resp = await drive.files.export({ fileId: file.id, mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }, { responseType: 'stream' });
      await new Promise((resolve, reject) => {
        resp.data.on('end', resolve).on('error', reject).pipe(dest);
      });
      console.log('Saved', outPath);
    } catch (err) {
      console.error('Failed to export', file.name, err.message || err);
      continue;
    }

    if (doConvert) {
      console.log('Converting to Markdown:', outPath);
      const r = spawnSync(process.execPath, [path.join(__dirname, 'convert-docx.js'), outPath, file.name], { stdio: 'inherit' });
      if (r.status !== 0) console.error('Conversion failed for', outPath);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
