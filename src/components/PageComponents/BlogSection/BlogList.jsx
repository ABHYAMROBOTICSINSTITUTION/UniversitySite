"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const blogs = [
    {
      id: 1,
      title: "Top 10 Universities for International Students in 2025",
      excerpt: "Looking to study abroad? Check out these top universities known for welcoming international students and offering great opportunities.",
      date: "May 10, 2025",
      author: "Education Abroad",
      imageUrl: "/image1.jpg",
      category: "University Rankings",
      slug: "top-universities-international-students-2025",
    },
    {
      id: 2,
      title: "How to Choose the Right University for You",
      excerpt: "Not sure which university is the best fit for you? This easy guide will help you figure it out based on your goals and preferences.",
      date: "April 26, 2025",
      author: "Jane Morris",
      imageUrl: "/image2.jpg",
      category: "University Guide",
      slug: "how-to-choose-university",
    },
    {
      id: 3,
      title: "Why You Should Consider Studying at a UK University",
      excerpt: "Thinking about the UK for your studies? Learn why it’s a great choice—amazing education, culture, and career options after graduation.",
      date: "March 30, 2025",
      author: "Global Studies Team",
      imageUrl: "/image3.jpg",
      category: "Study in UK",
      slug: "benefits-of-uk-university",
    },
    {
      id: 4,
      title: "Understanding University Rankings: What Really Matters?",
      excerpt: "University rankings can be confusing. Let’s break down what they actually mean and how you should use them when choosing a school.",
      date: "March 10, 2025",
      author: "Samir Thapa",
      imageUrl: "/image2.jpg",
      category: "University Rankings",
      slug: "understanding-university-rankings",
    },
  ];
  

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="title mb-4">Latest Blogs</h2>
          <p className="description max-w-2xl mx-auto">
            Discover insights, tips, and news about universities and education
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
              placeholder="Search blogs by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm"
          >
            <p className="text-gray-600 text-lg mb-6">No blogs found matching your criteria.</p>
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
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}