"use client";

import { useI18n } from "@/lib/i18n-context";
import { EXPERTISE_PAGES } from "@/lib/expertise-data";
import { TranslationKey } from "@/lib/translations";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import {
  Building2,
  Building,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
  ClipboardList,
  Scissors,
  MapPin,
  Compass,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Building,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
  ClipboardList,
  Scissors,
  MapPin,
  Compass,
};

const EXPERTISE_SLUGS = [
  "business-development-asia",
  "retail-expert-asia",
  "brand-expansion-asia",
  "startup-business-asia",
  "luxury-retail-asia",
  "fashion-retail-asia",
  "store-operations-asia",
  "fashion-specialist-asia",
];

const MARKET_SLUGS = [
  "retail-expansion-china",
  "retail-expansion-hong-kong",
  "retail-expansion-southeast-asia",
];

export default function ExpertiseHub() {
  const { t } = useI18n();

  const expertisePages = EXPERTISE_PAGES.filter((p) =>
    EXPERTISE_SLUGS.includes(p.slug)
  );
  const marketPages = EXPERTISE_PAGES.filter((p) =>
    MARKET_SLUGS.includes(p.slug)
  );

  const renderCard = (page: (typeof EXPERTISE_PAGES)[number], i: number, offset: number) => {
    const Icon = ICON_MAP[page.icon] || Building2;
    const cardIndex = offset + i + 1;
    const titleKey = `expHubCard${cardIndex}Title` as TranslationKey;
    const descKey = `expHubCard${cardIndex}Desc` as TranslationKey;

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
  };

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

        {/* By Expertise */}
        <ScrollFadeIn>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-8">
            {t("expHubByExpertise" as TranslationKey)}
          </h2>
        </ScrollFadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {expertisePages.map((page, i) => renderCard(page, i, 0))}
        </div>

        {/* By Market */}
        <ScrollFadeIn>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-8">
            {t("expHubByMarket" as TranslationKey)}
          </h2>
        </ScrollFadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {marketPages.map((page, i) => renderCard(page, i, expertisePages.length))}
        </div>
      </div>
    </section>
  );
}
