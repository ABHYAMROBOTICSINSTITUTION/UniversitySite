'use client';

import Image from 'next/image';

export default function RegistrarMessage() {
  const paragraphs = [
    `University works on the unique platform of learning by doing pedagogy to provide an easy and interesting way of acquiring knowledge dissemination, keeping the view to accommodate students of different learning capabilities.`,

    `University takes pride in itself on the fact that it has uplifted the lives of thousands through its quality and job-oriented education. The university has a visionary mission to contribute to the multidimensional growth and development of the region in the general and holistic development of the students in particular.`,

    `University, with its history of remarkable journey in the educational sector, has constantly upgraded itself, in the terms of establishing diversified programmes in Medical Sciences, Engineering and Technology, Arts, Humanities, Science, Law, Pharmacy, and so on. Since becoming a university in 2021, it has focused on updating the curricula and syllabi to be in line with the industry requirements, international standards and at the same time, deeply rooted in the cultural and social values in providing education along with ethics and humanitarian outlook.`,

    `University and its learned faculty members are continuously aligned their self with the national objective to make India skilled India and globally accepted. Our motive is to provide quality education with job skills to the students who can serve society with high moral value.`,
  ];


  return (
    <section className="flex w-11/12 mx-auto flex-col lg:flex-row items-center justify-between py-16 md:py-24 space-y-10 lg:space-y-0">

      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="md:text-4xl text-3xl font-bold text-left text-primary-500">Message from Registrar</h2>
        {paragraphs.map((para, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
        <p className="mt-6 font-semibold text-secondary-500">
          Mr. John Doe<br />
          <span className="text-gray-800">Registrar</span><br />
          <span className="text-gray-800">University Name</span>
        </p>
      </div>

      <div className="w-full lg:w-5/12">
        <Image
          src="/person4.jpg" 
          alt="Registrar of University"
          width={500}
          height={600}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
