import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only alphabets"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only alphabets"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]+$/.test(val), {
      message: "Phone number must contain only digits",
    }),
  message: z.string().optional(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log("Form submitted:", data);
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      id: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Enter Phone Number",
      required: false,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Keep In Touch, We Want To Hear From You
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map(({ id, label, type, placeholder, required }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                {...register(id)}
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:outline-none"
              />
              {errors[id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[id]?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 resize-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message Now"}
          {!isSubmitting && <span className="text-xl">→</span>}
        </button>

      </form>
    </div>
  );
}
