import { createFileRoute, Link } from "@tanstack/react-router";
import Brainrot from "@/content/case-studies/brainrot.mdx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { caseStudiesContent } from "@/content/case-studies";
import Page from "@/components/ui/Page";

export const Route = createFileRoute("/case-studies/brainrot")({
  head: () => ({
    meta: [
      { title: caseStudiesContent.brainrot.meta.title },
      { name: "description", content: caseStudiesContent.brainrot.meta.description },
    ],
  }),
  component: BrainrotCaseStudyPage,
});

function BrainrotCaseStudyPage() {
  return (
    <Page className="space-y-12">
      <article>
        <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {caseStudiesContent.brainrot.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold">{caseStudiesContent.brainrot.heading}</h1>
        <p className="text-sm text-muted-foreground">{caseStudiesContent.brainrot.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {caseStudiesContent.brainrot.ctas.book}
          </a>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {caseStudiesContent.brainrot.ctas.contact}
          </Link>
        </div>
      </header>

      <div className="prose prose-invert max-w-none py-12">
        <Brainrot />
      </div>

      <footer className="rounded-3xl border border-primary/50 bg-primary/10 p-8 text-center">
        <h2 className="text-2xl font-semibold">{caseStudiesContent.brainrot.footer.heading}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{caseStudiesContent.brainrot.footer.paragraph}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {caseStudiesContent.brainrot.footer.book}
          </a>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {caseStudiesContent.brainrot.footer.contact}
          </Link>
        </div>
        </footer>
      </article>
    </Page>
  );
}

