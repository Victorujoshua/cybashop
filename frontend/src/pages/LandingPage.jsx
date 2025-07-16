import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-20">
        <h1 className="text-5xl font-bold font-sora">CybaShop</h1>
        <p className="text-xl mt-4">Your creator-first digital marketplace.</p>
        <button className="mt-8 px-8 py-3 bg-secondary text-white font-bold rounded-2xl shadow-lg hover:bg-opacity-90">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl text-center font-sora font-bold">Features</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-sora font-bold">Easy Setup</h3>
            <p className="mt-4">Get your shop up and running in minutes.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-sora font-bold">Low Fees</h3>
            <p className="mt-4">Keep more of your earnings with our competitive rates.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-sora font-bold">Powerful Tools</h3>
            <p className="mt-4">Manage your products, sales, and customers with ease.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Product Showcase Section */}
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

      {/* CTA Section */}
      <section className="bg-primary text-white text-center py-20">
        <h2 className="text-4xl font-bold font-sora">Ready to start selling?</h2>
        <button className="mt-8 px-8 py-3 bg-secondary text-white font-bold rounded-2xl shadow-lg hover:bg-opacity-90">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
