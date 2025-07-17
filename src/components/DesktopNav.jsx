import React from 'react';
import { motion } from 'framer-motion';

const DesktopNav = ({ navItems }) => (
  <nav className="hidden md:fixed md:top-1/2 md:right-4 md:-translate-y-1/2 md:flex md:flex-col md:space-y-4 md:p-4 md:bg-gray-200 md:dark:bg-gray-800 md:rounded-full md:shadow-lg md:z-40">
    {navItems.map((item) => (
      <motion.a
        key={item.name}
        href={item.href}
        className="p-3 rounded-full text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={item.name}
      >
        <item.icon size={24} />
      </motion.a>
    ))}
  </nav>
);

export default DesktopNav;
