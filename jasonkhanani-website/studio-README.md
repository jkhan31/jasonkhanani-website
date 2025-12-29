# Sanity Studio — Unsplash integration

This Studio includes the `sanity-plugin-asset-source-unsplash` plugin so you can pick Unsplash images inside the image picker.

## Unsplash Attribution Auto-Population

When you select an Unsplash image in Sanity Studio, the following fields are automatically populated:

- **attribution**: Photographer name from Unsplash metadata (`asset.source.name`)
- **attributionUrl**: Link to photographer's Unsplash profile (`asset.source.url`)
- **alt**: Image description from Unsplash metadata (`asset.description`)

This auto-population feature works for:
- Main images in articles (`mainImage` field)
- Images within article body content (`body` field)

The auto-population is handled by the `CustomImageInput` component in `schemaTypes/CustomImageInput.tsx`.

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
