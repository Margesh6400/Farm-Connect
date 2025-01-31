import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Leaf, TrendingUp, AlertCircle, ChevronDown, Package, Truck } from 'lucide-react';

const ActiveContracts = () => {
  const [selectedContract, setSelectedContract] = useState(null);

  const contracts = [
    {
      id: 1,
      type: 'Organic Wheat',
      farmer: 'Green Fields Farm',
      buyer: 'Organic Mills Co.',
      quantity: '50 tons',
      price: '₹380/ton',
      deadline: '2025-03-15',
      status: 'In Progress',
      progress: 65,
      deliveryDate: '2025-03-01',
      qualityMetrics: {
        moisture: '12%',
        protein: '14%',
        purity: '98%'
      }
    },
    {
      id: 2,
      type: 'Non-GMO Corn',
      farmer: 'Sunrise Agriculture',
      buyer: 'Feed Solutions Ltd.',
      quantity: '75 tons',
      price: '₹420/ton',
      deadline: '2025-04-20',
      status: 'Pending Delivery',
      progress: 85,
      deliveryDate: '2025-04-10',
      qualityMetrics: {
        moisture: '13%',
        protein: '9%',
        purity: '97%'
      }
    },
    {
      id: 3,
      type: 'Basmati Rice',
      farmer: 'Golden Grains Ltd',
      buyer: 'Rice Traders Co.',
      quantity: '100 tons',
      price: '₹500/ton',
      deadline: '2025-05-10',
      status: 'In Progress',
      progress: 50,
      deliveryDate: '2025-05-01',
      qualityMetrics: {
        moisture: '10%',
        protein: '8%',
        purity: '99%'
      }
    },
    {
      id: 4,
      type: 'Organic Tomatoes',
      farmer: 'Healthy Harvest',
      buyer: 'Fresh Produce Inc.',
      quantity: '30 tons',
      price: '₹300/ton',
      deadline: '2025-06-15',
      status: 'Pending Delivery',
      progress: 75,
      deliveryDate: '2025-06-05',
      qualityMetrics: {
        moisture: '15%',
        protein: '5%',
        purity: '95%'
      }
    },
    {
      id: 5,
      type: 'Premium Bananas',
      farmer: 'Tropical Farms',
      buyer: 'Fruit Distributors Ltd.',
      quantity: '60 tons',
      price: '₹250/ton',
      deadline: '2025-07-20',
      status: 'In Progress',
      progress: 40,
      deliveryDate: '2025-07-10',
      qualityMetrics: {
        moisture: '20%',
        protein: '2%',
        purity: '90%'
      }
    },
    {
      id: 6,
      type: 'Sweet Mangoes',
      farmer: 'Mango Valley',
      buyer: 'Tropical Fruits Co.',
      quantity: '80 tons',
      price: '₹300/ton',
      deadline: '2025-08-15',
      status: 'In Progress',
      progress: 55,
      deliveryDate: '2025-08-05',
      qualityMetrics: {
        moisture: '18%',
        protein: '3%',
        purity: '92%'
      }
    },
    {
      id: 7,
      type: 'Golden Corn',
      farmer: 'Nebraska Fields',
      buyer: 'Cornucopia Farms',
      quantity: '90 tons',
      price: '₹220/ton',
      deadline: '2025-09-20',
      status: 'Pending Delivery',
      progress: 70,
      deliveryDate: '2025-09-10',
      qualityMetrics: {
        moisture: '14%',
        protein: '8%',
        purity: '95%'
      }
    },
    {
      id: 8,
      type: 'Fresh Strawberries',
      farmer: 'Berry Fields',
      buyer: 'Berry Best Farms',
      quantity: '40 tons',
      price: '₹250/ton',
      deadline: '2025-10-25',
      status: 'In Progress',
      progress: 60,
      deliveryDate: '2025-10-15',
      qualityMetrics: {
        moisture: '10%',
        protein: '4%',
        purity: '98%'
      }
    },
    {
      id: 9,
      type: 'Organic Spinach',
      farmer: 'Green Valley',
      buyer: 'Healthy Greens',
      quantity: '50 tons',
      price: '₹100/ton',
      deadline: '2025-11-30',
      status: 'Pending Delivery',
      progress: 80,
      deliveryDate: '2025-11-20',
      qualityMetrics: {
        moisture: '12%',
        protein: '6%',
        purity: '97%'
      }
    },
    {
      id: 10,
      type: 'Sweet Potatoes',
      farmer: 'Sweet Valley',
      buyer: 'Root Farms',
      quantity: '70 tons',
      price: '₹130/ton',
      deadline: '2025-12-15',
      status: 'In Progress',
      progress: 45,
      deliveryDate: '2025-12-05',
      qualityMetrics: {
        moisture: '15%',
        protein: '5%',
        purity: '94%'
      }
    },
    {
      id: 11,
      type: 'Organic Apples',
      farmer: 'Apple Orchard',
      buyer: 'Fruit Market Co.',
      quantity: '50 tons',
      price: '₹400/ton',
      deadline: '2025-01-15',
      status: 'In Progress',
      progress: 60,
      deliveryDate: '2025-01-05',
      qualityMetrics: {
        moisture: '10%',
        protein: '2%',
        purity: '95%'
      }
    },
    {
      id: 12,
      type: 'Organic Carrots',
      farmer: 'Carrot Farm',
      buyer: 'Vegetable Market Co.',
      quantity: '40 tons',
      price: '₹200/ton',
      deadline: '2025-02-15',
      status: 'Pending Delivery',
      progress: 70,
      deliveryDate: '2025-02-05',
      qualityMetrics: {
        moisture: '12%',
        protein: '3%',
        purity: '97%'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div 
        className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold text-green-800">Active Contracts</h1>
          <p className="text-green-600">Manage and track your ongoing contracts</p>
        </div>
        <Timer className="w-12 h-12 text-green-600" />
      </motion.div>

      <div className="space-y-4">
        {contracts.map((contract) => (
          <motion.div
            key={contract.id}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => setSelectedContract(selectedContract === contract.id ? null : contract.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Leaf className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{contract.type}</h3>
                    <p className="text-gray-600">{contract.farmer} → {contract.buyer}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: selectedContract === contract.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </div>

              <div className="mt-4">
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-green-500"
                    custom={contract.progress}
                    variants={progressVariants}
                  />
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-green-600 font-medium">{contract.progress}%</span>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {selectedContract === contract.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-green-100"
                >
                  <div className="p-6 grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        <Package className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Quantity:</span>
                        <span className="font-medium">{contract.quantity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium">{contract.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Delivery:</span>
                        <span className="font-medium">{contract.deliveryDate}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-green-50 rounded-xl p-4"
                    >
                      <h4 className="font-semibold text-green-800 mb-3">Quality Metrics</h4>
                      <div className="space-y-2">
                        {Object.entries(contract.qualityMetrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActiveContracts;