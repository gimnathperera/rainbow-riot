'use client';
import { HeroColors } from '@/constants';
import { useState, useEffect, FC } from 'react';
// import AnimatedCursor from "react-animated-cursor";

const Hero: FC = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const cycleColors = (): void => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % HeroColors.length);
    };

    const colorInterval = setInterval(cycleColors, 3000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  const currentColor = HeroColors[currentColorIndex];

  return (
    <div className='hero lg:pt-18 pt-12'>
      <div className='hero-content text-center'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl lg:text-5xl font-bold'>
            Your Images, Your{'  '}
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
              <span className='relative text-white animate-fadeOut' style={{ color: currentColor }}>
                Colors
              </span>
            </span>
          </h1>
          <p className='py-6 text-xl'>
            Transform your photos into beautiful color palettes with a single click. Create unique
            color palettes for your art and design endeavors.
          </p>
        </div>
      </div>
      {/* <AnimatedCursor /> */}
    </div>
  );
};

export default Hero;
