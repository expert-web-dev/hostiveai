import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faqs';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  toggleOpen 
}) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      )}
    </button>
    
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="pb-5 text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our hosting services? Find answers to common questions below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => handleToggle(index)}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Can't find the answer you're looking for?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium"
            >
              Contact our support team
              <ChevronDown className="ml-1 h-4 w-4 transform rotate-270" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;