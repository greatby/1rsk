import React from "react";

export default function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
