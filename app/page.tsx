import Hero from "./containers/Hero";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Trainers from "./containers/Trainers";
import Training from "./containers/Training";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Trainers />
      <Training />
      <Schedule />
    </div>
  );
}
