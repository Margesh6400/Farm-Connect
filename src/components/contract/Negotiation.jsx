import React, { useState } from 'react';

const Negotiation = () => {
  const [negotiations, setNegotiations] = useState([
    {
      id: 'NEG-2024-001',
      crop: 'Carrots',
      quantity: '150 tons',
      initialPrice: '₹120/ton',
      counterOffer: '₹110/ton',
      status: 'In Negotiation',
      farmer: 'Root Farms',
    },
    {
      id: 'NEG-2024-002',
      crop: 'Oranges',
      quantity: '250 tons',
      initialPrice: '₹180/ton',
      counterOffer: '₹170/ton',
      status: 'In Negotiation',
      farmer: 'Citrus Grove',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-green-800">Contract Negotiations</h2>
        <p className="mt-2 text-lg text-green-600">Manage price negotiations and communicate with buyers</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {negotiations.map((negotiation) => (
          <div key={negotiation.id} className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-900">{negotiation.crop}</h3>
                  <p className="text-sm text-gray-600">Farmer: {negotiation.farmer}</p>
                </div>
                <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                  negotiation.status === 'Accepted' ? 'bg-green-100 text-green-700 border border-green-200' :
                  negotiation.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' :
                  negotiation.status === 'Counter Offered' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                  'bg-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  {negotiation.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Initial Price</p>
                  <p className="font-semibold text-lg">{negotiation.initialPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-semibold">{negotiation.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Counter Offer</p>
                  <p className="font-semibold">{negotiation.counterOffer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Negotiation;