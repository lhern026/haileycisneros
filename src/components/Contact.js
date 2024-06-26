// src/components/Contact.js

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./WavyBackground";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

function Contact() {
  return (
    <WavyBackground
      className="relative z-10"
      containerClassName="h-screen bg-opacity-50"
      waveWidth={50}
      backgroundFill="#FF6B6B" // Use the primary color as the background
      blur={10}
      speed="fast"
      waveOpacity={0.5}
    >
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl font-bold mb-8 text-white"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.tiktok.com/@bluebutterfly888"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl text-white hover:text-primary transition duration-300 flex items-center"
            variants={hoverVariants}
            whileHover="hover"
          >
            <i className="fab fa-tiktok mr-2"></i> TikTok
          </motion.a>
          <motion.a
            href="https://www.instagram.com/haileyacisnerosart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl text-white hover:text-primary transition duration-300 flex items-center"
            variants={hoverVariants}
            whileHover="hover"
          >
            <i className="fab fa-instagram mr-2"></i> Instagram
          </motion.a>
        </motion.div>
      </motion.div>
    </WavyBackground>
  );
}

export default Contact;
