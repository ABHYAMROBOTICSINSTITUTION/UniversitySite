import React from "react";
import Image from "next/image";

export default function BlogBanner() {
  return (
    <section className="relative h-[700px] mt-28 w-full overflow-hidden">
      <Image
        src="/image3.jpg"
        alt="Blog Us Banner"
        fill
        className="brightness-75 object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Explore Our University Blog
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 px-2 sm:px-4">
          Discover inspiring stories, helpful guides, and the latest updates — all designed to help you succeed on your academic journey.
          </p>
        </div>
      </div>
    </section>
  );
}
