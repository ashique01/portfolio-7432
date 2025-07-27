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
  Linkedin,
  Github,
  Loader2,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  // Variants for individual contact info and form cards
  // These variants will still apply to the individual cards
  const cardItemVariants = {
    hidden: { opacity: 0, x: -80, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for the contact form (right side)
  const formItemVariants = {
    hidden: { opacity: 0, x: 80, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
        btn.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 500,
            easing: "cubic-bezier(.68,-0.55,.27,1.55)",
          }
        );
      }
      toast.error("Please fill in all fields to send your message.");
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
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Oops! Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-yellow-400 overflow-hidden"
    >
      <ToastContainer position="top-center" />

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-purple-300/10 dark:from-blue-900/10 dark:to-purple-900/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/10 to-green-300/10 dark:from-cyan-900/10 dark:to-green-900/10 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold mb-16 text-center
                   bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Sparkles className="inline-block mr-1 sm:mr-2 text-yellow-400 dark:text-yellow-300 animate-pulse" size={30} sm:size={40} />
        Let's Connect! {/* Reverted heading text */}
        <Sparkles className="inline-block ml-1 sm:ml-2 text-yellow-400 dark:text-yellow-300 animate-pulse" size={30} sm:size={40} />
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-8 md:p-12 bg-white/5 dark:bg-black/5 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/10 dark:border-gray-700 transform-gpu transition-all duration-500 ease-out"
        // Removed initial, whileInView, and transition props for the container
        whileHover={{
          y: -10, // More pronounced lift on hover
          rotateX: 3, // Subtle 3D tilt
          rotateY: 3, // Subtle 3D tilt
          boxShadow: "0 0 80px rgba(14, 165, 233, 0.7)", // More intense glow
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Contact Info Card */}
        <motion.div
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700
                       transform hover:-translate-y-2 transition-all duration-500 ease-in-out flex flex-col justify-between overflow-hidden relative"
          variants={cardItemVariants}
          initial="hidden" // Kept individual card animation
          whileInView="visible" // Kept individual card animation
          whileHover={{
            boxShadow:
              "0px 15px 40px rgba(0,0,0,0.2), 0px 0px 20px rgba(0,188,212,0.4)",
            borderColor: "rgba(0,188,212,0.5)",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtle Corner Gradient */}
          <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply opacity-30 blur-md"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-purple-400 to-pink-300 rounded-full mix-blend-multiply opacity-30 blur-md"></div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500 mb-4 sm:mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Reach Out to Me
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-10 leading-relaxed">
              Whether you have a project idea, a question about my work, or just
              want to connect, I'd love to hear from you. Let's build something
              amazing together!
            </p>
            {/* Contact Details */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-gray-700 dark:text-gray-300">
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
                whileHover={{ x: 8, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
              >
                <Mail
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={22}
                  sm:size={26}
                />
                <a
                  href="mailto:ashiquemurad@gmail.com"
                  className="text-base sm:text-lg font-medium hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors break-all" // Added break-all for long emails on small screens
                >
                  ashiquemurad@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
                whileHover={{ x: 8, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
              >
                <Phone
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={22}
                  sm:size={26}
                />
                <a
                  href="tel:+8801626484541"
                  className="text-base sm:text-lg font-medium hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
                >
                  +8801626484541
                </a>
              </motion.div>
               {/* WhatsApp */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
                whileHover={{ x: 8 }}
              >
                <Phone
                  className="text-green-600 dark:text-green-400"
                  size={20}
                />
                <a
                  href="https://wa.me/8801626484541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium hover:underline text-green-700 dark:text-green-300"
                >
                  WhatsApp Chat
                </a>
              </motion.div>

              {/* Telegram */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
                whileHover={{ x: 8 }}
              >
                <Send className="text-sky-500 dark:text-sky-400" size={20} />
                <a
                  href="https://t.me/ashriko01" // Replace with actual username
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium hover:underline text-sky-600 dark:text-sky-300"
                >
                  Telegram Message
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
                whileHover={{ x: 8, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
              >
                <MapPin
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={22}
                  sm:size={26}
                />
                <span className="text-base sm:text-lg font-medium">
                  Dhaka, Bangladesh
                </span>
              </motion.div>
             
              {/* Social Media Buttons - Centered on mobile, text hidden on smallest screens */}
              <div className="flex space-x-3 sm:space-x-4 pt-4 sm:pt-6 justify-center md:justify-start">
                <motion.a
                  href="https://www.linkedin.com/in/ashique-murad-07834b120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-5 py-2 rounded-full border border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 bg-transparent hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 8px 20px rgba(0,188,212,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
                  {/* Responsive icon size */}
                  <span className="text-xs sm:text-sm font-semibold hidden xs:inline">
                    LinkedIn
                  </span>{" "}
                  {/* Hidden on very small screens, shown on small and up */}
                </motion.a>

                <motion.a
                  href="https://github.com/Ashique01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-5 py-2 rounded-full border border-blue-600 text-blue-600 dark:border-yellow-500 dark:text-yellow-400 bg-transparent hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 8px 20px rgba(250,204,21,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
                  {/* Responsive icon size */}
                  <span className="text-xs sm:text-sm font-semibold hidden xs:inline">
                    GitHub
                  </span>{" "}
                  {/* Hidden on very small screens, shown on small and up */}
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 space-y-5 sm:space-y-6 relative overflow-visible flex flex-col justify-between"
          variants={formItemVariants}
          initial="hidden" // Kept individual card animation
          whileInView="visible" // Kept individual card animation
          whileHover={{
            boxShadow:
              "0px 15px 40px rgba(0,0,0,0.2), 0px 0px 20px rgba(250,204,21,0.4)",
            borderColor: "rgba(250,204,21,0.5)",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtle Corner Gradient */}
          <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full mix-blend-multiply opacity-30 blur-md"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-teal-400 to-green-300 rounded-full mix-blend-multiply opacity-30 blur-md"></div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-400 dark:to-orange-500 mb-4 sm:mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Send a Message
          </h3>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base font-semibold"
              >
                Your Name
              </label>
              <div className="relative group">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                  size={18} sm:size={20}
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                  placeholder="Ash"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base font-semibold"
              >
                Your Email
              </label>
              <div className="relative group">
                <AtSign
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                  size={18} sm:size={20}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                  placeholder="ash@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1.5 sm:mb-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base font-semibold"
              >
                Your Message
              </label>
              <div className="relative group">
                <MessageSquareText
                  className="absolute left-3 top-2.5 sm:top-4 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-yellow-400 transition-colors"
                  size={18} sm:size={20}
                />
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                  rows="5" // Slightly reduced rows for smaller screens, will expand with content
                  placeholder="I'd love to discuss a potential project, collaborate on an idea, or simply connect with you!"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            className="funny-btn w-full flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-orange-500 text-white dark:text-gray-900 py-3 sm:py-3.5 rounded-lg font-bold shadow-xl mt-6 sm:mt-8
                       hover:from-blue-700 hover:to-blue-600 dark:hover:from-yellow-600 dark:hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden text-base sm:text-lg"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(0,188,212,0.6)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            {sending ? (
              <motion.span
                className="flex items-center space-x-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 size={18} sm:size={20} />{" "}
                {/* Responsive loader size */}
                <span>Sending...</span>
              </motion.span>
            ) : (
              <>
                <Send size={18} sm:size={20} />{" "}
                {/* Responsive send icon size */}
                <span>Send Message</span>
              </>
            )}
            {/* Confetti effect on hover */}
            <span className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-ping-slow"></span>
              <span className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-200 rounded-full animate-ping-fast animation-delay-500"></span>
              <span className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-yellow-200 rounded-full animate-ping-slow animation-delay-1000"></span>
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;