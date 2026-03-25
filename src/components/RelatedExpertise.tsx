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

interface RelatedExpertiseProps {
  slugs: string[];
}

export default function RelatedExpertise({ slugs }: RelatedExpertiseProps) {
  const { t } = useI18n();
  const related = EXPERTISE_PAGES.filter((p) => slugs.includes(p.slug));

  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
            {t("expBizDevRelated" as TranslationKey)}
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((page, i) => {
            const Icon = ICON_MAP[page.icon] || Building2;
            const actualIndex = EXPERTISE_PAGES.findIndex(
              (p) => p.slug === page.slug
            );
            const actualCardTitleKey =
              `expHubCard${actualIndex + 1}Title` as TranslationKey;
            const actualCardDescKey =
              `expHubCard${actualIndex + 1}Desc` as TranslationKey;

            return (
              <ScrollFadeIn key={page.slug} delay={i * 0.1}>
                <a
                  href={`/expertise/${page.slug}`}
                  className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {t(actualCardTitleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {t(actualCardDescKey)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                    {t("expHubLearnMore" as TranslationKey)}
                    <ArrowRight className="w-4 h-4" />
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
