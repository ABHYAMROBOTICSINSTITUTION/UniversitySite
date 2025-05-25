import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="title mb-4">
            Admission & Queries
          </h2>
          <p className="description">
            Reach out to your friendly support team who is always ready to assist you with your queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-secondary-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  Campus<br />
                  Namthang, Namthang Bazar<br />
                  PO Namthang Dist- South Sikkim<br />
                  Sikkim, 737132
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Clock className="w-5 h-5 text-secondary-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours of operation</h3>
                <p className="text-gray-600">
                  Monday to Saturday: 10:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Phone className="w-5 h-5 text-secondary-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>+91-9289456781</li>
                  <li>+91-9599123782</li>
                  <li>+91-9599123783</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mail */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Mail className="w-5 h-5 text-secondary-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mail</h3>
                <a 
                  href="mailto:info@ssu.edu.in" 
                  className="text-blue-600 hover:underline break-all"
                >
                  info@ssu.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">
            Plan a campus visit - Contact us for more information
          </p>
        </div>
      </div>
    </section>
  );
}