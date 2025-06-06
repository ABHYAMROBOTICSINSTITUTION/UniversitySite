"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi";
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

function VirtualTour() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-11/12 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
                Explore Our Campus From Anywhere
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Take a 360° virtual tour of our state-of-the-art facilities, classrooms, and student spaces without leaving your home.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/virtual-tour"
                  className="px-6 py-3 bg-primary-500 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <HiPlay className="w-5 h-5" />
                  Start Virtual Tour
                </Link>
                <Link
                  href="/admission-info"
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 flex items-center gap-2"
                >
                  <FaInfoCircle className="w-5 h-5" />
                  Admission Info
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900">200+</h3>
                <p className="text-sm text-gray-500">Facilities to Explore</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900">24/7</h3>
                <p className="text-sm text-gray-500">Available Access</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900">360°</h3>
                <p className="text-sm text-gray-500">Interactive Views</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900">4K</h3>
                <p className="text-sm text-gray-500">High Resolution</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/image1.jpg"
              alt="Virtual tour"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white backdrop-blur-sm p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 group-hover:opacity-100">
                <HiPlay className="h-12 w-12 text-primary-500" />
                <span className="sr-only">Play virtual tour</span>
              </button>
            </div>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-1">
              <FaMapMarkerAlt className="text-primary-500" />
              Interactive Map
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-1">Main Campus Tour</h3>
              <p className="text-gray-200 text-sm">Explore our academic buildings, libraries, and student centers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
