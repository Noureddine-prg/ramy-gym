"use client";

import { motion } from "framer-motion";

interface BlackBarsProps {
  hoveredPhrase: string | null;
}

const BlackBars: React.FC<BlackBarsProps> = ({ hoveredPhrase }) => {
  const barVariants = {
    hidden: { height: 0 },
    visible: {
      height: "13%", // height of the black bars
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    hoveredPhrase && (
      <>
        <motion.div
          className="absolute top-0 left-0 right-0 bg-black z-10"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={barVariants}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black z-10"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={barVariants}
        />
      </>
    )
  );
};

export default BlackBars;
