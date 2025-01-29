import React, { useState } from 'react';

const PaymentManagement = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      buyer: 'Buyer A',
      cropType: 'Wheat',
      status: 'Pending',
      amount: 12500,
      advance: 2500,
      remainingAmount: 10000,
      dueDate: '2023-12-15',
      invoiceGenerated: false,
      paymentHistory: [
        { amount: 2500, date: '2023-11-01', type: 'Advance Payment' }
      ],
      contractRef: 'CTR-2023-001',
      paymentTerms: 'Net 30',
      invoiceNumber: null,
      lastReminder: null,
      notes: ''
    },
    {
      id: 2,
      buyer: 'Buyer B',
      cropType: 'Corn',
      status: 'Partial',
      amount: 9600,
      advance: 4800,
      remainingAmount: 4800,
      dueDate: '2023-11-30',
      invoiceGenerated: true,
      paymentHistory: [
        { amount: 4800, date: '2023-10-15', type: 'Advance Payment' }
      ],
      contractRef: 'CTR-2023-002',
      paymentTerms: 'Net 45',
      invoiceNumber: 'INV-2023-002',
      lastReminder: '2023-11-15',
      notes: 'Second installment scheduled for month end'
    }
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [note, setNote] = useState('');

  const generateInvoiceNumber = () => {
    return `INV-${new Date().getFullYear()}-${String(payments.length + 1).padStart(3, '0')}`;
  };

  const handleGenerateInvoice = (payment) => {
    const invoiceNumber = generateInvoiceNumber();
    setPayments(payments.map(p => 
      p.id === payment.id 
        ? { ...p, invoiceGenerated: true, invoiceNumber } 
        : p
    ));
  };

  const handleRequestConfirmation = (payment) => {
    const now = new Date().toISOString();
    setPayments(payments.map(p => 
      p.id === payment.id 
        ? { ...p, lastReminder: now } 
        : p
    ));
  };

  const handleAddPayment = (payment, amount) => {
    const newPayment = {
      amount: parseFloat(amount),
      date: new Date().toISOString(),
      type: 'Installment Payment'
    };

    const updatedPayment = {
      ...payment,
      remainingAmount: payment.remainingAmount - parseFloat(amount),
      paymentHistory: [...payment.paymentHistory, newPayment],
      status: payment.remainingAmount - parseFloat(amount) <= 0 ? 'Paid' : 'Partial'
    };

    setPayments(payments.map(p => 
      p.id === payment.id ? updatedPayment : p
    ));
    setSelectedPayment(null);
  };

  const handleAddNote = (paymentId) => {
    if (!note.trim()) return;
    
    setPayments(payments.map(p => 
      p.id === paymentId 
        ? { ...p, notes: note } 
        : p
    ));
    setNote('');
  };

  const filteredPayments = payments
    .filter(payment => {
      const matchesSearch = payment.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          payment.cropType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          payment.contractRef.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
      return matchesSearch && matchesStatus;
    });

  const getTotalStats = () => {
    return payments.reduce((acc, payment) => {
      acc.total += payment.amount;
      acc.received += payment.amount - payment.remainingAmount;
      acc.pending += payment.remainingAmount;
      return acc;
    }, { total: 0, received: 0, pending: 0 });
  };

  const stats = getTotalStats();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="border-l-4 border-green-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-green-800">Payment & Invoice Management</h2>
        <p className="mt-2 text-lg text-green-600">Track payments, generate invoices, and manage financial records</p>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-sm font-medium text-gray-500">Total Amount</h3>
          <p className="text-2xl font-bold text-green-600">${stats.total.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-500">Received</h3>
          <p className="text-2xl font-bold text-blue-600">${stats.received.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-sm font-medium text-gray-500">Pending</h3>
          <p className="text-2xl font-bold text-yellow-600">${stats.pending.toFixed(2)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by buyer, crop type, or contract reference..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Partial">Partial</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments List */}
      <div className="space-y-6">
        {filteredPayments.map(payment => (
          <div key={payment.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-900">{payment.cropType}</h3>
                  <p className="text-sm text-gray-600">Contract Ref: {payment.contractRef}</p>
                  <p className="text-sm text-gray-600">Buyer: {payment.buyer}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                    payment.status === 'Paid' ? 'bg-green-100 text-green-700 border-green-200' :
                    payment.status === 'Partial' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                    'bg-red-100 text-red-700 border-red-200'
                  } border`}>
                    {payment.status}
                  </span>
                  {payment.invoiceNumber && (
                    <span className="mt-2 text-sm text-gray-600">
                      Invoice: {payment.invoiceNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Payment Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-semibold text-lg">${payment.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Received</p>
                  <p className="font-semibold text-lg">${(payment.amount - payment.remainingAmount).toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Remaining</p>
                  <p className="font-semibold text-lg">${payment.remainingAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Due Date</p>
                  <p className="font-semibold">{new Date(payment.dueDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mb-4">
                {!payment.invoiceGenerated && (
                  <button
                    onClick={() => handleGenerateInvoice(payment)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Generate Invoice
                  </button>
                )}
                <button
                  onClick={() => handleRequestConfirmation(payment)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send Reminder
                </button>
                {payment.status !== 'Paid' && (
                  <button
                    onClick={() => setSelectedPayment(payment.id)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Record Payment
                  </button>
                )}
              </div>

              {/* Payment Form */}
              {selectedPayment === payment.id && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Record New Payment</h4>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      step="0.01"
                      max={payment.remainingAmount}
                      onChange={(e) => {
                        if (e.target.value <= payment.remainingAmount) {
                          setNote(e.target.value);
                        }
                      }}
                    />
                    <button
                      onClick={() => handleAddPayment(payment, note)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Record
                    </button>
                  </div>
                </div>
              )}

              {/* Payment History */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Payment History</h4>
                <div className="space-y-2">
                  {payment.paymentHistory.map((history, index) => (
                    <div key={index} className="flex justify-between text-sm bg-gray-50 p-2 rounded">
                      <span>{history.type}</span>
                      <span className="text-green-600">${history.amount.toFixed(2)}</span>
                      <span className="text-gray-500">{new Date(history.date).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <div className="mt-4 border-t pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Notes</h4>
                {payment.notes && (
                  <p className="text-sm text-gray-600 mb-2">{payment.notes}</p>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a note..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <button
                    onClick={() => handleAddNote(payment.id)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentManagement;