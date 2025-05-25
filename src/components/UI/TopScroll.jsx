
'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function TopScroll() {
  const [Show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-16 right-4 md:bottom-24 md:right-10 bg-white p-3 md:p-5 rounded-full z-40 transition-all delay-75 duration-700 ease-in-out ${
          Show ? 'translate-y-0 animate-bounce scale-105 shadow-xl' : 'translate-y-96'
        }`}
      >
        <FaArrowUp className="text-black text-xl md:text-2xl" />
      </button>

    </>
  );
}

export default TopScroll;
