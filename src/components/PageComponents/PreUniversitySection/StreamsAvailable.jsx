import React from 'react'

const streams = [
    { label: "Science", desc: "Focus on Medical, Engineering & Research Careers" },
    { label: "Commerce", desc: "Specialization in Business, Finance & Entrepreneurship" },
    { label: "Arts/Humanities", desc: "Ideal for Social Sciences, Media, and Administrative Careers" },
    { label: "Vocational & Skill", desc: "Industry-aligned courses for job-ready skills" }
  ];

function StreamsAvailable() {
  return (
    <section className="">
      <h3 className="text-xl md:text-2xl text-primary-500 font-bold underline mb-6">
        Streams Available:
      </h3>
      <ul className="space-y-4 text-gray-700">
        {streams.map((stream, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">📁</span>
            <span>
              <strong>{stream.label}</strong> – {stream.desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StreamsAvailable