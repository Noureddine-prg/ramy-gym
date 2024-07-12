"use client";

import Image from "next/image";
import { useState } from "react";

interface CardProps {
  image: string;
}

const ImageCard: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative h-[330px] min-w-[330px] flex justify-center ">
      <Image
        src={image}
        alt={image}
        className="rounded-xl"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageCard;
