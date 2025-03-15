import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-12 h-12 text-blue-400" />,
    emoji: "1️⃣",
    title: "Capture & Organize",
    description: "Upload PDFs or create notes instantly. Use AI to structure and categorize your content effortlessly."
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    emoji: "2️⃣",
    title: "Enhance with AI",
    description: "Generate summaries, extract key insights, and create AI-powered MCQs to boost your learning experience."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-indigo-400" />,
    emoji: "3️⃣",
    title: "Review & Retain",
    description: "Access your notes anytime, test your knowledge with quizzes, and refine your study process with AI-driven suggestions."
  }
];

const HowItWorks = () => {
  // Animation variants for cards
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your note-taking workflow in three seamless steps with cutting-edge AI
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 text-center overflow-hidden group"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon and Emoji */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700/50 to-gray-600/50 flex items-center justify-center border border-gray-600/50 group-hover:border-blue-500/50 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-9 h-9 flex items-center justify-center text-sm shadow-lg">
                    {step.emoji}
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {step.description}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-1/2 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;