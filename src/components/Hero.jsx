import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:gap-12 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 ring-1 ring-rose-200">
            New Season · Limited Drops
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Elegance, comfort, and confidence—redefined.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover luxurious lingerie crafted to flatter every silhouette. From everyday essentials to statement sets, feel as good as you look.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              Shop Bestsellers
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              Explore Categories
            </a>
          </div>
        </div>
        <div className="mt-12 grid flex-1 grid-cols-2 gap-4 sm:mt-16 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1280&auto=format&fit=crop"
            alt="Lace lingerie set in rose tones"
            className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80"
          />
          <img
            src="https://images.unsplash.com/photo-1542332213-9b6f1b5b1d0c?q=80&w=1280&auto=format&fit=crop"
            alt="Satin robe and bralette"
            className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80"
          />
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1280&auto=format&fit=crop"
            alt="Elegant black lace detail"
            className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80"
          />
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1280&auto=format&fit=crop"
            alt="Soft pastel lingerie"
            className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
}
