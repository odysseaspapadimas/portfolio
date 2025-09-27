import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactSuccessPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Message sent! 🎉
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
          Back to home
        </Link>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-2"
          )}
        >
          Learn more about me
        </Link>
      </div>
    </main>
  );
}
