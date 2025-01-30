import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter,
  Calendar,
  Search,
  Download,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  ChevronDown
} from 'lucide-react';

const TransactionDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    {
      id: 1,
      type: 'purchase',
      product: 'Organic Tomatoes',
      amount: 2500,
      date: '2024-01-15',
      status: 'completed',
      farmer: 'Green Valley Farms',
      quantity: '2.5 tons',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-001-2024'
    },
    {
      id: 2,
      type: 'sale',
      product: 'Premium Apples',
      amount: 3800,
      date: '2024-01-18',
      status: 'pending',
      farmer: 'Sunshine Orchards',
      quantity: '3 tons',
      paymentMethod: 'Credit Card',
      invoiceNumber: 'INV-002-2024'
    },
    {
      id: 3,
      type: 'purchase',
      product: 'Organic Wheat',
      amount: 5200,
      date: '2024-01-20',
      status: 'completed',
      farmer: 'Golden Grains Co.',
      quantity: '5 tons',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-003-2024'
    }
  ];

  const stats = [
    { label: 'Total Purchases', value: '$12,500', trend: 'up', percentage: '12.5' },
    { label: 'Total Sales', value: '$8,800', trend: 'down', percentage: '5.2' },
    { label: 'Active Orders', value: '25', trend: 'up', percentage: '8.7' },
    { label: 'Pending Payments', value: '$3,200', trend: 'down', percentage: '2.1' }
  ];

  const filters = ['all', 'purchase', 'sale', 'completed', 'pending'];

  const filterTransactions = () => {
    return transactions.filter(transaction => {
      const matchesFilter = selectedFilter === 'all' || 
        transaction.type === selectedFilter || 
        transaction.status === selectedFilter;
      
      const matchesSearch = transaction.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.farmer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const detailsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div 
        className="max-w-7xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Transaction History</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-gray-500 font-medium">{stat.label}</h3>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trend === 'up' ? '+' : '-'}{stat.percentage}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg capitalize ${
                  selectedFilter === filter
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-green-500 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Transactions List */}
        <LayoutGroup>
          <motion.div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filterTransactions().map((transaction) => (
                <motion.div
                  layout
                  key={transaction.id}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setSelectedTransaction(
                      selectedTransaction?.id === transaction.id ? null : transaction
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-3 rounded-full ${
                            transaction.type === 'purchase' 
                              ? 'bg-blue-100 text-blue-500'
                              : 'bg-green-100 text-green-500'
                          }`}
                        >
                          {transaction.type === 'purchase' ? (
                            <ArrowDownRight className="w-6 h-6" />
                          ) : (
                            <ArrowUpRight className="w-6 h-6" />
                          )}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">{transaction.product}</h3>
                          <p className="text-sm text-gray-500">{transaction.farmer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${transaction.amount.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedTransaction?.id === transaction.id && (
                        <motion.div
                          variants={detailsVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="mt-4 pt-4 border-t"
                        >
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Status</p>
                              <p className={`text-sm font-medium ${
                                transaction.status === 'completed'
                                  ? 'text-green-500'
                                  : 'text-yellow-500'
                              }`}>
                                {transaction.status.charAt(0).toUpperCase() + 
                                 transaction.status.slice(1)}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Quantity</p>
                              <p className="text-sm font-medium">{transaction.quantity}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Payment Method</p>
                              <p className="text-sm font-medium">{transaction.paymentMethod}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Invoice Number</p>
                              <p className="text-sm font-medium">{transaction.invoiceNumber}</p>
                            </div>
                          </div>

                          <div className="flex justify-end mt-4 space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg"
                            >
                              Download Invoice
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-sm border border-gray-200 rounded-lg"
                            >
                              View Details
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty State */}
        {filterTransactions().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl"
          >
            <p className="text-gray-500">No transactions found</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TransactionDashboard;