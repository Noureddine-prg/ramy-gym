"use client";

import { Section } from "./styles/Global";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Gallery from "./containers/Gallery";
import Training from "./containers/Training";

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
