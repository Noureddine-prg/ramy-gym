import Hero from "./containers/Hero";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Gallery from "./containers/Gallery";
import Training from "./containers/Training";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Training />
      <Schedule />
    </div>
  );
}
