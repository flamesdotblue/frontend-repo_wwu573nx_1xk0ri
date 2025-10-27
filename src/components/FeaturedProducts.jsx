import React from 'react';

const products = [
  {
    id: 1,
    name: 'Lace Balcony Bra',
    price: 49,
    image:
      'https://images.unsplash.com/photo-1551232864-3f0890e580d7?q=80&w=1280&auto=format&fit=crop',
    color: 'Rose Blush',
  },
  {
    id: 2,
    name: 'Seamless Everyday Bra',
    price: 39,
    image:
      'https://images.unsplash.com/photo-1584811644165-33a069f1a7f3?q=80&w=1280&auto=format&fit=crop',
    color: 'Pearl',
  },
  {
    id: 3,
    name: 'Satin Chemise',
    price: 59,
    image:
      'https://images.unsplash.com/photo-1596306499383-3c3e91fb5147?q=80&w=1280&auto=format&fit=crop',
    color: 'Champagne',
  },
  {
    id: 4,
    name: 'High-waist Brief',
    price: 24,
    image:
      'https://images.unsplash.com/photo-1620799139501-bd8fdbb44a48?q=80&w=1280&auto=format&fit=crop',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Lounge Set',
    price: 69,
    image:
      'https://images.unsplash.com/photo-1573547429449-8d4c7b5018dd?q=80&w=1280&auto=format&fit=crop',
    color: 'Mocha',
  },
  {
    id: 6,
    name: 'Tulle Bralette',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1622844994121-7a8a1aab0cf2?q=80&w=1280&auto=format&fit=crop',
    color: 'Lilac',
  },
  {
    id: 7,
    name: 'Contour Push-Up',
    price: 54,
    image:
      'https://images.unsplash.com/photo-1616353071851-4d12b8b7c2d6?q=80&w=1280&auto=format&fit=crop',
    color: 'Ivory',
  },
  {
    id: 8,
    name: 'Silk Robe',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1280&auto=format&fit=crop',
    color: 'Bordeaux',
  },
];

export default function FeaturedProducts() {
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
            <div className="relative">
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow">
                {p.color}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="line-clamp-1 font-medium text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.color}</p>
                </div>
                <p className="shrink-0 font-semibold text-gray-900">${p.price}</p>
              </div>
              <button
                type="button"
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
