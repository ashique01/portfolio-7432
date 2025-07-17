// New Footer Component
const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 py-8 px-4 text-center text-gray-700 dark:text-gray-300 transition-colors duration-500">
      {/* Subtle Background Gradients for Web3 feel */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-900/20 dark:to-purple-900/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/20 to-green-200/20 dark:from-cyan-900/20 dark:to-green-900/20 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-lg font-semibold mb-2">Developed with ❤️ by Ashique Murad</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Add social media links here if desired */}
          {/* Example: */}
          {/* <a href="https://github.com/ashiquemurad" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors">
            <Github size={24} />
          </a> */}
          {/* <a href="https://linkedin.com/in/ashiquemurad" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors">
            <Linkedin size={24} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};


export default Footer;