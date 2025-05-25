import React from 'react'

const points = [
    "Comprehensive Curriculum: Covers core academic subjects along with skill-based electives.",
    "Career-Focused Learning: Prepares students for higher education and professional success.",
    "Skill Development Training: Hands-on training in emerging industries like IT, Healthcare, Business, and more.",
    "Expert Faculty & Mentors: Experienced educators and industry professionals guide students.",
    "Modern Infrastructure: Digital classrooms, advanced labs, and a tech-enabled learning environment.",
    "Internships & Industry Exposure: Practical experience through live projects and internships.",
    "Scholarships & Financial Aid: Merit-based scholarships for deserving students."
  ];

  

function WhyChooseUs() {
  return (
    <section className="">
    <h3 className="text-xl md:text-2xl text-primary-500 font-bold underline mb-6">
      Why Choose Us for Pre-University (11th & 12th)?
    </h3>
    <ul className="space-y-3 text-gray-700">
      {points.map((text, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-2 text-green-600 font-bold">☑</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default WhyChooseUs