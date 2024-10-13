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
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  text,
  delay,
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
    hidden: { opacity: 1 },
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
      whileInView="visible" // Start the animation when the text comes into view
      exit="hidden"
      viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is in view
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-2">
          {" "}
          {/* Add spacing between words */}
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block glow" // Apply glow to letters
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
        duration: 0.8, // Duration of the easing in effect
        ease: "easeInOut", // Ease in and ease out effect
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5, // Smooth transition out
        ease: "easeInOut", // Easing out
      },
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
          {/* Background Video */}
          {hoveredPhrase && (
            <div className="absolute inset-0 z-0">
              <video
                src={`/videos/${hoveredPhrase}.mp4`} // Adjust video path based on phrase
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>{" "}
              {/* Gray overlay */}
            </div>
          )}

          {/* Text Content */}
          <div className="relative z-10 text-center px-4 md:px-8 lg:px-16">
            <motion.div
              className="text-gray-500 text-3xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial="hidden"
              whileInView="visible" // Start animation when in view
              exit="exit"
              viewport={{ once: false, amount: 0.3 }} // Start when 30% is in view
              variants={sequenceContainerVariants}
              transition={{
                repeat: Infinity, // Repeat the animation
                repeatDelay: 2,
                repeatType: "loop",
              }}
            >
              {/* First Phrase */}
              Discover our{" "}
              <Link href={textSequence[0].href}>
                <AnimatedLink
                  href={textSequence[0].href}
                  text={textSequence[0].text}
                  delay={textSequence[0].delay}
                  onHoverStart={() => setHoveredPhrase("Wrapping")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>
              , designed to teach the fundamentals of boxing and take your
              skills to the next level. Explore {/* Second Phrase */}
              <Link href={textSequence[1].href}>
                <AnimatedLink
                  href={textSequence[1].href}
                  text={textSequence[1].text}
                  delay={textSequence[1].delay}
                  onHoverStart={() => setHoveredPhrase("Weights")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>
              where you can build power and endurance with expertly crafted
              sessions. Benefit from {/* Third Phrase */}
              <Link href={textSequence[2].href}>
                <AnimatedLink
                  href={textSequence[2].href}
                  text={textSequence[2].text}
                  delay={textSequence[2].delay}
                  onHoverStart={() => setHoveredPhrase("resting")}
                  onHoverEnd={() => setHoveredPhrase(null)}
                />
              </Link>
              , with one-on-one guidance from our expert trainers.
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
