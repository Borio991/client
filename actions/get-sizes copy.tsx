'use server';
import { type Size } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(Url, { cache: 'no-cache' });
  return response.json();
};
export default getSizes;
