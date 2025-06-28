'use client';

import { motion } from 'framer-motion';
import ContactInfoComponent from "./ContactInfoComponent";
import ProgressivePlumbingForm from "./ProgressivePlumbingForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Get Your <span className="text-orange-500">Free Quote</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to solve your plumbing problems? Reach out for a free estimate or emergency service.
          </p>
        </motion.div>

        {/* Grid layout with staggered animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProgressivePlumbingForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full">
              <ContactInfoComponent />
              
              {/* Additional trust signals */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600">Licensed & insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600">Upfront pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600">Same-day service available</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;