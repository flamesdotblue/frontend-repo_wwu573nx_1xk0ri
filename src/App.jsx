import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './components/CartContext';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-gray-900">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <Link to="/" className="text-xl font-extrabold tracking-tight">
                Élan Intimates
              </Link>
              <nav className="hidden gap-8 text-sm font-medium text-gray-700 sm:flex">
                <a href="#categories" className="hover:text-gray-900">Shop</a>
                <a href="#featured" className="hover:text-gray-900">Bestsellers</a>
                <a href="#newsletter" className="hover:text-gray-900">Offers</a>
              </nav>
              <div className="flex items-center gap-3">
                <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50">
                  Sign in
                </button>
                <button
                  onClick={() => setCartOpen(true)}
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Bag
                </button>
              </div>
            </div>
          </header>

          {/* Routes */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Élan Intimates. All rights reserved.</p>
                <div className="flex gap-6 text-sm text-gray-600">
                  <a href="#" className="hover:text-gray-900">Privacy</a>
                  <a href="#" className="hover:text-gray-900">Terms</a>
                  <a href="#" className="hover:text-gray-900">Support</a>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
