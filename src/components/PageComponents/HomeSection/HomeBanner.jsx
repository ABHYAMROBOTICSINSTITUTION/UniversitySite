"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

function HomeBanner() {
  const banners = [
    {
      src: "/image1.jpg",
      title: "Welcome to Our Site",
      description: "Discover our latest offerings and innovative solutions",
      cta: "Explore Now",
      link: "/about-us",
    },
    {
      src: "/image2.jpg",
      title: "Explore New Features",
      description: "Join us in this exciting journey of transformation",
      cta: "Get Started",
      link: "/features",
    },
    {
      src: "/image3.jpg",
      title: "Be Part of the Change",
      description:
        "Innovating for a better tomorrow with cutting-edge technology",
      cta: "Join Us",
      link: "/contact",
    },
  ];

  return (
    <div className="relative w-full mt-28">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="w-full h-[700px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={banner.src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                className="object-cover w-full h-full"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

              <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16  pb-24 text-white">
                <div className="max-w-4xl">
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-fadeInUp mb-4">
                    {banner.title}
                  </h2>

                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fadeInUp delay-100 mb-6">
                    {banner.description}
                  </p>

                  <div className="animate-fadeInUp delay-200">
                    <Link
                      href={banner.link}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {banner.cta}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBanner;
