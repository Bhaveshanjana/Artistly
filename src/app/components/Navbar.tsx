"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToggleMode } from "./ui/toggleMode";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/", label: "Events" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (href: string, label: string) => {
    if (label === "Home") {
      return pathname === "/";
    } else if (label === "Artists") {
      return pathname === "/artists";
    } else {
      return false;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-[#231942]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-purple-500" />
          <span className="text-xl font-bold text-[#231942] dark:text-white">
            Artistly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:text-lg font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-400 ${
                isActiveLink(link.href, link.label)
                  ? "text-purple-400"
                  : "text-[#231942] dark:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Join as Artist Button & ToggleMode */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Link href="/onboard">Join as Artist</Link>
          </Button>
          <ToggleMode />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#231942] dark:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
          <ToggleMode />
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#231942] pb-4 border-y border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col items-center gap-1 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  isActiveLink(link.href, link.label)
                    ? "text-purple-400 font-bold"
                    : "text-[#231942] dark:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-4/5 mt-2 bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/onboard">Join as Artist</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
