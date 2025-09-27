# Portfolio — Odysseas Papadimas

A streamlined consultant landing page built with Next.js 15 and Tailwind CSS. Content is file-based—no CMS, no auth. The homepage focuses on a flagship case study (Brainrot), two productized offers, and quick CTAs to book a call.

## Highlights

- ⚡ **Hero that sells**: Value proposition, availability, and Calendly CTA above the fold.
- 📦 **Productized offers**: Audit & Roadmap and Sprint Build cards sourced from `content/site.ts`.
- ⭐ **Flagship proof**: Brainrot case study excerpt rendered straight from MDX.
- 🧪 **Starters gallery**: Small demo tiles pulled from `content/starters.ts`.
- 🎯 **Frictionless booking**: Repeated Calendly CTA plus direct email link.

## Content Architecture

```
content/
├── site.ts                  # Offers, availability, socials, CTAs
├── starters.ts              # Starter product tiles (name, links, Loom)
└── case-studies/
	└── brainrot.mdx         # Flagship case study in MDX
```

Update these files to change copy—no build steps or database migrations required.

## Getting Started

```bash
git clone <repository-url>
cd portfolio
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the homepage.

This project ships without required environment variables. If you later add analytics, forms, or other integrations, mirror them in `.env.local`.

## Scripts

- `pnpm dev` – Start the development server
- `pnpm build` – Create a production build
- `pnpm start` – Run the production server
- `pnpm lint` – Run ESLint

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX + TypeScript modules
- **UI helpers**: shadcn/ui, lucide-react

## Next Steps

- Swap in real metrics for the Brainrot KPIs
- Embed actual demo + Loom links for the starters
- Wire up a simple contact form or CRM if needed
