"use client";

import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/translations";

const ANNOUNCE_KEYS: TranslationKey[] = [
  "announce1",
  "announce2",
  "announce3",
  "announce4",
  "announce5",
];

export default function AnnouncementBar() {
  const { t } = useI18n();
  const items = ANNOUNCE_KEYS.map((key) => t(key));

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bg-dark text-white/80 text-xs md:text-sm py-2 overflow-hidden">
      <div className="trust-scroll-container animate-scroll-left">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap px-6 md:px-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
