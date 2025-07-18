import React, { useState, useEffect } from 'react';
import { Home, User, FolderKanban, Code, Mail, GraduationCap, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './components/DarkModeToggle';
import HeroSection from './components/HeroSection';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import AboutMe from './components/AboutMe';
import Experience from './components/Experince'; 
import Education from './components/Education';
import MyProject from './components/MyProject';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Projects', icon: FolderKanban, href: '#projects' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : true;
  });
  const [showPageTransition, setShowPageTransition] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    // Trigger the full-page transition animation
    setShowPageTransition(true);

    // After a short delay, toggle dark mode and then hide the animation
    setTimeout(() => {
      setDarkMode(prevMode => !prevMode);
      // Give some time for the theme change to apply visually before hiding the overlay
      setTimeout(() => {
        setShowPageTransition(false);
      }, 500); // Duration for the animation elements to be visible after theme change
    }, 300); // Delay before changing theme and starting exit animation
  };

  // Variants for the full-page transition overlay
  const pageTransitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeIn" } },
  };

  // Variants for sun/moon within the transition overlay
  const sunMoonVariants = {
    hidden: { opacity: 0, scale: 0, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 10 } },
    exit: { opacity: 0, scale: 0.5, y: 50, transition: { duration: 0.5 } },
  };

  // Variants for stars within the transition overlay
  const starsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1, // Stagger stars
        duration: 0.5,
        stiffness: 150,
        damping: 10,
        type: "spring",
      }
    }),
    exit: { opacity: 0, scale: 0, transition: { duration: 0.6 } },
  };

  // Variants for fog/cloud within the transition overlay
  const fogVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3, transition: { duration: 1.0, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 1.0, ease: "easeIn" } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-yellow-400 font-inter transition-colors duration-500">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />

      {/* Full-page transition animation overlay */}
      <AnimatePresence>
        {showPageTransition && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            variants={pageTransitionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              // Background color is now always black for the transition overlay
              backgroundColor: 'rgba(0,0,0,0.8)', // Always black background
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Sun/Moon element */}
            <motion.div
              // Key changes based on the *current* darkMode state to trigger AnimatePresence
              key={darkMode ? "sun-page-anim" : "moon-page-anim"}
              variants={sunMoonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-32 h-32 rounded-full"
              style={{
                // Color based on the *current* darkMode state for the animating sun/moon
                backgroundColor: darkMode ? '#FACC15' : '#4F46E5', // Yellow for sun (when currently dark), Indigo for moon (when currently light)
                boxShadow: darkMode ? '0 0 50px #FACC15' : '0 0 50px #4F46E5',
              }}
            >
              {/* Stars for night transition (appear when going to dark mode, i.e., current mode is light) */}
              {!darkMode && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={starsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    ></motion.div>
                  ))}
                </>
              )}
            </motion.div>

            {/* Fog/Cloud effect */}
            <motion.div
              variants={fogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
              style={{
                background: darkMode
                  ? 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)'
                  : 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 100%)',
              }}
            ></motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/*
        IMPORTANT: For continuous scroll animations, ensure that in each of these components
        (HeroSection, AboutMe, Experience, Education, MyProject, Contact),
        the main `motion.div` or `motion.section` that has `whileInView` also has:
        viewport={{ once: false, amount: 0.X }}
        (where 0.X is a value like 0.1, 0.3, or 0.5 depending on when you want the animation to trigger)
      */}
      <HeroSection />
      <AboutMe/>
      <Experience/>
      <Education/>
      <MyProject />
      <Skills />
      <Contact/>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
      {/* Simplified Footer Component - Moved inside App.js for direct modification */}
      <footer className="py-4 text-center text-gray-700 dark:text-gray-300">
        <p className="text-sm">Developed by Ashique Murad</p>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
