
import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppPreview from '@/components/AppPreview';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <div className="absolute w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-blue-500 filter blur-[100px]" />
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 rounded-full bg-purple-500 filter blur-[100px]" />
        <div className="absolute top-[60%] right-[20%] w-80 h-80 rounded-full bg-indigo-500 filter blur-[100px]" />
      </div>
      
      <Navbar />
      
      <motion.div 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 pt-10 md:pt-20 pb-32 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <Hero />
          <AppPreview scrollY={scrollY} />
        </div>
      </motion.div>

      <div id="features">
        <Features />
      </div>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="pricing">
        <Pricing />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
