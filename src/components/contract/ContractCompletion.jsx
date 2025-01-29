import React, { useState } from 'react';

const ContractCompletion = () => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      buyer: 'Buyer A',
      cropType: 'Wheat',
      status: 'In Progress',
      deliveryDate: '2023-12-01',
      quantity: '500 tons',
      price: '$250,000',
      completionProgress: 65,
      dispute: null,
      evidence: [],
      lastUpdated: '2023-11-28'
    },
    {
      id: 2,
      buyer: 'Buyer B',
      cropType: 'Corn',
      status: 'Pending',
      deliveryDate: '2023-11-15',
      quantity: '300 tons',
      price: '$180,000',
      completionProgress: 30,
      dispute: null,
      evidence: [],
      lastUpdated: '2023-11-10'
    }
  ]);

  const handleMarkAsCompleted = (id) => {
    setContracts(contracts.map(contract => 
      contract.id === id ? { ...contract, status: 'Completed', completionProgress: 100 } : contract
    ));
  };

  const handleInitiateDispute = (id, reason) => {
    setContracts(contracts.map(contract => 
      contract.id === id ? { 
        ...contract, 
        dispute: { reason, status: 'Pending', dateInitiated: new Date().toISOString() } 
      } : contract
    ));
  };

  const handleUploadEvidence = (id, files) => {
    setContracts(contracts.map(contract => 
      contract.id === id ? { ...contract, evidence: [...contract.evidence, ...files] } : contract
    ));
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-500',
      'In Progress': 'bg-blue-500',
      'Pending': 'bg-yellow-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="border-l-4 border-green-500 pl-4 mb-8 transform hover:scale-101 transition-transform duration-200">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
          Contract Completion & Dispute Handling
        </h2>
        <p className="mt-2 text-lg text-green-600">Track, manage and resolve contract disputes efficiently</p>
      </div>

      <div className="space-y-6">
        {contracts.map(contract => (
          <div key={contract.id} 
               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    {contract.cropType}
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(contract.status)} animate-pulse`}></div>
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p>Buyer: <span className="font-medium">{contract.buyer}</span></p>
                    <p>Price: <span className="font-medium">{contract.price}</span></p>
                    <p>Quantity: <span className="font-medium">{contract.quantity}</span></p>
                    <p>Last Updated: <span className="font-medium">{new Date(contract.lastUpdated).toLocaleDateString()}</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium 
                    ${contract.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                    contract.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                    'bg-yellow-100 text-yellow-700'} border animate-fade-in`}>
                    {contract.status}
                  </span>
                  <div className="mt-2">
                    <div className="text-xs text-gray-500">Completion Progress</div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${contract.completionProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {contract.status !== 'Completed' && (
                <div className="flex space-x-3 mb-4">
                  <button
                    onClick={() => handleMarkAsCompleted(contract.id)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg 
                              hover:from-green-700 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    ✓ Mark as Completed
                  </button>
                  <button
                    onClick={() => handleInitiateDispute(contract.id, 'Quality issues')}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg 
                              hover:from-red-700 hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    ⚠ Initiate Dispute
                  </button>
                </div>
              )}

              {/* Dispute Section */}
              {contract.dispute && (
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg animate-fade-in">
                  <h4 className="text-md font-medium text-red-800 mb-2 flex items-center gap-2">
                    <span className="text-red-500">⚠</span> 
                    Active Dispute: {contract.dispute.reason}
                  </h4>
                  <p className="text-sm text-red-600">Status: {contract.dispute.status}</p>
                  <p className="text-sm text-red-600">Initiated: {new Date(contract.dispute.dateInitiated).toLocaleDateString()}</p>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Supporting Evidence
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleUploadEvidence(contract.id, [...e.target.files])}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 
                                focus:border-transparent hover:border-red-400 transition-colors duration-200"
                    />
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <span>📎</span> Uploaded Evidence
                    </h4>
                    <ul className="space-y-2">
                      {contract.evidence.map((file, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="text-gray-400">•</span>
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractCompletion;