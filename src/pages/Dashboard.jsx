import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, BarChart3, ShoppingCart, MessageSquare } from 'lucide-react';
import MarketDemand from '../components/dashboard/MarketDemand';
import AddCropDetails from '../components/dashboard/AddCropDetails';
import Negotiation from '../components/dashboard/Negotiation';
import Analytics from '../components/dashboard/Analytics';

// Background decoration component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white/80 to-green-100/90" />
    
    {/* Animated circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl"
        initial={{ opacity: 0.5 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 200 + 150}px`,
          height: `${Math.random() * 200 + 150}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: [
            'rgba(167, 243, 208, 0.3)',
            'rgba(134, 239, 172, 0.3)',
            'rgba(187, 247, 208, 0.3)',
          ][Math.floor(Math.random() * 3)],
        }}
      />
    ))}
  </div>
);

const MenuItem = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center w-full p-4 rounded-2xl
        transition-all duration-200 ease-in-out
        ${isActive ? 'bg-emerald-500 text-white' : 'text-white/90 hover:bg-emerald-800'}
      `}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        initial={false}
        animate={isActive ? {
          rotate: [0, -10, 10, 0],
          scale: [1, 1.2, 1.2, 1],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-5 h-5 mr-3" />
      </motion.div>
      <span className="font-medium">{item.label}</span>
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-emerald-400/20 rounded-2xl"
          layoutId="activeSection"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

const Dashboard = () => {
  const [user] = useState({
    name: 'John Doe',
  });

  const [activeSection, setActiveSection] = useState('marketDemand');

  const menuItems = [
    { id: 'marketDemand', label: 'Market Demand', icon: ShoppingCart },
    { id: 'addCropDetails', label: 'Add Crop Details', icon: Leaf },
    { id: 'negotiation', label: 'Negotiation', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'marketDemand':
        return <MarketDemand />;
      case 'addCropDetails':
        return <AddCropDetails />;
      case 'negotiation':
        return <Negotiation />;
      case 'analytics':
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex relative">
      <BackgroundDecoration />
      
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-72 bg-gradient-to-b from-green-900 to-emerald-900 p-6 text-white shadow-xl mt-8 relative z-10 rounded-r-3xl"
      >
        <motion.div 
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-bold bg-emerald-800 p-4 rounded-2xl shadow-lg text-center"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(6, 78, 59, 1)",
            }}
          >
            Farmer's Dashboard
          </motion.h2>
        </motion.div>
        
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <MenuItem
                item={item}
                isActive={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
              />
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 p-8 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100 relative overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-between mb-8 pb-6 border-b border-green-100"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <motion.h1 
                className="text-4xl font-bold text-green-900"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Welcome, {user.name}
              </motion.h1>
              <motion.p 
                className="text-green-600 mt-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Manage your agricultural business efficiently
              </motion.p>
            </div>
            <motion.div 
              className="bg-green-50 p-4 rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-800 font-medium">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            key={activeSection}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {renderSection()}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;