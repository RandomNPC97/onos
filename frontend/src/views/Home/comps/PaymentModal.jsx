// PaymentModal.js
import React from 'react';

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <p className="mb-4">You pay 30% when you inspect and are satisfied with the item. You can then make full payment or return it.</p>

        <div className="space-y-4">
          <button className="w-full bg-gray-200 p-3 rounded-md hover:bg-gray-300">Credit/Debit Card</button>
          <button className="w-full bg-gray-200 p-3 rounded-md hover:bg-gray-300">PayPal</button>
          <button className="w-full bg-gray-200 p-3 rounded-md hover:bg-gray-300">Cash app</button>
          <button className="w-full bg-gray-200 p-3 rounded-md hover:bg-gray-300">Crypto Currency</button>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 focus:outline-none" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;