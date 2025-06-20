"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CourseCard({ course, index }) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
      className="bg-white overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
      aria-labelledby={`course-title-${course.id}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={course.imageUrl}
          alt={`${course.title} course image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3
          id={`course-title-${course.id}`}
          className="text-xl font-bold mb-3 text-gray-900 line-clamp-2"
        >
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>

        <div className="flex items-center gap-4 mb-5 mt-auto">
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="mr-2 text-secondary-500" aria-hidden="true" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaGraduationCap
              className="mr-2 text-secondary-500"
              aria-hidden="true"
            />
            {course.category}
          </div>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="inline-block w-full bg-primary-500 text-white text-center py-2 rounded-full font-semibold text-sm hover:bg-primary-600 transition"
          aria-label={`View details about ${course.title}`}
        >
          Read More
        </Link>

        {/* <Link
          href={"/admission-application"}
          className="inline-block w-full bg-primary-500 text-white text-center py-2 rounded-full font-semibold text-sm hover:bg-primary-600 transition"
          aria-label={`View details about ${course.title}`}
        >
          Apply Now
        </Link> */}
      </div>
    </motion.article>
  );
}
