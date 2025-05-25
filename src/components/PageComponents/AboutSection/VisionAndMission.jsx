"use client";

import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import Image from "next/image";

const visionAndMissionData = [
  {
    id: 1,
    type: "Vision",
    icon: <FaEye className="text-3xl" />,
    title: "Our Vision",
    description: "To be a leading institution in fostering innovation, critical thinking, and global citizenship through education and research.",
    imageUrl: "/image1.jpg",
    gradient: "from-primary-500 to-indigo-600"
  },
  {
    id: 2,
    type: "Mission",
    icon: <FaBullseye className="text-3xl" />,
    title: "Our Mission",
    description: "Our mission is to empower students with knowledge, skills, and values to contribute meaningfully to society and excel in a changing world.",
    imageUrl: "/image2.jpg",
    gradient: "from-secondary-500 to-pink-600"
  },
];

export default function VisionAndMission() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">
            Vision & Mission
          </h2>
          <p className="description max-w-3xl mx-auto">
            Guiding principles that shape our institution's purpose and direction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {visionAndMissionData.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 lg:h-64 w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-50`}></div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mr-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} mr-2`}></span>
                  <span className="text-sm font-medium text-gray-500">{item.type} Statement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}