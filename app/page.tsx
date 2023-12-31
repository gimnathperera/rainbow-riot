'use client';
import { FC, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from '@/components/hero';
import Uploader from '@/components/uploader';
import ColorList from '@/components/color-list';
import { ColorInfo } from '@/types/uploader';

const Home: FC = () => {
  const [colorPalette, setColorPalette] = useState<ColorInfo[] | null>(null);

  const onImageSelect = (colors: ColorInfo[]): void => {
    setColorPalette(colors);
  };

  return (
    <section>
      <Hero />
      <div className='hero lg:pt-18 pt-12'>
        <div className='hero-content text-center'>
          <div className='max-w-2xl'>
            <Uploader onImageSelect={onImageSelect} />
            <ColorList colorPalette={colorPalette} />
          </div>
        </div>
      </div>

      <Toaster position='bottom-left' reverseOrder={false} />
    </section>
  );
};

export default Home;
