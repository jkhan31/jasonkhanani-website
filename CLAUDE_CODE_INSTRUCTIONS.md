# Task: Integrate `/work` page into jasonkhanani.com

## Context

The repo root now contains a folder called `work-page-for-site/` (unzipped
from `work-page-for-site.zip`, uploaded directly into the repo root). It
contains a new `/work` page plus six standalone HTML demo files that the
page links to. None of this has been wired into the site yet — that's
your job.

Contents of `work-page-for-site/`:

- `work.html` — the main page content for a new `/work` route. Already
  styled to match this site's teal/cream palette and Lora/DM Sans
  typography, but it is a **standalone HTML file**, not yet adapted to
  whatever templating system, static site generator, or framework this
  site actually uses.
- `sample-project-1-reporting-automation.html`
- `sample-project-2-handover-automation.html`
- `sample-project-3-cs-knowledge-base.html`
- `sample-project-4-attribute-enrichment.html`
- `sample-project-5-routing-engine.html`
- `sample-project-6-fraud-resistant-returns.html`

  Each of these six is a **fully self-contained, standalone HTML page**
  (own `<style>` and `<script>` tags, no external dependencies besides
  Google Fonts). They are interactive demos meant to be served as-is —
  they should NOT be run through any markdown/templating pipeline. They
  just need to be reachable as static files at the URLs `work.html`
  links to.

## What to do

1. **First, inspect the actual site structure** before changing anything.
   Figure out:
   - What generates this site (plain HTML, Eleventy, Astro, Hugo, Next.js,
     Jekyll, etc.)
   - Where routed pages live (e.g. `pages/`, `src/pages/`, `content/`,
     or just flat HTML in the root/`public/`)
   - Where static assets that should NOT be processed by the templating
     system live (e.g. `public/`, `static/`, `assets/`)
   - What the existing nav/header component looks like, and how other
     pages include it

2. **Add a `/work` route** using `work.html` as the content:
   - If the site is plain static HTML: this may just mean placing
     `work.html` at the right path (e.g. `/work/index.html` or
     `/work.html`, matching this site's existing URL conventions).
   - If the site uses a static site generator or framework: convert
     `work.html`'s content into whatever the site's actual page format is
     (e.g. a Markdown file with frontmatter, a `.astro`/`.jsx` page, a
     Liquid/Nunjucks template) — but preserve the copy, structure, and
     styling intent exactly. Don't rewrite the content, just adapt the
     wrapper/format.
   - **Replace the placeholder nav** in `work.html` with this site's real
     shared nav/header component if one exists, rather than keeping the
     simple standalone nav bar that's currently hardcoded in the file.
     Do the same for any footer component if this site has one.
   - **Fix internal links** — `work.html` currently links to `/`,
     `/about`, `/work`, `/contact` for nav, and to
     `/work/sample-project-N-....html` for each demo card. Adjust all of
     these to match this site's real routes if they differ.

3. **Place the six sample-project HTML files as static assets**, served
   as-is (not templated/processed), at whatever path makes the links in
   `work.html` resolve correctly — likely something like
   `/work/sample-project-1-reporting-automation.html` etc., but adjust
   to match wherever this site keeps un-processed static HTML (check
   `public/`, `static/`, or equivalent).

4. **Verify internal consistency**: every link on the `/work` page should
   resolve to a real, reachable file after the build. Check this
   explicitly rather than assuming.

5. **Do not modify** any existing pages, the resume/case-study content,
   or anything outside of adding this new route and its six linked demo
   files. This should be a purely additive change.

6. **Clean up**: once the files are correctly placed into the site's real
   structure, delete the now-redundant `work-page-for-site/` folder and
   the original `work-page-for-site.zip` from the repo root (their
   contents should now live in the correct location(s) per the site's
   conventions).

## What NOT to do

- Don't rewrite the copy/content of `work.html` or the six demo pages —
  they're intentionally worded and structured; only adapt the
  wrapper/format/routing, not the substance.
- Don't add the six sample-project demos to any site search, sitemap
  "featured content" list, or blog/article index unless asked — they're
  meant to be linked only from the `/work` page itself.
- Don't touch the styling tokens (the teal/cream colors, Lora/DM Sans
  fonts) inside `work.html` — those were deliberately matched to this
  site's existing design system already.

## After you're done

Give a short summary of:
- What this site's actual structure turned out to be (so this is
  documented for next time)
- Where `/work` and the six demo files ended up living
- Confirmation that all links resolve correctly
- The exact `git add` / `git commit` command to run next (don't push
  automatically — let the user review and push manually)
