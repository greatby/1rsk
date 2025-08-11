import React from "react";
import FAQItem from "./FAQItem";

export default function FAQAccordion({ faqs, title, subtitle }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
        )}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
