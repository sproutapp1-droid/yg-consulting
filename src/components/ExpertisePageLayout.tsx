"use client";

import { useI18n } from "@/lib/i18n-context";
import { ExpertisePage } from "@/lib/expertise-data";
import { TranslationKey } from "@/lib/translations";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import StatCounter from "./ui/StatCounter";
import RelatedExpertise from "./RelatedExpertise";
import {
  Building2,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
  CheckCircle,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Store,
  Globe,
  Rocket,
  Diamond,
  Shirt,
};

interface ExpertisePageLayoutProps {
  page: ExpertisePage;
}

export default function ExpertisePageLayout({ page }: ExpertisePageLayoutProps) {
  const { t } = useI18n();
  const Icon = ICON_MAP[page.icon] || Building2;

  return (
    <article>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <a
              href="/expertise"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("navExpertise" as TranslationKey)}
            </a>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.15}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-primary leading-tight mb-4">
              {t(page.titleKey as TranslationKey)}
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-primary font-medium mb-6">
              {t(page.subtitleKey as TranslationKey)}
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.25}>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl">
              {t(page.heroIntroKey as TranslationKey)}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-8">
              {t(page.challengeTitleKey as TranslationKey)}
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {t(page.challengeP1Key as TranslationKey)}
              </p>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {t(page.challengeP2Key as TranslationKey)}
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* How Yvonne Helps — Capabilities */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
              How Yvonne Helps
            </h2>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {page.capabilities.map((cap, i) => (
              <ScrollFadeIn key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary mb-3">
                        {t(cap.titleKey as TranslationKey)}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                        {t(cap.descKey as TranslationKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="bg-surface rounded-2xl p-8 md:p-10 text-center border border-border">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                {t(page.ctaHeadlineKey as TranslationKey)}
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                {t("expCtaSubtext" as TranslationKey)}
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-light transition-colors mb-5"
              >
                {t("expCtaButton" as TranslationKey)}
              </a>
              <p className="text-sm text-text-secondary">
                {t("expCtaTrustedBy" as TranslationKey)}{" "}
                <span className="text-text-primary font-medium">
                  Dior · Ferragamo · Canada Goose
                </span>
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      {page.faqs && page.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
                {t("faqSectionTitle" as TranslationKey)}
              </h2>
            </ScrollFadeIn>

            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <ScrollFadeIn key={i} delay={i * 0.1}>
                  <details className="group bg-surface rounded-xl border border-border overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left">
                      <span className="font-medium text-text-primary text-base md:text-lg pr-4">
                        {t(faq.questionKey as TranslationKey)}
                      </span>
                      <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-text-secondary leading-relaxed text-base">
                        {t(faq.answerKey as TranslationKey)}
                      </p>
                    </div>
                  </details>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proof Points — Stats + Brands */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
              {page.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    <StatCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm md:text-base">
                    {t(stat.labelKey as TranslationKey)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {page.proofBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Related Expertise */}
      <RelatedExpertise slugs={page.relatedSlugs} />
    </article>
  );
}
