import React from "react";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-indigo-600 text-2xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function FeatureList({ features, title, subtitle }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        )}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
        )}
        <div className="space-y-8">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
