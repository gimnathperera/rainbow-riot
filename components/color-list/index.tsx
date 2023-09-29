import toast from 'react-hot-toast';
import { ActiveColorBox as ColorBox, InactiveColorBox } from '@/components/colorbox';
import { ColorInfo } from '@/types/uploader';
import { MaxPaletteSize } from '@/constants';
import { FC } from 'react';

type Props = {
  colorPalette: ColorInfo[] | null;
};

const ColorList: FC<Props> = ({ colorPalette }) => {
  const handleOnCopyToClipboard = (selectedColor: string): void => {
    navigator.clipboard.writeText(selectedColor ?? '');
    toast.success('Copied to clipboard');
  };

  const InactivePanel: FC = () => {
    const boxes = Array.from({ length: MaxPaletteSize }, (_, index) => (
      <InactiveColorBox key={index} />
    ));

    return <div className='flex flex-row justify-around flex-wrap gap-2'>{boxes}</div>;
  };

  const ActivePanel: FC = () => {
    const boxes = (colorPalette || [])
      .slice(0, MaxPaletteSize)
      .map((colorInfo, index) => (
        <ColorBox
          key={index}
          color={colorInfo.hex}
          handleOnCopyToClipboard={handleOnCopyToClipboard}
        />
      ));

    return <div className='flex flex-row justify-around flex-wrap gap-2'>{boxes}</div>;
  };

  return (
    <div className='pt-14'>
      {colorPalette && colorPalette?.length > 0 ? <ActivePanel /> : <InactivePanel />}
    </div>
  );
};

export default ColorList;
