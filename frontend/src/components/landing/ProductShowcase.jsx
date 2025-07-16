import React from 'react';

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl text-center font-sora font-bold">Product Showcase</h2>
      <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/150" alt="Product" className="rounded-2xl" />
          <div className="ml-8">
            <h3 className="text-2xl font-sora font-bold">Digital Art Pack</h3>
            <p className="text-lg mt-2 text-gray-600">$25.00</p>
            <button className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-2xl shadow-md hover:bg-opacity-90">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
