import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <div className="text-indigo-600 text-3xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function FeatureGrid({ features, title, subtitle }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        )}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
