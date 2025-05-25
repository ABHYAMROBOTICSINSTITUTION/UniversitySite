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
            University Name<br/>
            Address<br/>
            Nepal
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
          <p className="text-gray-100">
            +977 9887265322<br />
            +977 9887265322
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <FaEnvelope className="text-secondary-500 text-xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">E-mail Address</h3>
          <p className="text-gray-100">university@gmail.com</p>
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