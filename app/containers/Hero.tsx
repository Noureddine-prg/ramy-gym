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
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 saturate-200 flex flex-col items-center justify-center">
          <div className="text-white text-7xl font-bold">FITBOX</div>

          <div className="text-center text-white mt-8 p-6 rounded-xl ">
            <h1 className="text-2xl font-bold ">Monday - Friday</h1>
            <p className="text-2xl ">9am - 6pm</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
