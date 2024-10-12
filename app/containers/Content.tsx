"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "../components/Section";
import Location from "./Location";
import Programs from "./Programs";

const Content = () => {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="overflow-y-scroll snap-y snap-mandatory">
      {/* Location Section */}
      <Location />

      {/* About Section */}
      <Section bgColor="black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="section-content snap-start flex items-center justify-center min-h-[70vh] my-8"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 mb-6">
              We believe in pushing limits, forging strength, and building
              champions. Learn more about our mission and how we build fighters
              from the ground up.
            </p>
            <Link href="/about"></Link>
          </div>
        </motion.div>
      </Section>

      {/* Programs Section */}
      <Programs />

      {/* Trainer Section */}
      <Section bgColor="black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="section-content snap-start flex flex-col items-center justify-center text-center min-h-[70vh] my-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Trainers
          </h2>
          <p className="text-gray-300 mb-6">
            Learn from the best. Our experienced trainers will push you to your
            limits.
          </p>
          <Link href="/trainers"></Link>
        </motion.div>
      </Section>
    </div>
  );
};

export default Content;
