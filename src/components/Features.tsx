import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, HelpCircle, FileDigit, FolderKanban, Users2, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "AI Summarization",
      description: "Instantly generate concise summaries of your notes with our advanced AI. Save time and focus on what matters most.",
      bulletPoint: "Generate summaries in seconds",
      iconBgColor: "bg-blue-900/40"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-purple-400" />,
      title: "Quiz & MCQ Generator",
      description: "Convert your notes into interactive quizzes and multiple-choice questions. Test your knowledge and enhance retention.",
      bulletPoint: "Auto-generated from your content",
      iconBgColor: "bg-purple-900/40"
    },
    {
      icon: <FileDigit className="w-6 h-6 text-indigo-400" />,
      title: "PDF AI Integration",
      description: "Upload PDFs and get AI-generated insights. Extract key information, annotate, and study more efficiently.",
      bulletPoint: "Extract insights from documents",
      iconBgColor: "bg-indigo-900/40"
    },
    {
      icon: <FolderKanban className="w-6 h-6 text-green-400" />,
      title: "Smart Organization",
      description: "Keep your notes organized with advanced tagging, intelligent search, and customizable folder hierarchy.",
      bulletPoint: "Tagging, search, and folders",
      iconBgColor: "bg-green-900/40"
    },
    {
      icon: <Users2 className="w-6 h-6 text-orange-400" />,
      title: "Seamless Collaboration",
      description: "Share notes with teammates or students. Collaborate in real-time with comments and annotations.",
      bulletPoint: "Real-time sharing and feedback",
      iconBgColor: "bg-orange-900/40"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Device Sync",
      description: "You can export your notes to various formats and access them anytime, anywhere with real-time synchronization.",
      bulletPoint: "Real-time sync across devices",
      iconBgColor: "bg-cyan-900/40"
    }
  ];

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header with refined animation */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Features of NoteAura
            </span>
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={headerInView ? { width: "50%" } : { width: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how NoteAura revolutionizes your note-taking with cutting-edge AI tools.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => featureRefs.current[index] = el}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <FeatureCard 
                {...feature} 
                className="bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;