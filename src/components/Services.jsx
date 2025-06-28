'use client';

import { Wrench, ShowerHead, Home, Building, Flame, Pipette } from 'lucide-react';

import { useState } from 'react';

const services = [
  {
    title: "Emergency Repairs",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    description: "24/7 emergency plumbing services for burst pipes, leaks, and urgent repairs.",
    features: [
      "Burst pipe repair",
      "Leak detection",
      "Water damage prevention"
    ],
    color: "bg-blue-50"
  },
  {
    title: "Bathroom Plumbing",
    icon: <ShowerHead className="w-8 h-8 text-teal-500" />,
    description: "Complete bathroom installations, renovations, and fixture replacements.",
    features: [
      "Shower installations",
      "Toilet repairs",
      "Faucet replacements"
    ],
    color: "bg-teal-50"
  },
  {
    title: "Residential Plumbing",
    icon: <Home className="w-8 h-8 text-indigo-500" />,
    description: "Comprehensive home plumbing services from maintenance to major installations.",
    features: [
      "Pipe installations",
      "Water heater service",
      "Drain cleaning"
    ],
    color: "bg-indigo-50"
  },
  {
    title: "Commercial Services",
    icon: <Building className="w-8 h-8 text-purple-500" />,
    description: "Professional commercial plumbing solutions for businesses and properties.",
    features: [
      "Commercial maintenance",
      "System upgrades",
      "Code compliance"
    ],
    color: "bg-purple-50"
  },
  {
    title: "Water Heater Service",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    description: "Installation, repair, and maintenance of all water heater types.",
    features: [
      "Tank replacements",
      "Tankless systems",
      "Energy efficiency"
    ],
    color: "bg-orange-50"
  },
  {
    title: "Drain & Sewer",
    icon: <Pipette className="w-8 h-8 text-amber-500" />,
    description: "Professional drain cleaning and sewer line services with modern equipment.",
    features: [
      "Hydro jetting",
      "Camera inspection",
      "Root removal"
    ],
    color: "bg-amber-50"
  }
];

export default function ProfessionalServices() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive plumbing solutions with transparent pricing and guaranteed workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${service.color}`}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {expandedService === index && (
                  <ul className="space-y-2 mt-4 pl-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">
                    {expandedService === index ? 'Show less' : 'Show services'}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                      expandedService === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Don't see what you need?
          </h3>
          <p className="text-gray-600 mb-6">
            We handle all types of plumbing services. Contact us for a custom quote.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}