"use client";

import React, { useState } from "react";
import { Section } from "../components/Section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Section id="faq">
      <div className="w-full max-h-full">
        <div className="w-full text-center text-4xl">
          <h1>FAQ</h1>
        </div>
        <div className="w-full h-full  p-20">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
              </button>
              <div
                className={`faq-answer transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 p-4" : "max-h-0"
                } bg-gray-500 rounded-md mt-2`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
