import { FC } from 'react';
import GithubIcon from '../icons/github';
import { siteConfig } from '@/config/site';

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <div className='navbar flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto'>
      <div className='flex-1'>
        <div className='flex cursor-pointer text-2xl font-semibold'>
          🌈 Rainbow <span className='text-[#4ED1A5] ml-1'> Riot</span>
        </div>
      </div>
      <div className='flex-none'>
        <a href={siteConfig.links.repository}>
          <label className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <GithubIcon />
            </div>
          </label>
        </a>
      </div>
    </div>
  );
};

export default Header;
