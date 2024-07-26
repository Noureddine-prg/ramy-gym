import Hero from "./containers/Hero";
import About from "./containers/About";
import FAQ from "./containers/FAQ";
import Trainers from "./containers/Trainers";
import Programs from "./containers/Programs";
import Gallery from "./containers/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Trainers />
      {/* <Programs /> */}
      <FAQ />
      {/* <Gallery /> */}
    </div>
  );
}
