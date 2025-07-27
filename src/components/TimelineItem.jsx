import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const TimelineItem = ({ edu, index }) => {
  // Variants for the overall item container (for staggering the timeline as a whole)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.1, // Stagger elements inside the card
      },
    },
  };

  // Variants for elements *inside* the card (e.g., text)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variants for the card itself on desktop, based on position
  const desktopCardVariants = {
    hiddenLeft: { opacity: 0, x: -100, rotateY: -30, scale: 0.9 },
    visibleLeft: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.2 },
    },
    hiddenRight: { opacity: 0, x: 100, rotateY: 30, scale: 0.9 },
    visibleRight: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.2 },
    },
  };

  // Common hover effects for cards
  const cardHoverEffect = {
    scale: 1.03,
    y: -8, // Slight lift
    rotateX: 2, // Subtle 3D tilt
    rotateY: (index % 2 === 0 ? 2 : -2), // Tilt slightly inward/outward based on side
    boxShadow: "0px 20px 50px rgba(0,0,0,0.3)", // Deeper shadow
    borderColor: index % 2 === 0 ? "rgba(66, 153, 225, 0.7)" : "rgba(255, 193, 7, 0.7)", // Dynamic border color
    transition: { type: "spring", stiffness: 200, damping: 15 },
  };


  return (
    <motion.div
      className="w-full relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center mb-8 relative z-10">
        {/* Timeline Node with pulse and glow */}
        <div className="relative flex items-center justify-center w-14 h-14">
          <motion.span
            className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          ></motion.span>
          <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
            <GraduationCap
              size={24}
              className="text-white dark:text-gray-900"
            />
          </div>
        </div>

        <motion.div
          className="mt-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transition-all duration-300 ease-in-out w-full text-center relative overflow-hidden"
          whileHover={cardHoverEffect}
          style={{ transformStyle: "preserve-3d" }}
          variants={textVariants} // This will make the card fade in with the container animation
        >
          {/* Watermark icon */}
          <GraduationCap
            size={80}
            className="absolute opacity-5 -top-6 -right-6 text-blue-400 dark:text-yellow-400 pointer-events-none"
          />
          <motion.h3 variants={textVariants} className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
            {edu.degree}
          </motion.h3>
          <motion.h4 variants={textVariants} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {edu.institution}
          </motion.h4>
          <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
            {edu.period}
          </motion.span>
          <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
            {edu.grade}
          </motion.span>
          <motion.p variants={textVariants} className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {edu.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-start md:items-center w-full my-12 relative">
        {/* Left Side for even index */}
        <div className="hidden md:flex flex-col items-center w-1/2 relative">
          {index % 2 === 0 && (
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transition-all duration-300 ease-in-out max-w-md relative overflow-hidden"
              initial="hiddenLeft"
              whileInView="visibleLeft"
              variants={desktopCardVariants}
              whileHover={cardHoverEffect}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Watermark icon */}
              <GraduationCap
                size={100}
                className="absolute opacity-5 -top-8 -right-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
              />
              <motion.h3 variants={textVariants} className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                {edu.degree}
              </motion.h3>
              <motion.h4 variants={textVariants} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {edu.institution}
              </motion.h4>
              <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                {edu.period}
              </motion.span>
              <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                {edu.grade}
              </motion.span>
              <motion.p variants={textVariants} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Timeline Node with animated pulse and glow */}
        <div className="hidden md:flex items-center justify-center w-14 h-14 absolute left-1/2 transform -translate-x-1/2 z-20">
          <motion.span
            className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          ></motion.span>
          <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
            <GraduationCap
              size={24}
              className="text-white dark:text-gray-900"
            />
          </div>
        </div>

        {/* Right Side for odd index */}
        <div className="hidden md:flex flex-col items-start w-1/2 relative">
          {index % 2 !== 0 && (
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transition-all duration-300 ease-in-out max-w-md ml-auto relative overflow-hidden"
              initial="hiddenRight"
              whileInView="visibleRight"
              variants={desktopCardVariants}
              whileHover={cardHoverEffect}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Watermark icon */}
              <GraduationCap
                size={100}
                className="absolute opacity-5 -top-8 -left-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
              />
              <motion.h3 variants={textVariants} className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                {edu.degree}
              </motion.h3>
              <motion.h4 variants={textVariants} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {edu.institution}
              </motion.h4>
              <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                {edu.period}
              </motion.span>
              <motion.span variants={textVariants} className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                {edu.grade}
              </motion.span>
              <motion.p variants={textVariants} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;