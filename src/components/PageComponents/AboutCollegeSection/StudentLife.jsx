import Image from "next/image";

const studentActivities = [
  {
    title: "Clubs & Organizations",
    description: "200+ student-run groups for every interest",
    image: "/image1.jpg",
  },
  {
    title: "Arts & Culture",
    description: "Theater productions, art exhibits, and music performances",
    image: "/image2.jpg",
  },

  {
    title: "Community Service",
    description: "Opportunities to give back and make a difference",
    image: "/image3.jpg",
  },
];

export default function StudentLife() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Student Life
          </h2>
          <p className="description max-w-3xl mx-auto">
            A vibrant community beyond the classroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentActivities.map((activity, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-gray-200">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
