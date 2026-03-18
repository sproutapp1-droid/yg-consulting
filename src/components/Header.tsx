"use client";

import { useState } from "react";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Header() {
  const scrolled = useScrollPosition(50);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        <a href="#" className="font-serif text-xl md:text-2xl font-bold text-primary">
          YG Consulting
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-text-primary" : "text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-text-primary" />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
