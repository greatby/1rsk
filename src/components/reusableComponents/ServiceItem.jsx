import React from "react";

export default function ServiceItem({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      {icon && <div className="text-indigo-600 text-3xl mb-4">{icon}</div>}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
