import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="shadow-black w-full max-w-3xl rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-500 text-center mb-10">
          Have an event in mind or just want to say hello? Fill out the form
          below and I’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Textarea */}
          <textarea
            rows="5"
            placeholder="Event Details (Event Name, Date, Venue)"
            className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;



