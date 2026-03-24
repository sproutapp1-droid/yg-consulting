"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

export default function ScrollCTA() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyDismissed = sessionStorage.getItem("scrollCtaDismissed");
    if (alreadyDismissed) {
      setDismissed(true);
      return;
    }

    function handleScroll() {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.6);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;

    const timer = setTimeout(() => {
      handleDismiss();
    }, 10000);

    return () => clearTimeout(timer);
  }, [visible, dismissed]);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem("scrollCtaDismissed", "1");
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-5 z-40 hidden md:block bg-white rounded-2xl shadow-lg border border-border p-5 max-w-xs"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm font-medium text-text-primary mb-3 pr-4">
            {t("scrollCtaText")}
          </p>
          <a
            href="#contact"
            onClick={handleDismiss}
            className="inline-block bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            {t("scrollCtaBtn")}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
