"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n-context";
import { LOCALES } from "@/lib/translations";
import { Globe } from "lucide-react";

export default function LanguageDropdown() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLabel = LOCALES.find((l) => l.code === locale)?.label ?? "EN";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-primary transition-colors px-2 py-1.5 rounded-lg hover:bg-primary/5"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        {currentLabel}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-card border border-border py-1 min-w-[100px] z-50">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-surface ${
                locale === l.code
                  ? "text-primary font-semibold"
                  : "text-text-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
