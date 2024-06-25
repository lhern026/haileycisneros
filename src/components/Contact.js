import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  return (
    <div
      className="py-20 bg-cover w-55"
      style={{
        backgroundImage:
          'url("https://i.imgur.com/bwSWV76_d.jpg?maxwidth=520&shape=thumb&fidelity=high")',
      }}
    >
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl font-bold mb-12 text-primary"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.tiktok.com/@bluebutterfly888"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-primary transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fab fa-tiktok"></i> TikTok
          </motion.a>
          <motion.a
            href="https://www.instagram.com/haileyacisnerosart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-primary transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fab fa-instagram"></i> Instagram
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
