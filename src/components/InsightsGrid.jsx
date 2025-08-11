import React from "react";

export default function InsightsGrid({ title, subtitle, articles }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-12">{subtitle}</p>}

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <a
                  href={article.href}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
