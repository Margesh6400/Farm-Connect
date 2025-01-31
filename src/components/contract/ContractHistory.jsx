import React from 'react';

const ContractHistory = () => {
  const history = [
    {
      id: 'HIS-2024-001',
      crop: 'Spinach',
      quantity: '200 tons',
      price: '₹80/ton',
      status: 'Completed',
      farmer: 'Healthy Greens',
    },
    {
      id: 'HIS-2024-002',
      crop: 'Potatoes',
      quantity: '300 tons',
      price: '₹70/ton',
      status: 'Completed',
      farmer: 'Root Farms',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contract History</h2>
      <div className="space-y-4">
        {history.map((contract) => (
          <div key={contract.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{contract.crop}</h3>
            <p>Quantity: {contract.quantity}</p>
            <p>Price: {contract.price}</p>
            <p>Status: {contract.status}</p>
            <p>Farmer: {contract.farmer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractHistory;
