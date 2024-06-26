import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { id: 1, content: "Page 1 Content" },
  { id: 2, content: "Page 2 Content" },
  { id: 3, content: "Page 3 Content" },
];

const animations = {
  1: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
  2: { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "-100%" } },
  3: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
};

const PageTransitions = () => {
  const [current, setCurrent] = useState(0);
  const [animcursor, setAnimcursor] = useState(1);

  const nextPage = () => {
    setAnimcursor((prev) => (prev === 3 ? 1 : prev + 1));
    setCurrent((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-transitions-container">
      <button onClick={nextPage}>Next Page</button>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={pages[current].id}
          initial={animations[animcursor].initial}
          animate={animations[animcursor].animate}
          exit={animations[animcursor].exit}
          transition={{ duration: 0.5 }}
          className="page"
        >
          {pages[current].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransitions;
