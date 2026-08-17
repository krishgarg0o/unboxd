"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find a Gift", href: "/#gift-finder" },
  { name: "Gift Ideas", href: "/gift-ideas" },
  { name: "Occasions", href: "/occasions" },
  { name: "Gift Guides", href: "/gift-guides" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-brand-cream)]/80 backdrop-blur-md border-b border-[var(--color-brand-taupe)]/20">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="UNBOXD Logo" 
            width={140} 
            height={40} 
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)]",
                pathname === link.href
                  ? "text-[var(--color-brand-charcoal)] font-semibold"
                  : "text-[var(--color-brand-charcoal)]/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/saved" aria-label="Saved Gifts">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/#gift-finder">
            <Button className="rounded-full font-semibold">
              Find My Gift &rarr;
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/saved" aria-label="Saved Gifts">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-brand-cream)] border-b border-[var(--color-brand-taupe)]/20 shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium p-2 text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-beige)] rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="text-lg font-medium p-2 text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-beige)] rounded-md">
                Contact
              </Link>
              <div className="pt-4 border-t border-[var(--color-brand-taupe)]/20">
                <Link href="/#gift-finder">
                  <Button className="w-full rounded-full font-semibold text-lg py-6">
                    Find My Gift &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
