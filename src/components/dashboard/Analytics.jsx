import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, TrendingUp, PieChart, DollarSign } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
    {children}
  </div>
);

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('income');

  // Sample data - replace with actual data
  const yearlyData = [
    { month: 'Jan', earnings: 4000, expenses: 2400 },
    { month: 'Feb', earnings: 3000, expenses: 1398 },
    { month: 'Mar', earnings: 2000, expenses: 9800 },
    { month: 'Apr', earnings: 2780, expenses: 3908 },
    { month: 'May', earnings: 1890, expenses: 4800 },
    { month: 'Jun', earnings: 2390, expenses: 3800 },
  ];

  const cropData = [
    { name: 'Wheat', value: 4000 },
    { name: 'Corn', value: 3000 },
    { name: 'Soybeans', value: 2000 },
    { name: 'Cotton', value: 2780 },
  ];

  const TabButton = ({ value, active, onClick, children }) => (
    <button
      onClick={() => onClick(value)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
        ${active ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-green-900">Analytics & Reports</h2>
        <span className="px-4 py-2 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
          Updated Daily
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
            <DollarSign className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-green-600">+20.1% from last month</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Top Performing Crop</h3>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">Wheat</div>
          <p className="text-xs text-green-600">32% of total revenue</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Profit Margin</h3>
            <ArrowUpRight className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">24.3%</div>
          <p className="text-xs text-green-600">+2.4% from last year</p>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-2 border-b">
          <TabButton value="income" active={activeTab === 'income'} onClick={setActiveTab}>
            Income Trends
          </TabButton>
          <TabButton value="crops" active={activeTab === 'crops'} onClick={setActiveTab}>
            Crop Analysis
          </TabButton>
          <TabButton value="expenses" active={activeTab === 'expenses'} onClick={setActiveTab}>
            Expenses
          </TabButton>
        </div>

        <div className="mt-4">
          {activeTab === 'income' && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">Yearly Income Trends</h3>
              <div className="pt-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="earnings" stroke="#059669" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6">
                <h4 className="text-md font-medium text-green-800">Breakdown by Crop Type:</h4>
                <ul className="list-disc list-inside text-green-700">
                  <li className="flex justify-between">
                    <span>Wheat:</span>
                    <span>$15,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Corn:</span>
                    <span>$10,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Soybeans:</span>
                    <span>$8,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cotton:</span>
                    <span>$12,231.89</span>
                  </li>
                </ul>
              </div>
            </Card>
          )}

          {activeTab === 'crops' && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">Crop Performance</h3>
              <div className="pt-6">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cropData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#059669" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6">
                <h4 className="text-md font-medium text-green-800">Market Insights:</h4>
                <ul className="list-disc list-inside text-green-700">
                  <li>Seasonal demand analysis</li>
                  <li>Best selling crops in different regions</li>
                </ul>
              </div>
            </Card>
          )}

          {activeTab === 'expenses' && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">Revenue vs Expenses</h3>
              <div className="pt-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="earnings" stroke="#059669" strokeWidth={2} />
                    <Line type="monotone" dataKey="expenses" stroke="#dc2626" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6">
                <h4 className="text-md font-medium text-green-800">Expense Tracking:</h4>
                <ul className="list-disc list-inside text-green-700">
                  <li>Input costs vs. revenue comparison</li>
                  <li>Labor costs</li>
                  <li>Equipment maintenance</li>
                  <li>Other operational expenses</li>
                </ul>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}