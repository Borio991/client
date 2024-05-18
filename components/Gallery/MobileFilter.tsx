'use client';
import Filter from '@/components/category/Filter';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import { Size, Color } from '@/types/types';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  sizes: Size[];
  colors: Color[];
}

function MobileFilter({ colors, sizes }: Props) {
  const [open, setOpen] = useState(false);
  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  return (
    <div className="lg:hidden">
      <Button className="flex items-center gap-x-2" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>
      <Dialog open={open} onClose={onClose} as="div" className="relative z-40">
        {/* <div className="fixed inset-0 flex z-40"></div> */}
        <div className="fixed inset-0 bg-black bg-opacity-25 z-50">
          <DialogPanel className="relative ml-auto w-full h-full max-w-xs py-6 flex flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} className="hover:cursor-pointer" />
            </div>
            <div className="p-4">
              <Filter data={sizes} name="Size" valueKey="sizeId" />
              <Filter data={colors} name="Color" valueKey="colorId" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default MobileFilter;
