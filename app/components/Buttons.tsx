import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonVariationA: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-white text-black border-none px-2 py-2 text-lg cursor-pointer rounded-3xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white">
      {children}
    </button>
  );
};

export const ButtonVariationB: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="relative border-none text-lg transition-colors duration-500 transform-none rounded-md mx-2 py-6 px-8 bg-transparent text-darkblue hover:shadow-none hover:bg-transparent hover:text-offwhite before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-3 before:border-solid before:border-darkblue before:transition-opacity before:duration-300 hover:before:opacity-0 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:border-3 after:border-solid after:border-offwhite after:opacity-0 after:z-[-1] after:transform after:scale-x-110 after:scale-y-130 after:transition-transform after:duration-300 after:transition-opacity after:duration-300 hover:after:opacity-100 hover:after:transform hover:after:scale-x-100 hover:after:scale-y-100">
      {children}
    </button>
  );
};

export const ButtonVariationC: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="relative border-white text-lg transition-colors duration-400 transform-none rounded-md mx-2 py-6 px-8  text-darkblue overflow-hidden shadow-none hover:text-offwhite before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-3 before:border-solid before:border-darkblue before:transition-opacity before:duration-300 hover:before:opacity-0 after:absolute after:top-0 after:left-0 after:w-[200px] after:h-[200px] after:bg-[#003366] after:border-none after:rounded-full after:opacity-0 after:z-[-1] after:transform after:translate-x-[-10px] after:translate-y-[-70px] after:scale-[0.1] after:transition-transform after:duration-300 after:transition-opacity after:duration-300 after:transition-bg-color after:duration-300 hover:after:opacity-100 hover:after:transform-origin hover:after:scale-100 hover:after:translate-[-10px] hover:after:translate-[-70px]">
      {children}
    </button>
  );
};

export const ButtonVariationD: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <></>
    </>
  );
};

export default ButtonVariationA;
