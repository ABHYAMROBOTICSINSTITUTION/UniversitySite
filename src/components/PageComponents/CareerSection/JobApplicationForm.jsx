'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const applicationSchema = z.object({
  position: z.string().min(1, 'Position is required'),
  department: z.string().min(1, 'Department is required'),
  specialization: z.string().min(1, 'Specialization is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  education: z.string().min(1, 'Educational qualification is required'),
  currentDesignation: z.string().min(1, 'Current designation is required'),
  experience: z.string().min(1, 'Experience is required'),
  currentSalary: z.string().min(1, 'Current salary is required'),
  currentOrganization: z.string().min(1, 'Current organization is required'),
  expectedSalary: z.string().min(1, 'Expected salary is required'),
  noticePeriod: z.string().min(1, 'Notice period is required'),
  resume: z.instanceof(File).refine(
    (file) => file.size <= 5 * 1024 * 1024, 
    'File size must be less than 5MB'
  ).refine(
    (file) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type),
    'Only PDF, DOC, or DOCX files are accepted'
  ),
});

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('No file chosen');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(applicationSchema),
  });

const onSubmit = (data) => {
    try {
      console.log("Form submitted:", data);
      toast.success("Application submitted successfully!!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue('resume', file);
    }
  };

  return (
    <div className="py-16 md:py-24 w-10/12 mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-primary-500 py-4 px-6">
            <h2 className="text-2xl font-bold text-white">Job Application Form</h2>
            <p className="text-indigo-100 mt-1">Fill out the form below to apply for the position</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position Applied For <span className="text-red-500">*</span>
                </label>
                <input
                  id="position"
                  type="text"
                  {...register('position')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.position ? 'border-red-500' : ''}`}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                )}
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department <span className="text-red-500">*</span>
                </label>
                <input
                  id="department"
                  type="text"
                  {...register('department')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.department ? 'border-red-500' : ''}`}
                />
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
                )}
              </div>

              {/* Specialization */}
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                  Specialization/Branch <span className="text-red-500">*</span>
                </label>
                <input
                  id="specialization"
                  type="text"
                  {...register('specialization')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.specialization ? 'border-red-500' : ''}`}
                />
                {errors.specialization && (
                  <p className="mt-1 text-sm text-red-600">{errors.specialization.message}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name of the Applicant <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Educational Qualification <span className="text-red-500">*</span>
                </label>
                <input
                  id="education"
                  type="text"
                  {...register('education')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.education ? 'border-red-500' : ''}`}
                />
                {errors.education && (
                  <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
                )}
              </div>

              {/* Current Designation */}
              <div>
                <label htmlFor="currentDesignation" className="block text-sm font-medium text-gray-700">
                  Current Designation <span className="text-red-500">*</span>
                </label>
                <input
                  id="currentDesignation"
                  type="text"
                  {...register('currentDesignation')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.currentDesignation ? 'border-red-500' : ''}`}
                />
                {errors.currentDesignation && (
                  <p className="mt-1 text-sm text-red-600">{errors.currentDesignation.message}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Total Experience (Years) <span className="text-red-500">*</span>
                </label>
                <input
                  id="experience"
                  type="text"
                  {...register('experience')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.experience ? 'border-red-500' : ''}`}
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>

              {/* Current Salary */}
              <div>
                <label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700">
                  Current Salary <span className="text-red-500">*</span>
                </label>
                <input
                  id="currentSalary"
                  type="text"
                  {...register('currentSalary')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.currentSalary ? 'border-red-500' : ''}`}
                />
                {errors.currentSalary && (
                  <p className="mt-1 text-sm text-red-600">{errors.currentSalary.message}</p>
                )}
              </div>

              {/* Current Organization */}
              <div>
                <label htmlFor="currentOrganization" className="block text-sm font-medium text-gray-700">
                  Current Organization <span className="text-red-500">*</span>
                </label>
                <input
                  id="currentOrganization"
                  type="text"
                  {...register('currentOrganization')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.currentOrganization ? 'border-red-500' : ''}`}
                />
                {errors.currentOrganization && (
                  <p className="mt-1 text-sm text-red-600">{errors.currentOrganization.message}</p>
                )}
              </div>

              {/* Expected Salary */}
              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700">
                  Expected Salary <span className="text-red-500">*</span>
                </label>
                <input
                  id="expectedSalary"
                  type="text"
                  {...register('expectedSalary')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.expectedSalary ? 'border-red-500' : ''}`}
                />
                {errors.expectedSalary && (
                  <p className="mt-1 text-sm text-red-600">{errors.expectedSalary.message}</p>
                )}
              </div>

              {/* Notice Period */}
              <div>
                <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700">
                  Notice Period (Days) <span className="text-red-500">*</span>
                </label>
                <input
                  id="noticePeriod"
                  type="text"
                  {...register('noticePeriod')}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.noticePeriod ? 'border-red-500' : ''}`}
                />
                {errors.noticePeriod && (
                  <p className="mt-1 text-sm text-red-600">{errors.noticePeriod.message}</p>
                )}
              </div>

              {/* Resume Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex items-center">
                  <label
                    htmlFor="resume"
                    className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose File
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="ml-3 text-sm text-gray-500">{fileName}</span>
                </div>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setFileName('No file chosen');
                }}
                className="py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}