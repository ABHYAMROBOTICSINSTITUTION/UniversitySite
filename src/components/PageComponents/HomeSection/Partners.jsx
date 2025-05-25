"use client";

import React from 'react';
import Image from 'next/image';

const Partners = () => {
  const partners = [
    { id: 1, logo: '/logo.png', alt: 'Partner 1' },
    { id: 2, logo: '/logo.png', alt: 'Partner 2' },
    { id: 3, logo: '/logo.png', alt: 'Partner 3' },
    { id: 4, logo: '/logo.png', alt: 'Partner 4' },
    { id: 5, logo: '/logo.png', alt: 'Partner 5' },
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">  
      <div className="w-11/12 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="title mb-4">
            Our Trusted Partners
          </h2>
          <p className="description max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions and services.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex items-center py-4" style={{
              animation: 'infinite-scroll 30s linear infinite',
              display: 'flex',
              width: 'max-content'
            }}>
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 px-8 transition-all duration-500 hover:scale-110"
                >
                  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={180}
                      height={90}
                      className="object-contain h-16 w-32 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;