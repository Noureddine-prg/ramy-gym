"use client";

import { HalfSection } from "../components/Section";
import ImageCard from "../components/ImageCard";
import useMeasure from "react-use-measure";
import { useMotionValue, motion, animate } from "framer-motion";
import { useEffect } from "react";

const Gallery = () => {
  const images = [
    "/images/Gloves.jpg",
    "/images/PullupWorkout.jpg",
    "/images/Ropes.jpg",
    "/images/Speedbag.jpg",
    "/images/WeightLifting.jpg",
    "/images/Ropes.jpg",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 5;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <HalfSection>
      <motion.div
        className="overflow-x-hidden absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((item, index) => (
          <ImageCard image={item} key={index} />
        ))}
      </motion.div>
    </HalfSection>
  );
};

export default Gallery;
