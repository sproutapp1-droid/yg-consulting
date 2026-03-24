"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import ScrollFadeIn from "./ui/ScrollFadeIn";

export default function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: t("heroStat1Value"), label: t("heroStat1Label") },
    { value: t("heroStat2Value"), label: t("heroStat2Label") },
    { value: t("heroStat3Value"), label: t("heroStat3Label") },
  ];

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#E8F5EF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollFadeIn>
            <div className="max-w-xl">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                {t("heroBadge")}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                {t("heroHeadline")}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {t("heroSubheadline")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-light transition-colors"
                >
                  {t("heroPrimaryCta")}
                </a>
                <a
                  href="/expertise"
                  className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  {t("heroSecondaryCta")}
                </a>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 md:w-80 lg:w-96">
                <div className="relative aspect-[3/4] rounded-t-[999px] rounded-b-[40%] overflow-hidden shadow-card">
                  <Image
                    src="/images/yvonne-headshot.jpg"
                    alt="Yvonne Gan — Retail & Brand Strategy Consultant"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                <motion.div
                  className="hidden md:block absolute -left-8 md:-left-16 top-12 bg-white rounded-card px-4 py-3 shadow-card"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-2xl font-bold text-primary">{stats[0].value}</p>
                  <p className="text-xs text-text-secondary">{stats[0].label}</p>
                </motion.div>

                <motion.div
                  className="hidden md:block absolute -right-6 md:-right-12 top-1/3 bg-white rounded-card px-4 py-3 shadow-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-2xl font-bold text-primary">{stats[1].value}</p>
                  <p className="text-xs text-text-secondary">{stats[1].label}</p>
                </motion.div>

                <motion.div
                  className="hidden md:block absolute -left-4 md:-left-10 bottom-16 bg-white rounded-card px-4 py-3 shadow-card"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-2xl font-bold text-primary">{stats[2].value}</p>
                  <p className="text-xs text-text-secondary">{stats[2].label}</p>
                </motion.div>
              </div>
            </div>
          </ScrollFadeIn>

          <div className="flex justify-center gap-4 lg:hidden col-span-full">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-card px-4 py-3 shadow-card text-center">
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
