"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "../components/Section";
import Image from "next/image"; // Import Next.js Image component

export default function Location() {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <Section bgColor="black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        className="section-content h-screen snap-center flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center text-left w-full h-full">
          {/* Left-hand side Image Box  */}
          <div className="w-full md:w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/gymsetup.jpg"
              alt="Coach Image"
              className="object-cover"
              layout="fill"
              priority
            />
          </div>

          {/* Right-hand side Text Content  */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-between items-start p-6 space-y-6">
            {/* Header */}
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Business Hours
              </h3>
              <p className="text-gray-400 text-lg">
                Mon - Fri: 9:00 AM - 7:00 PM <br />
                Appointment Only
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-lg">
                8415 4th Ave, Brooklyn, NY 11209
              </p>
            </div>

            {/* Appointment Link */}
            <div className="flex-grow">
              <Link href="/appointment">Book Now</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
