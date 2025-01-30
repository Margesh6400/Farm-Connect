import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Calendar, Users, Shield, Truck, ScatterChart } from 'lucide-react';

// SVG Pattern Component for card backgrounds
const PatternBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    primary: feature.colors.primary,
    secondary: feature.colors.secondary,
    text: feature.colors.text,
    highlight: feature.colors.highlight,
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}20)` }}
        initial={{ scale: 0, borderRadius: "16px" }}
        animate={{ scale: 1, borderRadius: isHovered ? "24px" : "16px" }}
        transition={{ duration: 0.3 }}
      />

      <PatternBackground />

      <motion.div 
        className="relative p-8 backdrop-blur-sm rounded-2xl border"
        style={{ borderColor: `${colors.primary}30` }}
        whileHover={{ y: -8 }}
      >
        {/* Icon Container */}
        <motion.div 
          className="mb-6 relative"
          animate={isHovered ? {
            y: [0, -10, 0],
            rotate: [0, -5, 5, 0]
          } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        >
          {/* Background circle */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: `${colors.primary}20` }}
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon */}
          <div className="relative w-14 h-14 flex items-center justify-center"
               style={{ color: colors.primary }}>
            {feature.icon}
          </div>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: colors.text }}
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p 
          className="mb-4 leading-relaxed"
          style={{ color: colors.highlight }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {feature.description}
        </motion.p>

        {/* Feature Highlights */}
        <motion.ul
          className="space-y-3"
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
        >
          {feature.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              className="flex items-center text-sm"
              style={{ color: colors.highlight }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full mr-3"
                style={{ backgroundColor: colors.primary }}
              />
              {highlight}
            </motion.li>
          ))}
        </motion.ul>

        {/* Interactive background element */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
          }}
          animate={{
            scale: isHovered ? 2 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Smart Price Predictions",
      description: "AI-powered market analysis for optimal pricing strategies",
      colors: {
        primary: "#2563eb",
        secondary: "#60a5fa",
        text: "#1e3a8a",
        highlight: "#3b82f6"
      },
      highlights: [
        "72-hour price forecasting",
        "Regional market trends",
        "Seasonal variations analysis"
      ]
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Harvest Planning",
      description: "Optimize your farming schedule with intelligent planning tools",
      colors: {
        primary: "#059669",
        secondary: "#34d399",
        text: "#064e3b",
        highlight: "#10b981"
      },
      highlights: [
        "Weather-based planning",
        "Crop rotation optimizer",
        "Resource allocation"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Buyer Network",
      description: "Connect with verified buyers in your region and beyond",
      colors: {
        primary: "#7c3aed",
        secondary: "#a78bfa",
        text: "#4c1d95",
        highlight: "#8b5cf6"
      },
      highlights: [
        "Verified buyer profiles",
        "Direct messaging",
        "Contract management"
      ]
    },
    {
      icon: <ScatterChart className="w-10 h-10" />,
      title: "Yield Analytics",
      description: "Track and optimize your farm's performance metrics",
      colors: {
        primary: "#0891b2",
        secondary: "#22d3ee",
        text: "#164e63",
        highlight: "#06b6d4"
      },
      highlights: [
        "Yield comparison tools",
        "Resource efficiency metrics",
        "Growth tracking"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Transactions",
      description: "Safe and transparent payment processing system",
      colors: {
        primary: "#9333ea",
        secondary: "#c084fc",
        text: "#581c87",
        highlight: "#a855f7"
      },
      highlights: [
        "Escrow services",
        "Multiple payment methods",
        "Transaction insurance"
      ]
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Smart Logistics",
      description: "Optimize your supply chain and delivery routes",
      colors: {
        primary: "#0d9488",
        secondary: "#2dd4bf",
        text: "#134e4a",
        highlight: "#14b8a6"
      },
      highlights: [
        "Route optimization",
        "Real-time tracking",
        "Delivery partnerships"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-70" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Intelligent Farming Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge technology to maximize your agricultural potential
            and connect with the right buyers at the right time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;