import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/types/types';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

interface Props {
  image: ImageType;
}

const GalleryTab = ({ image }: Props) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <Image src={image.url} width={300} height={300} className="object-cover aspect-square rounded-md" alt={''} />
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
