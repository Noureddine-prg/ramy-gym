"use client";

import Link from "next/link";
import { Section } from "../components/Section";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  text: string;
  delay: number; // Delay for each phrase in sequence
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, text, delay }) => {
  const letters = Array.from(text);

  const letterVariants = {
    hidden: { opacity: 0.4, color: "black" },
    visible: {
      opacity: 1,
      color: "white",
      transition: { duration: 0.05 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger between each letter
        delayChildren: delay, // Delay before starting each phrase
      },
    },
  };

  return (
    <motion.span
      className="inline-block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Programs() {
  // Control the sequence of the phrases
  const textSequence = [
    { href: "/programs#boxing-classes", text: "Boxing Classes", delay: 0 },
    {
      href: "/programs#strength-conditioning",
      text: "Strength & Conditioning",
      delay: 2, // Delay second phrase to wait until first finishes
    },
    {
      href: "/programs#personal-training",
      text: "Personal Training",
      delay: 4, // Delay third phrase to wait until second finishes
    },
  ];

  const sequenceContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity, // Loop forever
        repeatDelay: 2, // Delay before restarting the whole sequence
        staggerChildren: 1.5, // Time between each phrase
      },
    },
  };

  return (
    <Section bgColor="black">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center px-4 md:px-8 lg:px-16">
          {/* Animated Block of Text */}
          <motion.p
            className="text-gray-500 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={sequenceContainerVariants}
          >
            Discover our{" "}
            <Link href={textSequence[0].href}>
              <AnimatedLink
                href={textSequence[0].href}
                text={textSequence[0].text}
                delay={textSequence[0].delay}
              />
            </Link>
            , designed to teach the fundamentals of boxing and take your skills
            to the next level. Explore{" "}
            <Link href={textSequence[1].href}>
              <AnimatedLink
                href={textSequence[1].href}
                text={textSequence[1].text}
                delay={textSequence[1].delay}
              />
            </Link>
            , where you can build power and endurance with expertly crafted
            sessions. Benefit from{" "}
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
  );
}
