import React from "react";
import { FaBookOpen, FaGraduationCap, FaBriefcase, FaUniversity } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="relative bg-white my-16 md:my-24 mx-auto w-11/12">
      <div className="relative z-10">
      <h1 className="title mb-4">
        Welcome to Our University
      </h1>
      <p className="text-center text-gray-600 italic mb-4">
        *Setting The Stage For Tomorrow's Workplace In Today's Classroom*
      </p>

      <p className="description mb-10 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi, ex tempora alias eaque, hic rerum obcaecati eum non laborum repudiandae impedit quae maiores quod repellat, ipsam architecto quibusdam fugiat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam excepturi atque quidem, non inventore harum labore ipsam aperiam facere animi eveniet ad commodi tempore esse tempora. Quis, molestiae dignissimos.
      </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Academic Programs" 
            icon={<FaUniversity className="w-8 h-8" />} 
          />
          <FeatureCard 
            title="Library / e-Library" 
            icon={<FaBookOpen className="w-8 h-8" />} 
          />
          <FeatureCard 
            title="Scholarship" 
            icon={<FaGraduationCap className="w-8 h-8" />} 
          />
          <FeatureCard 
            title="On Job Training" 
            icon={<FaBriefcase className="w-8 h-8" />} 
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, icon }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full">
    <div className="absolute inset-0 bg-primary-500 opacity-10"></div>
    <div className="relative z-10 p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">
        Explore our comprehensive {title.toLowerCase()} designed for your success
      </p>
    </div>
  </div>
);

export default Welcome;