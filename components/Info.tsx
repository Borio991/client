'use client';
import Button from '@/components/ui/Button';
import Currency from '@/components/ui/Currency';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types/types';
import { ShoppingCart } from 'lucide-react';

interface Props {
  product: Product;
}

const Info = ({ product }: Props) => {
  const addItem = useCart((state) => state.addItem);
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-2xl text-gray-900 mt-3">
        <Currency price={product.price} />
      </p>
      <hr className="mt-4" />
      <div className="flex items-center gap-x-4 mt-2">
        <h3 className="text-black font-semibold">Size :</h3>
        <div>{product?.size.name}</div>
      </div>
      <div className="flex items-center gap-x-4 mt-2">
        <h3 className="text-black font-semibold">Color :</h3>
        <div className="w-6 h-6 rounded-full border-gray-600" style={{ backgroundColor: product.color.value }}></div>
      </div>
      <div className="flex items-center mt-10 gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={() => addItem(product)}>
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
