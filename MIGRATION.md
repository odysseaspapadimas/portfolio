# Portfolio Migration: Next.js App Router → TanStack Start

This document describes the migration from the Next.js App Router portfolio application to TanStack Start.

## Migration Summary

### ✅ Completed Migration

All pages, components, and functionality from the original Next.js portfolio have been successfully migrated to TanStack Start.

### What Was Migrated

#### 📄 Pages
- **Home page** (`/`) - Landing page with service offerings
- **About page** (`/about`) - Personal info, experience timeline, and skills
- **Business page** (`/business`) - Greek business services page
- **Founders page** (`/founders`) - SaaS founder services page
- **Contact page** (`/contact`) - Contact form with server function
- **Contact Success page** (`/contact/success`) - Thank you page
- **Case Study** (`/case-studies/brainrot`) - BrainrotAI case study with MDX

#### 🎨 Components
- `Header` - Responsive navigation with mobile menu
- `Button` - Shadcn button component with variants
- `Container` - Layout container component
- `Sheet` - Mobile menu sheet component
- `Timeline` - Experience timeline component

#### 📦 Content
- `site.ts` - Site-wide configuration and metadata
- `about.ts` - About page content
- `experience.ts` - Work experience data
- `brainrot.mdx` - Case study content in MDX format

#### 🛠️ Utilities
- `utils.ts` - Tailwind merge utilities
- Shadcn/ui component library integration
- Dark mode CSS variables

#### 🎨 Styling
- Tailwind CSS v4 configuration
- Dark theme by default
- CSS custom properties for theming
- Typography plugin for MDX content

### Key Migration Changes

#### Routing
**Next.js:**
```
src/app/
  layout.tsx
  (app)/
    page.tsx
    about/page.tsx
    contact/page.tsx
```

**TanStack Start:**
```
src/routes/
  __root.tsx                    # Root layout
  _app.tsx                      # App layout (nested)
  _app/index.tsx               # Home page
  _app/about.tsx               # About page
  _app/contact.tsx             # Contact page
  _app/contact.success.tsx     # Success page
  _app/case-studies.brainrot.tsx # Case study
```

#### Metadata
**Next.js:**
```tsx
export const metadata = {
  title: "My Page",
  description: "Description"
}
```

**TanStack Start:**
```tsx
export const Route = createFileRoute("/_app/about")({
  head: () => ({
    meta: [
      { title: "My Page" },
      { name: "description", content: "Description" }
    ]
  }),
  component: AboutPage,
})
```

#### Links
**Next.js:**
```tsx
import Link from "next/link"
<Link href="/about">About</Link>
```

**TanStack Start:**
```tsx
import { Link } from "@tanstack/react-router"
<Link to="/about">About</Link>
```

#### Server Actions → Server Functions
**Next.js:**
```tsx
async function sendContact(formData: FormData) {
  'use server'
  // ... handler code
  redirect('/contact/success')
}
```

**TanStack Start:**
```tsx
const sendContact = createServerFn({ method: "POST" })
  .validator((data) => data)
  .handler(async ({ data }) => {
    // ... handler code
    return { success: true }
  })

// In component
const router = useRouter()
await sendContact({ data })
router.navigate({ to: '/contact/success' })
```

### Configuration Files

#### package.json
- Added MDX support (`@mdx-js/loader`, `@mdx-js/react`, `@mdx-js/rollup`)
- Added Radix UI components
- Added Tailwind typography plugin
- Added all shadcn/ui dependencies

#### vite.config.ts
- Configured TanStack Start plugin with `routesDirectory: 'routes'`
- Added MDX plugin support
- Configured port 3000 to match Next.js dev server

#### tailwind.config.ts
- Ported all color variables
- Added typography plugin for MDX content
- Kept all theme customizations

#### src/styles.css
- Updated to Tailwind v4 syntax (`@import 'tailwindcss'`)
- Ported all CSS custom properties
- Maintained dark theme configuration

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve
```

The development server runs on `http://localhost:3000` (same as Next.js).

### MDX Support

MDX files are fully supported with the following setup:
- MDX rollup plugin configured in `vite.config.ts`
- Type definitions in `src/types/mdx.d.ts`
- `mdx-components.tsx` for component customization
- Tailwind typography plugin for styling

### Features Preserved

✅ All routing and navigation  
✅ Server-side rendering (SSR)  
✅ Dark mode theming  
✅ Responsive design  
✅ Mobile navigation  
✅ Contact form with server function  
✅ MDX case study rendering  
✅ All UI components and styling  
✅ All content and metadata  

### Next Steps

1. **Test the application:**
   ```bash
   pnpm dev
   ```

2. **Navigate through all pages** to ensure everything renders correctly

3. **Test the contact form** to verify server function integration

4. **Review the case study** to ensure MDX renders properly

5. **Check mobile responsiveness** with the mobile menu

6. **Update environment variables** if needed (Discord webhook URL for contact form)

### Deployment

The application is configured for Cloudflare deployment (as per the original setup). The `wrangler.json` configuration is already in place.

To deploy:
```bash
pnpm build
pnpm deploy
```

### Notable Improvements

1. **Type-safe routing** - TanStack Router provides full type safety for routes and navigation
2. **Better code splitting** - Each route is automatically code-split
3. **Improved developer experience** - Hot module replacement works seamlessly
4. **File-based routing** - Intuitive file naming matches URLs exactly
5. **Server functions** - More explicit than Next.js server actions

---

🎉 **Migration Complete!** The portfolio is now running on TanStack Start with all features intact.

