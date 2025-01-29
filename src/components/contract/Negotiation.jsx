import React, { useState } from 'react';

const Negotiation = () => {
  const [negotiations, setNegotiations] = useState([
    {
      id: 1,
      buyer: 'Buyer A',
      cropType: 'Wheat',
      proposedPrice: 15.00,
      initialPrice: 15.00,
      status: 'Pending',
      messages: [
        { id: 1, sender: 'Buyer', content: 'Initial offer of $15.00 per kg', timestamp: '2024-01-28T10:00:00' },
      ],
      priceHistory: [
        { price: 15.00, timestamp: '2024-01-28T10:00:00', party: 'Buyer' }
      ],
      quantity: 5000,
      preferredDeliveryDate: '2024-03-15'
    },
    {
      id: 2,
      buyer: 'Buyer B',
      cropType: 'Corn',
      proposedPrice: 12.50,
      initialPrice: 12.50,
      status: 'Pending',
      messages: [
        { id: 1, sender: 'Buyer', content: 'Initial offer of $12.50 per kg', timestamp: '2024-01-28T09:30:00' }
      ],
      priceHistory: [
        { price: 12.50, timestamp: '2024-01-28T09:30:00', party: 'Buyer' }
      ],
      quantity: 3000,
      preferredDeliveryDate: '2024-02-28'
    }
  ]);

  const [message, setMessage] = useState('');
  const [selectedNegotiation, setSelectedNegotiation] = useState(null);
  const [counterOfferPrice, setCounterOfferPrice] = useState('');

  const handleAccept = (negotiation) => {
    const updatedMessages = [
      ...negotiation.messages,
      {
        id: negotiation.messages.length + 1,
        sender: 'Seller',
        content: `Accepted offer at $${negotiation.proposedPrice.toFixed(2)} per kg`,
        timestamp: new Date().toISOString()
      }
    ];

    setNegotiations(negotiations.map(neg => 
      neg.id === negotiation.id 
        ? { ...neg, status: 'Accepted', messages: updatedMessages }
        : neg
    ));
  };

  const handleReject = (negotiation) => {
    const updatedMessages = [
      ...negotiation.messages,
      {
        id: negotiation.messages.length + 1,
        sender: 'Seller',
        content: `Rejected offer of $${negotiation.proposedPrice.toFixed(2)} per kg`,
        timestamp: new Date().toISOString()
      }
    ];

    setNegotiations(negotiations.map(neg => 
      neg.id === negotiation.id 
        ? { ...neg, status: 'Rejected', messages: updatedMessages }
        : neg
    ));
  };

  const handleCounterOffer = (negotiation) => {
    if (!counterOfferPrice || isNaN(counterOfferPrice)) return;

    const price = parseFloat(counterOfferPrice);
    const updatedMessages = [
      ...negotiation.messages,
      {
        id: negotiation.messages.length + 1,
        sender: 'Seller',
        content: `Counter offer: $${price.toFixed(2)} per kg`,
        timestamp: new Date().toISOString()
      }
    ];

    const updatedPriceHistory = [
      ...negotiation.priceHistory,
      {
        price: price,
        timestamp: new Date().toISOString(),
        party: 'Seller'
      }
    ];

    setNegotiations(negotiations.map(neg => 
      neg.id === negotiation.id 
        ? {
            ...neg,
            proposedPrice: price,
            status: 'Counter Offered',
            messages: updatedMessages,
            priceHistory: updatedPriceHistory
          }
        : neg
    ));
    setCounterOfferPrice('');
    setSelectedNegotiation(null);
  };

  const handleSendMessage = (negotiation) => {
    if (!message.trim()) return;

    const updatedMessages = [
      ...negotiation.messages,
      {
        id: negotiation.messages.length + 1,
        sender: 'Seller',
        content: message.trim(),
        timestamp: new Date().toISOString()
      }
    ];

    setNegotiations(negotiations.map(neg => 
      neg.id === negotiation.id 
        ? { ...neg, messages: updatedMessages }
        : neg
    ));
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-green-800">Contract Negotiations</h2>
        <p className="mt-2 text-lg text-green-600">Manage price negotiations and communicate with buyers</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {negotiations.map(negotiation => (
          <div key={negotiation.id} className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-900">{negotiation.cropType}</h3>
                  <p className="text-sm text-gray-600">Buyer: {negotiation.buyer}</p>
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
                  <p className="text-sm text-gray-600">Current Price</p>
                  <p className="font-semibold text-lg">${negotiation.proposedPrice.toFixed(2)}/kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-semibold">{negotiation.quantity.toLocaleString()} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Initial Price</p>
                  <p className="font-semibold">${negotiation.initialPrice.toFixed(2)}/kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delivery Date</p>
                  <p className="font-semibold">{new Date(negotiation.preferredDeliveryDate).toLocaleDateString()}</p>
                </div>
              </div>

              {negotiation.status === 'Pending' && (
                <div className="flex space-x-2 mb-6">
                  <button
                    onClick={() => handleAccept(negotiation)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Accept Offer
                  </button>
                  <button
                    onClick={() => handleReject(negotiation)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject Offer
                  </button>
                  <button
                    onClick={() => setSelectedNegotiation(negotiation.id)}
                    className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Counter Offer
                  </button>
                </div>
              )}

              {selectedNegotiation === negotiation.id && (
                <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Counter Offer Price (per kg)</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      value={counterOfferPrice}
                      onChange={(e) => setCounterOfferPrice(e.target.value)}
                      placeholder="Enter new price"
                      step="0.01"
                    />
                    <button
                      onClick={() => handleCounterOffer(negotiation)}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-md font-medium text-gray-700 mb-2">Price History</h4>
                <div className="space-y-2 mb-4">
                  {negotiation.priceHistory.map((history, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className={history.party === 'Buyer' ? 'text-blue-600' : 'text-green-600'}>
                        {history.party}: ${history.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500">
                        {new Date(history.timestamp).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-md font-medium text-gray-700 mb-2">Messages</h4>
                <div className="h-48 overflow-y-auto mb-4 space-y-2">
                  {negotiation.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-lg ${
                        msg.sender === 'Buyer'
                          ? 'bg-blue-50 ml-4'
                          : 'bg-green-50 mr-4'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {msg.sender} • {new Date(msg.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={() => handleSendMessage(negotiation)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Send
                  </button>
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