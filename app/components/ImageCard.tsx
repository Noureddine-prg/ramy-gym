"use client";

import Image from "next/image";
import { useState } from "react";

interface CardProps {
  image: string;
}

const ImageCard: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative h-[250px] w-[350px] flex justify-center ">
      <Image
        src={image}
        alt={image}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageCard;
