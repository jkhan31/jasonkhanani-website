# Deploy Check

Run a full pre-deploy validation of the jasonkhanani.com Next.js project.

Execute the following steps in order from the project root (`/home/user/jasonkhanani-website` or wherever the repo is checked out):

1. **Lint** — run `npm run lint` and report any ESLint errors or warnings
2. **Type check** — run `npx tsc --noEmit` and report any TypeScript errors
3. **Build** — run `npm run build` and capture the output

After all three steps, produce a deploy readiness report:

```
## Deploy Readiness Report

### Lint
[PASS / FAIL] — <summary of errors/warnings or "No issues">

### Type Check  
[PASS / FAIL] — <summary of errors or "No type errors">

### Build
[PASS / FAIL] — Build time: Xs
Bundle: First Load JS = XkB (XkB gzipped)
Baseline: 243kB (78kB gzipped)
Delta: +/- XkB vs baseline

### Verdict
[READY TO DEPLOY / BLOCKED]
<1-sentence summary>
```

If any step fails, show the exact error output and suggest a fix before marking as blocked.
