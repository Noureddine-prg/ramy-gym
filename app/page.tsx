import Hero from "./containers/Hero";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Trainers from "./containers/Trainers";
import Programs from "./containers/Programs";
import Gallery from "./containers/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Trainers />
      <Programs />
      <Schedule />
    </div>
  );
}
