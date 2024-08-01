import React, { useRef, useEffect, useState } from "react";

interface WorkoutCardProps {
  videoLink?: string;
  imageLink?: string;
  headerText: string;
  otherText?: string;
}

const WorkoutCardHorizontal: React.FC<WorkoutCardProps> = ({
  videoLink,
  imageLink,
  headerText,
  otherText,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            setIsInView(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-lg shadow-lg overflow-hidden bg-black m-4 w-full h-48 flex"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {videoLink ? (
          <video
            ref={videoRef}
            muted
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={videoLink} type="video/mp4" />
            Your browser does not support this video.
          </video>
        ) : (
          imageLink && (
            <img
              src={imageLink}
              alt="N/A"
              className="w-full h-full object-cover"
            />
          )
        )}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-1000 ${
            isInView ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-xl font-bold text-white">{headerText}</h2>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-1/2 transform transition-transform duration-1000 ${
          isInView ? "translate-y-0" : "translate-y-full"
        } bg-black bg-opacity-75 p-4 flex flex-col justify-center`}
      >
        <p className="text-gray-300">{otherText}</p>
      </div>
    </div>
  );
};

export default WorkoutCardHorizontal;
