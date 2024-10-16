"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import ScrollArrow from "../components/ScrollArrow";

export default function Location() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Section bgColor="transparent">
      <div className="h-screen flex flex-row">
        {/* Left-hand side - 40% width with vertical padding */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="w-2/5 h-full bg-black flex  p-3"
        >
          <motion.div className="text-white text-3xl  md:text-5xl font-bold text-left">
            Train with a Professional Boxer
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-3/5 h-full flex items-center justify-center p-4"
        >
          <motion.div
            variants={fadeInVariant}
            className="bg-gray-900 rounded-lg flex flex-col space-y-6 w-full max-w-xl p-8"
          >
            {/* Location */}
            <motion.div
              variants={fadeInVariant}
              className="text-white text-3xl md:text-5xl font-bold leading-relaxed text-center"
            >
              8415 4th Ave, Brooklyn, NY
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={fadeInVariant}
              className="text-gray-300 text-xl md:text-3xl leading-relaxed text-center"
            >
              <p>Mon - Fri: 9 AM - 7 PM</p>
              <p>Appointment Only</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInVariant} className="text-center">
              <a
                href="/appointment"
                className="px-8 py-4 text-lg md:text-xl bg-black text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Book an Appointment
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-12 w-full flex justify-center">
        <ScrollArrow section="programs" labelText="Programs" />
      </div>
    </Section>
  );
}
