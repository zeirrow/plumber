"use client";

import React, { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  isEmergency: false,
  description: "",
};

const ProgressivePlumbingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Emergency Repair",
    "Bathroom",
    "Kitchen",
    "Water Heater",
    "Drain Cleaning",
    "Other",
  ];

  const steps = [
    { number: 1, title: "Contact Info", progress: 33 },
    { number: 2, title: "Service Needed", progress: 67 },
    { number: 3, title: "Details", progress: 100 },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleNext = () =>
    currentStep < 3 && setCurrentStep((prev) => prev + 1);
  const handlePrevious = () =>
    currentStep > 1 && setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canProceed()) return;
    // if successful
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.service;
      case 3:
        return formData.description.trim();
      default:
        return false;
    }
  };

  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialFormData);
      setCurrentStep(1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-sm p-6 h-full"
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 text-sm">
            We'll contact you within 30 minutes during business hours.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm">Step {currentStep} of 3</span>
          <span className="text-gray-500 text-sm">
            {steps[currentStep - 1].progress}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <motion.div
            className="bg-blue-600 h-1.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${steps[currentStep - 1].progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        {steps[currentStep - 1].title}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: currentStep > 1 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentStep > 1 ? -20 : 20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              {/* Step 2: Service Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => handleServiceSelect(service)}
                        className={`p-3 border rounded-lg text-sm transition-all ${
                          formData.service === service
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  <label className="flex items-center space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="isEmergency"
                      checked={formData.isEmergency}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>Emergency Service</span>
                  </label>
                </div>
              )}

              {/* Step 3: Description */}
              {currentStep === 3 && (
                <div className="h-full flex flex-col">
                  <textarea
                    name="description"
                    placeholder="Describe your plumbing issue..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none flex-grow"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                currentStep === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Back
            </button>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className={`px-4 py-2 text-sm rounded-lg flex items-center space-x-1 transition-colors ${
                canProceed()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
          ${currentStep === 1 ? "ml-auto" : ""}
            `}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed()}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                canProceed()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProgressivePlumbingForm;
