import React from "react";
import { Stethoscope, CloudSun, GraduationCap } from "lucide-react";

const highlights = [
  {
    title: "AI-Powered Healthcare",
    description:
      "Our interdisciplinary team is building machine learning models to detect diseases early and personalize treatment plans.",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
  },
  {
    title: "Climate Resilience Initiative",
    description:
      "Researchers are mapping climate vulnerability zones and developing sustainable solutions for high-risk communities.",
    icon: <CloudSun className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700",
  },
  {
    title: "Education Equity Project",
    description:
      "Focused on underserved regions, this project designs inclusive learning technologies to bridge the education gap.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
  },
];

export default function ResearchHighlight() {
  return (
    <section className="py-16 md:py-24">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">
            Research Highlights
          </h2>
          <p className="description max-w-3xl mx-auto">
            Pioneering research initiatives that are making a tangible difference
            in communities worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`${item.bgColor} h-40 flex items-center justify-center`}
              >
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}