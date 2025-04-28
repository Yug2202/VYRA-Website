import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer id="contact" className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-2xl tracking-wider mb-4">
              <span className="text-red-600">V</span>YRA
            </div>
            <p className="mb-4">
              Revolutionizing home fitness with premium equipment designed for
              results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  VYRA Essential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  VYRA Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  VYRA Elite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} VYRA Fitness. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}