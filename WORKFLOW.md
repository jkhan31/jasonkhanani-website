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

Netlify-specific setup
----------------------

1. Deploy the site on Netlify
- Connect the GitHub repo and set Build command: `npm run build` and Publish directory: `dist`.

2. Admin routing
- Add `_redirects` with `/admin/*  /admin/index.html  200` so the CMS UI loads correctly (already added in repo).

3. Identity & Git Gateway
- In Netlify > Site settings > Identity: Enable Identity service.
- Under Identity, enable "Git Gateway" and authorize your Git provider. This allows Netlify CMS to create commits/PRs on behalf of editors.
- Invite editor accounts or allow registration per your policy.

4. Media
- By default `admin/config.yml` writes media to `content/posts/assets`. If you prefer Cloudinary/S3, configure media settings in `config.yml` and set credentials as Netlify Environment Variables.

5. Build hooks (for automation)
- Create a Build Hook: Site → Settings → Build & deploy → Build hooks → Add build hook. Save the URL and set it as `NETLIFY_BUILD_HOOK_URL` in your n8n / host environment.

6. n8n integration pointers
- Use the included `scripts/n8n_import_workflow_template.json` as a starting point in n8n. Set `N8N_IMPORT_SECRET` in n8n and in your Apps Script `WEBHOOK_SECRET`.
- The n8n flow should save the incoming file to disk, run `node ./scripts/convert-docx.js <file> "Title"`, then run `./scripts/git-commit-and-pr.sh "Title"` (script added in `scripts/`).
- Ensure your n8n host has NodeJS, git, and optionally the `gh` CLI, and set `GITHUB_TOKEN` and `NETLIFY_BUILD_HOOK_URL` as environment variables.

GitHub OAuth for Netlify CMS (single-author setup)
-------------------------------------------------

Because Git Gateway is deprecated, for a single-author workflow use the GitHub backend. Steps:

1) Register a GitHub OAuth App
- Go to https://github.com/settings/developers -> OAuth Apps -> New OAuth App.
- Application name: e.g., "Netlify CMS — jasonkhanani-website".
- Homepage URL: `https://jasonkhanani-website.netlify.app` (change if you use a different domain).
- Authorization callback URL: `https://jasonkhanani-website.netlify.app/admin/` (include trailing `/admin/`).
- Click "Register application" and copy the **Client ID** and **Client Secret**.

2) Add credentials to Netlify
- In your Netlify site dashboard go to Site settings → Build & deploy → Environment → Environment variables.
- Add two variables:
	- `GITHUB_CLIENT_ID` = the Client ID from GitHub
	- `GITHUB_CLIENT_SECRET` = the Client Secret from GitHub

3) Confirm `admin/config.yml` uses the GitHub backend
- `admin/config.yml` in this repo has `backend.name: github` and `repo: jkhan31/jasonkhanani-website`.

4) Deploy and test
- Trigger a deploy on Netlify (new deploy picks up env vars).
- Visit `https://jasonkhanani-website.netlify.app/admin` and sign in via GitHub.
- Create a draft post; Netlify CMS will commit or open a PR depending on config.

Local development notes
- To test locally, set the env vars in your shell before running the dev server:
```bash
export GITHUB_CLIENT_ID=your_client_id
export GITHUB_CLIENT_SECRET=your_client_secret
npm run dev
```

Security notes
- Keep the Client Secret private; Netlify environment variables are secure and suitable for this use.
- If you want higher security, consider creating a GitHub App and using its credentials, but OAuth App is simpler for single-author setups.

Security notes
- Keep the Apps Script and n8n secrets private. Use n8n credentials / environment variables rather than hard-coding secrets.

