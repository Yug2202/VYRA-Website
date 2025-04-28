import React, { useState } from 'react';
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    totalItems
  } = useCart();
  return <header className="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="h-12">
              <img src="/VYRA.jpg" alt="VYRA" className="h-full w-auto invert" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white font-medium">
                Home
              </Link>
              <a href="#products" className="text-gray-300 hover:text-white font-medium">
                Products
              </a>
              <Link to="/checkout" className="flex items-center space-x-2">
                <div className="relative">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-300" />
                  {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>}
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">
              Home
            </Link>
            <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">
              Products
            </a>
            <Link to="/checkout" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">
              Cart ({totalItems})
            </Link>
          </div>
        </div>}
    </header>;
}