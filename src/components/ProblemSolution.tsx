import { COMPARISON_ROWS } from "@/lib/constants";
import { X, Check } from "lucide-react";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function ProblemSolution() {
  return (
    <section className="py-20 md:py-28 bg-white" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading
            title="Why brands choose specialist APAC consulting"
          />
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Problem Column */}
          <ScrollFadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-card p-6 md:p-8 h-full">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-6">
                The Typical Approach
              </h3>
              <div className="space-y-6">
                {COMPARISON_ROWS.map((row, i) => (
                  <div key={i} className="flex gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-text-primary">
                        {row.problem.title}
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {row.problem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* Solution Column */}
          <ScrollFadeIn delay={0.2}>
            <div className="bg-white rounded-card p-6 md:p-8 border-2 border-accent shadow-card h-full">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-6">
                Working with YG Consulting
              </h3>
              <div className="space-y-6">
                {COMPARISON_ROWS.map((row, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-text-primary">
                        {row.solution.title}
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {row.solution.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
