import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function About() {
  return (
    <motion.div
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/1600x900/?artwork")',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
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
            className="text-5xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-300 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Hello, my name is{" "}
            <span className="text-secondary">Hailey Cisneros</span>, and I am a
            multi-media visual artist from Riverside, California. I have always
            been passionate about creating art and want to share that with
            others. I work digitally using Procreate, and traditionally using
            watercolors, acrylics, and pastels. I am a student at Cal State
            Fullerton, majoring in drawing and painting. I plan on becoming an
            art teacher after graduating, opening up an online shop, and doing
            freelance work.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
