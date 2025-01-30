import React, { useState } from 'react';
import { motion } from 'framer-motion';

const dummyUsers = [
  { email: 'john.farmer@example.com', password: 'Test123!' },
  { email: 'sarah.smith@example.com', password: 'Farmer456!' },
  { email: 'mike.davis@example.com', password: 'Agriculture789!' },
  { email: 'admin@nw.com', password: '1234' }
];

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(u => 
      u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid credentials. Try using one of the test accounts listed below.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white p-6">
      {/* Background Animation */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'rgba(134, 239, 172, 0.4)',
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="flex justify-between items-center py-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-gray-800 text-3xl font-bold">
            <span className="text-green-600">Farm</span>Connect
          </h1>
          <a href="/help" className="text-green-600 text-sm hover:text-green-700 font-medium">
            Need help?
          </a>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 mt-8">
          {/* Left side */}
          <motion.div 
            className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center shadow-xl border border-gray-100"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
              Welcome to Modern Farming
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Your smart companion for better agriculture
            </p>
            
            <motion.div 
              className="w-full max-w-md mb-12 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://img.freepik.com/premium-photo/man-managing-farm-scenic-countryside-landscape_1092689-30482.jpg?w=826"
                alt="Farmer in field"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-900/20 to-transparent" />
            </motion.div>
            
            <motion.div 
              className="text-xl text-gray-600 text-center font-medium"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Smart farming solutions at your fingertips
            </motion.div>
          </motion.div>

          {/* Right side */}
          <motion.div 
            className="flex flex-col justify-center space-y-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-gray-800 text-4xl font-bold mb-4">Welcome Back!</h3>
              <p className="text-gray-600 text-lg">Access your farm management dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 placeholder-gray-400 transition-all duration-200"
                  />
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 placeholder-gray-400 transition-all duration-200"
                  />
                  <a href="/forgot-password" className="absolute right-4 top-4 text-sm text-green-600 hover:text-green-700">
                    Forgot?
                  </a>
                </motion.div>
              </div>

              {error && (
                <motion.div 
                  className="text-red-500 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}
              
              {success && (
                <motion.div 
                  className="text-green-500 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Successfully logged in!
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign in
              </motion.button>
            </form>

            {/* <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">Test Accounts:</p>
              {dummyUsers.map((user, index) => (
                <div key={index} className="text-xs text-gray-500">
                  Email: {user.email} | Password: {user.password}
                </div>
              ))}
            </div> */}

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-200 flex-1" />
                <p className="text-gray-500">or continue with</p>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button 
                  className="p-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-md flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">G</span>
                  <span>Google</span>
                </motion.button>
                <motion.button 
                  className="p-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-md flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">f</span>
                  <span>Facebook</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistration;