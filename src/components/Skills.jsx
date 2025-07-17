import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Blocks, Brain, Sparkles, Code2, Cpu, GitFork, Globe, Layers, Settings, BookOpenCheck, Languages } from 'lucide-react';

// Mapping icon names to components for dynamic rendering
const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  GitFork: GitFork,
  Layers: Layers,
  Globe: Globe,
  Settings: Settings,
  Languages: Languages,
  BookOpenCheck: BookOpenCheck,
  Laptop: Laptop,
  Server: Server,
  Blocks: Blocks,
  Brain: Brain,
  Sparkles: Sparkles,
};

const skillsCategories = [
  {
    title: 'Programming Languages',
    icon: "Code2",
    skills: ['C', 'Python', 'SQL', 'HTML', 'JavaScript', 'React', 'Java (Basic)'],
  },
  {
    title: 'Operating Systems',
    icon: "Cpu",
    skills: ['Windows', 'Linux'],
  },
  {
    title: 'Version Control',
    icon: "GitFork",
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Software Tools',
    icon: "Layers",
    skills: ['VS Code', 'IntelliJ IDEA', 'Atom', 'PyCharm', 'Jupyter Notebook', 'Audacity', 'AI-Powered No-Code Web Development (MERN and C#)'],
  },
  {
    title: 'Industry Software Skills',
    icon: "Globe",
    skills: ['Microsoft Office', 'Adobe Photoshop (Basics)'],
  },
  {
    title: 'General Business Skills',
    icon: "Settings",
    skills: ['Teamwork', 'Management', 'Report Writing', 'Communication'],
  },
  {
    title: 'Languages',
    icon: "Languages",
    skills: ['Bangla (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  },
  {
    title: 'Ongoing Learning',
    icon: "BookOpenCheck",
    skills: ['Node.js (Advanced)', 'Solidity (Intermediate)', 'Next.js (Intermediate)', 'Docker (Intermediate)'],
  },
];


const Skills = () => {
  // Animation variants for individual skill category cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1, // Stagger delay for each card
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for individual skill chips within a card
  const skillChipVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative px-4 md:px-8 py-16
                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 overflow-hidden"
    >
      {/* Animated Background Overlay - Subtle gradients for Web3 feel */}
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
        viewport={{ once: true, amount: 0.3 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid Container with grid-flow-row-dense */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {skillsCategories.map((category, index) => {
          const IconComponent = iconMap[category.icon];
          return (
            <motion.div
              key={category.title}
              className="relative group cursor-pointer p-0.5 rounded-2xl overflow-visible"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.045, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Animated border ring with soft glow and subtle shadow */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-gradient-move z-0 pointer-events-none shadow-2xl"
                initial={{ scale: 0.97 }}
                whileHover={{ scale: 1.09 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              {/* Card content */}
              <div className="relative z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl border border-blue-100 dark:border-yellow-700 group-hover:border-cyan-400 dark:group-hover:border-yellow-400 h-full flex flex-col items-start text-left transition-all duration-300 ease-in-out">
                <div className="flex items-center mb-7">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-900 shadow-xl flex-shrink-0 mr-5 border-2 border-white dark:border-gray-900">
                    {IconComponent && <IconComponent size={36} />}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500 drop-shadow-xl">
                    {category.title}
                  </h3>
                </div>
                <div className="w-full flex flex-col gap-5">
                  {category.skills.map((skill, skillIndex) => {
                    const percentage = Math.floor(80 + Math.random() * 20);
                    return (
                      <motion.div
                        key={skillIndex}
                        className="flex flex-col w-full"
                        variants={skillChipVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-tight">{skill}</span>
                          <span className="text-xs md:text-sm font-bold text-cyan-500 dark:text-yellow-400 bg-cyan-50 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full shadow-sm">{percentage}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 shadow-md"
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

