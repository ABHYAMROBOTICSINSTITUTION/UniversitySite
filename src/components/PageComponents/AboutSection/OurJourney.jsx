
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Journey() {
  const data = [
    {
      year: "1900",
      title: "Establishment",
      description: "Our institution was founded with the vision to provide quality education to all.",
      image: "/image1.jpg",
    },
    {
      year: "1950",
      title: "First Graduate Program",
      description: "Launched our first graduate program, marking a significant academic milestone.",
      image: "/image2.jpg",
    },
    {
      year: "2000",
      title: "Global Recognition",
      description: "Recognized globally for research contributions and academic excellence.",
      image: "/image3.jpg",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Integrated modern technologies to enhance virtual learning and global collaboration.",
      image: "/image1.jpg",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
            <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">
           Our Journey
          </h2>
          <p className="description max-w-3xl mx-auto">
            A timeline of our growth, innovation, and impact in the education sector
          </p>
        </div>

        <div className="relative">          
          <div className="space-y-16 md:space-y-24">
            {data.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16`}>
                  <div className="w-full md:w-1/2 relative group">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                      <span className="text-2xl font-bold text-gray-800">{event.year}</span>
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 rounded-xl ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                    <h3 className="text-2xl font-bold text-secondary-500 mb-4">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;