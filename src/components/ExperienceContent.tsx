"use client";

import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/translations";
import { ArrowLeft, Briefcase } from "lucide-react";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

interface ExperienceItem {
  companyKey: TranslationKey;
  companyContextKey?: TranslationKey;
  roleKey: TranslationKey;
  periodKey: TranslationKey;
  descKey: TranslationKey;
  highlightKeys: TranslationKey[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    companyKey: "exp1Company",
    companyContextKey: "exp1CompanyContext",
    roleKey: "exp1Role",
    periodKey: "exp1Period",
    descKey: "exp1Desc",
    highlightKeys: ["exp1Highlight1", "exp1Highlight2", "exp1Highlight3"],
  },
  {
    companyKey: "exp2Company",
    companyContextKey: "exp2CompanyContext",
    roleKey: "exp2Role",
    periodKey: "exp2Period",
    descKey: "exp2Desc",
    highlightKeys: ["exp2Highlight1", "exp2Highlight2", "exp2Highlight3", "exp2Highlight4"],
  },
  {
    companyKey: "exp3Company",
    companyContextKey: "exp3CompanyContext",
    roleKey: "exp3Role",
    periodKey: "exp3Period",
    descKey: "exp3Desc",
    highlightKeys: ["exp3Highlight1", "exp3Highlight2", "exp3Highlight3", "exp3Highlight4"],
  },
  {
    companyKey: "exp4Company",
    companyContextKey: "exp4CompanyContext",
    roleKey: "exp4Role",
    periodKey: "exp4Period",
    descKey: "exp4Desc",
    highlightKeys: ["exp4Highlight1", "exp4Highlight2", "exp4Highlight3"],
  },
  {
    companyKey: "exp5Company",
    companyContextKey: "exp5CompanyContext",
    roleKey: "exp5Role",
    periodKey: "exp5Period",
    descKey: "exp5Desc",
    highlightKeys: ["exp5Highlight1", "exp5Highlight2", "exp5Highlight3", "exp5Highlight4"],
  },
];

export default function ExperienceContent() {
  const { t } = useI18n();

  return (
    <section className="pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-[#E8F5EF] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </a>
          <SectionHeading
            title={t("experiencePageTitle")}
            subtitle={t("experiencePageSubtitle")}
          />
        </ScrollFadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <ScrollFadeIn key={exp.companyKey} delay={0.1 * i}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />

                  <div className="bg-white rounded-card p-6 md:p-8 shadow-card border border-border">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary">
                          {t(exp.companyKey)}
                        </h3>
                        {exp.companyContextKey && (
                          <span className="inline-block text-xs text-text-secondary bg-surface border border-border px-2.5 py-1 rounded-lg mt-1.5 leading-relaxed">
                            {t(exp.companyContextKey)}
                          </span>
                        )}
                        <p className="text-primary font-medium mt-1">
                          {t(exp.roleKey)}
                        </p>
                      </div>
                      <span className="text-sm text-text-secondary bg-surface px-3 py-1 rounded-full whitespace-nowrap">
                        {t(exp.periodKey)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-5">
                      {t(exp.descKey)}
                    </p>

                    {/* Key highlights */}
                    <div className="space-y-2">
                      {exp.highlightKeys.map((hKey) => (
                        <div key={hKey} className="flex items-start gap-2">
                          <Briefcase className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium text-text-primary">
                            {t(hKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
