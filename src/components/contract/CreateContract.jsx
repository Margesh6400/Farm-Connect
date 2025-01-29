import React, { useState } from 'react';

const CreateContract = () => {
  const [formData, setFormData] = useState({
    buyer: '',
    cropType: '',
    quantity: '',
    price: '',
    deliveryDate: '',
    cropImages: [],
    qualityDetails: ''
  });

  const [activeTooltip, setActiveTooltip] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cropImages: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contract Data:', formData);
  };

  const showTooltip = (field) => setActiveTooltip(field);
  const hideTooltip = () => setActiveTooltip('');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 to-white rounded-lg shadow-xl">
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-green-800">Create a New Contract</h2>
        <p className="mt-2 text-lg text-green-600">Define your agricultural contract terms below</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-700">
          💡 Tip: Be specific about quality requirements and delivery terms to avoid future disputes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Buyer Information
              <span className="text-green-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="buyer"
              value={formData.buyer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter buyer's full name"
              required
              onMouseEnter={() => showTooltip('buyer')}
              onMouseLeave={hideTooltip}
            />
            {activeTooltip === 'buyer' && (
              <div className="absolute z-10 bg-gray-800 text-white text-xs rounded p-2 mt-1">
                Enter the legal name of the buying entity
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Crop Type
              <span className="text-green-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="e.g., Wheat, Rice, Corn"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Quantity (in kg)
              <span className="text-green-500 ml-1">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter quantity in kilograms"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price per kg
              <span className="text-green-500 ml-1">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Delivery Date
            <span className="text-green-500 ml-1">*</span>
          </label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Crop Images
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <input
                  type="file"
                  name="cropImages"
                  multiple
                  onChange={handleFileChange}
                  className="sr-only"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>Upload files</span>
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Quality Details
          </label>
          <textarea
            name="qualityDetails"
            value={formData.qualityDetails}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Specify quality standards, grade requirements, and any specific conditions..."
          />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Review Contract
          </button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">Contract Guidelines:</h3>
        <ul className="text-sm text-blue-600 space-y-1">
          <li>• All required fields are marked with an asterisk (*)</li>
          <li>• Upload clear, high-resolution images of the crop samples</li>
          <li>• Specify quality parameters in detail to avoid disputes</li>
          <li>• Review all terms carefully before submitting</li>
        </ul>
      </div>
    </div>
  );
};

export default CreateContract;