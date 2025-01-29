"use client";

import { useState } from "react";

const faqs = [
  { question: "What is PodPoints?", answer: "PodPoints is a platform that helps users discover and track their favorite podcasts while earning rewards." },
  { question: "How do I sign up?", answer: "You can sign up by clicking the 'Sign Up' button on the homepage and following the instructions." },
  { question: "Is PodPoints free to use?", answer: "Yes! PodPoints offers a free version, but you can upgrade to premium plans for additional features." },
  { question: "Can I change my subscription?", answer: "Yes, you can manage your subscription from the account settings page." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left bg-gray-100 p-3 rounded-md flex justify-between items-center"
          >
            <span className="text-lg font-medium text-gray-700">{faq.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 p-3 bg-gray-50 text-gray-600 rounded-md">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
