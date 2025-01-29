import React, { useState } from 'react';

const MarketDemand = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  const demands = [
    {
      crop: 'Wheat',
      quantity: '1000 tons',
      priceRange: '$200 - $250',
      timeline: '2 months',
      trend: 'up',
      demand: 'high'
    },
    {
      crop: 'Corn',
      quantity: '500 tons',
      priceRange: '$150 - $180',
      timeline: '1 month',
      trend: 'stable',
      demand: 'medium'
    },
    {
      crop: 'Soybeans',
      quantity: '750 tons',
      priceRange: '$300 - $350',
      timeline: '3 months',
      trend: 'up',
      demand: 'high'
    }
  ];

  const recommendations = [
    {
      crop: 'Soybeans',
      reason: 'High demand in upcoming season',
      confidence: 95,
      projectedPrice: '$320/ton'
    },
    {
      crop: 'Barley',
      reason: 'Optimal growing conditions',
      confidence: 88,
      projectedPrice: '$175/ton'
    },
    {
      crop: 'Wheat',
      reason: 'Strong market outlook',
      confidence: 82,
      projectedPrice: '$230/ton'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Market Demand</h1>
          <p className="text-lg text-gray-600">Real-time crop demands and market analysis</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Most Demanded', 'Highest Price', 'Fastest Growing'].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">{stat}</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {index === 0 ? 'Wheat' : index === 1 ? 'Soybeans' : 'Corn'}
              </h3>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Demands Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Current Demands</h2>
                <div className="flex space-x-2">
                  {['1M', '3M', '6M', '1Y'].map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTimeframe === timeframe
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {demands.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => setSelectedCrop(item.crop.toLowerCase())}
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900">{item.crop}</h3>
                      <p className="text-sm text-gray-600">Expected: {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div>
                        <p className="text-sm text-gray-500">Price Range</p>
                        <p className="font-semibold text-gray-900">{item.priceRange}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Timeline</p>
                        <p className="font-semibold text-gray-900">{item.timeline}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        item.demand === 'high' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.demand.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendations</h2>
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.crop}</h3>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                        {item.confidence}% Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.reason}</p>
                    <p className="text-sm font-medium text-gray-900">
                      Projected Price: {item.projectedPrice}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Price Analysis',
              'Demand Forecast',
              'Regional Trends',
              'Weather Impact'
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item}</h3>
                <p className="text-sm text-gray-600">
                  Click to view detailed analysis and insights for {selectedCrop}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDemand;