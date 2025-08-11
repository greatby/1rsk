import React from "react";

export default function StepCard({ number, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
          {number}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
