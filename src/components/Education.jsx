import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";
import { Sparkles } from "lucide-react";

const educationEntries = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University (UIU)",
    period: "June 2018 - June 2023",
    grade: "CGPA: 3.09 out of 4.00",
    description: `Focused on core computer science principles, software engineering, and artificial intelligence. Completed projects in blockchain development, machine learning, and web application security.`,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Science College",
    period: "July 2015 - July 2017",
    grade: "GPA: 4.50 out of 5.00",
    description: `Studied Science group with a strong emphasis on Physics, Chemistry, and Mathematics. Developed foundational analytical and problem-solving skills. Participated in various science clubs and competitions.`,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shaheed Police Smrity College",
    period: "January 2013 - May 2015",
    grade: "GPA: 5.00 out of 5.00",
    description: `Completed secondary education, building a strong academic base across various subjects. Engaged in extracurricular activities including debate and programming contests.`,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen relative px-4 md:px-8 py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 overflow-x-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/30 dark:to-purple-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/30 to-green-200/30 dark:from-cyan-900/30 dark:to-green-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Sparkles className="inline-block mr-1 sm:mr-2 text-yellow-400 dark:text-yellow-300 animate-pulse" size={30} sm:size={40} />
        My Academic Journey
        <Sparkles className="inline-block ml-1 sm:ml-2 text-yellow-400 dark:text-yellow-300 animate-pulse" size={30} sm:size={40} />
      </motion.h2>

      <Timeline>
        {educationEntries.map((edu, index) => (
          <TimelineItem key={index} edu={edu} index={index} />
        ))}
      </Timeline>
    </section>
  );
};

export default Education;