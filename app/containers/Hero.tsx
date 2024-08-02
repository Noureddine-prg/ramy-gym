import { Section } from "../components/Section";
import { ButtonA } from "../components/Buttons";

const Hero = () => {
  return (
    <Section>
      <div className="relative w-full h-screen bg-black bg-opacity-50 flex items-end justify-start pl-4 md:pl-12 pb-14">
        <div className="px-3">
          <div className="text-white text-3xl md:text-7xl font-bold mt-4 leading-snug">
            FitBox Brooklyn
          </div>
          <div className="text-white text-xl md:text-5xl font-normal mt-2">
            Train With A Professional Boxer
          </div>
          <div className="text-white text-base md:text-2xl mt-6 w-full md:w-1/3">
            At FitBox, we offer a comprehensive boxing training program designed
            to help you master the best techniques while achieving your unique
            fitness goals.
          </div>
          <div className="mt-8 md:mt-14 flex w-full md:w-2/6 align-bottom">
            <ButtonA>Book Session</ButtonA>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
