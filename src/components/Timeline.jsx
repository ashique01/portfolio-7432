import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ children }) => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto mt-12">
      {/* Timeline vertical line with animated gradient and pulse */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-0">
        <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 dark:from-yellow-400 dark:via-orange-400 dark:to-blue-500 animate-gradient-move rounded-full shadow-2xl animate-pulse"></div>
      </div>
      {children}
    </div>
  );
};

export default Timeline;