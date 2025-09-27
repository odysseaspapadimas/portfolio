import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Odysseas Papadimas - Digital Systems for Businesses and Founders",
  description: "Digital systems that bring customers. Conversion-focused websites, online bookings, automations for businesses. Technical direction, shipping loops for SaaS founders. Portfolio of Odysseas Papadimas.",
};

export default function Home() {
  return (
    <main className="mx-auto flex flex-col gap-16 py-20">
      <section className="space-y-6 text-balance">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {site.title}
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Digital systems that bring customers.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Start with the path that fits you. If you run a business and need
          bookings, payments, and automations, I build the full stack. If
          you&apos;re a founder scaling SaaS, I ship the architecture and
          product layers with you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/business"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            I run a business
          </Link>
          <Link
            href="/founders"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            I&apos;m a founder
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "gap-2"
            )}
          >
            About me
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur md:grid-cols-2">
        <article className="space-y-3 text-sm text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">
            For businesses
          </h2>
          <p>
            Conversion-focused websites with Greek copy, online bookings that
            sync to your calendar, and automations so the team stops chasing
            no-shows.
          </p>
          <Link
            href="/business"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            View business services
          </Link>
        </article>
        <article className="space-y-3 text-sm text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">
            For founders
          </h2>
          <p>
            Technical direction, two-week shipping loops, and production
            guardrails—architecture diagrams, p95 targets, observability, and a
            build partner fluent in your stack.
          </p>
          <Link
            href="/founders"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-fit px-3"
            )}
          >
            Explore founder track
          </Link>
        </article>
      </section>

      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <h2 className="text-xl font-semibold text-foreground">
          Flagship proof
        </h2>
        <p className="text-sm text-muted-foreground">
          BrainrotAI — AI video generator used by 2,200+ creators. Ranked #11
          Product of the Day on Product Hunt.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <Link
            href="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            Read the case study
          </Link>
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1"
            )}
          >
            Book a 20-min intro
          </Link>
        </div>
      </section>
    </main>
  );
}
