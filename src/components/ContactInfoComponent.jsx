'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactInfoComponent() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) PLUMBER",
      secondary: "24/7 Emergency Service",
      accent: "bg-orange-100 text-orange-600",
      highlight: "text-orange-600"
    },
    {
      icon: Mail,
      title: "Email", 
      primary: "info@yourname.com",
      secondary: "Response within 2 hours",
      accent: "bg-blue-100 text-blue-600",
      highlight: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "123 Main Street",
      secondary: "Your City, State 12345",
      accent: "bg-blue-100 text-blue-600",
      highlight: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon-Fri: 7 AM - 6 PM",
      secondary: "Sat-Sun: 8 AM - 4 PM",
      accent: "bg-orange-100 text-orange-600",
      highlight: "text-orange-600",
      extra: "Emergency: 24/7"
    }
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {contactInfo.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -2 }}
            className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3 transition-all"
          >
            {/* Icon */}
            <div className={`${item.accent} rounded-lg p-2.5 flex-shrink-0`}>
              <item.icon className="w-5 h-5" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                {item.title}
              </h3>
              <p className={`text-base font-medium ${item.highlight} mb-0.5 truncate`}>
                {item.primary}
              </p>
              <p className="text-xs text-gray-500 leading-tight">
                {item.secondary}
              </p>
              {item.extra && (
                <p className={`text-xs font-medium ${item.highlight} mt-1`}>
                  {item.extra}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}