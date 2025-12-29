# Sanity Studio — Unsplash integration

This Studio includes the `sanity-plugin-asset-source-unsplash` plugin so you can pick Unsplash images inside the image picker.

Quick start

1. Copy `.env.example` to `.env` in the Studio folder and set your Unsplash API key:

```env
UNSPLASH_ACCESS_KEY=your_access_key_here
```

2. Install dependencies (we used `--legacy-peer-deps` when installing the plugin to avoid strict peer conflicts):

```bash
npm install --legacy-peer-deps
```

3. Run the Studio:

```bash
npm run dev
```

4. Open the Studio URL printed in the terminal, edit/create a document with an image field, open the image picker, and choose the "Unsplash" source.

Notes

- Do NOT commit your `.env` file — it is ignored by `.gitignore`.
- If you want stricter dependency resolution, align `react`/`react-dom` versions to `^18` and reinstall without `--legacy-peer-deps`.
- To update the plugin version, change `package.json` and run `npm install`.
