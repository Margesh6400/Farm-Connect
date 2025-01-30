import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const dummyUsers = [
    { email: 'john.farmer@example.com', password: 'Test123!' },
    { email: 'sarah.smith@example.com', password: 'Farmer456!' },
    { email: 'mike.davis@example.com', password: 'Agriculture789!' },
    { email: 'admin@nw.com', password: '1234' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = dummyUsers.find(u => 
      u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } else {
      setError('Invalid credentials. Try using one of the test accounts listed below.');
    }
  };

  const handleSocialLogin = (provider) => {
    // Simulate social login - in real implementation, this would integrate with the respective provider's SDK
    console.log(`Logging in with ${provider}`);
    setSuccess(true);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  if (success) {
    return (
      <motion.div 
        className="fixed inset-0 bg-green-500 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-white text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3
          }}
        >
          <motion.div 
            className="mb-6 relative"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 1,
              times: [0, 0.5, 1]
            }}
          >
            <Check size={80} className="mx-auto text-white" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Login Successful!
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Redirecting to dashboard...
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

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
          </motion.div>

          {/* Right side */}
          <motion.div 
            className="flex flex-col justify-center space-y-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.form 
                key="loginForm"
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
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
                  </motion.div>
                </div>

                {error && (
                  <motion.div 
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
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

                <div className="relative flex items-center justify-center my-6">
                  <div className="border-t border-gray-300 w-full"></div>
                  <span className="bg-white px-4 text-sm text-gray-500">or </span>
                  <div className="border-t border-gray-300 w-full"></div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    type="button"
                    onClick={() => handleSocialLogin('Google')}
                    className="flex-1 p-3 border-2 border-gray-200 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">Google</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => handleSocialLogin('Facebook')}
                    className="flex-1 p-3 border-2 border-gray-200 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#1877F2"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-600">Facebook</span>
                  </motion.button>
                </div>
              </motion.form>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistration;