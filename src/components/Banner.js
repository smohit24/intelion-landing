import React from 'react';
// Images
import Image from '../assets/Image.svg';
// Type animation
import { motion } from 'framer-motion';
// Variable
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <div>
      <section
        className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-white text-gray-900"
        id="home"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-16">
            {/* Text */}
            <div className="flex-1 text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="text-[36px] font-bold leading-[1] lg:text-[60px] mb-10"
              >
                We manage your IT,
                <br />
                so you can manage <br />
                your business.
              </motion.h1>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[24px] lg:text-[36px] font-secondary font-medium leading-[1.2] text-gray-800"
              >
                Take charge of your business <br />
                continuity with innovative IT solutions
              </motion.div>
              {/* Buttons */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
              >
                <a href="#contact">
                  <button className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700">
                    Schedule a Free Consultation
                  </button>
                </a>
                <a href="#" className="text-blue-600 font-bold hover:underline">
                  Services
                </a>
              </motion.div>
            </div>
            {/* Image (Further Increased Size) */}
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView="show"
              className="hidden lg:flex flex-1 max-w-[500px] lg:max-w-[600px]"
            >
              <img src={Image} alt="Profile" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section with Horizontal Line */}
      <footer className="bg-white text-gray-700 text-center py-6 mt-0">
        <hr className="border-t border-gray-300 mb-4" />
      </footer>
    </div>
  );
};

export default Banner;
