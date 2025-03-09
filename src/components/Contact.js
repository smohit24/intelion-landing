import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className="py-16 lg:section bg-white text-gray-900" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text Section (Unchanged) */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-[28px] uppercase text-blue-600 font-medium mb-2 tracking-wide">
                Contact
              </h4>
              <h2 className="text-[45px] lg:text-[70px] leading-none mb-8 font-bold">
                We’re here to help
              </h2>
              {/* Contact Details */}
              <div className="flex flex-col lg:flex-row text-[22px] lg:text-[26px] font-medium gap-x-12">
                <p>
                  <span className="font-bold">Call us at:</span> <br />
                  0612-2500-971
                </p>
                <p>
                  <span className="font-bold">Email us:</span> <br />
                  <a
                    href="mailto:connect@finolity.com"
                    className="text-blue-600 hover:underline"
                  >
                    connect@finolity.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Section with Title at the Top */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border border-gray-300 rounded-[15px] bg-gray-100 shadow-lg flex flex-col gap-y-4 p-6 w-full lg:w-[75%] mx-auto"
          >
            {/* Form Title at the Top */}
            <h3 className="text-[28px] lg:text-[32px] font-semibold text-gray-900 text-center mb-0">
              Schedule a Free Consultation
              <hr className="border-t border-gray-300 mb-2" />
            </h3>

            {/* First Name & Last Name */}
            <div className="flex flex-col lg:flex-row gap-3 w-full">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-1">
                  First Name
                </label>
                <input
                  className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-1">
                  Last Name
                </label>
                <input
                  className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Company / Organization */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Company / Organization
              </label>
              <input
                className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md"
                type="text"
                placeholder="Enter your company name"
              />
            </div>

            {/* Company Email & Phone */}
            <div className="flex flex-col lg:flex-row gap-3 w-full">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-1">
                  Company Email
                </label>
                <input
                  className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md"
                  type="email"
                  placeholder="Enter your company email"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone
                </label>
                <input
                  className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* How Can We Help You? (Dropdown) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                How Can We Help You?
              </label>
              <select className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 focus:border-blue-600 transition-all rounded-md">
                <option value="" disabled selected>
                  Select Option
                </option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="seo">SEO & Optimization</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                className="bg-white border border-gray-400 py-1.5 px-3 outline-none w-full text-gray-800 placeholder-gray-500 focus:border-blue-600 transition-all rounded-md resize-none"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700 transition rounded-md py-2 px-5">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
