'use client';
import Currency from '@/components/ui/Currency';
import IconButton from '@/components/ui/IconButton';
import { Product } from '@/types/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: Product;
}

function ProductCard({ data }: Props) {
  return (
    <Link href={`/product/${data.id}`} className="bg-white p-3 space-y-4 border rounded-2xl group cursor-pointer w-64">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images[0].url}
          width={1200}
          height={1200}
          alt={data.name}
          className="rounded-md aspect-square object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton onClick={() => {}} icon={<Expand size={20} className="text-gray-600" />} />{' '}
            <IconButton onClick={() => {}} icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div>
        <p className="flex items-center justify-between">
          <Currency price={data.price} />
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
