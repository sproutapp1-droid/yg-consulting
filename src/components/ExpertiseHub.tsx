"use client";

import { useI18n } from "@/lib/i18n-context";
import { EXPERTISE_PAGES } from "@/lib/expertise-data";
import { TranslationKey } from "@/lib/translations";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import {
  Building2,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
};

export default function ExpertiseHub() {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-14 md:mb-20">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-primary mb-5">
              {t("expHubH1" as TranslationKey)}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t("expHubSubtitle" as TranslationKey)}
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EXPERTISE_PAGES.map((page, i) => {
            const Icon = ICON_MAP[page.icon] || Building2;
            const titleKey = `expHubCard${i + 1}Title` as TranslationKey;
            const descKey = `expHubCard${i + 1}Desc` as TranslationKey;

            return (
              <ScrollFadeIn key={page.slug} delay={i * 0.08}>
                <a
                  href={`/expertise/${page.slug}`}
                  className="group block bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 h-full border border-transparent hover:border-primary/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h2 className="font-serif text-xl md:text-[1.375rem] font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {t(titleKey)}
                  </h2>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5">
                    {t(descKey)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    {t("expHubLearnMore" as TranslationKey)}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
