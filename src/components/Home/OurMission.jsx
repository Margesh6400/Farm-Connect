import React from 'react';

const MissionSection = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Circular patterns */}
        <div className="absolute w-96 h-96 rounded-full bg-green-100/30 blur-3xl -top-20 -right-20" />
        <div className="absolute w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl top-40 left-20" />
        <div className="absolute w-72 h-72 rounded-full bg-green-50/30 blur-3xl bottom-20 right-1/3" />
        
        {/* Abstract patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-full h-full transform rotate-45 scale-150">
            <div className="absolute w-full h-2 bg-green-200 top-1/4" />
            <div className="absolute w-full h-2 bg-green-200 top-2/4" />
            <div className="absolute w-full h-2 bg-green-200 top-3/4" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Now First */}
          <div className="lg:pr-12">
            <div className="w-20 h-2 bg-green-500 rounded-full mb-8" />

            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission for Sustainable Agriculture
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We're transforming agricultural commerce by building direct bridges between 
              farmers and consumers. Through our platform, we ensure fair compensation 
              for farmers while promoting sustainable farming practices that protect 
              our environment for future generations.
            </p>

            {/* Achievement indicators */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "85%", label: "Higher Farmer Income", subtext: "compared to traditional channels" },
                { number: "90%", label: "Sustainable Practices", subtext: "adopted by partner farms" },
                { number: "50K+", label: "Active Farmers", subtext: "on our platform" },
                { number: "100%", label: "Traceable Produce", subtext: "from farm to table" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Now Second */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <img
                src="/api/placeholder/600/600"
                alt="Sustainable Farming"
                className="w-full h-full object-cover"
              />

              {/* Overlay Cards */}
              <div className="absolute top-6 -left-12 bg-white p-6 rounded-xl shadow-xl w-64 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -right-2 top-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-y-1/2" />
                <h3 className="text-lg font-semibold text-green-600 mb-2">Sustainable Farming</h3>
                <p className="text-sm text-gray-600">Using regenerative agriculture practices to protect our soil and future</p>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl w-64 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-2 top-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-y-1/2" />
                <h3 className="text-lg font-semibold text-green-600 mb-2">Fair Trade Direct</h3>
                <p className="text-sm text-gray-600">Empowering farmers with better prices and direct market access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;