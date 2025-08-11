import React from "react";

export default function IconBulletSection({ title, subtitle, bullets }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-12">{subtitle}</p>}

        <div className="grid gap-8 md:grid-cols-2">
          {bullets.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex items-start gap-4 transition"
            >
              <div className="text-indigo-600 text-3xl flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                {Array.isArray(b.desc) ? (
                  b.desc.map((p, i) => (
                    <p key={i} className="text-gray-600 mb-2">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">{b.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
