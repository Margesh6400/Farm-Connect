import React, { useState } from 'react';

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-gray-800 text-3xl font-bold">
            <span className="text-green-600">Farm</span>Connect
          </h1>
          <a href="/login" className="text-green-600 text-sm hover:text-green-700 font-medium">
            Need help?
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mt-8">
          {/* Left side with illustration and text */}
          <div className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center shadow-xl border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
              Welcome to Modern Farming
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Your smart companion for better agriculture
            </p>
            
            <div className="w-full max-w-md mb-12 relative group">
              <img 
                src="https://img.freepik.com/premium-photo/man-managing-farm-scenic-countryside-landscape_1092689-30482.jpg?w=826"
                alt="Farmer in field with digital device"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
            
            <p className="text-xl text-gray-600 text-center font-medium">
              Smart farming solutions at your fingertips
            </p>
          </div>

          {/* Right side with form */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-gray-800 text-4xl font-bold mb-4">Welcome Back!</h3>
              <p className="text-gray-600 text-lg">Access your farm management dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Username or Email"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 placeholder-gray-400 transition-all duration-200"
                  />
                </div>
                
                <div className="relative">
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
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Sign in
              </button>
            </form>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-200 flex-1" />
                <p className="text-gray-500">or continue with</p>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-md flex items-center justify-center gap-3">
                  <span className="text-xl">G</span>
                  <span>Google</span>
                </button>
                <button className="p-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-md flex items-center justify-center gap-3">
                  <span className="text-xl">f</span>
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistration;