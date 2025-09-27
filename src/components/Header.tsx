import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="mt-12 flex items-center justify-between gap-6">
      <Link href="/" className="text-sm text-muted-foreground">
        {site.name} · {site.title}
      </Link>

      <nav className="flex items-center gap-4 text-sm text-muted-foreground">
        <Link href="/about" className="transition hover:text-foreground">
          About
        </Link>
        <Link href="/case-studies/brainrot" className="transition hover:text-foreground">
          Case study
        </Link>
        <Link href="/contact" className="transition hover:text-foreground">
          Contact
        </Link>
        <Link
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "gap-1")}
        >
          Book intro
        </Link>
      </nav>
    </header>
  );
};
export default Header;
