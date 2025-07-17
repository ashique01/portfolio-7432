import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <header className="sticky top-4 z-50 flex justify-between items-center px-4 w-full">
    {/* Brand/Signature on the left */}
    <motion.a
      href="#home" // Link to the home/hero section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="nav-signature-logo text-gray-900 dark:text-yellow-400 transition-colors duration-300" // Apply signature class and existing colors
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
      className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md text-gray-900 dark:text-yellow-400 shadow-lg border border-white/30 dark:border-gray-700/30 hover:scale-105 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  </header>
);

export default DarkModeToggle;
