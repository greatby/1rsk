
import React from "react";

export default function DetailedValueSection({ seoTitle, heading, intro, bullets }) {
  const renderParagraphs = (p) => {
    if (!p) return null;
    if (Array.isArray(p)) return p.map((t, i) => <p key={i} className="text-gray-700 mb-3">{t}</p>);
    return <p className="text-gray-700 mb-3">{p}</p>;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
       
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
       
        {seoTitle && (
          <p className="text-sm text-gray-500 mb-4 italic">{seoTitle}</p>
        )}

        {renderParagraphs(intro)}

        <div className="space-y-8 mt-6">
          {bullets.map((b, idx) => (
            <div key={idx} className="border-l-4 border-indigo-600 pl-5">
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              {renderParagraphs(b.desc)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
