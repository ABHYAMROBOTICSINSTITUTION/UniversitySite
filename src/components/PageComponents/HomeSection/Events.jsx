
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    title: "Innovation & Entrepreneurship Summit",
    description: "A platform for students to pitch their startup ideas to industry leaders and investors.",
    image: "/image1.jpg",
    date: "May 15-17, 2025",
    location: "University Auditorium",
    category: "Business"
  },
  {
    title: "Cultural Fest 2025",
    description: "A celebration of diversity with performances, food, and fashion from across the globe.",
    image: "/image2.jpg",
    date: "June 5-7, 2025",
    location: "University Grounds",
    category: "Cultural"
  },
  {
    title: "Tech Talks: AI & The Future",
    description: "Guest speakers from top tech companies discuss AI, machine learning, and the future of work.",
    image: "/image3.jpg",
    date: "April 22, 2025",
    location: "Tech Innovation Center",
    category: "Technology"
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

function Events() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >

          <h2 className="title mb-4">
           Our Events
          </h2>
          <p className="description max-w-3xl mx-auto">
            Explore some of the key events and activities that help shape the dynamic experience at Our University.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={event.image}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  alt={event.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {event.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-5">{event.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Events;