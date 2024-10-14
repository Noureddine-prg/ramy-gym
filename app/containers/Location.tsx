"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";

export default function Location() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bounceArrow = {
    visible: {
      opacity: 1,
      y: [0, 15, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const hoverTextVariant = {
    initial: { color: "gray" },
    hover: {
      color: "white",
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const handleScrollToPrograms = () => {
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Section bgColor="transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-screen flex flex-col items-center justify-center text-center space-y-6 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg"
        >
          <motion.div
            variants={fadeInVariant}
            className="bg-black p-16 rounded-lg flex flex-col space-y-8"
          >
            <motion.div
              variants={fadeInVariant}
              className="text-white text-4xl md:text-6xl font-bold leading-loose"
            >
              8415 4th Ave, Brooklyn, NY
            </motion.div>

            <motion.div
              variants={fadeInVariant}
              className="text-gray-300 text-2xl md:text-4xl leading-loose"
            >
              <p>Mon - Fri: 9 AM - 7 PM</p>
              <p>Appointment Only</p>
            </motion.div>

            <motion.div variants={fadeInVariant}>
              <a
                href="/appointment"
                className="px-8 py-4 text-lg md:text-xl bg-black text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Book an Appointment
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={bounceArrow}
            initial="hidden"
            animate="visible"
            className="absolute bottom-12 cursor-pointer flex flex-col items-center"
            onClick={handleScrollToPrograms}
            whileHover="hover"
          >
            <motion.span
              className="text-gray-400 text-sm"
              variants={hoverTextVariant}
              initial="initial"
              animate="visible"
            >
              Programs
            </motion.span>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
