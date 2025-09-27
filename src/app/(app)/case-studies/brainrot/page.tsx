import type { Metadata } from "next";
import Link from "next/link";

import Brainrot from "@/content/case-studies/brainrot.mdx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Brainrot AI Case Study - Odysseas Papadimas",
  description:
    "How Odysseas Papadimas shipped Brainrot AI to production in under two weeks. Auth, payments, AI orchestration, and admin.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BrainrotAI",
      "description": "AI video generator used by 2,200+ creators and ranked #11 Product of the Day on Product Hunt. Built end-to-end with auth, billing, rendering pipeline, admin, and analytics.",
      "url": "https://brainrot.ai",
      "author": {
        "@type": "Person",
        "name": "Odysseas Papadimas",
        "url": "https://odysseas.tech"
      },
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }),
  },
};

export default function BrainrotCaseStudyPage() {
  return (
    <article className="mx-auto space-y-12 py-16">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Case Study
        </p>
        <h1 className="text-4xl font-semibold">Brainrot AI — From idea to production</h1>
        <p className="text-sm text-muted-foreground">
          Auth, payments, AI orchestration, and admin shipped in under two weeks.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Book an intro
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Email me
          </Link>
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <Brainrot />
      </div>

      <footer className="rounded-3xl border border-primary/50 bg-primary/10 p-8 text-center">
        <h2 className="text-2xl font-semibold">Have a feature to ship?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pick a slot that works and we&apos;ll scope it together.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Book an intro
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Email me
          </Link>
        </div>
      </footer>
    </article>
  );
}
