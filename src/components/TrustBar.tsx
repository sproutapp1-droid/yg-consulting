"use client";

import { TRUST_BRANDS } from "@/lib/constants";
import ScrollFadeIn from "./ui/ScrollFadeIn";

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <p className="text-center text-sm text-text-secondary font-medium uppercase tracking-wider mb-8">
            Trusted by leading global brands
          </p>
        </ScrollFadeIn>
      </div>

      {/* Auto-scrolling brand marquee */}
      <div className="overflow-hidden">
        <div className="trust-scroll-container animate-scroll-left">
          {/* Duplicate brands for seamless loop */}
          {[...TRUST_BRANDS, ...TRUST_BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="inline-block px-8 md:px-12 text-lg md:text-xl font-semibold text-text-primary/40 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
