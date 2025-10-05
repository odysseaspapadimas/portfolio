import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/content/site";
import { contactContent } from "@/content/contact";
import { caseStudiesContent } from "@/content/case-studies";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 sm:gap-6 h-(--header-height)">
      <Link to="/" className="text-sm font-semibold text-muted-foreground">
        {site.name} · {site.title}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
        <Link to="/about" className="transition hover:text-foreground">
          About
        </Link>
        <Link
          to="/case-studies/brainrot"
          className="transition hover:text-foreground"
        >
          {caseStudiesContent.brainrot.eyebrow}
        </Link>
        <Link to="/contact" className="transition hover:text-foreground">
          Contact
        </Link>
        <a
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "gap-1")}
        >
            {contactContent.cta.bookIntro}
        </a>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground">
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-4 text-sm mt-6">
            <Link
              to="/about"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/case-studies/brainrot"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              {caseStudiesContent.brainrot.eyebrow}
            </Link>
            <Link
              to="/contact"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-1 mt-4 w-fit")}
              onClick={() => setIsOpen(false)}
            >
              {contactContent.cta.bookIntro}
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
