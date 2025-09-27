"use client";
import Link from "next/link";
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
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-8 sm:mt-12 flex items-center justify-between gap-4 sm:gap-6">
      <Link href="/" className="text-sm font-semibold text-muted-foreground">
        {site.name} · {site.title}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
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
              href="/about"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/case-studies/brainrot"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Case study
            </Link>
            <Link
              href="/contact"
              className="transition hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-1 mt-4 w-fit")}
              onClick={() => setIsOpen(false)}
            >
              Book intro
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
