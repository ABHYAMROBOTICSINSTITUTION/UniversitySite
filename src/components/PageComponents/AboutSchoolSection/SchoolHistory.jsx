"use client";

import React from "react";
import Image from "next/image";
import { FaMedal, FaUsers, FaLightbulb, FaHandshake, FaGlobe } from "react-icons/fa";

const values = [
  {
    text: "Over 100 years of educational excellence",
  },
  {
    text: "50+ academic programs across 8 schools",
  },
  {
    text: "Recognized as a top-tier research institution",
  },

];

function SchoolHistory() {
  return (
    <section className="relative w-full py-16 md:py-24 ">
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
              Our Rich History
              </h2>
              <p className="description max-w-3xl mx-auto">
              Founded in 1920, our university has grown from a small college to
              a nationally recognized institution with over 20,000 students.
              </p> <br />
              <p className="description max-w-3xl mx-auto">
              Through decades of change, we've maintained our commitment to
              academic rigor, community engagement, and student success.
              </p>
            </div>

            <ul className="space-y-4">
              {values.map((value, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-secondary-500">
                  ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-600">{value.text}</h3>
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

export default SchoolHistory;