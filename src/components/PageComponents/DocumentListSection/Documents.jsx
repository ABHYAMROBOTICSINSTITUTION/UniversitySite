'use client';

import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Documents = () => {
  const documentList = [
    { title: "Class X (Secondary School)", items: ["Certificate & Pass Certificate (Photocopy)"] },
    { title: "Class XII (Higher Secondary)", items: ["Mark Sheet & Pass Certificate (Photocopy)"] },
    { title: "Transfer Certificate", items: ["School Leaving Certificate (Photocopy)"] },
    { title: "Character Certificate", items: ["From the last attended institution (Photocopy)"] },
    { title: "Migration Certificate", items: ["Original – If required"] },
    { title: "Provisional/Degree Certificate", items: ["For PG Courses Only"] },
    { title: "Address Proof", items: ["Valid Govt.-issued document"] },
    { title: "Photo ID Proof", items: ["Any Government-issued Photo ID"] },
    { title: "Domicile Certificate", items: ["Certificate of Identification (COI)"] },
    { title: "Declaration Form", items: ["Signed copy"] },
  ];

  return (
    <div className="w-11/12 mx-auto my-16 md:my-24">
      <div className="text-center mb-10">
        <h2 className="title mb-4">List of Required Documents</h2>
        <p className="description">
          Please prepare the following documents for your admission process
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {documentList.map((doc, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full"
          >
            <div className="absolute inset-0 bg-primary-500 opacity-10"></div>
            <div className="relative z-10 p-5 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiFileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {doc.title}
              </h3>
              <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                {doc.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-10 p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <HiOutlineExclamationCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Important Notes</h3>
            <div className="mt-2 text-yellow-700 space-y-1">
              <p>• Please bring original documents for verification along with photocopies</p>
              <p>• All photocopies should be self-attested</p>
              <p>• Additional documents may be required for specific courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;


    
