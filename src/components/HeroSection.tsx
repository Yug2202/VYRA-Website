import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Premium Fitness <span className="text-red-600">Accessories</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Elevate your workout with VYRA's professional-grade fitness gear.
              Designed for comfort, durability, and peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium text-lg transition duration-150 ease-in-out flex items-center justify-center">
                View Products <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="/download.jpg" alt="VYRA Fitness Accessories Collection" className="rounded-lg shadow-2xl w-full h-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="text-xl font-bold">NEW</p>
              <p className="text-sm">Launch Offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}