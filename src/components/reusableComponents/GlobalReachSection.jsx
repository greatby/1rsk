import React from "react";

export default function GlobalReachSection({ title, subtitle, regions }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-12">{subtitle}</p>}

        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg p-8 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-600 text-3xl flex-shrink-0">
                  {region.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {region.heading}
                </h3>
              </div>
              {region.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

