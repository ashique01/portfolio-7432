import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const dropdownVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.07, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: 10, transition: { when: "afterChildren" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

const iconFloatHover = {
  whileHover: {
    y: [0, -4, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const MobileNav = ({ navItems }) => {
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);

  const mainItems = navItems.slice(0, 4);
  const extraItems = navItems.slice(4);

  // Get current URL path
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowMore(false);
      }
    };
    if (showMore) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMore]);

  // Optional: Close dropdown on resize or scroll
  useEffect(() => {
    const closeDropdown = () => setShowMore(false);
    window.addEventListener("resize", closeDropdown);
    window.addEventListener("scroll", closeDropdown);
    return () => {
      window.removeEventListener("resize", closeDropdown);
      window.removeEventListener("scroll", closeDropdown);
    };
  }, []);

  // Helper for active styling
  const getActiveClass = (href) =>
    href === currentPath
      ? "bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-lg"
      : "";

  return (
    <nav
      ref={containerRef}
      className="fixed bottom-0 left-0 w-full md:hidden flex justify-around p-3 bg-gray-200 dark:bg-gray-800 rounded-t-lg shadow-lg z-40"
      aria-label="Mobile navigation"
    >
      {mainItems.map((item) => {
        const activeClass = getActiveClass(item.href);

        return (
          <motion.a
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 ${activeClass}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...iconFloatHover}
            aria-label={item.name}
            aria-current={activeClass ? "page" : undefined}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </motion.a>
        );
      })}

      {/* More Menu Toggle */}
      <div className="relative">
        <motion.button
          onClick={() => setShowMore((prev) => !prev)}
          className="flex flex-col items-center p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-haspopup="true"
          aria-expanded={showMore}
          aria-controls="more-menu"
          aria-label="Toggle more menu"
        >
          <Menu size={20} />
          <span className="text-xs mt-1">More</span>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              id="more-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 right-0 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-2 w-40"
              role="menu"
            >
              {extraItems.map((item) => {
                const activeClass = getActiveClass(item.href);

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 p-2 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 ${activeClass}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowMore(false)}
                    variants={itemVariants}
                    role="menuitem"
                    aria-current={activeClass ? "page" : undefined}
                  >
                    <item.icon size={16} />
                    <span className="text-sm">{item.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileNav;
