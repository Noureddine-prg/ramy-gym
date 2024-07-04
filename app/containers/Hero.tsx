import Section from "../components/Section";

const Hero = () => {
  return (
    <Section>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/boxerbag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0  bg-black opacity-70 z-0">Hero</div>
    </Section>
  );
};

export default Hero;
