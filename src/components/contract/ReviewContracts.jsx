import React from 'react';

const ReviewContracts = () => {
  const contracts = [
    {
      id: 'CON-2024-001',
      crop: 'Wheat',
      quantity: '500 tons',
      price: '₹200/ton',
      status: 'Pending Review',
      farmer: 'Green Farms Co.',
    },
    {
      id: 'CON-2024-002',
      crop: 'Rice',
      quantity: '300 tons',
      price: '₹300/ton',
      status: 'Pending Review',
      farmer: 'Golden Grains Ltd',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Review Contracts</h2>
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

export default ReviewContracts;
