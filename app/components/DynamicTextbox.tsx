import React from "react";

interface BoxProps {
  image: string;
  text: string;
  header: string;
  setBackgroundImage: (image: string) => void;
  link?: string;
}

const DynamicTextbox: React.FC<BoxProps> = ({
  image,
  setBackgroundImage,
  header,
  text,
  link,
}) => {
  return (
    <div
      className="w-96 h-52 bg-transparent border-t-2 border-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black flex flex-col justify-between text-center text-white relative hover:cursor-pointer"
      onMouseEnter={() => setBackgroundImage(image)}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-lg font-bold mb-1">{header}</h1>
        <p className="text-sm">{text}</p>
      </div>

      <div className="absolute bottom-3 left-3 hidden group-hover:block">
        {link && (
          <a
            href={link}
            className="text-sm underline hover:text-blue-600 transition-all duration-500 ease-in-out"
          >
            Learn more
          </a>
        )}
      </div>
    </div>
  );
};

export default DynamicTextbox;
