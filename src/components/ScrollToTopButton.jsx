import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
    hover: { scale: 1.1, boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)" },
    tap: { scale: 0.9 },
    flyAway: { opacity: 0, y: -200, scale: 0.5, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-50 p-4 rounded-full
                     bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500
                     text-white dark:text-gray-900 shadow-lg cursor-pointer
                     overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="flyAway"
          whileHover="hover"
          whileTap="tap"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-700 dark:from-yellow-600 dark:to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></span>
          <span className="relative z-10 flex items-center justify-center">
            <ArrowUp size={28} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
