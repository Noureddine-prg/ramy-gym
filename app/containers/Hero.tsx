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
            <div className="text-white text-xl font mt-6 w-2/6 ">
              At FitBox, we offer a comprehensive boxing training program
              designed to help you master the best techniques while achieving
              your unique fitness goals.
            </div>
            <div className="mt-14 flex space-x-4  h-12 w-2/6">
              <button className="w-44 border border-black bg-white text-black px-6 py-3 rounded-md font-semibold">
                Make the change
              </button>
              <button className="w-44 border border-black bg-gray-800 text-white px-6 py-3 rounded-md font-semibold">
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
