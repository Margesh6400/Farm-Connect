import React from 'react';

const ActiveContracts = () => {
  const contracts = [
    {
      id: 'CON-2024-003',
      crop: 'Tomatoes',
      quantity: '200 tons',
      price: '$150/ton',
      status: 'Active',
      farmer: 'Healthy Harvest',
    },
    {
      id: 'CON-2024-004',
      crop: 'Bananas',
      quantity: '400 tons',
      price: '$100/ton',
      status: 'Active',
      farmer: 'Sunshine Fruits',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Active Contracts</h2>
      <div className="space-y-4">
        {contracts.map((contract) => (
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

export default ActiveContracts;
