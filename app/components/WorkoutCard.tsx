import React, { useState, useRef } from "react";
import Image from "next/image";

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
      className="relative rounded-lg shadow-lg overflow-hidden bg-black m-4 max-w-sm flex-shrink-0 h-5/6"
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
            <Image
              src={imageLink}
              alt="N/A"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )
        )}
      </div>
      <h2 className="text-xl font-bold absolute top-4 left-4 text-white w-full p-2">
        {headerText}
      </h2>

      <div
        className={`p-4 absolute bottom-0 left-0 w-full h-1/4 opacity-75 bg-black text-white transition-transform duration-500 ${
          isHovered ? "transform translate-y-0" : "transform translate-y-full"
        }`}
      >
        {otherText && <p className="text-gray-300 mt-2">{otherText}</p>}
      </div>
    </div>
  );
};

export default WorkoutCard;
