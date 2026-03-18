"use client";

import { ABOUT_CONTENT, CREDENTIALS } from "@/lib/constants";
import { GraduationCap, Languages } from "lucide-react";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title={ABOUT_CONTENT.headline} />
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <ScrollFadeIn>
            <div>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {ABOUT_CONTENT.body}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-primary">{ABOUT_CONTENT.education}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-primary">{ABOUT_CONTENT.languages}</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Credential Cards */}
          <div className="space-y-4">
            {CREDENTIALS.map((cred, i) => (
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
