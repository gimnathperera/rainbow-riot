"use client";
import { useState, useEffect } from "react";
// import AnimatedCursor from "react-animated-cursor";
import Uploader from "../uploader";

const Colors = [
  "#FF5117",
  "#FF8E00",
  "#F9D81E",
  "#97CC37",
  "#8177FA",
  "#00C0E9",
  "#C902E6",
];

const Hero = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const cycleColors = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % Colors.length);
    };

    const colorInterval = setInterval(cycleColors, 3000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  const currentColor = Colors[currentColorIndex];

  return (
    <div className="hero lg:pt-24 pt-12">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold ">
            Your Images, Your{" "}
            <span className="animate-fadeOut" style={{ color: currentColor }}>
              Colors
            </span>
          </h1>
          <p className="py-6 text-xl">
            Transform your photos into beautiful color palettes with a single
            click. Create unique color palettes for your art and design
            endeavors.
          </p>

          <Uploader />

          <div className="pt-16">
            <div className="flex flex-row justify-around">
              <div className="bg-transparent p-1 w-12 h-12 lg:w-28 lg:h-28 rounded-lg shadow-xl cursor-pointer border-2 border-gray-300 border-dashed">
                <div className="btn btn-ghost flex flex-col justify-end h-full bg-red-300 rounded-lg p-0">
                  <div className="p-2 rounded-b-lg rounded-none w-full text-white text-xs">
                    #F42185
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AnimatedCursor /> */}
    </div>
  );
};

export default Hero;
