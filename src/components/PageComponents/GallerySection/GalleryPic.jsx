"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/image1.jpg", category: "Campus" },
  { src: "/image2.jpg", category: "Events" },
  { src: "/image3.jpg", category: "Students" },
  { src: "/image3.jpg", category: "Sports" },
  { src: "/image2.jpg", category: "Campus" },
  { src: "/image1.jpg", category: "Events" },
  { src: "/image2.jpg", category: "Students" },
  { src: "/image3.jpg", category: "Sports" },
];

const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

export default function GalleryPic() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 ">
      <div className="w-11/12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
       
          <h2 className="title mb-4">
            Our Gallery
          </h2>
          <p className="description max-w-3xl mx-auto">
            Explore moments from campus life, events, and student achievements.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end p-4">
                <span className="text-white font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative w-full max-w-6xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}