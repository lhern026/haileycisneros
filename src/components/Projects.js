import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className=" py-20 max-w-full">
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
          >
            <motion.div
              className="bg-white relative flex flex-col md:flex-row items-center overflow-auto"
              style={{ width: "100vw", height: "100vh" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full px-4 py-2"
              >
                Close
              </button>
              <div className="w-full md:w-1/2 h-[95%] md:h-full">
                <img
                  src={selectedCard.url}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="w-full md:w-1/2 h-full p-6 bg-white text-center flex flex-col justify-center overflow-y-auto">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCard.title}
                </h2>
                <p className="text-gray-700 text-lg">
                  Description of {selectedCard.title}.
                </p>
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
];

export default Projects;
