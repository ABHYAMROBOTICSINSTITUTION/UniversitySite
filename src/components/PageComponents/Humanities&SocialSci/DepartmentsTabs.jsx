"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DepartmentsTabs() {
  const [activeTab, setActiveTab] = useState("humanities");

  const departments = {
    humanities: {
      undergraduate: [
        {
          programme:
            "B.A. – General (With option of 1 language from Hindi/Lepcha/Bhutia/Limbu/Nepali, English compulsory)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. English (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Geography",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
      ],
      postgraduate: [
        {
          programme: "M.A. English",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Hindi",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Geography",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
      ],
    },
    science: {
      undergraduate: [
        {
          programme: "B.A. Economics (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. History (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Political Science (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Psychology (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Sociology (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Tourism (Honours)",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Social Work / B.A. Journalism & Mass Communication",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B. Library & Information Sciences",
          duration: "2 Semesters",
          eligibility: "Graduation",
        },
      ],
      postgraduate: [
        {
          programme: "PG Diploma in International Relations",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Economics",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Sociology",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. History",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Political Science",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M.A. Psychology",
          duration: "4 Semesters",
          eligibility: "Graduation",
        },
        {
          programme: "M. Library & Information Sciences",
          duration: "2 Semesters",
          eligibility: "BLIS or Equivalent Degree",
        },
      ],
    },
    performingArts: {
      undergraduate: [
        {
          programme: "B.A. Music",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
        {
          programme: "B.A. Fine Arts",
          duration: "6 Semesters",
          eligibility: "10+2",
        },
      ],
      postgraduate: [
        {
          programme: "M.A. Music",
          duration: "4 Semesters",
          eligibility: "B.A. Music",
        },
        {
          programme: "M.A. Fine Arts",
          duration: "4 Semesters",
          eligibility: "B.A. Fine Arts",
        },
      ],
    },
  };

  const renderTable = (programmes, level) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-10 bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="bg-gradient-to-r from-primary-500 to-blue-800 p-4">
        <h3 className="text-xl font-bold text-white">{level.toUpperCase()} PROGRAMMES</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Programme
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Eligibility
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {programmes.map((item, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-normal">
                  <div className="text-sm font-medium text-gray-900">{item.programme}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{item.duration}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{item.eligibility}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <div className="md:py-16 py-10 mx-auto w-11/12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h2 className="title mb-4">Faculty of Humanities & Social Sciences</h2>
      </motion.div>
      
      <div className="flex flex-wrap border-b border-gray-200 mb-8 gap-2">
        {Object.keys(departments).map((tab) => {
          const tabNames = {
            humanities: "Humanities",
            science: "Science",
            performingArts: "Arts"
          };
          
          return (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm md:text-base relative group ${activeTab === tab ? "text-primary-500" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabNames[tab]}
              <span className={`absolute bottom-0 left-0 h-1 bg-primary-500 transition-all duration-300  ${activeTab === tab ? "w-full " : "w-0 group-hover:w-full"}`}></span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "humanities" && (
            <div>
              {renderTable(departments.humanities.undergraduate, "Undergraduate")}
              {renderTable(departments.humanities.postgraduate, "Postgraduate")}
            </div>
          )}

          {activeTab === "science" && (
            <div>
              {renderTable(departments.science.undergraduate, "Undergraduate")}
              {renderTable(departments.science.postgraduate, "Postgraduate")}
            </div>
          )}

          {activeTab === "performingArts" && (
            <div>
              {renderTable(departments.performingArts.undergraduate, "Undergraduate")}
              {renderTable(departments.performingArts.postgraduate, "Postgraduate")}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}