import React from "react";
import ServiceItem from "./ServiceItem";

export default function ServiceCategory({ heading, description, services }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {description && (
          <p className="text-lg text-gray-600 mb-12">{description}</p>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceItem key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
