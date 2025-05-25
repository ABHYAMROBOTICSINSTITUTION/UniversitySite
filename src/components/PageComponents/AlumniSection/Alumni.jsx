import React from 'react'


const stats = [
    { number: "25K+", label: "Alumni Worldwide" },
    { number: "120+", label: "Countries Represented" },
    { number: "85%", label: "Employed in Field of Study" },
    { number: "$95K", label: "Average Starting Salary" }
  ];


function Alumni() {
  return (
    <section className="py-16 md:py-24">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">Our Distinguished Alumni</h2>
          <p className="description max-w-3xl mx-auto">
            Join a network of successful graduates making an impact across industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-100 py-10 rounded-3xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-5xl mb-4">{stat.number}</p>
              <p className="text-[#808080]">{stat.label}</p>
            </div>
          ))}
        </div>
        </div>
        </section>
  )
}

export default Alumni

