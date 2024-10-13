"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { useState } from "react";

// Define CSS pulse effect for glowing text with light orange glow
const subtleGlow = `
  .glow {
    text-shadow: 0 0 8px fffff; /* Subtle light orange glow */
  }
`;

interface AnimatedLinkProps {
  href: string;
  text: string;
  delay: number;
  hoveredPhrase: string | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
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
      transition: { duration: 0.1 }, // Duration for each letter
    },
  };

  const containerVariants = {
    hidden: { opacity: hoveredPhrase && hoveredPhrase !== text ? 0 : 1 }, // Hide others if not hovered
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // Stagger between each letter
        delayChildren: delay, // Delay for each phrase
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

export default function Programs() {
  const [hoveredPhrase, setHoveredPhrase] = useState<string | null>(null);

  const textSequence = [
    { href: "/programs#boxing-classes", text: "Boxing Classes", delay: 0 },
    {
      href: "/programs#strength-conditioning",
      text: "Strength & Conditioning",
      delay: 1,
    },
    {
      href: "/programs#personal-training",
      text: "Personal Training",
      delay: 2.5,
    },
  ];

  const sequenceContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25, // Time between each phrase
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the black bars (top and bottom)
  const barVariants = {
    hidden: { height: 0 },
    visible: {
      height: "10%", // You can adjust this height
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Inject CSS for the subtle glow effect */}
      <style jsx global>
        {subtleGlow}
      </style>

      <Section bgColor="black">
        <div className="relative flex items-center justify-center h-screen">
          {hoveredPhrase && (
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={hoveredPhrase}
            >
              <video
                src={`/videos/${hoveredPhrase}.mp4`}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
            </motion.div>
          )}

          {/* Black Bars (Top and Bottom) */}
          {hoveredPhrase && (
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
          )}

          {/* Text Content */}
          <div className="relative z-20 text-center px-2 md:px-4 lg:px-6">
            <motion.div
              className="text-gray-500 text-4xl md:text-3xl lg:text-5xl font-bold leading-relaxed md:leading-loose lg:leading-loose tracking-tight"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
              variants={sequenceContainerVariants}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "loop",
              }}
            >
              {/* First Phrase */}
              Master the basics with our{" "}
              <Link href={textSequence[0].href}>
                <AnimatedLink
                  href={textSequence[0].href}
                  text={textSequence[0].text}
                  delay={textSequence[0].delay}
                  hoveredPhrase={hoveredPhrase}
                  onHoverStart={() => setHoveredPhrase("Wrapping")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>
              . Build strength in our{" "}
              <Link href={textSequence[1].href}>
                <AnimatedLink
                  href={textSequence[1].href}
                  text={textSequence[1].text}
                  delay={textSequence[1].delay}
                  hoveredPhrase={hoveredPhrase}
                  onHoverStart={() => setHoveredPhrase("WeightTraining")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>{" "}
              sessions. Get personalized coaching with our{" "}
              <Link href={textSequence[2].href}>
                <AnimatedLink
                  href={textSequence[2].href}
                  text={textSequence[2].text}
                  delay={textSequence[2].delay}
                  hoveredPhrase={hoveredPhrase}
                  onHoverStart={() => setHoveredPhrase("resting")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>
              .
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
