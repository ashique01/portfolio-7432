import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center space-y-6 sm:space-y-8 md:space-y-10"
  >
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center space-x-2 mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white dark:from-yellow-500 dark:to-orange-400 px-4 py-1.5 rounded-full shadow-lg text-xs sm:text-sm font-semibold tracking-wide"
    >
      <Sparkles size={16} className="animate-ping-slow" />
      <span>Crafting Code & Creating Impact</span>
    </motion.div>

    {/* Name Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 15,
        rotateY: -10,
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-cyan-500 to-blue-600 
                 dark:from-yellow-400 dark:to-orange-500 
                 transform-gpu transition-transform duration-300 cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      Hi, I'm Ashique Murad
    </motion.h1>

    {/* Typewriter */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 text-gray-800 dark:text-yellow-400 h-12 tracking-wide"
    >
      <Typewriter
        words={[
          "Backend Developer",
          "Python & Node.js Enthusiast",
          "Telegram Bot Creator",
          "AI Tools Builder",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-3xl mb-6 text-gray-700 dark:text-gray-300 px-2 leading-relaxed tracking-wide"
    >
      I'm a tech lover passionate about solving real-world problems through
      technology. Skilled in backend development, AI tools, and interactive
      Telegram bots — I thrive on building impactful digital solutions that make
      a difference.
    </motion.p>

    <motion.blockquote
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: false, amount: 0.5 }} // Continuous animation for the quote
      className="relative italic text-gray-700 dark:text-yellow-300 text-lg sm:text-xl max-w-xs sm:max-w-sm mx-auto mb-8 px-6"
      style={{ fontFamily: "'Georgia', serif", fontWeight: "500" }}
    >
      “The show must go on.”
      {/* Animated Underline with Glow & Shimmer */}
      <motion.span
        className="absolute left-6 bottom-0 h-1 rounded-full
                       bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500
                       origin-left"
        initial={{ scaleX: 0, boxShadow: "0 0 0px rgba(0,0,0,0)" }}
        animate={{
          scaleX: 1,
          boxShadow: [
            "0 0 8px rgba(0, 255, 255, 0.6)",
            "0 0 15px rgba(0, 255, 255, 1)",
            "0 0 8px rgba(0, 255, 255, 0.6)",
          ],
        }}
        transition={{
          duration: 1.2,
          delay: 1.3,
          ease: "easeInOut",
          boxShadow: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
          },
        }}
      >
        {/* Shimmer Effect */}
        <motion.span
          className="absolute top-0 left-0 h-full w-20 bg-white opacity-30 rounded-full
                         pointer-events-none"
          initial={{ x: -40 }}
          animate={{ x: "120%" }}
          transition={{
            duration: 2.5,
            delay: 2.3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ filter: "blur(8px)" }}
        />
      </motion.span>
    </motion.blockquote>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: false, amount: 0.3 }} // Continuous animation
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
    >
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 18px rgba(0, 255, 255, 0.85)", // More intense glow
          y: -2, // Subtle lift
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 font-bold shadow-xl // Increased padding, bolder font, larger shadow
                       hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300 text-base sm:text-lg tracking-wide transform"
      >
        🚀 View Projects
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 18px rgba(255, 215, 0, 0.85)", // More intense glow
          y: -2, // Subtle lift
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 font-bold // Increased padding, bolder font
                       hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg tracking-wide transform"
      >
        📬 Contact Me
      </motion.a>
    </motion.div>
  </section>
);

export default HeroSection;
