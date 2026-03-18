"use client";

import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";
import ScrollFadeIn from "./ui/ScrollFadeIn";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFadeIn>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("ctaHeadline")}
          </h2>
          <p className="text-lg text-white/70 mb-10">
            {t("ctaSubtext")}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-block bg-accent text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            {t("ctaButton")}
          </a>
          <p className="mt-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/60 hover:text-white transition-colors underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
