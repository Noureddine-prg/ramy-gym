"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  text: string;
  delay: number;
  hoveredPhrase: string | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const AnimatedLinkComponent: React.FC<AnimatedLinkProps> = ({
  href,
  text,
  delay,
  hoveredPhrase,
  onHoverStart,
  onHoverEnd,
}) => {
  const words = text.split(" ");

  const letterVariants = {
    hidden: { opacity: 0.4, color: "white" },
    visible: {
      opacity: 1,
      color: "white",
      transition: { duration: 0.1 },
    },
  };

  const containerVariants = {
    hidden: { opacity: hoveredPhrase && hoveredPhrase !== text ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.span
      className="inline-block"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.3 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-2">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block glow"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedLinkComponent;
