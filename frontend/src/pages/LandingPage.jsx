import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import ProductShowcase from '../components/landing/ProductShowcase';
import CTA from '../components/landing/CTA';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <HeroSection />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <CTA />
    </div>
  );
};

export default LandingPage;
