import React, { useState } from 'react';

const TrackContracts = () => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      buyer: 'Buyer A',
      cropType: 'Wheat',
      status: 'In Progress',
      deliveryDate: '2023-12-01',
      progress: 'Harvested',
      quantity: '5000',
      price: '2.5',
      lastUpdate: '2023-11-20'
    },
    {
      id: 2,
      buyer: 'Buyer B',
      cropType: 'Corn',
      status: 'Pending',
      deliveryDate: '2023-11-15',
      progress: 'Not Started',
      quantity: '3000',
      price: '3.2',
      lastUpdate: '2023-11-10'
    },
  ]);

  const [filter, setFilter] = useState({
    status: '',
    buyer: '',
    cropType: '',
    deliveryDate: ''
  });

  const [sortBy, setSortBy] = useState('deliveryDate');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getProgressPercentage = (progress) => {
    const stages = ['Not Started', 'Harvested', 'Transported', 'Delivered'];
    const index = stages.indexOf(progress);
    return ((index + 1) / stages.length) * 100;
  };

  const filteredContracts = contracts
    .filter(contract => {
      return (
        (filter.status === '' || contract.status === filter.status) &&
        (filter.buyer === '' || contract.buyer.toLowerCase().includes(filter.buyer.toLowerCase())) &&
        (filter.cropType === '' || contract.cropType.toLowerCase().includes(filter.cropType.toLowerCase())) &&
        (filter.deliveryDate === '' || contract.deliveryDate === filter.deliveryDate)
      );
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }
      return a[sortBy] < b[sortBy] ? 1 : -1;
    });

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700 border-green-200',
      'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
      'Pending': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Canceled': 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-green-800">Track Active Contracts</h2>
        <p className="mt-2 text-lg text-green-600">Monitor and manage your agricultural contracts</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter Contracts</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={filter.status}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Buyer</label>
            <input
              type="text"
              name="buyer"
              value={filter.buyer}
              onChange={handleFilterChange}
              placeholder="Search by buyer name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
            <input
              type="text"
              name="cropType"
              value={filter.cropType}
              onChange={handleFilterChange}
              placeholder="Search by crop type"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              value={filter.deliveryDate}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredContracts.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <p className="text-gray-500">No contracts found matching your filters</p>
          </div>
        ) : (
          filteredContracts.map(contract => (
            <div key={contract.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-semibold text-green-900">{contract.cropType}</h3>
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusColor(contract.status)} border`}>
                        {contract.status}
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Buyer</p>
                        <p className="font-medium">{contract.buyer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Delivery Date</p>
                        <p className="font-medium">{new Date(contract.deliveryDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="font-medium">{contract.quantity} kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Price per kg</p>
                        <p className="font-medium">${contract.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Progress Tracking</h4>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                      <div 
                        style={{ width: `${getProgressPercentage(contract.progress)}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span className={contract.progress === 'Not Started' ? 'font-bold text-green-600' : ''}>Not Started</span>
                      <span className={contract.progress === 'Harvested' ? 'font-bold text-green-600' : ''}>Harvested</span>
                      <span className={contract.progress === 'Transported' ? 'font-bold text-green-600' : ''}>Transported</span>
                      <span className={contract.progress === 'Delivered' ? 'font-bold text-green-600' : ''}>Delivered</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date(contract.lastUpdate).toLocaleDateString()}
                  </p>
                  <button className="px-4 py-2 text-sm text-green-600 hover:text-green-700 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrackContracts;