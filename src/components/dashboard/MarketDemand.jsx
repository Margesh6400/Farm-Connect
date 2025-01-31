import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  BarChart2,
  Package,
  History,
  AlertCircle,
} from "lucide-react";

const MarketDemand = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showDeals, setShowDeals] = useState(false);

  const categories = [
    { id: "all", name: "All Crops" },
    { id: "grains", name: "Grains" },
    { id: "vegetables", name: "Vegetables" },
    { id: "fruits", name: "Fruits" },
  ];

  const marketData = [
    {
      category: "grains",
      crop: "Wheat",
      currentPrice: 250,
      historicalPrices: [220, 230, 240, 250],
      quantity: "1000 tons",
      priceRange: "$200 - $250",
      timeline: "2 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "500 tons",
        export: "1500 tons",
        urgency: "high",
        buyerCount: 12,
      },
      recentDeals: [
        {
          date: "2024-01-25",
          quantity: "200 tons",
          price: "$245/ton",
          buyer: "AG Foods",
        },
        {
          date: "2024-01-20",
          quantity: "150 tons",
          price: "$238/ton",
          buyer: "Global Grains",
        },
      ],
      seasonality: ["Spring", "Winter"],
      growthTime: "4-5 months",
      profitMargin: "25%",
    },
    {
      category: "vegetables",
      crop: "Tomatoes",
      currentPrice: 180,
      historicalPrices: [150, 160, 170, 180],
      quantity: "300 tons",
      priceRange: "$150 - $200",
      timeline: "1 month",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "200 tons",
        export: "400 tons",
        urgency: "medium",
        buyerCount: 8,
      },
      recentDeals: [
        {
          date: "2024-01-28",
          quantity: "50 tons",
          price: "$175/ton",
          buyer: "Fresh Markets",
        },
        {
          date: "2024-01-22",
          quantity: "75 tons",
          price: "$172/ton",
          buyer: "Veggie Corp",
        },
      ],
      seasonality: ["Summer"],
      growthTime: "2-3 months",
      profitMargin: "35%",
    },
    {
      category: "fruits",
      crop: "Bananas",
      currentPrice: 90,
      historicalPrices: [110, 105, 95, 90],
      quantity: "500 tons",
      priceRange: "$80 - $110",
      timeline: "2 weeks",
      trend: "down",
      demand: "moderate",
      currentDemand: {
        local: "300 tons",
        export: "600 tons",
        urgency: "low",
        buyerCount: 6,
      },
      recentDeals: [
        {
          date: "2024-01-27",
          quantity: "100 tons",
          price: "$92/ton",
          buyer: "Tropical Supplies",
        },
        {
          date: "2024-01-21",
          quantity: "80 tons",
          price: "$95/ton",
          buyer: "Fruit Importers",
        },
      ],
      seasonality: ["All Year"],
      growthTime: "9-12 months",
      profitMargin: "20%",
    },
    {
      category: "grains",
      crop: "Rice",
      currentPrice: 300,
      historicalPrices: [320, 310, 305, 300],
      quantity: "800 tons",
      priceRange: "$280 - $330",
      timeline: "3 months",
      trend: "down",
      demand: "steady",
      currentDemand: {
        local: "400 tons",
        export: "1000 tons",
        urgency: "medium",
        buyerCount: 10,
      },
      recentDeals: [
        {
          date: "2024-01-26",
          quantity: "200 tons",
          price: "$308/ton",
          buyer: "Asian Traders",
        },
        {
          date: "2024-01-18",
          quantity: "150 tons",
          price: "$315/ton",
          buyer: "Rice Export Ltd",
        },
      ],
      seasonality: ["Monsoon"],
      growthTime: "4-6 months",
      profitMargin: "30%",
    },
    {
      category: "vegetables",
      crop: "Potatoes",
      currentPrice: 120,
      historicalPrices: [100, 110, 115, 120],
      quantity: "600 tons",
      priceRange: "$90 - $130",
      timeline: "1.5 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "350 tons",
        export: "500 tons",
        urgency: "high",
        buyerCount: 15,
      },
      recentDeals: [
        {
          date: "2024-01-29",
          quantity: "100 tons",
          price: "$118/ton",
          buyer: "Farm Fresh Ltd",
        },
        {
          date: "2024-01-23",
          quantity: "80 tons",
          price: "$115/ton",
          buyer: "Agro Distributors",
        },
      ],
      seasonality: ["Winter"],
      growthTime: "3-4 months",
      profitMargin: "28%",
    },
    {
      category: "fruits",
      crop: "Apples",
      currentPrice: 320,
      historicalPrices: [280, 290, 300, 320],
      quantity: "200 tons",
      priceRange: "$250 - $350",
      timeline: "3 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "120 tons",
        export: "250 tons",
        urgency: "medium",
        buyerCount: 7,
      },
      recentDeals: [
        {
          date: "2024-01-26",
          quantity: "50 tons",
          price: "$315/ton",
          buyer: "Orchard Distributors",
        },
        {
          date: "2024-01-20",
          quantity: "60 tons",
          price: "$310/ton",
          buyer: "Fresh Farms",
        },
      ],
      seasonality: ["Autumn"],
      growthTime: "6-7 months",
      profitMargin: "40%",
    },
    {
      category: "legumes",
      crop: "Lentils",
      currentPrice: 210,
      historicalPrices: [230, 220, 215, 210],
      quantity: "400 tons",
      priceRange: "$200 - $250",
      timeline: "4 months",
      trend: "down",
      demand: "steady",
      currentDemand: {
        local: "200 tons",
        export: "500 tons",
        urgency: "low",
        buyerCount: 9,
      },
      recentDeals: [
        {
          date: "2024-01-27",
          quantity: "100 tons",
          price: "$212/ton",
          buyer: "Pulse Traders",
        },
        {
          date: "2024-01-21",
          quantity: "80 tons",
          price: "$215/ton",
          buyer: "Global Pulses",
        },
      ],
      seasonality: ["Winter"],
      growthTime: "3-4 months",
      profitMargin: "22%",
    },
    {
      category: "legumes",
      crop: "Chickpeas",
      currentPrice: 180,
      historicalPrices: [170, 175, 178, 180],
      quantity: "300 tons",
      priceRange: "$160 - $190",
      timeline: "2 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "150 tons",
        export: "300 tons",
        urgency: "medium",
        buyerCount: 10,
      },
      recentDeals: [
        {
          date: "2024-01-28",
          quantity: "50 tons",
          price: "$178/ton",
          buyer: "Pulse Traders",
        },
        {
          date: "2024-01-22",
          quantity: "75 tons",
          price: "$175/ton",
          buyer: "Global Pulses",
        },
      ],
      seasonality: ["Spring", "Autumn"],
      growthTime: "3-4 months",
      profitMargin: "30%",
    },
    {
      category: "fruits",
      crop: "Pineapples",
      currentPrice: 150,
      historicalPrices: [140, 145, 148, 150],
      quantity: "400 tons",
      priceRange: "$130 - $160",
      timeline: "1.5 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "200 tons",
        export: "400 tons",
        urgency: "high",
        buyerCount: 12,
      },
      recentDeals: [
        {
          date: "2024-01-27",
          quantity: "100 tons",
          price: "$148/ton",
          buyer: "Tropical Fruits Co.",
        },
        {
          date: "2024-01-21",
          quantity: "80 tons",
          price: "$145/ton",
          buyer: "Fruit Importers",
        },
      ],
      seasonality: ["Summer"],
      growthTime: "6-8 months",
      profitMargin: "25%",
    },
    {
      category: "vegetables",
      crop: "Bell Peppers",
      currentPrice: 200,
      historicalPrices: [180, 185, 190, 200],
      quantity: "250 tons",
      priceRange: "$170 - $210",
      timeline: "1 month",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "100 tons",
        export: "300 tons",
        urgency: "medium",
        buyerCount: 8,
      },
      recentDeals: [
        {
          date: "2024-01-29",
          quantity: "50 tons",
          price: "$195/ton",
          buyer: "Veggie Corp",
        },
        {
          date: "2024-01-23",
          quantity: "75 tons",
          price: "$190/ton",
          buyer: "Fresh Markets",
        },
      ],
      seasonality: ["Spring", "Summer"],
      growthTime: "2-3 months",
      profitMargin: "35%",
    },
    {
      category: "grains",
      crop: "Barley",
      currentPrice: 220,
      historicalPrices: [200, 210, 215, 220],
      quantity: "500 tons",
      priceRange: "$190 - $230",
      timeline: "2 months",
      trend: "up",
      demand: "high",
      currentDemand: {
        local: "250 tons",
        export: "600 tons",
        urgency: "high",
        buyerCount: 15,
      },
      recentDeals: [
        {
          date: "2024-01-26",
          quantity: "100 tons",
          price: "$218/ton",
          buyer: "Grain Traders",
        },
        {
          date: "2024-01-20",
          quantity: "120 tons",
          price: "$215/ton",
          buyer: "Global Grains",
        },
      ],
      seasonality: ["Autumn"],
      growthTime: "4-5 months",
      profitMargin: "28%",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const dealVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const filteredData =
    selectedCategory === "all"
      ? marketData
      : marketData.filter((item) => item.category === selectedCategory);

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Current Market Status */}
        <motion.div
          className="mb-8 bg-white rounded-xl p-6 shadow-sm"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Market Intelligence Hub
              </h1>
              <p className="text-lg text-gray-600">
                Real-time market insights for informed farming decisions
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDeals(!showDeals)}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              {showDeals ? "Hide Recent Deals" : "Show Recent Deals"}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div
              className="bg-green-50 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-green-600">Total Active Demand</p>
              <h3 className="text-2xl font-bold text-green-700">2,600 tons</h3>
            </motion.div>
            <motion.div
              className="bg-blue-50 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-blue-600">Active Buyers</p>
              <h3 className="text-2xl font-bold text-blue-700">20</h3>
            </motion.div>
            <motion.div
              className="bg-purple-50 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-purple-600">Avg Deal Size</p>
              <h3 className="text-2xl font-bold text-purple-700">118 tons</h3>
            </motion.div>
            <motion.div
              className="bg-orange-50 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-orange-600">Market Trend</p>
              <h3 className="text-2xl font-bold text-orange-700">+15% MTD</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex space-x-4 mb-8" variants={itemVariants}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Market Trends Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
        >
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.crop}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <motion.div
                  className={`p-2 rounded-full ${
                    item.trend === "up" ? "bg-green-100" : "bg-yellow-100"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.trend === "up" ? (
                    <TrendingUp className="text-green-600" />
                  ) : (
                    <TrendingDown className="text-yellow-600" />
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-lg font-semibold">
                      ${item.currentPrice}/ton
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Demand: {item.currentDemand.local} (Local) +{" "}
                      {item.currentDemand.export} (Export)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {item.currentDemand.buyerCount} Active Buyers
                    </span>
                  </div>
                </div>

                <motion.div
                  className="h-24 bg-gray-50 rounded-lg p-2"
                  whileHover={{ height: 96 }}
                >
                  <div className="flex items-end h-full space-x-2">
                    {item.historicalPrices.map((price, i) => (
                      <motion.div
                        key={i}
                        className="bg-green-500 w-1/4"
                        initial={{ height: 0 }}
                        animate={{ height: `${(price / 400) * 100}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              <AnimatePresence>
                {showDeals && (
                  <motion.div
                    variants={dealVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="mt-4 border-t pt-4"
                  >
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Recent Deals
                    </h4>
                    <div className="space-y-2">
                      {item.recentDeals.map((deal, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-gray-50 p-2 rounded-lg text-sm"
                        >
                          <div className="flex justify-between">
                            <span>{deal.date}</span>
                            <span className="font-medium">{deal.price}</span>
                          </div>
                          <div className="flex justify-between text-gray-600">
                            <span>{deal.quantity}</span>
                            <span>{deal.buyer}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketDemand;
