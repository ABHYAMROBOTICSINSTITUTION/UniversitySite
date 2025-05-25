"use client"
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="w-11/12 mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="my-24 h-96 rounded-xl overflow-hidden shadow-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777489!2d88.4728573150425!3d27.16307298301538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a6a6b6b6b6b7%3A0x39e6a6a6b6b6b6b8!2sSikkim%20Skill%20University!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="University Location"
          ></iframe>
       </div>
        </div>


    </section>
  );
}