"use client";

import { STATS } from "@/lib/constants";
import StatCounter from "./ui/StatCounter";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function TrackRecord() {
  return (
    <section className="py-20 md:py-28 bg-bg-dark" id="track-record">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title="Proven results across Asia Pacific" light />
        </ScrollFadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <ScrollFadeIn key={stat.label} delay={0.1 * i}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                  <StatCounter
                    target={stat.target}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
