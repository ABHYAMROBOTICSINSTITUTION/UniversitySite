import { FaGraduationCap, FaFlask, FaGlobe } from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    number: "95%",
    title: "Graduation Rate",
    description: "One of the highest in the region",
  },
  {
    icon: FaFlask,
    number: "$50M+",
    title: "Research Funding",
    description: "Annual investment in innovation",
  },
  {
    icon: FaGlobe,
    number: "120+",
    title: "Countries Represented",
    description: "Diverse international student body",
  },
];

export default function AcademicExcellence() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">Academic Excellence</h2>
          <p className="description max-w-3xl mx-auto">
            Our commitment to quality education is reflected in our achievements
            and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-lg  transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-4xl text-secondary-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.title}
                </h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
