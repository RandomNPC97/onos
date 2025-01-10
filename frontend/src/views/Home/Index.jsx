import React from 'react';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import Swipper from './comps/Swipper';
import ProductList from './comps/ProductList'; // Import the refactored ProductList component
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

// Product data for different sections
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
  },
  { 
    id: 5, 
    name: 'WR.UP® Thick Layered Diwo Pro', 
    description: 'High Waisted Full Length', 
    price: '249.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Thick_Layered_Diwo_Pro_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4778824.jpg?crop=center&height=1600&v=1729210823&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Thick_Layered_Diwo_Pro_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4778832.jpg?crop=center&height=1600&v=1729210829&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Thick_Layered_Diwo_Pro_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4778841.jpg?crop=center&height=1600&v=1729210836&width=1056'],
    reviews: [
      { reviewer: 'Sofia', rating: 5, comment: 'These leggings are stunning!' },
      { reviewer: 'Ethan', rating: 4, comment: 'Looks great, but a little tight.' },
      { reviewer: 'Isla', rating: 5, comment: 'Perfect for a night out.' },
      { reviewer: 'William', rating: 5, comment: 'High-quality material. Very stylish.' },
      { reviewer: 'Scarlett', rating: 5, comment: 'Exactly what I wanted!' }
    ]
  },
  { 
    id: 6, 
    name: 'WR.UP® Panther Faux Leather', 
    description: 'Mid Rise Full Length', 
    price: '189.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Panther_Faux_Leather_-_Mid_Rise_-_Full_Length_-_Black_-_Freddy_USA-4857947.jpg?crop=center&height=1600&v=1729530042&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Panther_Faux_Leather_-_Mid_Rise_-_Full_Length_-_Black_-_Freddy_USA-4857951.jpg?crop=center&height=1600&v=1729530048&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Panther_Faux_Leather_-_Mid_Rise_-_Full_Length_-_Black_-_Freddy_USA-4857954.jpg?crop=center&height=1600&v=1729530052&width=1056'],
    reviews: [
      { reviewer: 'Jack', rating: 5, comment: 'So comfy, I wear them every day.' },
      { reviewer: 'Aria', rating: 5, comment: 'Perfect for workouts and lounging.' },
      { reviewer: 'James', rating: 4, comment: 'Good quality, but runs short.' },
      { reviewer: 'Luna', rating: 5, comment: 'Soft and cozy. Highly recommend.' },
      { reviewer: 'Grace', rating: 4, comment: 'Perfect for casual days.' }
    ]
  },
  { 
    id: 7, 
    name: 'WR.UP® Velvet Leather', 
    description: 'High Waisted Full Length', 
    price: '214.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-101877.jpg?crop=center&height=1600&v=1716888884&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-101879.jpg?crop=center&height=1600&v=1716888891&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Leather_-_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-101881.jpg?crop=center&height=1600&v=1716888898&width=1056'],
    reviews: [
      { reviewer: 'Zoe', rating: 5, comment: 'Very trendy and comfortable.' },
      { reviewer: 'Alexander', rating: 5, comment: 'Perfect for a stylish summer look.' },
      { reviewer: 'Layla', rating: 4, comment: 'Nice fit but slightly stiff fabric.' },
      { reviewer: 'Sebastian', rating: 5, comment: 'Exactly as pictured. Great style.' },
      { reviewer: 'Nora', rating: 5, comment: 'I get compliments every time I wear them!' }
    ]
  },
  { 
    id: 8, 
    name: 'WR.UP® Velvet Faux Leather', 
    description: 'High Waisted Full Length', 
    price: '219.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Faux_Leather_-_High_Waisted_-_Super_Flare_-_Black_-_Freddy_USA-4857979.jpg?crop=center&height=1600&v=1729530094&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Faux_Leather_-_High_Waisted_-_Super_Flare_-_Black_-_Freddy_USA-4857983.jpg?crop=center&height=1600&v=1729530100&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Velvet_Faux_Leather_-_High_Waisted_-_Super_Flare_-_Black_-_Freddy_USA-4857988.jpg?crop=center&height=1600&v=1729530106&width=1056'],
    reviews: [
      { reviewer: 'Zoe', rating: 5, comment: 'Very trendy and comfortable.' },
      { reviewer: 'Alexander', rating: 5, comment: 'Perfect for a stylish summer look.' },
      { reviewer: 'Layla', rating: 4, comment: 'Nice fit but slightly stiff fabric.' },
      { reviewer: 'Sebastian', rating: 5, comment: 'Exactly as pictured. Great style.' },
      { reviewer: 'Nora', rating: 5, comment: 'I get compliments every time I wear them!' }
    ]
  },
];

