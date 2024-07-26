import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonA: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="w-48 bg-white border border-black text-black bg-whi px-6 py-2 font-semibold">
      {children}
    </button>
  );
};

export const ButtonB: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="mt-5 bg-white p-2 border rounded-xl">{children}</button>
  );
};

export const ButtonC: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="relative border-white text-lg transition-colors duration-400 transform-none rounded-md mx-2 py-6 px-8  text-darkblue overflow-hidden shadow-none hover:text-offwhite before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-3 before:border-solid before:border-darkblue before:transition-opacity before:duration-300 hover:before:opacity-0 after:absolute after:top-0 after:left-0 after:w-[200px] after:h-[200px] after:bg-[#003366] after:border-none after:rounded-full after:opacity-0 after:z-[-1] after:transform after:translate-x-[-10px] after:translate-y-[-70px] after:scale-[0.1] after:transition-transform after:duration-300 after:transition-opacity after:duration-300 after:transition-bg-color after:duration-300 hover:after:opacity-100 hover:after:transform-origin hover:after:scale-100 hover:after:translate-[-10px] hover:after:translate-[-70px]">
      {children}
    </button>
  );
};

export const ButtonD: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <></>
    </>
  );
};

export default ButtonA;
