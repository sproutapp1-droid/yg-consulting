"use client";

import { useI18n } from "@/lib/i18n-context";
import ScrollFadeIn from "./ui/ScrollFadeIn";

interface InlineCTAProps {
  variant: "social-proof" | "value-prop";
}

export default function InlineCTA({ variant }: InlineCTAProps) {
  const { t } = useI18n();

  if (variant === "social-proof") {
    return (
      <section className="py-12 md:py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <p className="text-lg md:text-xl font-medium text-text-primary mb-5">
              {t("inlineCtaSocialProof")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              {t("inlineCtaSocialProofBtn")}
            </a>
          </ScrollFadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="border-l-4 border-accent pl-6 md:pl-8">
            <p className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-2">
              {t("inlineCtaValueProp")}
            </p>
            <p className="text-text-secondary text-lg mb-5">
              {t("inlineCtaValuePropSub")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              {t("inlineCtaValuePropBtn")}
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