const inStock = [
  { 
    id: 1, 
    name: 'WR.UP® Disco Pants', 
    description: 'Super High Waisted Full Length', 
    price: '199.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4629233.jpg?crop=center&height=1600&v=1728836854&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4629231.jpg?crop=center&height=1600&v=1728836841&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Black_-_Freddy_USA-4629232.jpg?crop=center&height=1600&v=1728836848&width=1056'],
    reviews: [
      { reviewer: 'Emily', rating: 5, comment: 'Perfect fit and very flattering.' },
      { reviewer: 'John', rating: 4, comment: 'Comfortable, but could be longer.' },
      { reviewer: 'Sophia', rating: 5, comment: 'Love the retro vibes!' },
      { reviewer: 'Liam', rating: 5, comment: 'Great for both casual and formal looks.' },
      { reviewer: 'Olivia', rating: 4, comment: 'Fits well, but wrinkles easily.' }
    ]
  },
  { 
    id: 2, 
    name: 'WR.UP® Disco Pants', 
    description: 'Super High Waisted Full Length', 
    price: '199.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4629246.jpg?crop=center&height=1600&v=1728836948&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4629251.jpg?crop=center&height=1600&v=1728836985&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4629250.jpg?crop=center&height=1600&v=1728836978&width=1056'],
    reviews: [
      { reviewer: 'Isabella', rating: 5, comment: 'Super comfortable and stylish.' },
      { reviewer: 'James', rating: 4, comment: 'Beautiful, but fabric is thin.' },
      { reviewer: 'Ava', rating: 5, comment: 'Perfect for summer days.' },
      { reviewer: 'William', rating: 5, comment: 'Very flowy and well made.' },
      { reviewer: 'Mia', rating: 4, comment: 'Love the pastel colors!' }
    ]
  },
  { 
    id: 3, 
    name: 'WR.UP® Disco Pants', 
    description: 'Super High Waisted Full Length', 
    price: '199.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Hot_Pink_-_Freddy_USA-4629243.jpg?crop=center&height=1600&v=1728836925&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Hot_Pink_-_Freddy_USA-4629242.jpg?crop=center&height=1600&v=1728836919&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Super_High_Waisted_-_Full_Length_-_Hot_Pink_-_Freddy_USA-4629241.jpg?crop=center&height=1600&v=1728836913&width=1056'],
    reviews: [
      { reviewer: 'Benjamin', rating: 5, comment: 'Fits perfectly, great for office wear.' },
      { reviewer: 'Emma', rating: 5, comment: 'Comfortable and versatile.' },
      { reviewer: 'Lucas', rating: 4, comment: 'Good quality, but runs small.' },
      { reviewer: 'Charlotte', rating: 5, comment: 'I bought two pairs, love them!' },
      { reviewer: 'Elijah', rating: 4, comment: 'Good fit, but fabric stretches a bit.' }
    ]
  },
  { 
    id: 4, 
    name: 'WR.UP® Disco Pants', 
    description: 'Mid Rise Full Length', 
    price: '169.00', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Mid_Rise_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4082970.jpg?crop=center&height=1600&v=1727858401&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Mid_Rise_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4082972.jpg?crop=center&height=1600&v=1727858415&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Disco_Pants_-_Mid_Rise_-_Full_Length_-_Navy_Blue_-_Freddy_USA-4082973.jpg?crop=center&height=1600&v=1727858421&width=1056'],
    reviews: [
      { reviewer: 'Emily', rating: 5, comment: 'Perfect fit and very flattering.' },
      { reviewer: 'John', rating: 4, comment: 'Comfortable, but could be longer.' },
      { reviewer: 'Sophia', rating: 5, comment: 'Love the retro vibes!' },
      { reviewer: 'Liam', rating: 5, comment: 'Great for both casual and formal looks.' },
      { reviewer: 'Olivia', rating: 4, comment: 'Fits well, but wrinkles easily.' }
    ]
  },
];


