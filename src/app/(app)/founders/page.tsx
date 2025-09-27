import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Founder Services - Odysseas Papadimas",
  description:
    "I build product and infrastructure that moves the roadmap. Hands-on with SaaS founders from framing the bet to production. Portfolio of Odysseas Papadimas.",
  alternates: {
    hreflang: [
      { href: "https://odysseas.tech/founders", hreflang: "en" },
      { href: "https://odysseas.tech/business", hreflang: "el" },
    ],
  },
};

const founderSignals = [
  {
    title: "Founder‑first partnership",
    description:
      "I plug into your roadmap, rituals, and tools so each release moves a real business metric.",
  },
  {
    title: "Consistent progress, no micromanagement",
    description:
      "Clear priorities and visibility — without you tracking every task.",
  },
  {
    title: "Clear async communication",
    description:
      "Structured updates and notes that speak the language of investors and the product team.",
  },
];

const founderOffers = [
  {
    name: "Technical direction & roadmap",
    lead: "Align product goals with clear production guardrails.",
    outcomes: [
      "Prioritization tied to business objectives",
      "Stack and infra choices with high‑level costs",
      "Agreed next steps and success criteria",
    ],
  },
  {
    name: "Build critical capabilities",
    lead: "Ship where it matters: acquisition, payments, dashboards, integrations.",
    outcomes: [
      "Working modules ready for users",
      "Metrics and monitoring so issues surface early",
      "Scalable deploys with safe practices",
    ],
  },
  {
    name: "Embedded partnership",
    lead: "A partner on product without adding headcount.",
    outcomes: [
      "Priority syncs with the founder",
      "Crisp async updates inside your tools",
      "Materials for investor updates and tech diligence",
    ],
  },
];

const workingMethods = [
  {
    title: "Value‑first framing",
    detail:
      "Define the bet, pick the smallest slice that proves value, cut the noise.",
  },
  {
    title: "Continuous delivery",
    detail:
      "Small, continuous releases that keep momentum and enable fast decisions.",
  },
  {
    title: "Measure outcomes",
    detail:
      "Performance, analytics, and qualitative feedback in a living scorecard.",
  },
];

export default function FoundersPage() {
  return (
    <main className="mx-auto flex flex-col gap-20 py-20">
      <section className="space-y-8 text-balance">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Founder services
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            I build product and infrastructure that moves the roadmap.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            I work hands‑on with SaaS founders from framing the bet to
            production. We focus on capabilities that unlock growth — and
            communicate progress clearly to the team and investors, without
            unnecessary detail.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Book a call
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2"
              )}
            >
              Send me context
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {founderSignals.map((signal) => (
            <article
              key={signal.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/30 p-5 text-sm text-muted-foreground"
            >
              <h2 className="text-base font-semibold text-foreground">
                {signal.title}
              </h2>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Where I plug in</h2>
          <p className="text-sm text-muted-foreground">
            Engagement formats that fit your stage — and scale as needed.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {founderOffers.map((offer) => (
            <article
              key={offer.name}
              className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-border/60 bg-card/20 p-6 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{offer.lead}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {offer.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-fit"
                )}
              >
                Request a proposal
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Proof: BrainrotAI
          </h2>
          <p className="text-sm text-muted-foreground">
            AI video creation tool used by 2,200+ creators, ranked #11 Product
            of the Day on Product Hunt. Full SaaS with auth, pricing, video
            rendering pipeline, and analytics — delivered end‑to‑end.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <Link
            href="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            See the case study
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
            Book an intro call
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">How we work together</h2>
          <p className="text-sm text-muted-foreground">
            Operating cadence that keeps product velocity high with clear
            updates.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {workingMethods.map((method) => (
            <article
              key={method.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/20 p-6 text-sm text-muted-foreground"
            >
              <h3 className="text-base font-semibold text-foreground">
                {method.title}
              </h3>
              <p>{method.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/40 bg-primary/10 p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to move your product forward?
        </h2>
        <p className="text-sm text-muted-foreground">
          Send me your link or a short goals brief. I’ll reply with a quick
          audit and next‑step suggestions.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Book a call
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}
