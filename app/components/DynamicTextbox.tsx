import React from "react";

interface BoxProps {
  image: string;
  text: string;
  header: string;
  setBackgroundImage: (image: string) => void;
}

const DynamicTextbox: React.FC<BoxProps> = ({
  image,
  setBackgroundImage,
  header,
  text,
}) => {
  return (
    <div
      className="w-96 h-52 bg-transparent border-t-2 border-white transition-all duration-500 hover:bg-white hover:text-black flex flex-col items-center justify-center text-center text-white"
      onMouseEnter={() => setBackgroundImage(image)}
    >
      <h1 className="text-lg font-bold mb-1">{header}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default DynamicTextbox;
