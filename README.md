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

The site is served at `portfolio.byabhishekdubey.com`. `npm run deploy` writes a
`CNAME` file into the published `gh-pages` branch (via the `--cname` flag), which
keeps GitHub Pages' custom-domain setting intact across deploys. DNS is a
Cloudflare CNAME record: `portfolio` → `abhishek-geek.github.io` (DNS only).

To change the domain: update the `--cname` value in the `deploy` script and the
DNS record together.
