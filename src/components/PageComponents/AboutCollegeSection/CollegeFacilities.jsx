import Image from 'next/image';

const facilities = [
  {
    title: "Modern Classrooms",
    description: "Smart classrooms equipped with the latest technology for interactive learning",
    image: "/image1.jpg"
  },
  {
    title: "Research Labs",
    description: "Cutting-edge laboratories supporting innovation across disciplines",
    image: "/image2.jpg"
  },
  {
    title: "Library Resources",
    description: "Over 1 million volumes and extensive digital resources available 24/7",
    image: "/image1.jpg"
  }
];

export default function CollegeFacilities() {
  return (
    <section className="py-20 ">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            College Facilities
          </h2>
          <p className="description max-w-3xl mx-auto">
            World-class infrastructure designed to support learning, research, and student life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}