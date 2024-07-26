"use client";
import { useState } from "react";

const Navbar = () => {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [hoverHamburger, setHoverHamburger] = useState(false);

  return (
    <nav className="py-4 px-10 flex items-center justify-between fixed top-0 z-50 w-full">
      <div className="flex justify-center items-center h-20 px-4">
        <div className="text-white font-bold text-2xl">Logo</div>
      </div>
      <ul className="flex list-none m-0 p-0 items-center hidden lg:flex">
        <li className="mx-5  no-underline font-bold text-lg text-white ">
          <a href="#about">About</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg ">
          <a href="#trainer">Trainer</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg ">
          <a href="#programs">Programs</a>
        </li>
        <li className="mx-5 text-white no-underline font-bold text-lg">
          <a href="#faq">FAQ</a>
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
          <div
            className="space-y-2 p-4 rounded-lg transition-colors duration-300
              cursor-pointer absolute z-50"
          >
            <span
              className={`block w-8 h-0.5 bg-white transition-transform duration-200  ${
                activeHamburger ? "translate-y-[10px] -rotate-45" : null
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 transition-all duration-200 ${
                hoverHamburger && !activeHamburger ? "w-8" : null
              } ${activeHamburger ? "bg-transparent" : "bg-white"}`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                hoverHamburger && !activeHamburger ? "w-8" : null
              } ${activeHamburger ? "w-8 -translate-y-[10px] rotate-45" : ""} ${
                !hoverHamburger && !activeHamburger ? "w-5" : null
              }`}
            ></span>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`lg:hidden flex absolute z-50 top-0 left-0 transition-transform duration-500 md:w-1/2 w-8/12 ${
          activeHamburger ? "transform-none" : "-translate-x-full"
        }`}
      >
        <ul className="bg-white flex flex-col p-5 h-screen w-full">
          <a href="#about" onClick={() => setActiveHamburger(false)}>
            About
          </a>
          <a href="#trainer" onClick={() => setActiveHamburger(false)}>
            Trainer
          </a>
          <a href="#programs" onClick={() => setActiveHamburger(false)}>
            Programs
          </a>
          <a href="#faq" onClick={() => setActiveHamburger(false)}>
            FAQ
          </a>
        </ul>
      </div>
      <div
        onClick={() => {
          setActiveHamburger(false);
        }}
        className={`absolute z-10 top-0 left-0 w-screen h-screen bg-black cursor-pointer transition-all duration-500 ${
          activeHamburger ? "opacity-25" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
