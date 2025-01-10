import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList({ title, products }) {
  const navigate = useNavigate();

  const handleViewItem = (product) => {
    navigate(`/products/${product.name}`, { state: { product } }); // Navigate and pass product details
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-screen-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg py-4 flex flex-col items-center"
          >
            <img
              src={product.imageUrls[1]}
              alt={product.name}
              className="w-full h-60 object-cover mb-4"
            />
            <h3 className="text-xl">{product.name}</h3>
            <span className="text-gray-600 font-bold text-2xl mb-4">
              ${product.price}
            </span>
            
            {/* View Item Button */}
            <button
              onClick={() => handleViewItem(product)}
              className="bg-black text-white w-[90%] py-2 px-6 rounded hover:bg-gray-800 transition duration-300"
            >
              View Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
