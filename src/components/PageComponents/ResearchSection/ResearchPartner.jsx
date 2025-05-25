import React from "react";

const partners = [
  { name: "Harvard University", logo: "/harvard-logo.png" },
  { name: "MIT Media Lab", logo: "/mit-logo.png" },
  { name: "Oxford Climate Initiative", logo: "/oxford-logo.png" },
  { name: "UNESCO Research Network", logo: "/unesco-logo.png" },
  { name: "Google Research", logo: "/google-logo.png" },
  { name: "World Bank Group", logo: "/worldbank-logo.png" },
];

export default function ResearchPartner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b to-white from-gray-100">
      <div className="w-11/12 mx-auto text-center">
        <div className="mb-10">
          <h2 className="title mb-4">
            Global Research Partners
          </h2>
          <p className="description max-w-3xl mx-auto">
            We collaborate with leading institutions and organizations across the
            globe to co-create impactful solutions through research and
            innovation.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-2xl font-bold text-gray-400">
                  {partner.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {partner.name}
              </h3>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Partner
                </span>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}