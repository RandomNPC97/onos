import React, { useState, useEffect } from 'react';
import 'swiper/css';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductList from './comps/ProductList';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLocation } from 'react-router-dom';

const limitedDeals = [
  { 
    id: 1, 
    name: 'Plaid Trousers', 
    description: 'Trendy plaid trousers perfect for fall.', 
    price: '59.99', 
    imageUrls: ['/assets/plaid-trousers1.jpg', '/assets/plaid-trousers2.jpg', '/assets/plaid-trousers3.jpg'],
    reviews: [
      { reviewer: 'Liam', rating: 5, comment: 'Perfect for the fall season.' },
      { reviewer: 'Olivia', rating: 4, comment: 'Stylish but a bit tight around the waist.' },
      { reviewer: 'Noah', rating: 5, comment: 'Amazing quality and fit!' },
      { reviewer: 'Sophia', rating: 5, comment: 'Love the plaid pattern.' },
      { reviewer: 'Mason', rating: 4, comment: 'Looks great, but shrinks slightly after washing.' }
    ]
  },
  { 
    id: 2, 
    name: 'Linen Pants', 
    description: 'Breathable linen pants for warmer weather.', 
    price: '49.99', 
    imageUrls: ['/assets/linen-pants1.jpg', '/assets/linen-pants2.jpg', '/assets/linen-pants3.jpg'],
    reviews: [
      { reviewer: 'Amelia', rating: 5, comment: 'Perfect for hot days. So breathable!' },
      { reviewer: 'Lucas', rating: 4, comment: 'Love them, but they wrinkle easily.' },
      { reviewer: 'Ella', rating: 5, comment: 'Very comfortable and stylish.' },
      { reviewer: 'Henry', rating: 5, comment: 'Great fit and material.' },
      { reviewer: 'Ava', rating: 4, comment: 'Perfect casual wear for summer.' }
    ]
  },
  { 
    id: 3, 
    name: 'Paperbag Waist Pants', 
    description: 'Stylish paperbag waist pants with a tie belt.', 
    price: '44.99', 
    imageUrls: ['/assets/paperbag-pants1.jpg', '/assets/paperbag-pants2.jpg', '/assets/paperbag-pants3.jpg'],
    reviews: [
      { reviewer: 'Evelyn', rating: 5, comment: 'Absolutely love the fit and style!' },
      { reviewer: 'William', rating: 4, comment: 'Great design, but slightly loose at the waist.' },
      { reviewer: 'Isabella', rating: 5, comment: 'Perfect pants for casual days.' },
      { reviewer: 'Jack', rating: 5, comment: 'The belt adds a nice touch. Love it!' },
      { reviewer: 'Mia', rating: 5, comment: 'Comfortable and stylish at the same time.' }
    ]
  }
];

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {}; // Retrieve the passed product details

  if (!product) {
    return <div className="text-center mt-20 text-red-600">No product details found.</div>;
  }

  const deliveryInfo = {
    address: '1234 Customer Street, City, Country',
    shippingFee: '50.00',
    deliveryEstimate: '3-5 business days',
    shipmentMethod: 'Standard Shipping',
    shipmentPlan: 'Next-Day Delivery available for an additional fee',
    returnPolicy: '30-day return policy. Items must be in original condition.',
  };

  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // Load cart from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);


  // Function to handle adding product to cart
  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    const cartProduct = { ...product, size: selectedSize };
    const updatedCart = [...cart, cartProduct];

    setCart(updatedCart); // Update state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to local storage

    alert(`${product.name} (Size: ${selectedSize}) has been added to your cart.`);
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto py-10 px-4">
        {/* Product Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Column */}
          <div className="md:w-2/3 flex flex-col space-y-6">
            <div className="md:w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 2000 }}
                loop
                className="h-96"
              >
                {product.imageUrls.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-80 object-cover rounded-lg md:h-64 lg:h-56 xl:h-48"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <span className="text-2xl text-blue-600 font-bold">{product.price}</span>
              <p className="text-gray-700 mt-2">
                <strong>{product.stock} {product.stock === 1 ? 'item' : 'items'} left in stock</strong>
              </p>

              {/* Size Selection */}
              <div className="mt-4">
                <label htmlFor="size" className="block font-medium mb-2">Select Size:</label>
                <select
                  id="size"
                  className="border border-gray-300 rounded-md p-2 w-40"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">-- Choose a size --</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description Section */}
              <h2 className="text-2xl font-bold mb-4 mt-6">Product Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="text-lg font-semibold">{review.reviewer}</h4>
                  <div className="text-yellow-500">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Delivery Information</h3>
              <p className="text-gray-700"><strong>Shipping Fee:</strong> ${deliveryInfo.shippingFee}</p>
              <p className="text-gray-700"><strong>Delivery Estimate:</strong> {deliveryInfo.deliveryEstimate}</p>
              <p className="text-gray-700"><strong>Shipment Method:</strong> {deliveryInfo.shipmentMethod}</p>
              <p className="text-gray-700"><strong>Return Policy:</strong> {deliveryInfo.returnPolicy}</p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <ProductList title="You may also like" products={limitedDeals} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
