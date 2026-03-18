import { PROCESS_STEPS } from "@/lib/constants";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading title="A straightforward engagement process" />
        </ScrollFadeIn>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollFadeIn key={step.step} delay={0.15 * i}>
                <div className="text-center relative">
                  {/* Step number circle */}
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                    {step.step}
                  </div>
                  {/* Vertical connector (mobile) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-border mx-auto -mt-3 mb-3" />
                  )}
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
