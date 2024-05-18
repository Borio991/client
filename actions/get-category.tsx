'use server';
import { Category } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' });
  return response.json();
};
export default getCategory;
