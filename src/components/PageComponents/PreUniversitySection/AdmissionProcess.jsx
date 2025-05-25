import React from 'react'

const steps = [
    { label: "Eligibility", detail: "Students who have completed Class 10 from a recognized board." },
    { label: "Application", detail: "Online & Offline application process available." },
    { label: "Selection", detail: "Based on academic performance & personal interview (if applicable)." }
  ];

function AdmissionProcess() {
  return (
    <section className="">
      <h3 className="text-xl md:text-2xl text-primary-500 font-bold underline mb-6">
        Admission Process:
      </h3>
      <ul className="space-y-4 text-gray-700">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>{step.label}:</strong> {step.detail}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AdmissionProcess