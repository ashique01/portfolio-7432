import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};

const iconFloat = {
  animate: {
    y: [0, -6, 0], // gentle floating up and down
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const DesktopNav = ({ navItems }) => {
  // Get current path from URL
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav
      className="hidden md:fixed md:top-1/2 md:right-4 md:-translate-y-1/2 md:flex md:flex-col md:space-y-4 md:p-4 md:bg-gray-200 md:dark:bg-gray-800 md:rounded-full md:shadow-lg md:z-40"
      aria-label="Primary navigation"
    >
      {navItems.map((item, index) => {
        const isActive = item.href === currentPath;

        return (
          <motion.a
            key={item.name}
            href={item.href}
            className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400
              ${
                isActive
                  ? "bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-lg"
                  : "text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700"
              }
            `}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 12px rgba(14, 165, 233, 0.7)",
              color: "#0ea5e9",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={navVariants}
            title={item.name}
            aria-label={item.name}
            aria-current={isActive ? "page" : undefined}
          >
            <motion.span variants={iconFloat} animate="animate" className="flex items-center justify-center">
              <item.icon size={24} />
            </motion.span>
          </motion.a>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
