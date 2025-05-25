import React from 'react'

function ApplyForm() {
  return (
    <div className="bg-primary-500 text-white p-6 rounded-lg w-full max-w-md mx-auto mt-0 md:mt-8">
      <h4 className="text-lg font-bold mb-2">Apply for Admission</h4>
      <p className="text-sm mb-4">Fill the form and share your details with us. Our counselling team will contact you soon.</p>
      <form className="space-y-3">
        <input className="w-full p-2 text-black outline-none bg-gray-100 rounded" type="text" placeholder="Name*" />
        <input className="w-full p-2 text-black outline-none bg-gray-100 rounded" type="text" placeholder="Mobile No.*" />
        <input className="w-full p-2 text-black outline-none bg-gray-100 rounded" type="email" placeholder="Email Id*" />
        <select className="w-full p-2 text-black outline-none bg-gray-100 rounded">
          <option>Select Course –</option>
          <option>Science</option>
          <option>Commerce</option>
          <option>Arts/Humanities</option>
        </select>
        <button className="bg-secondary-500 text-white w-full py-2 rounded font-medium hover:bg-pink-400">
          Apply Now →
        </button>
      </form>
    </div>
  )
}

export default ApplyForm


