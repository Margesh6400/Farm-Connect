export default function MarketDemand() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green-900 mb-6">Market Demand</h2>
      <p className="text-lg text-green-600 mb-8">View current crop demands from buyers and analyze price trends.</p>
      
      {/* Current Crop Demands */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-green-900 mb-4">Current Crop Demands</h3>
        <ul className="space-y-6">
          <li className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h4 className="text-xl font-semibold text-green-900">Wheat</h4>
            <p className="text-green-600 mt-2">Expected purchase quantity: 1000 tons</p>
            <p className="text-green-600 mt-1">Price range offered: $200 - $250 per ton</p>
            <p className="text-green-600 mt-1">Preferred delivery timeline: 2 months</p>
          </li>
          <li className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h4 className="text-xl font-semibold text-green-900">Corn</h4>
            <p className="text-green-600 mt-2">Expected purchase quantity: 500 tons</p>
            <p className="text-green-600 mt-1">Price range offered: $150 - $180 per ton</p>
            <p className="text-green-600 mt-1">Preferred delivery timeline: 1 month</p>
          </li>
          {/* Add more crops as needed */}
        </ul>
      </div>

      {/* Price Trends */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-green-900 mb-4">Price Trends</h3>
        <p className="text-lg text-green-600 mb-6">Historical price trends for crops based on market analysis.</p>
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          {/* Graph representation of price fluctuations */}
          <img src="https://via.placeholder.com/600x300" alt="Price Trends Graph" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Recommended Crops */}
      <div>
        <h3 className="text-2xl font-semibold text-green-900 mb-4">Recommended Crops</h3>
        <p className="text-lg text-green-600 mb-6">AI-driven recommendations based on past yields, market trends, and location suitability.</p>
        <ul className="space-y-6">
          <li className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h4 className="text-xl font-semibold text-green-900">Soybeans</h4>
            <p className="text-green-600 mt-2">High demand in the upcoming season.</p>
          </li>
          <li className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h4 className="text-xl font-semibold text-green-900">Barley</h4>
            <p className="text-green-600 mt-2">Suitable for your location and expected to fetch good prices.</p>
          </li>
          {/* Add more recommendations as needed */}
        </ul>
      </div>
    </div>
  )
}
