'use client';

import GalleryTab from '@/components/Gallery/GalleryTab';
import { Image as ImageType } from '@/types/types';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';

interface Props {
  images: ImageType[];
}

const Gallery = ({ images }: Props) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab image={image} key={image.id} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image fill src={image.url} alt="Image" className="object-cover object-center" />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
