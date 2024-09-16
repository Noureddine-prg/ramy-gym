import Hero from "./containers/Hero";
import Content from "./containers/Content";

export default function Home() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/boxerbag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
        <Hero />

        <div className="bg-opacity-70 bg-black bg-opacity-60 backdrop-blur-lg">
          <Content />
        </div>
      </div>
    </div>
  );
}
