import { useState } from 'react'
import MarketDemand from '../components/MarketDemand'
import AddCropDetails from '../components/AddCropDetails'
import Negotiation from '../components/Negotiation'
import Analytics from '../components/Analytics'

export default function Dashboard() {
  const [user, setUser] = useState({
    name: 'John Doe',
  })

  const [activeSection, setActiveSection] = useState('marketDemand')

  const renderSection = () => {
    switch (activeSection) {
      case 'marketDemand':
        return <MarketDemand />
      case 'addCropDetails':
        return <AddCropDetails />
      case 'negotiation':
        return <Negotiation />
      case 'analytics':
        return <Analytics />
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="w-64 bg-green-900 p-6 text-white">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveSection('marketDemand')}
            className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === 'marketDemand' ? 'bg-green-700' : 'hover:bg-green-800'}`}
          >
            Market Demand
          </button>
          <button
            onClick={() => setActiveSection('addCropDetails')}
            className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === 'addCropDetails' ? 'bg-green-700' : 'hover:bg-green-800'}`}
          >
            Add Crop Details
          </button>
          <button
            onClick={() => setActiveSection('negotiation')}
            className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === 'negotiation' ? 'bg-green-700' : 'hover:bg-green-800'}`}
          >
            Negotiation
          </button>
          <button
            onClick={() => setActiveSection('analytics')}
            className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === 'analytics' ? 'bg-green-700' : 'hover:bg-green-800'}`}
          >
            Analytics
          </button>
        </nav>
      </div>
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-green-900">Welcome, {user.name}</h1>
          <div className="mt-8">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  )
}
