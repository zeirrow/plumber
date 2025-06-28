'use client';

import { Target, Zap, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExpertTeamComponent() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const teamMembers = [
    {
      name: "Mike Rodriguez",
      title: "Master Plumber",
      experience: "15+ years",
      specialties: ["Pipe Installations", "Commercial Plumbing"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Thompson", 
      title: "Licensed Plumber",
      experience: "10+ years",
      specialties: ["Bathroom Renovations", "Leak Detection"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"  // Replaced with a valid, clean portrait
    },
    {
      name: "David Kim",
      title: "Drain Specialist", 
      experience: "8+ years",
      specialties: ["Sewer Lines", "Hydro Jetting"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Jennifer Walsh",
      title: "Water Heater Expert",
      experience: "12+ years",
      specialties: ["Tankless Systems", "Energy Efficiency"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Work",
      description: "Every job is completed with meticulous attention to detail and quality craftsmanship."
    },
    {
      icon: Zap,
      title: "Fast Response", 
      description: "Quick response times for emergencies and scheduled appointments that fit your schedule."
    },
    {
      icon: Award,
      title: "100% Satisfaction",
      description: "We stand behind our work with comprehensive warranties and satisfaction guarantees."
    }
  ];

  return (
    <section id='about' className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Meet Our <span className="text-orange-500">Expert Team</span>
          </h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Licensed professionals with decades of combined experience. We're not just 
            plumbers – we're your neighbors committed to quality service.
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="group relative text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-left text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-orange-300 text-sm">{member.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {member.experience} experience
                </p>
                
                <div className="space-y-2">
                  {member.specialties.map((specialty, i) => (
                    <div key={i} className="text-sm text-gray-600 flex items-center">
                      <ChevronRight className="w-4 h-4 text-orange-500 mr-1" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div 
          ref={featuresRef}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-50 opacity-70"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-orange-50 opacity-70"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Why Choose Our Team
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-b from-white to-blue-50 p-8 rounded-xl border border-blue-100 hover:border-orange-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-blue-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Work With Our Experts?
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Schedule your service today and experience the difference of working with true professionals.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}