import React, { useState } from 'react';
import { FilePlus, ClipboardList, DollarSign, CheckCircle, MessageSquare } from 'lucide-react';
import CreateContract from '../components/contract/CreateContract';
import TrackContracts from '../components/contract/TrackContracts';
import Negotiation from '../components/contract/Negotiation';
import PaymentManagement from '../components/contract/PaymentManagement';
import ContractCompletion from '../components/contract/ContractCompletion';

const Contract = () => {
  const [activeSection, setActiveSection] = useState('createContract');

  const menuItems = [
    { id: 'createContract', label: 'Create Contract', icon: FilePlus },
    { id: 'trackContracts', label: 'Track Contracts', icon: ClipboardList },
    { id: 'negotiation', label: 'Negotiation', icon: MessageSquare },
    { id: 'paymentManagement', label: 'Payment Management', icon: DollarSign },
    { id: 'contractCompletion', label: 'Contract Completion', icon: CheckCircle },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'createContract':
        return <CreateContract />;
      case 'trackContracts':
        return <TrackContracts />;
      case 'negotiation':
        return <Negotiation />;
      case 'paymentManagement':
        return <PaymentManagement />;
      case 'contractCompletion':
        return <ContractCompletion />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex ">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-green-800 to-green-900 p-6 text-white shadow-xl mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-green-700 p-4 rounded-lg shadow-lg text-center">
            Contract Management
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
      <div className="flex-1 p-8 mt-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
          <div className="mt-6">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
