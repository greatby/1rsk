import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <FaChevronDown
          className={`text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 pb-4">{answer}</p>
      </div>
    </div>
  );
}
