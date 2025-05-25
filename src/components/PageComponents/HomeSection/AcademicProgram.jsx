"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Bachelor's Degrees",
    description: "4-year undergraduate programs to build your foundation and launch your career with hands-on learning experiences.",
    image: "/image1.jpg",
    duration: "4 Years",
    features: ["120+ Credit Hours", "Internship Opportunities", "Research Projects"]
  },
  {
    title: "Master's Degrees",
    description: "2-year postgraduate programs to advance your knowledge with specialized coursework and professional development.",
    image: "/image2.jpg",
    duration: "2 Years",
    features: ["Thesis/Non-thesis Options", "Industry Partnerships", "Advanced Seminars"]
  },
  {
    title: "Doctoral Programs",
    description: "Cutting-edge PhD programs focused on original research, innovation, and academic leadership.",
    image: "/image3.jpg",
    duration: "4-6 Years",
    features: ["Dissertation Research", "Teaching Opportunities", "Global Collaborations"]
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AcademicProgram() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >

          <h2 className="title mb-4">
            Our Academic Programs
          </h2>
          <p className="description max-w-3xl mx-auto">
            Discover transformative education pathways designed to shape future leaders and innovators across disciplines.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={program.image}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  alt={program.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {program.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-5">{program.description}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Program Features</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

        
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default AcademicProgram;