import { Section } from "../components/Section";
import AnimatedLinkComponent from "../components/AnimatedLinkComponent";
import BackgroundVideo from "../components/BackgroundVideo";
import BlackBars from "../components/BlackBars";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Main Programs Component
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
        staggerChildren: 0.25,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <Section bgColor="black">
      <div
        id="programs"
        className="relative flex items-center justify-center h-screen"
      >
        {/* Background Video */}
        <BackgroundVideo hoveredPhrase={hoveredPhrase} />

        {/* Black Bars */}
        <BlackBars hoveredPhrase={hoveredPhrase} />

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
              repeat: Infinity, //doesnt work
              repeatDelay: 2,
              repeatType: "loop",
            }}
          >
            Master the basics with our{" "}
            <Link href={textSequence[0].href}>
              <AnimatedLinkComponent
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
              <AnimatedLinkComponent
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
              <AnimatedLinkComponent
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
  );
}