const sponsoredProducts = [
  { 
    id: 1, 
    name: 'WR.UP® Cargo Fashion', 
    description: 'High Waisted Petite Length', 
    price: '219.99', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Sand_Camo_-_Freddy_USA-4082907.jpg?crop=center&height=1600&v=1727857770&width=1056',
                'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Sand_Camo_-_Freddy_USA-4082904.jpg?crop=center&height=1600&v=1727857744&width=1056', 
                'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Sand_Camo_-_Freddy_USA-4082906.jpg?crop=center&height=1600&v=1727857762&width=1056'],
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
    name: 'WR.UP® Cargo Fashion', 
    description: 'High Waisted Petite Length', 
    price: '219.99', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Brown_Camo_-_Freddy_USA-4082872.jpg?crop=center&height=1600&v=1727857495&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Brown_Camo_-_Freddy_USA-4082875.jpg?crop=center&height=1600&v=1727857524&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_7-8_Length_-_Brown_Camo_-_Freddy_USA-4082876.jpg?crop=center&height=1600&v=1727857530&width=1056'],
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
    name: 'WR.UP® Cargo Fashion', 
    description: 'High Waisted Petite Length', 
    price: '159.99', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Military_Green_-_Freddy_USA-91486.jpg?crop=center&height=1600&v=1716861279&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Military_Green_-_Freddy_USA-91488.jpg?crop=center&height=1600&v=1716861287&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Military_Green_-_Freddy_USA-91491.jpg?crop=center&height=1600&v=1716861295&width=1056'],
    reviews: [
      { reviewer: 'Evelyn', rating: 5, comment: 'Absolutely love the fit and style!' },
      { reviewer: 'William', rating: 4, comment: 'Great design, but slightly loose at the waist.' },
      { reviewer: 'Isabella', rating: 5, comment: 'Perfect pants for casual days.' },
      { reviewer: 'Jack', rating: 5, comment: 'The belt adds a nice touch. Love it!' },
      { reviewer: 'Mia', rating: 5, comment: 'Comfortable and stylish at the same time.' }
    ]
  },
  { 
    id: 3, 
    name: 'WR.UP® Cargo Fashion', 
    description: 'High Waisted Petite Length', 
    price: '159.99', 
    imageUrls: ['https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Black_-_Freddy_USA-91473.jpg?crop=center&height=1600&v=1716861241&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Black_-_Freddy_USA-91476.jpg?crop=center&height=1600&v=1716861248&width=1056', 'https://freddystore.com/cdn/shop/files/WR.UP_Cargo_Fashion_-_High_Waisted_-_Petite_Length_-_Black_-_Freddy_USA-91478.jpg?crop=center&height=1600&v=1716861254&width=1056'],
    reviews: [
      { reviewer: 'Evelyn', rating: 5, comment: 'Absolutely love the fit and style!' },
      { reviewer: 'William', rating: 4, comment: 'Great design, but slightly loose at the waist.' },
      { reviewer: 'Isabella', rating: 5, comment: 'Perfect pants for casual days.' },
      { reviewer: 'Jack', rating: 5, comment: 'The belt adds a nice touch. Love it!' },
      { reviewer: 'Mia', rating: 5, comment: 'Comfortable and stylish at the same time.' }
    ]
  }
];



function Home() {
  return (
    <div className="bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section with Swiper Carousel */}
      <Swipper />

      {/* Product Listings for Different Sections */}
      <ProductList title="Limited Deals" products={limitedDeals} />
      <ProductList title="In Stock" products={inStock} />
      <ProductList title="Sponsored" products={sponsoredProducts} />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;
