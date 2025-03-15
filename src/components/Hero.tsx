import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full lg:w-1/2 space-y-6"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <TypeAnimation
            sequence={[
              'Supercharge Your', // Text to type
              100, // Wait 1 second
              'Supercharge Your\nNotes with', // \n for line break
              100,
              'Supercharge Your\nNotes with\nAI-Powered', 
              100,
              'Supercharge Your\nNotes with\nAI-Powered\nProductivity',
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            speed={50} // Typing speed in milliseconds
            style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
            repeat={0} // Set to Infinity if you want it to loop
          />
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-xl">
          Effortlessly organize, summarize, and quiz yourself with AI-driven note-taking. 
          Stay ahead in learning and productivity.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <motion.a
          href="https://note-aura-seven.vercel.app/dashboard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-center"
        >
          Start Free Trial
        </motion.a>
        
        <motion.a
          href="#how-it-works"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
        >
          See How It Works
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;