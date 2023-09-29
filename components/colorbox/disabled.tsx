import { FC } from 'react';
import ProhibitIcon from '../icons/prohibit';

type Props = {
  color?: string;
};

const Disabled: FC<Props> = ({ color = '#E5E5E5' }) => {
  return (
    <div className='bg-transparent p-1 w-12 h-12 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-lg shadow-xl border-2 border-gray-300 border-dashed'>
      <div
        className='cursor-not-allowed flex flex-col justify-center items-center h-full rounded-lg p-0'
        style={{
          backgroundColor: color,
        }}
      >
        <ProhibitIcon />
      </div>
    </div>
  );
};
export default Disabled;
