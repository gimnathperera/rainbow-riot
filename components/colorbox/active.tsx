import { FC } from 'react';

type Props = {
  color: string;
  handleOnCopyToClipboard: (color: string) => void;
};

const ColorBox: FC<Props> = ({ color, handleOnCopyToClipboard }) => {
  return (
    <div
      className='bg-transparent p-1 w-12 h-12 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-lg shadow-xl border-2 border-gray-300 border-dashed'
      onClick={(): void => {
        handleOnCopyToClipboard(color);
      }}
    >
      <div
        className='transform active:scale-y-75 transition-transform cursor-pointer flex flex-col justify-end h-full rounded-lg p-0'
        style={{
          backgroundColor: color,
        }}
      >
        <p className='p-2 rounded-b-lg rounded-none w-full text-white text-xs md:text-sm hidden md:block'>
          {color}
        </p>
      </div>
    </div>
  );
};

export default ColorBox;
