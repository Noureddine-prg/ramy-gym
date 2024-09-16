"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [hoverHamburger, setHoverHamburger] = useState(false);

  return (
    <nav className="py-4 px-4 sm:px-10 flex items-center justify-between fixed top-0 z-50 w-full">
      <div className="flex justify-center items-center h-20 px-4">
        <Link href="/">
          <div className="text-white font-bold text-2xl">FitBox Brooklyn</div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="flex list-none m-0 p-0 items-center hidden lg:flex">
        <li className="mx-5 no-underline font-bold text-lg text-white">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg">
          <Link href="/trainer">Trainer</Link>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg">
          <Link href="/programs">Programs</Link>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg">
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex justify-between py-3">
        <div
          onClick={() => {
            setActiveHamburger(!activeHamburger);
          }}
          onMouseEnter={() => setHoverHamburger(true)}
          onMouseLeave={() => setHoverHamburger(false)}
          className="w-16 h-[54px] flex relative"
        >
          <div className="space-y-2 p-4 rounded-lg transition-colors duration-300 cursor-pointer absolute z-50">
            <span
              className={`block w-8 h-0.5 bg-white transition-transform duration-200 ${
                activeHamburger ? "translate-y-[10px] -rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 transition-all duration-200 ${
                hoverHamburger && !activeHamburger ? "w-8" : ""
              } ${activeHamburger ? "bg-transparent" : "bg-white"}`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                hoverHamburger && !activeHamburger ? "w-8" : ""
              } ${activeHamburger ? "w-8 -translate-y-[10px] rotate-45" : ""} ${
                !hoverHamburger && !activeHamburger ? "w-5" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden flex absolute z-50 top-0 left-0 transition-transform duration-500 md:w-1/2 w-full bg-black ${
          activeHamburger ? "transform-none" : "-translate-x-full"
        }`}
      >
        <ul className="bg-black flex flex-col p-5 h-screen w-full">
          <li className="mb-4 text-white font-bold text-lg">
            <Link href="/about" onClick={() => setActiveHamburger(false)}>
              About
            </Link>
          </li>
          <li className="mb-4 text-white font-bold text-lg">
            <Link href="/trainer" onClick={() => setActiveHamburger(false)}>
              Trainer
            </Link>
          </li>
          <li className="mb-4 text-white font-bold text-lg">
            <Link href="/programs" onClick={() => setActiveHamburger(false)}>
              Programs
            </Link>
          </li>
          <li className="mb-4 text-white font-bold text-lg">
            <Link href="/faq" onClick={() => setActiveHamburger(false)}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Overlay when Sidebar is Active */}
      <div
        onClick={() => setActiveHamburger(false)}
        className={`absolute z-40 top-0 left-0 w-screen h-screen bg-black cursor-pointer transition-opacity duration-500 ${
          activeHamburger ? "opacity-25" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
