import React from "react";

function SegmentCard({ icon, title, description, cta }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col text-center hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {cta && (
        <a
          href={cta.href}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          {cta.text}
        </a>
      )}
    </div>
  );
}

export default function SegmentCards({ segments }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((segment, idx) => (
          <SegmentCard key={idx} {...segment} />
        ))}
      </div>
    </section>
  );
}
