"use client";

import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/translations";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

const STEPS: { step: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { step: "01", titleKey: "step1Title", descKey: "step1Desc" },
  { step: "02", titleKey: "step2Title", descKey: "step2Desc" },
  { step: "03", titleKey: "step3Title", descKey: "step3Desc" },
];

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title={t("howItWorksHeadline")} />
        </ScrollFadeIn>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {STEPS.map((step, i) => (
              <ScrollFadeIn key={step.step} delay={0.15 * i}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                    {step.step}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-border mx-auto -mt-3 mb-3" />
                  )}
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
