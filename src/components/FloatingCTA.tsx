"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

export default function FloatingCTA() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function handleScroll() {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById("contact");

      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        const isNearContact = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(scrollY > 400 && !isNearContact);
      } else {
        setVisible(scrollY > 400);
      }
    }

    if (!prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 md:hidden inline-flex items-center gap-2 bg-accent text-primary px-5 py-3 rounded-full shadow-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
          aria-label={t("floatingCtaText")}
        >
          <MessageCircle className="w-4 h-4" />
          {t("floatingCtaText")}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
