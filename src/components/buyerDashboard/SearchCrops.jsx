import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Filter,
  Map,
  TrendingUp,
  ChevronDown,
  Star,
  Truck
} from 'lucide-react';

const CropMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [sortBy, setSortBy] = useState('price');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    { id: 'all', name: 'All Crops' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'grains', name: 'Grains' }
  ];

  const crops = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      price: 180,
      unit: 'ton',
      available: 300,
      location: 'California Valley',
      farmer: 'Green Farms Co.',
      rating: 4.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
      delivery: '2-3 days',
      description: 'Fresh, organically grown tomatoes perfect for commercial use.',
      certification: 'USDA Organic'
    },
    {
      id: 2,
      name: 'Premium Bananas',
      category: 'fruits',
      price: 90,
      unit: 'ton',
      available: 500,
      location: 'Tropical Heights',
      farmer: 'Sunshine Fruits',
      rating: 4.5,
      image: 'https://healthjade.com/wp-content/uploads/2017/09/banana.jpg',
      delivery: '3-4 days',
      description: 'High-quality bananas from sustainable farming practices.',
      certification: 'Global GAP'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      category: 'grains',
      price: 300,
      unit: 'ton',
      available: 800,
      location: 'Punjab Fields',
      farmer: 'Golden Grains Ltd',
      rating: 4.9,
      image: 'https://www.gourmetfoodworld.com/images/Product/medium/basmati-rice-1S-1052.jpg',
      delivery: '5-7 days',
      description: 'Premium quality basmati rice with excellent aroma.',
      certification: 'ISO 22000'
    },
    {
      id: 4,
      name: 'Organic Carrots',
      category: 'vegetables',
      price: 150,
      unit: 'ton',
      available: 200,
      location: 'Oregon Farms',
      farmer: 'Healthy Harvest',
      rating: 4.7,
      image: 'https://bachelorrecipe.com/wp-content/uploads/2017/11/Vegan-Carrot-and-Potato-Soup5.jpg',
      delivery: '2-4 days',
      description: 'Crunchy and sweet organic carrots.',
      certification: 'USDA Organic'
    },
    {
      id: 5,
      name: 'Sweet Mangoes',
      category: 'fruits',
      price: 120,
      unit: 'ton',
      available: 600,
      location: 'Mango Valley',
      farmer: 'Tropical Fruits Co.',
      rating: 4.6,
      image: 'https://www.todaystraveller.net/wp-content/uploads/2021/05/mango-1.png',
      delivery: '3-5 days',
      description: 'Juicy and sweet mangoes from tropical regions.',
      certification: 'Global GAP'
    },
    {
      id: 6,
      name: 'Golden Corn',
      category: 'grains',
      price: 220,
      unit: 'ton',
      available: 400,
      location: 'Nebraska Fields',
      farmer: 'Cornucopia Farms',
      rating: 4.4,
      image: 'https://s30386.pcdn.co/wp-content/uploads/2019/08/FreshCorn_HNL1309_ts135846041.jpg',
      delivery: '3-5 days',
      description: 'High-quality golden corn perfect for various uses.',
      certification: 'Non-GMO'
    },
    {
      id: 7,
      name: 'Fresh Strawberries',
      category: 'fruits',
      price: 250,
      unit: 'ton',
      available: 150,
      location: 'Berry Fields',
      farmer: 'Berry Best Farms',
      rating: 4.9,
      image: 'https://static01.nyt.com/images/2015/06/07/travel/07HEADS3/07HEADS3-jumbo.jpg?quality=75&auto=webp',
      delivery: '1-2 days',
      description: 'Sweet and juicy strawberries freshly picked.',
      certification: 'Organic'
    },
    {
      id: 8,
      name: 'Organic Spinach',
      category: 'vegetables',
      price: 100,
      unit: 'ton',
      available: 250,
      location: 'Green Valley',
      farmer: 'Healthy Greens',
      rating: 4.6,
      image: 'https://www.seed-bank.ca/wp-content/uploads/how-to-grow-spinach-2048x2048.jpg',
      delivery: '2-3 days',
      description: 'Fresh organic spinach rich in nutrients.',
      certification: 'USDA Organic'
    },
    {
      id: 9,
      name: 'Sweet Potatoes',
      category: 'vegetables',
      price: 130,
      unit: 'ton',
      available: 350,
      location: 'Sweet Valley',
      farmer: 'Root Farms',
      rating: 4.7,
      image: 'https://ag.umass.edu/sites/ag.umass.edu/files/fact-sheets/images/photo_sep_23_2_51_52_pm.jpg',
      delivery: '3-4 days',
      description: 'Delicious and nutritious sweet potatoes.',
      certification: 'Non-GMO'
    },
    {
      id: 10,
      name: 'Juicy Oranges',
      category: 'fruits',
      price: 200,
      unit: 'ton',
      available: 500,
      location: 'Citrus Grove',
      farmer: 'Orange Delight',
      rating: 4.8,
      image: 'https://www.mashed.com/img/gallery/oranges-arent-always-orange-despite-their-name/intro-1676392533.webp',
      delivery: '2-3 days',
      description: 'Fresh and juicy oranges perfect for juicing.',
      certification: 'Global GAP'
    }
  ];

  const sortCrops = (crops) => {
    return [...crops].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'available':
          return b.available - a.available;
        default:
          return 0;
      }
    });
  };

  const filteredCrops = sortCrops(
    crops.filter(
      (crop) =>
        (selectedCategory === 'all' || crop.category === selectedCategory) &&
        crop.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        crop.price >= priceRange[0] &&
        crop.price <= priceRange[1]
    )
  );

  const addToCart = (crop) => {
    const existingItem = cart.find(item => item.id === crop.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === crop.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...crop, quantity: 1 }]);
    }
  };

  const removeFromCart = (cropId) => {
    setCart(cart.filter(item => item.id !== cropId));
  };

  const updateQuantity = (cropId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cropId);
    } else {
      setCart(cart.map(item =>
        item.id === cropId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
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

  const cartVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      {/* Fixed Navigation Bar */}
      <motion.nav 
        className="bg-white shadow-sm py-4 px-8 w-full z-50 flex-shrink-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">CropMarket</h1>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search crops..."
                className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-green-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              onClick={() => setShowCart(true)}
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Sort */}
          <div className="flex justify-between mb-8">
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            <motion.select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:border-green-500"
              whileHover={{ scale: 1.02 }}
            >
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="available">Sort by Availability</option>
            </motion.select>
          </div>

          {/* Price Range Filter */}
          <motion.div 
            className="bg-white p-4 rounded-lg mb-8"
            variants={itemVariants}
          >
            <h3 className="text-sm font-medium mb-2">Price Range ($ per ton)</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
          </motion.div>

          {/* Crop Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCrops.map((crop) => (
              <motion.div
                key={crop.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <motion.img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
                      <p className="text-sm text-gray-500">{crop.farmer}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{crop.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Price per {crop.unit}</span>
                      <span className="text-xl font-bold text-green-600">${crop.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Available</span>
                      <span className="font-medium">{crop.available} {crop.unit}s</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Truck className="w-4 h-4" />
                      <span>{crop.delivery}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium"
                      onClick={() => addToCart(crop)}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-gray-200 rounded-lg"
                      onClick={() => setSelectedCrop(crop)}
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50"
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button 
                  className="text-gray-500"
                  onClick={() => setShowCart(false)}
                >
                  ✕
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500 text-center">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 space-y-4 overflow-y-auto">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between border-b pb-4"
                      >
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">${item.price} per {item.unit}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </motion.button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </motion.button>
                          </div>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ✕
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-500 text-white py-3 rounded-lg font-medium"
                    >
                      Proceed to Checkout
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Crop Detail Modal */}
      <AnimatePresence>
        {selectedCrop && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedCrop(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-2xl w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCrop.image}
                  alt={selectedCrop.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <motion.button
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCrop(null)}
                >
                  ✕
                </motion.button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCrop.name}</h2>
                    <p className="text-gray-500">{selectedCrop.farmer}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-medium">{selectedCrop.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Price</h3>
                      <p className="text-xl font-bold text-green-600">${selectedCrop.price} per {selectedCrop.unit}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Available Quantity</h3>
                      <p className="font-medium">{selectedCrop.available} {selectedCrop.unit}s</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Delivery Time</h3>
                      <p>{selectedCrop.delivery}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p>{selectedCrop.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Certification</h3>
                      <p>{selectedCrop.certification}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedCrop.description}</p>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium"
                    onClick={() => {
                      addToCart(selectedCrop);
                      setSelectedCrop(null);
                    }}
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border border-gray-200 py-3 rounded-lg font-medium"
                    onClick={() => setSelectedCrop(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredCrops.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500">No crops found matching your criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default CropMarketplace;