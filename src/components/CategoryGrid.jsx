import React from 'react';

const categories = [
  {
    title: 'Bras',
    image:
      'https://images.unsplash.com/photo-1604881987926-7862e5b2c44b?q=80&w=1280&auto=format&fit=crop',
    href: '#bras',
  },
  {
    title: 'Panties',
    image:
      'https://images.unsplash.com/photo-1592878904946-b3cd5b1f17c6?q=80&w=1280&auto=format&fit=crop',
    href: '#panties',
  },
  {
    title: 'Sleep & Lounge',
    image:
      'https://images.unsplash.com/photo-1528701800489-20be0c796d1b?q=80&w=1280&auto=format&fit=crop',
    href: '#sleep',
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Shop by category
        </h2>
        <a href="#featured" className="text-rose-600 hover:text-rose-500 font-medium">
          View bestsellers →
        </a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-200"
          >
            <img
              src={c.image}
              alt={c.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow">
                {c.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
