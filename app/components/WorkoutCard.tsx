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
      videoRef.current.currentTime = 0;
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
      className="2xl:max-h-none max-h-96 relative rounded-lg shadow-lg overflow-hidden bg-black flex-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative pointer-events-none ${
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

      <div
        className={`p-6 absolute bottom-16 left-0 w-full h-60 opacity-75 bg-black text-white transition-transform duration-500 ${
          isHovered ? "transform translate-y-20" : "transform translate-y-full"
        }`}
      >
        <h2 className="text-xl font-bold text-white w-full mb-2">
          {headerText}
        </h2>
        <p className="text-gray-300">{otherText}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
