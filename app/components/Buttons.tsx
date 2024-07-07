// components/Buttons.tsx
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

export default ButtonVariationA;
