"use client";

import Image from "next/image";
import { useState } from "react";

interface CardProps {
  image: string;
}

const ImageCard: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="relative overflow-hidden h-[330px] min-w-[330px] flex justify-center rounded-lg">
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default ImageCard;
