import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Clock, Check, X, Filter, TrendingUp, Calendar, Tags, User, MapPin } from 'lucide-react';

const ReviewContracts = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const contracts = [
    {
      id: 1,
      title: "Premium Organic Soybeans Supply",
      farmer: {
        name: "Green Valley Farms",
        location: "Midwest Region",
        rating: 4.8,
        previousDeals: 12
      },
      details: {
        crop: "Organic Soybeans",
        quantity: "100 tons",
        pricePerTon: "$850",
        totalValue: "$85,000",
        deliveryTerms: "Monthly installments",
        startDate: "2025-03-01",
        duration: "6 months",
        qualityStandards: [
          "Protein content: min 40%",
          "Moisture: max 13%",
          "Foreign material: max 1%"
        ]
      },
      status: "pending",
      submittedDate: "2025-01-25",
      urgency: "high"
    },
    {
      id: 2,
      title: "Non-GMO Corn Contract",
      farmer: {
        name: "Sunrise Agriculture",
        location: "Eastern Region",
        rating: 4.5,
        previousDeals: 8
      },
      details: {
        crop: "Non-GMO Corn",
        quantity: "150 tons",
        pricePerTon: "$420",
        totalValue: "$63,000",
        deliveryTerms: "Quarterly delivery",
        startDate: "2025-04-01",
        duration: "12 months",
        qualityStandards: [
          "Moisture: max 14%",
          "Damage: max 3%",
          "Test weight: min 56 lbs/bu"
        ]
      },
      status: "pending",
      submittedDate: "2025-01-28",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Organic Wheat Supply",
      farmer: {
        name: "Healthy Harvest",
        location: "Western Region",
        rating: 4.7,
        previousDeals: 10
      },
      details: {
        crop: "Organic Wheat",
        quantity: "200 tons",
        pricePerTon: "$600",
        totalValue: "$120,000",
        deliveryTerms: "Bi-monthly installments",
        startDate: "2025-05-01",
        duration: "8 months",
        qualityStandards: [
          "Protein content: min 12%",
          "Moisture: max 14%",
          "Foreign material: max 2%"
        ]
      },
      status: "pending",
      submittedDate: "2025-02-10",
      urgency: "high"
    },
    {
      id: 4,
      title: "Premium Rice Contract",
      farmer: {
        name: "Golden Grains Ltd",
        location: "Northern Region",
        rating: 4.9,
        previousDeals: 15
      },
      details: {
        crop: "Basmati Rice",
        quantity: "250 tons",
        pricePerTon: "$900",
        totalValue: "$225,000",
        deliveryTerms: "Monthly installments",
        startDate: "2025-06-01",
        duration: "10 months",
        qualityStandards: [
          "Aroma: strong",
          "Moisture: max 12%",
          "Broken grains: max 5%"
        ]
      },
      status: "pending",
      submittedDate: "2025-03-05",
      urgency: "medium"
    },
    {
      id: 5,
      title: "Organic Carrots Supply",
      farmer: {
        name: "Root Farms",
        location: "Southern Region",
        rating: 4.6,
        previousDeals: 9
      },
      details: {
        crop: "Organic Carrots",
        quantity: "100 tons",
        pricePerTon: "$500",
        totalValue: "$50,000",
        deliveryTerms: "Monthly installments",
        startDate: "2025-07-01",
        duration: "6 months",
        qualityStandards: [
          "Size: uniform",
          "Moisture: max 10%",
          "Foreign material: max 1%"
        ]
      },
      status: "pending",
      submittedDate: "2025-04-15",
      urgency: "low"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4 }
    }
  };

  const handleAction = (contractId, action) => {
    // Animation placeholder for accept/reject actions
    console.log(`Contract ${contractId} ${action}ed`);
  };

  const StatusBadge = ({ status, urgency }) => {
    const getStatusColor = () => {
      if (status === 'approved') return 'bg-green-100 text-green-800';
      if (status === 'rejected') return 'bg-red-100 text-red-800';
      if (urgency === 'high') return 'bg-amber-100 text-amber-800';
      return 'bg-blue-100 text-blue-800';
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
        {urgency === 'high' ? 'Urgent Review' : status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
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
        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Contract Review Dashboard</h1>
            <p className="text-gray-600">Review and respond to incoming contract proposals</p>
          </div>
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Filter className="w-5 h-5 text-gray-500" />
            <select 
              className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Proposals</option>
              <option value="pending">Pending</option>
              <option value="urgent">Urgent</option>
            </select>
          </motion.div>
        </div>
      </motion.div>

      {/* Contracts List */}
      <div className="space-y-4">
        {contracts.map((contract) => (
          <motion.div
            key={contract.id}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Contract Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">{contract.title}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{contract.farmer.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{contract.farmer.location}</span>
                    </div>
                  </div>
                </div>
                <StatusBadge status={contract.status} urgency={contract.urgency} />
              </div>

              {/* Quick Info */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Tags className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">{contract.details.crop}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">{contract.details.totalValue}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-600">{contract.details.duration}</span>
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <motion.button
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => setSelectedContract(selectedContract === contract.id ? null : contract.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedContract === contract.id ? 'Show Less' : 'View Details'}
              </motion.button>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {selectedContract === contract.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-6 grid grid-cols-2 gap-6">
                    {/* Contract Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">Contract Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="font-medium">{contract.details.quantity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price per Ton:</span>
                          <span className="font-medium">{contract.details.pricePerTon}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Terms:</span>
                          <span className="font-medium">{contract.details.deliveryTerms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date:</span>
                          <span className="font-medium">{contract.details.startDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quality Standards */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Standards</h4>
                      <ul className="space-y-2">
                        {contract.details.qualityStandards.map((standard, index) => (
                          <li key={index} className="text-gray-600">{standard}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="col-span-2 flex justify-end space-x-4 mt-4">
                      <motion.button
                        className="px-6 py-2 bg-red-100 text-red-700 rounded-lg font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#FEE2E2" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAction(contract.id, 'reject')}
                      >
                        <div className="flex items-center space-x-2">
                          <X className="w-5 h-5" />
                          <span>Reject</span>
                        </div>
                      </motion.button>
                      <motion.button
                        className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAction(contract.id, 'approve')}
                      >
                        <div className="flex items-center space-x-2">
                          <Check className="w-5 h-5" />
                          <span>Approve</span>
                        </div>
                      </motion.button>
                    </div>
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

export default ReviewContracts;