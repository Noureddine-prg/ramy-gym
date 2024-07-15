"use client";

import Image from "next/image";
import { useState } from "react";

interface CardProps {
  image: string;
}

const ImageCard: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative h-[300px] w-[300px] flex justify-center ">
      <Image
        src={image}
        alt={image}
        className="rounded-lg"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageCard;
