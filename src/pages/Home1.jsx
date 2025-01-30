import { motion } from 'framer-motion';
import React from 'react';
import FeaturesAboutSection from '../components/Home/FeaturesAboutSection';
import AboutSection from '../components/Home/AboutSection';
import MissionSection from '../components/Home/OurMission';
import FooterSection from '../components/Home/footer';


// Background decoration component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white/80 to-white/90" />
    
    {/* Animated circles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl"
        initial={{ opacity: 0.7 }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 300 + 200}px`,
          height: `${Math.random() * 300 + 200}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: [
            'rgba(167, 243, 208, 0.4)',
            'rgba(134, 239, 172, 0.4)',
            'rgba(187, 247, 208, 0.4)',
          ][Math.floor(Math.random() * 3)],
        }}
      />
    ))}
    
    {/* Decorative patterns */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 0L40 40M40 0L0 40" stroke="currentColor" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  </div>
);

const FloatingImage = ({ src, alt, className }) => (
  <motion.div
    className={`relative ${className}`}
    animate={{ 
      y: [0, -20, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <motion.div
      className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-6"
      animate={{
        rotate: [6, -6, 6],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.img
      src={src}
      alt={alt}
      className="relative rounded-3xl object-cover w-full h-full shadow-xl"
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 }
      }}
    />
  </motion.div>
);

const StatsCard = ({ icon, number, title, description }) => (
  <motion.div
    className="transform transition-all duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20"
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <motion.div 
        className="flex justify-center mb-4"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="text-5xl font-bold mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {number}
      </motion.div>
      <div className="text-lg font-medium">{title}</div>
      <div className="mt-2 text-sm text-white/80">{description}</div>
    </motion.div>
  </motion.div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <BackgroundDecoration />
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Decorative line */}
              <motion.div
                className="w-20 h-2 bg-green-500 rounded-full mb-8"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Empowering Farmers with
                <motion.span 
                  className="block text-green-600 mt-2"
                  animate={{
                    color: ['#16a34a', '#22c55e', '#16a34a'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >Stable Markets</motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Connect directly with buyers, secure better prices, and grow your farming business with confidence. 
                Our platform ensures reliable income through verified contracts and transparent pricing.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: '9999px' }}
                  />
                  <span className="relative group-hover:text-green-600">Register as Farmer</span>
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register as Buyer
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-green-600">★★★★★</div>
                  <div className="text-sm text-gray-600">Trusted by 10,000+ farmers</div>
                </div>
                <div className="h-6 w-px bg-gray-300" />
                <div className="text-sm text-gray-600">ISO Certified</div>
              </motion.div>
            </motion.div>

            <div className="relative hidden lg:block">
              <FloatingImage
                src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202211/farmers888_4.jpg"
                alt="Farming"
                className="aspect-square"
              />
              
              {/* Floating achievement cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-green-600 font-bold">200K+</div>
                <div className="text-sm text-gray-600">Successful Trades</div>
              </motion.div>
              
              <motion.div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-green-600 font-bold">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48" />
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -right-48" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-12 text-white">
            {[
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
                number: "64,312+",
                title: "Active Farmers",
                description: "Connected and growing together"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 3v18M3 3l18 18"></path></svg>,
                number: "3,400+",
                title: "Verified Buyers",
                description: "Trusted marketplace partners"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>,
                number: "247+",
                title: "Agricultural Products",
                description: "Fresh from farm to table"
              }
            ].map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </motion.div>
      <FeaturesAboutSection/>
      <AboutSection/>
      <MissionSection/>
      <FooterSection/>
    </div>
  );
}