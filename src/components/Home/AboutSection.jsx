import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Leaf, Building, ChevronRight } from 'lucide-react';

// Animated background shapes component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-100 rounded-xl mix-blend-multiply filter blur-lg"
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-lg"
        animate={{
          rotate: [0, -180, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
        <motion.pattern
          id="grid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Particle effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/40 backdrop-blur-[2px]" />
    </div>
  );
};

const AboutSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const stats = [
    { label: 'Farmers Onboarded', value: '2,500+', icon: <Leaf className="w-5 h-5" /> },
    { label: 'Enterprise Buyers', value: '500+', icon: <Building className="w-5 h-5" /> },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Preview Section */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-green-900 to-green-700 relative rounded-2xl overflow-hidden group">
              <img
                src="https://green.org/wp-content/uploads/2024/01/scientific-work-development-agriculture-high-technologies-innovations-agro-industry-agricultural-startup-automation-crop-159357218-e1708071740927-1024x686.webp"
                alt="Farming innovation"
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-green-600 ml-1" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-green-50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Transforming Agriculture Through Innovation
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We're revolutionizing agricultural commerce by creating direct
              connections between farmers and buyers, ensuring fair prices and
              sustainable practices for a better future in farming.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                >
                  <motion.div
                    className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Value Propositions */}
            <div className="space-y-6">
              {['Direct farmer-buyer connections', 'Fair pricing and transparent contracts', 'Sustainable agricultural practices'].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-lg text-slate-700"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <ChevronRight className="w-6 h-6 text-green-500" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full h-full flex items-center justify-center text-white">
              Video player placeholder
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;