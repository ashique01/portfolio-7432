import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "LinkPing",
    description:
      "A URL shortening service with analytics, built with Node.js and MongoDB. Features include custom aliases, QR code generation, and user authentication.",
    techStack: "Node.js, MongoDB, Express, React",
    liveLink: "https://linkping.netlify.app",
    repoLink: "https://github.com/Ashique01/UtilityHub",
  },
  {
    title: "LogisticsApp",
    description:
      "A logistics management system for tracking shipments, managing orders, and optimizing delivery routes.",
    techStack: "React.js, Node.js, MongoDB",
    liveLink: "https://logisticsapp2025.netlify.app",
    repoLink: "https://github.com/Ashique01/LogisticsApp",
  },
  {
    title: "Dhaka2070",
    description:
      "A futuristic city simulation game where players manage resources, build infrastructure, and navigate challenges in a virtual Dhaka.",
    techStack: "TypeScript",
    liveLink: "https://dhaka2070.netlify.app",
    repoLink: "https://github.com/Ashique01/dhaka2070",
  },
  {
    title: "BD Horror Atlas",
    description:
      "An interactive map showcasing haunted locations in Bangladesh.",
    techStack: "React.js, Leaflet",
    liveLink: "https://hauntedbd.netlify.app",
    repoLink: "https://github.com/Ashique01/bd-horor-atlas",
  },
  {
    title: "Shomoyer Sathe",
    description:
      "A medicine reminder app that helps users track medication schedules, set reminders, and manage prescriptions.",
    techStack: "React Native",
    liveLink: "https://shomoyer-sathe.netlify.app",
    repoLink: "https://github.com/Ashique01/shomoyershathe-webapp",
  },
  {
    title: "AM Dental Clinic",
    description:
      "A responsive web application enabling patients to book appointments, view services, and manage profiles.",
    techStack: "React.js, Bootstrap, JavaScript",
    liveLink: "https://am-dental-clinic.netlify.app/",
    repoLink: "https://github.com/Ashique01/Dental-clinic",
  },
  {
    title: "DSM: Delivery Service Management",
    description:
      "Delivery management system with order placement, real-time tracking, and dispatcher functionality.",
    techStack: "React.js, Firebase",
    liveLink: "https://delivery-management-syst-93325.web.app/",
    repoLink: "https://github.com/Ashique01/Delivery-website-client-site",
  },
  {
    title: "Local Box Store",
    description:
      "Full-featured e-commerce app with product listings, cart, authentication, and checkout.",
    techStack: "React.js, Firebase",
    liveLink: "https://kena-becha-f231d.web.app/",
    repoLink: "https://github.com/Ashique01/ful-stack-website",
  },
  {
    title: "Paragraph Generator",
    description:
      "A utility for generating placeholder paragraphs demonstrating state management and reusable components.",
    techStack: "React.js",
    liveLink: "https://paragraph-generator-handlelingbutton.netlify.app/",
    repoLink: "https://github.com/Ashique01/paragraph-generator",
  },
  {
    title: "Food Explorer",
    description:
      "Food exploration app allowing filtering and viewing meal details.",
    techStack: "React.js",
    liveLink: "https://food-explorer-functionality.netlify.app/",
    repoLink: "https://github.com/Ashique01/Food-explorer-functionality",
  },
  {
    title: "BloodCon",
    description:
      "Blood donation platform connecting donors and recipients with profile and location-based features.",
    techStack: "React.js, Firebase",
    liveLink: "#",
    repoLink: "https://github.com/Ashique01/bloodcon",
  },
  {
    title: "Learning Mate",
    description:
      "Educational platform for accessing resources, tracking progress, and tutor connection.",
    techStack: "React.js, Firebase",
    liveLink: "#",
    repoLink: "https://github.com/Ashique01/Learning-mate",
  },
];

const MyProject = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc"); // asc = A-Z, desc = Z-A
  const projectsPerPage = 4;

  // Sort projects alphabetically based on sortOrder
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  // Paginate projects
  const currentProjects = sortedProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Reset page to 0 when sortOrder changes
  useEffect(() => {
    setCurrentPage(0);
  }, [sortOrder]);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen relative px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-yellow-400 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 to-pink-300/10 dark:from-purple-900/10 dark:to-red-900/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-300/10 to-sky-300/10 dark:from-emerald-900/10 dark:to-blue-900/10 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        My Creative Projects
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto p-8 md:p-12 bg-white/5 dark:bg-black/5 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/10 dark:border-gray-700 transform-gpu transition-all duration-500 ease-out"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          y: -10, // More pronounced lift on hover
          rotateX: 3, // Subtle 3D tilt
          rotateY: 3, // Subtle 3D tilt
          boxShadow: "0 0 80px rgba(14, 165, 233, 0.7)", // More intense glow
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Sort Toggle Button */}
        <div className="flex justify-end mb-8">
          <motion.button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="px-6 py-2 rounded-full bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 font-semibold shadow-lg
                       hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,188,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 perspective-1000"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              exit: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
              },
            }}
          >
            {currentProjects.map(
              ({ title, description, techStack, liveLink, repoLink }) => (
                <motion.div
                  key={title}
                  className="relative p-0.5 rounded-2xl group cursor-pointer overflow-hidden transform-gpu"
                  variants={cardVariants}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-orange-400 filter blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow"
                    initial={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>

                  <div
                    className="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700
                                h-full flex flex-col justify-between transition-transform duration-300 ease-in-out"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div>
                      <div className="flex items-center mb-4">
                        <Code2 className="w-9 h-9 text-blue-600 dark:text-yellow-400 mr-4" />
                        <h3 className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400">
                          {title}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-left">
                        {description}
                      </p>
                      <p className="text-sm italic text-blue-600 dark:text-yellow-400 mb-4 font-medium">
                        Tech Stack:{" "}
                        <span className="font-semibold">{techStack}</span>
                      </p>
                    </div>

                    {(liveLink || repoLink) && (
                      <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        {liveLink && (
                          <motion.a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 font-bold shadow-lg
                   hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300 transform"
                            whileHover={{
                              scale: 1.07,
                              boxShadow: "0px 8px 15px rgba(0,188,212,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} className="mr-2" /> Live
                            Demo
                          </motion.a>
                        )}
                        {repoLink && (
                          <motion.a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 font-bold
                   hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform"
                            whileHover={{
                              scale: 1.07,
                              boxShadow: "0px 8px 15px rgba(250,204,21,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={20} className="mr-2" /> GitHub Repo
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {sortedProjects.length > projectsPerPage && (
          <div className="flex justify-center items-center mt-16 space-x-6">
            <motion.button
              onClick={handlePrevPage}
              disabled={totalPages <= 1}
              className="p-4 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-xl disabled:opacity-40 disabled:cursor-not-allowed
             hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              whileHover={{ boxShadow: "0px 0px 20px rgba(0,188,212,0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={28} />
            </motion.button>

            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-5 h-5 rounded-full ${
                    currentPage === index
                      ? "bg-blue-600 dark:bg-yellow-500 shadow-lg border-2 border-white dark:border-gray-900"
                      : "bg-gray-400 dark:bg-gray-600 opacity-60"
                  } transition-all duration-300`}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0px 0px 10px rgba(0,188,212,0.5)",
                  }}
                  whileTap={{ scale: 0.8 }}
                ></motion.button>
              ))}
            </div>

            <motion.button
              onClick={handleNextPage}
              disabled={totalPages <= 1}
              className="p-4 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-xl disabled:opacity-40 disabled:cursor-not-allowed
                         hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              whileHover={{ boxShadow: "0px 0px 20px rgba(250,204,21,0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default MyProject;
