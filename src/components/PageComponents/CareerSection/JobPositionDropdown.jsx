"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";

const jobPositions = [
  {
    id: 1,
    title: "Assistant Professor – Computer Science",
    description:
      "Responsible for teaching undergraduate courses in computer science, conducting research, and mentoring students. PhD preferred.",
    department: "Computer Science Department",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Admissions Counselor",
    description:
      "Guide prospective students through the admissions process, provide campus tours, and support application documentation.",
    department: "Admissions Office",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Library Assistant",
    description:
      "Assist with library operations, help students and faculty locate resources, and maintain an organized library environment.",
    department: "University Library",
    type: "Part-time",
  },
  {
    id: 4,
    title: "Research Associate – Environmental Studies",
    description:
      "Support ongoing research projects related to sustainability and climate change. Fieldwork and data analysis required.",
    department: "Environmental Science Department",
    type: "Contract",
  },
];

function JobPositionDropdown() {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="py-16 md:py-24 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4"
      >
        <div>
          <h2 className="md:text-4xl text-3xl font-bold text-left text-primary-500 mb-2">Current Job Openings</h2>
          <p className="description max-w-3xl">
            Explore career opportunities and become part of our innovative academic community.
          </p>
        </div>
        <Link
          href={`/apply-for-job`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 whitespace-nowrap"
        >
          Apply For Job
        </Link>
      </motion.div>

      <div className="space-y-6">
        {jobPositions.length > 0 ? (
          jobPositions.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleJob(job.id)}
                aria-expanded={expandedJob === job.id}
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary-500">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-secondary-500">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {expandedJob === job.id ? (
                    <FiMinus className="h-6 w-6 text-gray-600" />
                  ) : (
                    <FiPlus className="h-6 w-6 text-gray-600" />
                  )}
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedJob === job.id ? "auto" : 0,
                  opacity: expandedJob === job.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">{job.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              Currently there are no job openings available. Please check back later.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default JobPositionDropdown;