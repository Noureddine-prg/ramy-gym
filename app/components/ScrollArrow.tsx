import { motion } from "framer-motion";

interface ScrollArrowProps {
  section: string;
  labelText: string;
}

export default function ScrollArrow({ section, labelText }: ScrollArrowProps) {
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

  const handleScrollToSection = () => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={bounceArrow}
      initial="hidden"
      animate="visible"
      className="absolute bottom-12 cursor-pointer flex flex-col items-center"
      onClick={handleScrollToSection}
      whileHover="hover"
    >
      {/* Text Above Arrow */}
      <motion.span
        className="text-gray-400 text-sm"
        variants={hoverTextVariant}
        initial="initial"
        animate="visible"
      >
        {labelText}
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
