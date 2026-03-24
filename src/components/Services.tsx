"use client";

import {
  Store,
  Sparkles,
  Package,
  Palette,
  Users,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import type { TranslationKey } from "@/lib/translations";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

const SERVICE_ITEMS: { icon: React.ElementType; titleKey: TranslationKey; descKey: TranslationKey; href: string }[] = [
  { icon: Store, titleKey: "service1Title", descKey: "service1Desc", href: "/expertise/business-development-asia" },
  { icon: Sparkles, titleKey: "service2Title", descKey: "service2Desc", href: "/expertise/brand-expansion-asia" },
  { icon: Package, titleKey: "service3Title", descKey: "service3Desc", href: "/expertise/fashion-retail-asia" },
  { icon: Palette, titleKey: "service4Title", descKey: "service4Desc", href: "/expertise/fashion-retail-asia" },
  { icon: Users, titleKey: "service5Title", descKey: "service5Desc", href: "/expertise/retail-expert-asia" },
  { icon: Handshake, titleKey: "service6Title", descKey: "service6Desc", href: "/expertise/business-development-asia" },
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title={t("servicesHeadline")} />
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollFadeIn key={service.titleKey} delay={0.1 * i}>
                <a href={service.href} className="block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface rounded-card p-6 md:p-8 shadow-card border border-border h-full group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {t(service.descKey)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("servicesLearnMore")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </motion.div>
                </a>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
