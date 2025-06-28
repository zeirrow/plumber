'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';

const Footer = () => {
  const services = [
    "Emergency Repairs",
    "Bathroom Plumbing",
    "Kitchen Plumbing",
    "Water Heater Service",
    "Drain Cleaning",
    "Commercial Services",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "License Info", href: "#" },
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "7 AM - 6 PM" },
    { day: "Saturday", time: "8 AM - 4 PM" },
    { day: "Sunday", time: "8 AM - 4 PM" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "(555) PLUMBER",
      href: "tel:555-PLUMBER"
    },
    {
      icon: Mail,
      text: "info@yourname.com",
      href: "mailto:info@yourname.com"
    },
    {
      icon: MapPin,
      text: "123 Main Street\nYour City, State 12345"
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div 
            variants={fadeInVariants}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">YourName</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-8">
              Professional plumbing services with over 25 years of experience.
              Licensed, insured, and committed to quality workmanship.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeInVariants}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-200 inline-block"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInVariants}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    <info.icon className="w-4 h-4" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-blue-100 hover:text-white transition-colors break-all"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <div className="text-blue-100 whitespace-pre-line">
                      {info.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={fadeInVariants}>
            <h4 className="text-xl font-bold mb-6">Business Hours</h4>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-blue-100">{schedule.day}</span>
                  <span className="text-white font-medium">
                    {schedule.time}
                  </span>
                </motion.div>
              ))}
              <motion.div 
                variants={fadeInVariants}
                className="pt-4 border-t border-blue-700"
              >
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-orange-600 transition-colors duration-200 cursor-pointer">
                  Emergency Service: 24/7
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 bg-blue-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-blue-200 text-sm">
              © {new Date().getFullYear()} YourName Plumbing. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;