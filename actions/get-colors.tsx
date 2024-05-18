'use server';
import { type Color } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
const getColors = async (): Promise<Color[]> => {
  const response = await fetch(Url, { cache: 'no-cache' });
  return response.json();
};
export default getColors;
