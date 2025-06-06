import Image from "next/image";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sita Sharma",
    role: "Computer Science Student",
    message: "The university's learning environment is top-notch. The faculty and facilities have helped me grow beyond my expectations.",
    image: "/person1.jpg",
    rating: 5,
  },
  {
    name: "Ram Karki",
    role: "Mechanical Engineering Student",
    message: "Practical labs, experienced professors, and a vibrant campus life – everything you'd want from a university!",
    image: "/person2.jpg",
    rating: 4,
  },
  {
    name: "Anisha Thapa",
    role: "Business Administration Student",
    message: "From quality education to career support, this university has truly shaped my future. Highly recommended!",
    image: "/person3.jpg",
    rating: 5,
  },
  
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Voices of Our Students
          </h2>
          <p className="description max-w-3xl mx-auto">
            Hear from our students about their transformative experiences at our university.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-gray-200 text-4xl opacity-70" />
              
              <div className="flex items-center mb-6 gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6 relative">
                <p className="text-gray-700 italic relative z-10">"{testimonial.message}"</p>
                <div className="absolute -bottom-3 left-6 w-4 h-4 transform rotate-45 bg-inherit"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "opacity-100" : "opacity-30"} />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{testimonial.rating}/5 rating</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}