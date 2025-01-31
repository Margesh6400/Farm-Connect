import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Video, Send, Star, Image as ImageIcon, User, MoreHorizontal } from 'lucide-react';
const FarmerChat = () => {
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const farmers = [
    {
      id: 1,
      name: 'John Smith',
      farm: 'Green Valley Organics',
      avatar: 'https://as1.ftcdn.net/v2/jpg/04/32/15/18/1000_F_432151892_oQ3YQDo2LYZPILlEMnlo55PjjgiUwnQb.jpg',
      rating: 4.8,
      status: 'online',
      location: 'California',
      products: ['Tomatoes', 'Lettuce', 'Carrots'],
      lastMessage: 'When would you like the delivery?'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      farm: 'Sunshine Farms',
      avatar: 'https://as2.ftcdn.net/v2/jpg/06/30/06/81/1000_F_630068155_RnZI6mC91wz7gUYFVmhzwpl4O6x00Cbh.jpg',
      rating: 4.9,
      status: 'away',
      location: 'Texas',
      products: ['Corn', 'Wheat', 'Soybeans'],
      lastMessage: 'Yes, the produce is organic certified.'
    },
    {
      id: 3,
      name: 'David Wilson',
      farm: 'Fresh Fields Co.',
      avatar: 'https://as1.ftcdn.net/v2/jpg/03/70/47/26/1000_F_370472691_KocGklwOPAyLcutco4zJp9g1004Puxy4.jpg',
      rating: 4.7,
      status: 'offline',
      location: 'Iowa',
      products: ['Apples', 'Pears', 'Berries'],
      lastMessage: 'The harvest will be ready next week.'
    }
  ];
  const sendMessage = (farmerId) => {
    if (!message.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => ({
      ...prev,
      [farmerId]: [...(prev[farmerId] || []), newMessage]
    }));
    setMessage('');
    // Simulate farmer response with fixed quotation
    setTimeout(() => {
      const farmerMessage = {
        id: Date.now() + 1,
        text: "Thank you for your message. I'll get back to you shortly.",  // Fixed this line
        sender: 'farmer',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => ({
        ...prev,
        [farmerId]: [...(prev[farmerId] || []), farmerMessage]
      }));
    }, 1000);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  const chatVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex h-[80vh]">
          {/* Farmers List */}
          <motion.div 
            className="w-1/3 border-r bg-gray-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="p-4 border-b bg-white">
              <h2 className="text-xl font-bold">Farmers Chat</h2>
            </div>
            
            <div className="overflow-y-auto h-full">
              {farmers.map((farmer) => (
                <motion.div
                  key={farmer.id}
                  variants={itemVariants}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                  className={`p-4 border-b cursor-pointer ${selectedFarmer?.id === farmer.id ? 'bg-green-50' : ''}`}
                  onClick={() => setSelectedFarmer(farmer)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={farmer.avatar}
                        alt={farmer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        farmer.status === 'online' ? 'bg-green-500' :
                        farmer.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{farmer.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{farmer.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{farmer.farm}</p>
                      <p className="text-sm text-gray-500 mt-1 truncate">{farmer.lastMessage}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              {selectedFarmer ? (
                <motion.div 
                  key={selectedFarmer.id}
                  className="flex-1 flex flex-col"
                  variants={chatVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Chat Header */}
                  <div className="p-4 border-b flex justify-between items-center bg-white">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedFarmer.avatar}
                        alt={selectedFarmer.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{selectedFarmer.name}</h3>
                        <p className="text-sm text-gray-600">{selectedFarmer.farm}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <Phone className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <Video className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <AnimatePresence>
                      {(messages[selectedFarmer.id] || []).map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${
                            msg.sender === 'user' 
                              ? 'bg-green-500 text-white rounded-l-xl rounded-tr-xl' 
                              : 'bg-gray-100 rounded-r-xl rounded-tl-xl'
                          } p-3`}>
                            <p>{msg.text}</p>
                            <p className={`text-xs ${
                              msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                            } mt-1`}>{msg.timestamp}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  {/* Message Input */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <ImageIcon className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            sendMessage(selectedFarmer.id);
                          }
                        }}
                      />
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-green-500 text-white rounded-full"
                        onClick={() => sendMessage(selectedFarmer.id)}
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center text-gray-500">
                    <User className="w-16 h-16 mx-auto mb-4" />
                    <p>Select a farmer to start chatting</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerChat;