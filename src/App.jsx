import React from 'react';
import Hero from './components/Hero.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Newsletter from './components/Newsletter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="text-pink-600">Élan</span>
            <span className="hidden text-sm text-gray-500 sm:block">Lingerie</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#collections" className="text-gray-600 transition hover:text-gray-900">Collections</a>
            <a href="#featured" className="text-gray-600 transition hover:text-gray-900">Featured</a>
            <a href="#newsletter" className="text-gray-600 transition hover:text-gray-900">Updates</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition hover:border-gray-400 hover:bg-gray-50">
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <section id="collections" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryGrid />
        </section>
        <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedProducts />
        </section>
        <section id="newsletter" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-500 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Élan Lingerie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
