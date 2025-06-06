import React from 'react'
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";


const alumniData = [
    {
      name: "Dr. Sarah Johnson",
      graduationYear: 2010,
      degree: "PhD in Biomedical Engineering",
      currentRole: "Lead Researcher at GenTech Innovations",
      image: "/person1.jpg",
      quote: "The research opportunities at this university shaped my career in biotech.",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaTwitter />, url: "#" }
      ]
    },
    {
      name: "Michael Chen",
      graduationYear: 2015,
      degree: "MBA",
      currentRole: "VP of Strategy at Horizon Capital",
      image: "/person2.jpg",
      quote: "The business network I built here opened doors I never imagined.",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaGlobe />, url: "#" }
      ]
    },
    {
      name: "Priya Patel",
      graduationYear: 2018,
      degree: "Master of Computer Science",
      currentRole: "Senior Software Engineer at TechNova",
      image: "/person3.jpg",
      quote: "The hands-on projects prepared me perfectly for the tech industry.",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaGlobe />, url: "#" }
      ]
    },
    {
      name: "David Wilson",
      graduationYear: 2005,
      degree: "Bachelor of Architecture",
      currentRole: "Principal Architect at Urban Design Collective",
      image: "/person4.jpg",
      quote: "The design philosophy I learned here influences all my work today.",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaGlobe />, url: "#" }
      ]
    }
  ];
function AlumniProfile() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-11/12 mx-auto">
      <div className="text-center mb-10">
          <h2 className="title mb-4">Meet Our Esteemed Alumni</h2>
          <p className="description max-w-2xl mx-auto">
            Our alumni have gone on to lead inspiring careers in diverse industries around the globe. Here are just a few of their stories.
          </p>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumniData.map((alumni, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-primary-500 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  Class of {alumni.graduationYear} • {alumni.degree}
                </p>
                <p className="text-secondary-500 font-medium mb-4">{alumni.currentRole}</p>
                <p className="text-gray-600 italic mb-5">"{alumni.quote}"</p>
                <div className="flex justify-center space-x-3">
                  {alumni.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-primary-500 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>
  )
}

export default AlumniProfile