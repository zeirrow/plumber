'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", section: "home" },
    { href: "#services", label: "Services", section: "services" },
    { href: "#about", label: "About", section: "about" },
    { href: "#testimonials", label: "Testimonials", section: "testimonials" },
    { href: "#contact", label: "Contact", section: "contact" },
  ];

  // Combined scroll and section tracking effect
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow effect
      setScrolled(window.scrollY > 10);
      
      // Active section detection
      const scrollPosition = window.scrollY + 100;
      
      for (const link of navLinks) {
        const element = document.getElementById(link.section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.section);
            break;
          }
        }
      }
    };
    
    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-gray-900"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="#home" 
              className="text-2xl font-bold text-white flex items-center"
              onClick={() => setActiveSection("home")}
            >
              <span className="bg-blue-600 text-white p-2 rounded-lg mr-2">P</span>
              <span className="hidden sm:inline">YourName</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.section}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.section ? "text-white" : ""
                    }`}
                    onClick={() => setActiveSection(link.section)}
                  >
                    {link.label}
                    {activeSection === link.section && (
                      <motion.span 
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                        layoutId="activeIndicator"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          damping: 20,
                          duration: 0.5 
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md"
                onClick={() => setActiveSection("contact")}
              >
                <Phone className="w-4 h-4" />
                <span>Free Quote</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.section}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      activeSection === link.section 
                        ? "text-white bg-gray-700" 
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(link.section);
                    }}
                  >
                    {link.label}
                    {activeSection === link.section && (
                      <motion.span 
                        className="block h-0.5 w-5 bg-blue-500 mt-1"
                        layoutId="mobileActiveIndicator"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="px-3 pt-2"
              >
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("contact");
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;