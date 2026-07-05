# Portfolio

Personal portfolio of Abhishek Dubey. Dark editorial design, built with Vite + React + TypeScript.

## Updating content

All site content lives in one file: [`src/data/me.json`](src/data/me.json)
(schema reference: [`src/data/me.schema.json`](src/data/me.schema.json)).

Edit the JSON — personal details, work experience, projects, skills, education — and the
site re-renders from it. No component changes needed. The portrait photo lives at
`src/assets/images/me.jpg`; replace the file to update it.

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Dev server at http://localhost:5173       |
| `npm test`        | Vitest suite (data contract + rendering)  |
| `npm run build`   | Type-check + production build into `dist` |
| `npm run preview` | Serve the production build locally        |
| `npm run deploy`  | Build and publish `dist` to `gh-pages`    |

## Domains

The repo carries no domain configuration — deploys publish `dist` as-is. Domain
setup (DNS records, GitHub Pages custom domain) is managed separately in the
DNS provider and repo settings.

Note: `npm run deploy` replaces the `gh-pages` branch. If a custom domain is set
in repo settings, GitHub stores it as a `CNAME` file on that branch, and the next
deploy will wipe it — re-enter the custom domain in settings after deploying, or
deploy with `npx gh-pages -d dist --add`.
