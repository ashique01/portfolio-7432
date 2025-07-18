import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title:"LinkPing", 
    description:"A URL shortening service with analytics, built with Node.js and MongoDB. Features include custom aliases, QR code generation, and user authentication.",
    liveLink:"https://linkping.netlify.app",
    repoLink:"https://github.com/Ashique01/UtilityHub"
  },
  {
    title: "LogisticsApp",
    description:
      "A logistics management system for tracking shipments, managing orders, and optimizing delivery routes. Built with React.js, Node.js, and MongoDB.",
    liveLink: "https://logisticsapp2025.netlify.app", 
    repoLink: "https://github.com/Ashique01/LogisticsApp", 
  },
  {
    title:"Dhaka2070",
    description: "A futuristic city simulation game where players manage resources, build infrastructure, and navigate challenges in a virtual Dhaka. Developed with TS.",
    liveLink: "https://dhaka2070.netlify.app", 
    repoLink: "https://github.com/Ashique01/dhaka2070",
  },
  {
    title:"BD Horror Atlas",
    description: "An interactive map showcasing haunted locations in Bangladesh, built with React.js and Leaflet for geospatial data visualization.",
    liveLink: "https://hauntedbd.netlify.app",
    repoLink: "https://github.com/Ashique01/bd-horor-atlas"
  },
  {
    title : "Shomoyer Sathe",
    description: "A medicine reminder app that helps users track their medication schedules, set reminders, and manage prescriptions. Built with React Native for cross-platform support.",
    liveLink: "https://shomoyer-sathe.netlify.app", 
    repoLink: "https://github.com/Ashique01/shomoyershathe-webapp",
  },
  {
    title: "AM Dental Clinic",
    description:
      "Developed a responsive web application enabling patients to book appointments, view services, and manage profiles. Built with React.js, Bootstrap, and JavaScript for a seamless UI/UX.",
    liveLink: "https://am-dental-clinic.netlify.app/", 
    repoLink: "https://github.com/Ashique01/Dental-clinic", 
  },
  {
    title: "DSM: Delivery Service Management",
    description:
      "Built a delivery management system featuring order placement, real-time tracking, and dispatcher functionality. Focused on optimizing logistics and communication.",
    liveLink: "https://delivery-management-syst-93325.web.app/", 
    repoLink: "https://github.com/Ashique01/Delivery-website-client-site", 
  },
  {
    title: "Local Box Store",
    description:
      "Created a full-featured e-commerce app with product listings, cart functionality, user authentication, and secure checkout for daily essentials shopping.",
    liveLink: "https://kena-becha-f231d.web.app/", 
    repoLink: "https://github.com/Ashique01/ful-stack-website", 
  },
  {
    title: "Paragraph Generator",
    description:
      "Designed a React.js utility for generating placeholder paragraphs. Demonstrates state management and reusable component architecture.",
    liveLink: "https://paragraph-generator-handlelingbutton.netlify.app/", 
    repoLink: "https://github.com/Ashique01/paragraph-generator", 
  },

  {
    title: "Food Explorer",
    description:
      "Developed a food exploration app allowing users to filter meals and view details. Focused on dynamic content rendering and data fetching.",
    liveLink: "https://food-explorer-functionality.netlify.app/", // Placeholder
    repoLink: "https://github.com/Ashique01/Food-explorer-functionality", // Placeholder
  },
  {
    title: "BloodCon",
    description:
      "A blood donation platform connecting donors and recipients. Features include user profiles, donation requests, and location-based search.",
    liveLink: "#",
    repoLink: "https://github.com/Ashique01/bloodcon"
  },
  {
    title:"Learning Mate",
    description: "An educational platform for students to access resources, track progress, and connect with tutors. Built with React.js and Firebase for real-time data synchronization.",
    liveLink: "#",  
    repoLink: "https://github.com/Ashique01/Learning-mate"
  }
];

const MyProject = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4; // Display 4 projects per page
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <section
      id="projects"
      className="min-h-screen relative px-4 md:px-8 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-yellow-400 overflow-hidden"
    >
      {/* Animated Background Overlay - Subtle gradients */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/30 dark:to-red-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-200/30 to-sky-200/30 dark:from-emerald-900/30 dark:to-blue-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        My Projects
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 perspective-1000" // Added perspective
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
            }}
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.title}
                className="relative p-0.5 rounded-2xl group cursor-pointer overflow-hidden" // Reduced padding, added group
                variants={cardVariants}
                whileHover={{
                  scale: 1.02, // Subtle scale up
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)", // Deeper shadow
                  rotateX: 5, // Subtle 3D tilt
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Dynamic Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-orange-400 filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                {/* Project Content */}
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700
                                h-full flex flex-col justify-between transform group-hover:translate-z-10 transition-transform duration-300 ease-in-out"> {/* Added translate-z-10 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Code2 className="w-8 h-8 text-blue-600 dark:text-yellow-400 mr-4" /> {/* Larger icon */}
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Links (Conditional Rendering) */}
                  {(project.liveLink || project.repoLink) && (
                    <div className="flex flex-wrap gap-4 mt-auto">
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 font-semibold shadow-lg
                                     hover:bg-blue-700 dark:hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} className="mr-2" /> Live Demo
                        </motion.a>
                      )}
                      {project.repoLink && (
                        <motion.a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 font-semibold
                                     hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} className="mr-2" /> GitHub Repo
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {projects.length > projectsPerPage && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <motion.button
              onClick={handlePrevPage}
              disabled={totalPages <= 1}
              className="p-3.5 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-blue-700 dark:hover:bg-yellow-600 transition-colors duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,188,212,0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={26} />
            </motion.button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentPage === index
                      ? "bg-blue-600 dark:bg-yellow-500 shadow-md"
                      : "bg-gray-400 dark:bg-gray-600 opacity-70"
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgba(0,188,212,0.4)" }}
                  whileTap={{ scale: 0.8 }}
                ></motion.button>
              ))}
            </div>

            <motion.button
              onClick={handleNextPage}
              disabled={totalPages <= 1}
              className="p-3.5 rounded-full bg-blue-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-blue-700 dark:hover:bg-yellow-600 transition-colors duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250,204,21,0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={26} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProject;
