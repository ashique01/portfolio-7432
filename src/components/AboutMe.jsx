import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import me from "../assets/me.png";

const AboutMe = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement to rotation degrees for tilt effect
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Handle mouse move within image container
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(posX - centerX);
    y.set(posY - centerY);
  };

  // Reset rotation on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16
                 relative overflow-hidden
                 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-900/20 dark:to-purple-900/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/20 to-green-300/20 dark:from-cyan-900/20 dark:to-green-900/20 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 md:p-12
                   bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700
                   transition-all duration-500 ease-out"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Internal Gradient Overlay for Depth */}
        <div
          className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
            mixBlendMode: "soft-light",
          }}
        />

        {/* Image with 3D tilt */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
          className="w-full md:w-1/3 flex justify-center md:justify-end flex-shrink-0 relative p-0 mb-8 md:mb-0 order-first md:order-last cursor-pointer"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full md:rounded-3xl overflow-hidden border-4 border-blue-400 dark:border-yellow-400 shadow-lg mx-auto bg-white/90 dark:bg-gray-900/80">
            <img
              src={me}
              alt="Ashique Murad"
              className="w-full h-full object-cover rounded-full md:rounded-3xl border-none"
              style={{ objectPosition: "center top" }}
              draggable={false}
            />
          </div>
        </motion.div>

        {/* About Text */}
        <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center order-last md:order-first">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight cursor-pointer"
            variants={itemVariants}
            whileHover={{
              rotateX: [0, 5, -5, 0],
              rotateY: [0, -5, 5, 0],
              scale: 1.05,
              textShadow: "0px 0px 15px rgba(250,204,21,0.8)",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-left space-y-4"
            variants={itemVariants}
          >
            <span className="block">
              👋 I’m{" "}
              <span className="font-bold text-blue-600 dark:text-yellow-400">
                Ashique Murad
              </span>
              , a Computer Science graduate from Bangladesh with a wide range of
              technical knowledge. I specialize in building web applications
              with the MERN stack and other modern technologies to solve
              problems and enhance user experience.
            </span>
            <span className="block">
              I’m skilled in{" "}
              <span className="font-bold">
                React, Node.js, MongoDB, Express, and Python
              </span>{" "}
              — and I’m passionate about using code to help businesses grow and
              innovate.
            </span>
            <span className="block">
              Whether it’s a dashboard, booking system, or full-stack e-commerce
              app, I deliver clean, scalable solutions.
            </span>
            <span className="block">Let’s build something awesome together!</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="/me_resume.pdf"
              download="Ashique_Murad_Resume.pdf"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(0,188,212,0.5)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            >
              <span className="inline-block align-middle mr-2">📄</span> Download Resume
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(250,204,21,0.5)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-blue-500 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 font-bold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            >
              <span className="inline-block align-middle mr-2">🔗</span> LinkedIn Profile
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
