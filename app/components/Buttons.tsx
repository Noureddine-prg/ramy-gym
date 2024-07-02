// components/Buttons.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonVariationA: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-black text-white border-none px-2 py-2 text-lg cursor-pointer rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
      {children}
    </button>
  );
};

export default ButtonVariationA;
