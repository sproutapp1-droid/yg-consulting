"use client";

import { GraduationCap, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const { t } = useI18n();

  const credentials = [
    { role: t("credential1Role"), company: t("credential1Company") },
    { role: t("credential2Role"), company: t("credential2Company") },
    { role: t("credential3Role"), company: t("credential3Company") },
    { role: t("credential4Role"), company: t("credential4Company") },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title={t("aboutHeadline")} />
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollFadeIn>
            <div>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {t("aboutBody")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-primary">{t("aboutEducation")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-primary">{t("aboutLanguages")}</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          <div className="space-y-4">
            {credentials.map((cred, i) => (
              <ScrollFadeIn key={cred.company} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-card p-5 shadow-card border border-border">
                  <p className="font-semibold text-text-primary">{cred.role}</p>
                  <p className="text-sm text-text-secondary mt-1">{cred.company}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
