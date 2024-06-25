import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Faster transition duration
      when: "beforeChildren",
      staggerChildren: 0.1, // Faster staggering of child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Faster item transition
};

const spanVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 }, // Faster span transition
  },
};

const About = () => {
  return (
    <motion.div
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.imgur.com/0rra6Ly.jpeg")',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="relative z-10 container mx-auto px-6 py-12 text-center bg-cover bg-opacity-75 rounded-md shadow-lg"
        style={{
          backgroundImage:
            'url("https://i.imgur.com/bwSWV76_d.jpg?maxwidth=520&shape=thumb&fidelity=high")',
        }}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
        >
          <motion.img
            src="https://static.wixstatic.com/media/5b4348_85d6bf0a809b41c899bac1a39c666dd2~mv2.jpg/v1/fill/w_1058,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4348_85d6bf0a809b41c899bac1a39c666dd2~mv2.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          />
          <motion.h2
            className="text-5xl font-bold mb-6 text-primary"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-2xl text-background bg-primary bg-opacity-75 p-4 max-w-2xl leading-relaxed mb-8 rounded-md shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            Hello, my name is{" "}
            <motion.span
              className="text-accent font-semibold"
              variants={spanVariants}
            >
              Hailey Cisneros
            </motion.span>
            . I am a multimedia visual artist from Riverside, California, and I
            have always been passionate about creating art. I work digitally
            using Procreate, and traditionally with watercolors, acrylics, and
            pastels. Currently, I am a student at Cal State Fullerton, majoring
            in Drawing and Painting. My future plans include becoming an art
            teacher after graduating, opening an online shop, and doing
            freelance work.
          </motion.p>
          <Link to="/projects">
            <motion.div
              className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300 inline-block"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              View My Work
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
