"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import { motion } from "framer-motion";

// Define CSS pulse effect for glowing text with light orange glow
const subtleGlow = `
  .glow {
    text-shadow: 0 0 8px 0; /* Subtle light orange glow */
  }
`;

interface AnimatedLinkProps {
  href: string;
  text: string;
  delay: number;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, text, delay }) => {
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
      animate="visible"
      exit="hidden"
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
  const textSequence = [
    { href: "/programs#boxing-classes", text: "Boxing Classes", delay: 0 },
    {
      href: "/programs#strength-conditioning",
      text: "Strength & Conditioning",
      delay: 2.5,
    },
    {
      href: "/programs#personal-training",
      text: "Personal Training",
      delay: 5,
    },
  ];

  const sequenceContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1, // Time between each phrase
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
        <div className="flex items-center justify-center h-screen">
          <div className="text-center px-4 md:px-8 lg:px-16">
            <motion.p
              className="text-gray-500 text-3xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial="hidden"
              animate="visible"
              variants={sequenceContainerVariants}
              transition={{
                repeat: Infinity, // Ensure repeat of the animation
                repeatDelay: 2,
                repeatType: "loop",
              }}
              key={Date.now()} // force animation restart doesnt work. need to figure out why
            >
              {/* First Phrase */}
              Discover our{" "}
              <Link href={textSequence[0].href}>
                <AnimatedLink
                  href={textSequence[0].href}
                  text={textSequence[0].text}
                  delay={textSequence[0].delay}
                />
              </Link>
              , designed to teach the fundamentals of boxing and take your
              skills to the next level. Explore {/* Second Phrase */}
              <Link href={textSequence[1].href}>
                <AnimatedLink
                  href={textSequence[1].href}
                  text={textSequence[1].text}
                  delay={textSequence[1].delay}
                />
              </Link>
              where you can build power and endurance with expertly crafted
              sessions. Benefit from {/* Third Phrase */}
              <Link href={textSequence[2].href}>
                <AnimatedLink
                  href={textSequence[2].href}
                  text={textSequence[2].text}
                  delay={textSequence[2].delay}
                />
              </Link>
              , with one-on-one guidance from our expert trainers.
            </motion.p>
          </div>
        </div>
      </Section>
    </>
  );
}
