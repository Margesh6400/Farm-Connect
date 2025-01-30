import React, { useState } from 'react';
import { 
  User, Calendar, Package, DollarSign, 
  SortDesc, Search, TrendingUp, Clock,
  CheckCircle, XCircle, RotateCcw, ArrowUpRight,
  ArrowDownRight, Briefcase, Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StatusBadge = ({ status }) => {
  const styles = {
    accepted: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    countered: "bg-blue-100 text-blue-800 border-blue-200"
  }

  return (
    <motion.span 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </motion.span>
  )
}

const StatCard = ({ title, value, icon: Icon, trend }) => {
  const trendColor = trend >= 0 ? "text-green-500" : "text-red-500";
  const TrendIcon = trend >= 0 ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-green-50 rounded-lg">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
      </div>
      <div className="flex items-center mt-4">
        <TrendIcon className={`w-4 h-4 ${trendColor} mr-1`} />
        <span className={`${trendColor} text-sm font-medium`}>
          {Math.abs(trend)}% from last month
        </span>
      </div>
    </motion.div>
  );
};

const CounterOfferModal = ({ isOpen, onClose, offer, onSubmit }) => {
  const [counterOffer, setCounterOffer] = useState({
    price: '',
    quantity: '',
    deliveryDate: '',
    terms: '',
    notes: ''
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-xl p-6 max-w-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-4">Counter Offer to {offer.buyer}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Price (per ton)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={counterOffer.price}
                onChange={(e) => setCounterOffer({...counterOffer, price: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Quantity (tons)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={counterOffer.quantity}
                onChange={(e) => setCounterOffer({...counterOffer, quantity: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Delivery Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={counterOffer.deliveryDate}
                onChange={(e) => setCounterOffer({...counterOffer, deliveryDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={counterOffer.terms}
                onChange={(e) => setCounterOffer({...counterOffer, terms: e.target.value})}
              >
                <option value="">Select terms</option>
                <option value="net30">Net 30</option>
                <option value="net60">Net 60</option>
                <option value="immediate">Immediate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="3"
                value={counterOffer.notes}
                onChange={(e) => setCounterOffer({...counterOffer, notes: e.target.value})}
                placeholder="Add any additional terms or notes..."
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSubmit(counterOffer)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Submit Counter Offer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const OfferCard = ({ offer, onAccept, onReject, onCounter }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-lg p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <Building className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{offer.buyer}</h4>
            <div className="flex items-center space-x-2">
              <StatusBadge status={offer.status} />
              <span className="text-sm text-gray-500">
                Received {new Date(offer.receivedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Briefcase className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600">Order #{offer.id}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">Price per ton</span>
          </div>
          <span className="text-lg font-semibold">${offer.proposedPrice}</span>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <Package className="w-4 h-4" />
            <span className="text-sm">Quantity</span>
          </div>
          <span className="text-lg font-semibold">{offer.quantity} tons</span>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Delivery</span>
          </div>
          <span className="text-lg font-semibold">
            {new Date(offer.deliveryDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="mt-6 flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAccept(offer.id)}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Accept</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onReject(offer.id)}
          className="flex-1 bg-white text-red-600 px-4 py-2 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <XCircle className="w-4 h-4" />
          <span>Reject</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCounter(offer.id)}
          className="flex-1 bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Counter</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function NegotiationDashboard() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      buyer: "Acme Corp",
      proposedPrice: 220,
      quantity: 500,
      deliveryDate: "2024-06-15",
      status: "pending",
      receivedDate: "2024-01-15",
      companySize: "Large",
      previousOrders: 12,
      paymentTerms: "net30"
    },
    {
      id: 2,
      buyer: "TechStart Inc",
      proposedPrice: 230,
      quantity: 300,
      deliveryDate: "2024-07-01",
      status: "pending",
      receivedDate: "2024-01-20",
      companySize: "Medium",
      previousOrders: 5,
      paymentTerms: "immediate"
    }
  ]);

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showCounterModal, setShowCounterModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterStatus, setFilterStatus] = useState("all");

  // Stats data
  const stats = [
    {
      title: "Total Active Offers",
      value: offers.length,
      icon: Package,
      trend: 12.5
    },
    {
      title: "Average Price/Ton",
      value: `$${(offers.reduce((acc, curr) => acc + curr.proposedPrice, 0) / offers.length).toFixed(2)}`,
      icon: DollarSign,
      trend: -2.3
    },
    {
      title: "Total Volume",
      value: `${offers.reduce((acc, curr) => acc + curr.quantity, 0)} tons`,
      icon: TrendingUp,
      trend: 8.1
    },
    {
      title: "Avg. Response Time",
      value: "4.2 hours",
      icon: Clock,
      trend: -15.4
    }
  ];

  const handleAccept = (id) => {
    setOffers(offers.map(offer => 
      offer.id === id ? {...offer, status: 'accepted'} : offer
    ));
  };

  const handleReject = (id) => {
    setOffers(offers.map(offer => 
      offer.id === id ? {...offer, status: 'rejected'} : offer
    ));
  };

  const handleCounterOffer = (id) => {
    setSelectedOffer(offers.find(o => o.id === id));
    setShowCounterModal(true);
  };

  const handleCounterOfferSubmit = (counterOffer) => {
    setOffers(offers.map(offer => 
      offer.id === selectedOffer.id 
        ? {
            ...offer,
            status: 'countered',
            proposedPrice: parseFloat(counterOffer.price),
            quantity: parseInt(counterOffer.quantity),
            deliveryDate: counterOffer.deliveryDate,
            paymentTerms: counterOffer.terms
          }
        : offer
    ));
    setShowCounterModal(false);
    setSelectedOffer(null);
  };

  const filteredOffers = offers
    .filter(offer => 
      (filterStatus === 'all' || offer.status === filterStatus) &&
      offer.buyer.toLowerCase().includes(searchTerm.toLowerCase())






    )
    .sort((a, b) => 
      sortOrder === 'desc' 
        ? b.proposedPrice - a.proposedPrice
        : a.proposedPrice - b.proposedPrice
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-green-900">Negotiation Dashboard</h2>
            <p className="text-gray-600 mt-1">Manage and track all your ongoing negotiations</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Search buyers..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <motion.select
              whileHover={{ scale: 1.02 }}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="countered">Countered</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </motion.select>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <SortDesc className="h-5 w-5" />
              <span>Price {sortOrder === 'desc' ? '↓' : '↑'}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <motion.div
            layout
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-green-900">Active Offers</h3>
                <p className="text-gray-600 mt-1">
                  Showing {filteredOffers.length} active negotiations
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {filteredOffers.length} Active
              </motion.div>
            </div>

            <AnimatePresence>
              <div className="space-y-4">
                {filteredOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    onAccept={handleAccept}
                    onReject={handleReject}
                    onCounter={handleCounterOffer}
                  />
                ))}
              </div>
            </AnimatePresence>
          </motion.div>

          {/* Analytics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Negotiation Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Response Time</span>
                  <span className="font-semibold">4.2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Acceptance Rate</span>
                  <span className="font-semibold">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Counter Offer Rate</span>
                  <span className="font-semibold">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Negotiation Cycles</span>
                  <span className="font-semibold">2.3</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[...offers].reverse().slice(0, 4).map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="p-2 bg-green-50 rounded-full">
                      <User className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">{offer.buyer}</p>
                      <p className="text-sm text-gray-500">
                        New {offer.status} offer - ${offer.proposedPrice}/ton
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">
                      {new Date(offer.receivedDate).toLocaleDateString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CounterOfferModal
        isOpen={showCounterModal}
        onClose={() => setShowCounterModal(false)}
        offer={selectedOffer}
        onSubmit={handleCounterOfferSubmit}
      />
    </div>
  );
}