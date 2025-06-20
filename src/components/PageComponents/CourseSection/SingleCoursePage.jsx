"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowLeft, 
  FaClock, 
  FaGraduationCap, 
  FaBookOpen, 
  FaUserGraduate, 
  FaCalendarAlt 
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Bachelor of Science (B.Sc)",
    description: "A 3-year undergraduate program focusing on foundational and applied sciences.",
    duration: "3 Years",
    imageUrl: "/image1.jpg",
    category: "Undergraduate",
    slug: "bachelor-of-science-bsc",
    overview: "The Bachelor of Science program provides students with a strong foundation in scientific principles and methodologies. This program is designed to develop critical thinking and analytical skills through a combination of theoretical knowledge and practical applications.",
    curriculum: [
      "First Year: Foundation courses in Mathematics, Physics, Chemistry, and Biology",
      "Second Year: Specialization courses based on chosen stream",
      "Third Year: Advanced topics and research project"
    ],
    requirements: [
      "Minimum 75% in 10+2 with Science subjects",
      "Entrance exam score (if applicable)",
      "English language proficiency"
    ],
    careerOpportunities: [
      "Research Scientist",
      "Lab Technician",
      "Science Writer",
      "Data Analyst"
    ]
  },
];

export default function SingleCoursePage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Course not found.
      </div>
    );
  }

  return (
    <section className="md:py-16 py-10">
      <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" overflow-hidden"
        >
          <div className=" pt-6">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 border border-primary-500 rounded-md px-3 py-1 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Back to all courses"
            >
              <FaArrowLeft aria-hidden="true" />
              Back to Courses
            </Link>
          </div>

          <div className="pt-6 pb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <FaClock className="mr-2 text-secondary-500" aria-hidden="true" />
                {course.duration}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
              {course.title}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              {course.description}
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
            <Image
              src={course.imageUrl}
              alt={`Cover image for ${course.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="py-6 md:py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="flex items-center text-lg font-semibold mb-4 text-gray-900">
                  <FaBookOpen className="mr-2 text-secondary-500" aria-hidden="true" />
                  Program Overview
                </h2>
                <p className="text-gray-700">
                  {course.overview}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="flex items-center text-lg font-semibold mb-4 text-gray-900">
                  <FaUserGraduate className="mr-2 text-secondary-500" aria-hidden="true" />
                  Career Opportunities
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {course.careerOpportunities.map((opportunity, index) => (
                    <li key={index}>{opportunity}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="flex items-center text-lg font-semibold mb-4 text-gray-900">
                  <FaCalendarAlt className="mr-2 text-secondary-500" aria-hidden="true" />
                  Admission Requirements
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Curriculum Structure
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-900">{item.split(':')[0]}:</h3>
                    <p className="text-gray-700">{item.split(':')[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admission-application"
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition text-center"
                aria-label="Apply for this course"
              >
                Apply Now
              </Link>
              <Link
                href="/contact-us"
                className="px-8 py-3 border border-primary-500 text-primary-500 rounded-full font-medium hover:bg-primary-50 transition text-center"
                aria-label="Request more information about this course"
              >
                Request Information
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}