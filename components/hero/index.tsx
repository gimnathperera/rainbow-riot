"use client";
import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const Hero = () => {
  const colors = ["#ff5733", "#65C3C8", "#5733ff", "#33a3ff", "#ff33a3"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const cycleColors = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const colorInterval = setInterval(cycleColors, 3000);

    return () => {
      clearInterval(colorInterval);
    };
  }, [colors.length]);

  const currentColor = colors[currentColorIndex];

  return (
    <div className="hero lg:pt-24 pt-12">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold ">
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <AnimatedCursor />
    </div>
  );
};

export default Hero;
