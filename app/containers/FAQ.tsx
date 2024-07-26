"use client";

import React, { useState } from "react";
import { MedSection } from "../components/Section";

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
    <MedSection id="faq">
      <div className="h-full flex flex-col lg:flex-row justify-between w-full px-20 py-10 text-white bg-black">
        <div className="w-4/6 ">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mb-4">
            Have a question that is not answered? You can contact us at
            <br />
            <a href="mailto:" className="text-blue-400"></a>
          </p>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-gray-900 hover:bg-gray-600  rounded-sm transition duration-250"
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
              </button>
              <div
                className={`faq-answer transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 p-4" : "max-h-0"
                } bg-white rounded-md mt-2`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="w-2/6 p-5 bg-green">box for address</div>
      </div>
    </MedSection>
  );
};

export default FAQ;
