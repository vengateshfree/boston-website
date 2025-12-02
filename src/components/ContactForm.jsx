import React from "react";

function ContactSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-xl rounded-2xl overflow-hidden bg-white">

        {/* Left Image */}
        <div className="h-80 lg:h-auto">
          <img
            src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-10">
            Have questions? We'd love to hear from you.
          </p>

          <form className="space-y-7">

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-4 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-focus:top-2
                peer-focus:text-sm peer-focus:text-blue-600">
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-4 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-focus:top-2
                peer-focus:text-sm peer-focus:text-blue-600">
                Phone Number
              </label>
            </div>

            {/* Description */}
            <div className="relative">
              <textarea
                rows="4"
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 py-4 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-focus:top-2
                peer-focus:text-sm peer-focus:text-blue-600">
                Your Message
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
