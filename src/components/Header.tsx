"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";
import LanguageDropdown from "./LanguageDropdown";
import { Menu } from "lucide-react";

const NAV_KEYS = [
  { key: "navAbout" as const, href: "/#about" },
  { key: "viewExperience" as const, href: "/experience" },
  { key: "navServices" as const, href: "/#services" },
  { key: "navTrackRecord" as const, href: "/#track-record" },
  { key: "navHowItWorks" as const, href: "/#how-it-works" },
];

export default function Header() {
  const scrolled = useScrollPosition(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        <a href="/" className="font-serif text-xl md:text-2xl font-bold text-primary">
          YG Consulting
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_KEYS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary text-text-primary"
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageDropdown />
          <a
            href="/#contact"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            {t("navCta")}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageDropdown />
          <button
            className="p-3"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-text-primary" />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
