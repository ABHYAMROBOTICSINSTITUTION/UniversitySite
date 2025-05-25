import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8 bg-primary-500 p-10 text-white rounded-2xl">
      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-100">
            Sikkim Skill University<br />
            Namthang, Namthang Bazaar, South Sikkim,<br />
            Sikkim - 737137, India
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
          <p className="text-gray-100">
            +91-9289456781<br />
            +91-9289456782
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <FaEnvelope className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">E-mail Address</h3>
          <p className="text-gray-100">info@ssu.ac.in</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <FaClock className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p className="text-gray-100">
            Monday-Friday<br />
            10:00am-04:00pm
          </p>
        </div>
      </div>
    </div>
  );
}