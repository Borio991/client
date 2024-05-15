'use server';
import { type Category } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(Url, { cache: 'no-cache' });
  return response.json();
};
export default getCategories;
