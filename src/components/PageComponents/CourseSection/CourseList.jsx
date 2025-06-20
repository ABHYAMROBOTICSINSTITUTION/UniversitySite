"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Bachelor of Science (B.Sc)",
    description: "A 3-year undergraduate program focusing on foundational and applied sciences.",
    duration: "3 Years",
    imageUrl: "/image1.jpg",
    category: "Undergraduate",
    slug: "bachelor-of-science-bsc"
  },
  {
    id: 2,
    title: "Bachelor of Technology (B.Tech)",
    description: "Engineering program with specializations in CS, EE, ME, etc.",
    duration: "4 Years",
    imageUrl: "/image2.jpg",
    category: "Undergraduate",
    slug: "bachelor-of-technology-btech"
  },
  {
    id: 3,
    title: "Master of Business Administration (MBA)",
    description: "Postgraduate program in business leadership, finance, and management.",
    duration: "2 Years",
    imageUrl: "/image3.jpg",
    category: "Postgraduate",
    slug: "master-of-business-administration-mba"
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    description: "Computer science program focused on software development and applications.",
    duration: "3 Years",
    imageUrl: "/image2.jpg",
    category: "Undergraduate",
    slug: "bachelor-of-computer-applications-bca"
  },
];

export default function CourseList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = 
      activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover programs designed to help you achieve your academic and career goals.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto md:min-w-[350px]">
            <label htmlFor="course-search" className="sr-only">Search courses</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="course-search"
              type="text"
              placeholder="Search courses by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:outline-none shadow-sm transition"
              aria-label="Search courses"
            />
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm"
          >
            <p className="text-gray-600 text-lg mb-6">
              No courses found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition shadow-md"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}