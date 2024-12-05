import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSwipeable } from "react-swipeable";
import { useTransition, animated } from "@react-spring/web";

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const handleNext = () => {
    if (selectedCard) {
      const currentIndex = cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      const nextIndex = (currentIndex + 1) % cards.length;
      setSelectedCard(cards[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedCard) {
      const currentIndex = cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
      setSelectedCard(cards[prevIndex]);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const transitions = useTransition(selectedCard, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { duration: 300 },
  });

  return (
    <div className="py-20 max-w-full">
      <h2 className="text-5xl font-bold mb-12 text-center text-primary">
        My Projects
      </h2>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...swipeHandlers}
          >
            <motion.div
              className="bg-white relative flex flex-col md:flex-row items-center overflow-hidden"
              style={{ width: "100vw", height: "100vh" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-2 md:right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full p-2 md:px-4 md:py-2 md:top-2 z-50"
                style={{ zIndex: 1000 }}
              >
                <span className="block md:hidden">
                  <AiOutlineClose size={24} />
                </span>
                <span className="hidden md:block">Close</span>
              </button>
              <div className="w-full md:w-1/2 h-[95%] md:h-full relative">
                {transitions((style, item) =>
                  item ? (
                    <animated.img
                      src={item.url}
                      alt={item.title}
                      style={style}
                      className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  ) : null
                )}
              </div>
              <div className="w-full md:w-1/2 h-full p-6 bg-white text-center flex flex-col justify-center overflow-y-auto">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCard.title}
                </h2>
                <p className="text-gray-700 text-lg">
                  Description of {selectedCard.title}.
                </p>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center z-50">
                <button
                  onClick={handlePrev}
                  className="text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  <AiOutlineLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-50">
                <button
                  onClick={handleNext}
                  className="text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  <AiOutlineRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <h2 className="text-5xl font-bold mb-12 text-center text-primary">
        100 Drawings Project
      </h2>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ccards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...swipeHandlers}
          >
            <motion.div
              className="bg-white relative flex flex-col md:flex-row items-center overflow-hidden"
              style={{ width: "100vw", height: "100vh" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-2 md:right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full p-2 md:px-4 md:py-2 md:top-2 z-50"
                style={{ zIndex: 1000 }}
              >
                <span className="block md:hidden">
                  <AiOutlineClose size={24} />
                </span>
                <span className="hidden md:block">Close</span>
              </button>
              <div className="w-full md:w-1/2 h-[95%] md:h-full relative">
                {transitions((style, item) =>
                  item ? (
                    <animated.img
                      src={item.url}
                      alt={item.title}
                      style={style}
                      className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  ) : null
                )}
              </div>
              <div className="w-full md:w-1/2 h-full p-6 bg-white text-center flex flex-col justify-center overflow-y-auto">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCard.title}
                </h2>
                <p className="text-gray-700 text-lg">
                  Description of {selectedCard.title}.
                </p>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center z-50">
                <button
                  onClick={handlePrev}
                  className="text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  <AiOutlineLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-50">
                <button
                  onClick={handleNext}
                  className="text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  <AiOutlineRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Card = ({ card, onClick }) => {
  return (
    <div
      key={card.id}
      className="relative h-[400px] w-full overflow-hidden bg-neutral-200 rounded-lg shadow-lg group"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-500 transform group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-2xl font-bold">{card.title}</p>
      </div>
      <button
        onClick={() => onClick(card)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-secondary text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        Expand
      </button>
    </div>
  );
};
const ccards = [
  {
    url: "https://i.imgur.com/jPMAW6B.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://i.imgur.com/EwIkQBI.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://i.imgur.com/wDTkSR3.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://i.imgur.com/IMBBpQG.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://i.imgur.com/FGdCT23.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://i.imgur.com/T4aOVxz.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://i.imgur.com/W25tzI2.jpeg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://i.imgur.com/g9KnrZU.jpeg",
    title: "Title 8",
    id: 8,
  },
  {
    url: "https://i.imgur.com/LmWPkY0.jpeg",
    title: "Title 9",
    id: 9,
  },
  {
    url: "https://i.imgur.com/EGI8BTg.jpeg",
    title: "Title 10",
    id: 10,
  },
  {
    url: "https://i.imgur.com/iEkxCL6.jpeg",
    title: "Title 11",
    id: 11,
  },
  {
    url: "https://i.imgur.com/ddzUd6P.jpeg",
    title: "Title 11",
    id: 12,
  },
  {
    url: "https://i.imgur.com/peLI5mj.jpeg",
    title: "Title 11",
    id: 14,
  },
  {
    url: "https://i.imgur.com/3vm50Ll.jpeg",
    title: "Title 11",
    id: 15,
  },
  {
    url: "https://i.imgur.com/zjWXAnc.jpeg",
    title: "Title 11",
    id: 16,
  },
  {
    url: "https://i.imgur.com/W2sBb2N.jpeg",
    title: "Title 11",
    id: 17,
  },
  {
    url: "https://i.imgur.com/fLoobkg.jpeg",
    title: "Title 11",
    id: 18,
  },
  {
    url: "https://i.imgur.com/LwioolW.jpeg",
    title: "Title 11",
    id: 18,
  },
];
const cards = [
  {
    url: "https://i.imgur.com/0ljGFMY.jpeg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://i.imgur.com/owV4jYU.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://i.imgur.com/Ctet7Iw.jpeg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://i.imgur.com/1lyTROf.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://i.imgur.com/WBBjK5l.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://i.imgur.com/Gqx4ii9.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://i.imgur.com/mQyOHlA.jpeg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://i.imgur.com/6IpbUwD.jpeg",
    title: "Title 8",
    id: 8,
  },
  {
    url: "https://i.imgur.com/4F0G2Pw.jpeg",
    title: "Title 9",
    id: 9,
  },
  {
    url: "https://i.imgur.com/z5JbtcG.jpeg",
    title: "Title 10",
    id: 10,
  },
  {
    url: "https://i.imgur.com/avk97Nl.jpeg",
    title: "Title 11",
    id: 11,
  },
  {
    url: "https://i.imgur.com/GVGJBPK.jpeg",
    title: "Title 11",
    id: 12,
  },
  {
    url: "https://i.imgur.com/qoBBWoZ.jpeg",
    title: "Title 11",
    id: 14,
  },
  {
    url: "https://i.imgur.com/fEmLXPg.jpeg",
    title: "Title 11",
    id: 15,
  },
  {
    url: "https://i.imgur.com/spjTo0E.jpeg",
    title: "Title 11",
    id: 16,
  },
  {
    url: "https://i.imgur.com/D1yrX2L.jpeg",
    title: "Title 11",
    id: 17,
  },
  {
    url: "https://i.imgur.com/o0Xq2tt.jpeg",
    title: "Title 11",
    id: 18,
  },
  {
    url: "https://i.imgur.com/2HelsKI.jpeg",
    title: "Title 11",
    id: 19,
  },
  {
    url: "https://i.imgur.com/0ETtDVO.jpeg",
    title: "Title 11",
    id: 20,
  },
  {
    url: "https://i.imgur.com/OzBM2n0.jpeg",
    title: "Title 11",
    id: 21,
  },
  {
    url: "https://i.imgur.com/Q1exYqo.jpeg",
    title: "Title 11",
    id: 22,
  },
  {
    url: "https://i.imgur.com/1BQrg2C.jpeg",
    title: "Title 11",
    id: 23,
  },
  {
    url: "https://i.imgur.com/cG2B98A.jpeg",
    title: "Title 11",
    id: 23,
  },
  {
    url: "https://i.imgur.com/1LIi0MW.jpeg",
    title: "Title 11",
    id: 23,
  },
  {
    url: "https://i.imgur.com/KLucQlD.jpeg",
    title: "Title 11",
    id: 23,
  },
];

export default Projects;
