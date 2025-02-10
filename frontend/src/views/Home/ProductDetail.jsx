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
    name: 'WR.UP® Faux Leather Jumpsuit', 
    description: 'High Waisted Flare.', 
    price: '249.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Faux_Leather_Jumpsuit_-_High_Waisted_-_Flare_-_Black_-_Freddy_USA-4857841.jpg?crop=center&height=450&v=1729529878&width=300', 'https://freddystore.com/cdn/shop/files/WR.UP_Faux_Leather_Jumpsuit_-_High_Waisted_-_Flare_-_Black_-_Freddy_USA-4857866.jpg?crop=center&height=1600&v=1735350376&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Faux_Leather_Jumpsuit_-_High_Waisted_-_Flare_-_Black_-_Freddy_USA-4857848.jpg?crop=center&height=1600&v=1735350376&width=1056'],
    reviews: [
      { reviewer: 'Alice', rating: 5, comment: 'Perfect fit! Love the quality.' },
      { reviewer: 'Jane', rating: 4, comment: 'Very comfortable but runs slightly small.' },
      { reviewer: 'Emma', rating: 5, comment: 'My new favorite pair of jeans!' },
      { reviewer: 'Olivia', rating: 4, comment: 'Good material, but delivery took a while.' },
      { reviewer: 'Sophia', rating: 5, comment: 'Worth every penny. Highly recommend!' }
    ]
  },
  { 
    id: 2, 
    name: 'WR.UP® Corset Faux Leather', 
    description: 'High Waisted Full Length.', 
    price: '219.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Latte_-_Freddy_USA-4857369.jpg?crop=center&height=1600&v=1729529161&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Latte_-_Freddy_USA-4857371.jpg?crop=center&height=1600&v=1729529166&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Latte_-_Freddy_USA-4857375.jpg?crop=center&height=1600&v=1729529171&width=1056'],
    reviews: [
      { reviewer: 'Liam', rating: 4, comment: 'Nice and breezy for summer days.' },
      { reviewer: 'Charlotte', rating: 5, comment: 'Love the fit and flow of these pants.' },
      { reviewer: 'Amelia', rating: 4, comment: 'Stylish, but wrinkles easily.' },
      { reviewer: 'Mia', rating: 5, comment: 'Beautiful pants, very comfortable.' },
      { reviewer: 'Isabella', rating: 5, comment: 'Exactly as pictured. Great buy!' }
    ]
  },
  { 
    id: 3, 
    name: 'WR.UP® Fleece Lined Fashion', 
    description: 'High Waisted Full Length.', 
    price: '159.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857333.jpg?crop=center&height=1600&v=1729529103&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857336.jpg?crop=center&height=1600&v=1729529109&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Corset_Faux_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857343.jpg?crop=center&height=1600&v=1729529121&width=1056'],
    reviews: [
      { reviewer: 'Benjamin', rating: 5, comment: 'The pockets are so handy!' },
      { reviewer: 'Lucas', rating: 4, comment: 'Good quality, but a little baggy.' },
      { reviewer: 'Ella', rating: 5, comment: 'Perfect for casual outings.' },
      { reviewer: 'Harper', rating: 5, comment: 'Exactly what I was looking for.' },
      { reviewer: 'Mason', rating: 4, comment: 'Runs slightly large but still great.' }
    ]
  },
  { 
    id: 4, 
    name: 'Straight-Leg Trousers', 
    description: 'Classic straight-leg trousers for everyday comfort.', 
    price: '39.99', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Fleece_Lined_Fashion_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857885.jpg?crop=center&height=1600&v=1729529943&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Fleece_Lined_Fashion_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857889.jpg?crop=center&height=1600&v=1729529949&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Fleece_Lined_Fashion_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4857893.jpg?crop=center&height=1600&v=1729529954&width=1056'],
    reviews: [
      { reviewer: 'Henry', rating: 5, comment: 'Perfect for work and casual wear.' },
      { reviewer: 'Chloe', rating: 5, comment: 'Great material and fit!' },
      { reviewer: 'Ava', rating: 4, comment: 'Comfortable but needs ironing.' },
      { reviewer: 'Evelyn', rating: 5, comment: 'Love these trousers, very versatile.' },
      { reviewer: 'Elijah', rating: 4, comment: 'Good value for the price.' }
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
