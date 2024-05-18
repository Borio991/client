'use server';
import { type Product } from '@/types/types';
import qs from 'query-string';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: Url,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
      categoryId: query.categoryId,
    },
  });
  const response = await fetch(url, { cache: 'no-cache' });
  return response.json();
};
export default getProducts;
