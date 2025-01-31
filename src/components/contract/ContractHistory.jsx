import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Search, Download, Filter, ArrowUpDown, Calendar, DollarSign, BarChart3, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ContractHistory = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedContract, setSelectedContract] = useState(null);

  const contractHistory = [
    {
      id: 1,
      title: "Organic Wheat Supply Q1",
      farmer: "Green Valley Farms",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      value: 75000,
      quantity: "100 tons",
      status: "completed",
      rating: 4.8,
      performance: {
        qualityScore: 95,
        timelinessScore: 98,
        communicationScore: 92
      },
      monthlyData: [
        { month: 'Jan', value: 25000 },
        { month: 'Feb', value: 25000 },
        { month: 'Mar', value: 25000 }
      ]
    },
    {
      id: 2,
      title: "Non-GMO Corn Annual",
      farmer: "Sunrise Agriculture",
      startDate: "2024-04-01",
      endDate: "2024-12-31",
      value: 180000,
      quantity: "300 tons",
      status: "completed",
      rating: 4.5,
      performance: {
        qualityScore: 88,
        timelinessScore: 94,
        communicationScore: 90
      },
      monthlyData: [
        { month: 'Apr', value: 45000 },
        { month: 'Jul', value: 45000 },
        { month: 'Oct', value: 45000 },
        { month: 'Dec', value: 45000 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4 }
    }
  };

  const calculateAverageScore = (performance) => {
    const scores = Object.values(performance);
    return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header Section */}
      <motion.div 
        className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <History className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Contract History</h1>
              <p className="text-gray-600">View and analyze past contracts</p>
            </div>
          </div>
          <motion.button
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div className="relative" variants={itemVariants}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search contracts..."
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <select
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </motion.div>
        <motion.button
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort by Date</span>
        </motion.button>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {contractHistory.map((contract) => (
          <motion.div
            key={contract.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            whileHover={{ scale: 1.01 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{contract.title}</h3>
                  <p className="text-gray-600">{contract.farmer}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Contract Value</p>
                    <p className="font-semibold text-gray-800">${contract.value.toLocaleString()}</p>
                  </div>
                  <motion.button
                    className="px-4 py-2 text-purple-600 border-2 border-purple-200 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedContract(selectedContract === contract.id ? null : contract.id)}
                  >
                    {selectedContract === contract.id ? 'Hide Details' : 'View Details'}
                  </motion.button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{contract.startDate} - {contract.endDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{contract.quantity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Performance Score: {calculateAverageScore(contract.performance)}</span>
                </div>
              </div>

              <AnimatePresence>
                {selectedContract === contract.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Performance Metrics</h4>
                        <div className="space-y-3">
                          {Object.entries(contract.performance).map(([key, value]) => (
                            <div key={key} className="flex items-center">
                              <div className="w-1/2">
                                <span className="text-gray-600 capitalize">
                                  {key.replace('Score', '')}
                                </span>
                              </div>
                              <div className="w-1/2">
                                <div className="relative h-2 bg-gray-100 rounded-full">
                                  <motion.div
                                    className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${value}%` }}
                                    transition={{ duration: 1 }}
                                  />
                                </div>
                                <span className="text-sm text-gray-600 mt-1">{value}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Value Distribution</h4>
                        <div className="h-48">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={contract.monthlyData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#8b5cf6"
                                strokeWidth={2}
                                dot={{ fill: '#8b5cf6' }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContractHistory;