import { Section } from "../components/Section";
import { ButtonA } from "../components/Buttons";

const Hero = () => {
  return (
    <Section>
      <div
        className="relative w-full h-screen bg-cover bg-center bg-black bg-opacity-50 flex items-end justify-start pl-4 md:pl-12 pb-14"
        style={{
          backgroundImage: "url('')",
        }}
      >
        <div className="px-3">
          <div className="text-white text-lg md:text-6xl font-bold leading-snug">
            FITBOX BROOKLYN
          </div>
          <div className="text-white text-base md:text-4xl font-normal mt-5">
            RISE UP FAST
          </div>
          <div className="border- mt-4 md:mt-10 flex w-full md:w-2/6 align-bottom">
            <ButtonA>Join Now</ButtonA>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
