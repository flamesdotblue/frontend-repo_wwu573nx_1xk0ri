import React from 'react';

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Join our inner circle
          </h2>
          <p className="mt-3 text-gray-600">
            Be the first to know about new collections, fit tips, and exclusive offers. We respect your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 sm:max-w-md"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-rose-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
