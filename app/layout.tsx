"use client";

import Navbar from "./components/Navbar";
import "./styles/Global.css";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="flex flex-col bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
