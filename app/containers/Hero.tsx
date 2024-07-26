import ButtonA from "../components/Buttons";
import { Section } from "../components/Section";

const Hero = () => {
  return (
    <Section>
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/boxerbag.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-70 saturate-200 flex items-end justify-start md:pl-12 pb-12">
          <div className="px-3">
            <div className="text-white text-3xl md:text-7xl font-bold mt-4 leading-snug">
              FitBox Brooklyn
            </div>
            <div className="text-white text-xl md:text-5xl font-normal mt-2">
              Train With A Professional Boxer
            </div>
            <div className="text-white text-base md:text-2xl font mt-6 w-full md:w-1/3">
              At FitBox, we offer a comprehensive boxing training program
              designed to help you master the best techniques while achieving
              your unique fitness goals.
            </div>
            <div className="mt-8 md:mt-14 flex w-full md:w-2/6 align-bottom">
              <ButtonA>Book Session</ButtonA>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
