import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl text-center font-sora font-bold">How It Works</h2>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="text-center">
          <div className="bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto">1</div>
          <h3 className="mt-4 text-xl font-sora font-bold">Create Your Shop</h3>
        </div>
        <div className="text-center">
          <div className="bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto">2</div>
          <h3 className="mt-4 text-xl font-sora font-bold">Upload Your Products</h3>
        </div>
        <div className="text-center">
          <div className="bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto">3</div>
          <h3 className="mt-4 text-xl font-sora font-bold">Start Selling</h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
