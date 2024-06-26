import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WavyBackground } from "./WavyBackground";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const spanVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};

const About = () => {
  return (
    <WavyBackground
      className="relative z-10"
      containerClassName="min-h-screen flex flex-col justify-center"
      waveWidth={50}
      backgroundFill="#FF6B6B"
      blur={10}
      speed="fast"
      waveOpacity={0.5}
    >
      <div className="flex flex-col justify-center items-center">
        <motion.div
          className="w-full p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-white bg-opacity-20 backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-4xl h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white"
              >
                About Hailey Cisneros
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xl max-w-xl mt-2 dark:text-neutral-300"
              >
                Hello, my name is Hailey Cisneros. I am a multimedia visual
                artist from Riverside, California. I work digitally using
                Procreate, and traditionally with watercolors, acrylics, and
                pastels. Currently, I am a student at Cal State Fullerton,
                majoring in Drawing and Painting. My future plans include
                becoming an art teacher after graduating, opening an online
                shop, and doing freelance work.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://static.wixstatic.com/media/5b4348_85d6bf0a809b41c899bac1a39c666dd2~mv2.jpg/v1/fill/w_1058,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4348_85d6bf0a809b41c899bac1a39c666dd2~mv2.jpg"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Hailey Cisneros"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </CardItem>
              <div className="flex justify-center items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  to="/projects"
                  className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300"
                >
                  View My Work
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </WavyBackground>
  );
};

export default About;
