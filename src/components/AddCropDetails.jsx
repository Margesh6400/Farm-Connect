import { useState } from 'react';

export default function AddCropDetails() {
  const [cropDetails, setCropDetails] = useState({
    cropName: '',
    variety: '',
    quantity: '',
    expectedPrice: '',
    harvestDate: '',
    image: null,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropDetails({ ...cropDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setCropDetails({ ...cropDetails, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cropDetails);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-green-600 p-6">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Add Crop Details
          </h2>
          <p className="text-green-100 mt-2">Fill in the information about your crop</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 block">Crop Name</label>
              <input
                type="text"
                name="cropName"
                value={cropDetails.cropName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 block">Variety</label>
              <input
                type="text"
                name="variety"
                value={cropDetails.variety}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 block">Quantity (kg/tons)</label>
              <input
                type="number"
                name="quantity"
                value={cropDetails.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 block">Expected Price</label>
              <input
                type="number"
                name="expectedPrice"
                value={cropDetails.expectedPrice}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 block">Harvest Date</label>
            <input
              type="date"
              name="harvestDate"
              value={cropDetails.harvestDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 block">Upload Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-green-500 transition duration-200">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600">
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
          

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 block">Additional Notes</label>
            <textarea
              name="notes"
              value={cropDetails.notes}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200 outline-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition duration-200 text-lg font-semibold"
            >
              Submit Crop Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}