import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CheckoutPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart
  } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const handleCheckout = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      clearCart();
    }, 1500);
  };
  if (paymentSuccess) {
    return <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <img src="/VYRA.jpg" alt="VYRA" className="h-16 mx-auto mb-4 invert" />
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Payment Successful!
              </h2>
              <p className="text-gray-600 mb-2">
                Thank you for your purchase. Your order has been confirmed.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-red-600 mb-2">
                Special Offer for Your Next Purchase
              </h3>
              <p className="text-gray-600 mb-4">
                Use code <span className="font-bold">VYRA10</span> to get 10%
                off on your next order!
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 inline-block">
                <code className="text-lg font-bold">VYRA10</code>
              </div>
            </div>
            <Link to="/" className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out">
              Return to Home
            </Link>
          </div>
        </div>
      </div>;
  }
  if (items.length === 0) {
    return <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <a href="/" className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-8">Checkout</h2>
            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              {items.map(item => <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))} className="p-1 rounded-md hover:bg-gray-100">
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-md hover:bg-gray-100">
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-700">
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>)}
            </div>
            {/* Payment Details */}
            <div className="space-y-4 mb-8">
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Total and Checkout Button */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total</span>
                <span className="font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button onClick={handleCheckout} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium transition duration-150 ease-in-out">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}