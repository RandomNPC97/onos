import React, { useState } from 'react';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import AOS from "aos";
import "aos/dist/aos.css"; 
import ProductList from './comps/ProductList'; 
import PaymentModal from './comps/PaymentModal'; // Import the PaymentModal component

AOS.init();

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      quantity: 1,
      imageUrl: '/assets/1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 89.99,
      quantity: 2,
      imageUrl: '/assets/2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 129.99,
      quantity: 1,
      imageUrl: '/assets/3.jpg',
    },
  ]);

  const limitedDeals = [
    { id: 1, name: 'Deal Product 1', description: 'Limited deal description', price: '$49.99', imageUrl: '/assets/1.jpg' },
    { id: 2, name: 'Deal Product 2', description: 'Limited deal description', price: '$89.99', imageUrl: '/assets/2.jpg' },
    { id: 3, name: 'Deal Product 3', description: 'Limited deal description', price: '$129.99', imageUrl: '/assets/3.jpg' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle removing an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle increasing quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Handle decreasing quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          &#8592; {/* Left Arrow */}
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          &#8594; {/* Right Arrow */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 focus:outline-none"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Subtotal:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Shipping:</span>
                <span className="font-bold">$10.00</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${(totalPrice + 10).toFixed(2)}</span>
              </div>
              <button 
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600">Browse our products and add them to your cart!</p>
          </div>
        )}
      </div>
      <ProductList title="you may also like" products={limitedDeals} />

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} // Close modal function
      />

      <Footer />
    </div>
  );
}

export default Cart;
