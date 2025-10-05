import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { businessContent } from "@/content/business";
import { home } from "@/content/home";
import { cn } from "@/lib/utils";
import Page from "@/components/ui/Page";




export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      {
        title: businessContent.meta.title,
      },
      {
        name: "description",
        content: businessContent.meta.description,
      },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
  <Page className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      <section className="space-y-6 sm:space-y-8 text-balance">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {businessContent.hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {businessContent.hero.heading}
          </h1>
          {businessContent.hero.paragraphs.map((p, i) => (
            <p key={i} className="max-w-2xl text-base sm:text-lg text-muted-foreground">
              {p}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 w-full sm:w-auto")}
            >
              {businessContent.hero.ctas.book}
            </a>
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 w-full sm:w-auto")}
            >
              {businessContent.hero.ctas.contact}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessContent.capabilities.items.map((item) => (
            <article
              key={item.label}
              className="space-y-2 rounded-2xl border border-border/60 bg-card/30 p-4 sm:p-5 text-sm text-muted-foreground"
            >
              <h2 className="text-sm sm:text-base font-semibold text-foreground">{item.label}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial (render only if present) */}
      {businessContent.testimonial && (
        <section className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{/* adapt heading when single testimonial */}
              {"Client highlight"}
            </h3>
            <div className="mt-3 rounded-2xl border border-border/60 bg-card/10 p-6">
              <blockquote className="text-sm text-muted-foreground">“{businessContent.testimonial.quote}”</blockquote>
              <div className="mt-3 text-sm text-foreground font-semibold">{businessContent.testimonial.author}</div>
              <div className="text-xs text-muted-foreground">{businessContent.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{businessContent.capabilities.title}</h2>
          <p className="text-sm text-muted-foreground">
            {businessContent.capabilities.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Object.values(businessContent.offerings).map((offer: any) => (
            <article
              key={offer.title}
              className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-border/60 bg-card/20 p-6 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.subtitle}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {offer.bullets.map((bullet: string) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}
              >
                {businessContent.capabilities.offersCTA}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">{businessContent.proof.heading}</h2>
          <p className="text-sm text-muted-foreground">
            {businessContent.proof.paragraph}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <Link
            to="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            {home.flagship.ctas.caseStudy}
          </Link>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
          >
            {home.flagship.ctas.bookIntro}
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{businessContent.process.title}</h2>
          <p className="text-sm text-muted-foreground">
            {businessContent.process.description}
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessContent.processSteps.map((step) => (
            <article
              key={step.title}
              className="space-y-3 rounded-2xl border border-border/60 bg-card/20 p-4 sm:p-6 text-sm text-muted-foreground"
            >
              <h3 className="text-sm sm:text-base font-semibold text-foreground">{step.title}</h3>
              <p>{step.detailEL}</p>
              <p className="text-muted-foreground/80">{step.detailEN}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/40 bg-primary/10 p-10 text-center">
        <h2 className="text-2xl font-semibold">{businessContent.capabilities.finalCTA.heading}</h2>
        <p className="text-sm text-muted-foreground">{businessContent.capabilities.finalCTA.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {businessContent.capabilities.finalCTA.ctas.book}
          </a>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            {businessContent.capabilities.finalCTA.ctas.contact}
          </Link>
        </div>
      </section>
    </Page>
  );
}

