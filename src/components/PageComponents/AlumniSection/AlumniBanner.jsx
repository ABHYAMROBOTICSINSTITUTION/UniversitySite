
import React from "react";
import Image from "next/image";

export default function AlumniBanner() {
  return (
    <section className="relative h-[700px] mt-28 w-full overflow-hidden">
      <Image
        src="/image2.jpg"
        alt="Alumni Banner"
        fill
        className="brightness-75 object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Meet Our Esteemed Alumni
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 px-2 sm:px-4">
          Our alumni have gone on to lead inspiring careers in diverse industries
        around the globe. Here are just a few of their stories.

          </p>
         
        </div>
      </div>
    </section>
  );
}
