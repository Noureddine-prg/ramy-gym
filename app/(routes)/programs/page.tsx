"use client";

import { Section } from "../../components/Section";
import DynamicTextbox from "../../components/DynamicTextbox";
import React, { useState } from "react";

const Programs = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  return (
    <div
      id="programs"
      className="relative w-full min-h-screen flex flex-col justify-center bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "black",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-7">
          <DynamicTextbox
            image="/images/Ropes.jpg"
            header="Box 1"
            text="This is Box 1"
            setBackgroundImage={setBackgroundImage}
          />

          <DynamicTextbox
            image="/images/WeightLifting.jpg"
            header="Box 2"
            text="This is Box 2"
            setBackgroundImage={setBackgroundImage}
          />

          <DynamicTextbox
            image="/images/Speedbag.jpg"
            header="Box 3"
            text="This is Box 3"
            setBackgroundImage={setBackgroundImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
