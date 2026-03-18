"use client";

import { useEffect } from "react";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-serif text-lg font-bold text-primary">
            YG Consulting
          </span>
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 bg-primary text-white px-5 py-3 rounded-full text-center font-medium hover:bg-primary-light transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </>
  );
}
