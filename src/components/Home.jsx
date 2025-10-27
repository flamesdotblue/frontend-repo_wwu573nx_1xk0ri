import React from 'react';
import Hero from './Hero';
import CategoryGrid from './CategoryGrid';
import FeaturedProducts from './FeaturedProducts';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
