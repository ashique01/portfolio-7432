import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const MobileNav = ({ navItems }) => {
  const [showMore, setShowMore] = useState(false);

  const mainItems = navItems.slice(0, 4);
  const extraItems = navItems.slice(4);

  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden flex justify-around p-3 bg-gray-200 dark:bg-gray-800 rounded-t-lg shadow-lg z-40">
      {mainItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="flex flex-col items-center p-2 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon size={20} />
          <span className="text-xs mt-1">{item.name}</span>
        </motion.a>
      ))}

      {/* More Menu Toggle */}
      <div className="relative">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="flex flex-col items-center p-2 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={20} />
          <span className="text-xs mt-1">More</span>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 right-0 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-2"
            >
              {extraItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 p-2 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMore(false)}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileNav;
