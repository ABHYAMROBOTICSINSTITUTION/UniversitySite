"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiAlertCircle, FiCheckCircle, FiLoader } from "react-icons/fi";

const applicationFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  phone: z
    .string()
    .min(5, "Phone is required")
    .regex(/^[0-9]+$/, "Only digits allowed"),
  mobile: z
    .string()
    .min(5, "Mobile number is required")
    .regex(/^[0-9]+$/, "Only digits allowed"),
  email: z.string().email("Invalid email address"),
  course: z.string().min(1, "Course name is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
});

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(applicationFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Application Data:", data);
      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  const formFields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "phone", label: "Phone", type: "tel", required: true },
    { id: "mobile", label: "Mobile No.", type: "tel", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    {
      id: "course",
      label: "Course Applying for",
      type: "text",
      required: true,
    },
    { id: "city", label: "City", type: "text", required: true },
    { id: "state", label: "State", type: "text", required: true },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 my-12 bg-white rounded-xl shadow-lg">
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
          Admission Request Form
        </h2>
        <p className="description max-w-2xl">
          Please fill out the form below to send your admission request. Our
          counseling experts will contact you shortly.
        </p>
      </div>

      {isSubmitSuccessful ? (
        <div className="text-center py-16 md:py-24">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <FiCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Application Submitted!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We'll contact you within 2 business
            days.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map(({ id, label, type, required }) => (
              <div key={id} className="space-y-2">
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <input
                    {...register(id)}
                    id={id}
                    type={type}
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors[id]
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    } focus:ring-2 focus:outline-none transition`}
                  />
                  {errors[id] && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors[id] && (
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <FiAlertCircle className="mr-1" /> {errors[id]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-fit flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r to-secondary-500 from-primary-500 hover:from-secondary-600 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transition ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin mr-2 h-5 w-5" />
                  Processing...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
