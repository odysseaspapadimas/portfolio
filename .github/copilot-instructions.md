Short, focused instructions for AI coding agents working on this repo.

1) Big picture
- This is a small portfolio site built with React + Vite + Tailwind + TanStack Router. The site is content-first: page copy and structured page data live under `src/content/*.ts` and routes import that content.
- Deployment targets: Cloudflare Pages or Workers (Wrangler is included). Use `pnpm build` + Cloudflare tooling for production.

2) Where to look first (quick map)
- Content: `src/content/` (home.ts, business.ts, founders.ts, case-studies.ts). This is the authoritative source for copy and structured page blocks.
- Routes: `src/routes/*.tsx` — file-based routes that import content and render UI components.
- UI primitives: `src/components/ui` contains shared components (buttons, Page container, timeline etc.).
- Utilities: `src/lib/utils.ts` for small helpers (e.g., `cn`).
- Vite/Cloudflare integration: `package.json` scripts and devDependencies include `@cloudflare/vite-plugin` and `wrangler`.

3) Project-specific conventions and patterns
- Content-first: never hardcode copy in routes when content exists under `src/content`; prefer adding or editing the content file.
- File-based routing: add or update files under `src/routes` to create new pages. Routes use `createFileRoute` from `@tanstack/react-router`.
- Use `as const` in content files to preserve literal types. The project expects that pattern.
- Buttons and variants are built from `components/ui/button.tsx` and used via `buttonVariants({ size, variant })`.
- Small utility `cn()` is used to join class names; prefer it to inline className concatenation.

4) Build / test / dev commands (exact)
- Dev server: `pnpm dev` (Vite on port 3000)
- Start/build: `pnpm start`, `pnpm build` (Vite)
- Preview built site: `pnpm serve` (vite preview)
- Tests: `pnpm test` (Vitest)
- Deploy (Cloudflare): `pnpm deploy` or `pnpm deploy:build` (uses Wrangler)

5) Common edits and examples
- Move copy into `src/content`: If you see duplicated copy inside a route (e.g., capability lists), move it to the matching content file and reference `businessContent` or `foundersContent` from the route.
  - Example: `src/routes/business.tsx` should iterate `businessContent.capabilities.items` (see existing code).
- Add testimonial: add `{ testimonial: { quote, author, role, avatar? } }` to `src/content/business.ts` and the route conditionally renders it. Keep the UI minimal for a single testimonial.
- Add a route: create `src/routes/your-page.tsx` with `createFileRoute('/your-page')({ component: YourPage })` and import content from `src/content/your-page.ts`.

6) Integration points & external dependencies
- Cloudflare: `wrangler` is installed and used for deploys. When adding worker-specific code, include `wrangler.toml` and reference Cloudflare docs.
- TanStack Router: routes sometimes include `head` meta and `component` fields—respect the existing pattern and keep route metadata in content files where present.
- MDX: case study pages may use MDX files under `src/content/case-studies/*.mdx`.

7) Safety & small checks before edits
- Run `pnpm dev` locally and ensure page renders without console errors for changed routes.
- After TypeScript edits run `pnpm build` or `pnpm test` to surface compile issues.
- Avoid changing Tailwind config unless necessary — UI classes are used heavily across pages.

8) If you change content structure
- Update the route(s) that consume it and add a minimal type annotation in the content file (use `as const` pattern).
- Add a short note in the content file header `// content for ...` so future agents can find it.

9) Where to ask for clarification
- If a change affects copy tone: prefer Greek copy that reads conversationally and references local businesses/founders—use `src/content/business.ts` and `src/content/founders.ts` for tone examples.
