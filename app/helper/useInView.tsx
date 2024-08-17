import { useState, useEffect } from 'react';

export default function useInView<T extends HTMLElement>(
  ref: React.RefObject<T>, options?: IntersectionObserverInit) {

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref]);
  return inView;
}

/*
const videoRef = useRef<HTMLVideoElement | null>(null);
const cardRef = useRef<HTMLDivElement | null>(null);
const [isInView, setIsInView] = useState(false);

useEffect(() => {
  const currentCardRef = cardRef.current;

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
    { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
  );

  if (currentCardRef) {
    observer.observe(currentCardRef);
  }

  return () => {
    if (currentCardRef) {
      observer.unobserve(currentCardRef);
    }
  };
}, []);
}
*/
