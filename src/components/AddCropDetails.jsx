import { useState } from 'react'

export default function AddCropDetails() {
  const [cropDetails, setCropDetails] = useState({
    cropName: '',
    variety: '',
    quantity: '',
    expectedPrice: '',
    harvestDate: '',
    image: null,
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCropDetails({ ...cropDetails, [name]: value })
  }

  const handleImageChange = (e) => {
    setCropDetails({ ...cropDetails, image: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(cropDetails)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-900 mb-6">Add Crop Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Crop Name</label>
          <input
            type="text"
            name="cropName"
            value={cropDetails.cropName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Variety (if applicable)</label>
          <input
            type="text"
            name="variety"
            value={cropDetails.variety}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity Available (in kg/tons)</label>
          <input
            type="number"
            name="quantity"
            value={cropDetails.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Price (per unit)</label>
          <input
            type="number"
            name="expectedPrice"
            value={cropDetails.expectedPrice}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Harvest Date</label>
          <input
            type="date"
            name="harvestDate"
            value={cropDetails.harvestDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image Upload (optional)</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea
            name="notes"
            value={cropDetails.notes}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
