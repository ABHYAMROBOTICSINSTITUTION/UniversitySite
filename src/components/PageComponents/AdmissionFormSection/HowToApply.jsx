"use client";

import React from "react";
import { FiSearch, FiUsers, FiEdit, FiClipboard, FiMail } from "react-icons/fi";

export default function HowToApply() {
  const steps = [
    {
      title: "1. Explore Programs",
      description:
        "Browse our industry-focused programs across various sectors and choose the one that aligns with your interests and goals.",
      icon: <FiSearch className="w-6 h-6" />,
    },
    {
      title: "2. Get Counseled",
      description:
        "Connect with our admission counselors who will guide you in selecting the right program tailored to your strengths.",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      title: "3. Complete Online Application",
      description:
        "Fill out the online admission form on the official SSU website with accurate personal, academic, and contact details.",
      icon: <FiEdit className="w-6 h-6" />,
    },
    {
      title: "4. Undergo Assessment",
      description:
        "Take a general assessment to evaluate your understanding and exposure to your chosen sector.",
      icon: <FiClipboard className="w-6 h-6" />,
    },
    {
      title: "5. Await Confirmation",
      description:
        "Once shortlisted, you will receive communication regarding your admission status and further steps via email or phone.",
      icon: <FiMail className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="relative w-11/12 mx-auto text-center">
        <h2 className="title mb-4">
          How to Apply
        </h2>
        <p className="description mb-10 max-w-3xl mx-auto">
          Follow these simple steps to begin your journey with Our University. Our admission process is designed
          to be inclusive, supportive, and straightforward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1"></div>
              
              <div className={`w-12 h-12 bg-pink-100 text-secondary-500 rounded-full flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              <div className="absolute top-4 right-4 text-3xl font-bold text-gray-100 z-0">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}