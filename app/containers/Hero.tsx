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
        <div className=" absolute top-0  w-full h-full bg-black bg-opacity-70 saturate-200 flex flex-col items-start justify-center pl-12">
          <div className="px-3">
            <div className="text-white text-7xl font-bold mt-4 leading-snug">
              FitBox Brooklyn
            </div>
            <div className="text-white text-5xl font-normal mt-2">
              Train With A Professional Boxer
            </div>
            <div className="text-white text-2xl font mt-6 w-1/3 ">
              At FitBox, we offer a comprehensive boxing training program
              designed to help you master the best techniques while achieving
              your unique fitness goals.
            </div>
            <div className="mt-14 flex w-2/6 align-bottom">
              <button className="w-48 bg-white border border-black text-black bg-whi px-6 py-2 font-semibold">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
