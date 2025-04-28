import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function CTASection() {
  return <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Double Savings: 20% OFF + Free Shipping
        </h2>
        <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
          Limited time offer: Get 20% off on all products
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
          Plus, receive a special 10% discount code for your next purchase!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#products" className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition duration-150 ease-in-out flex items-center justify-center mx-auto sm:mx-0">
            Shop Now <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
}