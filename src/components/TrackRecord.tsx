"use client";

import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/translations";
import StatCounter from "./ui/StatCounter";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

const STAT_ITEMS: { target: number; suffix: string; labelKey: TranslationKey }[] = [
  { target: 20, suffix: "+", labelKey: "stat1Label" },
  { target: 13, suffix: "", labelKey: "stat2Label" },
  { target: 100, suffix: "+", labelKey: "stat3Label" },
  { target: 6, suffix: "", labelKey: "stat4Label" },
];

export default function TrackRecord() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-bg-dark" id="track-record">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title={t("trackRecordHeadline")} light />
        </ScrollFadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STAT_ITEMS.map((stat, i) => (
            <ScrollFadeIn key={stat.labelKey} delay={0.1 * i}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                  <StatCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm md:text-base">
                  {t(stat.labelKey)}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
