"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaClock, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Bachelor of Science (B.Sc)",
    description: "A 3-year undergraduate program focusing on foundational and applied sciences.",
    duration: "3 Years",
    imageUrl: "/image1.jpg",
    category: "Undergraduate"
  },
  {
    id: 2,
    title: "Bachelor of Technology (B.Tech)",
    description: "Engineering program with specializations in CS, EE, ME, etc.",
    duration: "4 Years",
    imageUrl: "/image2.jpg",
    category: "Undergraduate"
  },
  {
    id: 3,
    title: "Master of Business Administration (MBA)",
    description: "Postgraduate program in business leadership, finance, and management.",
    duration: "2 Years",
    imageUrl: "/image3.jpg",
    category: "Postgraduate"
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    description: "Computer science program focused on software development and applications.",
    duration: "3 Years",
    imageUrl: "/image2.jpg",
    category: "Undergraduate"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AvailableCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-24">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="title mb-4 ">
            Explore Our Courses
          </h2>
          <p className="description max-w-3xl mx-auto">
            Discover programs designed to help you achieve your academic and career goals.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto md:min-w-[350px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary-400 focus:border-transparent focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center py-16 bg-white"
          >
            <p className="text-black text-lg mb-6">No courses found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-3 bg-secondary-500 text-white rounded-full font-medium hover:bg-secondary-500 transition shadow-md"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="mr-2 text-secondary-500" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaGraduationCap className="mr-2 text-secondary-500" />
                      {course.category}
                    </div>
                  </div>
                  
                  <Link
                    href="/apply-now"
                    className="inline-block w-full bg-primary-500 text-white text-center py-2 rounded-full font-semibold text-sm hover:bg-primary-600 transition mt-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}