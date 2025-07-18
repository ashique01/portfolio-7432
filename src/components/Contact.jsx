import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquareText,
  User,
  AtSign,
  Linkedin, // Added LinkedIn icon
  Github,   // Added GitHub icon
  Loader2,  // Loader icon for sending state
} from "lucide-react";
import emailjs from "@emailjs/browser"; // Assuming emailjs is correctly set up
import { ToastContainer, toast } from "react-toastify"; // Assuming react-toastify is set up
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  // Variants for the main content container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for individual contact info and form cards
  const cardItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Variants for the contact form (right side)
  const formItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Function to send email
  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      const btn = form.querySelector(".funny-btn");
      if (btn) {
        // Animate button for validation error
        const randomX = Math.random() > 0.5 ? 120 : -120;
        btn.animate(
          [
            { transform: "translateX(0)" },
            { transform: `translateX(${randomX}px)` },
            { transform: "translateX(0)" },
          ],
          {
            duration: 400,
            easing: "cubic-bezier(.68,-0.55,.27,1.55)",
          }
        );
      }
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative px-4 md:px-8 py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 overflow-hidden"
    >
      <ToastContainer position="top-center" />

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/30 dark:to-purple-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/30 to-green-200/30 dark:from-cyan-900/30 dark:to-green-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center
                   bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} // Changed to once: false for continuous animation
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Changed to once: false for continuous animation
      >
        {/* Contact Info Card */}
        <motion.div
          className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent
                     transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between"
          variants={cardItemVariants}
          whileHover={{
            boxShadow:
              "0px 10px 25px rgba(0,0,0,0.25), 0px 0px 15px rgba(0,188,212,0.3)",
          }}
          viewport={{ once: false, amount: 0.3 }} // Changed to once: false
        >
          <div>
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Have a project in mind, a question, or just want to say hello?
              Feel free to reach out! I'm always open to discussing new
              opportunities and collaborations.
            </p>
            {/* Contact Details */}
            <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              <motion.div
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                whileHover={{ x: 5 }} // Subtle slide on hover
              >
                <Mail
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={24}
                />
                <a
                  href="mailto:ashiquemurad@gmail.com"
                  className="text-lg font-medium hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
                >
                  ashiquemurad@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={24}
                />
                <a
                  href="tel:+8801234567890"
                  className="text-lg font-medium hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
                >
                  +880 1234 567890
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={24}
                />
                <span className="text-lg font-medium">Dhaka, Bangladesh</span>
              </motion.div>

              {/* Social Media Buttons */}
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href="https://www.linkedin.com/in/ashique-murad-07834b120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Ashique01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-semibold">GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent space-y-6 relative overflow-visible"
          variants={formItemVariants}
          whileHover={{
            boxShadow:
              "0px 10px 25px rgba(0,0,0,0.25), 0px 0px 15px rgba(250,204,21,0.3)",
          }}
          viewport={{ once: false, amount: 0.3 }} // Changed to once: false
        >
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500 mb-6">
            Send a Message
          </h3>

          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-gray-700 dark:text-gray-300 text-base font-medium"
            >
              Your Name
            </label>
            <div className="relative group">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                size={20}
              />
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200"
                placeholder="Rahim Mia"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 dark:text-gray-300 text-base font-medium"
            >
              Your Email
            </label>
            <div className="relative group">
              <AtSign
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                size={20}
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200"
                placeholder="rahim@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-gray-700 dark:text-gray-300 text-base font-medium"
            >
              Your Message
            </label>
            <div className="relative group">
              <MessageSquareText
                className="absolute left-3 top-4 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                size={20}
              />
              <textarea
                id="message"
                name="message"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200"
                rows="5"
                placeholder="I'd love to discuss..."
                required
              ></textarea>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            className="funny-btn w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-orange-500 text-white dark:text-gray-900 py-3 rounded-lg font-semibold shadow-lg
                       hover:from-blue-700 hover:to-blue-600 dark:hover:from-yellow-600 dark:hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 20px rgba(0,188,212,0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {sending ? (
              <motion.span
                className="flex items-center space-x-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 size={20} />
                <span>Sending...</span>
              </motion.span>
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
