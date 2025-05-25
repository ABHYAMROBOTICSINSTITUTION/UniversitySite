"use client";

import React from "react";
import Image from "next/image";
import { FaMedal, FaUsers, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

const values = [
  {
    text: "Excellence in Education",
    icon: <FaMedal className="text-secondary-500 text-xl" />
  },
  {
    text: "Inclusive & Diverse Community",
    icon: <FaUsers className="text-secondary-500 text-xl" />
  },
  {
    text: "Innovation & Research Focus",
    icon: <FaLightbulb className="text-secondary-500 text-xl" />
  },
  {
    text: "Ethical & Responsible Practices",
    icon: <FaHandshake className="text-secondary-500 text-xl" />
  },
  {
    text: "Global Perspective with Local Impact",
    icon: <FaGlobe className="text-secondary-500 text-xl" />
  },
];

function WhoWeAre() {
  return (
    <section className="relative w-full py-16 md:py-24 ">
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are an institution built on a foundation of passion for knowledge, cultural inclusivity, and a vision to empower students globally through transformative education.
              </p>
            </div>

            <ul className="space-y-4">
              {values.map((value, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{value.text}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] relative rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-2">
            <Image
              src="/image1.jpg"
              alt="Who We Are"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Campus Culture</h3>
              <p className="text-gray-200">Where tradition meets innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;