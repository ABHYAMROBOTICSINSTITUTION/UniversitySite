"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = {
    general: [
      {
        question: "What are the university's operating hours?",
        answer: "Our main campus is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 1:00 PM."
      },
      {
        question: "How do I contact the administration office?",
        answer: "You can reach us at +1 (555) 123-4567 or email info@university.edu. Our office is located in the Main Administration Building, Room 101."
      }
    ],
    admissions: [
      {
        question: "What are the application deadlines?",
        answer: "Fall semester: June 1st, Spring semester: November 1st, Summer session: April 1st."
      },
      {
        question: "What documents are required for admission?",
        answer: "Completed application form, official transcripts, letters of recommendation, personal statement, and standardized test scores (if applicable)."
      }
    ],
    academics: [
      {
        question: "What majors and programs are offered?",
        answer: "We offer over 120 undergraduate and 80 graduate programs across 10 colleges including Engineering, Business, Arts & Sciences, and Medicine."
      },
      {
        question: "What is the student-to-faculty ratio?",
        answer: "Our student-to-faculty ratio is 15:1, ensuring personalized attention and mentorship opportunities."
      }
    ],
    campus: [
      {
        question: "Is on-campus housing available?",
        answer: "Yes, we offer various housing options including traditional dorms, suite-style living, and apartment complexes for upperclassmen."
      },
      {
        question: "What dining options are available?",
        answer: "We have 5 dining halls, 12 cafes, and numerous food trucks across campus, accommodating all dietary needs including halal, kosher, and vegan options."
      }
    ],
    financial: [
      {
        question: "What tuition payment options are available?",
        answer: "We accept full payment, installment plans, and work with various third-party financing options. Payment deadlines are August 1st for fall and December 1st for spring."
      },
      {
        question: "What scholarships are available?",
        answer: "We offer merit-based, need-based, athletic, and special talent scholarships. Over 60% of our students receive some form of financial aid."
      }
    ]
  };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <section className=" py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="mx-auto w-11/12">
        <div className="text-center mb-12">
          <h2 className="title mb-4">
            Frequently Asked Questions
          </h2>
          <p className="description max-w-2xl mx-auto">
            Find answers to common questions about our university
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setExpandedQuestion(null);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData[activeCategory].map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                expandedQuestion === index 
                  ? "border-blue-100 ring-2 ring-blue-100" 
                  : "border-gray-200"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left group"
                onClick={() => toggleQuestion(index)}
                aria-expanded={expandedQuestion === index}
              >
                <h3 className={`text-xl font-semibold transition-colors ${
                  expandedQuestion === index 
                    ? "text-primary-500" 
                    : "text-gray-800 group-hover:text-primary-500"
                }`}>
                  {faq.question}
                </h3>
                <span className={`ml-4 p-2 rounded-full transition-all ${
                  expandedQuestion === index 
                    ? "bg-blue-100 text-blue-600 rotate-180" 
                    : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}>
                  {expandedQuestion === index ? (
                    <FiMinus size={20} />
                  ) : (
                    <FiPlus size={20} />
                  )}
                </span>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedQuestion === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions? <a href="/contact" className="text-primary-500 hover:text-blue-800 font-medium">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;