'use server';
import { Product } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' });
  return response.json();
};
export default getProduct;
