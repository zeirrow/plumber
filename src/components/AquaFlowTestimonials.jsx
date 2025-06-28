"use client";

import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/hooks/useCountUp";

export default function AquaFlowTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsRef = useRef(null);
  const [brandsRef, brandsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: "25", sign: "+", label: "Years Experience" },
    { number: "5000", sign: "+", label: "Jobs Completed" },
    { number: "98", sign: "%", label: "Customer Satisfaction" },
    { number: "24", sign: "/7", label: "Emergency Service" },
  ];

  const brands = [
    "Kohler",
    "American Standard",
    "Moen",
    "Delta",
    "Rheem",
    "Bradford White",
  ];

  const testimonials = [
    {
      text: "YourName saved the day when our pipe burst at 2 AM. Professional, fast, and reasonably priced!",
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
    },
    {
      text: "Outstanding work on our bathroom renovation. Clean, professional, and finished ahead of schedule.",
      name: "Mike Chen",
      location: "Westside",
      rating: 5,
    },
    {
      text: "Been using YourName for years. Always reliable, honest pricing, and quality work every time.",
      name: "Lisa Rodriguez",
      location: "Northpark",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  {`${useCountUp(Number(stat.number))}${stat.sign}`}
                </span>
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <div ref={brandsRef} className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={brandsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Trusted Partners &{" "}
            <span className="text-cyan-600">Quality Brands</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="text-gray-700 font-medium text-xl hover:text-blue-600 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={brandsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <div className="font-bold text-blue-900 text-xl">
                  {testimonial.name}
                </div>
                <div className="text-gray-500">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden relative mb-16" ref={testimonialsRef}>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <StarRating rating={testimonials[currentTestimonial].rating} />
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="text-center">
              <div className="font-bold text-blue-900 text-xl">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-500">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to Experience the YourName Difference?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Join our growing list of satisfied customers today
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
