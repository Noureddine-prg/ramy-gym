import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useInView from "../helper/useInView";
import useWindowDimensions from "../helper/useWindowDimensions";

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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isActiveCard, handleMouseEnter, handleMouseLeave } = useWorkoutCard(videoRef, cardRef)

  return (
    <div
      ref={cardRef}
      className="2xl:max-h-none max-h-96 relative rounded-lg shadow-lg overflow-hidden bg-black flex-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative pointer-events-none ${isActiveCard ? "grayscale-0" : "grayscale"
          } transition-all duration-500`}
      >
        {videoLink ? (
          <video
            muted
            loop
            controls
            webkit-playsinline="true"
            playsInline
            ref={videoRef}
            style={{pointerEvents: "none"}}
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
        className={`p-6 absolute bottom-16 left-0 w-full h-60 opacity-75 bg-black text-white transition-transform duration-500 ${isActiveCard ? "transform translate-y-20" : "transform translate-y-full"
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

function useWorkoutCard(videoRef: any, cardRef: any) {
  const breakpoint = 1536 // this breakpoint is determined by tailwinds 2xl breakpoint
  // in px used in the workoutcard's container

  const inView = useInView(cardRef, { threshold: 0, rootMargin: "-50% 0px -50% 0px" });
  const windowDimensions = useWindowDimensions();

  const [isActiveCard, setIsActiveCard] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsActiveCard(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsActiveCard(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (typeof windowDimensions === "undefined") return;

    if (windowDimensions.width > breakpoint) setIsActiveCard(false);

    if (inView && videoRef.current && windowDimensions.width < breakpoint) {
      videoRef.current.play()
      setIsActiveCard(true);
    } else if (!inView && videoRef.current && windowDimensions.width < breakpoint) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsActiveCard(false);
    }
  }, [inView, windowDimensions, videoRef]);

  return { isActiveCard, handleMouseEnter, handleMouseLeave }
}

export default WorkoutCard;
