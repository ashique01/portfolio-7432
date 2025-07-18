import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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
        Education
      </motion.h2>

      <div className="relative z-10 max-w-5xl mx-auto mt-12">
        {/* Timeline vertical line with animated gradient and pulse */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-0">
          <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move rounded-full shadow-2xl animate-pulse"></div>
        </div>

        {educationEntries.map((edu, index) => (
          <motion.div
            key={index}
            className="w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col items-center mb-8 relative z-10">
              {/* Timeline Node with pulse and glow */}
              <div className="relative flex items-center justify-center w-14 h-14">
                <span className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"></span>
                <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
                  <GraduationCap
                    size={24}
                    className="text-white dark:text-gray-900"
                  />
                </div>
              </div>

              <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out w-full text-center relative overflow-hidden">
                {/* Watermark icon */}
                <GraduationCap
                  size={80}
                  className="absolute opacity-5 -top-6 -right-6 text-blue-400 dark:text-yellow-400 pointer-events-none"
                />
                <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {edu.institution}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                  {edu.period}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                  {edu.grade}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col md:flex-row items-start md:items-center w-full my-12 relative">
              {/* Left Side for even index */}
              <div className="hidden md:flex flex-col items-center w-1/2 relative">
                {index % 2 === 0 && (
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out max-w-md relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Watermark icon */}
                    <GraduationCap
                      size={100}
                      className="absolute opacity-5 -top-8 -right-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
                    />
                    <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                      {edu.period}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                      {edu.grade}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Timeline Node with animated pulse and glow */}
              <div className="hidden md:flex items-center justify-center w-14 h-14 absolute left-1/2 transform -translate-x-1/2 z-20">
                <span className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"></span>
                <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
                  <GraduationCap
                    size={24}
                    className="text-white dark:text-gray-900"
                  />
                </div>
              </div>

              {/* Timeline connector (animated) */}
              {index < educationEntries.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-1 h-16 bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move z-0"></div>
              )}

              {/* Right Side for odd index */}
              <div className="hidden md:flex flex-col items-start w-1/2 relative">
                {index % 2 !== 0 && (
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out max-w-md ml-auto relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Watermark icon */}
                    <GraduationCap
                      size={100}
                      className="absolute opacity-5 -top-8 -left-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
                    />
                    <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                      {edu.period}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                      {edu.grade}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
