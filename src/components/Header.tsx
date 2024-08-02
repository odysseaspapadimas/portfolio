"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="h-[70px] flex items-center mt-12">
      <nav className="space-x-4">
        <Link
          href="/"
          className={clsx(
            "hover:text-gray-300",
            pathname === "/" && "underline",
            "underline-offset-4"
          )}
        >
          home
        </Link>

        <Link
          href="/about"
          className={clsx(
            "hover:text-gray-300",
            pathname === "/about" && "underline",
            "underline-offset-4"
          )}
        >
          about
        </Link>
      </nav>
    </header>
  );
};
export default Header;
