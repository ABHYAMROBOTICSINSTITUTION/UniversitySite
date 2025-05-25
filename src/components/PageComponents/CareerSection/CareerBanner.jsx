import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CareerBanner() {
  return (
    <section className="relative h-[700px] mt-28 w-full overflow-hidden">
      <Image
        src="/image3.jpg"
        alt="Career Us Banner"
        fill
        className="brightness-75 object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Careers at Our University          
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 px-2 sm:px-4">
          Join a legacy of academic excellence, innovation, and impactful learning. Be part of a community that shapes the future.

          </p>
          <Link
            href="/Career"
            className="inline-block bg-secondary-500 hover:bg-pink-400 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
