import React from "react";

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  background = "from-indigo-600 via-purple-600 to-pink-600"
}) {
  return (
    <section className={`relative bg-gradient-to-r ${background} text-white py-20`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
            >
              {primaryCta.text}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
