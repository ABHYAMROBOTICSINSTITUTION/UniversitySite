"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <ContactInfo/>
          <ContactForm/>
        </div>

        <div className="my-24 h-96 rounded-xl overflow-hidden shadow-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1552975551726!2d83.46193627549206!3d27.697835525390897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868a80185519%3A0xbad4eeb3b7798ee5!2sLumbini%20Provincial%20Hospital!5e0!3m2!1sen!2snp!4v1715500841056!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lumbini Provincial Hospital Location"
          />
        </div>
      </div>
    </section>
  );
}
