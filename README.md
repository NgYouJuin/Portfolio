# Ng You Juin: Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Lucide icons. Static, no backend, no API keys.

## Run locally

```bash
npm install
npm run dev        # opens at http://localhost:3000
```

Production check: `npm run build && npm start`.

## Edit content

All text lives in **`src/data/content.ts`** (profile, about, skills, experience, projects, education, achievements). Components in `src/components/` only render that data.

- **Add project links:** in `projects`, uncomment/add `github` and `demo` on a project. Buttons appear automatically; with no link, none are shown.
- **Resume:** replace `public/Ng_You_Juin_Resume.pdf` (keep the filename, or update `resumePath`).
- **Colours:** `tailwind.config.ts` (`ink` = backgrounds, `accent` = cyan/blue).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New… → Project** → import the repository.
3. Framework preset is detected as **Next.js**. Leave the defaults and click **Deploy**.
4. Optional: add a custom domain under **Settings → Domains**.

Or with the CLI: `npm i -g vercel && vercel --prod`.

## Notes

- The contact form opens the visitor's email app (`mailto:`), so it needs no server.
- Fonts are the system font stack for speed and zero external requests.
"# Portfolio" 
