import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Cpu, GitFork, Layers, Globe, Settings, Languages, BookOpenCheck,
  Atom, Database, Monitor, Terminal, Laptop, Book, Mic, Sparkles, Bot,
  FileText, Image, Users, Briefcase, FileEdit, MessageSquare, Package, SquareStack,
} from 'lucide-react';

// New mapping for individual skill icons
const skillIcons = {
  'React': Atom,
  'Python': Code2,
  'SQL': Database,
  'HTML': Code2,
  'JavaScript': Code2,
  'Java (Basic)': Code2,
  'C': Code2,
  'Windows': Monitor,
  'Linux': Terminal,
  'Git': GitFork,
  'GitHub': GitFork,
  'VS Code': Laptop,
  'IntelliJ IDEA': Laptop,
  'Atom': Laptop,
  'PyCharm': Laptop,
  'Jupyter Notebook': Book,
  'Audacity': Mic,
  'AI No-Code (MERN & C#)': Sparkles,
  'ChatGPT': Bot,
  'Gemini': Bot,
  'GitHub Copilot': Bot,
  'Microsoft Office': FileText,
  'Adobe Photoshop (Basics)': Image,
  'Teamwork': Users,
  'Management': Briefcase,
  'Report Writing': FileEdit,
  'Communication': MessageSquare,
  'Node.js (Advanced)': SquareStack,
  'Solidity (Intermediate)': SquareStack,
  'Next.js (Intermediate)': Atom,
  'Docker (Intermediate)': Package,
};

const skillsCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'Python', 'SQL', 'HTML', 'JavaScript', 'React', 'Java (Basic)'],
  },
  {
    title: 'Operating Systems',
    icon: Cpu,
    skills: ['Windows', 'Linux'],
  },
  {
    title: 'Version Control',
    icon: GitFork,
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Software Tools',
    icon: Layers,
    skills: ['VS Code', 'IntelliJ IDEA', 'Atom', 'PyCharm', 'Jupyter Notebook', 'Audacity', 'AI No-Code (MERN & C#)', 'ChatGPT', 'Gemini', 'GitHub Copilot'],
  },
  {
    title: 'Industry Software Skills',
    icon: Globe,
    skills: ['Microsoft Office', 'Adobe Photoshop (Basics)'],
  },
  {
    title: 'General Business Skills',
    icon: Settings,
    skills: ['Teamwork', 'Management', 'Report Writing', 'Communication'],
  },
  {
    title: 'Languages',
    icon: Languages,
    skills: ['Bangla (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  },
  {
    title: 'Ongoing Learning',
    icon: BookOpenCheck,
    skills: ['Node.js (Advanced)', 'Solidity (Intermediate)', 'Next.js (Intermediate)', 'Docker (Intermediate)'],
  },
];

const Skills = () => {
  // Animation variants for the main container card
  const containerCardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotateX: 10 }, // More pronounced initial state
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.0, // Longer duration for main card
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1, // Stagger categories inside the main card
      },
    },
  };

  // Animation variants for each skill category row
  const categoryRowVariants = {
    hidden: { opacity: 0, x: -80, rotateZ: -10 }, // More pronounced slide and slight rotation
    visible: {
      opacity: 1,
      x: 0,
      rotateZ: 0,
      transition: {
        type: "spring", // Spring for a more dynamic feel
        stiffness: 150,
        damping: 12,
      }
    },
  };

  // Animation variants for individual skill chips
  const skillChipVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring", // Use spring for a bouncier effect
        stiffness: 200,
        damping: 15,
      }
    },
    hover: {
      scale: 1.1,
      y: -3, // Slight lift
      boxShadow: "0px 4px 10px rgba(0,188,212,0.3)", // Subtle glow on hover
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      y: 0,
      boxShadow: "0px 2px 5px rgba(0,188,212,0.2)",
    }
  };

  // Animation variants for the category icon itself
  const categoryIconVariants = {
    initial: { rotate: 0 }, // Initial state for the icon
    hover: { rotate: 45, transition: { duration: 0.3, ease: "easeOut" } }, // Rotate 45 degrees on hover
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative px-4 md:px-8 py-16
                 bg-blue-100 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 overflow-hidden" // Changed light mode background to solid blue-100
    >
      {/* Animated Background Overlay - Subtle gradients (kept for subtle effect, but main background is solid) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/30 dark:to-purple-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/30 to-green-200/30 dark:from-cyan-900/30 dark:to-green-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center
                   bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} // Changed to once: false
      >
        My Skills
      </motion.h2>

      {/* Main Skills Container Card */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-6 md:p-10 rounded-2xl
                   bg-white/90 dark:bg-gray-900/70 shadow-2xl backdrop-blur-lg
                   border border-blue-100 dark:border-yellow-700
                   transform hover:scale-[1.005] transition-transform duration-300 ease-in-out" // Card background adjusted for light mode, added hover border
        variants={containerCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Changed to once: false
        whileHover={{
          borderColor: '#00BCD4', // Cyan border on hover for light mode
          boxShadow: "0px 10px 25px rgba(0,0,0,0.25), 0px 0px 15px rgba(0,188,212,0.3)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"> {/* Grid for categories inside the card */}
          {skillsCategories.map((category, index) => {
            const CategoryIconComponent = category.icon; // Directly use the component from category.icon
            return (
              <motion.div
                key={category.title}
                className="flex flex-col items-start" // Flex column for icon/title then skills
                variants={categoryRowVariants} // Apply category specific animation
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }} // Changed to once: false
              >
                {/* Category Icon and Title */}
                <div className="flex items-center mb-3"> {/* Smaller margin-bottom */}
                  <motion.div // Added motion.div for the icon container
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-900 mr-3 shadow-md flex-shrink-0"
                    variants={categoryIconVariants} // Apply icon specific animation variants
                    initial="initial" // Set initial state
                    whileHover="hover" // Apply hover state
                  >
                    {CategoryIconComponent && <CategoryIconComponent size={24} />} {/* Smaller icon size */}
                  </motion.div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500"> {/* Smaller title text */}
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <ul className="w-full flex flex-wrap gap-2 pl-13"> {/* Adjusted padding for alignment with icon */}
                  {category.skills.map((skill, idx) => {
                    const SkillIconComponent = skillIcons[skill]; // Get individual skill icon
                    return (
                      <motion.li
                        key={idx}
                        className="bg-blue-100/70 dark:bg-gray-700/70 text-blue-800 dark:text-yellow-300
                                   px-3 py-1 rounded-full text-xs font-medium shadow-sm
                                   border border-blue-200/50 dark:border-gray-600/50
                                   flex items-center gap-1 transition-colors duration-200 cursor-pointer" // Added flex items-center gap-1
                        variants={skillChipVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: false, amount: 0.5 }} // Changed to once: false
                      >
                        {SkillIconComponent && <SkillIconComponent size={14} className="flex-shrink-0" />} {/* Individual skill icon */}
                        {skill}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
