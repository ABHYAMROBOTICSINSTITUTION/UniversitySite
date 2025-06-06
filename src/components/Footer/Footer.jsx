import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Courses", href: "/courses" },
      { name: "Blogs", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
      { name: "Career", href: "/career" },
      { name: "Research", href: "/research" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Vice Chancellor Message", href: "/vice-chancellor-message" },
      { name: "Registrar Message", href: "/registrar-message" },
      { name: "Alumni", href: "/alumni" },
      { name: "About School", href: "/about-school" },
      { name: "About College", href: "/about-college" },

    ],
  },
  {
    title: "Admissions",
    links: [
      { name: "Admission Form", href: "/admission-form" },
      { name: "Online Application", href: "/admission-application" },
      { name: "List of Documents", href: "/list-of-documents" },
    ],
  },

  {
    title: "Contact",
    content: [
      {
        icon: <FaMapMarkerAlt className="inline-block mr-2 mt-1 text-primary-300" />,
        text: "123 University Ave, City",
      },
      {
        icon: <FaPhoneAlt className="inline-block mr-2 mt-1 text-primary-300" />,
        text: "(123) 456-7890",
      },
      {
        icon: <FaEnvelope className="inline-block mr-2 mt-1 text-primary-300" />,
        text: "info@university.edu",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-10 px-4">
      <div className="w-11/12 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Akshar University</h2>
          <p className="text-gray-300">
            Committed to excellence in education, research, and community service since 1900.
          </p>
          <div className="flex space-x-4 text-xl mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-primary-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-300 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary-300 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            {section.links ? (
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-3 text-gray-300">
                {section.content.map((item, i) => (
                  <p key={i} className="flex items-start">
                    {item.icon}
                    <span>{item.text}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12  pt-6 border-t border-primary-400 text-center text-sm text-gray-300 space-y-2">
        <div className="flex mb-4 flex-wrap justify-center gap-6">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="/accessibility" className="hover:text-white transition">
            Accessibility
          </Link>
        
        </div>
        <p>© {new Date().getFullYear()} University Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
