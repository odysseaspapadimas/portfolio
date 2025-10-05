import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Page from "@/components/ui/Page";

export const Route = createFileRoute("/contact/success")({
  component: ContactSuccessPage,
});

function ContactSuccessPage() {
  return (
  <Page className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Message sent! 🎉
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
          Back to home
        </Link>
        <Link
          to="/about"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-2"
          )}
        >
          Learn more about me
        </Link>
      </div>
    </Page>
  );
}
