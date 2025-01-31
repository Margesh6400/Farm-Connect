import React from 'react';

const Payments = () => {
  const payments = [
    {
      id: 'PAY-2024-001',
      crop: 'Wheat',
      amount: '₹100,000',
      status: 'Pending',
      farmer: 'Green Farms Co.',
    },
    {
      id: 'PAY-2024-002',
      crop: 'Rice',
      amount: '₹90,000',
      status: 'Completed',
      farmer: 'Golden Grains Ltd',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payments</h2>
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{payment.crop}</h3>
            <p>Amount: {payment.amount}</p>
            <p>Status: {payment.status}</p>
            <p>Farmer: {payment.farmer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
