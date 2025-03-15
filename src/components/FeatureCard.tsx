import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bulletPoint: string;
  iconBgColor: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, bulletPoint, iconBgColor, className }: FeatureCardProps) => {
  const [hovered, setHovered] = useState(false);

  const getColorFromBg = () => {
    if (iconBgColor.includes('blue')) return [[0, 115, 230], [0, 172, 255]];
    if (iconBgColor.includes('purple')) return [[128, 0, 255], [170, 0, 255]];
    if (iconBgColor.includes('indigo')) return [[75, 0, 130], [108, 0, 187]];
    if (iconBgColor.includes('green')) return [[0, 128, 0], [0, 179, 60]];
    if (iconBgColor.includes('orange')) return [[255, 140, 0], [255, 179, 71]];
    if (iconBgColor.includes('cyan')) return [[0, 255, 255], [71, 255, 255]];
    return [[0, 100, 255], [71, 145, 255]];
  };

  return (
    <div 
      className="relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="h-full"
      >
        <Card 
          className={`h-full relative overflow-hidden border border-gray-800/50 bg-gray-950/80 backdrop-blur-md transition-all duration-300 hover:bg-gray-900/90 hover:shadow-xl hover:shadow-blue-500/10 ${className}`}
        >
          {/* Background effect container */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }} // Reduced opacity for better text visibility
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-0" // Changed z-index to 0 to sit behind content
              >
                <CanvasRevealEffect
                  animationSpeed={2.5}
                  containerClassName={iconBgColor.replace('bg-', 'bg-')}
                  colors={getColorFromBg()}
                  showGradient={true}
                  opacities={[0.2, 0.4]} // Adjusted opacities for better visibility
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content container */}
          <div className="p-6 flex flex-col h-full relative z-10"> {/* Increased z-index */}
            <div className={`w-14 h-14 rounded-xl ${iconBgColor} flex items-center justify-center mb-5 shadow-md`}>
              {icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              {description}
            </p>
            
            <div className="border-t border-gray-700/50 pt-4 mt-auto">
              <div className="flex items-center text-gray-400">
                <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{bulletPoint}</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default FeatureCard;