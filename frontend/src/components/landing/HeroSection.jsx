import React from 'react';

const HeroSection = () => {
  return (
    <header className="bg-primary text-white text-center py-20">
      <h1 className="text-5xl font-bold font-sora">CybaShop</h1>
      <p className="text-xl mt-4">Your creator-first digital marketplace.</p>
      <button className="mt-8 px-8 py-3 bg-secondary text-white font-bold rounded-2xl shadow-lg hover:bg-opacity-90">
        Get Started
      </button>
    </header>
  );
};

export default HeroSection;
