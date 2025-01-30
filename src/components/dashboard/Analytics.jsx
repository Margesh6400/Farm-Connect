import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, TrendingUp, Activity, BarChart2, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const CustomCard = ({ children, className = '' }) => (
  <motion.div
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.3 }}
    className={`bg-white rounded-lg p-6 shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({ title, value, trend, icon: Icon, detail }) => (
  <CustomCard className="relative overflow-hidden hover:shadow-lg transition-shadow">
    <div className="absolute top-2 right-2 bg-green-50 p-2 rounded-full">
      <Icon className="w-5 h-5 text-green-600" />
    </div>
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
      <div className="mt-2">
        <span className="text-sm font-medium text-green-600">{trend}</span>
        <p className="mt-1 text-xs text-gray-500">{detail}</p>
      </div>
    </div>
  </CustomCard>
);

const TabButton = ({ value, active, onClick, children, icon: Icon }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(value)}
    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium rounded-lg transition-all
      ${active 
        ? 'bg-green-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-green-600'}`}
  >
    <Icon className="w-4 h-4" />
    <span>{children}</span>
  </motion.button>
);

const ChartSection = ({ title, children }) => (
  <CustomCard>
    <h3 className="text-xl font-semibold mb-6 text-gray-800">{title}</h3>
    {children}
  </CustomCard>
);

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('income');
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');

  const yearlyData = [
    { month: 'Jan', earnings: 4000, expenses: 2400, demand: 85, workers: 45 },
    { month: 'Feb', earnings: 3000, expenses: 1398, demand: 78, workers: 42 },
    { month: 'Mar', earnings: 2000, expenses: 9800, demand: 92, workers: 50 },
    { month: 'Apr', earnings: 2780, expenses: 3908, demand: 88, workers: 48 },
    { month: 'May', earnings: 1890, expenses: 4800, demand: 95, workers: 52 },
    { month: 'Jun', earnings: 2390, expenses: 3800, demand: 89, workers: 47 }
  ];

  const cropData = [
    { name: 'Wheat', value: 4000, growth: '+12%', efficiency: 89 },
    { name: 'Corn', value: 3000, growth: '+8%', efficiency: 92 },
    { name: 'Soybeans', value: 2000, growth: '+15%', efficiency: 87 },
    { name: 'Cotton', value: 2780, growth: '+5%', efficiency: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-green-900">Farm Analytics</h1>
          <p className="mt-2 text-gray-600">Real-time performance metrics</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select 
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Live Updates
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          trend="+20.1% from last month"
          icon={ArrowUpRight}
          detail="Across all crops"
        />
        <StatCard
          title="Crop Yield"
          value="892 Tons"
          trend="+15.3% efficiency"
          icon={TrendingUp}
          detail="Total harvest"
        />
        <StatCard
          title="Active Workers"
          value="47"
          trend="+5 this month"
          icon={Users}
          detail="Full-time equivalent"
        />
      </div>

      <div className="flex space-x-4 mb-6">
        <TabButton 
          value="income" 
          active={activeTab === 'income'} 
          onClick={setActiveTab}
          icon={Activity}
        >
          Financial Analysis
        </TabButton>
        <TabButton 
          value="crops" 
          active={activeTab === 'crops'} 
          onClick={setActiveTab}
          icon={BarChart2}
        >
          Crop Performance
        </TabButton>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'income' && (
            <div className="space-y-6">
              <ChartSection title="Revenue vs Expenses">
                <div className="h-[400px]">
                  <ResponsiveContainer>
                    <AreaChart data={yearlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="earnings" 
                        stroke="#059669" 
                        fill="#059669" 
                        fillOpacity={0.2}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="expenses" 
                        stroke="#dc2626" 
                        fill="#dc2626" 
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </ChartSection>

              <div className="grid grid-cols-2 gap-6">
                <ChartSection title="Worker Distribution">
                  <div className="h-[300px]">
                    <ResponsiveContainer>
                      <BarChart data={yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="workers" fill="#059669" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartSection>

                <ChartSection title="Market Demand">
                  <div className="h-[300px]">
                    <ResponsiveContainer>
                      <LineChart data={yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="demand" 
                          stroke="#059669" 
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </ChartSection>
              </div>
            </div>
          )}

          {activeTab === 'crops' && (
            <div className="space-y-6">
              <ChartSection title="Crop Performance">
                <div className="h-[400px]">
                  <ResponsiveContainer>
                    <BarChart data={cropData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#059669" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="efficiency" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </ChartSection>

              <div className="grid grid-cols-2 gap-6">
                {cropData.map((crop, index) => (
                  <motion.div
                    key={crop.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-md"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{crop.name}</h3>
                      <span className="text-green-600 font-medium">{crop.growth}</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Efficiency</span>
                          <span className="text-sm font-medium">{crop.efficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${crop.efficiency}%` }}
                            transition={{ duration: 1 }}
                            className="bg-green-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Value</span>
                          <span className="text-sm font-medium">${crop.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(crop.value / 4000) * 100}%` }}
                            transition={{ duration: 1 }}
                            className="bg-blue-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}