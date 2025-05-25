"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogCard({ blog, index }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
          {blog.category}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">{blog.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <FaUser className="text-secondary-500" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-secondary-500" />
            <span>{blog.date}</span>
          </div>
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-block w-full bg-primary-500 text-white text-center py-2 rounded-full font-semibold text-sm hover:bg-primary-600 transition mt-auto"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}