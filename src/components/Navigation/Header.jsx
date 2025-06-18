"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { title: "Home", link: "/" },
  {
    title: "About",
    submenu: [
      { name: "About Us", link: "/about-us" },
      { name: "Vice Chancellor Message", link: "/vice-chancellor-message" },
      { name: "Registrar Message", link: "/registrar-message" },
      { name: "Alumni", link: "/alumni" },
      { name: "About School", link: "/about-school" },
      { name: "About College", link: "/about-college" },
    ],
  },
  {
    title: "Programmes",
    submenu: [
      {
        name: "School of Humanities & Social Sciences",
        link: "/humanities-&-social-sciences",
      },
      {
        name: "School of Commerce & Business Management",
        link: "/commerce-&-business-management",
      },
      {
        name: "School of Research and Development",
        link: "/research-and-development",
      },
      {
        name: "School of Pure & Applied Sciences",
        link: "/pure-&-applied-sciences",
      },
      { name: "School of Vocational Studies", link: "/vocational-studies" },
      {
        name: "School of Pharmacy",
        link: "/pharmacy",
      },
      { name: "School of Yoga", link: "/yoga" },
      {
        name: "School of Life Sciences",
        link: "/life-sciences",
      },
      { name: "School of Special Education", link: "/vocational-studies" },
      { name: "School of Law", link: "/law" },
    ],
  },

  {
    title: "Courses",
    submenu: [
      { name: "Available Courses", link: "/courses" },
      { name: "Academics", link: "/academics" },
    ],
  },
  { title: "Blogs", link: "/blog" },

  { title: "Research", link: "/research" },
  {
    title: "Admission",
    submenu: [
      { name: "Admission Info", link: "/admission-info" },
      { name: "Online Admission Application", link: "/admission-application" },
      { name: "List Of Documents", link: "/list-of-documents" },
    ],
  },
  { title: "Pre University", link: "/pre-university" },
  { title: "Student Gallery", link: "/gallery" },
  { title: "Career", link: "/career" },
  { title: "Contact Us", link: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between py-2">
        <Link href="/" className="flex items-center space-x-6">
          <img src="/mainLogo.png" alt="LOGO" className="h-14 w-14" />
          <img src="/logo2.jpeg" alt="LOGO" className="h-14 w-14" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.link ? (
                <Link href={item.link} className="hover:text-secondary-500">
                  {item.title}
                </Link>
              ) : (
                <span className="hover:text-secondary-500 cursor-pointer">
                  {item.title}
                </span>
              )}
              {item.submenu && (
                <div className="absolute left-1/2 top-full mt-4 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-x-1/2 translate-y-2 transition-all duration-200 ease-in-out z-50 min-w-max">
                  <ul className="">
                    {item.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={subItem.link}
                          className="block px-6 py-2 text-gray-800 hover:bg-gray-100 rounded-lg hover:text-[#0a2d52]"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <HiX className="text-2xl text-gray-800" />
          ) : (
            <HiMenu className="text-2xl text-gray-800" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            ref={menuRef}
            className="absolute md:top-32 top-28 right-0 w-3/5 h-[calc(100vh-7rem)] bg-white bg-opacity-95 overflow-y-auto shadow-lg transition-all duration-300 ease-in-out"
          >
            <ul className="space-y-2 p-4">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(idx)}
                        className="flex justify-between items-center w-full text-gray-800 font-medium py-3 hover:text-[#0a2d52]"
                      >
                        <span>{item.title}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === idx ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeSubmenu === idx && (
                        <ul className="pl-4 mt-1 mb-2 space-y-1">
                          {item.submenu.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={subItem.link}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-gray-600 hover:text-[#0a2d52] hover:bg-gray-50 rounded px-2"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-gray-800 font-medium hover:text-[#0a2d52]"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="border-t border-primary-500" />
    </header>
  );
}

export default Header;
