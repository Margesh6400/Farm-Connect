import React, { useState } from 'react';
import { Leaf, BarChart3, ShoppingCart, MessageSquare } from 'lucide-react';
import MarketDemand from '../components/MarketDemand';
import AddCropDetails from '../components/AddCropDetails';
import Negotiation from '../components/Negotiation';
import Analytics from '../components/Analytics';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
  });

  const [activeSection, setActiveSection] = useState('marketDemand');

  const menuItems = [
    { id: 'marketDemand', label: 'Market Demand', icon: ShoppingCart },
    { id: 'addCropDetails', label: 'Add Crop Details', icon: Leaf },
    { id: 'negotiation', label: 'Negotiation', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'marketDemand':
        return <MarketDemand />;
      case 'addCropDetails':
        return <AddCropDetails />;
      case 'negotiation':
        return <Negotiation />;
      case 'analytics':
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex pt-8">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-green-800 to-green-900 p-6 text-white shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-green-700 p-4 rounded-lg shadow-lg text-center">
            Farmer's Dashboard
          </h2>
        </div>
        
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center w-full p-4 rounded-lg
                  transition-all duration-200 ease-in-out
                  ${
                    activeSection === item.id
                      ? 'bg-green-600 shadow-lg transform scale-105'
                      : 'hover:bg-green-700 hover:shadow-md'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-green-100">
            <div>
              <h1 className="text-4xl font-bold text-green-900">
                Welcome, {user.name}
              </h1>
              <p className="text-green-600 mt-2">
                Manage your agricultural business efficiently
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <span className="text-green-800 font-medium">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          <div className="mt-6">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;