# Article Import & Publishing Workflow

This documents a reproducible workflow to move Google Docs into the site and convert them to Markdown posts.

1) Author
- Write in Google Docs, organize drafts in Drive folders by theme/series.

2) Setup (one-time)
- Enable Google Drive API in Google Cloud Console.
- Create a Service Account (recommended) and download the JSON key. Save it to `scripts/credentials.json` in this repo, or set `GOOGLE_APPLICATION_CREDENTIALS` to its path.
- Share the Drive folder containing your drafts with the service account email (so it can read the files).

3) Quick manual import
- Export a single doc manually and convert:
```bash
npm run convert-docx -- path/to/your-file.docx "Optional Title"
```
This will write `content/posts/YYYY-MM-DD-your-slug.md`.

4) Automated import from a Drive folder
- To download all Google Docs from a folder and save them as `.docx` locally:
```bash
npm run import-docs -- <drive-folder-id>
```
- To download and immediately convert each to Markdown, add `--convert`:
```bash
npm run import-docs -- <drive-folder-id> --convert
```

Notes
- Find a folder ID from the folder URL: `https://drive.google.com/drive/folders/<FOLDER_ID>`.
- `import-docs` uses the Drive API export endpoint to export Google Docs as `.docx`, then calls `scripts/convert-docx.js` to create Markdown with frontmatter.
- After conversion, edit the generated Markdown in `content/posts/` to complete `excerpt`, `tags`, `category`, and add images.

5) Preview
- Run the dev server:
```bash
npm run dev
```
Visit `/writing/<slug>` to review.

If you want, I can extend `import-docs` to accept folder names (search Drive), parallelize downloads, or support exporting to HTML instead of DOCX.
