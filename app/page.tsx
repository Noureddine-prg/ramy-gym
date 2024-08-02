import Hero from "./containers/Hero";
import About from "./containers/About";
import FAQ from "./containers/FAQ";
import Trainers from "./containers/Trainers";
import Programs from "./containers/Programs";
import Gallery from "./containers/Gallery";

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed video background */}
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
        <About />
        <Trainers />
        <Programs />
        <FAQ />
        {/* <Gallery /> */}
      </div>
    </div>
  );
}
