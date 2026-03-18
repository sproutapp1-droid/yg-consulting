"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { type Locale, type TranslationKey, getTranslations } from "./translations";

const SUPPORTED_LOCALES: Locale[] = ["en", "zh-CN", "zh-TW"];
const LOCALE_STORAGE_KEY = "yg-locale";

function detectLocale(): Locale {
  // 1. Check localStorage for a previously saved preference
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
      return saved as Locale;
    }
  }

  // 2. Detect from browser language
  if (typeof navigator !== "undefined") {
    const languages = navigator.languages ?? [navigator.language];
    for (const lang of languages) {
      const tag = lang.toLowerCase();
      // Exact or prefix matches for Chinese variants
      if (tag === "zh-tw" || tag === "zh-hant" || tag.startsWith("zh-hant")) return "zh-TW";
      if (tag === "zh-cn" || tag === "zh-hans" || tag.startsWith("zh-hans")) return "zh-CN";
      // Generic Chinese defaults to Simplified
      if (tag === "zh" || tag.startsWith("zh-")) return "zh-CN";
      if (tag.startsWith("en")) return "en";
    }
  }

  return "en";
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Detect language on client mount
  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  // Update <html> lang attribute when locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Persist locale changes to localStorage
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => getTranslations(locale)[key],
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
