"use client";

import { SERVICES } from "@/lib/constants";
import {
  Store,
  Sparkles,
  Package,
  Palette,
  Users,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Store,
  Sparkles,
  Package,
  Palette,
  Users,
  Handshake,
};

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title="How I help brands succeed in APAC" />
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollFadeIn key={service.title} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-surface rounded-card p-6 md:p-8 shadow-card border border-border h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
