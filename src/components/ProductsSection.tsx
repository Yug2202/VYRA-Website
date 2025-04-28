import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export function ProductsSection() {
  const {
    addToCart
  } = useCart();
  const navigate = useNavigate();
  const calculateDiscountedPrice = (originalPrice: string) => {
    const price = parseFloat(originalPrice.replace('$', ''));
    const discountedPrice = price * 0.8; // 20% off
    return `$${discountedPrice.toFixed(2)}`;
  };
  const products = [{
    name: 'VYRA Power Belt',
    originalPrice: '$39.99',
    price: calculateDiscountedPrice('$39.99'),
    description: 'Premium weightlifting belt for maximum support and stability',
    image: "/images.jpg"
  }, {
    name: 'VYRA Lifting Belt',
    originalPrice: '$34.99',
    price: calculateDiscountedPrice('$34.99'),
    description: 'Ergonomic design for enhanced core support during workouts',
    image: "/download_%283%29.jpg"
  }, {
    name: 'VYRA Wrist Wraps',
    originalPrice: '$24.99',
    price: calculateDiscountedPrice('$24.99'),
    description: 'Professional wrist support for heavy lifting and intense training',
    image: "/download_%282%29.jpg"
  }, {
    name: 'VYRA Grip Pads',
    originalPrice: '$19.99',
    price: calculateDiscountedPrice('$19.99'),
    description: 'Enhanced grip protection for weightlifting and cross-training',
    image: "/502cbaf34c483e2c87882a80bd7eb739.jpg"
  }];
  const handleAddToCart = (product: any) => {
    addToCart({
      id: products.indexOf(product),
      name: product.name,
      price: product.price,
      image: product.image
    });
    navigate('/checkout');
  };
  return <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional-grade fitness accessories designed for your peak
            performance
          </p>
          <p className="text-red-600 font-bold text-xl mt-4">
            Limited Time: 20% OFF All Products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </div>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <div className="text-right">
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-red-600 ml-2">
                      {product.price}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button onClick={() => handleAddToCart(product)} className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out">
                  Add to Cart
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}