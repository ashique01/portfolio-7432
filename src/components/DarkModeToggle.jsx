import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure AnimatePresence is imported
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // Variants for the icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.5, rotate: 90, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-4 z-50 flex justify-between items-center px-4 w-full">
      {/* Brand/Signature on the left */}
      <motion.a
        href="#home" // Link to the home/hero section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="nav-signature-logo text-gray-900 dark:text-yellow-400 transition-colors duration-300"
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontStyle: 'italic',
          fontSize: '2.25rem', // Equivalent to text-3xl
          fontWeight: 'bolder',
          lineHeight: 1,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ashique
      </motion.a>

      {/* Dark Mode Toggle Button on the right */}
      <motion.button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md text-gray-900 dark:text-yellow-400 shadow-lg border border-white/30 dark:border-gray-700/30 hover:scale-105 transition-all duration-300 relative overflow-hidden" // Added relative and overflow-hidden
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}> {/* mode="wait" ensures one icon exits before the other enters */}
          {darkMode ? (
            <motion.div
              key="moon-icon" // Unique key for AnimatePresence
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center" // Position to fill button
            >
              <Moon size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="sun-icon" // Unique key for AnimatePresence
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center" // Position to fill button
            >
              <Sun size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </header>
  );
};

export default DarkModeToggle;
