import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { products } from './data';

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section id="featured" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Featured favorites
        </h2>
        <a href="#newsletter" className="text-rose-600 hover:text-rose-500 font-medium">
          Get 10% off your first order →
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <Link to={`/product/${p.id}`} className="relative block">
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow">
                {p.color}
              </span>
            </Link>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="line-clamp-1 font-medium text-gray-900">
                    <Link to={`/product/${p.id}`}>{p.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{p.color}</p>
                </div>
                <p className="shrink-0 font-semibold text-gray-900">${p.price}</p>
              </div>
              <button
                type="button"
                onClick={() => addItem(p, 1, { color: p.color })}
                className="mt-4 w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
