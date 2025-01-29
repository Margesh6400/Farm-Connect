import React, { useState } from 'react';

const UserRegistration = () => {
  const [userType, setUserType] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Farmer Fields
    fullName: '',
    gender: '',
    dob: '',
    contactNumber: '',
    email: '',
    address: '',
    pincode: '',
    // Land Info
    landArea: '',
    landOwnership: '',
    cropTypesGrown: '',
    irrigationSource: '',
    waterSupplyConsistency: '',
    wellsCount: '',
    soilType: '',
    // Buyer Fields
    buyerName: '',
    buyerMobile: '',
    buyerEmail: '',
    buyerAddress: '',
    // Crop Pre-order
    cropName: '',
    variety: '',
    quantityRequired: '',
    preferredDeliveryDate: '',
    frequencyRequirement: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderUserTypeSelection = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Choose Account Type</h3>
      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={() => setUserType('farmer')}
          className={`p-8 rounded-xl border-2 transition-all duration-200 flex flex-col items-center space-y-4 
            ${userType === 'farmer' 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-200 hover:border-green-300'}`}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🌾</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">Register as Farmer</span>
          <p className="text-sm text-gray-600 text-center">Sell your crops and manage your farm</p>
        </button>

        <button
          onClick={() => setUserType('buyer')}
          className={`p-8 rounded-xl border-2 transition-all duration-200 flex flex-col items-center space-y-4
            ${userType === 'buyer' 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-200 hover:border-green-300'}`}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🛒</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">Register as Buyer</span>
          <p className="text-sm text-gray-600 text-center">Purchase crops directly from farmers</p>
        </button>
      </div>
    </div>
  );

  const renderFarmerPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h3>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 col-span-2"
          rows="3"
        />
      </div>
    </div>
  );

  const renderFarmerLandInfo = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Land Information</h3>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          name="landArea"
          placeholder="Land Area (in acres)"
          value={formData.landArea}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <select
          name="landOwnership"
          value={formData.landOwnership}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Land Ownership Type</option>
          <option value="owned">Owned</option>
          <option value="leased">Leased</option>
          <option value="contracted">Contracted</option>
        </select>
        <input
          type="text"
          name="cropTypesGrown"
          placeholder="Crop Types Grown"
          value={formData.cropTypesGrown}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <select
          name="irrigationSource"
          value={formData.irrigationSource}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Irrigation Source</option>
          <option value="well">Well</option>
          <option value="canal">Canal</option>
          <option value="rainwater">Rainwater</option>
          <option value="other">Other</option>
        </select>
        <select
          name="waterSupplyConsistency"
          value={formData.waterSupplyConsistency}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Water Supply Consistency</option>
          <option value="consistent">Consistent</option>
          <option value="seasonal">Seasonal</option>
          <option value="irregular">Irregular</option>
        </select>
        <input
          type="number"
          name="wellsCount"
          placeholder="Number of Wells/Borewells"
          value={formData.wellsCount}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <select
          name="soilType"
          value={formData.soilType}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Soil Type</option>
          <option value="clay">Clay</option>
          <option value="sandy">Sandy</option>
          <option value="loamy">Loamy</option>
          <option value="silt">Silt</option>
        </select>
      </div>
    </div>
  );

  const renderBuyerPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h3>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          name="buyerName"
          placeholder="Full Name"
          value={formData.buyerName}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="tel"
          name="buyerMobile"
          placeholder="Mobile Number"
          value={formData.buyerMobile}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="email"
          name="buyerEmail"
          placeholder="Email Address"
          value={formData.buyerEmail}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <textarea
          name="buyerAddress"
          placeholder="Address"
          value={formData.buyerAddress}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 col-span-2"
          rows="3"
        />
      </div>
    </div>
  );

  const renderBuyerCropPreOrder = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Crop Pre-order Details</h3>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          name="cropName"
          placeholder="Crop Name"
          value={formData.cropName}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="text"
          name="variety"
          placeholder="Variety"
          value={formData.variety}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="number"
          name="quantityRequired"
          placeholder="Quantity Required (in kg)"
          value={formData.quantityRequired}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <input
          type="date"
          name="preferredDeliveryDate"
          placeholder="Preferred Delivery Date"
          value={formData.preferredDeliveryDate}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        />
        <select
          name="frequencyRequirement"
          value={formData.frequencyRequirement}
          onChange={handleChange}
          className="w-full p-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0"
        >
          <option value="">Frequency of Requirement</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    if (!userType) return renderUserTypeSelection();

    if (userType === 'farmer') {
      switch (currentStep) {
        case 0:
          return renderFarmerPersonalInfo();
        case 1:
          return renderFarmerLandInfo();
        default:
          return null;
      }
    } else {
      switch (currentStep) {
        case 0:
          return renderBuyerPersonalInfo();
        case 1:
          return renderBuyerCropPreOrder();
        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold">
            <span className="text-green-600">Farm</span>Connect
          </h1>
          <a href="/login" className="text-green-600 text-sm hover:text-green-700 font-medium">
            Already have an account? Sign in
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {renderCurrentStep()}

          {userType && (
            <div className="flex justify-between items-center">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200"
                >
                  Back
                </button>
              )}
              {currentStep < 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  Next
                </button>
              )}
              {currentStep === 1 && (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  Submit
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;