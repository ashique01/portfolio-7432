import React from 'react';
import {
  Code2, Cpu, GitFork, Globe, Settings, Languages,
  Atom, Database, Monitor, Terminal, Laptop, Book, Mic, Sparkles, Bot,
  FileText, Image, Users, Briefcase, FileEdit, MessageSquare, Package, SquareStack,
} from 'lucide-react';

const skillIcons = {
  'React': Atom,
  'Python': Code2,
  'SQL': Database,
  'MongoDB': Database,
  'HTML': Code2,
  'JavaScript': Code2,
  'Java (Basic)': Code2,
  'C': Code2,
  'C#': Code2,
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
  'Next.js (Basic)': Atom,
  'Docker (Intermediate)': Package,
  'ASP.Net Core': Cpu,
};

const skillsCategories = [
  {
    title: 'Frontend',
    icon: Atom,
    skills: ['React', 'HTML', 'JavaScript', 'Next.js (Basic)'],
  },
  {
    title: 'Backend',
    icon: Cpu,
    skills: ['Node.js (Advanced)', 'ASP.Net Core', 'AI No-Code (MERN & C#)'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL', 'MongoDB', 'Jupyter Notebook'],
  },
  {
    title: 'Version Control & Collaboration',
    icon: GitFork,
    skills: ['Git', 'GitHub', 'GitHub Copilot'],
  },
  {
    title: 'IDEs & Software Tools',
    icon: Laptop,
    skills: ['VS Code', 'IntelliJ IDEA', 'Atom', 'PyCharm', 'Audacity', 'Docker (Intermediate)'],
  },
  {
    title: 'Business & Communication Skills',
    icon: Settings,
    skills: ['Teamwork', 'Management', 'Report Writing', 'Communication'],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'Python', 'Java (Basic)', 'C', 'C#'],
  },
  {
    title: 'Spoken Languages',
    icon: Languages,
    skills: ['Bangla (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  },
  {
    title: 'Others',
    icon: Globe,
    skills: ['Windows', 'Linux', 'Microsoft Office', 'Adobe Photoshop (Basics)', 'ChatGPT', 'Gemini'],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen bg-blue-100 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 flex flex-col items-center justify-center px-4 py-20"
  >
    <h2
      className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-yellow-400 dark:to-orange-500 leading-tight max-w-4xl"
    >
      My Skills
    </h2>

    <div
      className="w-full max-w-7xl bg-white/95 dark:bg-gray-900/90 rounded-3xl shadow-lg dark:shadow-yellow-900/40 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {skillsCategories.map(({ title, icon: Icon, skills }) => (
        <div key={title} className="flex flex-col">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 dark:from-yellow-400 dark:to-orange-500 text-white shadow-lg">
              <Icon size={16} />
            </div>
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-yellow-400 dark:to-orange-500 tracking-wide">
              {title}
            </h3>
          </div>

          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => {
              const SkillIcon = skillIcons[skill];
              return (
                <li
                  key={skill}
                  className="flex items-center gap-2 bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 cursor-default transition transform hover:scale-105 hover:shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 select-none"
                  title={skill}
                >
                  {SkillIcon && (
                    <SkillIcon
                      size={16}
                      className="text-cyan-600 dark:text-yellow-400"
                    />
                  )}
                  <span className="text-gray-900 dark:text-yellow-400 font-semibold text-sm">
                    {skill}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
