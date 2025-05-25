"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const facultyData = [
  {
    name: "Dr. Maya Shrestha",
    title: "Professor of Economics",
    description: "Renowned for her work in development economics and policy analysis, Dr. Shrestha has published in top journals and mentors doctoral students globally.",
    image: "/image1.jpg",
    expertise: ["Development Economics", "Policy Analysis", "Mentorship"],
  },
  {
    name: "Dr. James R. Thomas",
    title: "Dean of Engineering",
    description: "With over 20 years in AI and robotics research, Dr. Thomas bridges the gap between academia and industry through collaborative projects.",
    image: "/image2.jpg",
    expertise: ["Artificial Intelligence", "Robotics", "Industry Collaboration"],
  },
  {
    name: "Prof. Aisha Khan",
    title: "Chair of Humanities",
    description: "A thought leader in intercultural communication and ethics, Prof. Khan integrates global perspectives into her curriculum and research.",
    image: "/image3.jpg",
    expertise: ["Intercultural Communication", "Ethics", "Global Studies"],
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

export default function AcademicFaculty() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >
    
          <h2 className="title mb-4">
            Meet Our Esteemed Faculty
          </h2>
          <p className="description max-w-3xl mx-auto">
            Our distinguished faculty members are global leaders in their fields, combining academic rigor with real-world experience to inspire the next generation of thinkers and innovators.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                    <p className="text-secondary-500 font-medium">{faculty.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-5">{faculty.description}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty.expertise.map((item, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}