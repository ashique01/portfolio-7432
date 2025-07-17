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
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

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

  const cardItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      const btn = form.querySelector(".funny-btn");
      if (btn) {
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

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => setSending(false));
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
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-4">
                <Mail
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={28}
                />
                <a
                  href="mailto:ashiquemurad@gmail.com"
                  className="text-lg hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
                >
                  ashiquemurad@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={28}
                />
                <a
                  href="tel:+8801234567890"
                  className="text-lg hover:underline hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
                >
                  +880 1234 567890
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin
                  className="text-blue-600 dark:text-yellow-400 flex-shrink-0"
                  size={28}
                />
                <span className="text-lg">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent group-hover:border-blue-200 dark:group-hover:border-yellow-700 space-y-6 relative overflow-visible"
          variants={formItemVariants}
          whileHover={{
            boxShadow:
              "0px 10px 25px rgba(0,0,0,0.25), 0px 0px 15px rgba(250,204,21,0.3)",
          }}
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
                placeholder="John Doe"
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
                placeholder="john.doe@example.com"
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
              hover:from-blue-700 hover:to-blue-600 dark:hover:from-yellow-600 dark:hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-60"
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(0,188,212,0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} />
            <span>{sending ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
