# tanstack-portfolio

Personal portfolio built with TanStack Router, Vite, React and Tailwind. Optimized for showcasing services for Greek businesses and founders.

This repo is set up for local development, Cloudflare deployment (Workers / Pages), and content-first editing via `src/content/*.ts`.

## Quick start

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

Scripts available (see `package.json`):

- `pnpm dev` — start Vite dev server (port 3000)
- `pnpm start` — start Vite in non-dev mode
- `pnpm build` — build for production
- `pnpm serve` — preview the built site locally
- `pnpm test` — run unit tests (Vitest)
- `pnpm deploy` — wrangler deploy (Cloudflare)
- `pnpm deploy:build` — build then deploy

## Project structure (important folders)

- `src/routes/` — file-based routes (page components)
- `src/content/` — canonical copy for pages (edit content here)
- `src/components/` — shared UI components (buttons, page container, etc.)
- `public/` — static assets (icons, images)

## Editing content

All page copy originates from `src/content/*.ts` (for example `src/content/business.ts`, `src/content/founders.ts`, `src/content/home.ts`).

Edit those files to change headings, paragraphs, CTAs and any structured content. Routes import and render content from these files — you usually don't need to edit the route components unless you're changing layout or markup.

Tip: keep content objects simple and use `as const` to preserve types where appropriate.

## Deployment

This project is configured for Cloudflare (Workers / Pages). There are two common options:

### Cloudflare Pages (static hosting)

1. Build the app locally:

```bash
pnpm build
```

2. Create a Cloudflare Pages site and set:

- Build command: `pnpm build`
- Build output directory: `dist` (or your Vite output)

Connect your repo and enable automatic deployments from your main branch.

### Cloudflare Workers / Wrangler

This repo includes Wrangler in devDependencies. Use Wrangler if you need an edge runtime or API routes.

Install Wrangler (global optional):

```bash
pnpm add -g wrangler
# or: npm i -g wrangler
```

Build & deploy example:

```bash
pnpm build
wrangler publish --env production
```

If you want, I can add a minimal `wrangler.toml` and a small Worker entry point to make the publish step one-command.

## Routing and content notes

- Routes are file-based in `src/routes`. Use `Link` from `@tanstack/react-router` for client navigation.
- Keep copy in `src/content` so translations, copy edits, and A/B variants are centralized.

## Tests

Run unit tests with:

```bash
pnpm test
```

## Development tips

- Tailwind: tweak `tailwind.config.js` and the global stylesheet at `src/styles.css`.
- Add shadcn components with `pnpx shadcn@latest add <component>`.
- Use the `home`, `business`, and `founders` content files as examples for how to structure new page content.

## Want me to add deployment scaffolding?

I can add:

- `wrangler.toml` + worker entrypoint for a one-command `wrangler publish`
- GitHub Actions workflow to build and publish to Cloudflare Pages automatically
- A `docs/` page explaining content structure and copy best-practices

Tell me which you'd like and I'll add it.

---

Made for fast iteration and clear content editing. Keep content in `src/content` and the UI will follow.
