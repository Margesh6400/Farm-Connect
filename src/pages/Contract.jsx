export default function Contract() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-green-600 p-6">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Contract Details
          </h2>
          <p className="text-green-100 mt-2">Review and manage your farming contracts</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Active Contracts</h3>
            <p className="text-gray-600">List of your active farming contracts</p>
            {/* Add contract details here */}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Past Contracts</h3>
            <p className="text-gray-600">List of your past farming contracts</p>
            {/* Add contract details here */}
          </div>
        </div>
      </div>
    </div>
  )
}
