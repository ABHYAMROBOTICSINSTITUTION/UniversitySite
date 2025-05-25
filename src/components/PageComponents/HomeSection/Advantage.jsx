import React from 'react';
import { FaGlobe, FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';

const advantages = [
  {
    title: 'Culturally-Diverse University',
    description: 'Our student population is very diverse with students from across and around the world. This gives you the chance to learn from your instructors in class as well as from your peers.',
    icon: <FaGlobe />,
  },
  {
    title: 'Focus On Long-Term Career Success',
    description: 'Our curriculum and programs are designed to align with the needs of the job market and industry demands to ensure you\'re career-ready.',
    icon: <FaUserGraduate />,
  },
  {
    title: 'Highly Qualified & Experienced Faculty',
    description: 'Our faculty consists of industry experts and experienced educators who bring real-world insights into the classroom.',
    icon: <FaChalkboardTeacher />,
  },
  {
    title: 'Comprehensive Study Material',
    description: 'We provide up-to-date study material and practical learning resources to help you grasp concepts thoroughly.',
    icon: <FaBookOpen />,
  },
];

function Advantage() {
  return (
    <section className="relative w-full bg-primary-500 text-white py-16 md:py-24 overflow-hidden">
      
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Advantage
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mb-6">
                  {React.cloneElement(advantage.icon, { className: 'text-2xl text-white' })}
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-white/80 mb-4 flex-grow">{advantage.description}</p>
                <div className="mt-auto">
                  <div className="w-10 h-[2px] bg-white/50 group-hover:bg-white transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;