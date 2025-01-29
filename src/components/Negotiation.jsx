import { useState } from 'react'
import { 
  User, MessageSquare, Calendar, Package, DollarSign, 
  SortDesc, Search, Send, CheckCircle, XCircle, RotateCcw
} from 'lucide-react'

const StatusBadge = ({ status }) => {
  const styles = {
    accepted: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    countered: "bg-blue-100 text-blue-800 border-blue-200"
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

const CounterOfferModal = ({ isOpen, onClose, offer, onSubmit }) => {
  const [counterOffer, setCounterOffer] = useState({
    price: '',
    quantity: '',
    deliveryDate: ''
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Counter Offer to {offer.buyer}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Price (per ton)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              value={counterOffer.price}
              onChange={(e) => setCounterOffer({...counterOffer, price: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Quantity (tons)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              value={counterOffer.quantity}
              onChange={(e) => setCounterOffer({...counterOffer, quantity: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Delivery Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-lg"
              value={counterOffer.deliveryDate}
              onChange={(e) => setCounterOffer({...counterOffer, deliveryDate: e.target.value})}
            />
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => onSubmit(counterOffer)}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Submit Counter Offer
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ChatSection = ({ selectedBuyer, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <User className="w-8 h-8 text-green-600" />
          <h3 className="text-xl font-semibold text-green-900">{selectedBuyer || 'Select a buyer'}</h3>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${
              msg.sender === 'me' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p>{msg.text}</p>
              <span className="text-xs opacity-75">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default function Negotiation() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      buyer: 'Buyer A',
      proposedPrice: 220,
      quantity: 500,
      deliveryDate: '2024-06-15',
      status: 'pending',
      messages: []
    },
    {
      id: 2,
      buyer: 'Buyer B',
      proposedPrice: 230,
      quantity: 300,
      deliveryDate: '2024-07-01',
      status: 'pending',
      messages: []
    }
  ])

  const [offerHistory, setOfferHistory] = useState([
    {
      id: 3,
      buyer: 'Buyer C',
      proposedPrice: 210,
      quantity: 400,
      deliveryDate: '2024-05-20',
      status: 'accepted',
      messages: []
    },
    {
      id: 4,
      buyer: 'Buyer D',
      proposedPrice: 200,
      quantity: 600,
      deliveryDate: '2024-06-10',
      status: 'rejected',
      messages: []
    }
  ])

  const [selectedOffer, setSelectedOffer] = useState(null)
  const [showCounterModal, setShowCounterModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('desc')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedBuyer, setSelectedBuyer] = useState(null)

  const handleAccept = (id) => {
    const updatedOffers = offers.map(offer => 
      offer.id === id ? {...offer, status: 'accepted'} : offer
    )
    const acceptedOffer = updatedOffers.find(o => o.id === id)
    setOffers(updatedOffers.filter(o => o.id !== id))
    setOfferHistory([...offerHistory, acceptedOffer])
  }

  const handleReject = (id) => {
    const updatedOffers = offers.map(offer => 
      offer.id === id ? {...offer, status: 'rejected'} : offer
    )
    const rejectedOffer = updatedOffers.find(o => o.id === id)
    setOffers(updatedOffers.filter(o => o.id !== id))
    setOfferHistory([...offerHistory, rejectedOffer])
  }

  const handleCounterOffer = (id) => {
    setSelectedOffer(offers.find(o => o.id === id))
    setShowCounterModal(true)
  }

  const handleCounterOfferSubmit = (counterOffer) => {
    const updatedOffers = offers.map(offer => 
      offer.id === selectedOffer.id 
        ? {
            ...offer,
            status: 'countered',
            proposedPrice: parseFloat(counterOffer.price),
            quantity: parseInt(counterOffer.quantity),
            deliveryDate: counterOffer.deliveryDate
          }
        : offer
    )
    setOffers(updatedOffers)
    setShowCounterModal(false)
    setSelectedOffer(null)
  }

  const handleSendMessage = (message) => {
    if (!selectedBuyer) return
    
    const newMessage = {
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString()
    }

    setOffers(offers.map(offer => 
      offer.buyer === selectedBuyer
        ? {...offer, messages: [...offer.messages, newMessage]}
        : offer
    ))
  }

  const filteredOffers = offers
    .filter(offer => 
      (filterStatus === 'all' || offer.status === filterStatus) &&
      offer.buyer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => 
      sortOrder === 'desc' 
        ? b.proposedPrice - a.proposedPrice
        : a.proposedPrice - b.proposedPrice
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-green-900">Negotiation Dashboard</h2>
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search buyers..."
                className="pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="countered">Countered</option>
            </select>
            <button
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <SortDesc className="h-5 w-5" />
              <span>Price {sortOrder === 'desc' ? '↓' : '↑'}</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-green-900">Active Offers</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {filteredOffers.length} Active
                </span>
              </div>

              <div className="space-y-4">
                {filteredOffers.map((offer) => (
                  <div key={offer.id} 
                    className="bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="w-8 h-8 text-green-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{offer.buyer}</h4>
                          <StatusBadge status={offer.status} />
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedBuyer(offer.buyer)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">${offer.proposedPrice}/ton</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Package className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">{offer.quantity} tons</span>
                      </div>
                      <div className="flex items-center space-x-2 col-span-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">{offer.deliveryDate}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleAccept(offer.id)}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Accept</span>
                      </button>
                      <button
                        onClick={() => handleReject(offer.id)}
                        className="flex-1 bg-white text-red-600 px-4 py-2 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                      <button
                        onClick={() => handleCounterOffer(offer.id)}
                        className="flex-1 bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Counter</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-green-900">Offer History</h3>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {offerHistory.length} Past
                </span>
              </div>

              <div className="space-y-4">
                {offerHistory.map((offer) => (
                  <div key={offer.id} 
                    className="bg-gray-50 rounded-lg border border-gray-200 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="w-8 h-8 text-gray-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{offer.buyer}</h4>
                          <StatusBadge status={offer.status} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">${offer.proposedPrice}/ton</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Package className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">{offer.quantity} tons</span>
                      </div>
                      <div className="flex items-center space-x-2 col-span-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">{offer.deliveryDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ChatSection
              selectedBuyer={selectedBuyer}
              messages={offers.find(o => o.buyer === selectedBuyer)?.messages || []}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>

      <CounterOfferModal
        isOpen={showCounterModal}
        onClose={() => setShowCounterModal(false)}
        offer={selectedOffer}
        onSubmit={handleCounterOfferSubmit}
      />
    </div>
  )
}