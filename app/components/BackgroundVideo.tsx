import { motion } from "framer-motion";

interface BackgroundVideoProps {
  hoveredPhrase: string | null;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ hoveredPhrase }) => {
  return (
    hoveredPhrase && (
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={hoveredPhrase}
      >
        <video
          src={`/videos/${hoveredPhrase}.mp4`}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      </motion.div>
    )
  );
};

export default BackgroundVideo;
