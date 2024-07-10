// components/WorkoutCard.tsx
import React, { useState, useRef } from "react";

interface WorkoutCardProps {
  videoLink?: string;
  imageLink?: string;
  headerText: string;
  otherText?: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  videoLink,
  imageLink,
  headerText,
  otherText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden bg-black m-4 max-w-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative ${
          isHovered ? "grayscale-0" : "grayscale"
        } transition-all duration-500`}
      >
        {videoLink ? (
          <video
            ref={videoRef}
            muted
            preload="auto"
            className="w-full h-full object-cover"
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 2;
              }
            }}
          >
            <source src={videoLink} type="video/mp4" />
            Your browser does not support this video.
          </video>
        ) : (
          imageLink && (
            <img
              src={imageLink}
              alt="N/A"
              className="w-full h-full object-cover rounded-lg"
            />
          )
        )}
      </div>
      <h2 className="text-3xl font-bold absolute top-4 left-4 text-white w-full">
        {headerText}
      </h2>
      {otherText && <p className="text-gray-700 mt-2">{otherText}</p>}
      <div
        className={` p-4 absolute bottom-0 left-0 w-full h-36 opacity-75 bg-black text-white transition-transform duration-500 ${
          isHovered ? "transform translate-y-0" : "transform translate-y-full"
        }`}
      >
        {otherText}
      </div>
    </div>
  );
};

export default WorkoutCard;
