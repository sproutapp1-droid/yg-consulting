"use client";

import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

const NAV_KEYS = [
  { key: "navAbout" as const, href: "#about" },
  { key: "navServices" as const, href: "#services" },
  { key: "navTrackRecord" as const, href: "#track-record" },
  { key: "navHowItWorks" as const, href: "#how-it-works" },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-serif text-xl font-bold mb-2">
              {t("footerBrand")}
            </p>
            <p className="text-white/60 text-sm">
              {t("footerTagline")}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">
              {t("footerNavTitle")}
            </p>
            <nav aria-label="Footer navigation" className="space-y-1">
              {NAV_KEYS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm py-1.5"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">
              {t("footerContactTitle")}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-white/60 text-sm mt-2">
              {t("footerLocation")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white/40 text-xs">
            {t("footerCopyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
