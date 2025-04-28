import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { CheckoutPage } from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
export function App() {
  return <CartProvider>
      <Router>
        <div className="font-sans text-gray-900 bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<main>
                  <HeroSection />
                  <ProductsSection />
                  <CTASection />
                </main>} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>;
}