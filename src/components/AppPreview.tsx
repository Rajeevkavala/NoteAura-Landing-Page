import { motion, useMotionValue, useTransform, useSpring, easeOut } from 'framer-motion';

const AppPreview = ({ scrollY }) => {
  // Optimize motion value handling
  const scrollYMotionValue = useMotionValue(scrollY || 0);
  
  // Use memoized transform and spring for better performance
  const y = useTransform(scrollYMotionValue, [0, 300], [0, 50], {
    clamp: true,
    ease: easeOut
  });
  const smoothY = useSpring(y, {
    damping: 25,
    stiffness: 120,
    mass: 0.8
  });

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ y: smoothY }}
      className="w-full lg:w-1/2 flex justify-center perspective-1000"
    >
      <div className="mockup-wrapper w-full max-w-[640px] relative px-4">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
        <motion.div 
          className="absolute top-[-10%] right-0 w-32 h-32 rounded-full bg-blue-400/20 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[-5%] left-0 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="mockup relative bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md border border-gray-700/30 rounded-2xl overflow-hidden shadow-xl shadow-black/20 ring-1 ring-white/5">
          {/* Improved browser chrome */}
          <div className="browser-header border-b border-gray-700/40 bg-gray-900/80 px-4 py-3 flex items-center gap-3">
            <div className="flex space-x-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-400/90" 
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-400/90" 
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-400/90" 
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="text-center flex-grow">
              <span className="text-sm text-gray-200 font-medium bg-gray-800/50 px-3 py-1 rounded-full">NoteAura Dashboard</span>
            </div>
          </div>

          {/* Optimized app content */}
          <div className="app-content p-6 bg-gray-900/95">
            <div className="grid grid-cols-3 gap-6 h-[420px]">
              {/* Enhanced Notes Editor */}
              <motion.div 
                className="col-span-2 bg-gray-800/80 rounded-xl p-5 border border-gray-700/40 shadow-inner"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow shadow-blue-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow shadow-purple-500/50" />
                  </div>
                  <h3 className="text-gray-100 font-semibold text-sm">Notes Editor</h3>
                </div>
                <div className="space-y-4">
                  {[1, 0.9, 0.7, 0.95, 0.6, 0.85].map((width, i) => (
                    <motion.div
                      key={i}
                      className="h-2 bg-gray-600/60 rounded-full"
                      style={{ width: `${width * 100}%` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Improved AI Features */}
              <div className="flex flex-col gap-6">
                <motion.div 
                  className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-xl p-5 border border-purple-700/20 h-1/2 shadow-inner"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.svg 
                      className="text-purple-300" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      whileHover={{ rotate: 90 }}
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </motion.svg>
                    <h3 className="text-purple-100 font-semibold text-sm">AI Summary</h3>
                  </div>
                  <div className="space-y-3">
                    {[1, 0.85, 0.65].map((width, i) => (
                      <div
                        key={i}
                        className="h-2 bg-purple-600/50 rounded-full"
                        style={{ width: `${width * 100}%` }}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 rounded-xl p-5 border border-indigo-700/20 h-1/2 shadow-inner"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.svg 
                      className="text-indigo-300" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="4"/>
                    </motion.svg>
                    <h3 className="text-indigo-100 font-semibold text-sm">MCQ Generator</h3>
                  </div>
                  <div className="space-y-4">
                    {[0.9, 0.75, 0.85].map((width, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <motion.div 
                          className={`w-3 h-3 rounded-full border border-indigo-500/50 ${i === 1 ? 'bg-indigo-500/70' : ''}`}
                          whileHover={{ scale: 1.2 }}
                        />
                        <div 
                          className="h-2 bg-indigo-600/50 rounded-full" 
                          style={{ width: `${width * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced PDF Insights */}
              <motion.div 
                className="col-span-3 bg-gray-800/80 rounded-xl p-5 border border-gray-700/40 flex items-center shadow-inner"
                whileHover={{ scale: 1.01 }}
              >
                <motion.div 
                  className="text-red-400 mr-4" 
                  whileHover={{ rotate: 10 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                  </svg>
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-gray-100 font-semibold text-sm mb-2">PDF AI Insights</h3>
                  <div className="h-2 bg-gray-600/60 rounded-full w-full" />
                </div>
                <motion.div 
                  className="ml-4 p-1.5 rounded-full bg-blue-500/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-300">
                    <path d="m5 12 5 5 9-9"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppPreview;