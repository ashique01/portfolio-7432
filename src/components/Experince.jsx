import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Executive (Import Department)",
    company: "Aimfast Logistics Limited",
    period: "September 2024 - Present",
    description: `Responsible for managing and streamlining import operations to ensure timely delivery of goods. Coordinating with suppliers, freight forwarders, and customs officials to optimize shipping processes and reduce delays.
      Prepare and analyze detailed reports on shipment statuses, cost control, and operational efficiency to support strategic decision-making. Collaborate with cross-functional teams to improve logistics workflows and compliance with import regulations. Continuously identifying opportunities to improve supply chain effectiveness and enhance customer satisfaction.`,
  },
  {
    role: "Freelancer",
    company: "Fiverr & Upwork",
    period: "July 2024 - Present",
    description: `Selectively working on client projects primarily in software development, including backend APIs, and automation tools. Under mentorship to refine skills in project management, client communication, and delivery timelines.
      Developing customized solutions such as Telegram bots, AI integrations, and web applications tailored to client needs. Prioritizing quality, scalability, and user experience while continuously learning emerging technologies and best practices.`,
  },
  {
    role: "IT Executive",
    company: "Legalized Education Bangladesh LTD",
    period: "August 2023 - June 2024",
    description: `Provided comprehensive IT support for internal teams and end-users, including troubleshooting hardware, software, and network issues to ensure uninterrupted operations. Played a key role in the development and enhancement of the Legalized Learning app, collaborating closely with developers and product managers to implement new features and improve user experience.
      Managed and maintained the company’s IT infrastructure, including servers, network equipment, and security protocols. Conducted regular system audits and backups to safeguard data integrity and security. Delivered training sessions and documentation to empower staff with best practices in IT usage.
      Actively contributed to continuous improvement initiatives by recommending and implementing technology upgrades and process optimizations.`,
  },
];

const Experience = () => {
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
      id="experience"
      className="min-h-screen relative px-4 md:px-8 py-16
                 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-yellow-400 overflow-x-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/30 dark:to-red-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-200/30 to-sky-200/30 dark:from-emerald-900/30 dark:to-blue-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center
                   bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Sparkles
          className="inline-block mr-1 sm:mr-2 text-yellow-400 dark:text-yellow-300 animate-pulse"
          size={30}
          sm:size={40}
        />
        Experience
        <Sparkles
          className="inline-block ml-1 sm:ml-2 text-yellow-400 dark:text-yellow-300 animate-pulse"
          size={30}
          sm:size={40}
        />
      </motion.h2>

      <div className="relative z-10 max-w-5xl mx-auto mt-12">
        {/* Animated timeline vertical line with gradient and pulse */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-0">
          <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move rounded-full shadow-2xl animate-pulse"></div>
        </div>
        <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move z-0"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            {/* Mobile Timeline Item */}
            <div className="flex md:hidden flex-col items-center mb-8 relative z-10">
              {/* Timeline Node with pulse and glow */}
              <div className="relative flex items-center justify-center w-14 h-14">
                <span className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"></span>
                <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
                  <Briefcase
                    size={24}
                    className="text-white dark:text-gray-900"
                  />
                </div>
              </div>

              <div className="mt-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out w-full text-center relative overflow-hidden">
                {/* Watermark icon */}
                <Briefcase
                  size={80}
                  className="absolute opacity-5 -top-6 -right-6 text-blue-400 dark:text-yellow-400 pointer-events-none"
                />
                <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {exp.company}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                  {exp.period}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Desktop Timeline Item */}
            <div className="hidden md:flex flex-col md:flex-row items-start md:items-center w-full my-12 relative">
              {/* Left Side for even index */}
              <div className="hidden md:flex flex-col items-center w-1/2 relative">
                {index % 2 === 0 && (
                  <motion.div
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out max-w-md relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Watermark icon */}
                    <Briefcase
                      size={100}
                      className="absolute opacity-5 -top-8 -right-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
                    />
                    <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                      {exp.period}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Timeline Node with animated pulse and glow */}
              <div className="hidden md:flex items-center justify-center w-14 h-14 absolute left-1/2 transform -translate-x-1/2 z-20">
                <span className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-500 opacity-40 blur-lg animate-pulse"></span>
                <span className="absolute w-10 h-10 rounded-full border-4 border-blue-400 dark:border-yellow-400 animate-pulse-slow"></span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-lg z-10">
                  <Briefcase
                    size={24}
                    className="text-white dark:text-gray-900"
                  />
                </div>
              </div>

              {/* Timeline connector (animated) */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-1 h-16 bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move z-0"></div>
              )}

              {/* Right Side for odd index */}
              <div className="hidden md:flex flex-col items-start w-1/2 relative">
                {index % 2 !== 0 && (
                  <motion.div
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-2 border-blue-200 dark:border-yellow-600 transform hover:scale-105 hover:shadow-yellow-400/40 hover:border-blue-400 dark:hover:border-yellow-400 transition-all duration-300 ease-in-out max-w-md ml-auto relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Watermark icon */}
                    <Briefcase
                      size={100}
                      className="absolute opacity-5 -top-8 -left-8 text-blue-400 dark:text-yellow-400 pointer-events-none"
                    />
                    <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 mb-2 drop-shadow-lg">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">
                      {exp.period}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
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

export default Experience;
