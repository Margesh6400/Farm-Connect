import React, { useState } from 'react';
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
    <div
      className="relative group transform transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: 0,
        animation: `fadeSlideIn 0.6s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}20)`,
          transform: `scale(${isHovered ? 1.02 : 1})`,
          borderRadius: isHovered ? '24px' : '16px'
        }}
      />

      <PatternBackground />

      <div 
        className="relative p-8 backdrop-blur-sm rounded-2xl border transition-colors duration-300 flex flex-col items-center text-center"
        style={{ borderColor: `${colors.primary}${isHovered ? '40' : '30'}` }}
      >
        {/* Icon Container - Centered with Wobble */}
        <div className="mb-6 relative flex justify-center w-full">
          {/* Background circle */}
          <div
            className="absolute w-14 h-14 rounded-full transition-transform duration-300"
            style={{ 
              backgroundColor: `${colors.primary}20`,
              transform: `scale(${isHovered ? 1.2 : 1})`
            }}
          />
          
          {/* Icon - Centered with Wobble */}
          <div 
            className="relative flex items-center justify-center w-14 h-14"
            style={{ 
              color: colors.primary,
              animation: isHovered ? 'wobble 1s ease infinite' : 'none'
            }}
          >
            {feature.icon}
          </div>
        </div>

        {/* Content - Centered */}
        <h3 
          className="text-2xl font-semibold mb-3 transition-transform duration-300"
          style={{ 
            color: colors.text,
            transform: isHovered ? 'scale(1.02)' : 'none'
          }}
        >
          {feature.title}
        </h3>

        <p 
          className="mb-4 leading-relaxed transition-opacity duration-300"
          style={{ 
            color: colors.highlight,
            opacity: isHovered ? 1 : 0.8
          }}
        >
          {feature.description}
        </p>

        {/* Feature Highlights - Centered */}
        <div
          className="space-y-3 transition-all duration-300 overflow-hidden w-full"
          style={{ 
            maxHeight: isHovered ? '200px' : '0',
            opacity: isHovered ? 1 : 0
          }}
        >
          {feature.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-center text-sm transition-all duration-300 justify-center"
              style={{ 
                color: colors.highlight,
                transform: `translateX(${isHovered ? '0' : '-20px'})`,
                opacity: isHovered ? 1 : 0,
                transitionDelay: `${idx * 0.1}s`
              }}
            >
              <div 
                className="w-2 h-2 rounded-full mr-3"
                style={{ backgroundColor: colors.primary }}
              />
              {highlight}
            </div>
          ))}
        </div>

        {/* Interactive background glow */}
        <div
          className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full transition-all duration-300"
          style={{
            background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
            opacity: isHovered ? 0.2 : 0.1,
            transform: `scale(${isHovered ? 1.5 : 1})`
          }}
        />
      </div>
    </div>
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
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wobble {
          0% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-4px) rotate(-3deg); }
          50% { transform: translateY(-2px) rotate(0); }
          75% { transform: translateY(-4px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0); }
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-70" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div 
          className="text-center mb-20"
          style={{
            opacity: 0,
            animation: 'fadeSlideIn 0.6s ease-out forwards'
          }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Intelligent Farming Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge technology to maximize your agricultural potential
            and connect with the right buyers at the right time.
          </p>
        </div>

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