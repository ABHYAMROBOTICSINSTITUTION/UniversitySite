import Link from 'next/link';
import React from 'react';
import { FaLock, FaSatelliteDish, FaPhoneAlt } from 'react-icons/fa';

function SubHeader() {
  return (
    <div className="bg-primary-500 text-white ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 py-3">
        <div className="hidden md:flex items-center overflow-hidden whitespace-nowrap flex-1 mr-4">
          <span className="bg-secondary-500 font-bold  mr-4 text-sm px-4 py-2 rounded-full ">
            ANNOUNCEMENT
          </span>
          <div className="relative w-full max-w-[500px] overflow-hidden">
            <div className="animate-marquee inline-block whitespace-nowrap text-sm font-medium">
              Admissions Open: 2025-26 : B.Com | B.Sc | BCA | B.Tech | D.Pharm | B.Pharm | LLB | Diploma | MBA | MCA | MA
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <span className="font-semibold flex items-center gap-2 text-xs">
            <FaPhoneAlt size={12} />
            +91 9870234563
          </span>
          
          <div className="flex items-center gap-2">
            <Link href="/student-login">
              <button className="flex gap-2 bg-secondary-500 hover:bg-pink-400 text-white px-4 py-2 rounded-full font-medium transition duration-300">
                <FaLock size={12} />
                <span className="text-xs">Login</span>
              </button>
            </Link>
            
            {/* <Link href="/apply-now">
              <button className="flex gap-2 bg-secondary-500 hover:bg-pink-400 text-white px-4 py-2 rounded-full font-medium transition duration-300">
                <FaSatelliteDish size={12} />
                <span className="text-xs">Apply</span>
              </button>
            </Link> */}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <span className="font-semibold flex items-center gap-2">
            <FaPhoneAlt size={16} />
            +91 9870234563
          </span>
          
          <Link href="/student-login">
            <button className="flex gap-2 bg-secondary-500 hover:bg-pink-400 text-white px-6 py-2 rounded-full font-medium transition duration-300">
              <FaLock size={16} />
              <span>Student Login</span>
            </button>
          </Link>
          
          {/* <Link href="/apply-now">
            <button className="flex gap-2 bg-secondary-500 hover:bg-pink-400 text-white px-6 py-2 rounded-full font-medium transition duration-300">
              <FaSatelliteDish size={16} />
              <span>Apply Now</span>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SubHeader;