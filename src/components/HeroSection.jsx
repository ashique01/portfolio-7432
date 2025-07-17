import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => (
  <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500"
    >
      Hi, I'm Ashique Murad
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-yellow-400 h-12"
    >
      <Typewriter
        words={[
          'Backend Developer',
          'Python & Node.js Enthusiast',
          'Telegram Bot Creator',
          'AI Tools Builder',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300"
    >
      I'm a tech lover passionate about solving real-world problems through technology. Skilled in backend development, AI tools, and interactive Telegram bots — I thrive on building impactful digital solutions that make a difference. Let’s innovate and create the future together.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex space-x-4"
    >
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300"
      >
        View Projects
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
      >
        Contact Me
      </motion.a>
    </motion.div>
  </section>
);

export default HeroSection;
