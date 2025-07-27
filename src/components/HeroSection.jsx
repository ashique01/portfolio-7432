import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles, ChevronDown } from "lucide-react";
import me from "../assets/me.png"; // Assuming 'me.png' is still used
const generateParticles = (count) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 6 + 3;
    const blur1 = Math.random() * 2;
    const blur2 = Math.random();

    particles.push(
      <motion.div
        key={i}
        className="absolute rounded-full bg-white dark:bg-gray-300 opacity-0 particle"
        initial={{
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
          scale: Math.random() * 0.5 + 0.2,
          filter: `blur(${blur1}px)`,
        }}
        animate={{
          opacity: [0, Math.random() * 0.6 + 0.2, 0],
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
          scale: Math.random() * 0.8 + 0.3,
          filter: `blur(${blur2}px)`,
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          delay: Math.random() * 8,
          ease: "linear",
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          zIndex: 0,
        }}
      />
    );
  }
  return particles;
};
const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(70)); // Generate more particles
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 text-center space-y-6 sm:space-y-8 md:space-y-10 overflow-hidden
                 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-black
                 animate-gradient-shift"
      aria-label="Hero Section"
    >
      {/* Custom Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles}
      </div>

      {/* Dynamic Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Main Content Wrapper for Z-index */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Badge + Profile Image */}
        <motion.div
          className="relative flex flex-col items-center justify-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
        >
          {/* Badge */}
          <div
            className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white dark:from-yellow-500 dark:to-orange-400 px-4 py-1.5 rounded-full shadow-lg text-xs sm:text-sm font-semibold tracking-wide transform hover:scale-105 transition-transform duration-300"
            role="status"
            aria-live="polite"
          >
            <Sparkles size={16} className="animate-ping-slow" />
            <span>Crafting Code & Creating Impact</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
          }}
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="my-4 sm:my-6 md:my-8 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-semibold italic tracking-wide"
        >
          CS Graduate | Full-Stack Developer | AI & Automation Enthusiast
        </motion.p>

        {/* Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 text-gray-800 dark:text-yellow-400 h-12 tracking-wide"
          aria-label="Professional Roles Typewriter"
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

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-3xl mb-4 text-gray-700 dark:text-gray-300 px-2 leading-relaxed tracking-wide"
        >
          I specialize in backend systems, AI integrations, and modern web apps
          using Node.js, Python, and React — all crafted to deliver real-world
          impact.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
          className="relative italic text-gray-700 dark:text-yellow-300 text-lg sm:text-xl max-w-xs sm:max-w-sm mx-auto mb-8 px-6"
          style={{ fontFamily: "'Georgia', serif", fontWeight: "500" }}
        >
          “The show must go on.”
          <motion.span
            className="absolute left-6 bottom-0 h-1 rounded-full
                           bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500
                           origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
          >
            <motion.span
              className="absolute top-0 left-0 h-full w-20 bg-white opacity-30 rounded-full pointer-events-none"
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

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2, type: "spring", stiffness: 100 }}
          className="flex flex-wrap justify-center gap-6 max-w-md mx-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 24px rgba(14, 165, 233, 0.8)", // sky-500 glow
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center px-10 py-4 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 font-extrabold shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300 text-lg tracking-wide"
            aria-label="View Projects"
          >
            🚀 View Projects
          </motion.a>

          <motion.a
            href="mailto:ashiquemurad@gmail.com"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 24px rgba(34, 197, 94, 0.8)", // green-500 glow
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center px-10 py-4 rounded-full bg-green-500 text-white font-extrabold hover:bg-green-600 transition-all duration-300 text-lg tracking-wide shadow-xl"
            aria-label="Hire Me"
            rel="noopener noreferrer"
          >
            💼 Hire Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="mt-10"
      >
        <a href="#about" aria-label="Scroll to About Section">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-3 rounded-full bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
