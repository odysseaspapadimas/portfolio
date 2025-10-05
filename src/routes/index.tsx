import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { cn } from "@/lib/utils";
import Page from "@/components/ui/Page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: home.meta.title },
      { name: "description", content: home.meta.description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
  <Page className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      <section className="space-y-4 sm:space-y-6 text-balance">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {home.hero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          {home.hero.heading}
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
          {home.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
          <Link
            to="/business"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {home.hero.ctas.business}
          </Link>
          <Link
            to="/founders"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            {home.hero.ctas.founders}
          </Link>
          <Link
            to="/about"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "gap-2"
            )}
          >
            {home.hero.ctas.about}
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur md:grid-cols-2">
        <article className="space-y-3 text-sm text-muted-foreground">
            <h2 className="text-lg font-semibold text-foreground">{home.businessCard.heading}</h2>
            <p>{home.businessCard.description}</p>
            <Link
              to="/business"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {home.businessCard.cta}
            </Link>
        </article>
        <article className="space-y-3 text-sm text-muted-foreground">
            <h2 className="text-lg font-semibold text-foreground">{home.foundersCard.heading}</h2>
            <p>{home.foundersCard.description}</p>
            <Link
              to="/founders"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-fit px-3"
              )}
            >
              {home.foundersCard.cta}
            </Link>
        </article>
      </section>

      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <h2 className="text-xl font-semibold text-foreground">{home.flagship.title}</h2>
        <p className="text-sm text-muted-foreground">{home.flagship.description}</p>
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
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1"
            )}
          >
            {home.flagship.ctas.bookIntro}
          </a>
        </div>
      </section>
    </Page>
  );
}

