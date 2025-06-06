import Image from 'next/image';

const facultyMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Professor of Computer Science",
    expertise: "Artificial Intelligence, Machine Learning",
    image: "/person1.jpg",
    achievements: "Published 50+ papers in top-tier journals, NSF Career Award winner"
  },
  {
    name: "Prof. Michael Chen",
    title: "Dean of Engineering",
    expertise: "Renewable Energy Systems",
    image: "/person2.jpg",
    achievements: "Led $10M research initiative, named Innovator of the Year 2022"
  },
  {
    name: "Dr. Angela Martinez",
    title: "Director of Biological Sciences",
    expertise: "Molecular Biology, Genetics",
    image: "/person3.jpg",
    achievements: "Discovered novel genetic markers for disease prevention"
  }
];

export default function FacultySpotlight() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    <div className="relative z-10 w-11/12 mx-auto">
      <div className="text-center mb-10">
        <h2 className="title mb-4">Distinguished Faculty</h2>
        <p className="description max-w-3xl mx-auto">
        Learn from world-class scholars and industry pioneers
        </p>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-64">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h3>
                <p className="text-secondary-500 font-medium mb-2">{faculty.title}</p>
                <p className="text-gray-700 mb-3"><span className="font-semibold">Expertise:</span> {faculty.expertise}</p>
                <p className="text-gray-600 text-sm">{faculty.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}