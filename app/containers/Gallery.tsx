import { HalfSection } from "../components/Section";
import ImageCard from "../components/ImageCard";

const Gallery = () => {
  const images = [
    "/images/Gloves.jpg",
    "/images/PullupWorkout.jpg",
    "/images/Ropes.jpg",
    "/images/Speedbag.jpg",
    "/images/WeightLifting.jpg",
  ];

  return (
    <HalfSection>
      <div className="absolute left-0 flex gap-4">
        {[...images, ...images].map((item, index) => (
          <ImageCard image={item} key={index} />
        ))}
      </div>
    </HalfSection>
  );
};

export default Gallery;
