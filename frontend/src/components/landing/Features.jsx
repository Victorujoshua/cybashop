import React from 'react';

const Features = () => {
  return (
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
  );
};

export default Features;
