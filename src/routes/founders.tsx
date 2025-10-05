import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { foundersContent } from "@/content/founders";
import { cn } from "@/lib/utils";
import Page from "@/components/ui/Page";

// content moved to src/content/founders.ts

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      {
        title: foundersContent.meta.title,
      },
      {
        name: "description",
        content: foundersContent.meta.description,
      },
    ],
  }),
  component: FoundersPage,
});

function FoundersPage() {
  return (
  <Page className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      <section className="space-y-6 sm:space-y-8 text-balance">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {foundersContent.hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {foundersContent.hero.heading}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
            {foundersContent.hero.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 w-full sm:w-auto")}
            >
              {foundersContent.hero.ctas.book}
            </a>
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 w-full sm:w-auto"
              )}
            >
              {foundersContent.hero.ctas.contact}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundersContent.signals.map((signal) => (
            <article
              key={signal.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/30 p-4 sm:p-5 text-sm text-muted-foreground"
            >
              <h2 className="text-sm sm:text-base font-semibold text-foreground">
                {signal.title}
              </h2>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{foundersContent.plugIn.title}</h2>
          <p className="text-sm text-muted-foreground">
            {foundersContent.plugIn.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {foundersContent.offers.map((offer) => (
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
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-fit"
                )}
              >
                {foundersContent.plugIn.requestProposal}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">{foundersContent.proof.heading}</h2>
          <p className="text-sm text-muted-foreground">{foundersContent.proof.paragraph}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <Link
            to="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            {foundersContent.proof.ctas.caseStudy}
          </Link>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1"
            )}
          >
            {foundersContent.proof.ctas.bookIntro}
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{foundersContent.howWeWork.title}</h2>
          <p className="text-sm text-muted-foreground">
            {foundersContent.howWeWork.description}
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundersContent.methods.map((method) => (
            <article
              key={method.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/20 p-4 sm:p-6 text-sm text-muted-foreground"
            >
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                {method.title}
              </h3>
              <p>{method.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/40 bg-primary/10 p-10 text-center">
        <h2 className="text-2xl font-semibold">{foundersContent.closing.heading}</h2>
        <p className="text-sm text-muted-foreground">{foundersContent.closing.paragraph}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              {foundersContent.closing.ctas.book}
            </a>
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2"
              )}
            >
              {foundersContent.closing.ctas.contact}
            </Link>
        </div>
      </section>
    </Page>
  );
}

