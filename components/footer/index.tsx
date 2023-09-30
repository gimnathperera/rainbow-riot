import { siteConfig } from '@/config/site';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <footer className='footer footer-center p-4 text-base-content pt-12'>
      <aside>
        <p>
          Made with 💖 by{' '}
          <a href={siteConfig.links.github} className='font-semibold'>
            Gimnath
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
