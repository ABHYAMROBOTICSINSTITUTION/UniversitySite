"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";

const blogs = [
  {
    id: 1,
    title: "Top 10 Universities for International Students in 2025",
    excerpt:
      "Looking to study abroad? Check out these top universities known for welcoming international students and offering great opportunities.",
    date: "May 10, 2025",
    author: "Education Abroad",
    imageUrl: "/image1.jpg",
    category: "University Rankings",
    slug: "top-universities-international-students-2025",
    content: [
      {
        type: "paragraph",
        text: "Choosing the right university as an international student can be challenging. This comprehensive guide highlights the top 10 universities that offer exceptional support, resources, and opportunities for students from abroad.",
      },
      {
        type: "heading",
        text: "1. Harvard University",
      },
      {
        type: "paragraph",
        text: "Harvard continues to lead with its extensive international student services, including dedicated advisors, cultural organizations, and generous financial aid packages for overseas students.",
      },
      {
        type: "image",
        alt: "Harvard University campus",
      },
      {
        type: "heading",
        text: "2. University of Oxford",
      },
      {
        type: "paragraph",
        text: "Oxford's collegiate system provides a close-knit community for international students, with each college offering its own support services and social activities.",
      },
    ],
  },
];

export default function SingleBlogPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Blog not found.
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
              href="/blog"
              className="inline-flex border border-primary-500 rounded-md px-3 py-1 items-center text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </div>

          <div className=" pt-4 pb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className=" py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <RiUser3Line className="mr-1" />
                {blog.author}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <IoMdTime className="mr-1" />
                {blog.date}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
              {blog.title}
            </h1>
          </div>

          <div className="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className=" py-8 md:py-12">
            <div className=" mx-auto">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>

              {blog.content.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.type === "heading" && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                      {section.text}
                    </h2>
                  )}
                  {section.type === "paragraph" && (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <FaFacebook />
                </Link>

                <Link
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div> */}
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
