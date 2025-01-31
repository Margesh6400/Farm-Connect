import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Package,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const ActivePurchases = () => {
  // Sample order data - in a real app, this would come from an API
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-28',
      status: 'in-transit',
      estimatedDelivery: '2024-02-02',
      totalAmount: 5400,
      items: [
        {
          id: 1,
          name: 'Organic Tomatoes',
          quantity: 30,
          unit: 'ton',
          price: 180,
          farmer: 'Green Farms Co.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'
        }
      ],
      shipmentUpdates: [
        { date: '2024-01-28', status: 'Order Confirmed', completed: true },
        { date: '2024-01-29', status: 'Processing', completed: true },
        { date: '2024-01-30', status: 'In Transit', completed: true },
        { date: '2024-02-02', status: 'Delivery', completed: false }
      ],
      deliveryAddress: '123 Warehouse St, Business District',
      contactPerson: 'John Smith',
      phone: '+1 234-567-8900',
      email: 'john@example.com'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-29',
      status: 'processing',
      estimatedDelivery: '2024-02-03',
      totalAmount: 4500,
      items: [
        {
          id: 2,
          name: 'Premium Bananas',
          quantity: 50,
          unit: 'ton',
          price: 90,
          farmer: 'Sunshine Fruits',
          image: 'https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=2048x2048&w=is&k=20&c=oz3Xd4SKjKrMrc2JX0pqworegOshV9YMl2GUbpVI338='
        }
      ],
      shipmentUpdates: [
        { date: '2024-01-29', status: 'Order Confirmed', completed: true },
        { date: '2024-01-30', status: 'Processing', completed: true },
        { date: '2024-02-01', status: 'In Transit', completed: false },
        { date: '2024-02-03', status: 'Delivery', completed: false }
      ],
      deliveryAddress: '456 Storage Ave, Industrial Park',
      contactPerson: 'Sarah Johnson',
      phone: '+1 234-567-8901',
      email: 'sarah@example.com'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-30',
      status: 'in-transit',
      estimatedDelivery: '2024-02-05',
      totalAmount: 3900,
      items: [
        {
          id: 3,
          name: 'Basmati Rice',
          quantity: 13,
          unit: 'ton',
          price: 300,
          farmer: 'Golden Grains Ltd',
          image: 'https://www.gourmetfoodworld.com/images/Product/medium/basmati-rice-1S-1052.jpg'
        }
      ],
      shipmentUpdates: [
        { date: '2024-01-30', status: 'Order Confirmed', completed: true },
        { date: '2024-01-31', status: 'Processing', completed: true },
        { date: '2024-02-01', status: 'In Transit', completed: true },
        { date: '2024-02-05', status: 'Delivery', completed: false }
      ],
      deliveryAddress: '789 Distribution Rd, Logistics Hub',
      contactPerson: 'Michael Brown',
      phone: '+1 234-567-8902',
      email: 'michael@example.com'
    },
    {
      id: 'ORD-2024-004',
      date: '2024-02-01',
      status: 'processing',
      estimatedDelivery: '2024-02-06',
      totalAmount: 3000,
      items: [
        {
          id: 4,
          name: 'Organic Carrots',
          quantity: 20,
          unit: 'ton',
          price: 150,
          farmer: 'Healthy Harvest',
          image: 'https://bachelorrecipe.com/wp-content/uploads/2017/11/Vegan-Carrot-and-Potato-Soup5.jpg'
        }
      ],
      shipmentUpdates: [
        { date: '2024-02-01', status: 'Order Confirmed', completed: true },
        { date: '2024-02-02', status: 'Processing', completed: true },
        { date: '2024-02-04', status: 'In Transit', completed: false },
        { date: '2024-02-06', status: 'Delivery', completed: false }
      ],
      deliveryAddress: '1010 Market St, Commerce City',
      contactPerson: 'Emily Davis',
      phone: '+1 234-567-8903',
      email: 'emily@example.com'
    }
  ]);

  const [expandedOrder, setExpandedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-transit':
        return 'text-blue-600';
      case 'processing':
        return 'text-yellow-600';
      case 'delivered':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-transit':
        return <Truck className="w-5 h-5" />;
      case 'processing':
        return <Package className="w-5 h-5" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Active Purchases</h1>
          <p className="text-gray-600">Track and manage your current orders</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Order Header */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h2 className="text-lg font-bold">{order.id}</h2>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Ordered on {new Date(order.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Total Amount</div>
                      <div className="text-lg font-bold text-green-600">
                        ${order.totalAmount.toLocaleString()}
                      </div>
                    </div>
                    <div className={`flex items-center space-x-2 ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="font-medium capitalize">{order.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6 border-b">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.farmer}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.quantity} {item.unit}s</div>
                      <div className="text-sm text-gray-500">${item.price} per {item.unit}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipment Progress */}
              <div className="p-6 border-b">
                <h3 className="font-medium mb-4">Shipment Progress</h3>
                <div className="flex justify-between">
                  {order.shipmentUpdates.map((update, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center ${
                        index < order.shipmentUpdates.length - 1 ? 'flex-1' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          update.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {update.completed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-center mt-2">
                        <div className="text-sm font-medium">{update.status}</div>
                        <div className="text-xs text-gray-500">
                          {new Date(update.date).toLocaleDateString()}
                        </div>
                      </div>
                      {index < order.shipmentUpdates.length - 1 && (
                        <div
                          className={`h-0.5 w-full mt-4 ${
                            update.completed ? 'bg-green-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details */}
              <div className="p-6">
                <h3 className="font-medium mb-4">Delivery Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Delivery Address</span>
                    </div>
                    <p>{order.deliveryAddress}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{order.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{order.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {orders.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No active purchases found</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivePurchases;