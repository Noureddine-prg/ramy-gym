import Section from "../components/Section";

const Hero = () => {
  return (
    <Section>
      <video
        autoPlay
        loop
        muted
        className="relative  w-full h-screen object-cover"
      >
        <source src="/videos/boxerbag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Section>
  );
};

export default Hero;
