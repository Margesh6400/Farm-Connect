import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FilePlus, ClipboardList, DollarSign, CheckCircle, MessageSquare, FileText, Clock, History } from 'lucide-react';
import CreateContract from '../components/contract/CreateContract';
import TrackContracts from '../components/contract/TrackContracts';
import Negotiation from '../components/contract/Negotiation';
import PaymentManagement from '../components/contract/PaymentManagement';
import ContractCompletion from '../components/contract/ContractCompletion';

const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white/80 to-green-100/90" />
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
          ][i],
        }}
      />
    ))}
  </div>
);

const RoleSelector = ({ role, setRole }) => (
  <div className="flex mb-8 bg-green-900/40 p-2 rounded-2xl">
    <motion.button
      onClick={() => setRole('farmer')}
      className={`flex-1 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
        role === 'farmer' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-transparent text-white hover:bg-green-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Farmer Contracts
    </motion.button>
    <motion.button
      onClick={() => setRole('buyer')}
      className={`flex-1 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
        role === 'buyer' 
          ? 'bg-emerald-500 text-white' 
          : 'bg-transparent text-white hover:bg-green-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Buyer Contracts
    </motion.button>
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

const Contract = () => {
  const [role, setRole] = useState('farmer');
  const [activeSection, setActiveSection] = useState('createContract');

  const farmerMenuItems = [
    { id: 'createContract', label: 'Create Contract', icon: FilePlus },
    { id: 'trackContracts', label: 'Track Contracts', icon: ClipboardList },
    { id: 'negotiation', label: 'Negotiation', icon: MessageSquare },
    { id: 'paymentManagement', label: 'Payment Management', icon: DollarSign },
    { id: 'contractCompletion', label: 'Contract Completion', icon: CheckCircle },
  ];

  const buyerMenuItems = [
    { id: 'reviewContracts', label: 'Review Contracts', icon: FileText },
    { id: 'activeContracts', label: 'Active Contracts', icon: Clock },
    { id: 'negotiation', label: 'Negotiation', icon: MessageSquare },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'contractHistory', label: 'Contract History', icon: History },
  ];

  const menuItems = role === 'farmer' ? farmerMenuItems : buyerMenuItems;

  const renderSection = () => {
    if (role === 'farmer') {
      switch (activeSection) {
        case 'createContract':
          return <CreateContract />;
        case 'trackContracts':
          return <TrackContracts />;
        case 'negotiation':
          return <Negotiation />;
        case 'paymentManagement':
          return <PaymentManagement />;
        case 'contractCompletion':
          return <ContractCompletion />;
        default:
          return null;
      }
    } else {
      // Placeholder for buyer sections
      return (
        <div className="text-center p-8 text-gray-600">
          {activeSection} component for buyers would go here
        </div>
      );
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
          <RoleSelector role={role} setRole={setRole} />
          <motion.h2 
            className="text-2xl font-bold bg-green-800/50 p-4 rounded-2xl shadow-lg text-center"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(6, 78, 59, 0.6)",
            }}
          >
            Contract Management
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

export default Contract;