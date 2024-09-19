"use client";

import React, { useState } from "react";
import { MedSection } from "../components/Section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
  },
  {
    question: "Question 4",
    answer: "Answer 4",
  },
  {
    question: "Question 5",
    answer: "Answer 5",
  },
  {
    question: "Question 6",
    answer: "Answer 6",
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
      <div className="h-full flex flex-col md:flex-row justify-between w-full px-4 md:px-20 pt-10 text-white">
        <div className="w-full md:w-4/6 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg mb-4">
            Have a question that is not answered? You can contact us at
            <br />
            <a href="mailto:" className="text-blue-400"></a>
          </p>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-gray-900 hover:bg-gray-600 rounded-sm transition duration-250"
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
              </button>
              <div
                className={`faq-answer transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 p-4" : "max-h-0"
                } bg-black rounded-md mt-2`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/6 p-5 bg-green md:ml-8">
          box for address
        </div>
      </div>
    </MedSection>
  );
};

export default FAQ;
