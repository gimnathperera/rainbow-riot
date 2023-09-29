/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, useState } from 'react';
import { extractColors } from 'extract-colors';
import UploadIcon from '@/components/icons/upload';
import { ColorInfo } from '@/types/uploader';

type Props = {
  onImageSelect: (colors: ColorInfo[]) => void;
};

const Uploader: FC<Props> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event): Promise<void> => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        const img = new Image();

        img.onload = async (): Promise<void> => {
          const result = await extractColors(img);
          onImageSelect(result);
        };

        img.src = event.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col p-1 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-5 hover:bg-gray-100'
      >
        {selectedImage ? (
          <div className='w-full h-full overflow-hidden'>
            <img src={selectedImage} alt='Selected' className='object-cover w-full h-full' />
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <div className='animate-bounce'>
              <UploadIcon />
            </div>
            <p className='mb-2 text-sm'>
              <span className='font-semibold'>Click to upload</span> or drag and drop
            </p>
            <p className='text-xs'>SVG, PNG, or JPG</p>
          </div>
        )}

        <input id='dropzone-file' type='file' className='hidden' onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default Uploader;
