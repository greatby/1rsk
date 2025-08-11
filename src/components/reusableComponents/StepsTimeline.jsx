import React from "react";
import StepCard from "./StepCard";

export default function StepsTimeline({ title, subtitle, steps }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
        )}

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.25rem] top-0 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <StepCard
                  number={idx + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
