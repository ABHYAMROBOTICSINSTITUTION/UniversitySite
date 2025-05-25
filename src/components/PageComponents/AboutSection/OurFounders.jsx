import React from "react";
import Image from "next/image";

const founders = [
  {
    name: "Dr. Ayush Pandey",
    title: "Founder & Visionary Leader",
    image: "/person2.jpg",
    bio: "Dr. Jane Doe pioneered our mission of educational excellence, laying the foundation for a globally respected institution.",
  },
  {
    name: "Prof. Archana Thapa",
    title: "Co-Founder & Academic Head",
    image: "/person3.jpg",
    bio: "Prof. Smith brought academic rigor and a passion for innovation that shaped our university's world-class curriculum.",
  },
  {
    name: "Dr. Hishila Bhusal",
    title: "Co-Founder & Community Builder",
    image: "/person1.jpg",
    bio: "Dr. Khan fostered a culture of inclusion and service, embedding strong community values into our institution's identity.",
  },
];

export default function OurFounders() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="title mb-4">Our Founders</h2>
        <p className="text-lg text-gray-600  mb-10 max-w-2xl mx-auto">
          Meet the visionary minds who built our legacy of excellence, dedication, and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {founders.map((founder, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition duration-300">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                 className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-secondary-500 font-medium mb-2">{founder.title}</p>
              <p className="text-gray-600 text-sm">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
