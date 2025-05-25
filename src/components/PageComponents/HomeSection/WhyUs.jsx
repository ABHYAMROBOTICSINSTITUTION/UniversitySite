import React from "react";
import Image from "next/image";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaGlobeAmericas,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";
import Link from "next/link";

const points = [
  {
    text: "Industry-Aligned Curriculum",
    icon: <FaCheckCircle className="text-secondary-500" />,
  },
  {
    text: "Hands-on Practical Training",
    icon: <FaHandsHelping className="text-secondary-500" />,
  },
  {
    text: "State-of-the-Art Infrastructure",
    icon: <FaBuilding className="text-secondary-500" />,
  },
  {
    text: "Global Collaborations & Opportunities",
    icon: <FaGlobeAmericas className="text-secondary-500" />,
  },
  {
    text: "Strong Placement Support",
    icon: <FaUserTie className="text-secondary-500" />,
  },
];

function WhyUs() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
                Why Choose Us?
              </h2>

              <p className="description mb-8">
                We are dedicated to skill-based, industry-oriented education
                that prepares you for real-world challenges through innovative
                learning experiences.
              </p>
            </div>

            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {point.text}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 md:gap-4">
              <Link
                href="/courses"
                className="px-8 py-3 bg-primary-500 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary-500 border border-primary-500 font-medium rounded-full transition-colors shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/image1.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Experience Our Campus</h3>
              <p className="text-gray-200">
                Virtual tour available for prospective students
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary-500 font-medium shadow-sm">
              #1 in Student Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
