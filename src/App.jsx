import React, { useState, useEffect } from 'react';
import { Home, User, FolderKanban, Code, Mail, GraduationCap, Briefcase } from 'lucide-react';
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

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-yellow-400 font-inter transition-colors duration-500">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <HeroSection />
      <AboutMe/>
      <Experience/>
      <Education/>
      <MyProject />
      <Skills />
      <Contact/>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

export default App;
