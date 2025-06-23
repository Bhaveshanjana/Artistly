"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ToggleMode } from "./ui/toggleMode";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/onboard", label: "Onboard Artist" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-[#231942]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-purple-500" />
          <span className="text-xl font-bold text-[#231942] dark:text-white">
            Artistly
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:text-lg font-medium md:flex ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition-colors duration-200 dark:hover:text-blue-400 ${
                pathname === link.href
                  ? "text-purple-400"
                  : "text-[#231942] dark:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white hidden md:inline-flex"
          >
            <Link href="/onboard">Join as Artist</Link>
          </Button>
          <ToggleMode />
        </div>
      </div>
    </header>
  );
}
