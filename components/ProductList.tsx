import ProductCard from '@/components/ui/ProductCard';
import NoResult from '@/components/ui/noResult';
import { Product } from '@/types/types';
import React from 'react';

interface Props {
  title: string;
  items: Product[];
}

function ProductList({ title, items }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div>{items.length === 0 && <NoResult />}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
